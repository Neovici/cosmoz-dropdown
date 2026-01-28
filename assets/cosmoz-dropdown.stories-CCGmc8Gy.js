import{r as xe,D as Ce,b as z,A as _t,E as At}from"./iframe-BvtFRfxO.js";let rt,ne=0;function Bt(t){rt=t}function Wt(){rt=null,ne=0}function _e(){return ne++}const bt=Symbol("haunted.phase"),ot=Symbol("haunted.hook"),Ht=Symbol("haunted.update"),jt=Symbol("haunted.commit"),I=Symbol("haunted.effects"),Q=Symbol("haunted.layoutEffects"),Et="haunted.context";class Ae{update;host;virtual;[ot];[I];[Q];constructor(e,n){this.update=e,this.host=n,this[ot]=new Map,this[I]=[],this[Q]=[]}run(e){Bt(this);let n=e();return Wt(),n}_runEffects(e){let n=this[e];Bt(this);for(let o of n)o.call(this);Wt()}runEffects(){this._runEffects(I)}runLayoutEffects(){this._runEffects(Q)}teardown(){this[ot].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const Ee=Promise.resolve().then.bind(Promise.resolve());function oe(){let t=[],e;function n(){e=null;let o=t;t=[];for(var s=0,r=o.length;s<r;s++)o[s]()}return function(o){t.push(o),e==null&&(e=Ee(n))}}const Se=oe(),Vt=oe();class ke{renderer;host;state;[bt];_updateQueued;_active;constructor(e,n){this.renderer=e,this.host=n,this.state=new Ae(this.update.bind(this),n),this[bt]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Se(()=>{let e=this.handlePhase(Ht);Vt(()=>{this.handlePhase(jt,e),Vt(()=>{this.handlePhase(I)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[bt]=e,e){case jt:this.commit(n),this.runEffects(Q);return;case Ht:return this.render();case I:return this.runEffects(I)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Oe=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Re=t=>t?.map(e=>typeof e=="string"?Oe(e):e),$e=(t,...e)=>t.flatMap((n,o)=>[n,e[o]||""]).join(""),Ot=$e,ze=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Le(t){class e extends ke{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function n(o,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:l=!0,shadowRootInit:a={},styleSheets:d}=r||s||{},u=Re(o.styleSheets||d);class h extends i{_scheduler;static get observedAttributes(){return o.observedAttributes||c||[]}constructor(){if(super(),l===!1)this._scheduler=new e(o,this);else{const p=this.attachShadow({mode:"open",...a});u&&(p.adoptedStyleSheets=u),this._scheduler=new e(o,p,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,m,v){if(m===v)return;let w=v===""?!0:v;Reflect.set(this,ze(p),w)}}function f(g){let p=g,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(v){m&&p===v||(m=!0,p=v,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(i.prototype,{getPrototypeOf(g){return g},set(g,p,m,v){let w;return p in g?(w=Object.getOwnPropertyDescriptor(g,p),w&&w.set?(w.set.call(v,m),!0):(Reflect.set(g,p,m,v),!0)):(typeof p=="symbol"||p[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:m}:w=f(m),Object.defineProperty(v,p,w),w.set&&w.set.call(v,m),!0)}});return Object.setPrototypeOf(h.prototype,b),h}return n}class N{id;state;constructor(e,n){this.id=e,this.state=n}}function Te(t,...e){let n=_e(),o=rt[ot],s=o.get(n);return s||(s=new t(n,rt,...e),o.set(n,s)),s.update(...e)}function B(t){return Te.bind(null,t)}function se(t){return B(class extends N{callback;lastValues;values;_teardown;constructor(e,n,o,s){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function re(t,e){t[I].push(e)}const Rt=se(re),Pe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,De=B(class extends N{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,re(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Pe(this.state.host).dispatchEvent(new CustomEvent(Et,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:s}=e;this.value=o?s:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ie(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Et,this)}disconnectedCallback(){this.removeEventListener(Et,this)}handleEvent(o){const{detail:s}=o;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let s of this.listeners)s(o)}get value(){return this._value}},Consumer:t(function({render:o}){const s=De(n);return o(s)},{useShadowDOM:!1}),defaultValue:e};return n}}const it=B(class extends N{value;values;constructor(t,e,n,o){super(t,e),this.value=n(),this.values=o}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),yt=(t,e)=>it(()=>t,e);function Fe(t,e){t[Q].push(e)}se(Fe);const st=B(class extends N{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});B(class extends N{reducer;currentState;constructor(t,e,n,o,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(o):o}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Me=/([A-Z])/gu;B(class extends N{property;eventName;constructor(t,e,n,o){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Me,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updateProp(o))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});B(class extends N{update(){return this.state.host}});function Ne({render:t}){const e=Le(t),n=Ie(e);return{component:e,createContext:n}}const ie={ATTRIBUTE:1,CHILD:2},$t=t=>(...e)=>({_$litDirective$:t,values:e});let zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const Y=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),Y(o,e);return!0},ct=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},ce=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),He(e)}};function Be(t){this._$AN!==void 0?(ct(this),this._$AM=t,ce(this)):this._$AM=t}function We(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)Y(o[r],!1),ct(o[r]);else o!=null&&(Y(o,!1),ct(o));else Y(this,t)}const He=t=>{t.type==ie.CHILD&&(t._$AP??=We,t._$AQ??=Be)};class je extends zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),ce(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Y(this,e),ct(this))}setValue(e){if(xe(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:ft}=Ne({render:Ce}),Ve=t=>{const e=it(()=>({}),[]);return it(()=>Object.assign(e,t),[e,...Object.values(t)])},Gt=t=>t.matches(":focus-within"),Ge=({disabled:t,onFocus:e})=>{const[n,o]=st(),{focused:s,closed:r}=n||{},i=s&&!t,c=Ve({closed:r,onFocus:e}),l=yt(d=>o(u=>({...u,closed:d})),[]),a=yt(d=>{const u=d.currentTarget;return Gt(u)?o(h=>({focused:!0,closed:!h?.closed})):u.focus()},[]);return Rt(()=>{if(!i)return;const d=u=>{if(u.defaultPrevented)return;const{closed:h}=c;u.key==="Escape"&&!h?(u.preventDefault(),l(!0)):["ArrowUp","Up"].includes(u.key)&&h&&(u.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:a,onFocus:yt(d=>{const u=Gt(d.currentTarget);o({focused:u}),c.onFocus?.(u)},[c])}},Ut=["focusin","focusout"],Ue=t=>{const e=Ge(t),{onFocus:n}=e;return Rt(()=>(t.setAttribute("tabindex","0"),Ut.forEach(o=>t.addEventListener(o,n)),()=>{Ut.forEach(o=>t.removeEventListener(o,n))}),[]),e},Xe=Ot`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,Qe=()=>z` <slot></slot> `;customElements.define("cosmoz-dropdown-list",ft(Qe,{styleSheets:[Xe]}));const Ye=({placement:t})=>z` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",ft(Ye));function qe(t,e,n){return t?e(t):n?.(t)}const xt=new WeakMap,Xt=$t(class extends je{render(t){return _t}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),_t}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=xt.get(e);n===void 0&&(n=new WeakMap,xt.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?xt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const le="important",Ze=" !"+le,Ke=$t(class extends zt{constructor(t){if(super(t),t.type!==ie.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(Ze);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?le:""):n[o]=s}}return At}});const Je={},tn=$t(class extends zt{constructor(){super(...arguments),this.ot=Je}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,s)=>o===this.ot[s]))return At}else if(this.ot===e)return At;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),en=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},nn=Ot`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,on=()=>z`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",en(ft(on,{styleSheets:[nn]})));const lt=Math.min,F=Math.max,at=Math.round,J=Math.floor,k=t=>({x:t,y:t}),sn={left:"right",right:"left",bottom:"top",top:"bottom"},rn={start:"end",end:"start"};function Qt(t,e,n){return F(t,lt(e,n))}function Lt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function Tt(t){return t.split("-")[1]}function ae(t){return t==="x"?"y":"x"}function ue(t){return t==="y"?"height":"width"}const cn=new Set(["top","bottom"]);function D(t){return cn.has(V(t))?"y":"x"}function de(t){return ae(D(t))}function ln(t,e,n){n===void 0&&(n=!1);const o=Tt(t),s=de(t),r=ue(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ut(i)),[i,ut(i)]}function an(t){const e=ut(t);return[St(t),e,St(e)]}function St(t){return t.replace(/start|end/g,e=>rn[e])}const Yt=["left","right"],qt=["right","left"],un=["top","bottom"],dn=["bottom","top"];function fn(t,e,n){switch(t){case"top":case"bottom":return n?e?qt:Yt:e?Yt:qt;case"left":case"right":return e?un:dn;default:return[]}}function hn(t,e,n,o){const s=Tt(t);let r=fn(V(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(St)))),r}function ut(t){return t.replace(/left|right|bottom|top/g,e=>sn[e])}function pn(t){return{top:0,right:0,bottom:0,left:0,...t}}function mn(t){return typeof t!="number"?pn(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function Zt(t,e,n){let{reference:o,floating:s}=t;const r=D(e),i=de(e),c=ue(i),l=V(e),a=r==="y",d=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,h=o[c]/2-s[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-s.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-s.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Tt(e)){case"start":f[i]-=h*(n&&a?-1:1);break;case"end":f[i]+=h*(n&&a?-1:1);break}return f}async function gn(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=Lt(e,t),b=mn(f),p=c[h?u==="floating"?"reference":"floating":u],m=dt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),v=u==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),y=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},_=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:w,strategy:l}):v);return{top:(m.top-_.top+b.top)/y.y,bottom:(_.bottom-m.bottom+b.bottom)/y.y,left:(m.left-_.left+b.left)/y.x,right:(_.right-m.right+b.right)/y.x}}const vn=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:u}=Zt(a,o,l),h=o,f={},b=0;for(let p=0;p<c.length;p++){var g;const{name:m,fn:v}=c[p],{x:w,y,data:_,reset:x}=await v({x:d,y:u,initialPlacement:o,placement:h,strategy:s,middlewareData:f,rects:a,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:gn},elements:{reference:t,floating:e}});d=w??d,u=y??u,f={...f,[m]:{...f[m],..._}},x&&b<=50&&(b++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(a=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:d,y:u}=Zt(a,h,l)),p=-1)}return{x:d,y:u,placement:h,strategy:s,middlewareData:f}},wn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...p}=Lt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const m=V(s),v=D(c),w=V(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),_=h||(w||!g?[ut(c)]:an(c)),x=b!=="none";!h&&x&&_.push(...hn(c,g,b,y));const W=[c,..._],vt=await l.detectOverflow(e,p),K=[];let H=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&K.push(vt[m]),u){const T=ln(s,i,y);K.push(vt[T[0]],vt[T[1]])}if(H=[...H,{placement:s,overflows:K}],!K.every(T=>T<=0)){var Ft,Mt;const T=(((Ft=r.flip)==null?void 0:Ft.index)||0)+1,wt=W[T];if(wt&&(!(u==="alignment"?v!==D(wt):!1)||H.every(A=>D(A.placement)===v?A.overflows[0]>0:!0)))return{data:{index:T,overflows:H},reset:{placement:wt}};let X=(Mt=H.filter(P=>P.overflows[0]<=0).sort((P,A)=>P.overflows[1]-A.overflows[1])[0])==null?void 0:Mt.placement;if(!X)switch(f){case"bestFit":{var Nt;const P=(Nt=H.filter(A=>{if(x){const $=D(A.placement);return $===v||$==="y"}return!0}).map(A=>[A.placement,A.overflows.filter($=>$>0).reduce(($,ye)=>$+ye,0)]).sort((A,$)=>A[1]-$[1])[0])==null?void 0:Nt[0];P&&(X=P);break}case"initialPlacement":X=c;break}if(s!==X)return{reset:{placement:X}}}return{}}}},bn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s,platform:r}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:m=>{let{x:v,y:w}=m;return{x:v,y:w}}},...a}=Lt(t,e),d={x:n,y:o},u=await r.detectOverflow(e,a),h=D(V(s)),f=ae(h);let b=d[f],g=d[h];if(i){const m=f==="y"?"top":"left",v=f==="y"?"bottom":"right",w=b+u[m],y=b-u[v];b=Qt(w,b,y)}if(c){const m=h==="y"?"top":"left",v=h==="y"?"bottom":"right",w=g+u[m],y=g-u[v];g=Qt(w,g,y)}const p=l.fn({...e,[f]:b,[h]:g});return{...p,data:{x:p.x-n,y:p.y-o,enabled:{[f]:i,[h]:c}}}}}};function ht(){return typeof window<"u"}function U(t){return fe(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function R(t){var e;return(e=(fe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fe(t){return ht()?t instanceof Node||t instanceof C(t).Node:!1}function E(t){return ht()?t instanceof Element||t instanceof C(t).Element:!1}function O(t){return ht()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function Kt(t){return!ht()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}const yn=new Set(["inline","contents"]);function Z(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!yn.has(s)}const xn=new Set(["table","td","th"]);function Cn(t){return xn.has(U(t))}const _n=[":popover-open",":modal"];function pt(t){return _n.some(e=>{try{return t.matches(e)}catch{return!1}})}const An=["transform","translate","scale","rotate","perspective"],En=["transform","translate","scale","rotate","perspective","filter"],Sn=["paint","layout","strict","content"];function Pt(t){const e=Dt(),n=E(t)?S(t):t;return An.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||En.some(o=>(n.willChange||"").includes(o))||Sn.some(o=>(n.contain||"").includes(o))}function kn(t){let e=L(t);for(;O(e)&&!G(e);){if(Pt(e))return e;if(pt(e))return null;e=L(e)}return null}function Dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const On=new Set(["html","body","#document"]);function G(t){return On.has(U(t))}function S(t){return C(t).getComputedStyle(t)}function mt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function L(t){if(U(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||R(t);return Kt(e)?e.host:e}function he(t){const e=L(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&Z(e)?e:he(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=he(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=C(s);if(r){const c=kt(i);return e.concat(i,i.visualViewport||[],Z(s)?s:[],c&&n?q(c):[])}return e.concat(s,q(s,[],n))}function kt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function pe(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=O(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=at(n)!==r||at(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function It(t){return E(t)?t:t.contextElement}function j(t){const e=It(t);if(!O(e))return k(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=pe(e);let i=(r?at(n.width):n.width)/o,c=(r?at(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Rn=k(0);function me(t){const e=C(t);return!Dt()||!e.visualViewport?Rn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $n(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function M(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=It(t);let i=k(1);e&&(o?E(o)&&(i=j(o)):i=j(t));const c=$n(r,n,o)?me(r):k(0);let l=(s.left+c.x)/i.x,a=(s.top+c.y)/i.y,d=s.width/i.x,u=s.height/i.y;if(r){const h=C(r),f=o&&E(o)?C(o):o;let b=h,g=kt(b);for(;g&&o&&f!==b;){const p=j(g),m=g.getBoundingClientRect(),v=S(g),w=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*p.x,y=m.top+(g.clientTop+parseFloat(v.paddingTop))*p.y;l*=p.x,a*=p.y,d*=p.x,u*=p.y,l+=w,a+=y,b=C(g),g=kt(b)}}return dt({width:d,height:u,x:l,y:a})}function gt(t,e){const n=mt(t).scrollLeft;return e?e.left+n:M(R(t)).left+n}function ge(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-gt(t,n),s=n.top+e.scrollTop;return{x:o,y:s}}function zn(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=R(o),c=e?pt(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},a=k(1);const d=k(0),u=O(o);if((u||!u&&!r)&&((U(o)!=="body"||Z(i))&&(l=mt(o)),O(o))){const f=M(o);a=j(o),d.x=f.x+o.clientLeft,d.y=f.y+o.clientTop}const h=i&&!u&&!r?ge(i,l):k(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x+h.x,y:n.y*a.y-l.scrollTop*a.y+d.y+h.y}}function Ln(t){return Array.from(t.getClientRects())}function Tn(t){const e=R(t),n=mt(t),o=t.ownerDocument.body,s=F(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=F(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+gt(t);const c=-n.scrollTop;return S(o).direction==="rtl"&&(i+=F(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:i,y:c}}const Jt=25;function Pn(t,e){const n=C(t),o=R(t),s=n.visualViewport;let r=o.clientWidth,i=o.clientHeight,c=0,l=0;if(s){r=s.width,i=s.height;const d=Dt();(!d||d&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}const a=gt(o);if(a<=0){const d=o.ownerDocument,u=d.body,h=getComputedStyle(u),f=d.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,b=Math.abs(o.clientWidth-u.clientWidth-f);b<=Jt&&(r-=b)}else a<=Jt&&(r+=a);return{width:r,height:i,x:c,y:l}}const Dn=new Set(["absolute","fixed"]);function In(t,e){const n=M(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=O(t)?j(t):k(1),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,a=o*r.y;return{width:i,height:c,x:l,y:a}}function te(t,e,n){let o;if(e==="viewport")o=Pn(t,n);else if(e==="document")o=Tn(R(t));else if(E(e))o=In(e,n);else{const s=me(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return dt(o)}function ve(t,e){const n=L(t);return n===e||!E(n)||G(n)?!1:S(n).position==="fixed"||ve(n,e)}function Fn(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(c=>E(c)&&U(c)!=="body"),s=null;const r=S(t).position==="fixed";let i=r?L(t):t;for(;E(i)&&!G(i);){const c=S(i),l=Pt(i);!l&&c.position==="fixed"&&(s=null),(r?!l&&!s:!l&&c.position==="static"&&!!s&&Dn.has(s.position)||Z(i)&&!l&&ve(t,i))?o=o.filter(d=>d!==i):s=c,i=L(i)}return e.set(t,o),o}function Mn(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?pt(e)?[]:Fn(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,d)=>{const u=te(e,d,s);return a.top=F(u.top,a.top),a.right=lt(u.right,a.right),a.bottom=lt(u.bottom,a.bottom),a.left=F(u.left,a.left),a},te(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Nn(t){const{width:e,height:n}=pe(t);return{width:e,height:n}}function Bn(t,e,n){const o=O(e),s=R(e),r=n==="fixed",i=M(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=k(0);function a(){l.x=gt(s)}if(o||!o&&!r)if((U(e)!=="body"||Z(s))&&(c=mt(e)),o){const f=M(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else s&&a();r&&!o&&s&&a();const d=s&&!o&&!r?ge(s,c):k(0),u=i.left+c.scrollLeft-l.x-d.x,h=i.top+c.scrollTop-l.y-d.y;return{x:u,y:h,width:i.width,height:i.height}}function Ct(t){return S(t).position==="static"}function ee(t,e){if(!O(t)||S(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return R(t)===n&&(n=n.ownerDocument.body),n}function we(t,e){const n=C(t);if(pt(t))return n;if(!O(t)){let s=L(t);for(;s&&!G(s);){if(E(s)&&!Ct(s))return s;s=L(s)}return n}let o=ee(t,e);for(;o&&Cn(o)&&Ct(o);)o=ee(o,e);return o&&G(o)&&Ct(o)&&!Pt(o)?n:o||kn(t)||n}const Wn=async function(t){const e=this.getOffsetParent||we,n=this.getDimensions,o=await n(t.floating);return{reference:Bn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Hn(t){return S(t).direction==="rtl"}const jn={convertOffsetParentRelativeRectToViewportRelativeRect:zn,getDocumentElement:R,getClippingRect:Mn,getOffsetParent:we,getElementRects:Wn,getClientRects:Ln,getDimensions:Nn,getScale:j,isElement:E,isRTL:Hn};function be(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Vn(t,e){let n=null,o;const s=R(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const a=t.getBoundingClientRect(),{left:d,top:u,width:h,height:f}=a;if(c||e(),!h||!f)return;const b=J(u),g=J(s.clientWidth-(d+h)),p=J(s.clientHeight-(u+f)),m=J(d),w={rootMargin:-b+"px "+-g+"px "+-p+"px "+-m+"px",threshold:F(0,lt(1,l))||1};let y=!0;function _(x){const W=x[0].intersectionRatio;if(W!==l){if(!y)return i();W?i(!1,W):o=setTimeout(()=>{i(!1,1e-7)},1e3)}W===1&&!be(a,t.getBoundingClientRect())&&i(),y=!1}try{n=new IntersectionObserver(_,{...w,root:s.ownerDocument})}catch{n=new IntersectionObserver(_,w)}n.observe(t)}return i(!0),r}function Gn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=It(t),d=s||r?[...a?q(a):[],...q(e)]:[];d.forEach(m=>{s&&m.addEventListener("scroll",n,{passive:!0}),r&&m.addEventListener("resize",n)});const u=a&&c?Vn(a,n):null;let h=-1,f=null;i&&(f=new ResizeObserver(m=>{let[v]=m;v&&v.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=f)==null||w.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let b,g=l?M(t):null;l&&p();function p(){const m=M(t);g&&!be(g,m)&&n(),g=m,b=requestAnimationFrame(p)}return n(),()=>{var m;d.forEach(v=>{s&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),u?.(),(m=f)==null||m.disconnect(),f=null,l&&cancelAnimationFrame(b)}}const Un=bn,Xn=wn,Qn=(t,e,n)=>{const o=new Map,s={platform:jn,...n},r={...s.platform,_c:o};return vn(t,e,{...s,platform:r})},Yn=[Xn({fallbackAxisSideDirection:"start",crossAxis:!1}),Un()],qn=({placement:t="bottom-start",strategy:e,middleware:n=Yn}={})=>{const[o,s]=st(),[r,i]=st(),[c,l]=st();return Rt(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return Gn(o,r,()=>Qn(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:it(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Zn=t=>t.preventDefault(),Kn=Ot`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Jn=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=Ue(t),{styles:c,setReference:l,setFloating:a}=qn({placement:e,strategy:n,middleware:o});return z` <div class="anchor" part="anchor" ${Xt(l)}>
			<button
				@mousedown=${Zn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${qe(r,()=>z`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ke(c)}"
					@connected=${d=>d.target.showPopover?.()}
					${Xt(a)}
					><slot></slot>${tn([s],()=>s?.()||_t)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",ft(Jn,{styleSheets:[Kn]}));const no={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},tt={render:()=>z`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},et={render:()=>z`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},nt={name:"Dropdown with Bug - fixed on Chrome",render:()=>z`<style>
                .wrapper-with-bug {
                    position: relative;
                    z-index: 2;
                    width: 300px;
                    height: 300px;
                    top: 100px;
                    left: 100px;
                    background-color: blueviolet;
                    transform: translate3d(0, 0, 0);
                }
                .overlay {
                    width: 350px;
                    height: 350px;
                    background-color: green;
                    transform: translate3d(0, 0, 0);
                    position: absolute;
                    top: 150px;
                    left: 100px;
                    z-index: 3;
                }
            </style>
            <div class="wrapper-with-bug">
                <cosmoz-dropdown>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                </cosmoz-dropdown>
            </div>
            <div class="overlay"></div>`};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>\`;
  }
}`,...tt.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<cosmoz-dropdown-menu>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>\`;
  }
}`,...et.parameters?.docs?.source}}};nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
  name: 'Dropdown with Bug - fixed on Chrome',
  render: () => {
    return html\`<style>
                .wrapper-with-bug {
                    position: relative;
                    z-index: 2;
                    width: 300px;
                    height: 300px;
                    top: 100px;
                    left: 100px;
                    background-color: blueviolet;
                    transform: translate3d(0, 0, 0);
                }
                .overlay {
                    width: 350px;
                    height: 350px;
                    background-color: green;
                    transform: translate3d(0, 0, 0);
                    position: absolute;
                    top: 150px;
                    left: 100px;
                    z-index: 3;
                }
            </style>
            <div class="wrapper-with-bug">
                <cosmoz-dropdown>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                </cosmoz-dropdown>
            </div>
            <div class="overlay"></div>\`;
  }
}`,...nt.parameters?.docs?.source}}};const oo=["Dropdown","DropdownMenu","DropdownWithBug"];export{tt as Dropdown,et as DropdownMenu,nt as DropdownWithBug,oo as __namedExportsOrder,no as default};
