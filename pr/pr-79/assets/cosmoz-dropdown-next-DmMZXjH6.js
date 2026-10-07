import{B as O,d as G,e as R,c as A,r as j,D,A as M,E as k,a as C,f as z,b as y}from"./iframe-DvGj8Vw6.js";const N=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},H=t=>t?.map(e=>typeof e=="string"?N(e):e),I=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),U=I,B=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function F(t){class e extends O{frag;renderResult;constructor(i,c,u){super(i,u||c),this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,i,c){const u=(c||i||{}).baseElement||HTMLElement,{observedAttributes:_=[],useShadowDOM:d=!0,shadowRootInit:g={},styleSheets:m}=c||i||{},p=H(n.styleSheets||m);class f extends u{_scheduler;static get observedAttributes(){return n.observedAttributes||_||[]}constructor(){if(super(),d===!1)this._scheduler=new e(n,this);else{const o=this.attachShadow({mode:"open",...g});p&&(o.adoptedStyleSheets=p),this._scheduler=new e(n,o,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(o,a,r){if(a===r)return;let l=r===""?!0:r;Reflect.set(this,B(o),l)}}function b(h){let o=h,a=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return o},set(r){a&&o===r||(a=!0,o=r,this._scheduler&&this._scheduler.update())}})}const v=new Proxy(u.prototype,{getPrototypeOf(h){return h},set(h,o,a,r){let l;return o in h?(l=Object.getOwnPropertyDescriptor(h,o),l&&l.set?(l.set.call(r,a),r._scheduler?.update(),!0):(Reflect.set(h,o,a,r),r._scheduler?.update(),!0)):(typeof o=="symbol"||o[0]==="_"?l={enumerable:!0,configurable:!0,writable:!0,value:a}:l=b(a),Object.defineProperty(r,o,l),l.set&&l.set.call(r,a),!0)}});return Object.setPrototypeOf(f.prototype,v),f}return s}function W(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(R,this)}disconnectedCallback(){this.removeEventListener(R,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:t(function({render:n}){const i=G(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const $=(t,e)=>A(()=>t,e);function Y(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function x(t){return A(()=>Y(t),[])}function q({render:t}){const e=F(t),s=W(e);return{component:e,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},L=t=>(...e)=>({_$litDirective$:t,values:e});class J{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const w=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),w(n,e);return!0},E=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},P=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Z(e)}};function K(t){this._$AN!==void 0?(E(this),this._$AM=t,P(this)):this._$AM=t}function X(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let c=s;c<n.length;c++)w(n[c],!1),E(n[c]);else n!=null&&(w(n,!1),E(n));else w(this,t)}const Z=t=>{t.type==Q.CHILD&&(t._$AP??=X,t._$AQ??=K)};class T extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),P(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(w(this,e),E(this))}setValue(e){if(j(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=q({render:D}),S=new WeakMap,ee=L(class extends T{render(t){return M}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),M}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=S.get(e);s===void 0&&(s=new WeakMap,S.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(t,...e)=>typeof t=="function"?t(...e):t,se=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ne=(t,e)=>{for(const[s,n]of Object.entries(t))se(e,s,te(n,e))};class oe extends T{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ne(this._attrs,s)};#t=()=>this.#e();render(e){return k}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),k}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const re=L(oe);class ie extends T{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(e,[s]){this.#t=s;const n=e.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return k}}const ce=L(ie),ae=t=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,t),[e,...Object.values(t)])},le=({host:t,popoverRef:e,triggersRef:s,disabled:n,openOnHover:i,openOnFocus:c,open:u,close:_})=>{const d=x(),g=A(()=>new WeakSet,[]),m=()=>{const o=s.current?.[0];return o instanceof HTMLElement?o:void 0},p=()=>clearTimeout(d.current),f=()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const o=e.current;i&&(t.matches(":hover")||o?.matches(":hover"))||t.matches(":focus-within")||o?.matches(":focus-within")||_()},100)},b=ae({disabled:n,open:u}),v=$(o=>{if(b.disabled||o.target!==m())return;const a=m();a&&g.delete(a)||(p(),b.open())},[]),h=$(()=>{let o=document.activeElement;for(;o?.shadowRoot;)o=o.shadowRoot.activeElement;if(!(o==null||o===document.body||o.offsetParent==null))return;const r=m();r&&(g.add(r),r.focus())},[]);return C(()=>{if(!(!i||n))return t.addEventListener("pointerenter",v),t.addEventListener("pointerleave",f),()=>{p(),t.removeEventListener("pointerenter",v),t.removeEventListener("pointerleave",f)}},[i,n,v]),C(()=>{if(!(!c||n))return t.addEventListener("focusin",v),t.addEventListener("focusout",f),()=>{p(),t.removeEventListener("focusin",v),t.removeEventListener("focusout",f)}},[c,n,v]),{scheduleClose:f,cancelClose:p,restoreFocus:h}},ue=t=>{if(t.newState!=="open")return;const n=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of n){const c=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(c instanceof HTMLElement){c.focus();break}}},he=U`
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
`,de=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:i,openOnFocus:c}=t,u=x(),_=x(),[d,g]=z("opened",!1),m=$(()=>{s||(g(!0),u.current?.showPopover?.())},[s]),p=$(()=>{g(!1),u.current?.hidePopover?.()},[]),f=$(()=>{if(s)return;u.current?.matches(":popover-open")?p():m()},[s]);C(()=>{const r=u.current;r&&(d?r.showPopover?.():r.hidePopover?.())},[d]),C(()=>{t.toggleAttribute("opened",!!d)},[d]);const{scheduleClose:b,cancelClose:v,restoreFocus:h}=le({host:t,popoverRef:u,triggersRef:_,disabled:s,openOnHover:i,openOnFocus:c,open:m,close:p}),o=c?m:f,a=$(r=>{ue(r);const l=r.newState==="open";g(l),l||h(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot
			name="button"
			${ce(_)}
			${re({"aria-expanded":String(d)})}
			@click=${o}
		></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${e}"
					@toggle=${a}
					@select=${p}
					@focusout=${b}
					@focusin=${v}
					${ee(r=>r&&(u.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(de,{styleSheets:[he],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,ae as b,U as c,$ as d,L as e,J as i,ee as n,N as s,Q as t,x as u};
