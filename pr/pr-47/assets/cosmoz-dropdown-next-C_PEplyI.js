import{u as b,r as L,A as _,c as w,a as C,e as H,b as G}from"./iframe-UhotCz_L.js";function A(e){return b(()=>({current:e}),[])}const k={ATTRIBUTE:1,CHILD:2},P=e=>(...t)=>({_$litDirective$:e,values:t});class M{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const l=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),l(s,t);return!0},u=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},T=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),N(t)}};function S(e){this._$AN!==void 0?(u(this),this._$AM=e,T(this)):this._$AM=e}function x(e,t=!1,o=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let r=o;r<s.length;r++)l(s[r],!1),u(s[r]);else s!=null&&(l(s,!1),u(s));else l(this,e)}const N=e=>{e.type==k.CHILD&&(e._$AP??=x,e._$AQ??=S)};class I extends M{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),T(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(l(this,t),u(this))}setValue(t){if(L(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const h=new WeakMap,O=P(class extends I{render(e){return _}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),_}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=h.get(t);o===void 0&&(o=new WeakMap,h.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?h.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),z=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},D=w`
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
`,F=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,i=A(),r=A({hoveringHost:!1,hoveringPopover:!1,focusedHost:!1}),d=()=>i.current?.showPopover(),v=()=>i.current?.hidePopover(),E=()=>i.current?.togglePopover(),n=r.current,p=()=>{n.closeTimeout=setTimeout(()=>{!n.hoveringHost&&!n.hoveringPopover&&!n.focusedHost&&v()},100)},f=()=>{clearTimeout(n.closeTimeout),n.hoveringPopover=!0},m=()=>{n.hoveringPopover=!1,p()},y=a=>{if(z(a),!o)return;const c=a.target;a.newState==="open"?(c.addEventListener("pointerenter",f),c.addEventListener("pointerleave",m)):(c.removeEventListener("pointerenter",f),c.removeEventListener("pointerleave",m),n.hoveringPopover=!1)};return H(()=>{if(!o&&!s)return;const a=()=>{clearTimeout(n.closeTimeout),n.hoveringHost=!0,d()},c=()=>{n.hoveringHost=!1,p()},$=()=>{clearTimeout(n.closeTimeout),n.focusedHost=!0,d()},g=()=>{n.focusedHost=!1,p()};return o&&(e.addEventListener("pointerenter",a),e.addEventListener("pointerleave",c)),s&&(e.addEventListener("focusin",$),e.addEventListener("focusout",g)),()=>{clearTimeout(n.closeTimeout),o&&(e.removeEventListener("pointerenter",a),e.removeEventListener("pointerleave",c)),s&&(e.removeEventListener("focusin",$),e.removeEventListener("focusout",g))}},[o,s,e]),G`
		<slot name="button" @click=${E}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${y}
			@select=${v}
			${O(a=>a&&(i.current=a))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",C(F,{styleSheets:[D],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{P as e,M as i,O as n,k as t};
