import{e as g,r as k,A as _,d as v,c as G,a as S,f as L,b as $}from"./iframe-wAbPsJ_l.js";const f=(e,o)=>g(()=>e,o);function w(e){return g(()=>({current:e}),[])}const M={ATTRIBUTE:1,CHILD:2},x=e=>(...o)=>({_$litDirective$:e,values:o});class N{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,t,s){this._$Ct=o,this._$AM=t,this._$Ci=s}_$AS(o,t){return this.update(o,t)}update(o,t){return this.render(...t)}}const h=(e,o)=>{const t=e._$AN;if(t===void 0)return!1;for(const s of t)s._$AO?.(o,!1),h(s,o);return!0},m=e=>{let o,t;do{if((o=e._$AM)===void 0)break;t=o._$AN,t.delete(e),e=o}while(t?.size===0)},C=e=>{for(let o;o=e._$AM;e=o){let t=o._$AN;if(t===void 0)o._$AN=t=new Set;else if(t.has(e))break;t.add(e),P(o)}};function z(e){this._$AN!==void 0?(m(this),this._$AM=e,C(this)):this._$AM=e}function I(e,o=!1,t=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(o)if(Array.isArray(s))for(let n=t;n<s.length;n++)h(s[n],!1),m(s[n]);else s!=null&&(h(s,!1),m(s));else h(this,e)}const P=e=>{e.type==M.CHILD&&(e._$AP??=I,e._$AQ??=z)};class D extends N{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,t,s){super._$AT(o,t,s),C(this),this.isConnected=o._$AU}_$AO(o,t=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),t&&(h(this,o),m(this))}setValue(o){if(k(this._$Ct))this._$Ct._$AI(o,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=o,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const A=new WeakMap,H=x(class extends D{render(e){return _}update(e,[o]){const t=o!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=o,this.ht=e.options?.host,this.rt(this.ct=e.element)),_}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const o=this.ht??globalThis;let t=A.get(o);t===void 0&&(t=new WeakMap,A.set(o,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?A.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),R=({host:e,popoverRef:o,disabled:t,openOnHover:s,openOnFocus:i,open:n,close:a})=>{const l=w(),u=()=>clearTimeout(l.current),c=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const d=o.current;s&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||a()},100)},p=()=>{t||(u(),n())};return v(()=>{if(!(!s||t))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",c),()=>{u(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",c)}},[s,t,e]),v(()=>{if(!(!i||t))return e.addEventListener("focusin",p),e.addEventListener("focusout",c),()=>{u(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",c)}},[i,t,e]),{scheduleClose:c,cancelClose:u}},U=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const n=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},O=G`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
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
`,Y=e=>{const{placement:o="bottom span-right",disabled:t,passthrough:s,openOnHover:i,openOnFocus:n}=e,a=w(),[l,u]=L("opened",!1),c=f(()=>{t||(u(!0),a.current?.showPopover())},[t]),p=f(()=>{u(!1),a.current?.hidePopover()},[]),d=f(()=>{if(t)return;a.current?.matches(":popover-open")?p():c()},[t]);v(()=>{const r=a.current;r&&(l?r.showPopover():r.hidePopover())},[l]),v(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:y,cancelClose:b}=R({host:e,popoverRef:a,disabled:t,openOnHover:i,openOnFocus:n,open:c,close:p}),E=n?c:d,T=f(r=>{U(r),u(r.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:r.newState,oldState:r.oldState,composed:!0}))},[]);return $`
		<slot name="button" @click=${E}></slot>
		${t&&s?$`<slot></slot>`:$`<div
					popover
					style="position-area: ${o}"
					@toggle=${T}
					@select=${p}
					@focusout=${y}
					@focusin=${b}
					${H(r=>r&&(a.current=r))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",S(Y,{styleSheets:[O],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{f as a,x as e,N as i,H as n,M as t,w as u};
