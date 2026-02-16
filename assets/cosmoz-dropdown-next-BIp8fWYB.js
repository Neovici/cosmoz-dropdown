import{e as A,r as y,A as $,d as f,c as b,a as C,f as E,b as T}from"./iframe-z3zkTkUT.js";const h=(e,t)=>A(()=>e,t);function _(e){return A(()=>({current:e}),[])}const k={ATTRIBUTE:1,CHILD:2},G=e=>(...t)=>({_$litDirective$:e,values:t});class S{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const u=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),u(s,t);return!0},v=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},g=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),x(t)}};function L(e){this._$AN!==void 0?(v(this),this._$AM=e,g(this)):this._$AM=e}function M(e,t=!1,o=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=o;r<s.length;r++)u(s[r],!1),v(s[r]);else s!=null&&(u(s,!1),v(s));else u(this,e)}const x=e=>{e.type==k.CHILD&&(e._$AP??=M,e._$AQ??=L)};class N extends S{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),g(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(u(this,t),v(this))}setValue(t){if(y(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const m=new WeakMap,z=G(class extends N{render(e){return $}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=m.get(t);o===void 0&&(o=new WeakMap,m.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?m.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),I=({host:e,popoverRef:t,openOnHover:o,openOnFocus:s,open:n,close:r})=>{const a=_(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=t.current;o&&(e.matches(":hover")||d?.matches(":hover"))||s&&(e.matches(":focus-within")||d?.matches(":focus-within"))||r()},100)},p=()=>{l(),n()};f(()=>{if(o)return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",c),()=>{l(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",c)}},[o,e]),f(()=>{if(s)return e.addEventListener("focusin",p),e.addEventListener("focusout",c),()=>{l(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",c)}},[s,e])},P=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},D=b`
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
`,H=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,n=_(),[r,a]=E("opened",!1),l=h(()=>{a(!0),n.current?.showPopover()},[]),c=h(()=>{a(!1),n.current?.hidePopover()},[]),p=h(()=>{n.current?.matches(":popover-open")?c():l()},[]);f(()=>{const i=n.current;i&&(r?i.showPopover():i.hidePopover())},[r]),f(()=>{e.toggleAttribute("opened",!!r)},[r]),I({host:e,popoverRef:n,openOnHover:o,openOnFocus:s,open:l,close:c});const d=s?l:p,w=h(i=>{P(i),a(i.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))},[]);return T`
		<slot name="button" @click=${d}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${w}
			@select=${c}
			${z(i=>i&&(n.current=i))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",C(H,{styleSheets:[D],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{G as e,S as i,z as n,k as t,h as u};
