import{f as we,B as xe,x as z,E as At,T as zt}from"./iframe-De6hvVjW.js";let at,Jt=0;function Bt(t){at=t}function Ht(){at=null,Jt=0}function ye(){return Jt++}const xt=Symbol("haunted.phase"),lt=Symbol("haunted.hook"),Wt=Symbol("haunted.update"),Vt=Symbol("haunted.commit"),F=Symbol("haunted.effects"),Z=Symbol("haunted.layoutEffects"),Ct="haunted.context";class Ee{update;host;virtual;[lt];[F];[Z];constructor(e,o){this.update=e,this.host=o,this[lt]=new Map,this[F]=[],this[Z]=[]}run(e){Bt(this);let o=e();return Ht(),o}_runEffects(e){let o=this[e];Bt(this);for(let n of o)n.call(this);Ht()}runEffects(){this._runEffects(F)}runLayoutEffects(){this._runEffects(Z)}teardown(){this[lt].forEach(o=>{typeof o.teardown=="function"&&o.teardown()})}}const Ae=Promise.resolve().then.bind(Promise.resolve());function te(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=Ae(o))}}const ze=te(),jt=te();class Ce{renderer;host;state;[xt];_updateQueued;constructor(e,o){this.renderer=e,this.host=o,this.state=new Ee(this.update.bind(this),o),this[xt]=null,this._updateQueued=!1}update(){this._updateQueued||(ze(()=>{let e=this.handlePhase(Wt);jt(()=>{this.handlePhase(Vt,e),jt(()=>{this.handlePhase(F)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,o){switch(this[xt]=e,e){case Vt:this.commit(o),this.runEffects(Z);return;case Wt:return this.render();case F:return this.runEffects(F)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const Se=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},_e=t=>t?.map(e=>typeof e=="string"?Se(e):e),ke=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),mt=ke,$e=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function Re(t){class e extends Ce{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:a=!0,shadowRootInit:d={},styleSheets:u}=r||s||{},f=_e(n.styleSheets||u);class v extends i{_scheduler;static get observedAttributes(){return n.observedAttributes||c||[]}constructor(){if(super(),a===!1)this._scheduler=new e(n,this);else{const m=this.attachShadow({mode:"open",...d});f&&(m.adoptedStyleSheets=f),this._scheduler=new e(n,m,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,l,h){if(l===h)return;let b=h===""?!0:h;Reflect.set(this,$e(m),b)}}function p(g){let m=g,l=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(h){l&&m===h||(l=!0,m=h,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(i.prototype,{getPrototypeOf(g){return g},set(g,m,l,h){let b;return m in g?(b=Object.getOwnPropertyDescriptor(g,m),b&&b.set?(b.set.call(h,l),!0):(Reflect.set(g,m,l,h),!0)):(typeof m=="symbol"||m[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:l}:b=p(l),Object.defineProperty(h,m,b),b.set&&b.set.call(h,l),!0)}});return Object.setPrototypeOf(v.prototype,w),v}return o}class Y{id;state;constructor(e,o){this.id=e,this.state=o}}function Oe(t,...e){let o=ye(),n=at[lt],s=n.get(o);return s||(s=new t(o,at,...e),n.set(o,s)),s.update(...e)}function U(t){return Oe.bind(null,t)}function ee(t){return U(class extends Y{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function oe(t,e){t[F].push(e)}const L=ee(oe),Te=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Le=U(class extends Y{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,oe(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Te(this.state.host).dispatchEvent(new CustomEvent(Ct,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ie(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Ct,this)}disconnectedCallback(){this.removeEventListener(Ct,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Le(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const J=U(class extends Y{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),E=(t,e)=>J(()=>t,e);function De(t,e){t[Z].push(e)}ee(De);const T=U(class extends Y{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});U(class extends Y{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Pe=/([A-Z])/gu;U(class extends Y{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Pe,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Fe({render:t}){const e=Re(t),o=Ie(e);return{component:e,createContext:o}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne={ATTRIBUTE:1,CHILD:2},kt=t=>(...e)=>({_$litDirective$:t,values:e});let $t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),G(n,e);return!0},dt=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},se=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Be(e)}};function Me(t){this._$AN!==void 0?(dt(this),this._$AM=t,se(this)):this._$AM=t}function Ne(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)G(n[r],!1),dt(n[r]);else n!=null&&(G(n,!1),dt(n));else G(this,t)}const Be=t=>{t.type==ne.CHILD&&(t._$AP??=Ne,t._$AQ??=Me)};class He extends $t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),se(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(G(this,e),dt(this))}setValue(e){if(we(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:q}=Fe({render:xe}),We=t=>{const e=J(()=>({}),[]);return J(()=>Object.assign(e,t),[e,...Object.values(t)])},Yt=t=>t.matches(":focus-within"),Ve=({disabled:t,onFocus:e})=>{const[o,n]=T(),{focused:s,closed:r}=o||{},i=s&&!t,c=We({closed:r,onFocus:e}),a=E(u=>n(f=>({...f,closed:u})),[]),d=E(u=>{const f=u.currentTarget;return Yt(f)?n(v=>({focused:!0,closed:!v?.closed})):f.focus()},[]);return L(()=>{if(!i)return;const u=f=>{if(f.defaultPrevented)return;const{closed:v}=c;f.key==="Escape"&&!v?(f.preventDefault(),a(!0)):["ArrowUp","Up"].includes(f.key)&&v&&(f.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:a,onToggle:d,onFocus:E(u=>{const f=Yt(u.currentTarget);n({focused:f}),c.onFocus?.(f)},[c])}},Ut=["focusin","focusout"],je=t=>{const e=Ve(t),{onFocus:o}=e;return L(()=>(t.setAttribute("tabindex","0"),Ut.forEach(n=>t.addEventListener(n,o)),()=>{Ut.forEach(n=>t.removeEventListener(n,o))}),[]),e},Ye=mt`
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
`,Ue=()=>z` <slot></slot> `;customElements.define("cosmoz-dropdown-list",q(Ue,{styleSheets:[Ye]}));const qe=({placement:t})=>z` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",q(qe));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qe(t,e,o){return t?e(t):o?.(t)}const yt=new WeakMap,qt=kt(class extends He{render(t){return At}update(t,[e]){const o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),At}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let o=yt.get(e);o===void 0&&(o=new WeakMap,yt.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?yt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re="important",Ke=" !"+re,Xe=kt(class extends $t{constructor(t){if(super(t),t.type!==ne.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Ke);n.includes("-")||r?o.setProperty(n,r?s.slice(0,-11):s,r?re:""):o[n]=s}}return zt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze={},Ge=kt(class extends $t{constructor(){super(...arguments),this.ot=Ze}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,s)=>n===this.ot[s])))return zt}else if(this.ot===e)return zt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),Je=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},to=mt`
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
`,eo=()=>z`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Je(q(eo,{styleSheets:[to]})));const ut=Math.min,M=Math.max,ft=Math.round,st=Math.floor,_=t=>({x:t,y:t}),oo={left:"right",right:"left",bottom:"top",top:"bottom"},no={start:"end",end:"start"};function Qt(t,e,o){return M(t,ut(e,o))}function Rt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function Ot(t){return t.split("-")[1]}function ie(t){return t==="x"?"y":"x"}function ce(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(V(t))?"y":"x"}function le(t){return ie(tt(t))}function so(t,e,o){o===void 0&&(o=!1);const n=Ot(t),s=le(t),r=ce(s);let i=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ht(i)),[i,ht(i)]}function ro(t){const e=ht(t);return[St(t),e,St(e)]}function St(t){return t.replace(/start|end/g,e=>no[e])}function io(t,e,o){const n=["left","right"],s=["right","left"],r=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:n:e?n:s;case"left":case"right":return e?r:i;default:return[]}}function co(t,e,o,n){const s=Ot(t);let r=io(V(t),o==="start",n);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(St)))),r}function ht(t){return t.replace(/left|right|bottom|top/g,e=>oo[e])}function lo(t){return{top:0,right:0,bottom:0,left:0,...t}}function ao(t){return typeof t!="number"?lo(t):{top:t,right:t,bottom:t,left:t}}function pt(t){const{x:e,y:o,width:n,height:s}=t;return{width:n,height:s,top:o,left:e,right:e+n,bottom:o+s,x:e,y:o}}function Kt(t,e,o){let{reference:n,floating:s}=t;const r=tt(e),i=le(e),c=ce(i),a=V(e),d=r==="y",u=n.x+n.width/2-s.width/2,f=n.y+n.height/2-s.height/2,v=n[c]/2-s[c]/2;let p;switch(a){case"top":p={x:u,y:n.y-s.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:f};break;case"left":p={x:n.x-s.width,y:f};break;default:p={x:n.x,y:n.y}}switch(Ot(e)){case"start":p[i]-=v*(o&&d?-1:1);break;case"end":p[i]+=v*(o&&d?-1:1);break}return p}const uo=async(t,e,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:i}=o,c=r.filter(Boolean),a=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:f}=Kt(d,n,a),v=n,p={},w=0;for(let g=0;g<c.length;g++){const{name:m,fn:l}=c[g],{x:h,y:b,data:y,reset:x}=await l({x:u,y:f,initialPlacement:n,placement:v,strategy:s,middlewareData:p,rects:d,platform:i,elements:{reference:t,floating:e}});u=h??u,f=b??f,p={...p,[m]:{...p[m],...y}},x&&w<=50&&(w++,typeof x=="object"&&(x.placement&&(v=x.placement),x.rects&&(d=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:u,y:f}=Kt(d,v,a)),g=-1)}return{x:u,y:f,placement:v,strategy:s,middlewareData:p}};async function ae(t,e){var o;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:i,elements:c,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:v=!1,padding:p=0}=Rt(e,t),w=ao(p),m=c[v?f==="floating"?"reference":"floating":f],l=pt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(m)))==null||o?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:a})),h=f==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),y=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},x=pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:h,offsetParent:b,strategy:a}):h);return{top:(l.top-x.top+w.top)/y.y,bottom:(x.bottom-l.bottom+w.bottom)/y.y,left:(l.left-x.left+w.left)/y.x,right:(x.right-l.right+w.right)/y.x}}const fo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:a,elements:d}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:v,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:g=!0,...m}=Rt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const l=V(s),h=tt(c),b=V(c)===c,y=await(a.isRTL==null?void 0:a.isRTL(d.floating)),x=v||(b||!g?[ht(c)]:ro(c)),D=w!=="none";!v&&D&&x.push(...co(c,g,w,y));const B=[c,...x],wt=await ae(e,m),nt=[];let K=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&nt.push(wt[l]),f){const P=so(s,i,y);nt.push(wt[P[0]],wt[P[1]])}if(K=[...K,{placement:s,overflows:nt}],!nt.every(P=>P<=0)){var Pt,Ft;const P=(((Pt=r.flip)==null?void 0:Pt.index)||0)+1,Nt=B[P];if(Nt)return{data:{index:P,overflows:K},reset:{placement:Nt}};let X=(Ft=K.filter(H=>H.overflows[0]<=0).sort((H,R)=>H.overflows[1]-R.overflows[1])[0])==null?void 0:Ft.placement;if(!X)switch(p){case"bestFit":{var Mt;const H=(Mt=K.filter(R=>{if(D){const O=tt(R.placement);return O===h||O==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(O=>O>0).reduce((O,ge)=>O+ge,0)]).sort((R,O)=>R[1]-O[1])[0])==null?void 0:Mt[0];H&&(X=H);break}case"initialPlacement":X=c;break}if(s!==X)return{reset:{placement:X}}}return{}}}},ho=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:m=>{let{x:l,y:h}=m;return{x:l,y:h}}},...a}=Rt(t,e),d={x:o,y:n},u=await ae(e,a),f=tt(V(s)),v=ie(f);let p=d[v],w=d[f];if(r){const m=v==="y"?"top":"left",l=v==="y"?"bottom":"right",h=p+u[m],b=p-u[l];p=Qt(h,p,b)}if(i){const m=f==="y"?"top":"left",l=f==="y"?"bottom":"right",h=w+u[m],b=w-u[l];w=Qt(h,w,b)}const g=c.fn({...e,[v]:p,[f]:w});return{...g,data:{x:g.x-o,y:g.y-n,enabled:{[v]:r,[f]:i}}}}}};function vt(){return typeof window<"u"}function Q(t){return de(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $(t){var e;return(e=(de(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function de(t){return vt()?t instanceof Node||t instanceof A(t).Node:!1}function C(t){return vt()?t instanceof Element||t instanceof A(t).Element:!1}function k(t){return vt()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function Xt(t){return!vt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:o,overflowY:n,display:s}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(s)}function po(t){return["table","td","th"].includes(Q(t))}function bt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Tt(t){const e=Lt(),o=C(t)?S(t):t;return["transform","translate","scale","rotate","perspective"].some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function mo(t){let e=I(t);for(;k(e)&&!j(e);){if(Tt(e))return e;if(bt(e))return null;e=I(e)}return null}function Lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j(t){return["html","body","#document"].includes(Q(t))}function S(t){return A(t).getComputedStyle(t)}function gt(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||$(t);return Xt(e)?e.host:e}function ue(t){const e=I(t);return j(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&ot(e)?e:ue(e)}function et(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=ue(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),i=A(s);if(r){const c=_t(i);return e.concat(i,i.visualViewport||[],ot(s)?s:[],c&&o?et(c):[])}return e.concat(s,et(s,[],o))}function _t(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function fe(t){const e=S(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=k(t),r=s?t.offsetWidth:o,i=s?t.offsetHeight:n,c=ft(o)!==r||ft(n)!==i;return c&&(o=r,n=i),{width:o,height:n,$:c}}function It(t){return C(t)?t:t.contextElement}function W(t){const e=It(t);if(!k(e))return _(1);const o=e.getBoundingClientRect(),{width:n,height:s,$:r}=fe(e);let i=(r?ft(o.width):o.width)/n,c=(r?ft(o.height):o.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const vo=_(0);function he(t){const e=A(t);return!Lt()||!e.visualViewport?vo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function bo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function N(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=It(t);let i=_(1);e&&(n?C(n)&&(i=W(n)):i=W(t));const c=bo(r,o,n)?he(r):_(0);let a=(s.left+c.x)/i.x,d=(s.top+c.y)/i.y,u=s.width/i.x,f=s.height/i.y;if(r){const v=A(r),p=n&&C(n)?A(n):n;let w=v,g=_t(w);for(;g&&n&&p!==w;){const m=W(g),l=g.getBoundingClientRect(),h=S(g),b=l.left+(g.clientLeft+parseFloat(h.paddingLeft))*m.x,y=l.top+(g.clientTop+parseFloat(h.paddingTop))*m.y;a*=m.x,d*=m.y,u*=m.x,f*=m.y,a+=b,d+=y,w=A(g),g=_t(w)}}return pt({width:u,height:f,x:a,y:d})}function Dt(t,e){const o=gt(t).scrollLeft;return e?e.left+o:N($(t)).left+o}function pe(t,e,o){o===void 0&&(o=!1);const n=t.getBoundingClientRect(),s=n.left+e.scrollLeft-(o?0:Dt(t,n)),r=n.top+e.scrollTop;return{x:s,y:r}}function go(t){let{elements:e,rect:o,offsetParent:n,strategy:s}=t;const r=s==="fixed",i=$(n),c=e?bt(e.floating):!1;if(n===i||c&&r)return o;let a={scrollLeft:0,scrollTop:0},d=_(1);const u=_(0),f=k(n);if((f||!f&&!r)&&((Q(n)!=="body"||ot(i))&&(a=gt(n)),k(n))){const p=N(n);d=W(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const v=i&&!f&&!r?pe(i,a,!0):_(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-a.scrollLeft*d.x+u.x+v.x,y:o.y*d.y-a.scrollTop*d.y+u.y+v.y}}function wo(t){return Array.from(t.getClientRects())}function xo(t){const e=$(t),o=gt(t),n=t.ownerDocument.body,s=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+Dt(t);const c=-o.scrollTop;return S(n).direction==="rtl"&&(i+=M(e.clientWidth,n.clientWidth)-s),{width:s,height:r,x:i,y:c}}function yo(t,e){const o=A(t),n=$(t),s=o.visualViewport;let r=n.clientWidth,i=n.clientHeight,c=0,a=0;if(s){r=s.width,i=s.height;const d=Lt();(!d||d&&e==="fixed")&&(c=s.offsetLeft,a=s.offsetTop)}return{width:r,height:i,x:c,y:a}}function Eo(t,e){const o=N(t,!0,e==="fixed"),n=o.top+t.clientTop,s=o.left+t.clientLeft,r=k(t)?W(t):_(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,a=s*r.x,d=n*r.y;return{width:i,height:c,x:a,y:d}}function Zt(t,e,o){let n;if(e==="viewport")n=yo(t,o);else if(e==="document")n=xo($(t));else if(C(e))n=Eo(e,o);else{const s=he(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return pt(n)}function me(t,e){const o=I(t);return o===e||!C(o)||j(o)?!1:S(o).position==="fixed"||me(o,e)}function Ao(t,e){const o=e.get(t);if(o)return o;let n=et(t,[],!1).filter(c=>C(c)&&Q(c)!=="body"),s=null;const r=S(t).position==="fixed";let i=r?I(t):t;for(;C(i)&&!j(i);){const c=S(i),a=Tt(i);!a&&c.position==="fixed"&&(s=null),(r?!a&&!s:!a&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ot(i)&&!a&&me(t,i))?n=n.filter(u=>u!==i):s=c,i=I(i)}return e.set(t,n),n}function zo(t){let{element:e,boundary:o,rootBoundary:n,strategy:s}=t;const i=[...o==="clippingAncestors"?bt(e)?[]:Ao(e,this._c):[].concat(o),n],c=i[0],a=i.reduce((d,u)=>{const f=Zt(e,u,s);return d.top=M(f.top,d.top),d.right=ut(f.right,d.right),d.bottom=ut(f.bottom,d.bottom),d.left=M(f.left,d.left),d},Zt(e,c,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Co(t){const{width:e,height:o}=fe(t);return{width:e,height:o}}function So(t,e,o){const n=k(e),s=$(e),r=o==="fixed",i=N(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=_(0);if(n||!n&&!r)if((Q(e)!=="body"||ot(s))&&(c=gt(e)),n){const v=N(e,!0,r,e);a.x=v.x+e.clientLeft,a.y=v.y+e.clientTop}else s&&(a.x=Dt(s));const d=s&&!n&&!r?pe(s,c):_(0),u=i.left+c.scrollLeft-a.x-d.x,f=i.top+c.scrollTop-a.y-d.y;return{x:u,y:f,width:i.width,height:i.height}}function Et(t){return S(t).position==="static"}function Gt(t,e){if(!k(t)||S(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return $(t)===o&&(o=o.ownerDocument.body),o}function ve(t,e){const o=A(t);if(bt(t))return o;if(!k(t)){let s=I(t);for(;s&&!j(s);){if(C(s)&&!Et(s))return s;s=I(s)}return o}let n=Gt(t,e);for(;n&&po(n)&&Et(n);)n=Gt(n,e);return n&&j(n)&&Et(n)&&!Tt(n)?o:n||mo(t)||o}const _o=async function(t){const e=this.getOffsetParent||ve,o=this.getDimensions,n=await o(t.floating);return{reference:So(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ko(t){return S(t).direction==="rtl"}const $o={convertOffsetParentRelativeRectToViewportRelativeRect:go,getDocumentElement:$,getClippingRect:zo,getOffsetParent:ve,getElementRects:_o,getClientRects:wo,getDimensions:Co,getScale:W,isElement:C,isRTL:ko};function be(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ro(t,e){let o=null,n;const s=$(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();const d=t.getBoundingClientRect(),{left:u,top:f,width:v,height:p}=d;if(c||e(),!v||!p)return;const w=st(f),g=st(s.clientWidth-(u+v)),m=st(s.clientHeight-(f+p)),l=st(u),b={rootMargin:-w+"px "+-g+"px "+-m+"px "+-l+"px",threshold:M(0,ut(1,a))||1};let y=!0;function x(D){const B=D[0].intersectionRatio;if(B!==a){if(!y)return i();B?i(!1,B):n=setTimeout(()=>{i(!1,1e-7)},1e3)}B===1&&!be(d,t.getBoundingClientRect())&&i(),y=!1}try{o=new IntersectionObserver(x,{...b,root:s.ownerDocument})}catch{o=new IntersectionObserver(x,b)}o.observe(t)}return i(!0),r}function Oo(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,d=It(t),u=s||r?[...d?et(d):[],...et(e)]:[];u.forEach(l=>{s&&l.addEventListener("scroll",o,{passive:!0}),r&&l.addEventListener("resize",o)});const f=d&&c?Ro(d,o):null;let v=-1,p=null;i&&(p=new ResizeObserver(l=>{let[h]=l;h&&h.target===d&&p&&(p.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(e)})),o()}),d&&!a&&p.observe(d),p.observe(e));let w,g=a?N(t):null;a&&m();function m(){const l=N(t);g&&!be(g,l)&&o(),g=l,w=requestAnimationFrame(m)}return o(),()=>{var l;u.forEach(h=>{s&&h.removeEventListener("scroll",o),r&&h.removeEventListener("resize",o)}),f?.(),(l=p)==null||l.disconnect(),p=null,a&&cancelAnimationFrame(w)}}const To=ho,Lo=fo,Io=(t,e,o)=>{const n=new Map,s={platform:$o,...o},r={...s.platform,_c:n};return uo(t,e,{...s,platform:r})},Do=[Lo({fallbackAxisSideDirection:"start",crossAxis:!1}),To()],Po=({placement:t="bottom-start",strategy:e,middleware:o=Do}={})=>{const[n,s]=T(),[r,i]=T(),[c,a]=T();return L(()=>{if(!n||!(r instanceof HTMLElement)){a(void 0);return}return Oo(n,r,()=>Io(n,r,{placement:t,strategy:e,middleware:o}).then(a))},[n,r,t,e,o]),{setReference:s,setFloating:i,styles:J(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Fo=t=>t.preventDefault(),Mo=mt`
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
`,No=t=>{const{placement:e,strategy:o,middleware:n,render:s}=t,{active:r,onToggle:i}=je(t),{styles:c,setReference:a,setFloating:d}=Po({placement:e,strategy:o,middleware:n});return z` <div class="anchor" part="anchor" ${qt(a)}>
			<button
				@mousedown=${Fo}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Qe(r,()=>z`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Xe(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${qt(d)}
					><slot></slot>${Ge([s],()=>s?.()||At)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",q(No,{styleSheets:[Mo]}));const Bo=mt`
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
`,Ho=({host:t,onSearchChange:e})=>{const[o,n]=T({index:-1,focused:"search"}),[s,r]=T(0),i=E(()=>Array.from(t.children).filter(h=>h.slot!=="button"),[t]),c=J(()=>i().filter(b=>b.style.display!=="none"),[i,s]),a=E(()=>t.shadowRoot?.querySelector("cosmoz-dropdown-list-searchable")?.shadowRoot?.querySelector(".search-input")||null,[t]),d=E(()=>{const l=a();l&&(l.focus(),n({index:-1,focused:"search"}))},[a]),u=E(l=>{if(l>=0&&l<c.length){const h=c[l];h.hasAttribute("tabindex")||h.setAttribute("tabindex","0"),h.focus(),n({index:l,focused:"item"})}},[c]),f=E(l=>{c.length===1&&(l.preventDefault(),c[0].click())},[c]),v=E(l=>{o.focused==="search"?c.length>0&&u(c.length-1):l>0?u(l-1):d()},[o.focused,u,d,c]),p=E(l=>{o.focused==="search"?c.length>0&&u(0):l<c.length-1&&u(l+1)},[o.focused,u,c]),w=E((l,h)=>{o.focused==="item"&&l>=0&&l<c.length?c[l].click():o.focused==="search"&&f(h)},[o.focused,f,c]),g=E(()=>{e("");const l=a();l&&(l.value=""),d()},[e,a,d]),m=E(l=>{if(l.defaultPrevented||l.ctrlKey&&l.altKey||!a())return;const b=o.focused==="item"?o.index:-1;switch(l.key){case"ArrowUp":case"Up":l.preventDefault(),v(b);break;case"ArrowDown":case"Down":l.preventDefault(),p(b);break;case"Enter":l.preventDefault(),w(b,l);break;case"Escape":l.preventDefault(),g();break}},[a,o,v,p,w,g]);return L(()=>{const l=()=>{i().forEach((x,D)=>{x.hasAttribute("tabindex")||x.setAttribute("tabindex","0"),x.setAttribute("role","option"),x.setAttribute("id",`dropdown-item-${D}`)})},h=()=>{r(y=>y+1),l()};document.addEventListener("keydown",m,!0),l();const b=new MutationObserver(h);return b.observe(t,{childList:!0}),()=>{document.removeEventListener("keydown",m,!0),b.disconnect()}},[t,m,i]),L(()=>{o.focused==="item"&&o.index>=c.length&&c.length>0&&n({index:Math.max(0,c.length-1),focused:"item"})},[c.length,o]),{position:o,focusItem:u,focusSearchInput:d}},Wo=({host:t,searchTerm:e})=>{L(()=>{(()=>{Array.from(t.children).forEach(s=>{if(s.slot==="button")return;const r=s.textContent?.toLowerCase()||"";e===""||r.includes(e.toLowerCase())?s.style.display="":s.style.display="none"})})()},[e,t])},Vo=({host:t,searchTerm:e})=>{const[o,n]=T(!0);return L(()=>{const s=t.shadowRoot?.querySelector("slot");if(s){const r=()=>{const c=s.assignedElements({flatten:!0}).filter(a=>a.style.display!=="none").length;n(c>0)};return r(),s.addEventListener("slotchange",r),()=>s.removeEventListener("slotchange",r)}},[e,t]),o},jo=t=>{const{searchTerm:e,placeholder:o="Search...",onSearchChange:n,noResultsText:s="No results found",menuHost:r}=t,i=r||t,c=Vo({host:i,searchTerm:e}),{position:a}=Ho({host:i,onSearchChange:n}),d=E(u=>{const f=u.target;n(f.value)},[n]);return L(()=>{const u=t.shadowRoot?.querySelector(".search-input");u&&requestAnimationFrame(()=>{u.focus()})},[]),z`
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
					@input=${d}
				/>
			</div>
			<div class="listbox-wrapper">
				<div role="listbox" id="dropdown-listbox">
					<slot></slot>
				</div>
				${!c&&e?z`<div class="no-results" role="status" aria-live="polite">${s}</div>`:""}
			</div>
		</div>
	`};customElements.define("cosmoz-dropdown-list-searchable",q(jo,{styleSheets:[Bo]}));const Yo=t=>{const{placement:e,searchPlaceholder:o,noResultsText:n}=t,[s,r]=T(""),i=E(c=>{r(c)},[]);return Wo({host:t,searchTerm:s}),z`
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
	`};customElements.define("cosmoz-dropdown-menu-searchable",q(Yo));const Qo={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},rt={render:()=>z`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},it={render:()=>z`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},ct={name:"Dropdown with Bug - fixed on Chrome",render:()=>z`<style>
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
}`,...ct.parameters?.docs?.source}}};const Ko=["Dropdown","DropdownMenu","DropdownWithBug"];export{rt as Dropdown,it as DropdownMenu,ct as DropdownWithBug,Ko as __namedExportsOrder,Qo as default};
