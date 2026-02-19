import{e as _,r as E,A,d as v,c as T,a as k,f as G,b as S}from"./iframe-U2RIhFh2.js";const f=(e,o)=>_(()=>e,o);function g(e){return _(()=>({current:e}),[])}const L={ATTRIBUTE:1,CHILD:2},M=e=>(...o)=>({_$litDirective$:e,values:o});class x{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,t,s){this._$Ct=o,this._$AM=t,this._$Ci=s}_$AS(o,t){return this.update(o,t)}update(o,t){return this.render(...t)}}const h=(e,o)=>{const t=e._$AN;if(t===void 0)return!1;for(const s of t)s._$AO?.(o,!1),h(s,o);return!0},m=e=>{let o,t;do{if((o=e._$AM)===void 0)break;t=o._$AN,t.delete(e),e=o}while(t?.size===0)},w=e=>{for(let o;o=e._$AM;e=o){let t=o._$AN;if(t===void 0)o._$AN=t=new Set;else if(t.has(e))break;t.add(e),I(o)}};function N(e){this._$AN!==void 0?(m(this),this._$AM=e,w(this)):this._$AM=e}function z(e,o=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(o)if(Array.isArray(s))for(let n=t;n<s.length;n++)h(s[n],!1),m(s[n]);else s!=null&&(h(s,!1),m(s));else h(this,e)}const I=e=>{e.type==L.CHILD&&(e._$AP??=z,e._$AQ??=N)};class P extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,t,s){super._$AT(o,t,s),w(this),this.isConnected=o._$AU}_$AO(o,t=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),t&&(h(this,o),m(this))}setValue(o){if(E(this._$Ct))this._$Ct._$AI(o,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=o,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const $=new WeakMap,D=M(class extends P{render(e){return A}update(e,[o]){const t=o!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=o,this.ht=e.options?.host,this.rt(this.ct=e.element)),A}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const o=this.ht??globalThis;let t=$.get(o);t===void 0&&(t=new WeakMap,$.set(o,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?$.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),H=({host:e,popoverRef:o,disabled:t,openOnHover:s,openOnFocus:r,open:n,close:u})=>{const l=g(),a=()=>clearTimeout(l.current),c=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const d=o.current;s&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||u()},100)},p=()=>{t||(a(),n())};return v(()=>{if(!(!s||t))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",c),()=>{a(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",c)}},[s,t,e]),v(()=>{if(!(!r||t))return e.addEventListener("focusin",p),e.addEventListener("focusout",c),()=>{a(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",c)}},[r,t,e]),{scheduleClose:c,cancelClose:a}},R=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of s){const n=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},U=T`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
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
`,O=e=>{const{placement:o="bottom span-right",disabled:t,openOnHover:s,openOnFocus:r}=e,n=g(),[u,l]=G("opened",!1),a=f(()=>{t||(l(!0),n.current?.showPopover())},[t]),c=f(()=>{l(!1),n.current?.hidePopover()},[]),p=f(()=>{if(t)return;n.current?.matches(":popover-open")?c():a()},[t]);v(()=>{const i=n.current;i&&(u?i.showPopover():i.hidePopover())},[u]),v(()=>{e.toggleAttribute("opened",!!u)},[u]);const{scheduleClose:d,cancelClose:C}=H({host:e,popoverRef:n,disabled:t,openOnHover:s,openOnFocus:r,open:a,close:c}),y=r?a:p,b=f(i=>{R(i),l(i.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))},[]);return S`
		<slot name="button" @click=${y}></slot>
		<div
			popover
			style="position-area: ${o}"
			@toggle=${b}
			@select=${c}
			@focusout=${d}
			@focusin=${C}
			${D(i=>i&&(n.current=i))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",k(O,{styleSheets:[U],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{M as e,x as i,D as n,L as t,f as u};
