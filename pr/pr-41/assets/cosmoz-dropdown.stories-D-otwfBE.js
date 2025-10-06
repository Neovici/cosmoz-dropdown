import{f as we,B as xe,x as A,E as zt,T as At}from"./iframe-BO4rmb3b.js";let at,Jt=0;function Bt(t){at=t}function Ht(){at=null,Jt=0}function ye(){return Jt++}const xt=Symbol("haunted.phase"),lt=Symbol("haunted.hook"),Wt=Symbol("haunted.update"),Vt=Symbol("haunted.commit"),M=Symbol("haunted.effects"),Z=Symbol("haunted.layoutEffects"),Ct="haunted.context";class Ee{update;host;virtual;[lt];[M];[Z];constructor(e,o){this.update=e,this.host=o,this[lt]=new Map,this[M]=[],this[Z]=[]}run(e){Bt(this);let o=e();return Ht(),o}_runEffects(e){let o=this[e];Bt(this);for(let n of o)n.call(this);Ht()}runEffects(){this._runEffects(M)}runLayoutEffects(){this._runEffects(Z)}teardown(){this[lt].forEach(o=>{typeof o.teardown=="function"&&o.teardown()})}}const ze=Promise.resolve().then.bind(Promise.resolve());function te(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=ze(o))}}const Ae=te(),jt=te();class Ce{renderer;host;state;[xt];_updateQueued;constructor(e,o){this.renderer=e,this.host=o,this.state=new Ee(this.update.bind(this),o),this[xt]=null,this._updateQueued=!1}update(){this._updateQueued||(Ae(()=>{let e=this.handlePhase(Wt);jt(()=>{this.handlePhase(Vt,e),jt(()=>{this.handlePhase(M)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,o){switch(this[xt]=e,e){case Vt:this.commit(o),this.runEffects(Z);return;case Wt:return this.render();case M:return this.runEffects(M)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const _e=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Se=t=>t?.map(e=>typeof e=="string"?_e(e):e),ke=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),mt=ke,$e=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function Re(t){class e extends Ce{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:a=!0,shadowRootInit:d={},styleSheets:u}=r||s||{},l=Se(n.styleSheets||u);class f extends i{_scheduler;static get observedAttributes(){return n.observedAttributes||c||[]}constructor(){if(super(),a===!1)this._scheduler=new e(n,this);else{const p=this.attachShadow({mode:"open",...d});l&&(p.adoptedStyleSheets=l),this._scheduler=new e(n,p,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,m,g){if(m===g)return;let w=g===""?!0:g;Reflect.set(this,$e(p),w)}}function h(v){let p=v,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(g){m&&p===g||(m=!0,p=g,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(i.prototype,{getPrototypeOf(v){return v},set(v,p,m,g){let w;return p in v?(w=Object.getOwnPropertyDescriptor(v,p),w&&w.set?(w.set.call(g,m),!0):(Reflect.set(v,p,m,g),!0)):(typeof p=="symbol"||p[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:m}:w=h(m),Object.defineProperty(g,p,w),w.set&&w.set.call(g,m),!0)}});return Object.setPrototypeOf(f.prototype,b),f}return o}class j{id;state;constructor(e,o){this.id=e,this.state=o}}function Oe(t,...e){let o=ye(),n=at[lt],s=n.get(o);return s||(s=new t(o,at,...e),n.set(o,s)),s.update(...e)}function Y(t){return Oe.bind(null,t)}function ee(t){return Y(class extends j{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function oe(t,e){t[M].push(e)}const D=ee(oe),Te=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Le=Y(class extends j{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,oe(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Te(this.state.host).dispatchEvent(new CustomEvent(Ct,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function De(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Ct,this)}disconnectedCallback(){this.removeEventListener(Ct,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Le(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const J=Y(class extends j{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),y=(t,e)=>J(()=>t,e);function Pe(t,e){t[Z].push(e)}ee(Pe);const T=Y(class extends j{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Y(class extends j{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Me=/([A-Z])/gu;Y(class extends j{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Me,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Fe({render:t}){const e=Re(t),o=De(e);return{component:e,createContext:o}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne={ATTRIBUTE:1,CHILD:2},kt=t=>(...e)=>({_$litDirective$:t,values:e});let $t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),G(n,e);return!0},dt=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},se=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Be(e)}};function Ie(t){this._$AN!==void 0?(dt(this),this._$AM=t,se(this)):this._$AM=t}function Ne(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)G(n[r],!1),dt(n[r]);else n!=null&&(G(n,!1),dt(n));else G(this,t)}const Be=t=>{t.type==ne.CHILD&&(t._$AP??=Ne,t._$AQ??=Ie)};class He extends $t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),se(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(G(this,e),dt(this))}setValue(e){if(we(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:U}=Fe({render:xe}),We=t=>{const e=J(()=>({}),[]);return J(()=>Object.assign(e,t),[e,...Object.values(t)])},Yt=t=>t.matches(":focus-within"),Ve=({disabled:t,onFocus:e})=>{const[o,n]=T(),{focused:s,closed:r}=o||{},i=s&&!t,c=We({closed:r,onFocus:e}),a=y(u=>n(l=>({...l,closed:u})),[]),d=y(u=>{const l=u.currentTarget;return Yt(l)?n(f=>({focused:!0,closed:!f?.closed})):l.focus()},[]);return D(()=>{if(!i)return;const u=l=>{if(l.defaultPrevented)return;const{closed:f}=c;l.key==="Escape"&&!f?(l.preventDefault(),a(!0)):["ArrowUp","Up"].includes(l.key)&&f&&(l.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:a,onToggle:d,onFocus:y(u=>{const l=Yt(u.currentTarget);n({focused:l}),c.onFocus?.(l)},[c])}},Ut=["focusin","focusout"],je=t=>{const e=Ve(t),{onFocus:o}=e;return D(()=>(t.setAttribute("tabindex","0"),Ut.forEach(n=>t.addEventListener(n,o)),()=>{Ut.forEach(n=>t.removeEventListener(n,o))}),[]),e},Ye=mt`
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
`,Ue=()=>A` <slot></slot> `;customElements.define("cosmoz-dropdown-list",U(Ue,{styleSheets:[Ye]}));const qe=({placement:t})=>A` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",U(qe));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qe(t,e,o){return t?e(t):o?.(t)}const yt=new WeakMap,qt=kt(class extends He{render(t){return zt}update(t,[e]){const o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),zt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let o=yt.get(e);o===void 0&&(o=new WeakMap,yt.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?yt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re="important",Ke=" !"+re,Xe=kt(class extends $t{constructor(t){if(super(t),t.type!==ne.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Ke);n.includes("-")||r?o.setProperty(n,r?s.slice(0,-11):s,r?re:""):o[n]=s}}return At}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze={},Ge=kt(class extends $t{constructor(){super(...arguments),this.ot=Ze}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,s)=>n===this.ot[s])))return At}else if(this.ot===e)return At;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),Je=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},to=mt`
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
`,eo=()=>A`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Je(U(eo,{styleSheets:[to]})));const ut=Math.min,F=Math.max,ft=Math.round,st=Math.floor,S=t=>({x:t,y:t}),oo={left:"right",right:"left",bottom:"top",top:"bottom"},no={start:"end",end:"start"};function Qt(t,e,o){return F(t,ut(e,o))}function Rt(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function Ot(t){return t.split("-")[1]}function ie(t){return t==="x"?"y":"x"}function ce(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(W(t))?"y":"x"}function le(t){return ie(tt(t))}function so(t,e,o){o===void 0&&(o=!1);const n=Ot(t),s=le(t),r=ce(s);let i=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ht(i)),[i,ht(i)]}function ro(t){const e=ht(t);return[_t(t),e,_t(e)]}function _t(t){return t.replace(/start|end/g,e=>no[e])}function io(t,e,o){const n=["left","right"],s=["right","left"],r=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:n:e?n:s;case"left":case"right":return e?r:i;default:return[]}}function co(t,e,o,n){const s=Ot(t);let r=io(W(t),o==="start",n);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(_t)))),r}function ht(t){return t.replace(/left|right|bottom|top/g,e=>oo[e])}function lo(t){return{top:0,right:0,bottom:0,left:0,...t}}function ao(t){return typeof t!="number"?lo(t):{top:t,right:t,bottom:t,left:t}}function pt(t){const{x:e,y:o,width:n,height:s}=t;return{width:n,height:s,top:o,left:e,right:e+n,bottom:o+s,x:e,y:o}}function Kt(t,e,o){let{reference:n,floating:s}=t;const r=tt(e),i=le(e),c=ce(i),a=W(e),d=r==="y",u=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2,f=n[c]/2-s[c]/2;let h;switch(a){case"top":h={x:u,y:n.y-s.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:l};break;case"left":h={x:n.x-s.width,y:l};break;default:h={x:n.x,y:n.y}}switch(Ot(e)){case"start":h[i]-=f*(o&&d?-1:1);break;case"end":h[i]+=f*(o&&d?-1:1);break}return h}const uo=async(t,e,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:i}=o,c=r.filter(Boolean),a=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:l}=Kt(d,n,a),f=n,h={},b=0;for(let v=0;v<c.length;v++){const{name:p,fn:m}=c[v],{x:g,y:w,data:E,reset:x}=await m({x:u,y:l,initialPlacement:n,placement:f,strategy:s,middlewareData:h,rects:d,platform:i,elements:{reference:t,floating:e}});u=g??u,l=w??l,h={...h,[p]:{...h[p],...E}},x&&b<=50&&(b++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:u,y:l}=Kt(d,f,a)),v=-1)}return{x:u,y:l,placement:f,strategy:s,middlewareData:h}};async function ae(t,e){var o;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:i,elements:c,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:l="floating",altBoundary:f=!1,padding:h=0}=Rt(e,t),b=ao(h),p=c[f?l==="floating"?"reference":"floating":l],m=pt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(p)))==null||o?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:a})),g=l==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),E=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},x=pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:w,strategy:a}):g);return{top:(m.top-x.top+b.top)/E.y,bottom:(x.bottom-m.bottom+b.bottom)/E.y,left:(m.left-x.left+b.left)/E.x,right:(x.right-m.right+b.right)/E.x}}const fo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:a,elements:d}=e,{mainAxis:u=!0,crossAxis:l=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...p}=Rt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const m=W(s),g=tt(c),w=W(c)===c,E=await(a.isRTL==null?void 0:a.isRTL(d.floating)),x=f||(w||!v?[ht(c)]:ro(c)),Q=b!=="none";!f&&Q&&x.push(...co(c,v,b,E));const N=[c,...x],wt=await ae(e,p),nt=[];let K=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&nt.push(wt[m]),l){const P=so(s,i,E);nt.push(wt[P[0]],wt[P[1]])}if(K=[...K,{placement:s,overflows:nt}],!nt.every(P=>P<=0)){var Mt,Ft;const P=(((Mt=r.flip)==null?void 0:Mt.index)||0)+1,Nt=N[P];if(Nt)return{data:{index:P,overflows:K},reset:{placement:Nt}};let X=(Ft=K.filter(B=>B.overflows[0]<=0).sort((B,R)=>B.overflows[1]-R.overflows[1])[0])==null?void 0:Ft.placement;if(!X)switch(h){case"bestFit":{var It;const B=(It=K.filter(R=>{if(Q){const O=tt(R.placement);return O===g||O==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(O=>O>0).reduce((O,be)=>O+be,0)]).sort((R,O)=>R[1]-O[1])[0])==null?void 0:It[0];B&&(X=B);break}case"initialPlacement":X=c;break}if(s!==X)return{reset:{placement:X}}}return{}}}},ho=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:p=>{let{x:m,y:g}=p;return{x:m,y:g}}},...a}=Rt(t,e),d={x:o,y:n},u=await ae(e,a),l=tt(W(s)),f=ie(l);let h=d[f],b=d[l];if(r){const p=f==="y"?"top":"left",m=f==="y"?"bottom":"right",g=h+u[p],w=h-u[m];h=Qt(g,h,w)}if(i){const p=l==="y"?"top":"left",m=l==="y"?"bottom":"right",g=b+u[p],w=b-u[m];b=Qt(g,b,w)}const v=c.fn({...e,[f]:h,[l]:b});return{...v,data:{x:v.x-o,y:v.y-n,enabled:{[f]:r,[l]:i}}}}}};function vt(){return typeof window<"u"}function q(t){return de(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $(t){var e;return(e=(de(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function de(t){return vt()?t instanceof Node||t instanceof z(t).Node:!1}function C(t){return vt()?t instanceof Element||t instanceof z(t).Element:!1}function k(t){return vt()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function Xt(t){return!vt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:o,overflowY:n,display:s}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(s)}function po(t){return["table","td","th"].includes(q(t))}function gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Tt(t){const e=Lt(),o=C(t)?_(t):t;return["transform","translate","scale","rotate","perspective"].some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function mo(t){let e=L(t);for(;k(e)&&!V(e);){if(Tt(e))return e;if(gt(e))return null;e=L(e)}return null}function Lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(q(t))}function _(t){return z(t).getComputedStyle(t)}function bt(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function L(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||$(t);return Xt(e)?e.host:e}function ue(t){const e=L(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&ot(e)?e:ue(e)}function et(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=ue(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),i=z(s);if(r){const c=St(i);return e.concat(i,i.visualViewport||[],ot(s)?s:[],c&&o?et(c):[])}return e.concat(s,et(s,[],o))}function St(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function fe(t){const e=_(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=k(t),r=s?t.offsetWidth:o,i=s?t.offsetHeight:n,c=ft(o)!==r||ft(n)!==i;return c&&(o=r,n=i),{width:o,height:n,$:c}}function Dt(t){return C(t)?t:t.contextElement}function H(t){const e=Dt(t);if(!k(e))return S(1);const o=e.getBoundingClientRect(),{width:n,height:s,$:r}=fe(e);let i=(r?ft(o.width):o.width)/n,c=(r?ft(o.height):o.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const vo=S(0);function he(t){const e=z(t);return!Lt()||!e.visualViewport?vo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function go(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==z(t)?!1:e}function I(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=Dt(t);let i=S(1);e&&(n?C(n)&&(i=H(n)):i=H(t));const c=go(r,o,n)?he(r):S(0);let a=(s.left+c.x)/i.x,d=(s.top+c.y)/i.y,u=s.width/i.x,l=s.height/i.y;if(r){const f=z(r),h=n&&C(n)?z(n):n;let b=f,v=St(b);for(;v&&n&&h!==b;){const p=H(v),m=v.getBoundingClientRect(),g=_(v),w=m.left+(v.clientLeft+parseFloat(g.paddingLeft))*p.x,E=m.top+(v.clientTop+parseFloat(g.paddingTop))*p.y;a*=p.x,d*=p.y,u*=p.x,l*=p.y,a+=w,d+=E,b=z(v),v=St(b)}}return pt({width:u,height:l,x:a,y:d})}function Pt(t,e){const o=bt(t).scrollLeft;return e?e.left+o:I($(t)).left+o}function pe(t,e,o){o===void 0&&(o=!1);const n=t.getBoundingClientRect(),s=n.left+e.scrollLeft-(o?0:Pt(t,n)),r=n.top+e.scrollTop;return{x:s,y:r}}function bo(t){let{elements:e,rect:o,offsetParent:n,strategy:s}=t;const r=s==="fixed",i=$(n),c=e?gt(e.floating):!1;if(n===i||c&&r)return o;let a={scrollLeft:0,scrollTop:0},d=S(1);const u=S(0),l=k(n);if((l||!l&&!r)&&((q(n)!=="body"||ot(i))&&(a=bt(n)),k(n))){const h=I(n);d=H(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}const f=i&&!l&&!r?pe(i,a,!0):S(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-a.scrollLeft*d.x+u.x+f.x,y:o.y*d.y-a.scrollTop*d.y+u.y+f.y}}function wo(t){return Array.from(t.getClientRects())}function xo(t){const e=$(t),o=bt(t),n=t.ownerDocument.body,s=F(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=F(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+Pt(t);const c=-o.scrollTop;return _(n).direction==="rtl"&&(i+=F(e.clientWidth,n.clientWidth)-s),{width:s,height:r,x:i,y:c}}function yo(t,e){const o=z(t),n=$(t),s=o.visualViewport;let r=n.clientWidth,i=n.clientHeight,c=0,a=0;if(s){r=s.width,i=s.height;const d=Lt();(!d||d&&e==="fixed")&&(c=s.offsetLeft,a=s.offsetTop)}return{width:r,height:i,x:c,y:a}}function Eo(t,e){const o=I(t,!0,e==="fixed"),n=o.top+t.clientTop,s=o.left+t.clientLeft,r=k(t)?H(t):S(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,a=s*r.x,d=n*r.y;return{width:i,height:c,x:a,y:d}}function Zt(t,e,o){let n;if(e==="viewport")n=yo(t,o);else if(e==="document")n=xo($(t));else if(C(e))n=Eo(e,o);else{const s=he(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return pt(n)}function me(t,e){const o=L(t);return o===e||!C(o)||V(o)?!1:_(o).position==="fixed"||me(o,e)}function zo(t,e){const o=e.get(t);if(o)return o;let n=et(t,[],!1).filter(c=>C(c)&&q(c)!=="body"),s=null;const r=_(t).position==="fixed";let i=r?L(t):t;for(;C(i)&&!V(i);){const c=_(i),a=Tt(i);!a&&c.position==="fixed"&&(s=null),(r?!a&&!s:!a&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ot(i)&&!a&&me(t,i))?n=n.filter(u=>u!==i):s=c,i=L(i)}return e.set(t,n),n}function Ao(t){let{element:e,boundary:o,rootBoundary:n,strategy:s}=t;const i=[...o==="clippingAncestors"?gt(e)?[]:zo(e,this._c):[].concat(o),n],c=i[0],a=i.reduce((d,u)=>{const l=Zt(e,u,s);return d.top=F(l.top,d.top),d.right=ut(l.right,d.right),d.bottom=ut(l.bottom,d.bottom),d.left=F(l.left,d.left),d},Zt(e,c,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Co(t){const{width:e,height:o}=fe(t);return{width:e,height:o}}function _o(t,e,o){const n=k(e),s=$(e),r=o==="fixed",i=I(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=S(0);if(n||!n&&!r)if((q(e)!=="body"||ot(s))&&(c=bt(e)),n){const f=I(e,!0,r,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else s&&(a.x=Pt(s));const d=s&&!n&&!r?pe(s,c):S(0),u=i.left+c.scrollLeft-a.x-d.x,l=i.top+c.scrollTop-a.y-d.y;return{x:u,y:l,width:i.width,height:i.height}}function Et(t){return _(t).position==="static"}function Gt(t,e){if(!k(t)||_(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return $(t)===o&&(o=o.ownerDocument.body),o}function ve(t,e){const o=z(t);if(gt(t))return o;if(!k(t)){let s=L(t);for(;s&&!V(s);){if(C(s)&&!Et(s))return s;s=L(s)}return o}let n=Gt(t,e);for(;n&&po(n)&&Et(n);)n=Gt(n,e);return n&&V(n)&&Et(n)&&!Tt(n)?o:n||mo(t)||o}const So=async function(t){const e=this.getOffsetParent||ve,o=this.getDimensions,n=await o(t.floating);return{reference:_o(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ko(t){return _(t).direction==="rtl"}const $o={convertOffsetParentRelativeRectToViewportRelativeRect:bo,getDocumentElement:$,getClippingRect:Ao,getOffsetParent:ve,getElementRects:So,getClientRects:wo,getDimensions:Co,getScale:H,isElement:C,isRTL:ko};function ge(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ro(t,e){let o=null,n;const s=$(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();const d=t.getBoundingClientRect(),{left:u,top:l,width:f,height:h}=d;if(c||e(),!f||!h)return;const b=st(l),v=st(s.clientWidth-(u+f)),p=st(s.clientHeight-(l+h)),m=st(u),w={rootMargin:-b+"px "+-v+"px "+-p+"px "+-m+"px",threshold:F(0,ut(1,a))||1};let E=!0;function x(Q){const N=Q[0].intersectionRatio;if(N!==a){if(!E)return i();N?i(!1,N):n=setTimeout(()=>{i(!1,1e-7)},1e3)}N===1&&!ge(d,t.getBoundingClientRect())&&i(),E=!1}try{o=new IntersectionObserver(x,{...w,root:s.ownerDocument})}catch{o=new IntersectionObserver(x,w)}o.observe(t)}return i(!0),r}function Oo(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,d=Dt(t),u=s||r?[...d?et(d):[],...et(e)]:[];u.forEach(m=>{s&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});const l=d&&c?Ro(d,o):null;let f=-1,h=null;i&&(h=new ResizeObserver(m=>{let[g]=m;g&&g.target===d&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=h)==null||w.observe(e)})),o()}),d&&!a&&h.observe(d),h.observe(e));let b,v=a?I(t):null;a&&p();function p(){const m=I(t);v&&!ge(v,m)&&o(),v=m,b=requestAnimationFrame(p)}return o(),()=>{var m;u.forEach(g=>{s&&g.removeEventListener("scroll",o),r&&g.removeEventListener("resize",o)}),l?.(),(m=h)==null||m.disconnect(),h=null,a&&cancelAnimationFrame(b)}}const To=ho,Lo=fo,Do=(t,e,o)=>{const n=new Map,s={platform:$o,...o},r={...s.platform,_c:n};return uo(t,e,{...s,platform:r})},Po=[Lo({fallbackAxisSideDirection:"start",crossAxis:!1}),To()],Mo=({placement:t="bottom-start",strategy:e,middleware:o=Po}={})=>{const[n,s]=T(),[r,i]=T(),[c,a]=T();return D(()=>{if(!n||!(r instanceof HTMLElement)){a(void 0);return}return Oo(n,r,()=>Do(n,r,{placement:t,strategy:e,middleware:o}).then(a))},[n,r,t,e,o]),{setReference:s,setFloating:i,styles:J(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Fo=t=>t.preventDefault(),Io=mt`
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
`,No=t=>{const{placement:e,strategy:o,middleware:n,render:s}=t,{active:r,onToggle:i}=je(t),{styles:c,setReference:a,setFloating:d}=Mo({placement:e,strategy:o,middleware:n});return A` <div class="anchor" part="anchor" ${qt(a)}>
			<button
				@mousedown=${Fo}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Qe(r,()=>A`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Xe(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${qt(d)}
					><slot></slot>${Ge([s],()=>s?.()||zt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",U(No,{styleSheets:[Io]}));const Bo=mt`
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
`,Ho=(t,e)=>{const o=y(()=>Array.from(t.children).filter(i=>i.slot!=="button"),[t]),n=J(()=>o().filter(c=>c.style.display!=="none"),[o,e]),s=y(()=>t.shadowRoot?.querySelector("cosmoz-dropdown-list-searchable")?.shadowRoot?.querySelector(".search-input")||null,[t]);return{visibleItems:n,getSearchInput:s,getSlottedElements:o}},Wo=(t,e,o)=>{const n=y(()=>{const r=e();r&&(r.focus(),o({index:-1,focused:"search"}))},[e,o]),s=y(r=>{if(r>=0&&r<t.length){const i=t[r];i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),i.focus(),o({index:r,focused:"item"})}},[t,o]);return{focusSearchInput:n,focusItem:s}},Vo=({position:t,visibleItems:e,focusItem:o,focusSearchInput:n,onSearchChange:s,getSearchInput:r})=>{const i=y(l=>{e.length===1&&(l.preventDefault(),e[0].click())},[e]),c=y(l=>{t.focused==="search"?e.length>0&&o(e.length-1):l>0?o(l-1):n()},[t.focused,o,n,e]),a=y(l=>{t.focused==="search"?e.length>0&&o(0):l<e.length-1&&o(l+1)},[t.focused,o,e]),d=y((l,f)=>{t.focused==="item"&&l>=0&&l<e.length?e[l].click():t.focused==="search"&&i(f)},[t.focused,i,e]),u=y(()=>{s("");const l=r();l&&(l.value=""),n()},[s,r,n]);return{handleArrowUp:c,handleArrowDown:a,handleEnter:d,handleEscape:u}},jo=({host:t,position:e,getSearchInput:o,handleArrowUp:n,handleArrowDown:s,handleEnter:r,handleEscape:i})=>y(c=>{if(c.defaultPrevented||c.ctrlKey&&c.altKey)return;const a=o();if(!a)return;const d=document.activeElement;if(!(t.contains(d)||a===d||t.shadowRoot?.contains(d)))return;const l=e.focused==="item"?e.index:-1;switch(c.key){case"ArrowUp":case"Up":c.preventDefault(),n(l);break;case"ArrowDown":case"Down":c.preventDefault(),s(l);break;case"Enter":c.preventDefault(),r(l,c);break;case"Escape":c.preventDefault(),i();break}},[t,o,e,n,s,r,i]),Yo=(t,e,o,n)=>{D(()=>{const s=()=>{o().forEach((a,d)=>{a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),a.setAttribute("role","option"),a.setAttribute("id",`dropdown-item-${d}`)})},r=()=>{n(c=>c+1),s()};t.addEventListener("keydown",e,!0),s();const i=new MutationObserver(r);return i.observe(t,{childList:!0}),()=>{t.removeEventListener("keydown",e,!0),i.disconnect()}},[t,e,o,n])},Uo=({host:t,onSearchChange:e})=>{const[o,n]=T({index:-1,focused:"search"}),[s,r]=T(0),{visibleItems:i,getSearchInput:c,getSlottedElements:a}=Ho(t,s),{focusSearchInput:d,focusItem:u}=Wo(i,c,n),{handleArrowUp:l,handleArrowDown:f,handleEnter:h,handleEscape:b}=Vo({position:o,visibleItems:i,focusItem:u,focusSearchInput:d,onSearchChange:e,getSearchInput:c}),v=jo({host:t,position:o,getSearchInput:c,handleArrowUp:l,handleArrowDown:f,handleEnter:h,handleEscape:b});return Yo(t,v,a,r),D(()=>{o.focused==="item"&&o.index>=i.length&&i.length>0&&n({index:Math.max(0,i.length-1),focused:"item"})},[i.length,o]),{position:o,focusItem:u,focusSearchInput:d}},qo=({host:t,searchTerm:e})=>{D(()=>{(()=>{Array.from(t.children).forEach(s=>{if(s.slot==="button")return;const r=s.textContent?.toLowerCase()||"";e===""||r.includes(e.toLowerCase())?s.style.display="":s.style.display="none"})})()},[e,t])},Qo=({host:t,searchTerm:e})=>{const[o,n]=T(!0);return D(()=>{const s=t.shadowRoot?.querySelector("slot");if(s){const r=()=>{const c=s.assignedElements({flatten:!0}).filter(a=>a.style.display!=="none").length;n(c>0)};return r(),s.addEventListener("slotchange",r),()=>s.removeEventListener("slotchange",r)}},[e,t]),o},Ko=t=>{const{searchTerm:e,placeholder:o="Search...",onSearchChange:n,noResultsText:s="No results found",menuHost:r}=t,i=r||t,c=Qo({host:i,searchTerm:e}),{position:a,focusSearchInput:d}=Uo({host:i,onSearchChange:n}),u=y(l=>{const f=l.target;n(f.value)},[n]);return D(()=>{const l=()=>{setTimeout(()=>{d()},0)},f=new IntersectionObserver(h=>{h.forEach(b=>{b.isIntersecting&&b.intersectionRatio>0&&l()})});return f.observe(t),()=>f.disconnect()},[d]),A`
		<div class="dropdown-content">
			<div class="search-container">
				<input
					class="search-input"
					type="text"
					role="combobox"
					aria-autocomplete="list"
					aria-controls="dropdown-listbox"
					aria-expanded="true"
					aria-activedescendant=${a.focused==="item"?`dropdown-item-${a.index}`:""}
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
	`};customElements.define("cosmoz-dropdown-list-searchable",U(Ko,{styleSheets:[Bo]}));const Xo=t=>{const{placement:e,searchPlaceholder:o,noResultsText:n}=t,[s,r]=T(""),i=y(c=>{r(c)},[]);return qo({host:t,searchTerm:s}),A`
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
	`};customElements.define("cosmoz-dropdown-menu-searchable",U(Xo));const Jo={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},rt={render:()=>A`<cosmoz-dropdown>
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
        </cosmoz-dropdown-menu>`},ct={name:"Dropdown with Bug - fixed on Chrome",render:()=>A`<style>
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
}`,...ct.parameters?.docs?.source}}};const tn=["Dropdown","DropdownMenu","DropdownWithBug"];export{rt as Dropdown,it as DropdownMenu,ct as DropdownWithBug,tn as __namedExportsOrder,Jo as default};
