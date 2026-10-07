import{B as I,d as N,e as j,c as S,r as H,D as U,A as D,E as M,f as B,a as y,b as x}from"./iframe-s-Ox-j00.js";const F=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Y=t=>t?.map(e=>typeof e=="string"?F(e):e),q=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),W=q,Q=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function J(t){class e extends I{frag;renderResult;constructor(i,c,h){super(i,h||c),this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,i,c){const h=(c||i||{}).baseElement||HTMLElement,{observedAttributes:$=[],useShadowDOM:_=!0,shadowRootInit:g={},styleSheets:v}=c||i||{},A=Y(n.styleSheets||v);class f extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||$||[]}constructor(){if(super(),_===!1)this._scheduler=new e(n,this);else{const o=this.attachShadow({mode:"open",...g});A&&(o.adoptedStyleSheets=A),this._scheduler=new e(n,o,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(o,u,l){if(u===l)return;let d=l===""?!0:l;Reflect.set(this,Q(o),d)}}function b(a){let o=a,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return o},set(l){u&&o===l||(u=!0,o=l,this._scheduler&&this._scheduler.update())}})}const m=new Proxy(h.prototype,{getPrototypeOf(a){return a},set(a,o,u,l){let d;return o in a?(d=Object.getOwnPropertyDescriptor(a,o),d&&d.set?(d.set.call(l,u),l._scheduler?.update(),!0):(Reflect.set(a,o,u,l),l._scheduler?.update(),!0)):(typeof o=="symbol"||o[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:u}:d=b(u),Object.defineProperty(l,o,d),d.set&&d.set.call(l,u),!0)}});return Object.setPrototypeOf(f.prototype,m),f}return s}function K(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(j,this)}disconnectedCallback(){this.removeEventListener(j,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:t(function({render:n}){const i=N(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const p=(t,e)=>S(()=>t,e);function X(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function R(t){return S(()=>X(t),[])}function Z({render:t}){const e=J(t),s=K(e);return{component:e,createContext:s}}const V={ATTRIBUTE:1,CHILD:2},P=t=>(...e)=>({_$litDirective$:t,values:e});class ee{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const w=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),w(n,e);return!0},T=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},z=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),ne(e)}};function te(t){this._$AN!==void 0?(T(this),this._$AM=t,z(this)):this._$AM=t}function se(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let c=s;c<n.length;c++)w(n[c],!1),T(n[c]);else n!=null&&(w(n,!1),T(n));else w(this,t)}const ne=t=>{t.type==V.CHILD&&(t._$AP??=se,t._$AQ??=te)};class G extends ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),z(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(w(this,e),T(this))}setValue(e){if(H(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:oe}=Z({render:U}),k=new WeakMap,re=P(class extends G{render(t){return D}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),D}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=k.get(e);s===void 0&&(s=new WeakMap,k.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?k.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ie=(t,...e)=>typeof t=="function"?t(...e):t,ce=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},le=(t,e)=>{for(const[s,n]of Object.entries(t))ce(e,s,ie(n,e))};class ae extends G{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)le(this._attrs,s)};#t=()=>this.#e();render(e){return M}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),M}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const ue=P(ae);class he extends G{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(e,[s]){this.#t=s;const n=e.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return M}}const de=P(he),fe=t=>{const e=S(()=>({}),[]);return S(()=>Object.assign(e,t),[e,...Object.values(t)])},pe=({host:t,popoverRef:e,disabled:s,openOnHover:n,openOnFocus:i})=>{const[c,h]=B("opened",!1),$=R(),_=p(()=>{const r=$.current?.[0];return r instanceof HTMLElement?r:void 0},[]),g=p(()=>{s||(h(!0),e.current?.showPopover?.())},[s,h,e]),v=p(()=>{h(!1),e.current?.hidePopover?.()},[h,e]),A=p(()=>{e.current?.matches(":popover-open")?v():g()},[v,g,e]),f=fe({disabled:s,open:g,closeTimeout:void 0}),b=p(()=>{clearTimeout(f.closeTimeout)},[]),m=p(r=>{f.disabled||r.target===_()&&(b(),f.open())},[]),a=p(()=>{f.disabled||(b(),f.open())},[]),o=p(()=>{clearTimeout(f.closeTimeout),f.closeTimeout=setTimeout(()=>{const r=e.current;n&&(t.matches(":hover")||r?.matches(":hover"))||t.matches(":focus-within")||r?.matches(":focus-within")||v()},100)},[n,t,e,v]),u=p(()=>{let r=document.activeElement;for(;r?.shadowRoot;)r=r.shadowRoot.activeElement;if(!(r==null||r===document.body||r.offsetParent==null))return;const C=_();C&&(t.removeEventListener("focusin",m),C.focus(),t.addEventListener("focusin",m))},[_,m,t]),l=p(r=>{const C=r.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const L of C){const O=L.matches("[autofocus]")?L:L.querySelector("[autofocus]");if(O instanceof HTMLElement){O.focus();break}}},[]),d=p(r=>{const E=r.newState==="open";if(h(E),E){const C=r.target;l(C)}else u();t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[t,u]);return y(()=>{const r=e.current;r&&(c?r.showPopover?.():r.hidePopover?.())},[c]),y(()=>{t.toggleAttribute("opened",!!c)},[c]),y(()=>{if(!(!i||s))return t.addEventListener("focusin",m),t.addEventListener("focusout",o),()=>{t.removeEventListener("focusin",m),t.removeEventListener("focusout",o)}},[i,s,m,o]),y(()=>{if(!(!n||s))return t.addEventListener("pointerenter",a),t.addEventListener("pointerleave",o),()=>{t.removeEventListener("pointerenter",a),t.removeEventListener("pointerleave",o)}},[n,s,a,o]),{triggers:$,opened:c,open:g,close:v,toggle:A,onToggle:d,scheduleClose:o,cancelClose:b,restoreFocus:u}},me=W`
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
`,ve=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:i,openOnFocus:c}=t,h=R(),{triggers:$,opened:_,scheduleClose:g,cancelClose:v,open:A,close:f,toggle:b,onToggle:m}=pe({host:t,popoverRef:h,disabled:s,openOnHover:i,openOnFocus:c}),a=c?A:b;return x`
		<slot
			name="button"
			${de($)}
			${ue({"aria-expanded":String(_),disabled:s&&!n?"":null})}
			@click=${a}
		></slot>
		${s&&n?x`<slot></slot>`:x`<div
					popover
					style="position-area: ${e}"
					@toggle=${m}
					@select=${f}
					@focusout=${g}
					@focusin=${v}
					${re(o=>o&&(h.current=o))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",oe(ve,{styleSheets:[me],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{oe as a,fe as b,W as c,p as d,P as e,ee as i,re as n,F as s,V as t,R as u};
