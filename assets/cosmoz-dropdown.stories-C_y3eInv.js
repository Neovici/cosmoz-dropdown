import{f as we,B as ye,x as $,E as xt,T as Ct}from"./iframe-BOApJtC4.js";let rt,Jt=0;function Bt(t){rt=t}function Ht(){rt=null,Jt=0}function xe(){return Jt++}const vt=Symbol("haunted.phase"),ot=Symbol("haunted.hook"),Wt=Symbol("haunted.update"),jt=Symbol("haunted.commit"),L=Symbol("haunted.effects"),Q=Symbol("haunted.layoutEffects"),Et="haunted.context";class Ce{update;host;virtual;[ot];[L];[Q];constructor(e,n){this.update=e,this.host=n,this[ot]=new Map,this[L]=[],this[Q]=[]}run(e){Bt(this);let n=e();return Ht(),n}_runEffects(e){let n=this[e];Bt(this);for(let o of n)o.call(this);Ht()}runEffects(){this._runEffects(L)}runLayoutEffects(){this._runEffects(Q)}teardown(){this[ot].forEach(n=>{typeof n.teardown=="function"&&n.teardown()})}}const Ee=Promise.resolve().then.bind(Promise.resolve());function te(){let t=[],e;function n(){e=null;let o=t;t=[];for(var s=0,r=o.length;s<r;s++)o[s]()}return function(o){t.push(o),e==null&&(e=Ee(n))}}const Ae=te(),Yt=te();class _e{renderer;host;state;[vt];_updateQueued;constructor(e,n){this.renderer=e,this.host=n,this.state=new Ce(this.update.bind(this),n),this[vt]=null,this._updateQueued=!1}update(){this._updateQueued||(Ae(()=>{let e=this.handlePhase(Wt);Yt(()=>{this.handlePhase(jt,e),Yt(()=>{this.handlePhase(L)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,n){switch(this[vt]=e,e){case jt:this.commit(n),this.runEffects(Q);return;case Wt:return this.render();case L:return this.runEffects(L)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const Se=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ke=t=>t?.map(e=>typeof e=="string"?Se(e):e),ze=(t,...e)=>t.flatMap((n,o)=>[n,e[o]||""]).join(""),St=ze,Re=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function $e(t){class e extends _e{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function n(o,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:l=!0,shadowRootInit:a={},styleSheets:d}=r||s||{},u=ke(o.styleSheets||d);class m extends i{_scheduler;static get observedAttributes(){return o.observedAttributes||c||[]}constructor(){if(super(),l===!1)this._scheduler=new e(o,this);else{const h=this.attachShadow({mode:"open",...a});u&&(h.adoptedStyleSheets=u),this._scheduler=new e(o,h,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(h,p,v){if(p===v)return;let b=v===""?!0:v;Reflect.set(this,Re(h),b)}}function f(g){let h=g,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return h},set(v){p&&h===v||(p=!0,h=v,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(i.prototype,{getPrototypeOf(g){return g},set(g,h,p,v){let b;return h in g?(b=Object.getOwnPropertyDescriptor(g,h),b&&b.set?(b.set.call(v,p),!0):(Reflect.set(g,h,p,v),!0)):(typeof h=="symbol"||h[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:p}:b=f(p),Object.defineProperty(v,h,b),b.set&&b.set.call(v,p),!0)}});return Object.setPrototypeOf(m.prototype,w),m}return n}class H{id;state;constructor(e,n){this.id=e,this.state=n}}function Oe(t,...e){let n=xe(),o=rt[ot],s=o.get(n);return s||(s=new t(n,rt,...e),o.set(n,s)),s.update(...e)}function W(t){return Oe.bind(null,t)}function ee(t){return W(class extends H{callback;lastValues;values;_teardown;constructor(e,n,o,s){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function ne(t,e){t[L].push(e)}const kt=ee(ne),Te=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Le=W(class extends H{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ne(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Te(this.state.host).dispatchEvent(new CustomEvent(Et,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:s}=e;this.value=o?s:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function Pe(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Et,this)}disconnectedCallback(){this.removeEventListener(Et,this)}handleEvent(o){const{detail:s}=o;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let s of this.listeners)s(o)}get value(){return this._value}},Consumer:t(function({render:o}){const s=Le(n);return o(s)},{useShadowDOM:!1}),defaultValue:e};return n}}const it=W(class extends H{value;values;constructor(t,e,n,o){super(t,e),this.value=n(),this.values=o}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),bt=(t,e)=>it(()=>t,e);function Ie(t,e){t[Q].push(e)}ee(Ie);const st=W(class extends H{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});W(class extends H{reducer;currentState;constructor(t,e,n,o,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(o):o}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const De=/([A-Z])/gu;W(class extends H{property;eventName;constructor(t,e,n,o){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(De,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updateProp(o))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Fe({render:t}){const e=$e(t),n=Pe(e);return{component:e,createContext:n}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={ATTRIBUTE:1,CHILD:2},zt=t=>(...e)=>({_$litDirective$:t,values:e});let Rt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),q(o,e);return!0},ct=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},se=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Be(e)}};function Me(t){this._$AN!==void 0?(ct(this),this._$AM=t,se(this)):this._$AM=t}function Ne(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)q(o[r],!1),ct(o[r]);else o!=null&&(q(o,!1),ct(o));else q(this,t)}const Be=t=>{t.type==oe.CHILD&&(t._$AP??=Ne,t._$AQ??=Me)};class He extends Rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),se(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(q(this,e),ct(this))}setValue(e){if(we(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:ft}=Fe({render:ye}),We=t=>{const e=it(()=>({}),[]);return it(()=>Object.assign(e,t),[e,...Object.values(t)])},Vt=t=>t.matches(":focus-within"),je=({disabled:t,onFocus:e})=>{const[n,o]=st(),{focused:s,closed:r}=n||{},i=s&&!t,c=We({closed:r,onFocus:e}),l=bt(d=>o(u=>({...u,closed:d})),[]),a=bt(d=>{const u=d.currentTarget;return Vt(u)?o(m=>({focused:!0,closed:!m?.closed})):u.focus()},[]);return kt(()=>{if(!i)return;const d=u=>{if(u.defaultPrevented)return;const{closed:m}=c;u.key==="Escape"&&!m?(u.preventDefault(),l(!0)):["ArrowUp","Up"].includes(u.key)&&m&&(u.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:a,onFocus:bt(d=>{const u=Vt(d.currentTarget);o({focused:u}),c.onFocus?.(u)},[c])}},Ut=["focusin","focusout"],Ye=t=>{const e=je(t),{onFocus:n}=e;return kt(()=>(t.setAttribute("tabindex","0"),Ut.forEach(o=>t.addEventListener(o,n)),()=>{Ut.forEach(o=>t.removeEventListener(o,n))}),[]),e},Ve=St`
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
`,Ue=()=>$` <slot></slot> `;customElements.define("cosmoz-dropdown-list",ft(Ue,{styleSheets:[Ve]}));const Qe=({placement:t})=>$` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",ft(Qe));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(t,e,n){return t?e(t):n?.(t)}const wt=new WeakMap,Qt=zt(class extends He{render(t){return xt}update(t,[e]){const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),xt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let n=wt.get(e);n===void 0&&(n=new WeakMap,wt.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?wt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re="important",Xe=" !"+re,Ze=zt(class extends Rt{constructor(t){if(super(t),t.type!==oe.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(Xe);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?re:""):n[o]=s}}return Ct}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke={},Ge=zt(class extends Rt{constructor(){super(...arguments),this.ot=Ke}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((o,s)=>o===this.ot[s])))return Ct}else if(this.ot===e)return Ct;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),Je=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},tn=St`
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
`,en=()=>$`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Je(ft(en,{styleSheets:[tn]})));const lt=Math.min,P=Math.max,at=Math.round,J=Math.floor,_=t=>({x:t,y:t}),nn={left:"right",right:"left",bottom:"top",top:"bottom"},on={start:"end",end:"start"};function qt(t,e,n){return P(t,lt(e,n))}function $t(t,e){return typeof t=="function"?t(e):t}function N(t){return t.split("-")[0]}function Ot(t){return t.split("-")[1]}function ie(t){return t==="x"?"y":"x"}function ce(t){return t==="y"?"height":"width"}function X(t){return["top","bottom"].includes(N(t))?"y":"x"}function le(t){return ie(X(t))}function sn(t,e,n){n===void 0&&(n=!1);const o=Ot(t),s=le(t),r=ce(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ut(i)),[i,ut(i)]}function rn(t){const e=ut(t);return[At(t),e,At(e)]}function At(t){return t.replace(/start|end/g,e=>on[e])}function cn(t,e,n){const o=["left","right"],s=["right","left"],r=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?r:i;default:return[]}}function ln(t,e,n,o){const s=Ot(t);let r=cn(N(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(At)))),r}function ut(t){return t.replace(/left|right|bottom|top/g,e=>nn[e])}function an(t){return{top:0,right:0,bottom:0,left:0,...t}}function un(t){return typeof t!="number"?an(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function Xt(t,e,n){let{reference:o,floating:s}=t;const r=X(e),i=le(e),c=ce(i),l=N(e),a=r==="y",d=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,m=o[c]/2-s[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-s.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-s.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Ot(e)){case"start":f[i]-=m*(n&&a?-1:1);break;case"end":f[i]+=m*(n&&a?-1:1);break}return f}const dn=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:u}=Xt(a,o,l),m=o,f={},w=0;for(let g=0;g<c.length;g++){const{name:h,fn:p}=c[g],{x:v,y:b,data:x,reset:y}=await p({x:d,y:u,initialPlacement:o,placement:m,strategy:s,middlewareData:f,rects:a,platform:i,elements:{reference:t,floating:e}});d=v??d,u=b??u,f={...f,[h]:{...f[h],...x}},y&&w<=50&&(w++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(a=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:d,y:u}=Xt(a,m,l)),g=-1)}return{x:d,y:u,placement:m,strategy:s,middlewareData:f}};async function ae(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=$t(e,t),w=un(f),h=c[m?u==="floating"?"reference":"floating":u],p=dt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(h)))==null||n?h:h.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),v=u==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),x=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},y=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:l}):v);return{top:(p.top-y.top+w.top)/x.y,bottom:(y.bottom-p.bottom+w.bottom)/x.y,left:(p.left-y.left+w.left)/x.x,right:(y.right-p.right+w.right)/x.x}}const fn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:g=!0,...h}=$t(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=N(s),v=X(c),b=N(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),y=m||(b||!g?[ut(c)]:rn(c)),Y=w!=="none";!m&&Y&&y.push(...ln(c,g,w,x));const D=[c,...y],gt=await ae(e,h),G=[];let V=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&G.push(gt[p]),u){const T=sn(s,i,x);G.push(gt[T[0]],gt[T[1]])}if(V=[...V,{placement:s,overflows:G}],!G.every(T=>T<=0)){var Dt,Ft;const T=(((Dt=r.flip)==null?void 0:Dt.index)||0)+1,Nt=D[T];if(Nt)return{data:{index:T,overflows:V},reset:{placement:Nt}};let U=(Ft=V.filter(F=>F.overflows[0]<=0).sort((F,z)=>F.overflows[1]-z.overflows[1])[0])==null?void 0:Ft.placement;if(!U)switch(f){case"bestFit":{var Mt;const F=(Mt=V.filter(z=>{if(Y){const R=X(z.placement);return R===v||R==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(R=>R>0).reduce((R,be)=>R+be,0)]).sort((z,R)=>z[1]-R[1])[0])==null?void 0:Mt[0];F&&(U=F);break}case"initialPlacement":U=c;break}if(s!==U)return{reset:{placement:U}}}return{}}}},hn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:h=>{let{x:p,y:v}=h;return{x:p,y:v}}},...l}=$t(t,e),a={x:n,y:o},d=await ae(e,l),u=X(N(s)),m=ie(u);let f=a[m],w=a[u];if(r){const h=m==="y"?"top":"left",p=m==="y"?"bottom":"right",v=f+d[h],b=f-d[p];f=qt(v,f,b)}if(i){const h=u==="y"?"top":"left",p=u==="y"?"bottom":"right",v=w+d[h],b=w-d[p];w=qt(v,w,b)}const g=c.fn({...e,[m]:f,[u]:w});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:r,[u]:i}}}}}};function ht(){return typeof window<"u"}function j(t){return ue(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function k(t){var e;return(e=(ue(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ue(t){return ht()?t instanceof Node||t instanceof C(t).Node:!1}function E(t){return ht()?t instanceof Element||t instanceof C(t).Element:!1}function S(t){return ht()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function Zt(t){return!ht()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function K(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=A(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function pn(t){return["table","td","th"].includes(j(t))}function pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Tt(t){const e=Lt(),n=E(t)?A(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function mn(t){let e=O(t);for(;S(e)&&!B(e);){if(Tt(e))return e;if(pt(e))return null;e=O(e)}return null}function Lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function B(t){return["html","body","#document"].includes(j(t))}function A(t){return C(t).getComputedStyle(t)}function mt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function O(t){if(j(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Zt(t)&&t.host||k(t);return Zt(e)?e.host:e}function de(t){const e=O(t);return B(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&K(e)?e:de(e)}function Z(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=de(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=C(s);if(r){const c=_t(i);return e.concat(i,i.visualViewport||[],K(s)?s:[],c&&n?Z(c):[])}return e.concat(s,Z(s,[],n))}function _t(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function fe(t){const e=A(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=S(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=at(n)!==r||at(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function Pt(t){return E(t)?t:t.contextElement}function M(t){const e=Pt(t);if(!S(e))return _(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=fe(e);let i=(r?at(n.width):n.width)/o,c=(r?at(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const gn=_(0);function he(t){const e=C(t);return!Lt()||!e.visualViewport?gn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function vn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=Pt(t);let i=_(1);e&&(o?E(o)&&(i=M(o)):i=M(t));const c=vn(r,n,o)?he(r):_(0);let l=(s.left+c.x)/i.x,a=(s.top+c.y)/i.y,d=s.width/i.x,u=s.height/i.y;if(r){const m=C(r),f=o&&E(o)?C(o):o;let w=m,g=_t(w);for(;g&&o&&f!==w;){const h=M(g),p=g.getBoundingClientRect(),v=A(g),b=p.left+(g.clientLeft+parseFloat(v.paddingLeft))*h.x,x=p.top+(g.clientTop+parseFloat(v.paddingTop))*h.y;l*=h.x,a*=h.y,d*=h.x,u*=h.y,l+=b,a+=x,w=C(g),g=_t(w)}}return dt({width:d,height:u,x:l,y:a})}function It(t,e){const n=mt(t).scrollLeft;return e?e.left+n:I(k(t)).left+n}function pe(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),s=o.left+e.scrollLeft-(n?0:It(t,o)),r=o.top+e.scrollTop;return{x:s,y:r}}function bn(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=k(o),c=e?pt(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},a=_(1);const d=_(0),u=S(o);if((u||!u&&!r)&&((j(o)!=="body"||K(i))&&(l=mt(o)),S(o))){const f=I(o);a=M(o),d.x=f.x+o.clientLeft,d.y=f.y+o.clientTop}const m=i&&!u&&!r?pe(i,l,!0):_(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x+m.x,y:n.y*a.y-l.scrollTop*a.y+d.y+m.y}}function wn(t){return Array.from(t.getClientRects())}function yn(t){const e=k(t),n=mt(t),o=t.ownerDocument.body,s=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+It(t);const c=-n.scrollTop;return A(o).direction==="rtl"&&(i+=P(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:i,y:c}}function xn(t,e){const n=C(t),o=k(t),s=n.visualViewport;let r=o.clientWidth,i=o.clientHeight,c=0,l=0;if(s){r=s.width,i=s.height;const a=Lt();(!a||a&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:r,height:i,x:c,y:l}}function Cn(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=S(t)?M(t):_(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,a=o*r.y;return{width:i,height:c,x:l,y:a}}function Kt(t,e,n){let o;if(e==="viewport")o=xn(t,n);else if(e==="document")o=yn(k(t));else if(E(e))o=Cn(e,n);else{const s=he(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return dt(o)}function me(t,e){const n=O(t);return n===e||!E(n)||B(n)?!1:A(n).position==="fixed"||me(n,e)}function En(t,e){const n=e.get(t);if(n)return n;let o=Z(t,[],!1).filter(c=>E(c)&&j(c)!=="body"),s=null;const r=A(t).position==="fixed";let i=r?O(t):t;for(;E(i)&&!B(i);){const c=A(i),l=Tt(i);!l&&c.position==="fixed"&&(s=null),(r?!l&&!s:!l&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||K(i)&&!l&&me(t,i))?o=o.filter(d=>d!==i):s=c,i=O(i)}return e.set(t,o),o}function An(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?pt(e)?[]:En(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,d)=>{const u=Kt(e,d,s);return a.top=P(u.top,a.top),a.right=lt(u.right,a.right),a.bottom=lt(u.bottom,a.bottom),a.left=P(u.left,a.left),a},Kt(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function _n(t){const{width:e,height:n}=fe(t);return{width:e,height:n}}function Sn(t,e,n){const o=S(e),s=k(e),r=n==="fixed",i=I(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=_(0);if(o||!o&&!r)if((j(e)!=="body"||K(s))&&(c=mt(e)),o){const m=I(e,!0,r,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else s&&(l.x=It(s));const a=s&&!o&&!r?pe(s,c):_(0),d=i.left+c.scrollLeft-l.x-a.x,u=i.top+c.scrollTop-l.y-a.y;return{x:d,y:u,width:i.width,height:i.height}}function yt(t){return A(t).position==="static"}function Gt(t,e){if(!S(t)||A(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return k(t)===n&&(n=n.ownerDocument.body),n}function ge(t,e){const n=C(t);if(pt(t))return n;if(!S(t)){let s=O(t);for(;s&&!B(s);){if(E(s)&&!yt(s))return s;s=O(s)}return n}let o=Gt(t,e);for(;o&&pn(o)&&yt(o);)o=Gt(o,e);return o&&B(o)&&yt(o)&&!Tt(o)?n:o||mn(t)||n}const kn=async function(t){const e=this.getOffsetParent||ge,n=this.getDimensions,o=await n(t.floating);return{reference:Sn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function zn(t){return A(t).direction==="rtl"}const Rn={convertOffsetParentRelativeRectToViewportRelativeRect:bn,getDocumentElement:k,getClippingRect:An,getOffsetParent:ge,getElementRects:kn,getClientRects:wn,getDimensions:_n,getScale:M,isElement:E,isRTL:zn};function ve(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function $n(t,e){let n=null,o;const s=k(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const a=t.getBoundingClientRect(),{left:d,top:u,width:m,height:f}=a;if(c||e(),!m||!f)return;const w=J(u),g=J(s.clientWidth-(d+m)),h=J(s.clientHeight-(u+f)),p=J(d),b={rootMargin:-w+"px "+-g+"px "+-h+"px "+-p+"px",threshold:P(0,lt(1,l))||1};let x=!0;function y(Y){const D=Y[0].intersectionRatio;if(D!==l){if(!x)return i();D?i(!1,D):o=setTimeout(()=>{i(!1,1e-7)},1e3)}D===1&&!ve(a,t.getBoundingClientRect())&&i(),x=!1}try{n=new IntersectionObserver(y,{...b,root:s.ownerDocument})}catch{n=new IntersectionObserver(y,b)}n.observe(t)}return i(!0),r}function On(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Pt(t),d=s||r?[...a?Z(a):[],...Z(e)]:[];d.forEach(p=>{s&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=a&&c?$n(a,n):null;let m=-1,f=null;i&&(f=new ResizeObserver(p=>{let[v]=p;v&&v.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let w,g=l?I(t):null;l&&h();function h(){const p=I(t);g&&!ve(g,p)&&n(),g=p,w=requestAnimationFrame(h)}return n(),()=>{var p;d.forEach(v=>{s&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),u?.(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(w)}}const Tn=hn,Ln=fn,Pn=(t,e,n)=>{const o=new Map,s={platform:Rn,...n},r={...s.platform,_c:o};return dn(t,e,{...s,platform:r})},In=[Ln({fallbackAxisSideDirection:"start",crossAxis:!1}),Tn()],Dn=({placement:t="bottom-start",strategy:e,middleware:n=In}={})=>{const[o,s]=st(),[r,i]=st(),[c,l]=st();return kt(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return On(o,r,()=>Pn(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:it(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Fn=t=>t.preventDefault(),Mn=St`
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
`,Nn=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=Ye(t),{styles:c,setReference:l,setFloating:a}=Dn({placement:e,strategy:n,middleware:o});return $` <div class="anchor" part="anchor" ${Qt(l)}>
			<button
				@mousedown=${Fn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${qe(r,()=>$`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ze(c)}"
					@connected=${d=>d.target.showPopover?.()}
					${Qt(a)}
					><slot></slot>${Ge([s],()=>s?.()||xt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",ft(Nn,{styleSheets:[Mn]}));const Wn={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},tt={render:()=>$`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},et={render:()=>$`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},nt={name:"Dropdown with Bug - fixed on Chrome",render:()=>$`<style>
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
            <div class="overlay"></div>`};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
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
}`,...tt.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
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
}`,...et.parameters?.docs?.source}}};nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
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
}`,...nt.parameters?.docs?.source}}};const jn=["Dropdown","DropdownMenu","DropdownWithBug"];export{tt as Dropdown,et as DropdownMenu,nt as DropdownWithBug,jn as __namedExportsOrder,Wn as default};
