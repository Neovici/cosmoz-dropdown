import{B as N,d as I,e as D,c as w,r as U,D as B,A as G,E as M,f as F,a as A,b as T}from"./iframe-CQ6v0-Qm.js";const Y=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},q=e=>e?.map(t=>typeof t=="string"?Y(t):t),W=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),Q=W,J=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function K(e){class t extends N{frag;renderResult;constructor(o,l,h){super(o,h||l),this.frag=l}commit(o){this.renderResult=e(o,this.frag)}}function s(n,o,l){const h=(l||o||{}).baseElement||HTMLElement,{observedAttributes:v=[],useShadowDOM:_=!0,shadowRootInit:$={},styleSheets:f}=l||o||{},C=q(n.styleSheets||f);class m extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||v||[]}constructor(){if(super(),_===!1)this._scheduler=new t(n,this);else{const c=this.attachShadow({mode:"open",...$});C&&(c.adoptedStyleSheets=C),this._scheduler=new t(n,c,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,a,r){if(a===r)return;let u=r===""?!0:r;Reflect.set(this,J(c),u)}}function g(d){let c=d,a=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(r){a&&c===r||(a=!0,c=r,this._scheduler&&this._scheduler.update())}})}const y=new Proxy(h.prototype,{getPrototypeOf(d){return d},set(d,c,a,r){let u;return c in d?(u=Object.getOwnPropertyDescriptor(d,c),u&&u.set?(u.set.call(r,a),r._scheduler?.update(),!0):(Reflect.set(d,c,a,r),r._scheduler?.update(),!0)):(typeof c=="symbol"||c[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:a}:u=g(a),Object.defineProperty(r,c,u),u.set&&u.set.call(r,a),!0)}});return Object.setPrototypeOf(m.prototype,y),m}return s}function X(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(D,this)}disconnectedCallback(){this.removeEventListener(D,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:e(function({render:n}){const o=I(s);return n(o)},{useShadowDOM:!1}),defaultValue:t};return s}}const p=(e,t)=>w(()=>e,t);function Z(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function j(e){return w(()=>Z(e),[])}function V({render:e}){const t=K(e),s=X(t);return{component:t,createContext:s}}const ee={ATTRIBUTE:1,CHILD:2},O=e=>(...t)=>({_$litDirective$:e,values:t});class te{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const b=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),b(n,t);return!0},E=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},z=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),oe(t)}};function se(e){this._$AN!==void 0?(E(this),this._$AM=e,z(this)):this._$AM=e}function ne(e,t=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let l=s;l<n.length;l++)b(n[l],!1),E(n[l]);else n!=null&&(b(n,!1),E(n));else b(this,e)}const oe=e=>{e.type==ee.CHILD&&(e._$AP??=ne,e._$AQ??=se)};class R extends te{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),z(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(b(this,t),E(this))}setValue(t){if(U(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:re}=V({render:B}),L=new WeakMap,ie=O(class extends R{render(e){return G}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),G}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=L.get(t);s===void 0&&(s=new WeakMap,L.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?L.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class ce extends R{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(t,[s]){this._ref=s;const n=t.element;this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(t){return M}}const le=O(ce),ae=(e,...t)=>typeof e=="function"?e(...t):e,ue=(e,t,s)=>{s==null?e.removeAttribute(t):e.setAttribute(t,s)},de=(e,t)=>{for(const[s,n]of Object.entries(e))ue(t,s,ae(n,t))};class he extends R{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const s of t)de(this._attrs,s)};#e=()=>this.#t();render(t){return M}update(t,[s]){this._attrs=s;const n=t.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t(),M}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const pe=O(he),fe=e=>{const t=w(()=>({}),[]);return w(()=>Object.assign(t,e),[t,...Object.values(e)])},ve=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:l}=e,h=j(),[v,_]=F("opened",!1),$=j(),f=fe({disabled:s,openOnHover:o}),C=p(()=>{const i=$.current?.[0];return i instanceof HTMLElement?i:void 0},[]),m=p(()=>{f.disabled||(_(!0),h.current?.showPopover?.())},[]),g=p(()=>{_(!1),h.current?.hidePopover?.()},[]),y=p(()=>{h.current?.matches(":popover-open")?g():m()},[]),d=p(()=>{clearTimeout(f.closeTimeout)},[]),c=p(i=>{f.disabled||i.target===C()&&(d(),m())},[]),a=p(()=>{f.disabled||(d(),m())},[]),r=p(()=>{clearTimeout(f.closeTimeout),f.closeTimeout=setTimeout(()=>{const i=h.current;f.openOnHover&&(e.matches(":hover")||i?.matches(":hover"))||e.matches(":focus-within")||i?.matches(":focus-within")||g()},100)},[]),u=p(i=>{const x=i.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const k of x){const P=k.matches("[autofocus]")?k:k.querySelector("[autofocus]");if(P instanceof HTMLElement){P.focus();break}}},[]),H=p(i=>{const S=i.newState==="open";if(_(S),S){const x=i.target;u(x)}e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))},[]);return A(()=>{const i=h.current;i&&(v?i.showPopover?.():i.hidePopover?.())},[v]),A(()=>{e.toggleAttribute("opened",!!v)},[v]),A(()=>{if(!(!l||s))return e.addEventListener("focusin",c),e.addEventListener("focusout",r),()=>{e.removeEventListener("focusin",c),e.removeEventListener("focusout",r)}},[l,s]),A(()=>{if(!(!o||s))return e.addEventListener("pointerenter",a),e.addEventListener("pointerleave",r),()=>{e.removeEventListener("pointerenter",a),e.removeEventListener("pointerleave",r)}},[o,s]),{placement:t,disabled:s,passthrough:n,opened:v,triggers:$,popoverRef:h,handleClick:l?m:y,onToggle:H,close:g,scheduleClose:r,cancelClose:d}},me=Q`
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
`,_e=e=>{const{placement:t,disabled:s,passthrough:n,opened:o}=e;return T`
		<slot
			name="button"
			${le(e.triggers)}
			${pe({"aria-expanded":n?null:String(o),disabled:s&&!n?"":null})}
			@click=${e.handleClick}
		></slot>
		${s&&n?T`<slot></slot>`:T`<div
					popover
					style="position-area: ${t}"
					@toggle=${e.onToggle}
					@select=${e.close}
					@focusout=${e.scheduleClose}
					@focusin=${e.cancelClose}
					${ie(l=>l&&(e.popoverRef.current=l))}
				>
					<slot></slot>
				</div>`}
	`},ge=e=>_e(ve(e));customElements.define("cosmoz-dropdown-next",re(ge,{styleSheets:[me],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{re as a,fe as b,Q as c,p as d,O as e,te as i,ie as n,Y as s,ee as t,j as u};
