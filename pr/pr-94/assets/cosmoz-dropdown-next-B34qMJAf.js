import{B as nt,d as st,e as J,c as H,r as it,D as tt,A as D,b as z,a as _,u as at,E as Y,f as ct}from"./iframe-DkhbHOpe.js";const q=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},lt=t=>t?.map(e=>typeof e=="string"?q(e):e),dt=(t,...e)=>t.flatMap((o,r)=>[o,e[r]||""]).join(""),T=dt,ut=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function ht(t){class e extends nt{frag;renderResult;constructor(n,c,d){super(n,d||c),this.frag=c}commit(n){this.renderResult=t(n,this.frag)}}function o(r,n,c){const d=(c||n||{}).baseElement||HTMLElement,{observedAttributes:u=[],useShadowDOM:h=!0,shadowRootInit:m={},styleSheets:y}=c||n||{},s=lt(r.styleSheets||y);class f extends d{_scheduler;static get observedAttributes(){return r.observedAttributes||u||[]}constructor(){if(super(),h===!1)this._scheduler=new e(r,this);else{const l=this.attachShadow({mode:"open",...m});s&&(l.adoptedStyleSheets=s),this._scheduler=new e(r,l,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(l,b,p){if(b===p)return;let v=p===""?!0:p;Reflect.set(this,ut(l),v)}}function a(g){let l=g,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return l},set(p){b&&l===p||(b=!0,l=p,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(d.prototype,{getPrototypeOf(g){return g},set(g,l,b,p){let v;return l in g?(v=Object.getOwnPropertyDescriptor(g,l),v&&v.set?(v.set.call(p,b),p._scheduler?.update(),!0):(Reflect.set(g,l,b,p),p._scheduler?.update(),!0)):(typeof l=="symbol"||l[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:b}:v=a(b),Object.defineProperty(p,l,v),v.set&&v.set.call(p,b),!0)}});return Object.setPrototypeOf(f.prototype,w),f}return o}function pt(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(J,this)}disconnectedCallback(){this.removeEventListener(J,this)}handleEvent(r){const{detail:n}=r;n.Context===o&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let n of this.listeners)n(r)}get value(){return this._value}},Consumer:t(function({render:r}){const n=st(o);return r(n)},{useShadowDOM:!1}),defaultValue:e};return o}}const $=(t,e)=>H(()=>t,e);function vt(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function C(t){return H(()=>vt(t),[])}function bt({render:t}){const e=ht(t),o=pt(e);return{component:e,createContext:o}}const ft={ATTRIBUTE:1,CHILD:2},Q=t=>(...e)=>({_$litDirective$:t,values:e});class gt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}const R=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const r of o)r._$AO?.(e,!1),R(r,e);return!0},j=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},et=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),yt(e)}};function mt(t){this._$AN!==void 0?(j(this),this._$AM=t,et(this)):this._$AM=t}function zt(t,e=!1,o=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let c=o;c<r.length;c++)R(r[c],!1),j(r[c]);else r!=null&&(R(r,!1),j(r));else R(this,t)}const yt=t=>{t.type==ft.CHILD&&(t._$AP??=zt,t._$AQ??=mt)};class W extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),et(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(R(this,e),j(this))}setValue(e){if(it(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:U}=bt({render:tt}),K=q(T`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),G=new WeakMap,N=Q(class extends W{render(t){return D}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),D}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=G.get(e);o===void 0&&(o=new WeakMap,G.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?G.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function I(t,e,o){return t?e(t):o?.(t)}const wt=T`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",U(()=>z`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[K,wt]}));const B=q(T`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),V=(t,e,o)=>tt(z`<cosmoz-tooltip-content>
			${I(e,()=>z`<strong slot="heading">${e}</strong>`)}
			${I(o,()=>z`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),xt=(t,e)=>{const{for:o,heading:r,description:n,placement:c="top",delay:d=300,disabled:u=!1}=e,h=C(),y=!!(r||n)&&!u;_(()=>{if(!o||!y)return;const s=t.getRootNode(),f=s.adoptedStyleSheets??[];f.includes(B)||(s.adoptedStyleSheets=[...f,B]);const a=document.createElement("div");a.setAttribute("popover","manual"),a.setAttribute("role","tooltip"),a.classList.add("cosmoz-tooltip-popover"),t.after(a),h.current=a,V(a,r,n);const w=`[name="${o}"]`,g=`--tooltip-anchor-${o}`;let l;const b=x=>{u||(clearTimeout(l),x.style.anchorName=g,a.style.positionAnchor=g,a.style.positionArea=c,l=window.setTimeout(()=>a.showPopover(),d))},p=()=>{clearTimeout(l),a.hidePopover()},v=x=>{const k=x.target.closest?.(w);k&&b(k)},L=x=>{const k=x.target.closest?.(w);if(!k)return;const M=x.relatedTarget;M&&k.contains(M)||p()},A=x=>{const k=x.target.closest?.(w);k&&b(k)},P=x=>{x.target.closest?.(w)&&p()};return s.addEventListener("pointerover",v),s.addEventListener("pointerout",L),s.addEventListener("focusin",A),s.addEventListener("focusout",P),()=>{clearTimeout(l),s.removeEventListener("pointerover",v),s.removeEventListener("pointerout",L),s.removeEventListener("focusin",A),s.removeEventListener("focusout",P),a.hidePopover(),a.remove(),h.current=void 0}},[o,c,d,y]),_(()=>{!o||!h.current||V(h.current,r,n)},[r,n,o]),_(()=>{!u||!h.current||h.current.hidePopover()},[u])},$t=t=>{const[e,o]=at(!1);return _(()=>{const r=t.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[t.current]),e},kt=T`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,_t=t=>{const{heading:e,description:o,for:r,placement:n="top",delay:c=300,disabled:d=!1}=t,u=C(),h=C(),m=C(),y=$t(m),f=!!(e||o||y)&&!d,a=$(()=>{f&&(clearTimeout(h.current),h.current=window.setTimeout(()=>{u.current?.showPopover()},c))},[c,f]);_(()=>{d&&(clearTimeout(h.current),u.current?.hidePopover())},[d]);const w=$(()=>{clearTimeout(h.current),u.current?.hidePopover()},[]);return _(()=>{if(r)return;const g=l=>{const b=l.relatedTarget;b&&t.contains(b)||w()};return t.addEventListener("pointerover",a),t.addEventListener("pointerout",g),()=>{t.removeEventListener("pointerover",a),t.removeEventListener("pointerout",g)}},[r,a,w]),xt(t,{for:r,heading:e,description:o,placement:n,delay:c,disabled:d}),r?D:f?z`
		<slot @focusin=${a} @focusout=${w}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${N(u)}
		>
			<cosmoz-tooltip-content>
				${I(e,()=>z`<strong slot="heading">${e}</strong>`)}
				${I(o,()=>z`<p slot="description">${o}</p>`)}
				<slot name="content" ${N(m)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:z`
			<slot></slot>
			<slot name="content" ${N(m)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",U(_t,{styleSheets:[K,B,kt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const E=t=>t??D,Et=T`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: calc(var(--cz-spacing) * 1) calc(var(--cz-spacing) * 2.5);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		border-radius: var(--cz-radius-sm);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * ICON ONLY
	 * ======================================== */

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		height: var(--cz-control-height-md);
		padding: calc(var(--cz-spacing) * 1.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
		height: var(--cz-control-height-sm);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
		height: var(--cz-control-height-lg);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
		height: var(--cz-control-height-xl);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only]) ::slotted(svg) {
		width: 20px;
		height: 20px;
	}

	:host([icon-only][size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	/* ========================================
	 * BUTTON BASE STYLES
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease,
			transform 0.1s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) default size */
		height: var(--cz-control-height-md);
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 3);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active:not(:disabled) {
			transform: translateY(1px);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-xs);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
			transform: none;
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * ICON ONLY COLORS (Untitled UI utility button)
	 * ======================================== */

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);
	}

	:host([icon-only][variant='secondary']:not([disabled]):hover) .button,
	:host([icon-only][variant='secondary']) .button:hover,
	:host([icon-only][variant='tertiary']:not([disabled]):hover) .button,
	:host([icon-only][variant='tertiary']) .button:hover {
		color: var(--cz-color-text-secondary);
	}

	/* ========================================
	 * PRESSED / SELECTED STATE (aria-pressed)
	 * Quiet variants (secondary, tertiary) shift to the selected brand
	 * chip; primary and destructive stay solid but visually "sink" with
	 * an inset shadow; link emphasizes text with no surface change.
	 * ======================================== */

	:host([aria-pressed='true']) .button {
		box-shadow: var(--cz-shadow-pressed-3d);
	}

	:host([variant='secondary'][aria-pressed='true']) .button {
		box-shadow:
			var(--cz-shadow-pressed-3d),
			inset 0 0 0 1px
				light-dark(var(--cz-color-brand-300), var(--cz-color-brand-500));
	}

	:host([aria-pressed='true']) .button {
		background-color: light-dark(
			var(--cz-color-brand-50),
			var(--cz-color-brand-900)
		);
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			background-color: light-dark(
				var(--cz-color-brand-100),
				var(--cz-color-brand-800)
			);
		}
	}

	/* Overrides the muted icon-only colors above (higher specificity). */
	:host([icon-only][variant='secondary'][aria-pressed='true']) .button,
	:host([icon-only][variant='tertiary'][aria-pressed='true']) .button {
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-200));
		}
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}
	}

	:host([variant='destructive'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-error-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}
	}

	:host([variant='link'][aria-pressed='true']) .button {
		background-color: transparent;
		box-shadow: none;
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));
		text-decoration: underline;

		&:hover {
			background-color: transparent;
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`,At=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","aria-pressed"],St=t=>{const{disabled:e=!1,tooltip:o,tooltipPlacement:r,type:n="button",href:c,target:d,rel:u,download:h}=t,m=!!e;_(()=>{const f=a=>{t.disabled&&a.stopImmediatePropagation()};return t.addEventListener("click",f,{capture:!0}),()=>t.removeEventListener("click",f,{capture:!0})},[t.disabled]);const y=z`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,s=I(c!=null,()=>z`
			<a
				href=${c}
				class="button"
				part="button"
				aria-disabled=${m?"true":D}
				aria-expanded=${E(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${E(t.getAttribute("aria-label")??void 0)}
				target=${E(d)}
				rel=${E(u)}
				download=${E(h)}
				>${y}</a
			>
		`,()=>z`
			<button
				type=${n}
				class="button"
				part="button"
				?disabled=${m}
				aria-expanded=${E(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${E(t.getAttribute("aria-label")??void 0)}
				aria-pressed=${E(t.getAttribute("aria-pressed")??void 0)}
			>
				${y}
			</button>
		`);return z`<cosmoz-tooltip
		heading=${E(o??void 0)}
		placement=${E(r??void 0)}
		?disabled=${m}
	>
		${s}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",U(St,{observedAttributes:At,styleSheets:[K,Et],shadowRootInit:{mode:"open",delegatesFocus:!0}}));class Ct extends W{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[o]){this._ref=o;const r=e.element;this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=r,r.addEventListener("slotchange",this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}render(e){return Y}}const X=Q(Ct),Tt=(t,...e)=>typeof t=="function"?t(...e):t,Lt=(t,e,o)=>{o==null?t.removeAttribute(e):t.setAttribute(e,o)},Pt=(t,e)=>{for(const[o,r]of Object.entries(t))Lt(e,o,Tt(r,e))};class Ot extends W{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const o of e)Pt(this._attrs,o)};#t=()=>this.#e();render(e){return Y}update(e,[o]){this._attrs=o;const r=e.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=r,r.addEventListener("slotchange",this.#t)),this.#e(),Y}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const Rt=Q(Ot),Dt=t=>{const e=H(()=>({}),[]);return H(()=>Object.assign(e,t),[e,...Object.values(t)])},O=150,It=O+100,Mt=t=>{for(const e of t.current??[]){const o=e.matches("[autofocus]")?e:e.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},Nt=t=>{const{placement:e="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:c}=t,d=C(),[u,h]=ct("opened",!1),m=C(),y=C(),s=Dt({disabled:o,openOnHover:n}),f=$(()=>{const i=m.current?.[0];return i instanceof HTMLElement?i:void 0},[]),a=$(()=>{s.disabled||(h(!0),d.current?.showPopover?.())},[]),w=$(()=>{h(!1),d.current?.hidePopover?.()},[]),g=()=>!!d.current?.matches(":popover-open"),l=$(()=>{s.openAtPointerDown=g()},[]),b=$(i=>{const S=i.composedPath();if(S.some(F=>F instanceof HTMLLabelElement&&F.control&&!S.includes(F.control)))return;const Z=s.openAtPointerDown;s.openAtPointerDown=void 0;const rt=s.openOnHover&&Z!==void 0;(Z??g())&&!rt?w():a()},[]),p=$(()=>{clearTimeout(s.closeTimeout)},[]),v=$(i=>{s.disabled||i.target===f()&&(p(),a())},[]),L=$(()=>{s.disabled||(p(),a())},[]),A=$(()=>{clearTimeout(s.closeTimeout),s.closeTimeout=setTimeout(()=>{const i=d.current;s.openOnHover&&(t.matches(":hover")||i?.matches(":hover"))||(s.openOnHover?t.matches(":has(:focus-visible)"):t.matches(":focus-within")||i?.matches(":focus-within"))||w()},100)},[]),P=()=>{const i=f();i&&(t.removeEventListener("focusin",v),i.focus(),t.addEventListener("focusin",v))},x=i=>i==null||i===document.body||i.offsetParent==null,k=()=>{let i=document.activeElement;for(;i?.shadowRoot;)i=i.shadowRoot.activeElement;return i},M=$(()=>{if(x(k())){P();return}const i=performance.now(),S=()=>{if(!(performance.now()-i>It)){if(x(k()))return P();requestAnimationFrame(S)}};requestAnimationFrame(S)},[]),ot=$(i=>{const S=i.newState==="open";h(S),S?Mt(y):M(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:i.newState,oldState:i.oldState,composed:!0}))},[]);return _(()=>{const i=d.current;i&&(u?i.showPopover?.():i.hidePopover?.())},[u]),_(()=>{t.toggleAttribute("opened",!!u)},[u]),_(()=>{if(!(!c||o))return t.addEventListener("focusin",v),t.addEventListener("focusout",A),()=>{t.removeEventListener("focusin",v),t.removeEventListener("focusout",A)}},[c,o]),_(()=>{if(!(!n||o))return t.addEventListener("pointerenter",L),t.addEventListener("pointerleave",A),()=>{t.removeEventListener("pointerenter",L),t.removeEventListener("pointerleave",A)}},[n,o]),{placement:e,disabled:o,passthrough:r,opened:u,triggers:m,content:y,popoverRef:d,handlePointerDown:l,handleClick:b,onToggle:ot,close:w,scheduleClose:A,cancelClose:p}},Ht=T`
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

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity ${O}ms ease-out,
			transform ${O}ms ease-out,
			overlay ${O}ms ease-out allow-discrete,
			display ${O}ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,jt=({placement:t,disabled:e,passthrough:o,opened:r,triggers:n,content:c,popoverRef:d,handlePointerDown:u,handleClick:h,onToggle:m,close:y,scheduleClose:s,cancelClose:f})=>z`
		<slot
			name="button"
			${X(n)}
			${Rt({"aria-expanded":o?null:String(r),disabled:e&&!o?"":null})}
			@pointerdown=${u}
			@click=${h}
		></slot>
		${e&&o?z`<slot></slot>`:z`<div
					popover
					style="position-area: ${t}"
					@toggle=${m}
					@select=${y}
					@focusout=${s}
					@focusin=${f}
					${N(a=>a&&(d.current=a))}
				>
					<slot ${X(c)}></slot>
				</div>`}
	`,Ut=t=>jt(Nt(t));customElements.define("cosmoz-dropdown-next",U(Ut,{styleSheets:[Ht],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{U as a,Dt as b,T as c,$ as d,Q as e,gt as i,N as n,ft as t,C as u};
