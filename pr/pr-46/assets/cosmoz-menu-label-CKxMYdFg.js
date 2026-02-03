import{h as M,K as C,f as A,d as y,u as z,g as p,M as N,i as S,j as _,k as L,l as U,e as E,c as w,b as g,a as $,n as I,m as D,A as v}from"./iframe-DCH9ByOY.js";import{u as G,n as T}from"./cosmoz-dropdown-next-DoemZQmN.js";const x=(e,r)=>{const t=M(C),o=A(e);y(()=>t(o),r)},V=({items:e,onSelect:r,host:t,itemsContainerRef:o})=>{const[s,n]=z(-1);y(()=>{n(-1)},[e]),y(()=>{if(s<0)return;o.current?.querySelector(`[data-index="${s}"]`)?.scrollIntoView({block:"nearest"})},[s,o]);const l=p((a,h)=>{const f=e.length;if(f===0)return-1;let d=a;d<0&&(d=h===1?-1:f);for(let k=0;k<f;k++)if(d=(d+h+f)%f,!e[d]?.disabled)return d;return-1},[e]),c=p(()=>{n(a=>l(a,1))},[l]),u=p(()=>{n(a=>l(a,-1))},[l]),i=p(()=>{const a=e.findIndex(h=>!h.disabled);n(a)},[e]),m=p(()=>{for(let a=e.length-1;a>=0;a--)if(!e[a].disabled){n(a);return}},[e]),b=p(()=>{if(s>=0&&s<e.length){const a=e[s];a&&!a.disabled&&r(a)}},[e,s,r]);return x({activity:N,callback:c,element:()=>t},[c,t]),x({activity:S,callback:u,element:()=>t},[u,t]),x({activity:_,callback:i,element:()=>t},[i,t]),x({activity:L,callback:m,element:()=>t},[m,t]),x({activity:U,callback:b,element:()=>t},[b,t]),{index:s,highlight:p(a=>n(a),[])}},H=(e,r)=>{if(!e)return Promise.resolve([]);const t=typeof e=="function"?e(r):e;return Promise.resolve(t).then(o=>o??[])},K=(e,r)=>{const[t,o]=z([]),[s,n]=z(!1),[l,c]=z(null);return y(()=>{let i=!1;return n(!0),c(null),H(e,r).then(m=>{i||o(m)}).catch(m=>{i||c(m?.message??"Failed to load items")}).finally(()=>{i||n(!1)}),()=>{i=!0}},[e,r]),{items:E(()=>{if(!r.trim())return t;const i=r.toLowerCase();return t.filter(m=>m.label.toLowerCase().includes(i))},[t,r]),loading:s,error:l}},P=w`
	:host {
		display: flex;
		flex-direction: column;
		min-width: 240px;
		max-width: 320px;
		max-height: var(--cosmoz-dropdown-menu-max-height, 400px);
		background: var(--cz-color-bg-primary, #fff);
		border-radius: var(--cz-radius-xl, 0.75rem);
		box-shadow: var(
			--cz-shadow-lg,
			0px 12px 16px -4px rgba(10, 13, 18, 0.08),
			0px 4px 6px -2px rgba(10, 13, 18, 0.03)
		);
		overflow: hidden;
		border: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}

	.search {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
		padding: calc(var(--cz-spacing, 0.25rem) * 3);
		border-bottom: 1px solid var(--cz-color-border-secondary, #eaecf0);
		position: relative;
		overflow: hidden;
	}

	.search::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--cz-color-brand-500, #7c3aed),
			transparent
		);
		opacity: 0;
		transform: translateX(-100%);
	}

	.search.loading::after {
		opacity: 1;
		animation: shimmer 1.5s infinite linear;
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.search-icon {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		color: var(--cz-color-fg-quaternary, #98a2b3);
	}

	.search-input {
		flex: 1;
		min-width: 0;
		border: none;
		outline: none;
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.5);
		color: var(--cz-color-text-primary, #101828);
		background: transparent;
	}

	.search-input::placeholder {
		color: var(--cz-color-text-placeholder, #667085);
	}

	.items {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.no-results {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.loading {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
	}

	.error {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-error, #dc2626);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.group-label {
		padding: calc(var(--cz-spacing, 0.25rem) * 1)
			calc(var(--cz-spacing, 0.25rem) * 3);
		font-size: var(--cz-text-xs, 0.75rem);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(--cz-color-text-tertiary, #475467);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.group:not(:first-child) {
		border-top: 1px solid var(--cz-color-border-secondary, #eaecf0);
		margin-top: calc(var(--cz-spacing, 0.25rem) * 2);
		padding-top: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	cosmoz-button[data-highlighted] {
		background: var(--cz-color-bg-primary-hover, #f9fafb);
	}

	/* Hide built-in focus ring, use fake highlighting instead */
	cosmoz-button::part(button):focus-visible {
		box-shadow: none;
		outline: none;
	}
`,X=g`
	<svg class="search-icon" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
			stroke="currentColor"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,j=({item:e,index:r,highlightedIndex:t,highlight:o,select:s})=>g`
	<cosmoz-button
		variant="tertiary"
		full-width
		role="menuitem"
		?disabled=${e.disabled}
		?data-highlighted=${r===t}
		data-index=${r}
		@mouseenter=${()=>o(r)}
		@click=${()=>!e.disabled&&s(e)}
		@mousedown=${n=>n.preventDefault()}
	>
		${e.icon??v}
		<cosmoz-menu-label>${e.label}</cosmoz-menu-label>
		${e.suffix??v}
	</cosmoz-button>
`,B=({grouped:e,items:r,highlightedIndex:t,highlight:o,select:s})=>{const n=new Map;return r.forEach((l,c)=>n.set(l,c)),Array.from(e.entries()).map(([l,c])=>{const u=c.map(i=>j({item:i,index:n.get(i)??-1,highlightedIndex:t,highlight:o,select:s}));return l?g`
				<div class="group">
					<div class="group-label">${l}</div>
					${u}
				</div>
			`:u})},F=e=>{const r=new Map;for(const t of e){const o=t.group||"";r.has(o)||r.set(o,[]),r.get(o).push(t)}return r},O=({source:e,searchable:r=!1,placeholder:t="Search..."})=>{const o=D(),s=G(),[n,l]=z(""),{items:c,loading:u,error:i}=K(e,n),m=E(()=>F(c),[c]),b=p(d=>{o.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:d}}))},[o]),{index:a,highlight:h}=V({items:c,onSelect:b,host:o,itemsContainerRef:s});y(()=>{o.setAttribute("role","menu")},[o]);const f=c.length>0;return g`
		${r?g`
					<div class="search${u?" loading":""}">
						${X}
						<input
							class="search-input"
							.value=${n}
							@input=${d=>l(d.target.value)}
							placeholder=${t}
							autofocus
						/>
					</div>
				`:v}

		<div
			class="items"
			${T(d=>{s.current=d})}
		>
			${i?g`<div class="error">${i}</div>`:v}
			${u&&c.length===0?g`<div class="loading">Loading...</div>`:v}
			${!u&&!f&&n.trim().length>0?g`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:v}
			${f?B({grouped:m,items:c,highlightedIndex:a,highlight:h,select:b}):v}
		</div>
	`};customElements.define("cosmoz-dropdown-menu-next",$(O,{styleSheets:[I,P],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const R=w`
	:host {
		display: inline-flex;
		align-items: center;
		font-size: var(--cz-text-xs, 0.75rem);
		color: var(--cz-color-text-tertiary, #475467);
		font-weight: var(--cz-font-weight-medium, 500);
		background: var(--cz-color-bg-tertiary, #f2f4f7);
		padding: calc(var(--cz-spacing, 0.25rem) / 2)
			calc(var(--cz-spacing, 0.25rem) * 1.5);
		border-radius: var(--cz-radius-sm, 0.375rem);
	}
`,Q=()=>g`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",$(Q,{styleSheets:[I,R]}));const W=w`
	:host {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
	}
`,Z=()=>g`<slot></slot>`;customElements.define("cosmoz-menu-label",$(Z,{styleSheets:[W]}));
