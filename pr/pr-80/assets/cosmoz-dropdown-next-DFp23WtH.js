import{B as j,d as z,e as O,c as w,r as H,D as N,A as P,E as k,f as I,a as A,b as S}from"./iframe-BVlFfRQM.js";const U=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},B=t=>t?.map(e=>typeof e=="string"?U(e):e),F=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Y=F,q=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function W(t){class e extends j{frag;renderResult;constructor(o,l,a){super(o,a||l),this.frag=l}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,l){const a=(l||o||{}).baseElement||HTMLElement,{observedAttributes:f=[],useShadowDOM:m=!0,shadowRootInit:b={},styleSheets:p}=l||o||{},_=B(n.styleSheets||p);class g extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||f||[]}constructor(){if(super(),m===!1)this._scheduler=new e(n,this);else{const i=this.attachShadow({mode:"open",...b});_&&(i.adoptedStyleSheets=_),this._scheduler=new e(n,i,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,u,r){if(u===r)return;let d=r===""?!0:r;Reflect.set(this,q(i),d)}}function $(h){let i=h,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(r){u&&i===r||(u=!0,i=r,this._scheduler&&this._scheduler.update())}})}const y=new Proxy(a.prototype,{getPrototypeOf(h){return h},set(h,i,u,r){let d;return i in h?(d=Object.getOwnPropertyDescriptor(h,i),d&&d.set?(d.set.call(r,u),r._scheduler?.update(),!0):(Reflect.set(h,i,u,r),r._scheduler?.update(),!0)):(typeof i=="symbol"||i[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:u}:d=$(u),Object.defineProperty(r,i,d),d.set&&d.set.call(r,u),!0)}});return Object.setPrototypeOf(g.prototype,y),g}return s}function Q(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(O,this)}disconnectedCallback(){this.removeEventListener(O,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=z(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const v=(t,e)=>w(()=>t,e);function J(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function R(t){return w(()=>J(t),[])}function K({render:t}){const e=W(t),s=Q(e);return{component:e,createContext:s}}const X={ATTRIBUTE:1,CHILD:2},L=t=>(...e)=>({_$litDirective$:t,values:e});class Z{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const C=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),C(n,e);return!0},E=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},D=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),te(e)}};function V(t){this._$AN!==void 0?(E(this),this._$AM=t,D(this)):this._$AM=t}function ee(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let l=s;l<n.length;l++)C(n[l],!1),E(n[l]);else n!=null&&(C(n,!1),E(n));else C(this,t)}const te=t=>{t.type==X.CHILD&&(t._$AP??=ee,t._$AQ??=V)};class T extends Z{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),D(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(C(this,e),E(this))}setValue(e){if(H(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:se}=K({render:N}),x=new WeakMap,ne=L(class extends T{render(t){return P}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),P}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=x.get(e);s===void 0&&(s=new WeakMap,x.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?x.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class oe extends T{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(e,[s]){this._ref=s;const n=e.element;this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(e){return k}}const re=L(oe),ie=(t,...e)=>typeof t=="function"?t(...e):t,ce=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},le=(t,e)=>{for(const[s,n]of Object.entries(t))ce(e,s,ie(n,e))};class ae extends T{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)le(this._attrs,s)};#e=()=>this.#t();render(e){return k}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t(),k}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const ue=L(ae),de=t=>{const e=w(()=>({}),[]);return w(()=>Object.assign(e,t),[e,...Object.values(t)])},he=t=>{const s=t.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const o=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},pe=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:l}=t,a=R(),[f,m]=I("opened",!1),b=R(),p=de({disabled:s,openOnHover:o}),_=v(()=>{const c=b.current?.[0];return c instanceof HTMLElement?c:void 0},[]),g=v(()=>{p.disabled||(m(!0),a.current?.showPopover?.())},[]),$=v(()=>{m(!1),a.current?.hidePopover?.()},[]),y=v(()=>{a.current?.matches(":popover-open")?$():g()},[]),h=v(()=>{clearTimeout(p.closeTimeout)},[]),i=v(c=>{p.disabled||c.target===_()&&(h(),g())},[]),u=v(()=>{p.disabled||(h(),g())},[]),r=v(()=>{clearTimeout(p.closeTimeout),p.closeTimeout=setTimeout(()=>{const c=a.current;p.openOnHover&&(t.matches(":hover")||c?.matches(":hover"))||t.matches(":focus-within")||c?.matches(":focus-within")||$()},100)},[]),d=v(c=>{const M=c.newState==="open";if(m(M),M){const G=c.target;he(G)}t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:c.newState,oldState:c.oldState,composed:!0}))},[]);return A(()=>{const c=a.current;c&&(f?c.showPopover?.():c.hidePopover?.())},[f]),A(()=>{t.toggleAttribute("opened",!!f)},[f]),A(()=>{if(!(!l||s))return t.addEventListener("focusin",i),t.addEventListener("focusout",r),()=>{t.removeEventListener("focusin",i),t.removeEventListener("focusout",r)}},[l,s]),A(()=>{if(!(!o||s))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",r),()=>{t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",r)}},[o,s]),{placement:e,disabled:s,passthrough:n,opened:f,triggers:b,popoverRef:a,handleClick:l?g:y,onToggle:d,close:$,scheduleClose:r,cancelClose:h}},fe=Y`
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
`,ve=({placement:t,disabled:e,passthrough:s,opened:n,triggers:o,popoverRef:l,handleClick:a,onToggle:f,close:m,scheduleClose:b,cancelClose:p})=>S`
		<slot
			name="button"
			${re(o)}
			${ue({"aria-expanded":s?null:String(n),disabled:e&&!s?"":null})}
			@click=${a}
		></slot>
		${e&&s?S`<slot></slot>`:S`<div
					popover
					style="position-area: ${t}"
					@toggle=${f}
					@select=${m}
					@focusout=${b}
					@focusin=${p}
					${ne(_=>_&&(l.current=_))}
				>
					<slot></slot>
				</div>`}
	`,me=t=>ve(pe(t));customElements.define("cosmoz-dropdown-next",se(me,{styleSheets:[fe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{se as a,de as b,Y as c,v as d,L as e,Z as i,ne as n,U as s,X as t,R as u};
