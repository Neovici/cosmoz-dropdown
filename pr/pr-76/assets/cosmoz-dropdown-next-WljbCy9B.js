import{B as R,d as P,e as E,c as x,r as G,D as O,A as T,a as b,f as z,b as y}from"./iframe-DZLx8CrX.js";const D=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},I=e=>e?.map(t=>typeof t=="string"?D(t):t),N=(e,...t)=>e.flatMap((s,o)=>[s,t[o]||""]).join(""),H=N,j=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function U(e){class t extends R{frag;renderResult;constructor(n,i,c){super(n,c||i),this.frag=i}commit(n){this.renderResult=e(n,this.frag)}}function s(o,n,i){const c=(i||n||{}).baseElement||HTMLElement,{observedAttributes:d=[],useShadowDOM:p=!0,shadowRootInit:l={},styleSheets:f}=i||n||{},v=I(o.styleSheets||f);class g extends c{_scheduler;static get observedAttributes(){return o.observedAttributes||d||[]}constructor(){if(super(),p===!1)this._scheduler=new t(o,this);else{const r=this.attachShadow({mode:"open",...l});v&&(r.adoptedStyleSheets=v),this._scheduler=new t(o,r,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,a,u){if(a===u)return;let h=u===""?!0:u;Reflect.set(this,j(r),h)}}function w(m){let r=m,a=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(u){a&&r===u||(a=!0,r=u,this._scheduler&&this._scheduler.update())}})}const C=new Proxy(c.prototype,{getPrototypeOf(m){return m},set(m,r,a,u){let h;return r in m?(h=Object.getOwnPropertyDescriptor(m,r),h&&h.set?(h.set.call(u,a),!0):(Reflect.set(m,r,a,u),!0)):(typeof r=="symbol"||r[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:a}:h=w(a),Object.defineProperty(u,r,h),h.set&&h.set.call(u,a),!0)}});return Object.setPrototypeOf(g.prototype,C),g}return s}function B(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(E,this)}disconnectedCallback(){this.removeEventListener(E,this)}handleEvent(o){const{detail:n}=o;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let n of this.listeners)n(o)}get value(){return this._value}},Consumer:e(function({render:o}){const n=P(s);return o(n)},{useShadowDOM:!1}),defaultValue:t};return s}}const $=(e,t)=>x(()=>e,t);function L(e){return x(()=>({current:e}),[])}function q({render:e}){const t=U(e),s=B(t);return{component:t,createContext:s}}const Y={ATTRIBUTE:1,CHILD:2},W=e=>(...t)=>({_$litDirective$:e,values:t});class F{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const _=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),_(o,t);return!0},A=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},M=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),K(t)}};function Q(e){this._$AN!==void 0?(A(this),this._$AM=e,M(this)):this._$AM=e}function J(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)_(o[i],!1),A(o[i]);else o!=null&&(_(o,!1),A(o));else _(this,e)}const K=e=>{e.type==Y.CHILD&&(e._$AP??=J,e._$AQ??=Q)};class X extends F{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),M(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(_(this,t),A(this))}setValue(t){if(G(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Z}=q({render:O}),S=new WeakMap,V=W(class extends X{render(e){return T}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ee=({host:e,popoverRef:t,disabled:s,openOnHover:o,openOnFocus:n,open:i,close:c})=>{const d=L(),p=()=>clearTimeout(d.current),l=()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const v=t.current;o&&(e.matches(":hover")||v?.matches(":hover"))||e.matches(":focus-within")||v?.matches(":focus-within")||c()},100)},f=()=>{s||(p(),i())};return b(()=>{if(!(!o||s))return e.addEventListener("pointerenter",f),e.addEventListener("pointerleave",l),()=>{p(),e.removeEventListener("pointerenter",f),e.removeEventListener("pointerleave",l)}},[o,s,e]),b(()=>{if(!(!n||s))return e.addEventListener("focusin",f),e.addEventListener("focusout",l),()=>{p(),e.removeEventListener("focusin",f),e.removeEventListener("focusout",l)}},[n,s,e]),{scheduleClose:l,cancelClose:p}},te=e=>{if(e.newState!=="open")return;const o=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of o){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},se=(e=document)=>{let t=e.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;return t},k=(e,t)=>{const o=e.shadowRoot?.querySelector("slot[name=button]")?.assignedElements({flatten:!0})[0];if(!o||!(o instanceof HTMLElement)||(o.setAttribute("aria-expanded",String(t)),t))return;const n=()=>{const i=se();(i==null||i===document.body)&&o.focus()};setTimeout(n,50),setTimeout(n,250)},oe=H`
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
`,ne=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:o,openOnHover:n,openOnFocus:i}=e,c=L(),[d,p]=z("opened",!1),l=$(()=>{s||(p(!0),c.current?.showPopover?.())},[s]),f=$(()=>{p(!1),c.current?.hidePopover?.()},[]),v=$(()=>{if(s)return;c.current?.matches(":popover-open")?f():l()},[s]);b(()=>{const r=c.current;r&&(d?r.showPopover?.():r.hidePopover?.())},[d]),b(()=>{e.toggleAttribute("opened",!!d)},[d]);const{scheduleClose:g,cancelClose:w}=ee({host:e,popoverRef:c,disabled:s,openOnHover:n,openOnFocus:i,open:l,close:f}),C=i?l:v;b(()=>{k(e,!1)},[]);const m=$(r=>{te(r);const a=r.newState==="open";p(a),k(e,a),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot name="button" @click=${C}></slot>
		${s&&o?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${m}
					@select=${f}
					@focusout=${g}
					@focusin=${w}
					${V(r=>r&&(c.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",Z(ne,{styleSheets:[oe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{Z as a,$ as b,H as c,W as e,F as i,V as n,D as s,Y as t,L as u};
