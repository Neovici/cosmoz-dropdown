import{B as N,d as I,e as D,c as w,r as U,D as B,A as G,E as M,f as F,a as A,b as L}from"./iframe-CmeW4EvP.js";const Y=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},q=t=>t?.map(e=>typeof e=="string"?Y(e):e),W=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Q=W,J=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function K(t){class e extends N{frag;renderResult;constructor(o,l,a){super(o,a||l),this.frag=l}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,l){const a=(l||o||{}).baseElement||HTMLElement,{observedAttributes:v=[],useShadowDOM:m=!0,shadowRootInit:b={},styleSheets:p}=l||o||{},_=q(n.styleSheets||p);class g extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||v||[]}constructor(){if(super(),m===!1)this._scheduler=new e(n,this);else{const c=this.attachShadow({mode:"open",...b});_&&(c.adoptedStyleSheets=_),this._scheduler=new e(n,c,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,u,r){if(u===r)return;let d=r===""?!0:r;Reflect.set(this,J(c),d)}}function $(h){let c=h,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(r){u&&c===r||(u=!0,c=r,this._scheduler&&this._scheduler.update())}})}const y=new Proxy(a.prototype,{getPrototypeOf(h){return h},set(h,c,u,r){let d;return c in h?(d=Object.getOwnPropertyDescriptor(h,c),d&&d.set?(d.set.call(r,u),r._scheduler?.update(),!0):(Reflect.set(h,c,u,r),r._scheduler?.update(),!0)):(typeof c=="symbol"||c[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:u}:d=$(u),Object.defineProperty(r,c,d),d.set&&d.set.call(r,u),!0)}});return Object.setPrototypeOf(g.prototype,y),g}return s}function X(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(D,this)}disconnectedCallback(){this.removeEventListener(D,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=I(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const f=(t,e)=>w(()=>t,e);function Z(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function j(t){return w(()=>Z(t),[])}function V({render:t}){const e=K(t),s=X(e);return{component:e,createContext:s}}const ee={ATTRIBUTE:1,CHILD:2},O=t=>(...e)=>({_$litDirective$:t,values:e});class te{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const C=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),C(n,e);return!0},E=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},z=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),oe(e)}};function se(t){this._$AN!==void 0?(E(this),this._$AM=t,z(this)):this._$AM=t}function ne(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let l=s;l<n.length;l++)C(n[l],!1),E(n[l]);else n!=null&&(C(n,!1),E(n));else C(this,t)}const oe=t=>{t.type==ee.CHILD&&(t._$AP??=ne,t._$AQ??=se)};class P extends te{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),z(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(C(this,e),E(this))}setValue(e){if(U(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:re}=V({render:B}),T=new WeakMap,ie=O(class extends P{render(t){return G}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),G}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=T.get(e);s===void 0&&(s=new WeakMap,T.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?T.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class ce extends P{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(e,[s]){this._ref=s;const n=e.element;this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(e){return M}}const le=O(ce),ae=(t,...e)=>typeof t=="function"?t(...e):t,ue=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},de=(t,e)=>{for(const[s,n]of Object.entries(t))ue(e,s,ae(n,e))};class he extends P{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)de(this._attrs,s)};#e=()=>this.#t();render(e){return M}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t(),M}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const pe=O(he),fe=t=>{const e=w(()=>({}),[]);return w(()=>Object.assign(e,t),[e,...Object.values(t)])},ve=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:l}=t,a=j(),[v,m]=F("opened",!1),b=j(),p=fe({disabled:s,openOnHover:o}),_=f(()=>{const i=b.current?.[0];return i instanceof HTMLElement?i:void 0},[]),g=f(()=>{p.disabled||(m(!0),a.current?.showPopover?.())},[]),$=f(()=>{m(!1),a.current?.hidePopover?.()},[]),y=f(()=>{a.current?.matches(":popover-open")?$():g()},[]),h=f(()=>{clearTimeout(p.closeTimeout)},[]),c=f(i=>{p.disabled||i.target===_()&&(h(),g())},[]),u=f(()=>{p.disabled||(h(),g())},[]),r=f(()=>{clearTimeout(p.closeTimeout),p.closeTimeout=setTimeout(()=>{const i=a.current;p.openOnHover&&(t.matches(":hover")||i?.matches(":hover"))||t.matches(":focus-within")||i?.matches(":focus-within")||$()},100)},[]),d=f(i=>{const x=i.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const k of x){const R=k.matches("[autofocus]")?k:k.querySelector("[autofocus]");if(R instanceof HTMLElement){R.focus();break}}},[]),H=f(i=>{const S=i.newState==="open";if(m(S),S){const x=i.target;d(x)}t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))},[]);return A(()=>{const i=a.current;i&&(v?i.showPopover?.():i.hidePopover?.())},[v]),A(()=>{t.toggleAttribute("opened",!!v)},[v]),A(()=>{if(!(!l||s))return t.addEventListener("focusin",c),t.addEventListener("focusout",r),()=>{t.removeEventListener("focusin",c),t.removeEventListener("focusout",r)}},[l,s]),A(()=>{if(!(!o||s))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",r),()=>{t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",r)}},[o,s]),{placement:e,disabled:s,passthrough:n,opened:v,triggers:b,popoverRef:a,handleClick:l?g:y,onToggle:H,close:$,scheduleClose:r,cancelClose:h}},me=Q`
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
`,_e=({placement:t,disabled:e,passthrough:s,opened:n,triggers:o,popoverRef:l,handleClick:a,onToggle:v,close:m,scheduleClose:b,cancelClose:p})=>L`
		<slot
			name="button"
			${le(o)}
			${pe({"aria-expanded":s?null:String(n),disabled:e&&!s?"":null})}
			@click=${a}
		></slot>
		${e&&s?L`<slot></slot>`:L`<div
					popover
					style="position-area: ${t}"
					@toggle=${v}
					@select=${m}
					@focusout=${b}
					@focusin=${p}
					${ie(_=>_&&(l.current=_))}
				>
					<slot></slot>
				</div>`}
	`,ge=t=>_e(ve(t));customElements.define("cosmoz-dropdown-next",re(ge,{styleSheets:[me],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{re as a,fe as b,Q as c,f as d,O as e,te as i,ie as n,Y as s,ee as t,j as u};
