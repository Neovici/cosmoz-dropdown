import{e as A,r as b,A as $,d as f,c as E,a as T,f as k,b as G}from"./iframe-CunIJhzw.js";const h=(e,t)=>A(()=>e,t);function _(e){return A(()=>({current:e}),[])}const S={ATTRIBUTE:1,CHILD:2},L=e=>(...t)=>({_$litDirective$:e,values:t});class M{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const p=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),p(s,t);return!0},v=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},g=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),z(t)}};function x(e){this._$AN!==void 0?(v(this),this._$AM=e,g(this)):this._$AM=e}function N(e,t=!1,o=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=o;r<s.length;r++)p(s[r],!1),v(s[r]);else s!=null&&(p(s,!1),v(s));else p(this,e)}const z=e=>{e.type==S.CHILD&&(e._$AP??=N,e._$AQ??=x)};class I extends M{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),g(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(p(this,t),v(this))}setValue(t){if(b(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const m=new WeakMap,P=L(class extends I{render(e){return $}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=m.get(t);o===void 0&&(o=new WeakMap,m.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?m.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),D=({host:e,popoverRef:t,openOnHover:o,openOnFocus:s,open:n,close:r})=>{const l=_(),a=()=>clearTimeout(l.current),c=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const d=t.current;o&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||r()},100)},u=()=>{a(),n()};return f(()=>{if(o)return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",c),()=>{a(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",c)}},[o,e]),f(()=>{if(s)return e.addEventListener("focusin",u),e.addEventListener("focusout",c),()=>{a(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",c)}},[s,e]),{scheduleClose:c,cancelClose:a}},H=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},R=E`
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
`,U=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,n=_(),[r,l]=k("opened",!1),a=h(()=>{l(!0),n.current?.showPopover()},[]),c=h(()=>{l(!1),n.current?.hidePopover()},[]),u=h(()=>{n.current?.matches(":popover-open")?c():a()},[]);f(()=>{const i=n.current;i&&(r?i.showPopover():i.hidePopover())},[r]),f(()=>{e.toggleAttribute("opened",!!r)},[r]);const{scheduleClose:d,cancelClose:w}=D({host:e,popoverRef:n,openOnHover:o,openOnFocus:s,open:a,close:c}),C=s?a:u,y=h(i=>{H(i),l(i.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))},[]);return G`
		<slot name="button" @click=${C}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${y}
			@select=${c}
			@focusout=${d}
			@focusin=${w}
			${P(i=>i&&(n.current=i))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",T(U,{styleSheets:[R],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{L as e,M as i,P as n,S as t,h as u};
