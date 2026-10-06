import{B as G,d as O,e as S,c as L,r as D,D as z,A as k,E as H,a as $,f as I,b as y}from"./iframe-IZe_YPZc.js";const N=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},j=e=>e?.map(t=>typeof t=="string"?N(t):t),B=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),U=B,q=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Y(e){class t extends G{frag;renderResult;constructor(o,i,c){super(o,c||i),this.frag=i}commit(o){this.renderResult=e(o,this.frag)}}function s(n,o,i){const c=(i||o||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:d=!0,shadowRootInit:u={},styleSheets:p}=i||o||{},m=j(n.styleSheets||p);class _ extends c{_scheduler;static get observedAttributes(){return n.observedAttributes||l||[]}constructor(){if(super(),d===!1)this._scheduler=new t(n,this);else{const r=this.attachShadow({mode:"open",...u});m&&(r.adoptedStyleSheets=m),this._scheduler=new t(n,r,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,v,a){if(v===a)return;let h=a===""?!0:a;Reflect.set(this,q(r),h)}}function C(f){let r=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(a){v&&r===a||(v=!0,r=a,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(c.prototype,{getPrototypeOf(f){return f},set(f,r,v,a){let h;return r in f?(h=Object.getOwnPropertyDescriptor(f,r),h&&h.set?(h.set.call(a,v),a._scheduler?.update(),!0):(Reflect.set(f,r,v,a),a._scheduler?.update(),!0)):(typeof r=="symbol"||r[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:v}:h=C(v),Object.defineProperty(a,r,h),h.set&&h.set.call(a,v),!0)}});return Object.setPrototypeOf(_.prototype,w),_}return s}function W(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(S,this)}disconnectedCallback(){this.removeEventListener(S,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:e(function({render:n}){const o=O(s);return n(o)},{useShadowDOM:!1}),defaultValue:t};return s}}const b=(e,t)=>L(()=>e,t);function F(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function T(e){return L(()=>F(e),[])}function Q({render:e}){const t=Y(e),s=W(t);return{component:t,createContext:s}}const J={ATTRIBUTE:1,CHILD:2},M=e=>(...t)=>({_$litDirective$:e,values:t});class K{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const g=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),g(n,t);return!0},A=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},P=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),V(t)}};function X(e){this._$AN!==void 0?(A(this),this._$AM=e,P(this)):this._$AM=e}function Z(e,t=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)g(n[i],!1),A(n[i]);else n!=null&&(g(n,!1),A(n));else g(this,e)}const V=e=>{e.type==J.CHILD&&(e._$AP??=Z,e._$AQ??=X)};class R extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),P(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(g(this,t),A(this))}setValue(t){if(D(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ee}=Q({render:z}),E=new WeakMap,te=M(class extends R{render(e){return k}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),k}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=E.get(t);s===void 0&&(s=new WeakMap,E.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?E.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),x=e=>e instanceof HTMLButtonElement||e instanceof HTMLAnchorElement||e.matches('[role="button"], [role="menuitem"], summary, input, a[href]');class se extends R{#e;#n=!1;#t=()=>{if(!this.#e)return;const t=this.#e.assignedElements({flatten:!0})[0];if(!t)return;(x(t)?t:[...t.querySelectorAll("*")].find(x)??t).setAttribute("aria-expanded",String(this.#n))};#s=()=>this.#t();update(t,[s]){this.#n=s;const n=t.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#t()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}reconnected(){this.#t()}render(){return H}}const ne=M(se),oe=({host:e,popoverRef:t,disabled:s,openOnHover:n,openOnFocus:o,open:i,close:c})=>{const l=T(),d=()=>clearTimeout(l.current),u=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const m=t.current;n&&(e.matches(":hover")||m?.matches(":hover"))||e.matches(":focus-within")||m?.matches(":focus-within")||c()},100)},p=()=>{s||(d(),i())};return $(()=>{if(!(!n||s))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",u),()=>{d(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",u)}},[n,s,e]),$(()=>{if(!(!o||s))return e.addEventListener("focusin",p),e.addEventListener("focusout",u),()=>{d(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",u)}},[o,s,e]),{scheduleClose:u,cancelClose:d}},re=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const i=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},ie=U`
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
`,ce=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:i}=e,c=T(),[l,d]=I("opened",!1),u=b(()=>{s||(d(!0),c.current?.showPopover?.())},[s]),p=b(()=>{d(!1),c.current?.hidePopover?.()},[]),m=b(()=>{if(s)return;c.current?.matches(":popover-open")?p():u()},[s]);$(()=>{const r=c.current;r&&(l?r.showPopover?.():r.hidePopover?.())},[l]),$(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:_,cancelClose:C}=oe({host:e,popoverRef:c,disabled:s,openOnHover:o,openOnFocus:i,open:u,close:p}),w=i?u:m,f=b(r=>{re(r),d(r.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot name="button" ${ne(l)} @click=${w}></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${f}
					@select=${p}
					@focusout=${_}
					@focusin=${C}
					${te(r=>r&&(c.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",ee(ce,{styleSheets:[ie],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{ee as a,b,U as c,M as e,K as i,te as n,N as s,J as t,T as u};
