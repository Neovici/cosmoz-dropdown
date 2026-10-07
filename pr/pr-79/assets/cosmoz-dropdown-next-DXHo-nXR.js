import{B as G,d as O,e as R,c as x,r as D,D as j,A as M,E as S,a as A,f as z,b as E}from"./iframe-oSIYCrIj.js";const N=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},H=t=>t?.map(e=>typeof e=="string"?N(e):e),I=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),U=I,B=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function W(t){class e extends G{frag;renderResult;constructor(o,a,u){super(o,u||a),this.frag=a}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,a){const u=(a||o||{}).baseElement||HTMLElement,{observedAttributes:_=[],useShadowDOM:d=!0,shadowRootInit:m={},styleSheets:g}=a||o||{},p=H(n.styleSheets||g);class f extends u{_scheduler;static get observedAttributes(){return n.observedAttributes||_||[]}constructor(){if(super(),d===!1)this._scheduler=new e(n,this);else{const c=this.attachShadow({mode:"open",...m});p&&(c.adoptedStyleSheets=p),this._scheduler=new e(n,c,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,l,r){if(l===r)return;let h=r===""?!0:r;Reflect.set(this,B(c),h)}}function v(i){let c=i,l=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(r){l&&c===r||(l=!0,c=r,this._scheduler&&this._scheduler.update())}})}const $=new Proxy(u.prototype,{getPrototypeOf(i){return i},set(i,c,l,r){let h;return c in i?(h=Object.getOwnPropertyDescriptor(i,c),h&&h.set?(h.set.call(r,l),r._scheduler?.update(),!0):(Reflect.set(i,c,l,r),r._scheduler?.update(),!0)):(typeof c=="symbol"||c[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:l}:h=v(l),Object.defineProperty(r,c,h),h.set&&h.set.call(r,l),!0)}});return Object.setPrototypeOf(f.prototype,$),f}return s}function Y(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(R,this)}disconnectedCallback(){this.removeEventListener(R,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=O(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const b=(t,e)=>x(()=>t,e);function q(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function k(t){return x(()=>q(t),[])}function F({render:t}){const e=W(t),s=Y(e);return{component:e,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},L=t=>(...e)=>({_$litDirective$:t,values:e});class J{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const w=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),w(n,e);return!0},C=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},P=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Z(e)}};function K(t){this._$AN!==void 0?(C(this),this._$AM=t,P(this)):this._$AM=t}function X(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let a=s;a<n.length;a++)w(n[a],!1),C(n[a]);else n!=null&&(w(n,!1),C(n));else w(this,t)}const Z=t=>{t.type==Q.CHILD&&(t._$AP??=X,t._$AQ??=K)};class T extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),P(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(w(this,e),C(this))}setValue(e){if(D(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=F({render:j}),y=new WeakMap,ee=L(class extends T{render(t){return M}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),M}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=y.get(e);s===void 0&&(s=new WeakMap,y.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?y.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(t,...e)=>typeof t=="function"?t(...e):t,se=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ne=(t,e)=>{for(const[s,n]of Object.entries(t))se(e,s,te(n,e))};class oe extends T{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ne(this._attrs,s)};#t=()=>this.#e();render(e){return S}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),S}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const re=L(oe);class ie extends T{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(e,[s]){this.#t=s;const n=e.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return S}}const ce=L(ie),ae=({host:t,popoverRef:e,triggersRef:s,disabled:n,openOnHover:o,openOnFocus:a,open:u,close:_})=>{const d=k(),m=x(()=>new WeakSet,[]),g=()=>{const i=s.current?.[0];return i instanceof HTMLElement?i:void 0},p=()=>clearTimeout(d.current),f=()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const i=e.current;o&&(t.matches(":hover")||i?.matches(":hover"))||t.matches(":focus-within")||i?.matches(":focus-within")||_()},100)},v=b(i=>{if(n||i.target!==g())return;const c=g();c&&m.delete(c)||(p(),u())},[n,u,m]),$=b(()=>{let i=document.activeElement;for(;i?.shadowRoot;)i=i.shadowRoot.activeElement;if(!(i==null||i===document.body||i.offsetParent==null))return;const l=g();l&&(m.add(l),l.focus())},[]);return A(()=>{if(!(!o||n))return t.addEventListener("pointerenter",v),t.addEventListener("pointerleave",f),()=>{p(),t.removeEventListener("pointerenter",v),t.removeEventListener("pointerleave",f)}},[o,n,v]),A(()=>{if(!(!a||n))return t.addEventListener("focusin",v),t.addEventListener("focusout",f),()=>{p(),t.removeEventListener("focusin",v),t.removeEventListener("focusout",f)}},[a,n,v]),{scheduleClose:f,cancelClose:p,restoreTrigger:$}},le=t=>{if(t.newState!=="open")return;const n=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const a=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(a instanceof HTMLElement){a.focus();break}}},ue=U`
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
`,he=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:a}=t,u=k(),_=k(),[d,m]=z("opened",!1),g=b(()=>{s||(m(!0),u.current?.showPopover?.())},[s]),p=b(()=>{m(!1),u.current?.hidePopover?.()},[]),f=b(()=>{if(s)return;u.current?.matches(":popover-open")?p():g()},[s]);A(()=>{const r=u.current;r&&(d?r.showPopover?.():r.hidePopover?.())},[d]),A(()=>{t.toggleAttribute("opened",!!d)},[d]);const{scheduleClose:v,cancelClose:$,restoreTrigger:i}=ae({host:t,popoverRef:u,triggersRef:_,disabled:s,openOnHover:o,openOnFocus:a,open:g,close:p}),c=a?g:f,l=b(r=>{le(r);const h=r.newState==="open";m(h),h||i(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return E`
		<slot
			name="button"
			${ce(_)}
			${re({"aria-expanded":String(d)})}
			@click=${c}
		></slot>
		${s&&n?E`<slot></slot>`:E`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${p}
					@focusout=${v}
					@focusin=${$}
					${ee(r=>r&&(u.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(he,{styleSheets:[ue],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,b,U as c,L as e,J as i,ee as n,N as s,Q as t,k as u};
