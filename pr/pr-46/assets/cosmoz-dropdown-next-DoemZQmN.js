import{e as p,r as d,A as l,c as u,a as f,b as $}from"./iframe-DCH9ByOY.js";function v(e){return p(()=>({current:e}),[])}const _={ATTRIBUTE:1,CHILD:2},A=e=>(...t)=>({_$litDirective$:e,values:t});class m{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const r=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),r(o,t);return!0},a=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},h=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),b(t)}};function g(e){this._$AN!==void 0?(a(this),this._$AM=e,h(this)):this._$AM=e}function y(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)r(o[i],!1),a(o[i]);else o!=null&&(r(o,!1),a(o));else r(this,e)}const b=e=>{e.type==_.CHILD&&(e._$AP??=y,e._$AQ??=g)};class C extends m{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),h(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(r(this,t),a(this))}setValue(t){if(d(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const c=new WeakMap,w=A(class extends C{render(e){return l}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),l}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=c.get(t);s===void 0&&(s=new WeakMap,c.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),G=e=>{if(e.newState!=="open")return;const o=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of o){const i=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},k=u`
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
`,M=({placement:e="bottom span-right"})=>{const t=v();return $`
		<slot name="button" @click=${()=>{t.current?.togglePopover()}}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${G}
			@select=${()=>{t.current?.hidePopover()}}
			${w(n=>{t.current=n})}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",f(M,{styleSheets:[k],observedAttributes:["placement"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{A as e,m as i,w as n,_ as t,v as u};
