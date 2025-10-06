import{f as ze,B as Se,x as A,E as zt,T as St}from"./iframe-C0W0Vt6Z.js";let dt,oe=0;function Wt(t){dt=t}function Vt(){dt=null,oe=0}function Ce(){return oe++}const xt=Symbol("haunted.phase"),at=Symbol("haunted.hook"),jt=Symbol("haunted.update"),Yt=Symbol("haunted.commit"),D=Symbol("haunted.effects"),Z=Symbol("haunted.layoutEffects"),Ct="haunted.context";class _e{update;host;virtual;[at];[D];[Z];constructor(e,o){this.update=e,this.host=o,this[at]=new Map,this[D]=[],this[Z]=[]}run(e){Wt(this);let o=e();return Vt(),o}_runEffects(e){let o=this[e];Wt(this);for(let n of o)n.call(this);Vt()}runEffects(){this._runEffects(D)}runLayoutEffects(){this._runEffects(Z)}teardown(){this[at].forEach(o=>{typeof o.teardown=="function"&&o.teardown()})}}const ke=Promise.resolve().then.bind(Promise.resolve());function ne(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=ke(o))}}const $e=ne(),Ut=ne();class Re{renderer;host;state;[xt];_updateQueued;constructor(e,o){this.renderer=e,this.host=o,this.state=new _e(this.update.bind(this),o),this[xt]=null,this._updateQueued=!1}update(){this._updateQueued||($e(()=>{let e=this.handlePhase(jt);Ut(()=>{this.handlePhase(Yt,e),Ut(()=>{this.handlePhase(D)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,o){switch(this[xt]=e,e){case Yt:this.commit(o),this.runEffects(Z);return;case jt:return this.render();case D:return this.runEffects(D)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const Ie=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Te=t=>t?.map(e=>typeof e=="string"?Ie(e):e),Oe=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),vt=Oe,Le=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function Pe(t){class e extends Re{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:l=!0,shadowRootInit:d={},styleSheets:u}=r||s||{},a=Te(n.styleSheets||u);class f extends i{_scheduler;static get observedAttributes(){return n.observedAttributes||c||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const p=this.attachShadow({mode:"open",...d});a&&(p.adoptedStyleSheets=a),this._scheduler=new e(n,p,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,m,b){if(m===b)return;let g=b===""?!0:b;Reflect.set(this,Le(p),g)}}function h(v){let p=v,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(b){m&&p===b||(m=!0,p=b,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(i.prototype,{getPrototypeOf(v){return v},set(v,p,m,b){let g;return p in v?(g=Object.getOwnPropertyDescriptor(v,p),g&&g.set?(g.set.call(b,m),!0):(Reflect.set(v,p,m,b),!0)):(typeof p=="symbol"||p[0]==="_"?g={enumerable:!0,configurable:!0,writable:!0,value:m}:g=h(m),Object.defineProperty(b,p,g),g.set&&g.set.call(b,m),!0)}});return Object.setPrototypeOf(f.prototype,w),f}return o}class j{id;state;constructor(e,o){this.id=e,this.state=o}}function De(t,...e){let o=Ce(),n=dt[at],s=n.get(o);return s||(s=new t(o,dt,...e),n.set(o,s)),s.update(...e)}function Y(t){return De.bind(null,t)}function se(t){return Y(class extends j{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function re(t,e){t[D].push(e)}const O=se(re),Fe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Me=Y(class extends j{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,re(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Fe(this.state.host).dispatchEvent(new CustomEvent(Ct,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ne(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Ct,this)}disconnectedCallback(){this.removeEventListener(Ct,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Me(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const J=Y(class extends j{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),I=(t,e)=>J(()=>t,e);function Be(t,e){t[Z].push(e)}se(Be);const T=Y(class extends j{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Y(class extends j{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const He=/([A-Z])/gu;Y(class extends j{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(He,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function We({render:t}){const e=Pe(t),o=Ne(e);return{component:e,createContext:o}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie={ATTRIBUTE:1,CHILD:2},$t=t=>(...e)=>({_$litDirective$:t,values:e});let Rt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),G(n,e);return!0},ut=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},ce=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Ye(e)}};function Ve(t){this._$AN!==void 0?(ut(this),this._$AM=t,ce(this)):this._$AM=t}function je(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)G(n[r],!1),ut(n[r]);else n!=null&&(G(n,!1),ut(n));else G(this,t)}const Ye=t=>{t.type==ie.CHILD&&(t._$AP??=je,t._$AQ??=Ve)};class Ue extends Rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),ce(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(G(this,e),ut(this))}setValue(e){if(ze(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:U}=We({render:Se}),Qe=t=>{const e=J(()=>({}),[]);return J(()=>Object.assign(e,t),[e,...Object.values(t)])},Qt=t=>t.matches(":focus-within"),qe=({disabled:t,onFocus:e})=>{const[o,n]=T(),{focused:s,closed:r}=o||{},i=s&&!t,c=Qe({closed:r,onFocus:e}),l=I(u=>n(a=>({...a,closed:u})),[]),d=I(u=>{const a=u.currentTarget;return Qt(a)?n(f=>({focused:!0,closed:!f?.closed})):a.focus()},[]);return O(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented)return;const{closed:f}=c;a.key==="Escape"&&!f?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&f&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:d,onFocus:I(u=>{const a=Qt(u.currentTarget);n({focused:a}),c.onFocus?.(a)},[c])}},qt=["focusin","focusout"],Ke=t=>{const e=qe(t),{onFocus:o}=e;return O(()=>(t.setAttribute("tabindex","0"),qt.forEach(n=>t.addEventListener(n,o)),()=>{qt.forEach(n=>t.removeEventListener(n,o))}),[]),e},Xe=vt`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
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
`,Ze=()=>A` <slot></slot> `;customElements.define("cosmoz-dropdown-list",U(Ze,{styleSheets:[Xe]}));const Ge=({placement:t})=>A` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",U(Ge));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Je(t,e,o){return t?e(t):o?.(t)}const Et=new WeakMap,Kt=$t(class extends Ue{render(t){return zt}update(t,[e]){const o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),zt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let o=Et.get(e);o===void 0&&(o=new WeakMap,Et.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Et.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le="important",to=" !"+le,eo=$t(class extends Rt{constructor(t){if(super(t),t.type!==ie.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(to);n.includes("-")||r?o.setProperty(n,r?s.slice(0,-11):s,r?le:""):o[n]=s}}return St}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo={},no=$t(class extends Rt{constructor(){super(...arguments),this.ot=oo}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,s)=>n===this.ot[s])))return St}else if(this.ot===e)return St;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),so=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ro=vt`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
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
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,io=()=>A`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",so(U(io,{styleSheets:[ro]})));const ft=Math.min,F=Math.max,ht=Math.round,st=Math.floor,C=t=>({x:t,y:t}),co={left:"right",right:"left",bottom:"top",top:"bottom"},lo={start:"end",end:"start"};function Xt(t,e,o){return F(t,ft(e,o))}function It(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function Tt(t){return t.split("-")[1]}function ae(t){return t==="x"?"y":"x"}function de(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(W(t))?"y":"x"}function ue(t){return ae(tt(t))}function ao(t,e,o){o===void 0&&(o=!1);const n=Tt(t),s=ue(t),r=de(s);let i=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=pt(i)),[i,pt(i)]}function uo(t){const e=pt(t);return[_t(t),e,_t(e)]}function _t(t){return t.replace(/start|end/g,e=>lo[e])}function fo(t,e,o){const n=["left","right"],s=["right","left"],r=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:n:e?n:s;case"left":case"right":return e?r:i;default:return[]}}function ho(t,e,o,n){const s=Tt(t);let r=fo(W(t),o==="start",n);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(_t)))),r}function pt(t){return t.replace(/left|right|bottom|top/g,e=>co[e])}function po(t){return{top:0,right:0,bottom:0,left:0,...t}}function mo(t){return typeof t!="number"?po(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:o,width:n,height:s}=t;return{width:n,height:s,top:o,left:e,right:e+n,bottom:o+s,x:e,y:o}}function Zt(t,e,o){let{reference:n,floating:s}=t;const r=tt(e),i=ue(e),c=de(i),l=W(e),d=r==="y",u=n.x+n.width/2-s.width/2,a=n.y+n.height/2-s.height/2,f=n[c]/2-s[c]/2;let h;switch(l){case"top":h={x:u,y:n.y-s.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:a};break;case"left":h={x:n.x-s.width,y:a};break;default:h={x:n.x,y:n.y}}switch(Tt(e)){case"start":h[i]-=f*(o&&d?-1:1);break;case"end":h[i]+=f*(o&&d?-1:1);break}return h}const vo=async(t,e,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:i}=o,c=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:a}=Zt(d,n,l),f=n,h={},w=0;for(let v=0;v<c.length;v++){const{name:p,fn:m}=c[v],{x:b,y:g,data:x,reset:y}=await m({x:u,y:a,initialPlacement:n,placement:f,strategy:s,middlewareData:h,rects:d,platform:i,elements:{reference:t,floating:e}});u=b??u,a=g??a,h={...h,[p]:{...h[p],...x}},y&&w<=50&&(w++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(d=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:u,y:a}=Zt(d,f,l)),v=-1)}return{x:u,y:a,placement:f,strategy:s,middlewareData:h}};async function fe(t,e){var o;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:f=!1,padding:h=0}=It(e,t),w=mo(h),p=c[f?a==="floating"?"reference":"floating":a],m=mt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(p)))==null||o?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:l})),b=a==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,g=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),x=await(r.isElement==null?void 0:r.isElement(g))?await(r.getScale==null?void 0:r.getScale(g))||{x:1,y:1}:{x:1,y:1},y=mt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:b,offsetParent:g,strategy:l}):b);return{top:(m.top-y.top+w.top)/x.y,bottom:(y.bottom-m.bottom+w.bottom)/x.y,left:(m.left-y.left+w.left)/x.x,right:(y.right-m.right+w.right)/x.x}}const bo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...p}=It(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const m=W(s),b=tt(c),g=W(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(d.floating)),y=f||(g||!v?[pt(c)]:uo(c)),q=w!=="none";!f&&q&&y.push(...ho(c,v,w,x));const N=[c,...y],yt=await fe(e,p),nt=[];let K=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&nt.push(yt[m]),a){const P=ao(s,i,x);nt.push(yt[P[0]],yt[P[1]])}if(K=[...K,{placement:s,overflows:nt}],!nt.every(P=>P<=0)){var Mt,Nt;const P=(((Mt=r.flip)==null?void 0:Mt.index)||0)+1,Ht=N[P];if(Ht)return{data:{index:P,overflows:K},reset:{placement:Ht}};let X=(Nt=K.filter(B=>B.overflows[0]<=0).sort((B,$)=>B.overflows[1]-$.overflows[1])[0])==null?void 0:Nt.placement;if(!X)switch(h){case"bestFit":{var Bt;const B=(Bt=K.filter($=>{if(q){const R=tt($.placement);return R===b||R==="y"}return!0}).map($=>[$.placement,$.overflows.filter(R=>R>0).reduce((R,Ae)=>R+Ae,0)]).sort(($,R)=>$[1]-R[1])[0])==null?void 0:Bt[0];B&&(X=B);break}case"initialPlacement":X=c;break}if(s!==X)return{reset:{placement:X}}}return{}}}},go=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:p=>{let{x:m,y:b}=p;return{x:m,y:b}}},...l}=It(t,e),d={x:o,y:n},u=await fe(e,l),a=tt(W(s)),f=ae(a);let h=d[f],w=d[a];if(r){const p=f==="y"?"top":"left",m=f==="y"?"bottom":"right",b=h+u[p],g=h-u[m];h=Xt(b,h,g)}if(i){const p=a==="y"?"top":"left",m=a==="y"?"bottom":"right",b=w+u[p],g=w-u[m];w=Xt(b,w,g)}const v=c.fn({...e,[f]:h,[a]:w});return{...v,data:{x:v.x-o,y:v.y-n,enabled:{[f]:r,[a]:i}}}}}};function bt(){return typeof window<"u"}function Q(t){return he(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function k(t){var e;return(e=(he(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function he(t){return bt()?t instanceof Node||t instanceof E(t).Node:!1}function z(t){return bt()?t instanceof Element||t instanceof E(t).Element:!1}function _(t){return bt()?t instanceof HTMLElement||t instanceof E(t).HTMLElement:!1}function Gt(t){return!bt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:o,overflowY:n,display:s}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(s)}function wo(t){return["table","td","th"].includes(Q(t))}function gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ot(t){const e=Lt(),o=z(t)?S(t):t;return["transform","translate","scale","rotate","perspective"].some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function yo(t){let e=L(t);for(;_(e)&&!V(e);){if(Ot(e))return e;if(gt(e))return null;e=L(e)}return null}function Lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(Q(t))}function S(t){return E(t).getComputedStyle(t)}function wt(t){return z(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function L(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Gt(t)&&t.host||k(t);return Gt(e)?e.host:e}function pe(t){const e=L(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&ot(e)?e:pe(e)}function et(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=pe(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),i=E(s);if(r){const c=kt(i);return e.concat(i,i.visualViewport||[],ot(s)?s:[],c&&o?et(c):[])}return e.concat(s,et(s,[],o))}function kt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function me(t){const e=S(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=_(t),r=s?t.offsetWidth:o,i=s?t.offsetHeight:n,c=ht(o)!==r||ht(n)!==i;return c&&(o=r,n=i),{width:o,height:n,$:c}}function Pt(t){return z(t)?t:t.contextElement}function H(t){const e=Pt(t);if(!_(e))return C(1);const o=e.getBoundingClientRect(),{width:n,height:s,$:r}=me(e);let i=(r?ht(o.width):o.width)/n,c=(r?ht(o.height):o.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const xo=C(0);function ve(t){const e=E(t);return!Lt()||!e.visualViewport?xo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Eo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==E(t)?!1:e}function M(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=Pt(t);let i=C(1);e&&(n?z(n)&&(i=H(n)):i=H(t));const c=Eo(r,o,n)?ve(r):C(0);let l=(s.left+c.x)/i.x,d=(s.top+c.y)/i.y,u=s.width/i.x,a=s.height/i.y;if(r){const f=E(r),h=n&&z(n)?E(n):n;let w=f,v=kt(w);for(;v&&n&&h!==w;){const p=H(v),m=v.getBoundingClientRect(),b=S(v),g=m.left+(v.clientLeft+parseFloat(b.paddingLeft))*p.x,x=m.top+(v.clientTop+parseFloat(b.paddingTop))*p.y;l*=p.x,d*=p.y,u*=p.x,a*=p.y,l+=g,d+=x,w=E(v),v=kt(w)}}return mt({width:u,height:a,x:l,y:d})}function Dt(t,e){const o=wt(t).scrollLeft;return e?e.left+o:M(k(t)).left+o}function be(t,e,o){o===void 0&&(o=!1);const n=t.getBoundingClientRect(),s=n.left+e.scrollLeft-(o?0:Dt(t,n)),r=n.top+e.scrollTop;return{x:s,y:r}}function Ao(t){let{elements:e,rect:o,offsetParent:n,strategy:s}=t;const r=s==="fixed",i=k(n),c=e?gt(e.floating):!1;if(n===i||c&&r)return o;let l={scrollLeft:0,scrollTop:0},d=C(1);const u=C(0),a=_(n);if((a||!a&&!r)&&((Q(n)!=="body"||ot(i))&&(l=wt(n)),_(n))){const h=M(n);d=H(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}const f=i&&!a&&!r?be(i,l,!0):C(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-l.scrollLeft*d.x+u.x+f.x,y:o.y*d.y-l.scrollTop*d.y+u.y+f.y}}function zo(t){return Array.from(t.getClientRects())}function So(t){const e=k(t),o=wt(t),n=t.ownerDocument.body,s=F(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=F(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+Dt(t);const c=-o.scrollTop;return S(n).direction==="rtl"&&(i+=F(e.clientWidth,n.clientWidth)-s),{width:s,height:r,x:i,y:c}}function Co(t,e){const o=E(t),n=k(t),s=o.visualViewport;let r=n.clientWidth,i=n.clientHeight,c=0,l=0;if(s){r=s.width,i=s.height;const d=Lt();(!d||d&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:r,height:i,x:c,y:l}}function _o(t,e){const o=M(t,!0,e==="fixed"),n=o.top+t.clientTop,s=o.left+t.clientLeft,r=_(t)?H(t):C(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,d=n*r.y;return{width:i,height:c,x:l,y:d}}function Jt(t,e,o){let n;if(e==="viewport")n=Co(t,o);else if(e==="document")n=So(k(t));else if(z(e))n=_o(e,o);else{const s=ve(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return mt(n)}function ge(t,e){const o=L(t);return o===e||!z(o)||V(o)?!1:S(o).position==="fixed"||ge(o,e)}function ko(t,e){const o=e.get(t);if(o)return o;let n=et(t,[],!1).filter(c=>z(c)&&Q(c)!=="body"),s=null;const r=S(t).position==="fixed";let i=r?L(t):t;for(;z(i)&&!V(i);){const c=S(i),l=Ot(i);!l&&c.position==="fixed"&&(s=null),(r?!l&&!s:!l&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ot(i)&&!l&&ge(t,i))?n=n.filter(u=>u!==i):s=c,i=L(i)}return e.set(t,n),n}function $o(t){let{element:e,boundary:o,rootBoundary:n,strategy:s}=t;const i=[...o==="clippingAncestors"?gt(e)?[]:ko(e,this._c):[].concat(o),n],c=i[0],l=i.reduce((d,u)=>{const a=Jt(e,u,s);return d.top=F(a.top,d.top),d.right=ft(a.right,d.right),d.bottom=ft(a.bottom,d.bottom),d.left=F(a.left,d.left),d},Jt(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ro(t){const{width:e,height:o}=me(t);return{width:e,height:o}}function Io(t,e,o){const n=_(e),s=k(e),r=o==="fixed",i=M(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=C(0);if(n||!n&&!r)if((Q(e)!=="body"||ot(s))&&(c=wt(e)),n){const f=M(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else s&&(l.x=Dt(s));const d=s&&!n&&!r?be(s,c):C(0),u=i.left+c.scrollLeft-l.x-d.x,a=i.top+c.scrollTop-l.y-d.y;return{x:u,y:a,width:i.width,height:i.height}}function At(t){return S(t).position==="static"}function te(t,e){if(!_(t)||S(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return k(t)===o&&(o=o.ownerDocument.body),o}function we(t,e){const o=E(t);if(gt(t))return o;if(!_(t)){let s=L(t);for(;s&&!V(s);){if(z(s)&&!At(s))return s;s=L(s)}return o}let n=te(t,e);for(;n&&wo(n)&&At(n);)n=te(n,e);return n&&V(n)&&At(n)&&!Ot(n)?o:n||yo(t)||o}const To=async function(t){const e=this.getOffsetParent||we,o=this.getDimensions,n=await o(t.floating);return{reference:Io(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Oo(t){return S(t).direction==="rtl"}const Lo={convertOffsetParentRelativeRectToViewportRelativeRect:Ao,getDocumentElement:k,getClippingRect:$o,getOffsetParent:we,getElementRects:To,getClientRects:zo,getDimensions:Ro,getScale:H,isElement:z,isRTL:Oo};function ye(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Po(t,e){let o=null,n;const s=k(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const d=t.getBoundingClientRect(),{left:u,top:a,width:f,height:h}=d;if(c||e(),!f||!h)return;const w=st(a),v=st(s.clientWidth-(u+f)),p=st(s.clientHeight-(a+h)),m=st(u),g={rootMargin:-w+"px "+-v+"px "+-p+"px "+-m+"px",threshold:F(0,ft(1,l))||1};let x=!0;function y(q){const N=q[0].intersectionRatio;if(N!==l){if(!x)return i();N?i(!1,N):n=setTimeout(()=>{i(!1,1e-7)},1e3)}N===1&&!ye(d,t.getBoundingClientRect())&&i(),x=!1}try{o=new IntersectionObserver(y,{...g,root:s.ownerDocument})}catch{o=new IntersectionObserver(y,g)}o.observe(t)}return i(!0),r}function Do(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,d=Pt(t),u=s||r?[...d?et(d):[],...et(e)]:[];u.forEach(m=>{s&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});const a=d&&c?Po(d,o):null;let f=-1,h=null;i&&(h=new ResizeObserver(m=>{let[b]=m;b&&b.target===d&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var g;(g=h)==null||g.observe(e)})),o()}),d&&!l&&h.observe(d),h.observe(e));let w,v=l?M(t):null;l&&p();function p(){const m=M(t);v&&!ye(v,m)&&o(),v=m,w=requestAnimationFrame(p)}return o(),()=>{var m;u.forEach(b=>{s&&b.removeEventListener("scroll",o),r&&b.removeEventListener("resize",o)}),a?.(),(m=h)==null||m.disconnect(),h=null,l&&cancelAnimationFrame(w)}}const Fo=go,Mo=bo,No=(t,e,o)=>{const n=new Map,s={platform:Lo,...o},r={...s.platform,_c:n};return vo(t,e,{...s,platform:r})},Bo=[Mo({fallbackAxisSideDirection:"start",crossAxis:!1}),Fo()],Ho=({placement:t="bottom-start",strategy:e,middleware:o=Bo}={})=>{const[n,s]=T(),[r,i]=T(),[c,l]=T();return O(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return Do(n,r,()=>No(n,r,{placement:t,strategy:e,middleware:o}).then(l))},[n,r,t,e,o]),{setReference:s,setFloating:i,styles:J(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Wo=t=>t.preventDefault(),Vo=vt`
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
		--color: var(
			--cosmoz-dropdown-button-color,
			var(--cosmoz-button-color, #fff)
		);
		color: var(--color);
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
		color: var(--cosmoz-dropdown-button-hover-color, var(--color));
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,jo=t=>{const{placement:e,strategy:o,middleware:n,render:s}=t,{active:r,onToggle:i}=Ke(t),{styles:c,setReference:l,setFloating:d}=Ho({placement:e,strategy:o,middleware:n});return A` <div class="anchor" part="anchor" ${Kt(l)}>
			<button
				@mousedown=${Wo}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Je(r,()=>A`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${eo(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${Kt(d)}
					><slot></slot>${no([s],()=>s?.()||zt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",U(jo,{styleSheets:[Vo]}));const Yo=vt`
	:host {
		display: contents;
	}

	.dropdown-content {
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
		overflow: hidden;
	}

	.search-container {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--cosmoz-dropdown-menu-bg-color, #fff);
		border-bottom: 1px solid var(--cosmoz-dropdown-search-border-color, #e0e0e0);
		padding: var(--cosmoz-dropdown-search-padding, 8px 12px);
	}

	.search-input {
		width: 100%;
		border: 1px solid var(--cosmoz-dropdown-search-input-border-color, #ccc);
		border-radius: var(--cosmoz-dropdown-search-input-border-radius, 4px);
		padding: var(--cosmoz-dropdown-search-input-padding, 8px 12px);
		font-size: var(--cosmoz-dropdown-search-input-font-size, 14px);
		line-height: var(--cosmoz-dropdown-search-input-line-height, 20px);
		color: var(--cosmoz-dropdown-search-input-color, #101010);
		background: var(--cosmoz-dropdown-search-input-bg-color, #fff);
		box-sizing: border-box;
		outline: none;
	}

	.search-input:focus {
		border-color: var(--cosmoz-dropdown-search-input-focus-border-color, var(--cosmoz-selection-color, #3a91e2));
		box-shadow: var(--cosmoz-dropdown-search-input-focus-box-shadow, 0 0 0 2px rgba(58, 145, 226, 0.2));
	}

	.search-input::placeholder {
		color: var(--cosmoz-dropdown-search-input-placeholder-color, #999);
	}

	.listbox-wrapper {
		max-height: var(--cosmoz-dropdown-menu-max-height, 300px);
		overflow-y: auto;
		overflow-x: hidden;
	}

	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
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

	.no-results {
		padding: 10px 24px;
		color: var(--cosmoz-dropdown-menu-no-results-color, #999);
		font-style: italic;
		text-align: center;
	}
`,xe="cosmoz-dropdown-list-searchable",Ee="button",Ft=t=>t.shadowRoot?.querySelector(xe)?.shadowRoot?.querySelector(".search-input")||null,Uo=t=>Array.from(t.children).filter(o=>o.slot!==Ee).filter(o=>o.style.display!=="none"),ee=t=>{Array.from(t.children).filter(o=>o.slot!==Ee).forEach((o,n)=>{o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),o.setAttribute("role","option"),o.setAttribute("id",`dropdown-item-${n}`)})},Qo=(t,e)=>{e.position.focused==="search"?e.visibleItems.length>0&&e.focusItem(e.visibleItems.length-1):t>0?e.focusItem(t-1):e.focusSearchInput()},qo=(t,e)=>{e.position.focused==="search"?e.visibleItems.length>0&&e.focusItem(0):t<e.visibleItems.length-1&&e.focusItem(t+1)},Ko=(t,e,o)=>{e.position.focused==="item"&&t>=0&&t<e.visibleItems.length?e.visibleItems[t].click():e.position.focused==="search"&&e.visibleItems.length===1&&(o.preventDefault(),e.visibleItems[0].click())},Xo=t=>{t.onSearchChange("");const e=Ft(t.host);e&&(e.value=""),t.focusSearchInput()},Zo=(t,e)=>{if(t.defaultPrevented||t.ctrlKey&&t.altKey)return;const o=Ft(e.host);if(!o)return;const n=document.activeElement;if(!(e.host.contains(n)||o===n||e.host.shadowRoot?.contains(n)))return;const r=e.position.focused==="item"?e.position.index:-1;switch(t.key){case"ArrowUp":t.preventDefault(),Qo(r,e);break;case"ArrowDown":t.preventDefault(),qo(r,e);break;case"Enter":t.preventDefault(),Ko(r,e,t);break;case"Escape":t.preventDefault(),Xo(e);break}},Go=({host:t,onSearchChange:e})=>{const[o,n]=T({index:-1,focused:"search"}),[s,r]=T(0),i=J(()=>Uo(t),[t,s]),c=I(()=>{const u=Ft(t);u&&(u.focus(),n({index:-1,focused:"search"}))},[t]),l=I(u=>{if(u>=0&&u<i.length){const a=i[u];a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),a.focus(),n({index:u,focused:"item"})}},[i]),d=I(u=>{Zo(u,{host:t,position:o,visibleItems:i,onSearchChange:e,focusSearchInput:c,focusItem:l})},[t,o,i,e,c,l]);return O(()=>{const u=()=>{r(f=>f+1),ee(t)};t.addEventListener("keydown",d,!0),ee(t);const a=new MutationObserver(u);return a.observe(t,{childList:!0}),()=>{t.removeEventListener("keydown",d,!0),a.disconnect()}},[t,d]),O(()=>{o.focused==="item"&&o.index>=i.length&&i.length>0&&n({index:Math.max(0,i.length-1),focused:"item"})},[i.length,o]),{position:o,focusItem:l,focusSearchInput:c}},Jo=({host:t,searchTerm:e})=>{O(()=>{(()=>{Array.from(t.children).forEach(s=>{if(s.slot==="button")return;const r=s.textContent?.toLowerCase()||"";e===""||r.includes(e.toLowerCase())?s.style.display="":s.style.display="none"})})()},[e,t])},tn=({host:t,searchTerm:e})=>{const[o,n]=T(!0);return O(()=>{if(!t.shadowRoot)return;const s=t.shadowRoot.querySelector("slot");if(!s)return;const r=()=>{const c=s.assignedElements({flatten:!0}).filter(l=>l.style.display!=="none").length;n(c>0)};return r(),s.addEventListener("slotchange",r),()=>s.removeEventListener("slotchange",r)},[e,t]),o},en=t=>{const{searchTerm:e,placeholder:o="Search...",onSearchChange:n,noResultsText:s="No results found",menuHost:r}=t,i=r||t,c=tn({host:t,searchTerm:e}),{position:l,focusSearchInput:d}=Go({host:i,onSearchChange:n}),u=I(a=>{const f=a.target;n(f.value)},[n]);return O(()=>{const a=()=>{requestAnimationFrame(()=>{d()})},f=new IntersectionObserver(h=>{h.forEach(w=>{w.isIntersecting&&w.intersectionRatio>0&&a()})});return f.observe(t),()=>f.disconnect()},[d]),A`
		<div class="dropdown-content">
			<div class="search-container">
				<input
					class="search-input"
					type="text"
					role="combobox"
					aria-autocomplete="list"
					aria-controls="dropdown-listbox"
					aria-expanded="true"
					aria-activedescendant=${l.focused==="item"?`dropdown-item-${l.index}`:""}
					.value=${e}
					placeholder=${o}
					@input=${u}
				/>
			</div>
			<div class="listbox-wrapper">
				<div role="listbox" id="dropdown-listbox">
					<slot></slot>
				</div>
				${!c&&e?A`<div class="no-results" role="status" aria-live="polite">${s}</div>`:""}
			</div>
		</div>
	`};customElements.define(xe,U(en,{styleSheets:[Yo]}));const on=t=>{const{placement:e,searchPlaceholder:o,noResultsText:n}=t,[s,r]=T(""),i=I(c=>{r(c)},[]);return Jo({host:t,searchTerm:s}),A`
		<cosmoz-dropdown
			.placement=${e}
			part="dropdown"
			exportparts="anchor, button, content, wrap, dropdown"
		>
			<slot name="button" slot="button"></slot>
			<cosmoz-dropdown-list-searchable
				.searchTerm=${s}
				.placeholder=${o}
				.noResultsText=${n}
				.onSearchChange=${i}
				.menuHost=${t}
			>
				<slot></slot>
			</cosmoz-dropdown-list-searchable>
		</cosmoz-dropdown>
	`};customElements.define("cosmoz-dropdown-menu-searchable",U(on));const rn={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},rt={render:()=>A`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},it={render:()=>A`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},ct={render:()=>A`
            <cosmoz-dropdown-menu-searchable>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Products</div>
                <div>Portfolio</div>
                <div>Contact</div>
                <div>Blog</div>
                <div>FAQ</div>
                <div>Support</div>
                <div>Documentation</div>
            </cosmoz-dropdown-menu-searchable>
        `},lt={name:"Dropdown with Bug - fixed on Chrome",render:()=>A`<style>
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
            <div class="overlay"></div>`};rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>\`;
  }
}`,...rt.parameters?.docs?.source}}};it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>\`;
  }
}`,...it.parameters?.docs?.source}}};ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <cosmoz-dropdown-menu-searchable>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Products</div>
                <div>Portfolio</div>
                <div>Contact</div>
                <div>Blog</div>
                <div>FAQ</div>
                <div>Support</div>
                <div>Documentation</div>
            </cosmoz-dropdown-menu-searchable>
        \`;
  }
}`,...ct.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  name: 'Dropdown with Bug - fixed on Chrome',
  render: () => {
    return html\`<style>
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
            <div class="overlay"></div>\`;
  }
}`,...lt.parameters?.docs?.source}}};const cn=["Dropdown","DropdownMenu","SearchableMenu","DropdownWithBug"];export{rt as Dropdown,it as DropdownMenu,lt as DropdownWithBug,ct as SearchableMenu,cn as __namedExportsOrder,rn as default};
