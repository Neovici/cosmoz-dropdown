import{u as _,r as g,A as f,e as v,c as A,a as w,b as y}from"./iframe-MaEB3-ds.js";function m(e){return _(()=>({current:e}),[])}const C={ATTRIBUTE:1,CHILD:2},b=e=>(...t)=>({_$litDirective$:e,values:t});class E{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const h=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),h(s,t);return!0},d=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},$=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),G(t)}};function T(e){this._$AN!==void 0?(d(this),this._$AM=e,$(this)):this._$AM=e}function k(e,t=!1,o=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let i=o;i<s.length;i++)h(s[i],!1),d(s[i]);else s!=null&&(h(s,!1),d(s));else h(this,e)}const G=e=>{e.type==C.CHILD&&(e._$AP??=k,e._$AQ??=T)};class L extends E{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),$(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(h(this,t),d(this))}setValue(t){if(g(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const p=new WeakMap,S=b(class extends L{render(e){return f}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=p.get(t);o===void 0&&(o=new WeakMap,p.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?p.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),M=({host:e,popoverRef:t,openOnHover:o,openOnFocus:s,open:n,close:i})=>{const c=m(),a=()=>clearTimeout(c.current),l=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const r=t.current;o&&(e.matches(":hover")||r?.matches(":hover"))||s&&(e.matches(":focus-within")||r?.matches(":focus-within"))||i()},100)},u=()=>{a(),n()};v(()=>{if(o)return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",l),()=>{a(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",l)}},[o,e]),v(()=>{if(s)return e.addEventListener("focusin",u),e.addEventListener("focusout",l),()=>{a(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",l)}},[s,e])},x=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},N=A`
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
		min-width: calc(anchor-size(width) - 0.5rem);

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
`,z=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,n=m(),i=()=>n.current?.showPopover(),c=()=>n.current?.hidePopover(),a=()=>n.current?.togglePopover();return M({host:e,popoverRef:n,openOnHover:o,openOnFocus:s,open:i,close:c}),y`
		<slot name="button" @click=${s?i:a}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${r=>{x(r),e.dispatchEvent(new ToggleEvent("toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))}}
			@select=${c}
			${S(r=>r&&(n.current=r))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",w(z,{styleSheets:[N],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{b as e,E as i,S as n,C as t};
