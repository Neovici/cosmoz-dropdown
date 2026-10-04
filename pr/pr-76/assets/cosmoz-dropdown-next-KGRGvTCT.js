import{B as O,d as z,e as T,c as M,r as D,D as I,A as x,a as _,f as N,b as y}from"./iframe-C1coU4d2.js";const H=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},j=e=>e?.map(t=>typeof t=="string"?H(t):t),U=(e,...t)=>e.flatMap((s,o)=>[s,t[o]||""]).join(""),B=U,W=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function q(e){class t extends O{frag;renderResult;constructor(n,i,a){super(n,a||i),this.frag=i}commit(n){this.renderResult=e(n,this.frag)}}function s(o,n,i){const a=(i||n||{}).baseElement||HTMLElement,{observedAttributes:h=[],useShadowDOM:p=!0,shadowRootInit:d={},styleSheets:f}=i||n||{},m=j(o.styleSheets||f);class g extends a{_scheduler;static get observedAttributes(){return o.observedAttributes||h||[]}constructor(){if(super(),p===!1)this._scheduler=new t(o,this);else{const l=this.attachShadow({mode:"open",...d});m&&(l.adoptedStyleSheets=m),this._scheduler=new t(o,l,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(l,r,u){if(r===u)return;let c=u===""?!0:u;Reflect.set(this,W(l),c)}}function A(v){let l=v,r=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return l},set(u){r&&l===u||(r=!0,l=u,this._scheduler&&this._scheduler.update())}})}const C=new Proxy(a.prototype,{getPrototypeOf(v){return v},set(v,l,r,u){let c;return l in v?(c=Object.getOwnPropertyDescriptor(v,l),c&&c.set?(c.set.call(u,r),!0):(Reflect.set(v,l,r,u),!0)):(typeof l=="symbol"||l[0]==="_"?c={enumerable:!0,configurable:!0,writable:!0,value:r}:c=A(r),Object.defineProperty(u,l,c),c.set&&c.set.call(u,r),!0)}});return Object.setPrototypeOf(g.prototype,C),g}return s}function Y(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(T,this)}disconnectedCallback(){this.removeEventListener(T,this)}handleEvent(o){const{detail:n}=o;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let n of this.listeners)n(o)}get value(){return this._value}},Consumer:e(function({render:o}){const n=z(s);return o(n)},{useShadowDOM:!1}),defaultValue:t};return s}}const b=(e,t)=>M(()=>e,t);function R(e){return M(()=>({current:e}),[])}function F({render:e}){const t=q(e),s=Y(t);return{component:t,createContext:s}}const Q={ATTRIBUTE:1,CHILD:2},J=e=>(...t)=>({_$litDirective$:e,values:t});class K{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const $=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),$(o,t);return!0},w=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},P=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),V(t)}};function X(e){this._$AN!==void 0?(w(this),this._$AM=e,P(this)):this._$AM=e}function Z(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)$(o[i],!1),w(o[i]);else o!=null&&($(o,!1),w(o));else $(this,e)}const V=e=>{e.type==Q.CHILD&&(e._$AP??=Z,e._$AQ??=X)};class ee extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),P(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&($(this,t),w(this))}setValue(t){if(D(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:te}=F({render:I}),S=new WeakMap,se=J(class extends ee{render(e){return x}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),x}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),oe=({host:e,popoverRef:t,disabled:s,openOnHover:o,openOnFocus:n,open:i,close:a})=>{const h=R(),p=()=>clearTimeout(h.current),d=()=>{clearTimeout(h.current),h.current=setTimeout(()=>{const m=t.current;o&&(e.matches(":hover")||m?.matches(":hover"))||e.matches(":focus-within")||m?.matches(":focus-within")||a()},100)},f=()=>{s||(p(),i())};return _(()=>{if(!(!o||s))return e.addEventListener("pointerenter",f),e.addEventListener("pointerleave",d),()=>{p(),e.removeEventListener("pointerenter",f),e.removeEventListener("pointerleave",d)}},[o,s,e]),_(()=>{if(!(!n||s))return e.addEventListener("focusin",f),e.addEventListener("focusout",d),()=>{p(),e.removeEventListener("focusin",f),e.removeEventListener("focusout",d)}},[n,s,e]),{scheduleClose:d,cancelClose:p}},ne=e=>{if(e.newState!=="open")return;const o=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of o){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},re=(e=document)=>{let t=e.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;return t},E=new WeakSet,k=new WeakSet,L=(e,t,s)=>{const n=e.shadowRoot?.querySelector("slot[name=button]")?.assignedElements({flatten:!0})[0];if(!n||!(n instanceof HTMLElement)||(n.setAttribute("aria-expanded",String(t)),t||s))return;const i=re();(i==null||i===document.body||i===e||e.contains(i)||e.shadowRoot?.contains(i))&&n.focus()},ie=B`
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
`,ce=e=>{const{placement:t="bottom span-right",disabled:s,passthrough:o,openOnHover:n,openOnFocus:i}=e,a=R(),[h,p]=N("opened",!1),d=b(()=>{s||(p(!0),a.current?.showPopover?.())},[s]),f=b(()=>{p(!1),a.current?.hidePopover?.()},[]),m=b(()=>{if(s)return;a.current?.matches(":popover-open")?f():d()},[s]);_(()=>{const r=a.current;r&&(h?r.showPopover?.():r.hidePopover?.())},[h]),_(()=>{e.toggleAttribute("opened",!!h)},[h]);const{scheduleClose:g,cancelClose:A}=oe({host:e,popoverRef:a,disabled:s,openOnHover:n,openOnFocus:i,open:d,close:f}),C=b(()=>{const r=a.current;r!=null&&k.add(r),g()},[g]),v=i?d:m;_(()=>{L(e,!1,!1)},[]);const l=b(r=>{ne(r);const u=r.newState==="open";p(u);const c=r.target,G=c!=null&&E.has(c)||c!=null&&k.has(c);c!=null&&(E.delete(c),k.delete(c)),L(e,u,G),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return y`
		<slot name="button" @click=${v}></slot>
		${s&&o?y`<slot></slot>`:y`<div
					popover
					style="position-area: ${t}"
					@toggle=${l}
					@select=${r=>{r.currentTarget!=null&&E.add(r.currentTarget),f()}}
					@focusout=${C}
					@focusin=${A}
					${se(r=>r&&(a.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",te(ce,{styleSheets:[ie],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{te as a,b,B as c,J as e,K as i,se as n,H as s,Q as t,R as u};
