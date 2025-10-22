import{f as Ce,B as _e,x as O,E as _t,T as At}from"./iframe-BHe7qMem.js";let rt,ne=0;function Bt(t){rt=t}function Wt(){rt=null,ne=0}function Ae(){return ne++}const wt=Symbol("haunted.phase"),ot=Symbol("haunted.hook"),Ht=Symbol("haunted.update"),jt=Symbol("haunted.commit"),I=Symbol("haunted.effects"),Q=Symbol("haunted.layoutEffects"),Et="haunted.context";class Ee{update;host;virtual;[ot];[I];[Q];constructor(e,n){this.update=e,this.host=n,this[ot]=new Map,this[I]=[],this[Q]=[]}run(e){Bt(this);let n=e();return Wt(),n}_runEffects(e){let n=this[e];Bt(this);for(let o of n)o.call(this);Wt()}runEffects(){this._runEffects(I)}runLayoutEffects(){this._runEffects(Q)}teardown(){this[ot].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const Se=Promise.resolve().then.bind(Promise.resolve());function oe(){let t=[],e;function n(){e=null;let o=t;t=[];for(var s=0,r=o.length;s<r;s++)o[s]()}return function(o){t.push(o),e==null&&(e=Se(n))}}const ze=oe(),Vt=oe();class ke{renderer;host;state;[wt];_updateQueued;_active;constructor(e,n){this.renderer=e,this.host=n,this.state=new Ee(this.update.bind(this),n),this[wt]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(ze(()=>{let e=this.handlePhase(Ht);Vt(()=>{this.handlePhase(jt,e),Vt(()=>{this.handlePhase(I)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[wt]=e,e){case jt:this.commit(n),this.runEffects(Q);return;case Ht:return this.render();case I:return this.runEffects(I)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Re=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Oe=t=>t?.map(e=>typeof e=="string"?Re(e):e),$e=(t,...e)=>t.flatMap((n,o)=>[n,e[o]||""]).join(""),kt=$e,Te=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Le(t){class e extends ke{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function n(o,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:l=!0,shadowRootInit:a={},styleSheets:d}=r||s||{},u=Oe(o.styleSheets||d);class h extends i{_scheduler;static get observedAttributes(){return o.observedAttributes||c||[]}constructor(){if(super(),l===!1)this._scheduler=new e(o,this);else{const p=this.attachShadow({mode:"open",...a});u&&(p.adoptedStyleSheets=u),this._scheduler=new e(o,p,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,m,g){if(m===g)return;let b=g===""?!0:g;Reflect.set(this,Te(p),b)}}function f(v){let p=v,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(g){m&&p===g||(m=!0,p=g,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(i.prototype,{getPrototypeOf(v){return v},set(v,p,m,g){let b;return p in v?(b=Object.getOwnPropertyDescriptor(v,p),b&&b.set?(b.set.call(g,m),!0):(Reflect.set(v,p,m,g),!0)):(typeof p=="symbol"||p[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:m}:b=f(m),Object.defineProperty(g,p,b),b.set&&b.set.call(g,m),!0)}});return Object.setPrototypeOf(h.prototype,w),h}return n}class j{id;state;constructor(e,n){this.id=e,this.state=n}}function Pe(t,...e){let n=Ae(),o=rt[ot],s=o.get(n);return s||(s=new t(n,rt,...e),o.set(n,s)),s.update(...e)}function V(t){return Pe.bind(null,t)}function se(t){return V(class extends j{callback;lastValues;values;_teardown;constructor(e,n,o,s){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function re(t,e){t[I].push(e)}const Rt=se(re),Ie=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,De=V(class extends j{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,re(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Ie(this.state.host).dispatchEvent(new CustomEvent(Et,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:s}=e;this.value=o?s:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function Fe(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Et,this)}disconnectedCallback(){this.removeEventListener(Et,this)}handleEvent(o){const{detail:s}=o;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let s of this.listeners)s(o)}get value(){return this._value}},Consumer:t(function({render:o}){const s=De(n);return o(s)},{useShadowDOM:!1}),defaultValue:e};return n}}const it=V(class extends j{value;values;constructor(t,e,n,o){super(t,e),this.value=n(),this.values=o}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),yt=(t,e)=>it(()=>t,e);function Me(t,e){t[Q].push(e)}se(Me);const st=V(class extends j{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});V(class extends j{reducer;currentState;constructor(t,e,n,o,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(o):o}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Ne=/([A-Z])/gu;V(class extends j{property;eventName;constructor(t,e,n,o){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ne,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updateProp(o))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Be({render:t}){const e=Le(t),n=Fe(e);return{component:e,createContext:n}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie={ATTRIBUTE:1,CHILD:2},Ot=t=>(...e)=>({_$litDirective$:t,values:e});let $t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),Y(o,e);return!0},ct=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},ce=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),je(e)}};function We(t){this._$AN!==void 0?(ct(this),this._$AM=t,ce(this)):this._$AM=t}function He(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)Y(o[r],!1),ct(o[r]);else o!=null&&(Y(o,!1),ct(o));else Y(this,t)}const je=t=>{t.type==ie.CHILD&&(t._$AP??=He,t._$AQ??=We)};class Ve extends $t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),ce(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Y(this,e),ct(this))}setValue(e){if(Ce(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:ft}=Be({render:_e}),Ge=t=>{const e=it(()=>({}),[]);return it(()=>Object.assign(e,t),[e,...Object.values(t)])},Gt=t=>t.matches(":focus-within"),Ue=({disabled:t,onFocus:e})=>{const[n,o]=st(),{focused:s,closed:r}=n||{},i=s&&!t,c=Ge({closed:r,onFocus:e}),l=yt(d=>o(u=>({...u,closed:d})),[]),a=yt(d=>{const u=d.currentTarget;return Gt(u)?o(h=>({focused:!0,closed:!h?.closed})):u.focus()},[]);return Rt(()=>{if(!i)return;const d=u=>{if(u.defaultPrevented)return;const{closed:h}=c;u.key==="Escape"&&!h?(u.preventDefault(),l(!0)):["ArrowUp","Up"].includes(u.key)&&h&&(u.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:a,onFocus:yt(d=>{const u=Gt(d.currentTarget);o({focused:u}),c.onFocus?.(u)},[c])}},Ut=["focusin","focusout"],Xe=t=>{const e=Ue(t),{onFocus:n}=e;return Rt(()=>(t.setAttribute("tabindex","0"),Ut.forEach(o=>t.addEventListener(o,n)),()=>{Ut.forEach(o=>t.removeEventListener(o,n))}),[]),e},Qe=kt`
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
`,Ye=()=>O` <slot></slot> `;customElements.define("cosmoz-dropdown-list",ft(Ye,{styleSheets:[Qe]}));const qe=({placement:t})=>O` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",ft(qe));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(t,e,n){return t?e(t):n?.(t)}const xt=new WeakMap,Xt=Ot(class extends Ve{render(t){return _t}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),_t}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=xt.get(e);n===void 0&&(n=new WeakMap,xt.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?xt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le="important",Ke=" !"+le,Je=Ot(class extends $t{constructor(t){if(super(t),t.type!==ie.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(Ke);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?le:""):n[o]=s}}return At}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn={},en=Ot(class extends $t{constructor(){super(...arguments),this.ot=tn}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((o,s)=>o===this.ot[s])))return At}else if(this.ot===e)return At;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),nn=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},on=kt`
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
`,sn=()=>O`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",nn(ft(sn,{styleSheets:[on]})));const lt=Math.min,D=Math.max,at=Math.round,J=Math.floor,S=t=>({x:t,y:t}),rn={left:"right",right:"left",bottom:"top",top:"bottom"},cn={start:"end",end:"start"};function Qt(t,e,n){return D(t,lt(e,n))}function Tt(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function Lt(t){return t.split("-")[1]}function ae(t){return t==="x"?"y":"x"}function ue(t){return t==="y"?"height":"width"}const ln=new Set(["top","bottom"]);function P(t){return ln.has(W(t))?"y":"x"}function de(t){return ae(P(t))}function an(t,e,n){n===void 0&&(n=!1);const o=Lt(t),s=de(t),r=ue(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ut(i)),[i,ut(i)]}function un(t){const e=ut(t);return[St(t),e,St(e)]}function St(t){return t.replace(/start|end/g,e=>cn[e])}const Yt=["left","right"],qt=["right","left"],dn=["top","bottom"],fn=["bottom","top"];function hn(t,e,n){switch(t){case"top":case"bottom":return n?e?qt:Yt:e?Yt:qt;case"left":case"right":return e?dn:fn;default:return[]}}function pn(t,e,n,o){const s=Lt(t);let r=hn(W(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(St)))),r}function ut(t){return t.replace(/left|right|bottom|top/g,e=>rn[e])}function mn(t){return{top:0,right:0,bottom:0,left:0,...t}}function gn(t){return typeof t!="number"?mn(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function Zt(t,e,n){let{reference:o,floating:s}=t;const r=P(e),i=de(e),c=ue(i),l=W(e),a=r==="y",d=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,h=o[c]/2-s[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-s.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-s.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Lt(e)){case"start":f[i]-=h*(n&&a?-1:1);break;case"end":f[i]+=h*(n&&a?-1:1);break}return f}const vn=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:u}=Zt(a,o,l),h=o,f={},w=0;for(let v=0;v<c.length;v++){const{name:p,fn:m}=c[v],{x:g,y:b,data:x,reset:y}=await m({x:d,y:u,initialPlacement:o,placement:h,strategy:s,middlewareData:f,rects:a,platform:i,elements:{reference:t,floating:e}});d=g??d,u=b??u,f={...f,[p]:{...f[p],...x}},y&&w<=50&&(w++,typeof y=="object"&&(y.placement&&(h=y.placement),y.rects&&(a=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:d,y:u}=Zt(a,h,l)),v=-1)}return{x:d,y:u,placement:h,strategy:s,middlewareData:f}};async function fe(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=Tt(e,t),w=gn(f),p=c[h?u==="floating"?"reference":"floating":u],m=dt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),g=u==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),x=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},y=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:b,strategy:l}):g);return{top:(m.top-y.top+w.top)/x.y,bottom:(y.bottom-m.bottom+w.bottom)/x.y,left:(m.left-y.left+w.left)/x.x,right:(y.right-m.right+w.right)/x.x}}const bn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...p}=Tt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const m=W(s),g=P(c),b=W(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),y=h||(b||!v?[ut(c)]:un(c)),U=w!=="none";!h&&U&&y.push(...pn(c,v,w,x));const M=[c,...y],vt=await fe(e,p),K=[];let N=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&K.push(vt[m]),u){const T=an(s,i,x);K.push(vt[T[0]],vt[T[1]])}if(N=[...N,{placement:s,overflows:K}],!K.every(T=>T<=0)){var Ft,Mt;const T=(((Ft=r.flip)==null?void 0:Ft.index)||0)+1,bt=M[T];if(bt&&(!(u==="alignment"?g!==P(bt):!1)||N.every(_=>P(_.placement)===g?_.overflows[0]>0:!0)))return{data:{index:T,overflows:N},reset:{placement:bt}};let X=(Mt=N.filter(L=>L.overflows[0]<=0).sort((L,_)=>L.overflows[1]-_.overflows[1])[0])==null?void 0:Mt.placement;if(!X)switch(f){case"bestFit":{var Nt;const L=(Nt=N.filter(_=>{if(U){const R=P(_.placement);return R===g||R==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(R=>R>0).reduce((R,xe)=>R+xe,0)]).sort((_,R)=>_[1]-R[1])[0])==null?void 0:Nt[0];L&&(X=L);break}case"initialPlacement":X=c;break}if(s!==X)return{reset:{placement:X}}}return{}}}},wn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:p=>{let{x:m,y:g}=p;return{x:m,y:g}}},...l}=Tt(t,e),a={x:n,y:o},d=await fe(e,l),u=P(W(s)),h=ae(u);let f=a[h],w=a[u];if(r){const p=h==="y"?"top":"left",m=h==="y"?"bottom":"right",g=f+d[p],b=f-d[m];f=Qt(g,f,b)}if(i){const p=u==="y"?"top":"left",m=u==="y"?"bottom":"right",g=w+d[p],b=w-d[m];w=Qt(g,w,b)}const v=c.fn({...e,[h]:f,[u]:w});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[h]:r,[u]:i}}}}}};function ht(){return typeof window<"u"}function G(t){return he(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function k(t){var e;return(e=(he(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function he(t){return ht()?t instanceof Node||t instanceof C(t).Node:!1}function A(t){return ht()?t instanceof Element||t instanceof C(t).Element:!1}function z(t){return ht()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function Kt(t){return!ht()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}const yn=new Set(["inline","contents"]);function Z(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!yn.has(s)}const xn=new Set(["table","td","th"]);function Cn(t){return xn.has(G(t))}const _n=[":popover-open",":modal"];function pt(t){return _n.some(e=>{try{return t.matches(e)}catch{return!1}})}const An=["transform","translate","scale","rotate","perspective"],En=["transform","translate","scale","rotate","perspective","filter"],Sn=["paint","layout","strict","content"];function Pt(t){const e=It(),n=A(t)?E(t):t;return An.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||En.some(o=>(n.willChange||"").includes(o))||Sn.some(o=>(n.contain||"").includes(o))}function zn(t){let e=$(t);for(;z(e)&&!H(e);){if(Pt(e))return e;if(pt(e))return null;e=$(e)}return null}function It(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const kn=new Set(["html","body","#document"]);function H(t){return kn.has(G(t))}function E(t){return C(t).getComputedStyle(t)}function mt(t){return A(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function $(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||k(t);return Kt(e)?e.host:e}function pe(t){const e=$(t);return H(e)?t.ownerDocument?t.ownerDocument.body:t.body:z(e)&&Z(e)?e:pe(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=pe(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=C(s);if(r){const c=zt(i);return e.concat(i,i.visualViewport||[],Z(s)?s:[],c&&n?q(c):[])}return e.concat(s,q(s,[],n))}function zt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function me(t){const e=E(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=z(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=at(n)!==r||at(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function Dt(t){return A(t)?t:t.contextElement}function B(t){const e=Dt(t);if(!z(e))return S(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=me(e);let i=(r?at(n.width):n.width)/o,c=(r?at(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Rn=S(0);function ge(t){const e=C(t);return!It()||!e.visualViewport?Rn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function On(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function F(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=Dt(t);let i=S(1);e&&(o?A(o)&&(i=B(o)):i=B(t));const c=On(r,n,o)?ge(r):S(0);let l=(s.left+c.x)/i.x,a=(s.top+c.y)/i.y,d=s.width/i.x,u=s.height/i.y;if(r){const h=C(r),f=o&&A(o)?C(o):o;let w=h,v=zt(w);for(;v&&o&&f!==w;){const p=B(v),m=v.getBoundingClientRect(),g=E(v),b=m.left+(v.clientLeft+parseFloat(g.paddingLeft))*p.x,x=m.top+(v.clientTop+parseFloat(g.paddingTop))*p.y;l*=p.x,a*=p.y,d*=p.x,u*=p.y,l+=b,a+=x,w=C(v),v=zt(w)}}return dt({width:d,height:u,x:l,y:a})}function gt(t,e){const n=mt(t).scrollLeft;return e?e.left+n:F(k(t)).left+n}function ve(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-gt(t,n),s=n.top+e.scrollTop;return{x:o,y:s}}function $n(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=k(o),c=e?pt(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},a=S(1);const d=S(0),u=z(o);if((u||!u&&!r)&&((G(o)!=="body"||Z(i))&&(l=mt(o)),z(o))){const f=F(o);a=B(o),d.x=f.x+o.clientLeft,d.y=f.y+o.clientTop}const h=i&&!u&&!r?ve(i,l):S(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x+h.x,y:n.y*a.y-l.scrollTop*a.y+d.y+h.y}}function Tn(t){return Array.from(t.getClientRects())}function Ln(t){const e=k(t),n=mt(t),o=t.ownerDocument.body,s=D(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=D(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+gt(t);const c=-n.scrollTop;return E(o).direction==="rtl"&&(i+=D(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:i,y:c}}const Jt=25;function Pn(t,e){const n=C(t),o=k(t),s=n.visualViewport;let r=o.clientWidth,i=o.clientHeight,c=0,l=0;if(s){r=s.width,i=s.height;const d=It();(!d||d&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}const a=gt(o);if(a<=0){const d=o.ownerDocument,u=d.body,h=getComputedStyle(u),f=d.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,w=Math.abs(o.clientWidth-u.clientWidth-f);w<=Jt&&(r-=w)}else a<=Jt&&(r+=a);return{width:r,height:i,x:c,y:l}}const In=new Set(["absolute","fixed"]);function Dn(t,e){const n=F(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=z(t)?B(t):S(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,a=o*r.y;return{width:i,height:c,x:l,y:a}}function te(t,e,n){let o;if(e==="viewport")o=Pn(t,n);else if(e==="document")o=Ln(k(t));else if(A(e))o=Dn(e,n);else{const s=ge(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return dt(o)}function be(t,e){const n=$(t);return n===e||!A(n)||H(n)?!1:E(n).position==="fixed"||be(n,e)}function Fn(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(c=>A(c)&&G(c)!=="body"),s=null;const r=E(t).position==="fixed";let i=r?$(t):t;for(;A(i)&&!H(i);){const c=E(i),l=Pt(i);!l&&c.position==="fixed"&&(s=null),(r?!l&&!s:!l&&c.position==="static"&&!!s&&In.has(s.position)||Z(i)&&!l&&be(t,i))?o=o.filter(d=>d!==i):s=c,i=$(i)}return e.set(t,o),o}function Mn(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?pt(e)?[]:Fn(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,d)=>{const u=te(e,d,s);return a.top=D(u.top,a.top),a.right=lt(u.right,a.right),a.bottom=lt(u.bottom,a.bottom),a.left=D(u.left,a.left),a},te(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Nn(t){const{width:e,height:n}=me(t);return{width:e,height:n}}function Bn(t,e,n){const o=z(e),s=k(e),r=n==="fixed",i=F(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function a(){l.x=gt(s)}if(o||!o&&!r)if((G(e)!=="body"||Z(s))&&(c=mt(e)),o){const f=F(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else s&&a();r&&!o&&s&&a();const d=s&&!o&&!r?ve(s,c):S(0),u=i.left+c.scrollLeft-l.x-d.x,h=i.top+c.scrollTop-l.y-d.y;return{x:u,y:h,width:i.width,height:i.height}}function Ct(t){return E(t).position==="static"}function ee(t,e){if(!z(t)||E(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return k(t)===n&&(n=n.ownerDocument.body),n}function we(t,e){const n=C(t);if(pt(t))return n;if(!z(t)){let s=$(t);for(;s&&!H(s);){if(A(s)&&!Ct(s))return s;s=$(s)}return n}let o=ee(t,e);for(;o&&Cn(o)&&Ct(o);)o=ee(o,e);return o&&H(o)&&Ct(o)&&!Pt(o)?n:o||zn(t)||n}const Wn=async function(t){const e=this.getOffsetParent||we,n=this.getDimensions,o=await n(t.floating);return{reference:Bn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Hn(t){return E(t).direction==="rtl"}const jn={convertOffsetParentRelativeRectToViewportRelativeRect:$n,getDocumentElement:k,getClippingRect:Mn,getOffsetParent:we,getElementRects:Wn,getClientRects:Tn,getDimensions:Nn,getScale:B,isElement:A,isRTL:Hn};function ye(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Vn(t,e){let n=null,o;const s=k(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const a=t.getBoundingClientRect(),{left:d,top:u,width:h,height:f}=a;if(c||e(),!h||!f)return;const w=J(u),v=J(s.clientWidth-(d+h)),p=J(s.clientHeight-(u+f)),m=J(d),b={rootMargin:-w+"px "+-v+"px "+-p+"px "+-m+"px",threshold:D(0,lt(1,l))||1};let x=!0;function y(U){const M=U[0].intersectionRatio;if(M!==l){if(!x)return i();M?i(!1,M):o=setTimeout(()=>{i(!1,1e-7)},1e3)}M===1&&!ye(a,t.getBoundingClientRect())&&i(),x=!1}try{n=new IntersectionObserver(y,{...b,root:s.ownerDocument})}catch{n=new IntersectionObserver(y,b)}n.observe(t)}return i(!0),r}function Gn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Dt(t),d=s||r?[...a?q(a):[],...q(e)]:[];d.forEach(m=>{s&&m.addEventListener("scroll",n,{passive:!0}),r&&m.addEventListener("resize",n)});const u=a&&c?Vn(a,n):null;let h=-1,f=null;i&&(f=new ResizeObserver(m=>{let[g]=m;g&&g.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let w,v=l?F(t):null;l&&p();function p(){const m=F(t);v&&!ye(v,m)&&n(),v=m,w=requestAnimationFrame(p)}return n(),()=>{var m;d.forEach(g=>{s&&g.removeEventListener("scroll",n),r&&g.removeEventListener("resize",n)}),u?.(),(m=f)==null||m.disconnect(),f=null,l&&cancelAnimationFrame(w)}}const Un=wn,Xn=bn,Qn=(t,e,n)=>{const o=new Map,s={platform:jn,...n},r={...s.platform,_c:o};return vn(t,e,{...s,platform:r})},Yn=[Xn({fallbackAxisSideDirection:"start",crossAxis:!1}),Un()],qn=({placement:t="bottom-start",strategy:e,middleware:n=Yn}={})=>{const[o,s]=st(),[r,i]=st(),[c,l]=st();return Rt(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return Gn(o,r,()=>Qn(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:it(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Zn=t=>t.preventDefault(),Kn=kt`
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
`,Jn=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=Xe(t),{styles:c,setReference:l,setFloating:a}=qn({placement:e,strategy:n,middleware:o});return O` <div class="anchor" part="anchor" ${Xt(l)}>
			<button
				@mousedown=${Zn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Ze(r,()=>O`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Je(c)}"
					@connected=${d=>d.target.showPopover?.()}
					${Xt(a)}
					><slot></slot>${en([s],()=>s?.()||_t)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",ft(Jn,{styleSheets:[Kn]}));const no={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},tt={render:()=>O`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},et={render:()=>O`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},nt={name:"Dropdown with Bug - fixed on Chrome",render:()=>O`<style>
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
}`,...nt.parameters?.docs?.source}}};const oo=["Dropdown","DropdownMenu","DropdownWithBug"];export{tt as Dropdown,et as DropdownMenu,nt as DropdownWithBug,oo as __namedExportsOrder,no as default};
