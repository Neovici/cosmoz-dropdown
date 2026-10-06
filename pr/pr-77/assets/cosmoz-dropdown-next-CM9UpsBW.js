import{B as P,d as G,e as k,c as L,r as O,D as I,A as x,a as b,f as z,b as y}from"./iframe-AiAdt08d.js";const D=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},H=e=>e?.map(t=>typeof t=="string"?D(t):t),N=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),j=N,q=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function B(e){class t extends P{frag;renderResult;constructor(r,i,a){super(r,a||i),this.frag=i}commit(r){this.renderResult=e(r,this.frag)}}function s(n,r,i){const a=(i||r||{}).baseElement||HTMLElement,{observedAttributes:d=[],useShadowDOM:p=!0,shadowRootInit:u={},styleSheets:f}=i||r||{},v=H(n.styleSheets||f);class g extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||d||[]}constructor(){if(super(),p===!1)this._scheduler=new t(n,this);else{const o=this.attachShadow({mode:"open",...u});v&&(o.adoptedStyleSheets=v),this._scheduler=new t(n,o,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(o,c,l){if(c===l)return;let h=l===""?!0:l;Reflect.set(this,q(o),h)}}function C(m){let o=m,c=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return o},set(l){c&&o===l||(c=!0,o=l,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(a.prototype,{getPrototypeOf(m){return m},set(m,o,c,l){let h;return o in m?(h=Object.getOwnPropertyDescriptor(m,o),h&&h.set?(h.set.call(l,c),l._scheduler?.update(),!0):(Reflect.set(m,o,c,l),l._scheduler?.update(),!0)):(typeof o=="symbol"||o[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:c}:h=C(c),Object.defineProperty(l,o,h),h.set&&h.set.call(l,c),!0)}});return Object.setPrototypeOf(g.prototype,w),g}return s}function U(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(k,this)}disconnectedCallback(){this.removeEventListener(k,this)}handleEvent(n){const{detail:r}=n;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:e(function({render:n}){const r=G(s);return n(r)},{useShadowDOM:!1}),defaultValue:t};return s}}const $=(e,t)=>L(()=>e,t);function Y(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function M(e){return L(()=>Y(e),[])}function W({render:e}){const t=B(e),s=U(t);return{component:t,createContext:s}}const F={ATTRIBUTE:1,CHILD:2},Q=e=>(...t)=>({_$litDirective$:e,values:t});class J{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const _=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),_(n,t);return!0},A=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},R=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Z(t)}};function K(e){this._$AN!==void 0?(A(this),this._$AM=e,R(this)):this._$AM=e}function X(e,t=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)_(n[i],!1),A(n[i]);else n!=null&&(_(n,!1),A(n));else _(this,e)}const Z=e=>{e.type==F.CHILD&&(e._$AP??=X,e._$AQ??=K)};class V extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),R(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(_(this,t),A(this))}setValue(t){if(O(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ee}=W({render:I}),S=new WeakMap,te=Q(class extends V{render(e){return x}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),x}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),se=({host:e,popoverRef:t,disabled:s,openOnHover:n,openOnFocus:r,open:i,close:a})=>{const d=M(),p=()=>clearTimeout(d.current),u=()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const v=t.current;n&&(e.matches(":hover")||v?.matches(":hover"))||e.matches(":focus-within")||v?.matches(":focus-within")||a()},100)},f=()=>{s||(p(),i())};return b(()=>{if(!(!n||s))return e.addEventListener("pointerenter",f),e.addEventListener("pointerleave",u),()=>{p(),e.removeEventListener("pointerenter",f),e.removeEventListener("pointerleave",u)}},[n,s,e]),b(()=>{if(!(!r||s))return e.addEventListener("focusin",f),e.addEventListener("focusout",u),()=>{p(),e.removeEventListener("focusin",f),e.removeEventListener("focusout",u)}},[r,s,e]),{scheduleClose:u,cancelClose:p}},ne=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const i=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},T=e=>e instanceof HTMLButtonElement||e instanceof HTMLAnchorElement||e.matches('[role="button"], [role="menuitem"], summary, input, a[href]'),oe=e=>{const t=e.assignedElements({flatten:!0})[0];if(!t)return;if(T(t))return t;const s=[...t.querySelectorAll("*")].find(T);return s||t},E=(e,t)=>{const s=e.shadowRoot?.querySelector('slot[name="button"]'),n=s&&oe(s);n&&n.setAttribute("aria-expanded",String(t))},re=j`
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
`,ie=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:r,openOnFocus:i}=e,a=M(),[d,p]=z("opened",!1),u=$(()=>{s||(p(!0),a.current?.showPopover?.())},[s]),f=$(()=>{p(!1),a.current?.hidePopover?.()},[]),v=$(()=>{if(s)return;a.current?.matches(":popover-open")?f():u()},[s]);b(()=>{const o=a.current;o&&(d?o.showPopover?.():o.hidePopover?.())},[d]),b(()=>{e.toggleAttribute("opened",!!d)},[d]);const{scheduleClose:g,cancelClose:C}=se({host:e,popoverRef:a,disabled:s,openOnHover:r,openOnFocus:i,open:u,close:f}),w=i?u:v,m=$(o=>{ne(o);const c=o.newState==="open";p(c),E(e,c),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:o.newState,oldState:o.oldState,composed:!0}))},[]);return b(()=>{s&&n||E(e,!1)},[s,n]),b(()=>{if(s&&n)return;const o=e.shadowRoot?.querySelector('slot[name="button"]');if(!o)return;const c=()=>E(e,a.current?.matches(":popover-open")===!0);return o.addEventListener("slotchange",c),()=>o.removeEventListener("slotchange",c)},[s,n]),y`
		<slot name="button" @click=${w}></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${m}
					@select=${f}
					@focusout=${g}
					@focusin=${C}
					${te(o=>o&&(a.current=o))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",ee(ie,{styleSheets:[re],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{ee as a,$ as b,j as c,Q as e,J as i,te as n,D as s,F as t,M as u};
