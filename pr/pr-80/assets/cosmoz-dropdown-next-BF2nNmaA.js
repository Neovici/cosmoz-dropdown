import{B as H,d as z,e as G,c as w,r as I,D as N,A as R,E as k,f as U,a as C,b as x}from"./iframe-BqiO37ck.js";const B=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},F=t=>t?.map(e=>typeof e=="string"?B(e):e),Y=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),q=Y,W=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Q(t){class e extends H{frag;renderResult;constructor(r,c,h){super(r,h||c),this.frag=c}commit(r){this.renderResult=t(r,this.frag)}}function s(n,r,c){const h=(c||r||{}).baseElement||HTMLElement,{observedAttributes:_=[],useShadowDOM:d=!0,shadowRootInit:$={},styleSheets:p}=c||r||{},v=F(n.styleSheets||p);class g extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||_||[]}constructor(){if(super(),d===!1)this._scheduler=new e(n,this);else{const i=this.attachShadow({mode:"open",...$});v&&(i.adoptedStyleSheets=v),this._scheduler=new e(n,i,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,u,l){if(u===l)return;let o=l===""?!0:l;Reflect.set(this,W(i),o)}}function m(a){let i=a,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(l){u&&i===l||(u=!0,i=l,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(h.prototype,{getPrototypeOf(a){return a},set(a,i,u,l){let o;return i in a?(o=Object.getOwnPropertyDescriptor(a,i),o&&o.set?(o.set.call(l,u),l._scheduler?.update(),!0):(Reflect.set(a,i,u,l),l._scheduler?.update(),!0)):(typeof i=="symbol"||i[0]==="_"?o={enumerable:!0,configurable:!0,writable:!0,value:u}:o=m(u),Object.defineProperty(l,i,o),o.set&&o.set.call(l,u),!0)}});return Object.setPrototypeOf(g.prototype,b),g}return s}function J(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(G,this)}disconnectedCallback(){this.removeEventListener(G,this)}handleEvent(n){const{detail:r}=n;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:t(function({render:n}){const r=z(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const f=(t,e)=>w(()=>t,e);function K(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function j(t){return w(()=>K(t),[])}function X({render:t}){const e=Q(t),s=J(e);return{component:e,createContext:s}}const Z={ATTRIBUTE:1,CHILD:2},M=t=>(...e)=>({_$litDirective$:t,values:e});class V{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const A=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),A(n,e);return!0},E=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},D=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),se(e)}};function ee(t){this._$AN!==void 0?(E(this),this._$AM=t,D(this)):this._$AM=t}function te(t,e=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let c=s;c<n.length;c++)A(n[c],!1),E(n[c]);else n!=null&&(A(n,!1),E(n));else A(this,t)}const se=t=>{t.type==Z.CHILD&&(t._$AP??=te,t._$AQ??=ee)};class P extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),D(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(A(this,e),E(this))}setValue(e){if(I(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ne}=X({render:N}),L=new WeakMap,oe=M(class extends P{render(t){return R}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),R}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=L.get(e);s===void 0&&(s=new WeakMap,L.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?L.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class re extends P{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(e,[s]){this._ref=s;const n=e.element;this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(e){return k}}const ie=M(re),ce=(t,...e)=>typeof t=="function"?t(...e):t,le=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ae=(t,e)=>{for(const[s,n]of Object.entries(t))le(e,s,ce(n,e))};class ue extends P{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ae(this._attrs,s)};#e=()=>this.#t();render(e){return k}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t(),k}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const he=M(ue),de=t=>{const e=w(()=>({}),[]);return w(()=>Object.assign(e,t),[e,...Object.values(t)])},fe=({host:t,popoverRef:e,disabled:s,openOnHover:n,openOnFocus:r})=>{const[c,h]=U("opened",!1),_=j(),d=de({disabled:s,openOnHover:n}),$=f(()=>{const o=_.current?.[0];return o instanceof HTMLElement?o:void 0},[]),p=f(()=>{d.disabled||(h(!0),e.current?.showPopover?.())},[]),v=f(()=>{h(!1),e.current?.hidePopover?.()},[]),g=f(()=>{e.current?.matches(":popover-open")?v():p()},[]),m=f(()=>{clearTimeout(d.closeTimeout)},[]),b=f(o=>{d.disabled||o.target===$()&&(m(),p())},[]),a=f(()=>{d.disabled||(m(),p())},[]),i=f(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{const o=e.current;d.openOnHover&&(t.matches(":hover")||o?.matches(":hover"))||t.matches(":focus-within")||o?.matches(":focus-within")||v()},100)},[]),u=f(o=>{const S=o.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const T of S){const O=T.matches("[autofocus]")?T:T.querySelector("[autofocus]");if(O instanceof HTMLElement){O.focus();break}}},[]),l=f(o=>{const y=o.newState==="open";if(h(y),y){const S=o.target;u(S)}t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:o.newState,oldState:o.oldState,composed:!0}))},[]);return C(()=>{const o=e.current;o&&(c?o.showPopover?.():o.hidePopover?.())},[c]),C(()=>{t.toggleAttribute("opened",!!c)},[c]),C(()=>{if(!(!r||s))return t.addEventListener("focusin",b),t.addEventListener("focusout",i),()=>{t.removeEventListener("focusin",b),t.removeEventListener("focusout",i)}},[r,s]),C(()=>{if(!(!n||s))return t.addEventListener("pointerenter",a),t.addEventListener("pointerleave",i),()=>{t.removeEventListener("pointerenter",a),t.removeEventListener("pointerleave",i)}},[n,s]),{triggers:_,opened:c,open:p,close:v,toggle:g,onToggle:l,scheduleClose:i,cancelClose:m}},pe=q`
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
`,ve=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:r,openOnFocus:c}=t,h=j(),{triggers:_,opened:d,scheduleClose:$,cancelClose:p,open:v,close:g,toggle:m,onToggle:b}=fe({host:t,popoverRef:h,disabled:s,openOnHover:r,openOnFocus:c}),a=c?v:m;return x`
		<slot
			name="button"
			${ie(_)}
			${he({"aria-expanded":n?null:String(d),disabled:s&&!n?"":null})}
			@click=${a}
		></slot>
		${s&&n?x`<slot></slot>`:x`<div
					popover
					style="position-area: ${e}"
					@toggle=${b}
					@select=${g}
					@focusout=${$}
					@focusin=${p}
					${oe(i=>i&&(h.current=i))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",ne(ve,{styleSheets:[pe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{ne as a,de as b,q as c,f as d,M as e,V as i,oe as n,B as s,Z as t,j as u};
