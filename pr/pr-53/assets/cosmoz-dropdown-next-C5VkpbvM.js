import{u as _,r as g,A as m,e as d,c as w,a as y,f as C,b}from"./iframe-XXKC6qz0.js";function $(e){return _(()=>({current:e}),[])}const E={ATTRIBUTE:1,CHILD:2},T=e=>(...t)=>({_$litDirective$:e,values:t});class k{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const u=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),u(s,t);return!0},h=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},A=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),L(t)}};function G(e){this._$AN!==void 0?(h(this),this._$AM=e,A(this)):this._$AM=e}function S(e,t=!1,o=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let n=o;n<s.length;n++)u(s[n],!1),h(s[n]);else s!=null&&(u(s,!1),h(s));else u(this,e)}const L=e=>{e.type==E.CHILD&&(e._$AP??=S,e._$AQ??=G)};class M extends k{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),A(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(u(this,t),h(this))}setValue(t){if(g(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const v=new WeakMap,x=T(class extends M{render(e){return m}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),m}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=v.get(t);o===void 0&&(o=new WeakMap,v.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?v.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),N=({host:e,popoverRef:t,openOnHover:o,openOnFocus:s,open:r,close:n})=>{const c=$(),l=()=>clearTimeout(c.current),a=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const f=t.current;o&&(e.matches(":hover")||f?.matches(":hover"))||s&&(e.matches(":focus-within")||f?.matches(":focus-within"))||n()},100)},p=()=>{l(),r()};d(()=>{if(o)return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",a),()=>{l(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",a)}},[o,e]),d(()=>{if(s)return e.addEventListener("focusin",p),e.addEventListener("focusout",a),()=>{l(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",a)}},[s,e])},z=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of s){const n=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},I=w`
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
`,D=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,r=$(),[n,c]=C("opened",!1),l=()=>c(!0),a=()=>c(!1),p=()=>c(i=>!i);return d(()=>{const i=r.current;i&&(n&&!i.matches(":popover-open")&&i.showPopover(),!n&&i.matches(":popover-open")&&i.hidePopover())},[n]),d(()=>{e.toggleAttribute("opened",!!n)},[n]),N({host:e,popoverRef:r,openOnHover:o,openOnFocus:s,open:l,close:a}),b`
		<slot name="button" @click=${s?l:p}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${i=>{z(i),c(i.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))}}
			@select=${a}
			${x(i=>i&&(r.current=i))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",y(D,{styleSheets:[I],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{T as e,k as i,x as n,E as t};
