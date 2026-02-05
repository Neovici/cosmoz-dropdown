import{e as A,r as C,A as _,c as w,a as L,u as k,d as G,b as P}from"./iframe-DowZj-MQ.js";const H=(e,t)=>A(()=>e,t);function M(e){return A(()=>({current:e}),[])}const S={ATTRIBUTE:1,CHILD:2},x=e=>(...t)=>({_$litDirective$:e,values:t});class N{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const l=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),l(s,t);return!0},h=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},E=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),D(t)}};function I(e){this._$AN!==void 0?(h(this),this._$AM=e,E(this)):this._$AM=e}function z(e,t=!1,o=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let i=o;i<s.length;i++)l(s[i],!1),h(s[i]);else s!=null&&(l(s,!1),h(s));else l(this,e)}const D=e=>{e.type==S.CHILD&&(e._$AP??=z,e._$AQ??=I)};class R extends N{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),E(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(l(this,t),h(this))}setValue(t){if(C(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const p=new WeakMap,U=x(class extends R{render(e){return _}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),_}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=p.get(t);o===void 0&&(o=new WeakMap,p.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?p.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Y=e=>{if(e.newState!=="open")return;const s=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of s){const i=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},q=w`
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
`,O=e=>{const{placement:t="bottom span-right",hover:o}=e,[s,r]=k(),i=M({hoveringHost:!1,hoveringPopover:!1}),y=H(n=>{const a=n;a!==s&&r(a)},[s]),T=()=>{s?.showPopover()},d=()=>{s?.hidePopover()},b=()=>{s?.togglePopover()};return G(()=>{if(!o||!s)return;const n=i.current,a=()=>{n.closeTimeout=setTimeout(()=>{!n.hoveringHost&&!n.hoveringPopover&&d()},100)},v=()=>{clearTimeout(n.closeTimeout),n.hoveringHost=!0,T()},u=()=>{n.hoveringHost=!1,a()},f=()=>{clearTimeout(n.closeTimeout),n.hoveringPopover=!0},m=()=>{n.hoveringPopover=!1,a()},$=g=>{const c=g.target;g.newState==="open"?(c.addEventListener("pointerenter",f),c.addEventListener("pointerleave",m)):(c.removeEventListener("pointerenter",f),c.removeEventListener("pointerleave",m),n.hoveringPopover=!1)};return e.addEventListener("pointerenter",v),e.addEventListener("pointerleave",u),s.addEventListener("toggle",$),()=>{clearTimeout(n.closeTimeout),e.removeEventListener("pointerenter",v),e.removeEventListener("pointerleave",u),s.removeEventListener("toggle",$)}},[o,e,s]),P`
		<slot name="button" @click=${b}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${Y}
			@select=${d}
			${U(y)}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",L(O,{styleSheets:[q],observedAttributes:["placement","hover"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{x as e,N as i,U as n,S as t,H as u};
