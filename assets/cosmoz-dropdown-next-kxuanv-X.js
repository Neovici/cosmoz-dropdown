import{B as M,d as P,e as E,c as k,r as G,D as R,A as x,a as $,f as O,b as y}from"./iframe-D5zTkgw8.js";const z=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},D=e=>e?.map(t=>typeof t=="string"?z(t):t),N=(e,...t)=>e.flatMap((s,o)=>[s,t[o]||""]).join(""),I=N,j=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function H(e){class t extends M{frag;renderResult;constructor(n,i,c){super(n,c||i),this.frag=i}commit(n){this.renderResult=e(n,this.frag)}}function s(o,n,i){const c=(i||n||{}).baseElement||HTMLElement,{observedAttributes:h=[],useShadowDOM:d=!0,shadowRootInit:a={},styleSheets:p}=i||n||{},m=D(o.styleSheets||p);class b extends c{_scheduler;static get observedAttributes(){return o.observedAttributes||h||[]}constructor(){if(super(),d===!1)this._scheduler=new t(o,this);else{const r=this.attachShadow({mode:"open",...a});m&&(r.adoptedStyleSheets=m),this._scheduler=new t(o,r,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,v,l){if(v===l)return;let u=l===""?!0:l;Reflect.set(this,j(r),u)}}function C(f){let r=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(l){v&&r===l||(v=!0,r=l,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(c.prototype,{getPrototypeOf(f){return f},set(f,r,v,l){let u;return r in f?(u=Object.getOwnPropertyDescriptor(f,r),u&&u.set?(u.set.call(l,v),!0):(Reflect.set(f,r,v,l),!0)):(typeof r=="symbol"||r[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:v}:u=C(v),Object.defineProperty(l,r,u),u.set&&u.set.call(l,v),!0)}});return Object.setPrototypeOf(b.prototype,w),b}return s}function U(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(E,this)}disconnectedCallback(){this.removeEventListener(E,this)}handleEvent(o){const{detail:n}=o;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let n of this.listeners)n(o)}get value(){return this._value}},Consumer:e(function({render:o}){const n=P(s);return o(n)},{useShadowDOM:!1}),defaultValue:t};return s}}const g=(e,t)=>k(()=>e,t);function T(e){return k(()=>({current:e}),[])}function B({render:e}){const t=H(e),s=U(t);return{component:t,createContext:s}}const Y={ATTRIBUTE:1,CHILD:2},q=e=>(...t)=>({_$litDirective$:e,values:t});class W{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const _=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),_(o,t);return!0},A=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},L=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),J(t)}};function F(e){this._$AN!==void 0?(A(this),this._$AM=e,L(this)):this._$AM=e}function Q(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)_(o[i],!1),A(o[i]);else o!=null&&(_(o,!1),A(o));else _(this,e)}const J=e=>{e.type==Y.CHILD&&(e._$AP??=Q,e._$AQ??=F)};class K extends W{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),L(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(_(this,t),A(this))}setValue(t){if(G(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:X}=B({render:R}),S=new WeakMap,Z=q(class extends K{render(e){return x}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),x}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),V=({host:e,popoverRef:t,disabled:s,openOnHover:o,openOnFocus:n,open:i,close:c})=>{const h=T(),d=()=>clearTimeout(h.current),a=()=>{clearTimeout(h.current),h.current=setTimeout(()=>{const m=t.current;o&&(e.matches(":hover")||m?.matches(":hover"))||e.matches(":focus-within")||m?.matches(":focus-within")||c()},100)},p=()=>{s||(d(),i())};return $(()=>{if(!(!o||s))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",a),()=>{d(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",a)}},[o,s,e]),$(()=>{if(!(!n||s))return e.addEventListener("focusin",p),e.addEventListener("focusout",a),()=>{d(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",a)}},[n,s,e]),{scheduleClose:a,cancelClose:d}},ee=e=>{if(e.newState!=="open")return;const o=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of o){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},te=I`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,se=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:o,openOnHover:n,openOnFocus:i}=e,c=T(),[h,d]=O("opened",!1),a=g(()=>{s||(d(!0),c.current?.showPopover?.())},[s]),p=g(()=>{d(!1),c.current?.hidePopover?.()},[]),m=g(()=>{if(s)return;c.current?.matches(":popover-open")?p():a()},[s]);$(()=>{const r=c.current;r&&(h?r.showPopover?.():r.hidePopover?.())},[h]),$(()=>{e.toggleAttribute("opened",!!h)},[h]);const{scheduleClose:b,cancelClose:C}=V({host:e,popoverRef:c,disabled:s,openOnHover:n,openOnFocus:i,open:a,close:p}),w=i?a:m,f=g(r=>{ee(r),d(r.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot name="button" @click=${w}></slot>
		${s&&o?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${f}
					@select=${p}
					@focusout=${b}
					@focusin=${C}
					${Z(r=>r&&(c.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",X(se,{styleSheets:[te],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{X as a,g as b,I as c,q as e,W as i,Z as n,z as s,Y as t,T as u};
