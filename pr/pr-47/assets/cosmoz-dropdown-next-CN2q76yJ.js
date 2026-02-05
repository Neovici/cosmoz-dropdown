import{u as g,r as y,A as f,c as E,a as w,e as b,b as C}from"./iframe-XJXXQxNL.js";function v(e){return g(()=>({current:e}),[])}const L={ATTRIBUTE:1,CHILD:2},T=e=>(...t)=>({_$litDirective$:e,values:t});class G{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const a=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),a(s,t);return!0},u=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},m=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),x(t)}};function k(e){this._$AN!==void 0?(u(this),this._$AM=e,m(this)):this._$AM=e}function M(e,t=!1,o=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let r=o;r<s.length;r++)a(s[r],!1),u(s[r]);else s!=null&&(a(s,!1),u(s));else a(this,e)}const x=e=>{e.type==L.CHILD&&(e._$AP??=M,e._$AQ??=k)};class N extends G{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),m(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(a(this,t),u(this))}setValue(t){if(y(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const h=new WeakMap,S=T(class extends N{render(e){return f}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=h.get(t);o===void 0&&(o=new WeakMap,h.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?h.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),H=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},I=E`
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
`,z=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,i=v(),r=v(),$=()=>i.current?.showPopover(),d=()=>i.current?.hidePopover(),_=()=>i.current?.togglePopover(),l=()=>clearTimeout(r.current),c=()=>{clearTimeout(r.current),r.current=setTimeout(()=>{const n=i.current;e.matches(":hover")||n?.matches(":hover")||e.matches(":focus-within")||n?.matches(":focus-within")||d()},100)},A=n=>{if(H(n),!o)return;const p=n.target;n.newState==="open"?(p.addEventListener("pointerenter",l),p.addEventListener("pointerleave",c)):(p.removeEventListener("pointerenter",l),p.removeEventListener("pointerleave",c))};return b(()=>{if(!o&&!s)return;const n=()=>{l(),$()};return o&&(e.addEventListener("pointerenter",n),e.addEventListener("pointerleave",c)),s&&(e.addEventListener("focusin",n),e.addEventListener("focusout",c)),()=>{l(),o&&(e.removeEventListener("pointerenter",n),e.removeEventListener("pointerleave",c)),s&&(e.removeEventListener("focusin",n),e.removeEventListener("focusout",c))}},[o,s,e]),C`
		<slot name="button" @click=${_}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${A}
			@select=${d}
			${S(n=>n&&(i.current=n))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",w(z,{styleSheets:[I],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{T as e,G as i,S as n,L as t};
