import{B as R,d as G,e as E,c as x,r as O,D,A as k,E as j,a as $,f as z,b as y}from"./iframe-Bsz9A5xH.js";const N=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},I=e=>e?.map(t=>typeof t=="string"?N(t):t),H=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),U=H,B=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Y(e){class t extends R{frag;renderResult;constructor(o,i,c){super(o,c||i),this.frag=i}commit(o){this.renderResult=e(o,this.frag)}}function s(n,o,i){const c=(i||o||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:d=!0,shadowRootInit:u={},styleSheets:p}=i||o||{},m=I(n.styleSheets||p);class g extends c{_scheduler;static get observedAttributes(){return n.observedAttributes||l||[]}constructor(){if(super(),d===!1)this._scheduler=new t(n,this);else{const r=this.attachShadow({mode:"open",...u});m&&(r.adoptedStyleSheets=m),this._scheduler=new t(n,r,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,v,a){if(v===a)return;let h=a===""?!0:a;Reflect.set(this,B(r),h)}}function C(f){let r=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(a){v&&r===a||(v=!0,r=a,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(c.prototype,{getPrototypeOf(f){return f},set(f,r,v,a){let h;return r in f?(h=Object.getOwnPropertyDescriptor(f,r),h&&h.set?(h.set.call(a,v),a._scheduler?.update(),!0):(Reflect.set(f,r,v,a),a._scheduler?.update(),!0)):(typeof r=="symbol"||r[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:v}:h=C(v),Object.defineProperty(a,r,h),h.set&&h.set.call(a,v),!0)}});return Object.setPrototypeOf(g.prototype,w),g}return s}function q(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(E,this)}disconnectedCallback(){this.removeEventListener(E,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:e(function({render:n}){const o=G(s);return n(o)},{useShadowDOM:!1}),defaultValue:t};return s}}const _=(e,t)=>x(()=>e,t);function F(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function L(e){return x(()=>F(e),[])}function W({render:e}){const t=Y(e),s=q(t);return{component:t,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},T=e=>(...t)=>({_$litDirective$:e,values:t});class J{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const b=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),b(n,t);return!0},A=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},M=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Z(t)}};function K(e){this._$AN!==void 0?(A(this),this._$AM=e,M(this)):this._$AM=e}function X(e,t=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)b(n[i],!1),A(n[i]);else n!=null&&(b(n,!1),A(n));else b(this,e)}const Z=e=>{e.type==Q.CHILD&&(e._$AP??=X,e._$AQ??=K)};class P extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),M(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(b(this,t),A(this))}setValue(t){if(O(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=W({render:D}),S=new WeakMap,ee=T(class extends P{render(e){return k}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),k}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(e,...t)=>typeof e=="function"?e(...t):e,se=(e,t,s)=>{s==null?e.removeAttribute(t):e.setAttribute(t,s)},ne=(e,t)=>{for(const[s,n]of Object.entries(e))se(t,s,te(n,t))};class oe extends P{#e;#t;#n=()=>{if(!this.#e||!this.#t)return;const t=this.#e.assignedElements({flatten:!0});for(const s of t)ne(this.#t,s)};#s=()=>this.#n();update(t,[s]){this.#t=s;const n=t.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return j}}const re=T(oe),ie=({host:e,popoverRef:t,disabled:s,openOnHover:n,openOnFocus:o,open:i,close:c})=>{const l=L(),d=()=>clearTimeout(l.current),u=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const m=t.current;n&&(e.matches(":hover")||m?.matches(":hover"))||e.matches(":focus-within")||m?.matches(":focus-within")||c()},100)},p=()=>{s||(d(),i())};return $(()=>{if(!(!n||s))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",u),()=>{d(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",u)}},[n,s,e]),$(()=>{if(!(!o||s))return e.addEventListener("focusin",p),e.addEventListener("focusout",u),()=>{d(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",u)}},[o,s,e]),{scheduleClose:u,cancelClose:d}},ce=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const i=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},ae=U`
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
`,le=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:i}=e,c=L(),[l,d]=z("opened",!1),u=_(()=>{s||(d(!0),c.current?.showPopover?.())},[s]),p=_(()=>{d(!1),c.current?.hidePopover?.()},[]),m=_(()=>{if(s)return;c.current?.matches(":popover-open")?p():u()},[s]);$(()=>{const r=c.current;r&&(l?r.showPopover?.():r.hidePopover?.())},[l]),$(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:g,cancelClose:C}=ie({host:e,popoverRef:c,disabled:s,openOnHover:o,openOnFocus:i,open:u,close:p}),w=i?u:m,f=_(r=>{ce(r),d(r.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot
			name="button"
			${re({"aria-expanded":String(l)})}
			@click=${w}
		></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${f}
					@select=${p}
					@focusout=${g}
					@focusin=${C}
					${ee(r=>r&&(c.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(le,{styleSheets:[ae],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,_ as b,U as c,T as e,J as i,ee as n,N as s,Q as t,L as u};
