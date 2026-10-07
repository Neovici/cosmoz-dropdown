import{B as O,d as G,e as T,c as A,r as j,D,A as R,E as k,a as C,f as z,b as y}from"./iframe-DAe7e6dV.js";const H=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},N=t=>t?.map(e=>typeof e=="string"?H(e):e),I=(t,...e)=>t.flatMap((s,o)=>[s,e[o]||""]).join(""),U=I,B=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function F(t){class e extends O{frag;renderResult;constructor(n,l,h){super(n,h||l),this.frag=l}commit(n){this.renderResult=t(n,this.frag)}}function s(o,n,l){const h=(l||n||{}).baseElement||HTMLElement,{observedAttributes:b=[],useShadowDOM:f=!0,shadowRootInit:g={},styleSheets:d}=l||n||{},p=N(o.styleSheets||d);class v extends h{_scheduler;static get observedAttributes(){return o.observedAttributes||b||[]}constructor(){if(super(),f===!1)this._scheduler=new e(o,this);else{const c=this.attachShadow({mode:"open",...g});p&&(c.adoptedStyleSheets=p),this._scheduler=new e(o,c,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,a,r){if(a===r)return;let u=r===""?!0:r;Reflect.set(this,B(c),u)}}function m(i){let c=i,a=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(r){a&&c===r||(a=!0,c=r,this._scheduler&&this._scheduler.update())}})}const $=new Proxy(h.prototype,{getPrototypeOf(i){return i},set(i,c,a,r){let u;return c in i?(u=Object.getOwnPropertyDescriptor(i,c),u&&u.set?(u.set.call(r,a),r._scheduler?.update(),!0):(Reflect.set(i,c,a,r),r._scheduler?.update(),!0)):(typeof c=="symbol"||c[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:a}:u=m(a),Object.defineProperty(r,c,u),u.set&&u.set.call(r,a),!0)}});return Object.setPrototypeOf(v.prototype,$),v}return s}function W(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(T,this)}disconnectedCallback(){this.removeEventListener(T,this)}handleEvent(o){const{detail:n}=o;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let n of this.listeners)n(o)}get value(){return this._value}},Consumer:t(function({render:o}){const n=G(s);return o(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const _=(t,e)=>A(()=>t,e);function Y(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function M(t){return A(()=>Y(t),[])}function q({render:t}){const e=F(t),s=W(e);return{component:e,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},x=t=>(...e)=>({_$litDirective$:t,values:e});class J{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,o){this._$Ct=e,this._$AM=s,this._$Ci=o}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const w=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(e,!1),w(o,e);return!0},E=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},P=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Z(e)}};function K(t){this._$AN!==void 0?(E(this),this._$AM=t,P(this)):this._$AM=t}function X(t,e=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let l=s;l<o.length;l++)w(o[l],!1),E(o[l]);else o!=null&&(w(o,!1),E(o));else w(this,t)}const Z=t=>{t.type==Q.CHILD&&(t._$AP??=X,t._$AQ??=K)};class L extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,o){super._$AT(e,s,o),P(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(w(this,e),E(this))}setValue(e){if(j(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=q({render:D}),S=new WeakMap,ee=x(class extends L{render(t){return R}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),R}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=S.get(e);s===void 0&&(s=new WeakMap,S.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(t,...e)=>typeof t=="function"?t(...e):t,se=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},oe=(t,e)=>{for(const[s,o]of Object.entries(t))se(e,s,te(o,e))};class ne extends L{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)oe(this._attrs,s)};#t=()=>this.#e();render(e){return k}update(e,[s]){this._attrs=s;const o=e.element;return this._slot!==o&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=o,o.addEventListener("slotchange",this.#t)),this.#e(),k}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const re=x(ne);class ie extends L{#e;#t;#o=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#o();update(e,[s]){this.#t=s;const o=e.element;this.#e!==o&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=o,o.addEventListener("slotchange",this.#s)),this.#o()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return k}}const ce=x(ie),le=t=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,t),[e,...Object.values(t)])},ae=({host:t,popoverRef:e,triggersRef:s,disabled:o,openOnHover:n,openOnFocus:l,open:h,close:b})=>{const f=A(()=>new WeakSet,[]),g=_(()=>{const i=s.current?.[0];return i instanceof HTMLElement?i:void 0},[]),d=le({disabled:o,open:h,close:b,openOnHover:n,closeTimeout:void 0}),p=_(()=>{clearTimeout(d.closeTimeout)},[]),v=_(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{const i=e.current;d.openOnHover&&(t.matches(":hover")||i?.matches(":hover"))||t.matches(":focus-within")||i?.matches(":focus-within")||d.close()},100)},[]),m=_(i=>{if(d.disabled||i.target!==g())return;const c=g();c&&f.delete(c)||(p(),d.open())},[]),$=_(()=>{let i=document.activeElement;for(;i?.shadowRoot;)i=i.shadowRoot.activeElement;if(!(i==null||i===document.body||i.offsetParent==null))return;const a=g();a&&(f.add(a),a.focus())},[]);return C(()=>{if(!(!n||o))return t.addEventListener("pointerenter",m),t.addEventListener("pointerleave",v),()=>{p(),t.removeEventListener("pointerenter",m),t.removeEventListener("pointerleave",v)}},[n,o,m]),C(()=>{if(!(!l||o))return t.addEventListener("focusin",m),t.addEventListener("focusout",v),()=>{p(),t.removeEventListener("focusin",m),t.removeEventListener("focusout",v)}},[l,o,m]),{scheduleClose:v,cancelClose:p,restoreFocus:$}},ue=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of o){const l=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(l instanceof HTMLElement){l.focus();break}}},he=U`
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
`,de=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:o,openOnHover:n,openOnFocus:l}=t,h=M(),b=M(),[f,g]=z("opened",!1),d=_(()=>{s||(g(!0),h.current?.showPopover?.())},[s]),p=_(()=>{g(!1),h.current?.hidePopover?.()},[]),v=_(()=>{if(s)return;h.current?.matches(":popover-open")?p():d()},[s]);C(()=>{const r=h.current;r&&(f?r.showPopover?.():r.hidePopover?.())},[f]),C(()=>{t.toggleAttribute("opened",!!f)},[f]);const{scheduleClose:m,cancelClose:$,restoreFocus:i}=ae({host:t,popoverRef:h,triggersRef:b,disabled:s,openOnHover:n,openOnFocus:l,open:d,close:p}),c=l?d:v,a=_(r=>{ue(r);const u=r.newState==="open";g(u),u||i(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot
			name="button"
			${ce(b)}
			${re({"aria-expanded":String(f)})}
			@click=${c}
		></slot>
		${s&&o?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${e}"
					@toggle=${a}
					@select=${p}
					@focusout=${m}
					@focusin=${$}
					${ee(r=>r&&(h.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(de,{styleSheets:[he],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,le as b,U as c,_ as d,x as e,J as i,ee as n,H as s,Q as t,M as u};
