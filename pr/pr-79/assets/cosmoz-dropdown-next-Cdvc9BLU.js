import{B as z,d as I,e as G,c as w,r as N,D as O,A as R,E as x,a as E,f as H,b as L}from"./iframe-CwS1KaD_.js";const U=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},B=t=>t?.map(e=>typeof e=="string"?U(e):e),F=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Y=F,q=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function W(t){class e extends z{frag;renderResult;constructor(r,l,f){super(r,f||l),this.frag=l}commit(r){this.renderResult=t(r,this.frag)}}function s(n,r,l){const f=(l||r||{}).baseElement||HTMLElement,{observedAttributes:v=[],useShadowDOM:h=!0,shadowRootInit:g={},styleSheets:A}=l||r||{},_=B(n.styleSheets||A);class b extends f{_scheduler;static get observedAttributes(){return n.observedAttributes||v||[]}constructor(){if(super(),h===!1)this._scheduler=new e(n,this);else{const i=this.attachShadow({mode:"open",...g});_&&(i.adoptedStyleSheets=_),this._scheduler=new e(n,i,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,c,o){if(c===o)return;let a=o===""?!0:o;Reflect.set(this,q(i),a)}}function d(u){let i=u,c=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(o){c&&i===o||(c=!0,i=o,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(f.prototype,{getPrototypeOf(u){return u},set(u,i,c,o){let a;return i in u?(a=Object.getOwnPropertyDescriptor(u,i),a&&a.set?(a.set.call(o,c),o._scheduler?.update(),!0):(Reflect.set(u,i,c,o),o._scheduler?.update(),!0)):(typeof i=="symbol"||i[0]==="_"?a={enumerable:!0,configurable:!0,writable:!0,value:c}:a=d(c),Object.defineProperty(o,i,a),a.set&&a.set.call(o,c),!0)}});return Object.setPrototypeOf(b.prototype,p),b}return s}function Q(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(G,this)}disconnectedCallback(){this.removeEventListener(G,this)}handleEvent(n){const{detail:r}=n;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:t(function({render:n}){const r=I(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const m=(t,e)=>w(()=>t,e);function J(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function j(t){return w(()=>J(t),[])}function K({render:t}){const e=W(t),s=Q(e);return{component:e,createContext:s}}const X={ATTRIBUTE:1,CHILD:2},k=t=>(...e)=>({_$litDirective$:t,values:e});class Z{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const C=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),C(n,e);return!0},y=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},D=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),te(e)}};function V(t){this._$AN!==void 0?(y(this),this._$AM=t,D(this)):this._$AM=t}function ee(t,e=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let l=s;l<n.length;l++)C(n[l],!1),y(n[l]);else n!=null&&(C(n,!1),y(n));else C(this,t)}const te=t=>{t.type==X.CHILD&&(t._$AP??=ee,t._$AQ??=V)};class M extends Z{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),D(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(C(this,e),y(this))}setValue(e){if(N(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:se}=K({render:O}),T=new WeakMap,ne=k(class extends M{render(t){return R}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),R}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=T.get(e);s===void 0&&(s=new WeakMap,T.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?T.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),oe=(t,...e)=>typeof t=="function"?t(...e):t,re=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ie=(t,e)=>{for(const[s,n]of Object.entries(t))re(e,s,oe(n,e))};class ce extends M{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ie(this._attrs,s)};#t=()=>this.#e();render(e){return x}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=n,n.addEventListener("slotchange",this.#t)),this.#e(),x}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const le=k(ce);class ae extends M{#e;#t;#n=()=>{!this.#e||!this.#t||(this.#t.current=this.#e.assignedElements({flatten:!0}))};#s=()=>this.#n();update(e,[s]){this.#t=s;const n=e.element;this.#e!==n&&(this.#e?.removeEventListener("slotchange",this.#s),this.#e=n,n.addEventListener("slotchange",this.#s)),this.#n()}disconnected(){this.#e?.removeEventListener("slotchange",this.#s),this.#e=void 0}render(){return x}}const ue=k(ae),he=t=>{const e=w(()=>({}),[]);return w(()=>Object.assign(e,t),[e,...Object.values(t)])},de=({host:t,popoverRef:e,triggersRef:s,setOpened:n,disabled:r,openOnHover:l,openOnFocus:f})=>{const v=m(()=>{const o=s.current?.[0];return o instanceof HTMLElement?o:void 0},[]),h=m(()=>{r||(n(!0),e.current?.showPopover?.())},[r,n,e]),g=m(()=>{n(!1),e.current?.hidePopover?.()},[n,e]),A=m(()=>{e.current?.matches(":popover-open")?g():h()},[g,h,e]),_=he({closeTimeout:void 0}),b=m(()=>{clearTimeout(_.closeTimeout)},[]),d=m(o=>{r||o.target===v()&&(b(),h())},[r,v,b,h]),p=m(()=>{clearTimeout(_.closeTimeout),_.closeTimeout=setTimeout(()=>{const o=e.current;l&&(t.matches(":hover")||o?.matches(":hover"))||t.matches(":focus-within")||o?.matches(":focus-within")||g()},100)},[l,t,e,g]),u=m(()=>{let o=document.activeElement;for(;o?.shadowRoot;)o=o.shadowRoot.activeElement;if(!(o==null||o===document.body||o.offsetParent==null))return;const $=v();$&&(t.removeEventListener("focusin",d),$.focus(),t.addEventListener("focusin",d))},[v,d,t]),i=m(o=>{const $=o.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const S of $){const P=S.matches("[autofocus]")?S:S.querySelector("[autofocus]");if(P instanceof HTMLElement){P.focus();break}}},[]),c=m(o=>{const a=o.newState==="open";if(n(a),a){const $=o.target;i($)}else u();t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:o.newState,oldState:o.oldState,composed:!0}))},[t,u]);return E(()=>{if(!(!f||r))return t.addEventListener("focusin",d),t.addEventListener("focusout",p),()=>{t.removeEventListener("focusin",d),t.removeEventListener("focusout",p)}},[f,r,d,p]),E(()=>{if(!(!l||r))return t.addEventListener("pointerenter",d),t.addEventListener("pointerleave",p),()=>{t.removeEventListener("pointerenter",d),t.removeEventListener("pointerleave",p)}},[l,r,d,p]),{open:h,close:g,toggle:A,onToggle:c,scheduleClose:p,cancelClose:b,restoreFocus:u}},fe=Y`
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
`,pe=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:r,openOnFocus:l}=t,f=j(),v=j(),[h,g]=H("opened",!1);E(()=>{const c=f.current;c&&(h?c.showPopover?.():c.hidePopover?.())},[h]),E(()=>{t.toggleAttribute("opened",!!h)},[h]);const{scheduleClose:A,cancelClose:_,open:b,close:d,toggle:p,onToggle:u}=de({host:t,popoverRef:f,triggersRef:v,setOpened:g,disabled:s,openOnHover:r,openOnFocus:l}),i=l?b:p;return L`
		<slot
			name="button"
			${ue(v)}
			${le({"aria-expanded":String(h)})}
			@click=${i}
		></slot>
		${s&&n?L`<slot></slot>`:L`<div
					popover
					style="position-area: ${e}"
					@toggle=${u}
					@select=${d}
					@focusout=${A}
					@focusin=${_}
					${ne(c=>c&&(f.current=c))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",se(pe,{styleSheets:[fe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{se as a,he as b,Y as c,m as d,k as e,Z as i,ne as n,U as s,X as t,j as u};
