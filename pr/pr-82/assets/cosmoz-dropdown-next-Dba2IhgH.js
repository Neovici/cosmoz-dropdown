import{B as J,d as V,e as q,c as N,r as X,D as K,A as T,b as z,a as k,u as tt,E as U,f as et}from"./iframe--w8rjZhC.js";const H=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ot=t=>t?.map(e=>typeof e=="string"?H(e):e),rt=(t,...e)=>t.flatMap((o,r)=>[o,e[r]||""]).join(""),A=rt,nt=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function st(t){class e extends J{frag;renderResult;constructor(n,i,d){super(n,d||i),this.frag=i}commit(n){this.renderResult=t(n,this.frag)}}function o(r,n,i){const d=(i||n||{}).baseElement||HTMLElement,{observedAttributes:u=[],useShadowDOM:h=!0,shadowRootInit:m={},styleSheets:y}=i||n||{},a=ot(r.styleSheets||y);class f extends d{_scheduler;static get observedAttributes(){return r.observedAttributes||u||[]}constructor(){if(super(),h===!1)this._scheduler=new e(r,this);else{const l=this.attachShadow({mode:"open",...m});a&&(l.adoptedStyleSheets=a),this._scheduler=new e(r,l,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(l,p,b){if(p===b)return;let v=b===""?!0:b;Reflect.set(this,nt(l),v)}}function c(g){let l=g,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return l},set(b){p&&l===b||(p=!0,l=b,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(d.prototype,{getPrototypeOf(g){return g},set(g,l,p,b){let v;return l in g?(v=Object.getOwnPropertyDescriptor(g,l),v&&v.set?(v.set.call(b,p),b._scheduler?.update(),!0):(Reflect.set(g,l,p,b),b._scheduler?.update(),!0)):(typeof l=="symbol"||l[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:p}:v=c(p),Object.defineProperty(b,l,v),v.set&&v.set.call(b,p),!0)}});return Object.setPrototypeOf(f.prototype,w),f}return o}function it(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(q,this)}disconnectedCallback(){this.removeEventListener(q,this)}handleEvent(r){const{detail:n}=r;n.Context===o&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let n of this.listeners)n(r)}get value(){return this._value}},Consumer:t(function({render:r}){const n=V(o);return r(n)},{useShadowDOM:!1}),defaultValue:e};return o}}const $=(t,e)=>N(()=>t,e);function at(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function E(t){return N(()=>at(t),[])}function ct({render:t}){const e=st(t),o=it(e);return{component:e,createContext:o}}const lt={ATTRIBUTE:1,CHILD:2},F=t=>(...e)=>({_$litDirective$:t,values:e});class dt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}const C=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const r of o)r._$AO?.(e,!1),C(r,e);return!0},I=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Z=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),pt(e)}};function ut(t){this._$AN!==void 0?(I(this),this._$AM=t,Z(this)):this._$AM=t}function ht(t,e=!1,o=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let i=o;i<r.length;i++)C(r[i],!1),I(r[i]);else r!=null&&(C(r,!1),I(r));else C(this,t)}const pt=t=>{t.type==lt.CHILD&&(t._$AP??=ht,t._$AQ??=ut)};class Y extends dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),Z(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(C(this,e),I(this))}setValue(e){if(X(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:M}=ct({render:K}),B=H(A`
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
`),j=new WeakMap,O=F(class extends Y{render(t){return T}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),T}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=j.get(e);o===void 0&&(o=new WeakMap,j.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?j.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function L(t,e,o){return t?e(t):o?.(t)}const vt=A`
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
`;customElements.define("cosmoz-tooltip-content",M(()=>z`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[B,vt]}));const G=H(A`
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
`),Q=(t,e,o)=>K(z`<cosmoz-tooltip-content>
			${L(e,()=>z`<strong slot="heading">${e}</strong>`)}
			${L(o,()=>z`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),bt=(t,e)=>{const{for:o,heading:r,description:n,placement:i="top",delay:d=300,disabled:u=!1}=e,h=E(),y=!!(r||n)&&!u;k(()=>{if(!o||!y)return;const a=t.getRootNode(),f=a.adoptedStyleSheets??[];f.includes(G)||(a.adoptedStyleSheets=[...f,G]);const c=document.createElement("div");c.setAttribute("popover","manual"),c.setAttribute("role","tooltip"),c.classList.add("cosmoz-tooltip-popover"),t.after(c),h.current=c,Q(c,r,n);const w=`[name="${o}"]`,g=`--tooltip-anchor-${o}`;let l;const p=s=>{u||(clearTimeout(l),s.style.anchorName=g,c.style.positionAnchor=g,c.style.positionArea=i,l=window.setTimeout(()=>c.showPopover(),d))},b=()=>{clearTimeout(l),c.hidePopover()},v=s=>{const x=s.target.closest?.(w);x&&p(x)},R=s=>{const x=s.target.closest?.(w);if(!x)return;const S=s.relatedTarget;S&&x.contains(S)||b()},P=s=>{const x=s.target.closest?.(w);x&&p(x)},D=s=>{s.target.closest?.(w)&&b()};return a.addEventListener("pointerover",v),a.addEventListener("pointerout",R),a.addEventListener("focusin",P),a.addEventListener("focusout",D),()=>{clearTimeout(l),a.removeEventListener("pointerover",v),a.removeEventListener("pointerout",R),a.removeEventListener("focusin",P),a.removeEventListener("focusout",D),c.hidePopover(),c.remove(),h.current=void 0}},[o,i,d,y]),k(()=>{!o||!h.current||Q(h.current,r,n)},[r,n,o]),k(()=>{!u||!h.current||h.current.hidePopover()},[u])},ft=t=>{const[e,o]=tt(!1);return k(()=>{const r=t.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[t.current]),e},gt=A`
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
`,mt=t=>{const{heading:e,description:o,for:r,placement:n="top",delay:i=300,disabled:d=!1}=t,u=E(),h=E(),m=E(),y=ft(m),f=!!(e||o||y)&&!d,c=$(()=>{f&&(clearTimeout(h.current),h.current=window.setTimeout(()=>{u.current?.showPopover()},i))},[i,f]);k(()=>{d&&(clearTimeout(h.current),u.current?.hidePopover())},[d]);const w=$(()=>{clearTimeout(h.current),u.current?.hidePopover()},[]);return k(()=>{if(r)return;const g=l=>{const p=l.relatedTarget;p&&t.contains(p)||w()};return t.addEventListener("pointerover",c),t.addEventListener("pointerout",g),()=>{t.removeEventListener("pointerover",c),t.removeEventListener("pointerout",g)}},[r,c,w]),bt(t,{for:r,heading:e,description:o,placement:n,delay:i,disabled:d}),r?T:f?z`
		<slot @focusin=${c} @focusout=${w}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${O(u)}
		>
			<cosmoz-tooltip-content>
				${L(e,()=>z`<strong slot="heading">${e}</strong>`)}
				${L(o,()=>z`<p slot="description">${o}</p>`)}
				<slot name="content" ${O(m)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:z`
			<slot></slot>
			<slot name="content" ${O(m)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",M(mt,{styleSheets:[B,G,gt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const _=t=>t??T,zt=A`
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
`,yt=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","aria-pressed"],wt=t=>{const{disabled:e=!1,tooltip:o,tooltipPlacement:r,type:n="button",href:i,target:d,rel:u,download:h}=t,m=!!e;k(()=>{const f=c=>{t.disabled&&c.stopImmediatePropagation()};return t.addEventListener("click",f,{capture:!0}),()=>t.removeEventListener("click",f,{capture:!0})},[t.disabled]);const y=z`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,a=L(i!=null,()=>z`
			<a
				href=${i}
				class="button"
				part="button"
				aria-disabled=${m?"true":T}
				aria-expanded=${_(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${_(t.getAttribute("aria-label")??void 0)}
				target=${_(d)}
				rel=${_(u)}
				download=${_(h)}
				>${y}</a
			>
		`,()=>z`
			<button
				type=${n}
				class="button"
				part="button"
				?disabled=${m}
				aria-expanded=${_(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${_(t.getAttribute("aria-label")??void 0)}
				aria-pressed=${_(t.getAttribute("aria-pressed")??void 0)}
			>
				${y}
			</button>
		`);return z`<cosmoz-tooltip
		heading=${_(o??void 0)}
		placement=${_(r??void 0)}
		?disabled=${m}
	>
		${a}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",M(wt,{observedAttributes:yt,styleSheets:[B,zt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));class xt extends Y{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[o]){this._ref=o;const r=e.element;this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=r,r.addEventListener("slotchange",this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}render(e){return U}}const W=F(xt),$t=(t,...e)=>typeof t=="function"?t(...e):t,kt=(t,e,o)=>{o==null?t.removeAttribute(e):t.setAttribute(e,o)},_t=(t,e)=>{for(const[o,r]of Object.entries(t))kt(e,o,$t(r,e))};class Et extends Y{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;const e=this._slot.assignedElements({flatten:!0});for(const o of e)_t(this._attrs,o)};#t=()=>this.#e();render(e){return U}update(e,[o]){this._attrs=o;const r=e.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#t),this._slot=r,r.addEventListener("slotchange",this.#t)),this.#e(),U}disconnected(){this._slot?.removeEventListener("slotchange",this.#t),this._slot=void 0}}const At=F(Et),St=t=>{const e=N(()=>({}),[]);return N(()=>Object.assign(e,t),[e,...Object.values(t)])},Ct=t=>{for(const e of t.current??[]){const o=e.matches("[autofocus]")?e:e.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},Tt=t=>{const{placement:e="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:i}=t,d=E(),[u,h]=et("opened",!1),m=E(),y=E(),a=St({disabled:o,openOnHover:n}),f=$(()=>{const s=m.current?.[0];return s instanceof HTMLElement?s:void 0},[]),c=$(()=>{a.disabled||(h(!0),d.current?.showPopover?.())},[]),w=$(()=>{h(!1),d.current?.hidePopover?.()},[]),g=$(()=>{d.current?.matches(":popover-open")?w():c()},[]),l=$(()=>{clearTimeout(a.closeTimeout)},[]),p=$(s=>{a.disabled||s.target===f()&&(l(),c())},[]),b=$(()=>{a.disabled||(l(),c())},[]),v=$(()=>{clearTimeout(a.closeTimeout),a.closeTimeout=setTimeout(()=>{const s=d.current;a.openOnHover&&(t.matches(":hover")||s?.matches(":hover"))||t.matches(":focus-within")||s?.matches(":focus-within")||w()},100)},[]),R=$(()=>{let s=document.activeElement;for(;s?.shadowRoot;)s=s.shadowRoot.activeElement;if(!(s==null||s===document.body||s.offsetParent==null))return;const S=f();S&&(t.removeEventListener("focusin",p),S.focus(),t.addEventListener("focusin",p))},[]),P=$(s=>{const x=s.newState==="open";h(x),x?Ct(y):R(),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:s.newState,oldState:s.oldState,composed:!0}))},[]);return k(()=>{const s=d.current;s&&(u?s.showPopover?.():s.hidePopover?.())},[u]),k(()=>{t.toggleAttribute("opened",!!u)},[u]),k(()=>{if(!(!i||o))return t.addEventListener("focusin",p),t.addEventListener("focusout",v),()=>{t.removeEventListener("focusin",p),t.removeEventListener("focusout",v)}},[i,o]),k(()=>{if(!(!n||o))return t.addEventListener("pointerenter",b),t.addEventListener("pointerleave",v),()=>{t.removeEventListener("pointerenter",b),t.removeEventListener("pointerleave",v)}},[n,o]),{placement:e,disabled:o,passthrough:r,opened:u,triggers:m,content:y,popoverRef:d,handleClick:i?c:g,onToggle:P,close:w,scheduleClose:v,cancelClose:l}},Lt=A`
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
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
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
`,Rt=({placement:t,disabled:e,passthrough:o,opened:r,triggers:n,content:i,popoverRef:d,handleClick:u,onToggle:h,close:m,scheduleClose:y,cancelClose:a})=>z`
		<slot
			name="button"
			${W(n)}
			${At({"aria-expanded":o?null:String(r),disabled:e&&!o?"":null})}
			@click=${u}
		></slot>
		${e&&o?z`<slot></slot>`:z`<div
					popover
					style="position-area: ${t}"
					@toggle=${h}
					@select=${m}
					@focusout=${y}
					@focusin=${a}
					${O(f=>f&&(d.current=f))}
				>
					<slot ${W(i)}></slot>
				</div>`}
	`,Pt=t=>Rt(Tt(t));customElements.define("cosmoz-dropdown-next",M(Pt,{styleSheets:[Lt],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));export{M as a,St as b,A as c,$ as d,F as e,dt as i,O as n,lt as t,E as u};
