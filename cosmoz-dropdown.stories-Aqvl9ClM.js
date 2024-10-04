import { f as f$1, j, T, x } from './directive-helpers-4X-C2hHT.js';

let current;
let currentId = 0;
function setCurrent(state) {
    current = state;
}
function clear() {
    current = null;
    currentId = 0;
}
function notify() {
    return currentId++;
}

const phaseSymbol = Symbol("haunted.phase");
const hookSymbol = Symbol("haunted.hook");
const updateSymbol = Symbol("haunted.update");
const commitSymbol = Symbol("haunted.commit");
const effectsSymbol = Symbol("haunted.effects");
const layoutEffectsSymbol = Symbol("haunted.layoutEffects");
const contextEvent = "haunted.context";

class State {
    update;
    host;
    virtual;
    [hookSymbol];
    [effectsSymbol];
    [layoutEffectsSymbol];
    constructor(update, host) {
        this.update = update;
        this.host = host;
        this[hookSymbol] = new Map();
        this[effectsSymbol] = [];
        this[layoutEffectsSymbol] = [];
    }
    run(cb) {
        setCurrent(this);
        let res = cb();
        clear();
        return res;
    }
    _runEffects(phase) {
        let effects = this[phase];
        setCurrent(this);
        for (let effect of effects) {
            effect.call(this);
        }
        clear();
    }
    runEffects() {
        this._runEffects(effectsSymbol);
    }
    runLayoutEffects() {
        this._runEffects(layoutEffectsSymbol);
    }
    teardown() {
        let hooks = this[hookSymbol];
        hooks.forEach((hook) => {
            if (typeof hook.teardown === "function") {
                hook.teardown();
            }
        });
    }
}

const defer = Promise.resolve().then.bind(Promise.resolve());
function runner() {
    let tasks = [];
    let id;
    function runTasks() {
        id = null;
        let t = tasks;
        tasks = [];
        for (var i = 0, len = t.length; i < len; i++) {
            t[i]();
        }
    }
    return function (task) {
        tasks.push(task);
        if (id == null) {
            id = defer(runTasks);
        }
    };
}
const read = runner();
const write = runner();
class BaseScheduler {
    renderer;
    host;
    state;
    [phaseSymbol];
    _updateQueued;
    constructor(renderer, host) {
        this.renderer = renderer;
        this.host = host;
        this.state = new State(this.update.bind(this), host);
        this[phaseSymbol] = null;
        this._updateQueued = false;
    }
    update() {
        if (this._updateQueued)
            return;
        read(() => {
            let result = this.handlePhase(updateSymbol);
            write(() => {
                this.handlePhase(commitSymbol, result);
                write(() => {
                    this.handlePhase(effectsSymbol);
                });
            });
            this._updateQueued = false;
        });
        this._updateQueued = true;
    }
    handlePhase(phase, arg) {
        this[phaseSymbol] = phase;
        switch (phase) {
            case commitSymbol:
                this.commit(arg);
                this.runEffects(layoutEffectsSymbol);
                return;
            case updateSymbol:
                return this.render();
            case effectsSymbol:
                return this.runEffects(effectsSymbol);
        }
    }
    render() {
        return this.state.run(() => this.renderer.call(this.host, this.host));
    }
    runEffects(phase) {
        this.state._runEffects(phase);
    }
    teardown() {
        this.state.teardown();
    }
}

const toCamelCase$1 = (val = "") => val.replace(/-+([a-z])?/g, (_, char) => (char ? char.toUpperCase() : ""));
function makeComponent(render) {
    class Scheduler extends BaseScheduler {
        frag;
        renderResult;
        constructor(renderer, frag, host) {
            super(renderer, (host || frag));
            this.frag = frag;
        }
        commit(result) {
            this.renderResult = render(result, this.frag);
        }
    }
    function component(renderer, baseElementOrOptions, options) {
        const BaseElement = (options || baseElementOrOptions || {}).baseElement ||
            HTMLElement;
        const { observedAttributes = [], useShadowDOM = true, shadowRootInit = {}, styleSheets, } = options || baseElementOrOptions || {};
        class Element extends BaseElement {
            _scheduler;
            static get observedAttributes() {
                return renderer.observedAttributes || observedAttributes || [];
            }
            constructor() {
                super();
                if (useShadowDOM === false) {
                    this._scheduler = new Scheduler(renderer, this);
                }
                else {
                    const shadowRoot = this.attachShadow({
                        mode: "open",
                        ...shadowRootInit,
                    });
                    if (styleSheets)
                        shadowRoot.adoptedStyleSheets = styleSheets;
                    this._scheduler = new Scheduler(renderer, shadowRoot, this);
                }
            }
            connectedCallback() {
                this._scheduler.update();
                this._scheduler.renderResult?.setConnected(true);
            }
            disconnectedCallback() {
                this._scheduler.teardown();
                this._scheduler.renderResult?.setConnected(false);
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (oldValue === newValue) {
                    return;
                }
                let val = newValue === "" ? true : newValue;
                Reflect.set(this, toCamelCase$1(name), val);
            }
        }
        function reflectiveProp(initialValue) {
            let value = initialValue;
            let isSetup = false;
            return Object.freeze({
                enumerable: true,
                configurable: true,
                get() {
                    return value;
                },
                set(newValue) {
                    // Avoid scheduling update when prop value hasn't changed
                    if (isSetup && value === newValue)
                        return;
                    isSetup = true;
                    value = newValue;
                    if (this._scheduler) {
                        this._scheduler.update();
                    }
                },
            });
        }
        const proto = new Proxy(BaseElement.prototype, {
            getPrototypeOf(target) {
                return target;
            },
            set(target, key, value, receiver) {
                let desc;
                if (key in target) {
                    desc = Object.getOwnPropertyDescriptor(target, key);
                    if (desc && desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    }
                    Reflect.set(target, key, value, receiver);
                    return true;
                }
                if (typeof key === "symbol" || key[0] === "_") {
                    desc = {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value,
                    };
                }
                else {
                    desc = reflectiveProp(value);
                }
                Object.defineProperty(receiver, key, desc);
                if (desc.set) {
                    desc.set.call(receiver, value);
                }
                return true;
            },
        });
        Object.setPrototypeOf(Element.prototype, proto);
        return Element;
    }
    return component;
}

class Hook {
    id;
    state;
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
}
function use(Hook, ...args) {
    let id = notify();
    let hooks = current[hookSymbol];
    let hook = hooks.get(id);
    if (!hook) {
        hook = new Hook(id, current, ...args);
        hooks.set(id, hook);
    }
    return hook.update(...args);
}
function hook(Hook) {
    return use.bind(null, Hook);
}

function createEffect(setEffects) {
    return hook(class extends Hook {
        callback;
        lastValues;
        values;
        _teardown;
        constructor(id, state, ignored1, ignored2) {
            super(id, state);
            setEffects(state, this);
        }
        update(callback, values) {
            this.callback = callback;
            this.values = values;
        }
        call() {
            const hasChanged = !this.values || this.hasChanged();
            this.lastValues = this.values;
            if (hasChanged) {
                this.run();
            }
        }
        run() {
            this.teardown();
            this._teardown = this.callback.call(this.state);
        }
        teardown() {
            if (typeof this._teardown === "function") {
                this._teardown();
            }
        }
        hasChanged() {
            return (!this.lastValues ||
                this.values.some((value, i) => this.lastValues[i] !== value));
        }
    });
}

function setEffects(state, cb) {
    state[effectsSymbol].push(cb);
}
/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */
const useEffect = createEffect(setEffects);

const getEmitter = (host) => {
    if (host instanceof Element)
        return host;
    return host.startNode || host.endNode || host.parentNode;
};
/**
 * @function
 * @template T
 * @param    {Context<T>} context
 * @return   {T}
 */
const useContext = hook(class extends Hook {
    Context;
    value;
    _ranEffect;
    _unsubscribe;
    constructor(id, state, _) {
        super(id, state);
        this._updater = this._updater.bind(this);
        this._ranEffect = false;
        this._unsubscribe = null;
        setEffects(state, this);
    }
    update(Context) {
        if (this.Context !== Context) {
            this._subscribe(Context);
            this.Context = Context;
        }
        return this.value;
    }
    call() {
        if (!this._ranEffect) {
            this._ranEffect = true;
            if (this._unsubscribe)
                this._unsubscribe();
            this._subscribe(this.Context);
            this.state.update();
        }
    }
    _updater(value) {
        this.value = value;
        this.state.update();
    }
    _subscribe(Context) {
        const detail = { Context, callback: this._updater };
        const emitter = getEmitter(this.state.host);
        emitter.dispatchEvent(new CustomEvent(contextEvent, {
            detail, // carrier
            bubbles: true, // to bubble up in tree
            cancelable: true, // to be able to cancel
            composed: true, // to pass ShadowDOM boundaries
        }));
        const { unsubscribe = null, value } = detail;
        this.value = unsubscribe ? value : Context.defaultValue;
        this._unsubscribe = unsubscribe;
    }
    teardown() {
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }
});

function makeContext(component) {
    return (defaultValue) => {
        const Context = {
            Provider: class extends HTMLElement {
                listeners;
                _value;
                constructor() {
                    super();
                    this.listeners = new Set();
                    this.addEventListener(contextEvent, this);
                }
                disconnectedCallback() {
                    this.removeEventListener(contextEvent, this);
                }
                handleEvent(event) {
                    const { detail } = event;
                    if (detail.Context === Context) {
                        detail.value = this.value;
                        detail.unsubscribe = this.unsubscribe.bind(this, detail.callback);
                        this.listeners.add(detail.callback);
                        event.stopPropagation();
                    }
                }
                unsubscribe(callback) {
                    this.listeners.delete(callback);
                }
                set value(value) {
                    this._value = value;
                    for (let callback of this.listeners) {
                        callback(value);
                    }
                }
                get value() {
                    return this._value;
                }
            },
            Consumer: component(function ({ render }) {
                const context = useContext(Context);
                return render(context);
            }, { useShadowDOM: false }),
            defaultValue,
        };
        return Context;
    };
}

/**
 * @function
 * @template T
 * @param  {() => T} fn function to memoize
 * @param  {unknown[]} values dependencies to the memoized computation
 * @return {T} The next computed value
 */
const useMemo = hook(class extends Hook {
    value;
    values;
    constructor(id, state, fn, values) {
        super(id, state);
        this.value = fn();
        this.values = values;
    }
    update(fn, values) {
        if (this.hasChanged(values)) {
            this.values = values;
            this.value = fn();
        }
        return this.value;
    }
    hasChanged(values = []) {
        return values.some((value, i) => this.values[i] !== value);
    }
});

/**
 * @function
 * @template {Function} T
 * @param    {T} fn - callback to memoize
 * @param    {unknown[]} inputs - dependencies to callback memoization
 * @return   {T}
 */
const useCallback = (fn, inputs) => useMemo(() => fn, inputs);

function setLayoutEffects(state, cb) {
    state[layoutEffectsSymbol].push(cb);
}
/**
 * @function
 * @param  {Effect} callback effecting callback
 * @param  {unknown[]} [values] dependencies to the effect
 * @return {void}
 */
createEffect(setLayoutEffects);

/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {readonly [state: T, updaterFn: StateUpdater<T>]} stateTuple - Tuple of current state and state updater function
 */
const useState = hook(class extends Hook {
    args;
    constructor(id, state, initialValue) {
        super(id, state);
        this.updater = this.updater.bind(this);
        if (typeof initialValue === "function") {
            initialValue = initialValue();
        }
        this.makeArgs(initialValue);
    }
    update() {
        return this.args;
    }
    updater(value) {
        const [previousValue] = this.args;
        if (typeof value === "function") {
            const updaterFn = value;
            value = updaterFn(previousValue);
        }
        if (Object.is(previousValue, value)) {
            return;
        }
        this.makeArgs(value);
        this.state.update();
    }
    makeArgs(value) {
        this.args = Object.freeze([value, this.updater]);
    }
});

/**
 * Given a reducer function, initial state, and optional state initializer function, returns a tuple of state and dispatch function.
 * @function
 * @template S State
 * @template I Initial State
 * @template A Action
 * @param {Reducer<S, A>} reducer - reducer function to compute the next state given the previous state and the action
 * @param {I} initialState - the initial state of the reducer
 * @param {(init: I) => S} [init=undefined] - Optional initializer function, called on initialState if provided
 * @return {readonly [S, (action: A) => void]}
 */
hook(class extends Hook {
    reducer;
    currentState;
    constructor(id, state, _, initialState, init) {
        super(id, state);
        this.dispatch = this.dispatch.bind(this);
        this.currentState =
            init !== undefined ? init(initialState) : initialState;
    }
    update(reducer) {
        this.reducer = reducer;
        return [this.currentState, this.dispatch];
    }
    dispatch(action) {
        this.currentState = this.reducer(this.currentState, action);
        this.state.update();
    }
});

function pion({ render }) {
    const component = makeComponent(render);
    const createContext = makeContext(component);
    return { component, createContext };
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s(i,t);return !0},o$1=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t);}};function h(i){void 0!==this._$AN?(o$1(this),this._$AM=i,r(this)):this._$AM=i;}function n$2(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o$1(r[i]);else null!=r&&(s(r,!1),o$1(r));else s(this,i);}const c=i=>{i.type==t.CHILD&&(i._$AP??=n$2,i._$AQ??=h);};class f extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o$1(this));}setValue(t){if(f$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const { component, createContext } = pion({ render: j });

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n$1(n,r,t){return n?r(n):t?.(n)}

const o=new WeakMap,n=e(class extends f{render(i){return T}update(i,[s]){const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),T}rt(t){if("function"==typeof this.Y){const i=this.ht??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t);}else this.Y.value=t;}get lt(){return "function"==typeof this.Y?o.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});

const oppositeDirections = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
    center: 'center',
};
const clockwiseDirections = {
    top: 'right',
    right: 'bottom',
    bottom: 'left',
    left: 'top',
    center: 'center',
};

const presets = {
    center: {
        popup: 'center',
        anchor: 'center',
    },
    // clockwise
    top: {
        popup: 'bottom-center',
        anchor: 'top-center',
    },
    right: {
        popup: 'left-center',
        anchor: 'right-center',
    },
    bottom: {
        popup: 'top-center',
        anchor: 'bottom-center',
    },
    left: {
        popup: 'right-center',
        anchor: 'left-center',
    },
    // clockwise
    'top-left': {
        popup: 'bottom-left',
        anchor: 'top-left',
    },
    'right-top': {
        popup: 'left-top',
        anchor: 'right-top',
    },
    'bottom-right': {
        popup: 'top-right',
        anchor: 'bottom-right',
    },
    'left-bottom': {
        popup: 'right-bottom',
        anchor: 'left-bottom',
    },
    // clockwise
    'top-right': {
        popup: 'bottom-right',
        anchor: 'top-right',
    },
    'right-bottom': {
        popup: 'left-bottom',
        anchor: 'right-bottom',
    },
    'bottom-left': {
        popup: 'top-left',
        anchor: 'bottom-left',
    },
    'left-top': {
        popup: 'right-top',
        anchor: 'left-top',
    },
};

class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
    subtract(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }
    negative() {
        return new Point(-this.x, -this.y);
    }
}
Point.Zero = new Point(0, 0);

const { max, min } = Math;
// prettier-ignore
class Rect {
    static fromBoundingClientRect(bcr) {
        var _a, _b;
        if (bcr.getBoundingClientRect) {
            bcr = bcr.getBoundingClientRect();
        }
        // @ts-ignore
        return new Rect((_a = bcr.x) !== null && _a !== void 0 ? _a : bcr.left, (_b = bcr.y) !== null && _b !== void 0 ? _b : bcr.top, bcr.width, bcr.height);
    }
    static fromRect(r) {
        var _a, _b, _c, _d;
        return new Rect((_a = r.x) !== null && _a !== void 0 ? _a : 0, (_b = r.y) !== null && _b !== void 0 ? _b : 0, (_c = r.width) !== null && _c !== void 0 ? _c : 0, (_d = r.height) !== null && _d !== void 0 ? _d : 0);
    }
    static intersect(a, b) {
        const top = max(a.top, b.top);
        const right = min(a.right, b.right);
        const bottom = min(a.bottom, b.bottom);
        const left = max(a.left, b.left);
        const width = right - left;
        const height = bottom - top;
        if (width < 0 || height < 0) {
            return null;
        }
        return new Rect(left, top, width, height);
    }
    static fromViewport() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return new Rect(0, 0, width, height);
    }
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setLocation(point) {
        this.x = point.x;
        this.y = point.y;
        return this;
    }
    contains(rect) {
        return (this.left <= rect.left &&
            this.top <= rect.top &&
            this.right >= rect.right &&
            this.bottom > rect.bottom);
    }
    translate(offset) {
        return new Rect(offset.x, offset.y, this.width, this.height);
    }
    get area() {
        return this.width * this.height;
    }
    get left() {
        return this.x;
    }
    get top() {
        return this.y;
    }
    get right() {
        return this.x + this.width;
    }
    get bottom() {
        return this.y + this.height;
    }
    get centerX() {
        return this.x + this.width / 2;
    }
    get centerY() {
        return this.y + this.height / 2;
    }
    get center() {
        return new Point(this.centerX, this.centerY);
    }
    get topLeft() {
        return new Point(this.left, this.top);
    }
    get topRight() {
        return new Point(this.right, this.top);
    }
    get topCenter() {
        return new Point(this.centerX, this.top);
    }
    get rightTop() {
        return this.topRight;
    }
    get rightBottom() {
        return new Point(this.right, this.bottom);
    }
    get rightCenter() {
        return new Point(this.right, this.centerY);
    }
    get bottomLeft() {
        return new Point(this.left, this.bottom);
    }
    get bottomRight() {
        return this.rightBottom;
    }
    get bottomCenter() {
        return new Point(this.centerX, this.bottom);
    }
    get leftTop() {
        return this.topLeft;
    }
    get leftBottom() {
        return this.bottomLeft;
    }
    get leftCenter() {
        return new Point(this.left, this.centerY);
    }
    get centerTop() {
        return this.topCenter;
    }
    get centerRight() {
        return this.rightCenter;
    }
    get centerLeft() {
        return this.leftCenter;
    }
    get centerBottom() {
        return this.bottomCenter;
    }
    get centerCenter() {
        return this.center;
    }
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
        };
    }
}

const canUseDOM = typeof window === 'object' && typeof document === 'object';
const isWebkit = canUseDOM && navigator.userAgent.indexOf('AppleWebKit') > -1;
// polyfill for document.scrollingElement
// @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getDocumentScrollElement.js
const getDocumentScrollingElement = () => {
    if (!canUseDOM)
        return null;
    if (document.scrollingElement) {
        return document.scrollingElement;
    }
    return !isWebkit && document.compatMode === 'CSS1Compat'
        ? document.documentElement
        : document.body;
};
const toCamelCase = (s) => s.replace(/([-_])([a-z])/g, (s, a, b) => b.toUpperCase());
const parseCorner = (rect, placement) => {
    if (!placement || typeof placement !== 'string') {
        return null;
    }
    const point = rect[toCamelCase(placement)];
    return point instanceof Point ? point : null;
};
const parsePlacementPair = (placement) => {
    if (typeof placement === 'string') {
        return placement.split('-');
    }
    return [];
};
const joinDirection = (main, sub) => sub ? `${main}-${sub}` : main;
// 水平或垂直翻转，只需要倒转主方向；顺时针旋转两次，等同于同时倒转主次方向
// @ts-expect-error
const getOppositePlacement = (placement, all = false) => {
    if (!placement) {
        return null;
    }
    if (typeof placement === 'object') {
        return {
            // @ts-expect-error
            popup: getOppositePlacement(placement.popup, all),
            // @ts-expect-error
            anchor: getOppositePlacement(placement.anchor, all),
        };
    }
    // @ts-expect-error
    const [main, sub] = parsePlacementPair(placement);
    return joinDirection(
    // @ts-expect-error
    oppositeDirections[main], 
    // @ts-expect-error
    all ? oppositeDirections[sub] : sub);
};
// @ts-expect-error
const getClockwisePlacement = (placement) => {
    if (!placement) {
        return null;
    }
    if (typeof placement === 'object') {
        return {
            // @ts-expect-error
            popup: getClockwisePlacement(placement.popup),
            // @ts-expect-error
            anchor: getClockwisePlacement(placement.anchor),
        };
    }
    // @ts-expect-error
    const [main, sub] = parsePlacementPair(placement);
    // @ts-expect-error
    return joinDirection(clockwiseDirections[main], clockwiseDirections[sub]);
};
const getNativeScrollerOffset = (scroller) => {
    const { scrollLeft, scrollTop } = scroller;
    if (!isNaN(scrollLeft) && !isNaN(scrollTop)) {
        return new Point(scrollLeft, scrollTop);
    }
    return Point.Zero;
};
const getScrollerBoundsAndOffset = ({ fixed, offsetParent, boundary, }) => {
    if (boundary) {
        // 固定定位始终使用视口坐标
        return {
            offset: Point.Zero,
            bounds: Rect.fromRect(boundary),
        };
    }
    // 固定定位始终使用视口坐标
    if (fixed || !offsetParent) {
        return {
            offset: Point.Zero,
            bounds: Rect.fromViewport(),
        };
    }
    const nativeOffset = getNativeScrollerOffset(offsetParent);
    // 以窗口滚动的绝对定位，把坐标转换到文档顶部
    const useWindowAsScroller = offsetParent === getDocumentScrollingElement();
    if (useWindowAsScroller) {
        return {
            offset: nativeOffset.negative(),
            bounds: Rect.fromViewport().translate(nativeOffset),
        };
    }
    // 自定义的滚动容器，使用它自身坐标
    const bounds = Rect.fromBoundingClientRect(offsetParent);
    return {
        offset: bounds.topLeft.subtract(nativeOffset),
        bounds: bounds.translate(nativeOffset),
    };
};
/*
 * 箭头属于 popup，始终对齐到 anchor 的中间：
 *
 * // 边对齐，popup 宽于 anchor
 * [       ∨ ] popup
 *       [   ] anchor
 *
 * // 边对齐，popup 窄于 anchor
 * [ ∨ ]       popup
 * [         ] anchor
 *
 * // 非边对齐，popup 窄于 anchor
 *   [   ]      anchor
 * [   ∧     ]  popup
 *
 * // 非边对齐，popup 宽于 anchor
 * [   ∨     ]  popup
 *   [   ]      anchor
 *
 */
const getArrowOffset = (popupRect, anchorRect, placement) => {
    const [main] = parsePlacementPair(placement);
    if (main === 'top' || main === 'bottom') {
        const top = main === 'top' ? '100%' : 0;
        const narrowerRect = popupRect.width <= anchorRect.width ? popupRect : anchorRect;
        if (narrowerRect === popupRect) {
            return { left: '50%', top };
        }
        return {
            left: anchorRect.left - popupRect.left + narrowerRect.width / 2,
            top,
        };
    }
    else if (main === 'left' || main === 'right') {
        const left = main === 'left' ? '100%' : 0;
        const shorterRect = popupRect.height <= anchorRect.height ? popupRect : anchorRect;
        if (shorterRect === popupRect) {
            return { left, top: '50%' };
        }
        return {
            left,
            top: anchorRect.top - popupRect.top + shorterRect.height / 2,
        };
    }
    return { left: 0, top: 0 };
};

const defaults = {
    // use fixed or absolute position
    fixed: false,
    // any scroller element
    offsetParent: getDocumentScrollingElement(),
    // 'auto': adjusts horizontally or vertically, 'both': adjusts horizontally and vertically, defaults to 'none'
    adjustXY: 'none',
};
const calculatePosition = (popup, anchor, placement, options = {}) => {
    const anchorRect = Rect.fromBoundingClientRect(anchor);
    const popupRect = Rect.fromBoundingClientRect(popup).setLocation(Point.Zero);
    let corners = placement;
    if (typeof placement === 'string') {
        corners = presets[placement];
    }
    if (!corners) {
        return null;
    }
    const popupCorner = parseCorner(popupRect, corners.popup);
    const anchorCorner = parseCorner(anchorRect, corners.anchor);
    if (!popupCorner || !anchorCorner) {
        return null;
    }
    // relative to viewport
    const fixedOffset = anchorCorner.subtract(popupCorner);
    // relative to viewport
    const fixedPopupRect = popupRect.translate(fixedOffset);
    // relative to scroller
    const offset = fixedOffset.subtract(getScrollerBoundsAndOffset(options).offset);
    return {
        offset,
        placement,
        anchorRect,
        popupRect: fixedPopupRect,
        popupOffset: { left: offset.x, top: offset.y },
        arrowOffset: getArrowOffset(fixedPopupRect, anchorRect, placement),
        // compatible with v0.0.1
        left: offset.x,
        top: offset.y,
    };
};
const calculateVisibleAreaRatio = (rect, bounds) => {
    const intersectionRect = Rect.intersect(rect, bounds);
    return intersectionRect ? intersectionRect.area / rect.area : 0;
};
const findProperPosition = (popup, anchor, placements, options = {}) => {
    const { bounds } = getScrollerBoundsAndOffset(options);
    const positionInfos = [];
    for (const placement of placements) {
        const positionInfo = calculatePosition(popup, anchor, placement, options);
        if (!positionInfo) {
            continue;
        }
        // relative to scroller
        const positionedPopupRect = positionInfo.popupRect.translate(positionInfo.offset);
        if (bounds.contains(positionedPopupRect)) {
            return positionInfo;
        }
        const visibleAreaRatio = calculateVisibleAreaRatio(positionedPopupRect, bounds);
        positionInfos.push(Object.assign(positionInfo, visibleAreaRatio && { visibleAreaRatio }));
    }
    return (positionInfos
        .filter(Boolean)
        // @ts-expect-error possibly 'undefined'.
        .sort((a, b) => b.visibleAreaRatio - a.visibleAreaRatio)[0] || null);
};
const position$1 = (popup, anchor, placement, options = {}) => {
    options = Object.assign({}, defaults, options);
    if (Array.isArray(placement)) {
        return findProperPosition(popup, anchor, placement, options);
    }
    const { adjustXY } = options;
    const adjustsHorizontallyOrVertically = adjustXY === 'auto';
    const adjustsHorizontallyAndVertically = adjustXY === 'both';
    if (placement !== 'center' &&
        (adjustsHorizontallyOrVertically || adjustsHorizontallyAndVertically)) {
        let placements = [];
        if (adjustsHorizontallyOrVertically) {
            placements = [placement, getOppositePlacement(placement)];
        }
        else if (adjustsHorizontallyAndVertically) {
            const oppositePlacement = getOppositePlacement(placement, true);
            placements = [
                placement,
                oppositePlacement,
                getClockwisePlacement(placement),
                getClockwisePlacement(oppositePlacement),
            ];
        }
        return findProperPosition(popup, anchor, placements, options);
    }
    return calculatePosition(popup, anchor, placement, options);
};

const ancestorRoots = (el, limit = document.body) => {
  const roots = [];
  let ancestor = el;
  while (ancestor && ancestor !== limit) {
    if (ancestor instanceof Element && ancestor.assignedSlot) {
      ancestor = ancestor.assignedSlot;
      continue;
    }
    if (ancestor instanceof ShadowRoot) {
      roots.push(ancestor);
      ancestor = ancestor.host;
      continue;
    }
    ancestor = ancestor.parentNode;
  }
  return roots;
};
const onScrolled = (el, handler) => {
  const roots = ancestorRoots(el);
  roots.forEach((r) => r.addEventListener("scroll", handler, true));
  return () => {
    roots.forEach((r) => r.removeEventListener("scroll", handler, true));
  };
};

const defaultPlacement = [
  "bottom-left",
  "bottom-right",
  "bottom",
  "top-left",
  "top-right",
  "top"
];
const position = ({
  host,
  anchor,
  placement = defaultPlacement,
  confinement,
  limit
}) => {
  const anchorBounds = anchor.getBoundingClientRect(), hostBounds = host.getBoundingClientRect(), { popupOffset: offset } = position$1(hostBounds, anchorBounds, placement, {
    fixed: true,
    adjustXY: "both",
    offsetParent: confinement
  }), { style } = host;
  if (offset.left < 0) {
    style.left = "0px";
  } else {
    style.left = offset.left + "px";
  }
  style.top = offset.top + "px";
  if (limit) {
    style.minWidth = Math.max(anchorBounds.width, hostBounds.width) + "px";
  }
};
const usePosition = ({
  anchor: anchorage,
  host,
  ...thru
}) => {
  useEffect(() => {
    const anchor = typeof anchorage === "function" ? anchorage() : anchorage;
    if (anchor == null) {
      return;
    }
    let rid;
    const reposition = () => position({ host, anchor, ...thru }), ro = new ResizeObserver(reposition);
    ro.observe(host);
    ro.observe(anchor);
    const onReposition = () => {
      cancelAnimationFrame(rid);
      rid = requestAnimationFrame(reposition);
    }, offScroll = onScrolled(anchor, onReposition);
    window.addEventListener("resize", onReposition, true);
    return () => {
      ro.unobserve(host);
      ro.unobserve(anchor);
      offScroll();
      window.removeEventListener("resize", onReposition, true);
      cancelAnimationFrame(rid);
    };
  }, [anchorage, ...Object.values(thru)]);
};

/**
 * Copies properties of an Object into a memoized object.
 * Useful to create an object that does not change.
 *
 * @param {Object} meta - The source object
 * @returns {Object} The memoized object.
 */
const useMeta = (meta) => {
    const ref = useMemo(() => ({}), []);
    return useMemo(() => Object.assign(ref, meta), [ref, ...Object.values(meta)]);
};

const isFocused = (t) => t.matches(":focus-within");
const useFocus = ({ disabled, onFocus }) => {
  const [focusState, setState] = useState(), { focused: _focused, closed } = focusState || {}, focused = _focused && !disabled, meta = useMeta({ closed, onFocus }), setClosed = useCallback(
    (closed2) => setState((p) => ({ ...p, closed: closed2 })),
    []
  ), onToggle = useCallback((e) => {
    const target = e.currentTarget;
    return isFocused(target) ? setState((p) => ({ focused: true, closed: !p?.closed })) : target.focus();
  }, []);
  useEffect(() => {
    if (!focused) {
      return;
    }
    const handler = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { closed: closed2 } = meta;
      if (e.key === "Escape" && !closed2) {
        e.preventDefault();
        setClosed(true);
      } else if (["ArrowUp", "Up"].includes(e.key) && closed2) {
        e.preventDefault();
        setClosed(false);
      }
    };
    document.addEventListener("keydown", handler, true);
    return () => document.removeEventListener("keydown", handler, true);
  }, [focused]);
  return {
    focused,
    active: focused && !closed,
    setClosed,
    onToggle,
    onFocus: useCallback(
      (e) => {
        const focused2 = isFocused(e.currentTarget);
        setState({ focused: focused2 });
        meta.onFocus?.(focused2);
      },
      [meta]
    )
  };
};
const fevs = ["focusin", "focusout"];
const useHostFocus = (host) => {
  const thru = useFocus(host), { onFocus } = thru;
  useEffect(() => {
    host.setAttribute("tabindex", "0");
    fevs.forEach((ev) => host.addEventListener(ev, onFocus));
    return () => {
      fevs.forEach((ev) => host.removeEventListener(ev, onFocus));
    };
  }, []);
  return thru;
};

const preventDefault = (e) => e.preventDefault();
const supportsPopover = () => {
  return HTMLElement.prototype.hasOwnProperty("popover");
};
const showPopover = (popover) => {
  const popoverElement = popover;
  if (supportsPopover()) {
    requestAnimationFrame(() => {
      popoverElement?.showPopover();
    });
  }
};
const Content = (host) => {
  const { anchor, placement, render } = host;
  usePosition({ anchor, placement, host });
  return x` <style>
			:host {
				position: fixed;
				left: -9999999999px;
				min-width: 72px;
				box-sizing: border-box;
				padding: var(--cosmoz-dropdown-spacing, 0px);
				z-index: var(--cosmoz-dropdown-z-index, 2);
			}
			:host(:popover-open) {
				margin: 0;
				border: 0;
				padding: 0;
				overflow: visible;
			}
			.wrap {
				background: var(--cosmoz-dropdown-bg-color, #fff);
				box-shadow: var(
					--cosmoz-dropdown-box-shadow,
					0px 3px 4px 2px rgba(0, 0, 0, 0.1)
				);
			}
			::slotted(*) {
				display: block;
			}
		</style>
		<div class="wrap" part="wrap"><slot></slot>${render?.() || T}</div>`;
};
const Dropdown$1 = (host) => {
  const { placement, render } = host, anchor = useCallback(() => host.shadowRoot.querySelector(".anchor"), []), { active, onToggle } = useHostFocus(host);
  return x` <style>
			.anchor {
				pointer-events: none;
				padding: var(--cosmoz-dropdown-anchor-spacing);
			}
			button {
				border: none;
				cursor: pointer;
				position: relative;
				pointer-events: auto;
				outline: none;
				background: var(
					--cosmoz-dropdown-button-bg-color,
					var(--cosmoz-button-bg-color, #101010)
				);
				color: var(
					--cosmoz-dropdown-button-color,
					var(--cosmoz-button-color, #fff)
				);
				border-radius: var(--cosmoz-dropdown-button-radius, 50%);
				width: var(
					--cosmoz-dropdown-button-width,
					var(--cosmoz-dropdown-button-size, 40px)
				);
				height: var(
					--cosmoz-dropdown-button-height,
					var(--cosmoz-dropdown-button-size, 40px)
				);
				padding: var(--cosmoz-dropdown-button-padding);
			}
			button:hover {
				background: var(
					--cosmoz-dropdown-button-hover-bg-color,
					var(--cosmoz-button-hover-bg-color, #3a3f44)
				);
			}
			::slotted(svg) {
				pointer-events: none;
			}
			@-moz-document url-prefix() {
				#content {
					left: auto;
				}
			}
		</style>
		<div class="anchor" part="anchor">
			<button
				@click=${onToggle}
				@mousedown=${preventDefault}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${n$1(
    active,
    () => x`<cosmoz-dropdown-content
					${n(showPopover)}
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					.anchor=${anchor}
					.placement=${placement}
					.render=${render}
				>
					<slot></slot>
				</cosmoz-dropdown-content>`
  )}`;
};
const List = () => x`
	<style>
		:host {
			display: contents;
			max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
			overflow-y: auto;
		}
		::slotted(:not(slot)) {
			display: block;
			--paper-button_-_display: block;
			box-sizing: border-box;
			padding: 10px 24px;
			background: transparent;
			color: var(--cosmoz-dropdown-menu-color, #101010);
			transition:
				background 0.25s,
				color 0.25s;
			border: none;
			cursor: pointer;
			font-size: 14px;
			line-height: 20px;
			text-align: left;
			margin: 0;
			width: 100%;
		}

		::slotted(:not(slot):hover) {
			background: var(
				--cosmoz-dropdown-menu-hover-color,
				var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
			);
		}

		::slotted(:not(slot)[disabled]) {
			opacity: 0.5;
			pointer-events: none;
		}
	</style>
	<slot></slot>
`;
const Menu = ({ placement }) => x` <cosmoz-dropdown
		.placement=${placement}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;
customElements.define(
  "cosmoz-dropdown-content",
  component(Content)
);
customElements.define("cosmoz-dropdown", component(Dropdown$1));
customElements.define("cosmoz-dropdown-list", component(List));
customElements.define("cosmoz-dropdown-menu", component(Menu));

const meta = {
  title: "Cosmoz Dropdown",
  component: "cosmoz-dropdown"
};
const Dropdown = {
  render: () => {
    return x`<cosmoz-dropdown>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 4</div>
			<div>Item 5</div>
			<button>Item 6</button>
		</cosmoz-dropdown>`;
  }
};
const DropdownMenu = {
  render: () => {
    return x`<cosmoz-dropdown-menu>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 4</div>
			<div>Item 5</div>
			<a href="#">Achor 1</a>
		</cosmoz-dropdown-menu>`;
  }
};
const DropdownWithBug = {
  name: "Dropdown with Bug - fixed on Chrome",
  render: () => {
    return x`<style>
				.wrapper-with-bug {
					position: relative;
					z-index: 2;
					width: 300px;
					height: 300px;
					top: 100px;
					left: 100px;
					background-color: blueviolet;
					transform: translate3d(0, 0, 0);
				}
				.overlay {
					width: 350px;
					height: 350px;
					background-color: green;
					transform: translate3d(0, 0, 0);
					position: absolute;
					top: 150px;
					left: 100px;
					z-index: 3;
				}
			</style>
			<div class="wrapper-with-bug">
				<cosmoz-dropdown>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 5</div>
				</cosmoz-dropdown>
			</div>
			<div class="overlay"></div>`;
  }
};
const __namedExportsOrder = ["Dropdown", "DropdownMenu", "DropdownWithBug"];

export { Dropdown, DropdownMenu, DropdownWithBug, __namedExportsOrder, meta as default };
