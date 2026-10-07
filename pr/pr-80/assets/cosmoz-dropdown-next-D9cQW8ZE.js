import{B as z,d as H,e as P,c as E,r as N,D as I,A as R,E as L,f as U,a as w,b as S}from"./iframe-DqGJsmdG.js";const B=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},F=t=>t?.map(e=>typeof e=="string"?B(e):e),Y=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),W=Y,q=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Q(t){class e extends z{frag;renderResult;constructor(o,c,u){super(o,u||c),this.frag=c}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,c){const u=(c||o||{}).baseElement||HTMLElement,{observedAttributes:f=[],useShadowDOM:m=!0,shadowRootInit:b={},styleSheets:g}=c||o||{},h=F(n.styleSheets||g);class _ extends u{_scheduler;static get observedAttributes(){return n.observedAttributes||f||[]}constructor(){if(super(),m===!1)this._scheduler=new e(n,this);else{const r=this.attachShadow({mode:"open",...b});h&&(r.adoptedStyleSheets=h),this._scheduler=new e(n,r,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,d,l){if(d===l)return;let i=l===""?!0:l;Reflect.set(this,q(r),i)}}function $(p){let r=p,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(l){d&&r===l||(d=!0,r=l,this._scheduler&&this._scheduler.update())}})}const C=new Proxy(u.prototype,{getPrototypeOf(p){return p},set(p,r,d,l){let i;return r in p?(i=Object.getOwnPropertyDescriptor(p,r),i&&i.set?(i.set.call(l,d),l._scheduler?.update(),!0):(Reflect.set(p,r,d,l),l._scheduler?.update(),!0)):(typeof r=="symbol"||r[0]==="_"?i={enumerable:!0,configurable:!0,writable:!0,value:d}:i=$(d),Object.defineProperty(l,r,i),i.set&&i.set.call(l,d),!0)}});return Object.setPrototypeOf(_.prototype,C),_}return s}function J(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(P,this)}disconnectedCallback(){this.removeEventListener(P,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=H(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const v=(t,e)=>E(()=>t,e);function K(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function x(t){return E(()=>K(t),[])}function X({render:t}){const e=Q(t),s=J(e);return{component:e,createContext:s}}const Z={ATTRIBUTE:1,CHILD:2},T=t=>(...e)=>({_$litDirective$:t,values:e});class V{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const A=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),A(n,e);return!0},y=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},G=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),se(e)}};function ee(t){this._$AN!==void 0?(y(this),this._$AM=t,G(this)):this._$AM=t}function te(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let c=s;c<n.length;c++)A(n[c],!1),y(n[c]);else n!=null&&(A(n,!1),y(n));else A(this,t)}const se=t=>{t.type==Z.CHILD&&(t._$AP??=te,t._$AQ??=ee)};class M extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),G(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(A(this,e),y(this))}setValue(e){if(N(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ne}=X({render:I}),k=new WeakMap,oe=T(class extends M{render(t){return R}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),R}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=k.get(e);s===void 0&&(s=new WeakMap,k.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?k.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class re extends M{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(e,[s]){this._ref=s;const n=e.element;this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(e){return L}}const D=T(re),ie=(t,...e)=>typeof t=="function"?t(...e):t,ce=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},le=(t,e)=>{for(const[s,n]of Object.entries(t))ce(e,s,ie(n,e))};class ae extends M{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)le(this._attrs,s)};#e=()=>this.#t();render(e){return L}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t(),L}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const ue=T(ae),de=t=>{const e=E(()=>({}),[]);return E(()=>Object.assign(e,t),[e,...Object.values(t)])},he=t=>{for(const e of t.current??[]){const s=e.matches("[autofocus]")?e:e.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},pe=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:c}=t,u=x(),[f,m]=U("opened",!1),b=x(),g=x(),h=de({disabled:s,openOnHover:o}),_=v(()=>{const a=b.current?.[0];return a instanceof HTMLElement?a:void 0},[]),$=v(()=>{h.disabled||(m(!0),u.current?.showPopover?.())},[]),C=v(()=>{m(!1),u.current?.hidePopover?.()},[]),p=v(()=>{u.current?.matches(":popover-open")?C():$()},[]),r=v(()=>{clearTimeout(h.closeTimeout)},[]),d=v(a=>{h.disabled||a.target===_()&&(r(),$())},[]),l=v(()=>{h.disabled||(r(),$())},[]),i=v(()=>{clearTimeout(h.closeTimeout),h.closeTimeout=setTimeout(()=>{const a=u.current;h.openOnHover&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||C()},100)},[]),j=v(a=>{const O=a.newState==="open";m(O),O&&he(g),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:a.newState,oldState:a.oldState,composed:!0}))},[]);return w(()=>{const a=u.current;a&&(f?a.showPopover?.():a.hidePopover?.())},[f]),w(()=>{t.toggleAttribute("opened",!!f)},[f]),w(()=>{if(!(!c||s))return t.addEventListener("focusin",d),t.addEventListener("focusout",i),()=>{t.removeEventListener("focusin",d),t.removeEventListener("focusout",i)}},[c,s]),w(()=>{if(!(!o||s))return t.addEventListener("pointerenter",l),t.addEventListener("pointerleave",i),()=>{t.removeEventListener("pointerenter",l),t.removeEventListener("pointerleave",i)}},[o,s]),{placement:e,disabled:s,passthrough:n,opened:f,triggers:b,content:g,popoverRef:u,handleClick:c?$:p,onToggle:j,close:C,scheduleClose:i,cancelClose:r}},fe=W`
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
`,ve=({placement:t,disabled:e,passthrough:s,opened:n,triggers:o,content:c,popoverRef:u,handleClick:f,onToggle:m,close:b,scheduleClose:g,cancelClose:h})=>S`
		<slot
			name="button"
			${D(o)}
			${ue({"aria-expanded":s?null:String(n),disabled:e&&!s?"":null})}
			@click=${f}
		></slot>
		${e&&s?S`<slot></slot>`:S`<div
					popover
					style="position-area: ${t}"
					@toggle=${m}
					@select=${b}
					@focusout=${g}
					@focusin=${h}
					${oe(_=>_&&(u.current=_))}
				>
					<slot ${D(c)}></slot>
				</div>`}
	`,me=t=>ve(pe(t));customElements.define("cosmoz-dropdown-next",ne(me,{styleSheets:[fe],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{ne as a,de as b,W as c,v as d,T as e,V as i,oe as n,B as s,Z as t,x as u};
