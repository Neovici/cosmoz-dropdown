import{u as $,r as m,A as u,c as _,a as A,f as g,e as y,b}from"./iframe-DoqgaviG.js";function w(s){return $(()=>({current:s}),[])}const C={ATTRIBUTE:1,CHILD:2},E=s=>(...t)=>({_$litDirective$:s,values:t});class T{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const a=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const o of e)o._$AO?.(t,!1),a(o,t);return!0},p=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},f=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),k(t)}};function G(s){this._$AN!==void 0?(p(this),this._$AM=s,f(this)):this._$AM=s}function L(s,t=!1,e=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let n=e;n<o.length;n++)a(o[n],!1),p(o[n]);else o!=null&&(a(o,!1),p(o));else a(this,s)}const k=s=>{s.type==C.CHILD&&(s._$AP??=L,s._$AQ??=G)};class M extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),f(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(a(this,t),p(this))}setValue(t){if(m(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const d=new WeakMap,x=E(class extends M{render(s){return u}update(s,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),u}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=d.get(t);e===void 0&&(e=new WeakMap,d.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?d.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),N=s=>{if(s.newState!=="open")return;const o=s.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of o){const n=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},S=_`
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
`,H=({placement:s="bottom span-right",hover:t=!1})=>{const e=g(),o=w(),i=()=>{o.current?.showPopover()},n=()=>{o.current?.hidePopover()},v=()=>{o.current?.togglePopover()};return y(()=>{if(!t)return;let r;const c=()=>{clearTimeout(r),i()},l=()=>{r=setTimeout(n,100)};e.addEventListener("pointerenter",c),e.addEventListener("pointerleave",l);const h=o.current;return h?.addEventListener("pointerenter",c),h?.addEventListener("pointerleave",l),()=>{clearTimeout(r),e.removeEventListener("pointerenter",c),e.removeEventListener("pointerleave",l),h?.removeEventListener("pointerenter",c),h?.removeEventListener("pointerleave",l)}},[t,e]),b`
		<slot name="button" @click=${v}></slot>
		<div
			popover
			style="position-area: ${s}"
			@toggle=${N}
			@select=${n}
			${x(r=>{o.current=r})}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",A(H,{styleSheets:[S],observedAttributes:["placement","hover"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{E as e,T as i,x as n,C as t};
