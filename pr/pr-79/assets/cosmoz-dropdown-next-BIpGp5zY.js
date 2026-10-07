import{B as G,d as O,e as T,c as A,r as j,D,A as M,E as k,a as C,f as z,b as y}from"./iframe-CHUM9o8i.js";const N=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},I=t=>t?.map(e=>typeof e=="string"?N(e):e),H=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),U=H,B=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function F(t){class e extends G{frag;renderResult;constructor(o,a,h){super(o,h||a),this.frag=a}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,a){const h=(a||o||{}).baseElement||HTMLElement,{observedAttributes:b=[],useShadowDOM:f=!0,shadowRootInit:g={},styleSheets:d}=a||o||{},p=I(n.styleSheets||d);class v extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||b||[]}constructor(){if(super(),f===!1)this._scheduler=new e(n,this);else{const c=this.attachShadow({mode:"open",...g});p&&(c.adoptedStyleSheets=p),this._scheduler=new e(n,c,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,l,r){if(l===r)return;let u=r===""?!0:r;Reflect.set(this,B(c),u)}}function m(i){let c=i,l=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(r){l&&c===r||(l=!0,c=r,this._scheduler&&this._scheduler.update())}})}const $=new Proxy(h.prototype,{getPrototypeOf(i){return i},set(i,c,l,r){let u;return c in i?(u=Object.getOwnPropertyDescriptor(i,c),u&&u.set?(u.set.call(r,l),r._scheduler?.update(),!0):(Reflect.set(i,c,l,r),r._scheduler?.update(),!0)):(typeof c=="symbol"||c[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:l}:u=m(l),Object.defineProperty(r,c,u),u.set&&u.set.call(r,l),!0)}});return Object.setPrototypeOf(v.prototype,$),v}return s}function W(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(T,this)}disconnectedCallback(){this.removeEventListener(T,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=O(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const _=(t,e)=>A(()=>t,e);function Y(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function R(t){return A(()=>Y(t),[])}function q({render:t}){const e=F(t),s=W(e);return{component:e,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},x=t=>(...e)=>({_$litDirective$:t,values:e});class J{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const w=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),w(n,e);return!0},E=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},P=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Z(e)}};function K(t){this._$AN!==void 0?(E(this),this._$AM=t,P(this)):this._$AM=t}function X(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let a=s;a<n.length;a++)w(n[a],!1),E(n[a]);else n!=null&&(w(n,!1),E(n));else w(this,t)}const Z=t=>{t.type==Q.CHILD&&(t._$AP??=X,t._$AQ??=K)};class L extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),P(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(w(this,e),E(this))}setValue(e){if(j(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=q({render:D}),S=new WeakMap,ee=x(class extends L{render(t){return M}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),M}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=S.get(e);s===void 0&&(s=new WeakMap,S.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(t,...e)=>typeof t=="function"?t(...e):t,se=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ne=(t,e)=>{for(const[s,n]of Object.entries(t))se(e,s,te(n,e))};class oe extends L{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ne(this._attrs,s)};#t=()=>this.#e();render(e){return k}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),k}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const re=x(oe);class ie extends L{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(e,[s]){this.#t=s;const n=e.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return k}}const ce=x(ie),ae=t=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,t),[e,...Object.values(t)])},le=({host:t,popoverRef:e,triggersRef:s,disabled:n,openOnHover:o,openOnFocus:a,open:h,close:b})=>{const f=A(()=>new WeakSet,[]),g=_(()=>{const i=s.current?.[0];return i instanceof HTMLElement?i:void 0},[]),d=ae({disabled:n,open:h,closeTimeout:void 0}),p=_(()=>{clearTimeout(d.closeTimeout)},[]),v=_(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{const i=e.current;o&&(t.matches(":hover")||i?.matches(":hover"))||t.matches(":focus-within")||i?.matches(":focus-within")||b()},100)},[o,t,e,b]),m=_(i=>{if(d.disabled||i.target!==g())return;const c=g();c&&f.delete(c)||(p(),d.open())},[]),$=_(()=>{let i=document.activeElement;for(;i?.shadowRoot;)i=i.shadowRoot.activeElement;if(!(i==null||i===document.body||i.offsetParent==null))return;const l=g();l&&(f.add(l),l.focus())},[]);return C(()=>{if(!(!o||n))return t.addEventListener("pointerenter",m),t.addEventListener("pointerleave",v),()=>{p(),t.removeEventListener("pointerenter",m),t.removeEventListener("pointerleave",v)}},[o,n,m]),C(()=>{if(!(!a||n))return t.addEventListener("focusin",m),t.addEventListener("focusout",v),()=>{p(),t.removeEventListener("focusin",m),t.removeEventListener("focusout",v)}},[a,n,m]),{scheduleClose:v,cancelClose:p,restoreFocus:$}},ue=t=>{if(t.newState!=="open")return;const n=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const a=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(a instanceof HTMLElement){a.focus();break}}},he=U`
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
`,de=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:a}=t,h=R(),b=R(),[f,g]=z("opened",!1),d=_(()=>{s||(g(!0),h.current?.showPopover?.())},[s]),p=_(()=>{g(!1),h.current?.hidePopover?.()},[]),v=_(()=>{if(s)return;h.current?.matches(":popover-open")?p():d()},[s]);C(()=>{const r=h.current;r&&(f?r.showPopover?.():r.hidePopover?.())},[f]),C(()=>{t.toggleAttribute("opened",!!f)},[f]);const{scheduleClose:m,cancelClose:$,restoreFocus:i}=le({host:t,popoverRef:h,triggersRef:b,disabled:s,openOnHover:o,openOnFocus:a,open:d,close:p}),c=a?d:v,l=_(r=>{ue(r);const u=r.newState==="open";g(u),u||i(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot
			name="button"
			${ce(b)}
			${re({"aria-expanded":String(f)})}
			@click=${c}
		></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${p}
					@focusout=${m}
					@focusin=${$}
					${ee(r=>r&&(h.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(de,{styleSheets:[he],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,ae as b,U as c,_ as d,x as e,J as i,ee as n,N as s,Q as t,R as u};
