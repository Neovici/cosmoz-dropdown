import{B as P,d as G,e as k,c as L,r as O,D as z,A as T,a as g,f as D,b as y}from"./iframe-CN03i2pC.js";const I=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},N=e=>e?.map(t=>typeof t=="string"?I(t):t),H=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),j=H,U=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function B(e){class t extends P{frag;renderResult;constructor(r,i,c){super(r,c||i),this.frag=i}commit(r){this.renderResult=e(r,this.frag)}}function s(n,r,i){const c=(i||r||{}).baseElement||HTMLElement,{observedAttributes:h=[],useShadowDOM:p=!0,shadowRootInit:l={},styleSheets:f}=i||r||{},v=N(n.styleSheets||f);class _ extends c{_scheduler;static get observedAttributes(){return n.observedAttributes||h||[]}constructor(){if(super(),p===!1)this._scheduler=new t(n,this);else{const o=this.attachShadow({mode:"open",...l});v&&(o.adoptedStyleSheets=v),this._scheduler=new t(n,o,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(o,a,u){if(a===u)return;let d=u===""?!0:u;Reflect.set(this,U(o),d)}}function A(m){let o=m,a=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return o},set(u){a&&o===u||(a=!0,o=u,this._scheduler&&this._scheduler.update())}})}const C=new Proxy(c.prototype,{getPrototypeOf(m){return m},set(m,o,a,u){let d;return o in m?(d=Object.getOwnPropertyDescriptor(m,o),d&&d.set?(d.set.call(u,a),!0):(Reflect.set(m,o,a,u),!0)):(typeof o=="symbol"||o[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:a}:d=A(a),Object.defineProperty(u,o,d),d.set&&d.set.call(u,a),!0)}});return Object.setPrototypeOf(_.prototype,C),_}return s}function q(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(k,this)}disconnectedCallback(){this.removeEventListener(k,this)}handleEvent(n){const{detail:r}=n;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:e(function({render:n}){const r=G(s);return n(r)},{useShadowDOM:!1}),defaultValue:t};return s}}const $=(e,t)=>L(()=>e,t);function M(e){return L(()=>({current:e}),[])}function W({render:e}){const t=B(e),s=q(t);return{component:t,createContext:s}}const Y={ATTRIBUTE:1,CHILD:2},F=e=>(...t)=>({_$litDirective$:e,values:t});class Q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const b=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),b(n,t);return!0},w=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},R=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),X(t)}};function J(e){this._$AN!==void 0?(w(this),this._$AM=e,R(this)):this._$AM=e}function K(e,t=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)b(n[i],!1),w(n[i]);else n!=null&&(b(n,!1),w(n));else b(this,e)}const X=e=>{e.type==Y.CHILD&&(e._$AP??=K,e._$AQ??=J)};class Z extends Q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),R(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(b(this,t),w(this))}setValue(t){if(O(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=W({render:z}),S=new WeakMap,ee=F(class extends Z{render(e){return T}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=({host:e,popoverRef:t,disabled:s,openOnHover:n,openOnFocus:r,open:i,close:c})=>{const h=M(),p=()=>clearTimeout(h.current),l=()=>{clearTimeout(h.current),h.current=setTimeout(()=>{const v=t.current;n&&(e.matches(":hover")||v?.matches(":hover"))||e.matches(":focus-within")||v?.matches(":focus-within")||c()},100)},f=()=>{s||(p(),i())};return g(()=>{if(!(!n||s))return e.addEventListener("pointerenter",f),e.addEventListener("pointerleave",l),()=>{p(),e.removeEventListener("pointerenter",f),e.removeEventListener("pointerleave",l)}},[n,s,e]),g(()=>{if(!(!r||s))return e.addEventListener("focusin",f),e.addEventListener("focusout",l),()=>{p(),e.removeEventListener("focusin",f),e.removeEventListener("focusout",l)}},[r,s,e]),{scheduleClose:l,cancelClose:p}},se=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const i=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},ne=(e=document)=>{let t=e.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;return t},E=new WeakSet,x=(e,t,s)=>{const r=e.shadowRoot?.querySelector("slot[name=button]")?.assignedElements({flatten:!0})[0];if(!r||!(r instanceof HTMLElement)||(r.setAttribute("aria-expanded",String(t)),t||s))return;const i=ne();(i==null||i===document.body||i===e||e.contains(i)||e.shadowRoot?.contains(i))&&r.focus()},oe=j`
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
`,re=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:r,openOnFocus:i}=e,c=M(),[h,p]=D("opened",!1),l=$(()=>{s||(p(!0),c.current?.showPopover?.())},[s]),f=$(()=>{p(!1),c.current?.hidePopover?.()},[]),v=$(()=>{if(s)return;c.current?.matches(":popover-open")?f():l()},[s]);g(()=>{const o=c.current;o&&(h?o.showPopover?.():o.hidePopover?.())},[h]),g(()=>{e.toggleAttribute("opened",!!h)},[h]);const{scheduleClose:_,cancelClose:A}=te({host:e,popoverRef:c,disabled:s,openOnHover:r,openOnFocus:i,open:l,close:f}),C=i?l:v;g(()=>{x(e,!1,!1)},[]);const m=$(o=>{se(o);const a=o.newState==="open";p(a),x(e,a,o.target!=null&&E.has(o.target)),o.target!=null&&(E.delete(o.target),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:o.newState,oldState:o.oldState,composed:!0})))},[]);return y`
		<slot name="button" @click=${C}></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${m}
					@select=${o=>{o.currentTarget!=null&&E.add(o.currentTarget),f()}}
					@focusout=${_}
					@focusin=${A}
					${ee(o=>o&&(c.current=o))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(re,{styleSheets:[oe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,$ as b,j as c,F as e,Q as i,ee as n,I as s,Y as t,M as u};
