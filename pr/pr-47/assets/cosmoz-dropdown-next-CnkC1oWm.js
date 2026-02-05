import{e as y,r as w,A as T,c as H,a as k,u as G,d as P,b as M}from"./iframe-WnEBNH8H.js";const S=(e,t)=>y(()=>e,t);function x(e){return y(()=>({current:e}),[])}const N={ATTRIBUTE:1,CHILD:2},I=e=>(...t)=>({_$litDirective$:e,values:t});class z{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const c=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),c(s,t);return!0},h=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},L=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),U(t)}};function D(e){this._$AN!==void 0?(h(this),this._$AM=e,L(this)):this._$AM=e}function R(e,t=!1,o=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let i=o;i<s.length;i++)c(s[i],!1),h(s[i]);else s!=null&&(c(s,!1),h(s));else c(this,e)}const U=e=>{e.type==N.CHILD&&(e._$AP??=R,e._$AQ??=D)};class F extends z{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),L(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(c(this,t),h(this))}setValue(t){if(w(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const p=new WeakMap,O=I(class extends F{render(e){return T}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=p.get(t);o===void 0&&(o=new WeakMap,p.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?p.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Y=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of s){const i=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},q=H`
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
`,W=e=>{const{placement:t="bottom span-right",hover:o}=e,[s,r]=G(),i=x({hoveringHost:!1,hoveringPopover:!1,focusedHost:!1}),b=S(n=>{const a=n;a!==s&&r(a)},[s]),u=()=>{s?.showPopover()},d=()=>{s?.hidePopover()},C=()=>{s?.togglePopover()};return P(()=>{if(!o||!s)return;const n=i.current,a=()=>{n.closeTimeout=setTimeout(()=>{!n.hoveringHost&&!n.hoveringPopover&&!n.focusedHost&&d()},100)},v=()=>{clearTimeout(n.closeTimeout),n.hoveringHost=!0,u()},f=()=>{n.hoveringHost=!1,a()},m=()=>{clearTimeout(n.closeTimeout),n.focusedHost=!0,u()},$=()=>{n.focusedHost=!1,a()},g=()=>{clearTimeout(n.closeTimeout),n.hoveringPopover=!0},_=()=>{n.hoveringPopover=!1,a()},A=E=>{const l=E.target;E.newState==="open"?(l.addEventListener("pointerenter",g),l.addEventListener("pointerleave",_)):(l.removeEventListener("pointerenter",g),l.removeEventListener("pointerleave",_),n.hoveringPopover=!1)};return e.addEventListener("pointerenter",v),e.addEventListener("pointerleave",f),e.addEventListener("focusin",m),e.addEventListener("focusout",$),s.addEventListener("toggle",A),()=>{clearTimeout(n.closeTimeout),e.removeEventListener("pointerenter",v),e.removeEventListener("pointerleave",f),e.removeEventListener("focusin",m),e.removeEventListener("focusout",$),s.removeEventListener("toggle",A)}},[o,e,s]),M`
		<slot name="button" @click=${C}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${Y}
			@select=${d}
			${O(b)}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",k(W,{styleSheets:[q],observedAttributes:["placement","hover"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{I as e,z as i,O as n,N as t,S as u};
