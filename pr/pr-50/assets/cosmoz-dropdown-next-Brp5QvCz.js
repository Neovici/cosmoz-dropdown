import{u as g,r as A,A as m,e as f,c as w,a as y,b as C}from"./iframe-a40rnroP.js";function $(e){return g(()=>({current:e}),[])}const E={ATTRIBUTE:1,CHILD:2},b=e=>(...t)=>({_$litDirective$:e,values:t});class T{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const d=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),d(s,t);return!0},p=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},_=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),G(t)}};function k(e){this._$AN!==void 0?(p(this),this._$AM=e,_(this)):this._$AM=e}function L(e,t=!1,o=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let n=o;n<s.length;n++)d(s[n],!1),p(s[n]);else s!=null&&(d(s,!1),p(s));else d(this,e)}const G=e=>{e.type==E.CHILD&&(e._$AP??=L,e._$AQ??=k)};class S extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),_(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(d(this,t),p(this))}setValue(t){if(A(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const v=new WeakMap,M=b(class extends S{render(e){return m}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),m}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=v.get(t);o===void 0&&(o=new WeakMap,v.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?v.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),x=({host:e,popoverRef:t,openOnHover:o,openOnFocus:s,openOnClick:i,open:n,close:h})=>{const c=$(),a=()=>clearTimeout(c.current),l=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const r=t.current;o&&(e.matches(":hover")||r?.matches(":hover"))||s&&(e.matches(":focus-within")||r?.matches(":focus-within"))||h()},100)},u=()=>{a(),n()};f(()=>{if(o)return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",l),()=>{a(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",l)}},[o,e]),f(()=>{if(s)return e.addEventListener("focusin",u),e.addEventListener("focusout",l),()=>{a(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",l)}},[s,e]),f(()=>{if(i)return e.addEventListener("click",n),()=>{e.removeEventListener("click",n)}},[i,e])},N=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const n=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},I=w`
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
`,z=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s,openOnClick:i}=e,n=$(),h=()=>n.current?.showPopover(),c=()=>n.current?.hidePopover(),a=()=>n.current?.togglePopover();return x({host:e,popoverRef:n,openOnHover:o,openOnFocus:s,openOnClick:i,open:h,close:c}),C`
		<slot name="button" @click=${s?h:a}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${r=>{N(r),e.dispatchEvent(new ToggleEvent("toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))}}
			@select=${c}
			${M(r=>r&&(n.current=r))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",y(z,{styleSheets:[I],observedAttributes:["placement","open-on-hover","open-on-focus","open-on-click"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{b as e,T as i,M as n,E as t};
