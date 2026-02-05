import{u as _,r as A,A as d,c as g,a as y,e as b,b as w}from"./iframe-B2Z4-RNa.js";function f(e){return _(()=>({current:e}),[])}const C={ATTRIBUTE:1,CHILD:2},E=e=>(...t)=>({_$litDirective$:e,values:t});class T{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const c=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),c(s,t);return!0},l=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},v=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),L(t)}};function G(e){this._$AN!==void 0?(l(this),this._$AM=e,v(this)):this._$AM=e}function k(e,t=!1,o=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let i=o;i<s.length;i++)c(s[i],!1),l(s[i]);else s!=null&&(c(s,!1),l(s));else c(this,e)}const L=e=>{e.type==C.CHILD&&(e._$AP??=k,e._$AQ??=G)};class M extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),v(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(c(this,t),l(this))}setValue(t){if(A(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const u=new WeakMap,x=E(class extends M{render(e){return d}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),d}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=u.get(t);o===void 0&&(o=new WeakMap,u.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?u.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),N=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},S=g`
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
`,H=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,n=f(),i=f(),m=()=>n.current?.showPopover(),h=()=>n.current?.hidePopover(),$=()=>n.current?.togglePopover(),p=()=>clearTimeout(i.current),a=()=>{clearTimeout(i.current),i.current=setTimeout(()=>{const r=n.current;e.matches(":hover")||r?.matches(":hover")||e.matches(":focus-within")||r?.matches(":focus-within")||h()},100)};return b(()=>{if(!o&&!s)return;const r=()=>{p(),m()};return o&&(e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",a)),s&&(e.addEventListener("focusin",r),e.addEventListener("focusout",a)),()=>{p(),o&&(e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",a)),s&&(e.removeEventListener("focusin",r),e.removeEventListener("focusout",a))}},[o,s,e]),w`
		<slot name="button" @click=${$}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${N}
			@select=${h}
			${x(r=>r&&(n.current=r))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",y(H,{styleSheets:[S],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{E as e,T as i,x as n,C as t};
