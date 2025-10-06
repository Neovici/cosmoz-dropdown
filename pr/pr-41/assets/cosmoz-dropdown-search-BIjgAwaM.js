import{f as ve,B as we,x as T,E as yt,T as xt}from"./iframe-BNrHy_eV.js";let it,Gt=0;function Mt(t){it=t}function Nt(){it=null,Gt=0}function ye(){return Gt++}const gt=Symbol("haunted.phase"),rt=Symbol("haunted.hook"),Ht=Symbol("haunted.update"),Bt=Symbol("haunted.commit"),F=Symbol("haunted.effects"),Z=Symbol("haunted.layoutEffects"),Et="haunted.context";class xe{update;host;virtual;[rt];[F];[Z];constructor(e,o){this.update=e,this.host=o,this[rt]=new Map,this[F]=[],this[Z]=[]}run(e){Mt(this);let o=e();return Nt(),o}_runEffects(e){let o=this[e];Mt(this);for(let n of o)n.call(this);Nt()}runEffects(){this._runEffects(F)}runLayoutEffects(){this._runEffects(Z)}teardown(){this[rt].forEach(o=>{typeof o.teardown=="function"&&o.teardown()})}}const Ee=Promise.resolve().then.bind(Promise.resolve());function Jt(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=Ee(o))}}const Ae=Jt(),Wt=Jt();class Ce{renderer;host;state;[gt];_updateQueued;constructor(e,o){this.renderer=e,this.host=o,this.state=new xe(this.update.bind(this),o),this[gt]=null,this._updateQueued=!1}update(){this._updateQueued||(Ae(()=>{let e=this.handlePhase(Ht);Wt(()=>{this.handlePhase(Bt,e),Wt(()=>{this.handlePhase(F)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,o){switch(this[gt]=e,e){case Bt:this.commit(o),this.runEffects(Z);return;case Ht:return this.render();case F:return this.runEffects(F)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const Se=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},_e=t=>t?.map(e=>typeof e=="string"?Se(e):e),ze=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),ft=ze,ke=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function $e(t){class e extends Ce{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:l=!0,shadowRootInit:u={},styleSheets:d}=r||s||{},a=_e(n.styleSheets||d);class f extends i{_scheduler;static get observedAttributes(){return n.observedAttributes||c||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const p=this.attachShadow({mode:"open",...u});a&&(p.adoptedStyleSheets=a),this._scheduler=new e(n,p,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,m,g){if(m===g)return;let v=g===""?!0:g;Reflect.set(this,ke(p),v)}}function h(b){let p=b,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(g){m&&p===g||(m=!0,p=g,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(i.prototype,{getPrototypeOf(b){return b},set(b,p,m,g){let v;return p in b?(v=Object.getOwnPropertyDescriptor(b,p),v&&v.set?(v.set.call(g,m),!0):(Reflect.set(b,p,m,g),!0)):(typeof p=="symbol"||p[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:m}:v=h(m),Object.defineProperty(g,p,v),v.set&&v.set.call(g,m),!0)}});return Object.setPrototypeOf(f.prototype,w),f}return o}class j{id;state;constructor(e,o){this.id=e,this.state=o}}function Re(t,...e){let o=ye(),n=it[rt],s=n.get(o);return s||(s=new t(o,it,...e),n.set(o,s)),s.update(...e)}function Y(t){return Re.bind(null,t)}function te(t){return Y(class extends j{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function ee(t,e){t[F].push(e)}const L=te(ee),Oe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Te=Y(class extends j{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ee(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Oe(this.state.host).dispatchEvent(new CustomEvent(Et,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Le(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Et,this)}disconnectedCallback(){this.removeEventListener(Et,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Te(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const J=Y(class extends j{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),R=(t,e)=>J(()=>t,e);function Pe(t,e){t[Z].push(e)}te(Pe);const O=Y(class extends j{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Y(class extends j{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const De=/([A-Z])/gu;Y(class extends j{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(De,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Fe({render:t}){const e=$e(t),o=Le(e);return{component:e,createContext:o}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={ATTRIBUTE:1,CHILD:2},St=t=>(...e)=>({_$litDirective$:t,values:e});let _t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),G(n,e);return!0},ct=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},ne=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Ne(e)}};function Ie(t){this._$AN!==void 0?(ct(this),this._$AM=t,ne(this)):this._$AM=t}function Me(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)G(n[r],!1),ct(n[r]);else n!=null&&(G(n,!1),ct(n));else G(this,t)}const Ne=t=>{t.type==oe.CHILD&&(t._$AP??=Me,t._$AQ??=Ie)};class He extends _t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),ne(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(G(this,e),ct(this))}setValue(e){if(ve(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:U}=Fe({render:we}),Be=t=>{const e=J(()=>({}),[]);return J(()=>Object.assign(e,t),[e,...Object.values(t)])},Vt=t=>t.matches(":focus-within"),We=({disabled:t,onFocus:e})=>{const[o,n]=O(),{focused:s,closed:r}=o||{},i=s&&!t,c=Be({closed:r,onFocus:e}),l=R(d=>n(a=>({...a,closed:d})),[]),u=R(d=>{const a=d.currentTarget;return Vt(a)?n(f=>({focused:!0,closed:!f?.closed})):a.focus()},[]);return L(()=>{if(!i)return;const d=a=>{if(a.defaultPrevented)return;const{closed:f}=c;a.key==="Escape"&&!f?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&f&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:u,onFocus:R(d=>{const a=Vt(d.currentTarget);n({focused:a}),c.onFocus?.(a)},[c])}},jt=["focusin","focusout"],Ve=t=>{const e=We(t),{onFocus:o}=e;return L(()=>(t.setAttribute("tabindex","0"),jt.forEach(n=>t.addEventListener(n,o)),()=>{jt.forEach(n=>t.removeEventListener(n,o))}),[]),e},je=ft`
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
`,Ye=()=>T` <slot></slot> `;customElements.define("cosmoz-dropdown-list",U(Ye,{styleSheets:[je]}));const Ue=({placement:t})=>T` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",U(Ue));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(t,e,o){return t?e(t):o?.(t)}const vt=new WeakMap,Yt=St(class extends He{render(t){return yt}update(t,[e]){const o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),yt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let o=vt.get(e);o===void 0&&(o=new WeakMap,vt.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?vt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se="important",Qe=" !"+se,Ke=St(class extends _t{constructor(t){if(super(t),t.type!==oe.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Qe);n.includes("-")||r?o.setProperty(n,r?s.slice(0,-11):s,r?se:""):o[n]=s}}return xt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe={},Ze=St(class extends _t{constructor(){super(...arguments),this.ot=Xe}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,s)=>n===this.ot[s])))return xt}else if(this.ot===e)return xt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),Ge=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Je=ft`
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
`,to=()=>T`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Ge(U(to,{styleSheets:[Je]})));const lt=Math.min,I=Math.max,at=Math.round,st=Math.floor,S=t=>({x:t,y:t}),eo={left:"right",right:"left",bottom:"top",top:"bottom"},oo={start:"end",end:"start"};function Ut(t,e,o){return I(t,lt(e,o))}function zt(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function kt(t){return t.split("-")[1]}function re(t){return t==="x"?"y":"x"}function ie(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(W(t))?"y":"x"}function ce(t){return re(tt(t))}function no(t,e,o){o===void 0&&(o=!1);const n=kt(t),s=ce(t),r=ie(s);let i=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ut(i)),[i,ut(i)]}function so(t){const e=ut(t);return[At(t),e,At(e)]}function At(t){return t.replace(/start|end/g,e=>oo[e])}function ro(t,e,o){const n=["left","right"],s=["right","left"],r=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:n:e?n:s;case"left":case"right":return e?r:i;default:return[]}}function io(t,e,o,n){const s=kt(t);let r=ro(W(t),o==="start",n);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(At)))),r}function ut(t){return t.replace(/left|right|bottom|top/g,e=>eo[e])}function co(t){return{top:0,right:0,bottom:0,left:0,...t}}function lo(t){return typeof t!="number"?co(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:o,width:n,height:s}=t;return{width:n,height:s,top:o,left:e,right:e+n,bottom:o+s,x:e,y:o}}function qt(t,e,o){let{reference:n,floating:s}=t;const r=tt(e),i=ce(e),c=ie(i),l=W(e),u=r==="y",d=n.x+n.width/2-s.width/2,a=n.y+n.height/2-s.height/2,f=n[c]/2-s[c]/2;let h;switch(l){case"top":h={x:d,y:n.y-s.height};break;case"bottom":h={x:d,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:a};break;case"left":h={x:n.x-s.width,y:a};break;default:h={x:n.x,y:n.y}}switch(kt(e)){case"start":h[i]-=f*(o&&u?-1:1);break;case"end":h[i]+=f*(o&&u?-1:1);break}return h}const ao=async(t,e,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:i}=o,c=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let u=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:a}=qt(u,n,l),f=n,h={},w=0;for(let b=0;b<c.length;b++){const{name:p,fn:m}=c[b],{x:g,y:v,data:x,reset:y}=await m({x:d,y:a,initialPlacement:n,placement:f,strategy:s,middlewareData:h,rects:u,platform:i,elements:{reference:t,floating:e}});d=g??d,a=v??a,h={...h,[p]:{...h[p],...x}},y&&w<=50&&(w++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(u=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:d,y:a}=qt(u,f,l)),b=-1)}return{x:d,y:a,placement:f,strategy:s,middlewareData:h}};async function le(t,e){var o;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:f=!1,padding:h=0}=zt(e,t),w=lo(h),p=c[f?a==="floating"?"reference":"floating":a],m=dt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(p)))==null||o?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:u,rootBoundary:d,strategy:l})),g=a==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),x=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},y=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:v,strategy:l}):g);return{top:(m.top-y.top+w.top)/x.y,bottom:(y.bottom-m.bottom+w.bottom)/x.y,left:(m.left-y.left+w.left)/x.x,right:(y.right-m.right+w.right)/x.x}}const uo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:u}=e,{mainAxis:d=!0,crossAxis:a=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...p}=zt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const m=W(s),g=tt(c),v=W(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),y=f||(v||!b?[ut(c)]:so(c)),Q=w!=="none";!f&&Q&&y.push(...io(c,b,w,x));const N=[c,...y],bt=await le(e,p),nt=[];let K=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&nt.push(bt[m]),a){const D=no(s,i,x);nt.push(bt[D[0]],bt[D[1]])}if(K=[...K,{placement:s,overflows:nt}],!nt.every(D=>D<=0)){var Pt,Dt;const D=(((Pt=r.flip)==null?void 0:Pt.index)||0)+1,It=N[D];if(It)return{data:{index:D,overflows:K},reset:{placement:It}};let X=(Dt=K.filter(H=>H.overflows[0]<=0).sort((H,k)=>H.overflows[1]-k.overflows[1])[0])==null?void 0:Dt.placement;if(!X)switch(h){case"bestFit":{var Ft;const H=(Ft=K.filter(k=>{if(Q){const $=tt(k.placement);return $===g||$==="y"}return!0}).map(k=>[k.placement,k.overflows.filter($=>$>0).reduce(($,ge)=>$+ge,0)]).sort((k,$)=>k[1]-$[1])[0])==null?void 0:Ft[0];H&&(X=H);break}case"initialPlacement":X=c;break}if(s!==X)return{reset:{placement:X}}}return{}}}},fo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:c={fn:p=>{let{x:m,y:g}=p;return{x:m,y:g}}},...l}=zt(t,e),u={x:o,y:n},d=await le(e,l),a=tt(W(s)),f=re(a);let h=u[f],w=u[a];if(r){const p=f==="y"?"top":"left",m=f==="y"?"bottom":"right",g=h+d[p],v=h-d[m];h=Ut(g,h,v)}if(i){const p=a==="y"?"top":"left",m=a==="y"?"bottom":"right",g=w+d[p],v=w-d[m];w=Ut(g,w,v)}const b=c.fn({...e,[f]:h,[a]:w});return{...b,data:{x:b.x-o,y:b.y-n,enabled:{[f]:r,[a]:i}}}}}};function ht(){return typeof window<"u"}function q(t){return ae(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(ae(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ae(t){return ht()?t instanceof Node||t instanceof E(t).Node:!1}function A(t){return ht()?t instanceof Element||t instanceof E(t).Element:!1}function _(t){return ht()?t instanceof HTMLElement||t instanceof E(t).HTMLElement:!1}function Qt(t){return!ht()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:o,overflowY:n,display:s}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(s)}function ho(t){return["table","td","th"].includes(q(t))}function pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function $t(t){const e=Rt(),o=A(t)?C(t):t;return["transform","translate","scale","rotate","perspective"].some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function po(t){let e=P(t);for(;_(e)&&!V(e);){if($t(e))return e;if(pt(e))return null;e=P(e)}return null}function Rt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(q(t))}function C(t){return E(t).getComputedStyle(t)}function mt(t){return A(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function P(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Qt(t)&&t.host||z(t);return Qt(e)?e.host:e}function ue(t){const e=P(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&ot(e)?e:ue(e)}function et(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=ue(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),i=E(s);if(r){const c=Ct(i);return e.concat(i,i.visualViewport||[],ot(s)?s:[],c&&o?et(c):[])}return e.concat(s,et(s,[],o))}function Ct(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function de(t){const e=C(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=_(t),r=s?t.offsetWidth:o,i=s?t.offsetHeight:n,c=at(o)!==r||at(n)!==i;return c&&(o=r,n=i),{width:o,height:n,$:c}}function Ot(t){return A(t)?t:t.contextElement}function B(t){const e=Ot(t);if(!_(e))return S(1);const o=e.getBoundingClientRect(),{width:n,height:s,$:r}=de(e);let i=(r?at(o.width):o.width)/n,c=(r?at(o.height):o.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const mo=S(0);function fe(t){const e=E(t);return!Rt()||!e.visualViewport?mo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function bo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==E(t)?!1:e}function M(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=Ot(t);let i=S(1);e&&(n?A(n)&&(i=B(n)):i=B(t));const c=bo(r,o,n)?fe(r):S(0);let l=(s.left+c.x)/i.x,u=(s.top+c.y)/i.y,d=s.width/i.x,a=s.height/i.y;if(r){const f=E(r),h=n&&A(n)?E(n):n;let w=f,b=Ct(w);for(;b&&n&&h!==w;){const p=B(b),m=b.getBoundingClientRect(),g=C(b),v=m.left+(b.clientLeft+parseFloat(g.paddingLeft))*p.x,x=m.top+(b.clientTop+parseFloat(g.paddingTop))*p.y;l*=p.x,u*=p.y,d*=p.x,a*=p.y,l+=v,u+=x,w=E(b),b=Ct(w)}}return dt({width:d,height:a,x:l,y:u})}function Tt(t,e){const o=mt(t).scrollLeft;return e?e.left+o:M(z(t)).left+o}function he(t,e,o){o===void 0&&(o=!1);const n=t.getBoundingClientRect(),s=n.left+e.scrollLeft-(o?0:Tt(t,n)),r=n.top+e.scrollTop;return{x:s,y:r}}function go(t){let{elements:e,rect:o,offsetParent:n,strategy:s}=t;const r=s==="fixed",i=z(n),c=e?pt(e.floating):!1;if(n===i||c&&r)return o;let l={scrollLeft:0,scrollTop:0},u=S(1);const d=S(0),a=_(n);if((a||!a&&!r)&&((q(n)!=="body"||ot(i))&&(l=mt(n)),_(n))){const h=M(n);u=B(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}const f=i&&!a&&!r?he(i,l,!0):S(0);return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-l.scrollLeft*u.x+d.x+f.x,y:o.y*u.y-l.scrollTop*u.y+d.y+f.y}}function vo(t){return Array.from(t.getClientRects())}function wo(t){const e=z(t),o=mt(t),n=t.ownerDocument.body,s=I(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=I(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+Tt(t);const c=-o.scrollTop;return C(n).direction==="rtl"&&(i+=I(e.clientWidth,n.clientWidth)-s),{width:s,height:r,x:i,y:c}}function yo(t,e){const o=E(t),n=z(t),s=o.visualViewport;let r=n.clientWidth,i=n.clientHeight,c=0,l=0;if(s){r=s.width,i=s.height;const u=Rt();(!u||u&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:r,height:i,x:c,y:l}}function xo(t,e){const o=M(t,!0,e==="fixed"),n=o.top+t.clientTop,s=o.left+t.clientLeft,r=_(t)?B(t):S(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,u=n*r.y;return{width:i,height:c,x:l,y:u}}function Kt(t,e,o){let n;if(e==="viewport")n=yo(t,o);else if(e==="document")n=wo(z(t));else if(A(e))n=xo(e,o);else{const s=fe(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return dt(n)}function pe(t,e){const o=P(t);return o===e||!A(o)||V(o)?!1:C(o).position==="fixed"||pe(o,e)}function Eo(t,e){const o=e.get(t);if(o)return o;let n=et(t,[],!1).filter(c=>A(c)&&q(c)!=="body"),s=null;const r=C(t).position==="fixed";let i=r?P(t):t;for(;A(i)&&!V(i);){const c=C(i),l=$t(i);!l&&c.position==="fixed"&&(s=null),(r?!l&&!s:!l&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ot(i)&&!l&&pe(t,i))?n=n.filter(d=>d!==i):s=c,i=P(i)}return e.set(t,n),n}function Ao(t){let{element:e,boundary:o,rootBoundary:n,strategy:s}=t;const i=[...o==="clippingAncestors"?pt(e)?[]:Eo(e,this._c):[].concat(o),n],c=i[0],l=i.reduce((u,d)=>{const a=Kt(e,d,s);return u.top=I(a.top,u.top),u.right=lt(a.right,u.right),u.bottom=lt(a.bottom,u.bottom),u.left=I(a.left,u.left),u},Kt(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Co(t){const{width:e,height:o}=de(t);return{width:e,height:o}}function So(t,e,o){const n=_(e),s=z(e),r=o==="fixed",i=M(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);if(n||!n&&!r)if((q(e)!=="body"||ot(s))&&(c=mt(e)),n){const f=M(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else s&&(l.x=Tt(s));const u=s&&!n&&!r?he(s,c):S(0),d=i.left+c.scrollLeft-l.x-u.x,a=i.top+c.scrollTop-l.y-u.y;return{x:d,y:a,width:i.width,height:i.height}}function wt(t){return C(t).position==="static"}function Xt(t,e){if(!_(t)||C(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return z(t)===o&&(o=o.ownerDocument.body),o}function me(t,e){const o=E(t);if(pt(t))return o;if(!_(t)){let s=P(t);for(;s&&!V(s);){if(A(s)&&!wt(s))return s;s=P(s)}return o}let n=Xt(t,e);for(;n&&ho(n)&&wt(n);)n=Xt(n,e);return n&&V(n)&&wt(n)&&!$t(n)?o:n||po(t)||o}const _o=async function(t){const e=this.getOffsetParent||me,o=this.getDimensions,n=await o(t.floating);return{reference:So(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function zo(t){return C(t).direction==="rtl"}const ko={convertOffsetParentRelativeRectToViewportRelativeRect:go,getDocumentElement:z,getClippingRect:Ao,getOffsetParent:me,getElementRects:_o,getClientRects:vo,getDimensions:Co,getScale:B,isElement:A,isRTL:zo};function be(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function $o(t,e){let o=null,n;const s=z(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const u=t.getBoundingClientRect(),{left:d,top:a,width:f,height:h}=u;if(c||e(),!f||!h)return;const w=st(a),b=st(s.clientWidth-(d+f)),p=st(s.clientHeight-(a+h)),m=st(d),v={rootMargin:-w+"px "+-b+"px "+-p+"px "+-m+"px",threshold:I(0,lt(1,l))||1};let x=!0;function y(Q){const N=Q[0].intersectionRatio;if(N!==l){if(!x)return i();N?i(!1,N):n=setTimeout(()=>{i(!1,1e-7)},1e3)}N===1&&!be(u,t.getBoundingClientRect())&&i(),x=!1}try{o=new IntersectionObserver(y,{...v,root:s.ownerDocument})}catch{o=new IntersectionObserver(y,v)}o.observe(t)}return i(!0),r}function Ro(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,u=Ot(t),d=s||r?[...u?et(u):[],...et(e)]:[];d.forEach(m=>{s&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});const a=u&&c?$o(u,o):null;let f=-1,h=null;i&&(h=new ResizeObserver(m=>{let[g]=m;g&&g.target===u&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(e)})),o()}),u&&!l&&h.observe(u),h.observe(e));let w,b=l?M(t):null;l&&p();function p(){const m=M(t);b&&!be(b,m)&&o(),b=m,w=requestAnimationFrame(p)}return o(),()=>{var m;d.forEach(g=>{s&&g.removeEventListener("scroll",o),r&&g.removeEventListener("resize",o)}),a?.(),(m=h)==null||m.disconnect(),h=null,l&&cancelAnimationFrame(w)}}const Oo=fo,To=uo,Lo=(t,e,o)=>{const n=new Map,s={platform:ko,...o},r={...s.platform,_c:n};return ao(t,e,{...s,platform:r})},Po=[To({fallbackAxisSideDirection:"start",crossAxis:!1}),Oo()],Do=({placement:t="bottom-start",strategy:e,middleware:o=Po}={})=>{const[n,s]=O(),[r,i]=O(),[c,l]=O();return L(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return Ro(n,r,()=>Lo(n,r,{placement:t,strategy:e,middleware:o}).then(l))},[n,r,t,e,o]),{setReference:s,setFloating:i,styles:J(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Fo=t=>t.preventDefault(),Io=ft`
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
`,Mo=t=>{const{placement:e,strategy:o,middleware:n,render:s}=t,{active:r,onToggle:i}=Ve(t),{styles:c,setReference:l,setFloating:u}=Do({placement:e,strategy:o,middleware:n});return T` <div class="anchor" part="anchor" ${Yt(l)}>
			<button
				@mousedown=${Fo}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${qe(r,()=>T`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ke(c)}"
					@connected=${d=>d.target.showPopover?.()}
					${Yt(u)}
					><slot></slot>${Ze([s],()=>s?.()||yt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",U(Mo,{styleSheets:[Io]}));const No=ft`
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
`,Lt=t=>t.shadowRoot?.querySelector("cosmoz-dropdown-list-searchable")?.shadowRoot?.querySelector(".search-input")||null,Ho=t=>Array.from(t.children).filter(o=>o.slot!=="button").filter(o=>o.style.display!=="none"),Zt=t=>{Array.from(t.children).filter(o=>o.slot!=="button").forEach((o,n)=>{o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),o.setAttribute("role","option"),o.setAttribute("id",`dropdown-item-${n}`)})},Bo=(t,e)=>{e.position.focused==="search"?e.visibleItems.length>0&&e.focusItem(e.visibleItems.length-1):t>0?e.focusItem(t-1):e.focusSearchInput()},Wo=(t,e)=>{e.position.focused==="search"?e.visibleItems.length>0&&e.focusItem(0):t<e.visibleItems.length-1&&e.focusItem(t+1)},Vo=(t,e,o)=>{e.position.focused==="item"&&t>=0&&t<e.visibleItems.length?e.visibleItems[t].click():e.position.focused==="search"&&e.visibleItems.length===1&&(o.preventDefault(),e.visibleItems[0].click())},jo=t=>{t.onSearchChange("");const e=Lt(t.host);e&&(e.value=""),t.focusSearchInput()},Yo=(t,e)=>{if(t.defaultPrevented||t.ctrlKey&&t.altKey)return;const o=Lt(e.host);if(!o)return;const n=document.activeElement;if(!(e.host.contains(n)||o===n||e.host.shadowRoot?.contains(n)))return;const r=e.position.focused==="item"?e.position.index:-1;switch(t.key){case"ArrowUp":case"Up":t.preventDefault(),Bo(r,e);break;case"ArrowDown":case"Down":t.preventDefault(),Wo(r,e);break;case"Enter":t.preventDefault(),Vo(r,e,t);break;case"Escape":t.preventDefault(),jo(e);break}},Uo=({host:t,onSearchChange:e})=>{const[o,n]=O({index:-1,focused:"search"}),[s,r]=O(0),i=J(()=>Ho(t),[t,s]),c=R(()=>{const d=Lt(t);d&&(d.focus(),n({index:-1,focused:"search"}))},[t]),l=R(d=>{if(d>=0&&d<i.length){const a=i[d];a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),a.focus(),n({index:d,focused:"item"})}},[i]),u=R(d=>{Yo(d,{host:t,position:o,visibleItems:i,onSearchChange:e,focusSearchInput:c,focusItem:l})},[t,o,i,e,c,l]);return L(()=>{const d=()=>{r(f=>f+1),Zt(t)};t.addEventListener("keydown",u,!0),Zt(t);const a=new MutationObserver(d);return a.observe(t,{childList:!0}),()=>{t.removeEventListener("keydown",u,!0),a.disconnect()}},[t,u]),L(()=>{o.focused==="item"&&o.index>=i.length&&i.length>0&&n({index:Math.max(0,i.length-1),focused:"item"})},[i.length,o]),{position:o,focusItem:l,focusSearchInput:c}},qo=({host:t,searchTerm:e})=>{L(()=>{(()=>{Array.from(t.children).forEach(s=>{if(s.slot==="button")return;const r=s.textContent?.toLowerCase()||"";e===""||r.includes(e.toLowerCase())?s.style.display="":s.style.display="none"})})()},[e,t])},Qo=({host:t,searchTerm:e})=>{const[o,n]=O(!0);return L(()=>{const s=t.shadowRoot?.querySelector("slot");if(s){const r=()=>{const c=s.assignedElements({flatten:!0}).filter(l=>l.style.display!=="none").length;n(c>0)};return r(),s.addEventListener("slotchange",r),()=>s.removeEventListener("slotchange",r)}},[e,t]),o},Ko=t=>{const{searchTerm:e,placeholder:o="Search...",onSearchChange:n,noResultsText:s="No results found",menuHost:r}=t,i=r||t,c=Qo({host:i,searchTerm:e}),{position:l,focusSearchInput:u}=Uo({host:i,onSearchChange:n}),d=R(a=>{const f=a.target;n(f.value)},[n]);return L(()=>{const a=()=>{requestAnimationFrame(()=>{u()})},f=new IntersectionObserver(h=>{h.forEach(w=>{w.isIntersecting&&w.intersectionRatio>0&&a()})});return f.observe(t),()=>f.disconnect()},[u]),T`
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
					@input=${d}
				/>
			</div>
			<div class="listbox-wrapper">
				<div role="listbox" id="dropdown-listbox">
					<slot></slot>
				</div>
				${!c&&e?T`<div class="no-results" role="status" aria-live="polite">${s}</div>`:""}
			</div>
		</div>
	`};customElements.define("cosmoz-dropdown-list-searchable",U(Ko,{styleSheets:[No]}));const Xo=t=>{const{placement:e,searchPlaceholder:o,noResultsText:n}=t,[s,r]=O(""),i=R(c=>{r(c)},[]);return qo({host:t,searchTerm:s}),T`
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
	`};customElements.define("cosmoz-dropdown-menu-searchable",U(Xo));
