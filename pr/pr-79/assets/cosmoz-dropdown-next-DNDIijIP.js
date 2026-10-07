import{B as z,d as I,e as O,c as E,r as N,D as H,A as j,E as k,f as U,a as y,b as T}from"./iframe-c2NlyF3Y.js";const B=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},F=t=>t?.map(e=>typeof e=="string"?B(e):e),Y=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),q=Y,W=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Q(t){class e extends z{frag;renderResult;constructor(i,l,u){super(i,u||l),this.frag=l}commit(i){this.renderResult=t(i,this.frag)}}function s(n,i,l){const u=(l||i||{}).baseElement||HTMLElement,{observedAttributes:b=[],useShadowDOM:d=!0,shadowRootInit:m={},styleSheets:v}=l||i||{},$=F(n.styleSheets||v);class g extends u{_scheduler;static get observedAttributes(){return n.observedAttributes||b||[]}constructor(){if(super(),d===!1)this._scheduler=new e(n,this);else{const r=this.attachShadow({mode:"open",...m});$&&(r.adoptedStyleSheets=$),this._scheduler=new e(n,r,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,f,a){if(f===a)return;let o=a===""?!0:a;Reflect.set(this,W(r),o)}}function _(c){let r=c,f=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(a){f&&r===a||(f=!0,r=a,this._scheduler&&this._scheduler.update())}})}const h=new Proxy(u.prototype,{getPrototypeOf(c){return c},set(c,r,f,a){let o;return r in c?(o=Object.getOwnPropertyDescriptor(c,r),o&&o.set?(o.set.call(a,f),a._scheduler?.update(),!0):(Reflect.set(c,r,f,a),a._scheduler?.update(),!0)):(typeof r=="symbol"||r[0]==="_"?o={enumerable:!0,configurable:!0,writable:!0,value:f}:o=_(f),Object.defineProperty(a,r,o),o.set&&o.set.call(a,f),!0)}});return Object.setPrototypeOf(g.prototype,h),g}return s}function J(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(O,this)}disconnectedCallback(){this.removeEventListener(O,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:t(function({render:n}){const i=I(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const p=(t,e)=>E(()=>t,e);function K(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function D(t){return E(()=>K(t),[])}function X({render:t}){const e=Q(t),s=J(e);return{component:e,createContext:s}}const Z={ATTRIBUTE:1,CHILD:2},M=t=>(...e)=>({_$litDirective$:t,values:e});class V{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const C=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),C(n,e);return!0},S=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},R=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),se(e)}};function ee(t){this._$AN!==void 0?(S(this),this._$AM=t,R(this)):this._$AM=t}function te(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let l=s;l<n.length;l++)C(n[l],!1),S(n[l]);else n!=null&&(C(n,!1),S(n));else C(this,t)}const se=t=>{t.type==Z.CHILD&&(t._$AP??=te,t._$AQ??=ee)};class P extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),R(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(C(this,e),S(this))}setValue(e){if(N(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ne}=X({render:H}),x=new WeakMap,oe=M(class extends P{render(t){return j}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),j}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=x.get(e);s===void 0&&(s=new WeakMap,x.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?x.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),re=(t,...e)=>typeof t=="function"?t(...e):t,ie=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ce=(t,e)=>{for(const[s,n]of Object.entries(t))ie(e,s,re(n,e))};class le extends P{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ce(this._attrs,s)};#t=()=>this.#e();render(e){return k}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),k}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const ae=M(le);class ue extends P{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(e,[s]){this.#t=s;const n=e.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return k}}const he=M(ue),de=t=>{const e=E(()=>({}),[]);return E(()=>Object.assign(e,t),[e,...Object.values(t)])},fe=({host:t,popoverRef:e,disabled:s,openOnHover:n,openOnFocus:i})=>{const[l,u]=U("opened",!1),b=D(),d=p(()=>{const o=b.current?.[0];return o instanceof HTMLElement?o:void 0},[]),m=p(()=>{s||(u(!0),e.current?.showPopover?.())},[s,u,e]),v=p(()=>{u(!1),e.current?.hidePopover?.()},[u,e]),$=p(()=>{e.current?.matches(":popover-open")?v():m()},[v,m,e]),g=de({closeTimeout:void 0}),_=p(()=>{clearTimeout(g.closeTimeout)},[]),h=p(o=>{s||o.target===d()&&(_(),m())},[s,d,_,m]),c=p(()=>{clearTimeout(g.closeTimeout),g.closeTimeout=setTimeout(()=>{const o=e.current;n&&(t.matches(":hover")||o?.matches(":hover"))||t.matches(":focus-within")||o?.matches(":focus-within")||v()},100)},[n,t,e,v]),r=p(()=>{let o=document.activeElement;for(;o?.shadowRoot;)o=o.shadowRoot.activeElement;if(!(o==null||o===document.body||o.offsetParent==null))return;const A=d();A&&(t.removeEventListener("focusin",h),A.focus(),t.addEventListener("focusin",h))},[d,h,t]),f=p(o=>{const A=o.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const L of A){const G=L.matches("[autofocus]")?L:L.querySelector("[autofocus]");if(G instanceof HTMLElement){G.focus();break}}},[]),a=p(o=>{const w=o.newState==="open";if(u(w),w){const A=o.target;f(A)}else r();t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:o.newState,oldState:o.oldState,composed:!0}))},[t,r]);return y(()=>{if(!(!i||s))return t.addEventListener("focusin",h),t.addEventListener("focusout",c),()=>{t.removeEventListener("focusin",h),t.removeEventListener("focusout",c)}},[i,s,h,c]),y(()=>{if(!(!n||s))return t.addEventListener("pointerenter",h),t.addEventListener("pointerleave",c),()=>{t.removeEventListener("pointerenter",h),t.removeEventListener("pointerleave",c)}},[n,s,h,c]),{triggers:b,opened:l,open:m,close:v,toggle:$,onToggle:a,scheduleClose:c,cancelClose:_,restoreFocus:r}},pe=q`
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
`,me=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:i,openOnFocus:l}=t,u=D(),{triggers:b,opened:d,scheduleClose:m,cancelClose:v,open:$,close:g,toggle:_,onToggle:h}=fe({host:t,popoverRef:u,disabled:s,openOnHover:i,openOnFocus:l});y(()=>{const r=u.current;r&&(d?r.showPopover?.():r.hidePopover?.())},[d]),y(()=>{t.toggleAttribute("opened",!!d)},[d]);const c=l?$:_;return T`
		<slot
			name="button"
			${he(b)}
			${ae({"aria-expanded":String(d)})}
			@click=${c}
		></slot>
		${s&&n?T`<slot></slot>`:T`<div
					popover
					style="position-area: ${e}"
					@toggle=${h}
					@select=${g}
					@focusout=${m}
					@focusin=${v}
					${oe(r=>r&&(u.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",ne(me,{styleSheets:[pe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{ne as a,de as b,q as c,p as d,M as e,V as i,oe as n,B as s,Z as t,D as u};
