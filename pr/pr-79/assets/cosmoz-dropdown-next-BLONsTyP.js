import{B as O,d as G,e as k,c as w,r as j,D,A as R,E as L,a as C,f as z,b as y}from"./iframe-BE9ECn9d.js";const N=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},H=e=>e?.map(t=>typeof t=="string"?N(t):t),I=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),U=I,B=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function F(e){class t extends O{frag;renderResult;constructor(o,c,h){super(o,h||c),this.frag=c}commit(o){this.renderResult=e(o,this.frag)}}function s(n,o,c){const h=(c||o||{}).baseElement||HTMLElement,{observedAttributes:b=[],useShadowDOM:a=!0,shadowRootInit:m={},styleSheets:f}=c||o||{},g=H(n.styleSheets||f);class p extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||b||[]}constructor(){if(super(),a===!1)this._scheduler=new t(n,this);else{const i=this.attachShadow({mode:"open",...m});g&&(i.adoptedStyleSheets=g),this._scheduler=new t(n,i,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,d,r){if(d===r)return;let u=r===""?!0:r;Reflect.set(this,B(i),u)}}function $(v){let i=v,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(r){d&&i===r||(d=!0,i=r,this._scheduler&&this._scheduler.update())}})}const l=new Proxy(h.prototype,{getPrototypeOf(v){return v},set(v,i,d,r){let u;return i in v?(u=Object.getOwnPropertyDescriptor(v,i),u&&u.set?(u.set.call(r,d),r._scheduler?.update(),!0):(Reflect.set(v,i,d,r),r._scheduler?.update(),!0)):(typeof i=="symbol"||i[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:d}:u=$(d),Object.defineProperty(r,i,u),u.set&&u.set.call(r,d),!0)}});return Object.setPrototypeOf(p.prototype,l),p}return s}function Y(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(k,this)}disconnectedCallback(){this.removeEventListener(k,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:e(function({render:n}){const o=G(s);return n(o)},{useShadowDOM:!1}),defaultValue:t};return s}}const _=(e,t)=>w(()=>e,t);function q(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function M(e){return w(()=>q(e),[])}function W({render:e}){const t=F(e),s=Y(t);return{component:t,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},T=e=>(...t)=>({_$litDirective$:e,values:t});class J{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const A=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),A(n,t);return!0},E=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},P=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Z(t)}};function K(e){this._$AN!==void 0?(E(this),this._$AM=e,P(this)):this._$AM=e}function X(e,t=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let c=s;c<n.length;c++)A(n[c],!1),E(n[c]);else n!=null&&(A(n,!1),E(n));else A(this,e)}const Z=e=>{e.type==Q.CHILD&&(e._$AP??=X,e._$AQ??=K)};class x extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),P(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(A(this,t),E(this))}setValue(t){if(j(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=W({render:D}),S=new WeakMap,ee=T(class extends x{render(e){return R}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),R}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(e,...t)=>typeof e=="function"?e(...t):e,se=(e,t,s)=>{s==null?e.removeAttribute(t):e.setAttribute(t,s)},ne=(e,t)=>{for(const[s,n]of Object.entries(e))se(t,s,te(n,t))};class oe extends x{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const s of t)ne(this._attrs,s)};#t=()=>this.#e();render(t){return L}update(t,[s]){this._attrs=s;const n=t.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),L}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const re=T(oe);class ie extends x{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(t,[s]){this.#t=s;const n=t.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return L}}const ce=T(ie),le=e=>{const t=w(()=>({}),[]);return w(()=>Object.assign(t,e),[t,...Object.values(e)])},ae=({host:e,popoverRef:t,triggersRef:s,disabled:n,openOnHover:o,openOnFocus:c,open:h,close:b})=>{const a=le({disabled:n,open:h,close:b,closeTimeout:void 0}),m=_(()=>{clearTimeout(a.closeTimeout)},[]),f=_(()=>{clearTimeout(a.closeTimeout),a.closeTimeout=setTimeout(()=>{const l=t.current;o&&(e.matches(":hover")||l?.matches(":hover"))||e.matches(":focus-within")||l?.matches(":focus-within")||a.close()},100)},[]),g=_(()=>{const l=s.current?.[0];return l instanceof HTMLElement?l:void 0},[]),p=_(l=>{a.disabled||l.target===g()&&(m(),a.open())},[]),$=_(()=>{let l=document.activeElement;for(;l?.shadowRoot;)l=l.shadowRoot.activeElement;if(!(l==null||l===document.body||l.offsetParent==null))return;const i=g();i&&(e.removeEventListener("focusin",p),i.focus(),e.addEventListener("focusin",p))},[]);return C(()=>{if(!(!o||n))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",f),()=>{m(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",f)}},[o,n]),C(()=>{if(!(!c||n))return e.addEventListener("focusin",p),e.addEventListener("focusout",f),()=>{m(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",f)}},[c,n]),{scheduleClose:f,cancelClose:m,restoreFocus:$}},ue=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const c=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(c instanceof HTMLElement){c.focus();break}}},he=U`
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
`,de=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:c}=e,h=M(),b=M(),[a,m]=z("opened",!1),f=_(()=>{s||(m(!0),h.current?.showPopover?.())},[s]),g=_(()=>{m(!1),h.current?.hidePopover?.()},[]),p=_(()=>{if(s)return;h.current?.matches(":popover-open")?g():f()},[s]);C(()=>{const r=h.current;r&&(a?r.showPopover?.():r.hidePopover?.())},[a]),C(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:$,cancelClose:l,restoreFocus:v}=ae({host:e,popoverRef:h,triggersRef:b,disabled:s,openOnHover:o,openOnFocus:c,open:f,close:g}),i=c?f:p,d=_(r=>{ue(r);const u=r.newState==="open";m(u),u||v(),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot
			name="button"
			${ce(b)}
			${re({"aria-expanded":String(a)})}
			@click=${i}
		></slot>
		${s&&n?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${d}
					@select=${g}
					@focusout=${$}
					@focusin=${l}
					${ee(r=>r&&(h.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(de,{styleSheets:[he],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,le as b,U as c,_ as d,T as e,J as i,ee as n,N as s,Q as t,M as u};
