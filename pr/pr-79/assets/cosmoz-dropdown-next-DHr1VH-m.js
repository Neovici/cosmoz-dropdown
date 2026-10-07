import{B as G,d as O,e as R,c as x,r as D,D as j,A as M,E as S,a as A,f as z,b as E}from"./iframe-Dfa9fy2b.js";const N=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},H=e=>e?.map(t=>typeof t=="string"?N(t):t),I=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),U=I,B=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function W(e){class t extends G{frag;renderResult;constructor(o,a,h){super(o,h||a),this.frag=a}commit(o){this.renderResult=e(o,this.frag)}}function s(n,o,a){const h=(a||o||{}).baseElement||HTMLElement,{observedAttributes:_=[],useShadowDOM:d=!0,shadowRootInit:m={},styleSheets:v}=a||o||{},p=H(n.styleSheets||v);class f extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||_||[]}constructor(){if(super(),d===!1)this._scheduler=new t(n,this);else{const c=this.attachShadow({mode:"open",...m});p&&(c.adoptedStyleSheets=p),this._scheduler=new t(n,c,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,l,r){if(l===r)return;let u=r===""?!0:r;Reflect.set(this,B(c),u)}}function g(i){let c=i,l=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(r){l&&c===r||(l=!0,c=r,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(h.prototype,{getPrototypeOf(i){return i},set(i,c,l,r){let u;return c in i?(u=Object.getOwnPropertyDescriptor(i,c),u&&u.set?(u.set.call(r,l),r._scheduler?.update(),!0):(Reflect.set(i,c,l,r),r._scheduler?.update(),!0)):(typeof c=="symbol"||c[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:l}:u=g(l),Object.defineProperty(r,c,u),u.set&&u.set.call(r,l),!0)}});return Object.setPrototypeOf(f.prototype,b),f}return s}function Y(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(R,this)}disconnectedCallback(){this.removeEventListener(R,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:e(function({render:n}){const o=O(s);return n(o)},{useShadowDOM:!1}),defaultValue:t};return s}}const w=(e,t)=>x(()=>e,t);function q(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function k(e){return x(()=>q(e),[])}function F({render:e}){const t=W(e),s=Y(t);return{component:t,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},L=e=>(...t)=>({_$litDirective$:e,values:t});class J{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const $=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),$(n,t);return!0},C=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},P=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Z(t)}};function K(e){this._$AN!==void 0?(C(this),this._$AM=e,P(this)):this._$AM=e}function X(e,t=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let a=s;a<n.length;a++)$(n[a],!1),C(n[a]);else n!=null&&($(n,!1),C(n));else $(this,e)}const Z=e=>{e.type==Q.CHILD&&(e._$AP??=X,e._$AQ??=K)};class T extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),P(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&($(this,t),C(this))}setValue(t){if(D(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=F({render:j}),y=new WeakMap,ee=L(class extends T{render(e){return M}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=y.get(t);s===void 0&&(s=new WeakMap,y.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?y.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(e,...t)=>typeof e=="function"?e(...t):e,se=(e,t,s)=>{s==null?e.removeAttribute(t):e.setAttribute(t,s)},ne=(e,t)=>{for(const[s,n]of Object.entries(e))se(t,s,te(n,t))};class oe extends T{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const s of t)ne(this._attrs,s)};#t=()=>this.#e();render(t){return S}update(t,[s]){this._attrs=s;const n=t.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),S}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const re=L(oe);class ie extends T{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(t,[s]){this.#t=s;const n=t.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return S}}const ce=L(ie),ae=({host:e,popoverRef:t,triggersRef:s,disabled:n,openOnHover:o,openOnFocus:a,open:h,close:_})=>{const d=k(),m=x(()=>new WeakSet,[]),v=()=>{const i=s.current?.[0];return i instanceof HTMLElement?i:void 0},p=()=>clearTimeout(d.current),f=()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const i=t.current;o&&(e.matches(":hover")||i?.matches(":hover"))||e.matches(":focus-within")||i?.matches(":focus-within")||_()},100)},g=i=>{if(n||i.target!==v())return;const c=v();c&&m.delete(c)||(p(),h())},b=()=>{let i=document.activeElement;for(;i?.shadowRoot;)i=i.shadowRoot.activeElement;if(!(i==null||i===document.body||i.offsetParent==null))return;const l=v();l&&(m.add(l),l.focus())};return A(()=>{if(!(!o||n))return e.addEventListener("pointerenter",g),e.addEventListener("pointerleave",f),()=>{p(),e.removeEventListener("pointerenter",g),e.removeEventListener("pointerleave",f)}},[o,n,e]),A(()=>{if(!(!a||n))return e.addEventListener("focusin",g),e.addEventListener("focusout",f),()=>{p(),e.removeEventListener("focusin",g),e.removeEventListener("focusout",f)}},[a,n,e]),{scheduleClose:f,cancelClose:p,restoreTrigger:b}},le=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const a=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(a instanceof HTMLElement){a.focus();break}}},ue=U`
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
`,he=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:a}=e,h=k(),_=k(),[d,m]=z("opened",!1),v=w(()=>{s||(m(!0),h.current?.showPopover?.())},[s]),p=w(()=>{m(!1),h.current?.hidePopover?.()},[]),f=w(()=>{if(s)return;h.current?.matches(":popover-open")?p():v()},[s]);A(()=>{const r=h.current;r&&(d?r.showPopover?.():r.hidePopover?.())},[d]),A(()=>{e.toggleAttribute("opened",!!d)},[d]);const{scheduleClose:g,cancelClose:b,restoreTrigger:i}=ae({host:e,popoverRef:h,triggersRef:_,disabled:s,openOnHover:o,openOnFocus:a,open:v,close:p}),c=a?v:f,l=w(r=>{le(r);const u=r.newState==="open";m(u),u||i(),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return E`
		<slot
			name="button"
			${ce(_)}
			${re({"aria-expanded":String(d)})}
			@click=${c}
		></slot>
		${s&&n?E`<slot></slot>`:E`<div
					popover
					style="position-area: ${t}"
					@toggle=${l}
					@select=${p}
					@focusout=${g}
					@focusin=${b}
					${ee(r=>r&&(h.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(he,{styleSheets:[ue],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,w as b,U as c,L as e,J as i,ee as n,N as s,Q as t,k as u};
