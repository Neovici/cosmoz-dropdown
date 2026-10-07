import{B as N,d as I,e as P,c as E,r as F,D as U,A as D,E as T,f as B,a as A,b as x}from"./iframe-CXDKlNEv.js";const Y=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},W=t=>t?.map(e=>typeof e=="string"?Y(e):e),q=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Q=q,J=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function K(t){class e extends N{frag;renderResult;constructor(o,l,d){super(o,d||l),this.frag=l}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,l){const d=(l||o||{}).baseElement||HTMLElement,{observedAttributes:v=[],useShadowDOM:_=!0,shadowRootInit:b={},styleSheets:g}=l||o||{},h=W(n.styleSheets||g);class m extends d{_scheduler;static get observedAttributes(){return n.observedAttributes||v||[]}constructor(){if(super(),_===!1)this._scheduler=new e(n,this);else{const i=this.attachShadow({mode:"open",...b});h&&(i.adoptedStyleSheets=h),this._scheduler=new e(n,i,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,u,a){if(u===a)return;let c=a===""?!0:a;Reflect.set(this,J(i),c)}}function $(f){let i=f,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(a){u&&i===a||(u=!0,i=a,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(d.prototype,{getPrototypeOf(f){return f},set(f,i,u,a){let c;return i in f?(c=Object.getOwnPropertyDescriptor(f,i),c&&c.set?(c.set.call(a,u),a._scheduler?.update(),!0):(Reflect.set(f,i,u,a),a._scheduler?.update(),!0)):(typeof i=="symbol"||i[0]==="_"?c={enumerable:!0,configurable:!0,writable:!0,value:u}:c=$(u),Object.defineProperty(a,i,c),c.set&&c.set.call(a,u),!0)}});return Object.setPrototypeOf(m.prototype,w),m}return s}function X(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(P,this)}disconnectedCallback(){this.removeEventListener(P,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=I(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const p=(t,e)=>E(()=>t,e);function Z(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function L(t){return E(()=>Z(t),[])}function V({render:t}){const e=K(t),s=X(e);return{component:e,createContext:s}}const ee={ATTRIBUTE:1,CHILD:2},M=t=>(...e)=>({_$litDirective$:t,values:e});class te{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const C=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),C(n,e);return!0},y=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},j=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),oe(e)}};function se(t){this._$AN!==void 0?(y(this),this._$AM=t,j(this)):this._$AM=t}function ne(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let l=s;l<n.length;l++)C(n[l],!1),y(n[l]);else n!=null&&(C(n,!1),y(n));else C(this,t)}const oe=t=>{t.type==ee.CHILD&&(t._$AP??=ne,t._$AQ??=se)};class R extends te{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),j(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(C(this,e),y(this))}setValue(e){if(F(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:re}=V({render:U}),k=new WeakMap,ie=M(class extends R{render(t){return D}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),D}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=k.get(e);s===void 0&&(s=new WeakMap,k.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?k.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class ce extends R{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(e,[s]){this._ref=s;const n=e.element;this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(e){return T}}const G=M(ce),le=(t,...e)=>typeof t=="function"?t(...e):t,ae=(t,e,s)=>{s==null?t.removeAttribute(e):t.setAttribute(e,s)},ue=(t,e)=>{for(const[s,n]of Object.entries(t))ae(e,s,le(n,e))};class de extends R{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const s of e)ue(this._attrs,s)};#e=()=>this.#t();render(e){return T}update(e,[s]){this._attrs=s;const n=e.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=n,n.addEventListener("slotchange",this.#e)),this.#t(),T}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const he=M(de),fe=t=>{const e=E(()=>({}),[]);return E(()=>Object.assign(e,t),[e,...Object.values(t)])},pe=t=>{for(const e of t.current??[]){const s=e.matches("[autofocus]")?e:e.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},ve=t=>{const{placement:e="bottom span-right",disabled:s,passthrough:n,openOnHover:o,openOnFocus:l}=t,d=L(),[v,_]=B("opened",!1),b=L(),g=L(),h=fe({disabled:s,openOnHover:o}),m=p(()=>{const r=b.current?.[0];return r instanceof HTMLElement?r:void 0},[]),$=p(()=>{h.disabled||(_(!0),d.current?.showPopover?.())},[]),w=p(()=>{_(!1),d.current?.hidePopover?.()},[]),f=p(()=>{d.current?.matches(":popover-open")?w():$()},[]),i=p(()=>{clearTimeout(h.closeTimeout)},[]),u=p(r=>{h.disabled||r.target===m()&&(i(),$())},[]),a=p(()=>{h.disabled||(i(),$())},[]),c=p(()=>{clearTimeout(h.closeTimeout),h.closeTimeout=setTimeout(()=>{const r=d.current;h.openOnHover&&(t.matches(":hover")||r?.matches(":hover"))||t.matches(":focus-within")||r?.matches(":focus-within")||w()},100)},[]),z=p(()=>{let r=document.activeElement;for(;r?.shadowRoot;)r=r.shadowRoot.activeElement;if(!(r==null||r===document.body||r.offsetParent==null))return;const O=m();O&&(t.removeEventListener("focusin",u),O.focus(),t.addEventListener("focusin",u))},[]),H=p(r=>{const S=r.newState==="open";_(S),S?pe(g):z(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return A(()=>{const r=d.current;r&&(v?r.showPopover?.():r.hidePopover?.())},[v]),A(()=>{t.toggleAttribute("opened",!!v)},[v]),A(()=>{if(!(!l||s))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[l,s]),A(()=>{if(!(!o||s))return t.addEventListener("pointerenter",a),t.addEventListener("pointerleave",c),()=>{t.removeEventListener("pointerenter",a),t.removeEventListener("pointerleave",c)}},[o,s]),{placement:e,disabled:s,passthrough:n,opened:v,triggers:b,content:g,popoverRef:d,handleClick:l?$:f,onToggle:H,close:w,scheduleClose:c,cancelClose:i}},me=Q`
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

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,_e=({placement:t,disabled:e,passthrough:s,opened:n,triggers:o,content:l,popoverRef:d,handleClick:v,onToggle:_,close:b,scheduleClose:g,cancelClose:h})=>x`
		<slot
			name="button"
			${G(o)}
			${he({"aria-expanded":s?null:String(n),disabled:e&&!s?"":null})}
			@click=${v}
		></slot>
		${e&&s?x`<slot></slot>`:x`<div
					popover
					style="position-area: ${t}"
					@toggle=${_}
					@select=${b}
					@focusout=${g}
					@focusin=${h}
					${ie(m=>m&&(d.current=m))}
				>
					<slot ${G(l)}></slot>
				</div>`}
	`,be=t=>_e(ve(t));customElements.define("cosmoz-dropdown-next",re(be,{styleSheets:[me],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{re as a,fe as b,Q as c,p as d,M as e,te as i,ie as n,Y as s,ee as t,L as u};
