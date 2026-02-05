import{e as y,r as H,A as T,c as k,a as G,u as P,d as M,b as S}from"./iframe-av8UXQT1.js";const x=(e,t)=>y(()=>e,t);function N(e){return y(()=>({current:e}),[])}const I={ATTRIBUTE:1,CHILD:2},O=e=>(...t)=>({_$litDirective$:e,values:t});class z{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const c=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),c(s,t);return!0},p=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},L=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),R(t)}};function D(e){this._$AN!==void 0?(p(this),this._$AM=e,L(this)):this._$AM=e}function F(e,t=!1,o=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let r=o;r<s.length;r++)c(s[r],!1),p(s[r]);else s!=null&&(c(s,!1),p(s));else c(this,e)}const R=e=>{e.type==I.CHILD&&(e._$AP??=F,e._$AQ??=D)};class U extends z{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),L(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(c(this,t),p(this))}setValue(t){if(H(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const u=new WeakMap,Y=O(class extends U{render(e){return T}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=u.get(t);o===void 0&&(o=new WeakMap,u.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?u.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),q=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},W=k`
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
`,B=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:s}=e,[i,r]=P(),b=N({hoveringHost:!1,hoveringPopover:!1,focusedHost:!1}),C=x(n=>{const a=n;a!==i&&r(a)},[i]),d=()=>{i?.showPopover()},h=()=>{i?.hidePopover()},w=()=>{i?.togglePopover()};return M(()=>{if(!o&&!s||!i)return;const n=b.current,a=()=>{n.closeTimeout=setTimeout(()=>{!n.hoveringHost&&!n.hoveringPopover&&!n.focusedHost&&h()},100)},v=()=>{clearTimeout(n.closeTimeout),n.hoveringHost=!0,d()},f=()=>{n.hoveringHost=!1,a()},m=()=>{clearTimeout(n.closeTimeout),n.focusedHost=!0,d()},$=()=>{n.focusedHost=!1,a()},g=()=>{clearTimeout(n.closeTimeout),n.hoveringPopover=!0},_=()=>{n.hoveringPopover=!1,a()},A=E=>{const l=E.target;E.newState==="open"?(l.addEventListener("pointerenter",g),l.addEventListener("pointerleave",_)):(l.removeEventListener("pointerenter",g),l.removeEventListener("pointerleave",_),n.hoveringPopover=!1)};return o&&(e.addEventListener("pointerenter",v),e.addEventListener("pointerleave",f),i.addEventListener("toggle",A)),s&&(e.addEventListener("focusin",m),e.addEventListener("focusout",$)),()=>{clearTimeout(n.closeTimeout),o&&(e.removeEventListener("pointerenter",v),e.removeEventListener("pointerleave",f),i.removeEventListener("toggle",A)),s&&(e.removeEventListener("focusin",m),e.removeEventListener("focusout",$))}},[o,s,e,i]),S`
		<slot name="button" @click=${w}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${q}
			@select=${h}
			${Y(C)}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",G(B,{styleSheets:[W],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{O as e,z as i,Y as n,I as t,x as u};
