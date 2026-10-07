import{B as G,d as O,e as E,c as L,r as D,D as z,A as k,E as x,a as $,f as N,b as y}from"./iframe-f7W3tJo-.js";const j=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},I=e=>e?.map(t=>typeof t=="string"?j(t):t),H=(e,...t)=>e.flatMap((s,o)=>[s,t[o]||""]).join(""),U=H,B=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Y(e){class t extends G{frag;renderResult;constructor(n,i,c){super(n,c||i),this.frag=i}commit(n){this.renderResult=e(n,this.frag)}}function s(o,n,i){const c=(i||n||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:d=!0,shadowRootInit:u={},styleSheets:p}=i||n||{},m=I(o.styleSheets||p);class b extends c{_scheduler;static get observedAttributes(){return o.observedAttributes||l||[]}constructor(){if(super(),d===!1)this._scheduler=new t(o,this);else{const r=this.attachShadow({mode:"open",...u});m&&(r.adoptedStyleSheets=m),this._scheduler=new t(o,r,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,v,a){if(v===a)return;let h=a===""?!0:a;Reflect.set(this,B(r),h)}}function C(f){let r=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(a){v&&r===a||(v=!0,r=a,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(c.prototype,{getPrototypeOf(f){return f},set(f,r,v,a){let h;return r in f?(h=Object.getOwnPropertyDescriptor(f,r),h&&h.set?(h.set.call(a,v),a._scheduler?.update(),!0):(Reflect.set(f,r,v,a),a._scheduler?.update(),!0)):(typeof r=="symbol"||r[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:v}:h=C(v),Object.defineProperty(a,r,h),h.set&&h.set.call(a,v),!0)}});return Object.setPrototypeOf(b.prototype,w),b}return s}function q(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(E,this)}disconnectedCallback(){this.removeEventListener(E,this)}handleEvent(o){const{detail:n}=o;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let n of this.listeners)n(o)}get value(){return this._value}},Consumer:e(function({render:o}){const n=O(s);return o(n)},{useShadowDOM:!1}),defaultValue:t};return s}}const g=(e,t)=>L(()=>e,t);function F(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function T(e){return L(()=>F(e),[])}function W({render:e}){const t=Y(e),s=q(t);return{component:t,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},M=e=>(...t)=>({_$litDirective$:e,values:t});class J{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const _=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),_(o,t);return!0},A=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},P=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Z(t)}};function K(e){this._$AN!==void 0?(A(this),this._$AM=e,P(this)):this._$AM=e}function X(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)_(o[i],!1),A(o[i]);else o!=null&&(_(o,!1),A(o));else _(this,e)}const Z=e=>{e.type==Q.CHILD&&(e._$AP??=X,e._$AQ??=K)};class R extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),P(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(_(this,t),A(this))}setValue(t){if(D(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V}=W({render:z}),S=new WeakMap,ee=M(class extends R{render(e){return k}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),k}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),te=(e,...t)=>typeof e=="function"?e(...t):e,se=(e,t,s)=>{s==null?e.removeAttribute(t):e.setAttribute(t,s)},oe=(e,t)=>{for(const[s,o]of Object.entries(e))se(t,s,te(o,t))};class ne extends R{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const s of t)oe(this._attrs,s)};#e=()=>this.#t();render(t){return x}update(t,[s]){this._attrs=s;const o=t.element;return this._slot!==o&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=o,o.addEventListener("slotchange",this.#e)),this.#t(),x}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const re=M(ne),ie=({host:e,popoverRef:t,disabled:s,openOnHover:o,openOnFocus:n,open:i,close:c})=>{const l=T(),d=()=>clearTimeout(l.current),u=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const m=t.current;o&&(e.matches(":hover")||m?.matches(":hover"))||e.matches(":focus-within")||m?.matches(":focus-within")||c()},100)},p=()=>{s||(d(),i())};return $(()=>{if(!(!o||s))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",u),()=>{d(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",u)}},[o,s,e]),$(()=>{if(!(!n||s))return e.addEventListener("focusin",p),e.addEventListener("focusout",u),()=>{d(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",u)}},[n,s,e]),{scheduleClose:u,cancelClose:d}},ce=e=>{if(e.newState!=="open")return;const o=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of o){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},ae=U`
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
`,le=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:o,openOnHover:n,openOnFocus:i}=e,c=T(),[l,d]=N("opened",!1),u=g(()=>{s||(d(!0),c.current?.showPopover?.())},[s]),p=g(()=>{d(!1),c.current?.hidePopover?.()},[]),m=g(()=>{if(s)return;c.current?.matches(":popover-open")?p():u()},[s]);$(()=>{const r=c.current;r&&(l?r.showPopover?.():r.hidePopover?.())},[l]),$(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:b,cancelClose:C}=ie({host:e,popoverRef:c,disabled:s,openOnHover:n,openOnFocus:i,open:u,close:p}),w=i?u:m,f=g(r=>{ce(r),d(r.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot
			name="button"
			${re({"aria-expanded":String(l)})}
			@click=${w}
		></slot>
		${s&&o?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${f}
					@select=${p}
					@focusout=${b}
					@focusin=${C}
					${ee(r=>r&&(c.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",V(le,{styleSheets:[ae],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{V as a,g as b,U as c,M as e,J as i,ee as n,j as s,Q as t,T as u};
