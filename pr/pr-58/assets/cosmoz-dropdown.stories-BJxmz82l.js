import{E as ft,c as ht,a as nt,b as M,u as G,d as gt,e as dt,A as Zt}from"./iframe-6zzwVO6N.js";import{e as It,i as Mt,t as Gt,u as Jt,a as at,n as Ct}from"./cosmoz-dropdown-next-UhXhJRW5.js";import"./preload-helper-PPVm8Dsz.js";const Qt={},te=It(class extends Mt{constructor(){super(...arguments),this.ot=Qt}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,r)=>n===this.ot[r]))return ft}else if(this.ot===e)return ft;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});const $t="important",ee=" !"+$t,ne=It(class extends Mt{constructor(t){if(super(t),t.type!==Gt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const s=typeof r=="string"&&r.endsWith(ee);n.includes("-")||s?o.setProperty(n,s?r.slice(0,-11):r,s?$t:""):o[n]=r}}return ft}});function oe(t,e,o){return t?e(t):o?.(t)}const re=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},se=ht`
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
`,ie=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",re(nt(ie,{styleSheets:[se]})));const J=Math.min,I=Math.max,Q=Math.round,Y=Math.floor,S=t=>({x:t,y:t}),ce={left:"right",right:"left",bottom:"top",top:"bottom"},le={start:"end",end:"start"};function Ot(t,e,o){return I(t,J(e,o))}function wt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Bt(t){return t==="x"?"y":"x"}function Wt(t){return t==="y"?"height":"width"}const ae=new Set(["top","bottom"]);function P(t){return ae.has(V(t))?"y":"x"}function Nt(t){return Bt(P(t))}function ue(t,e,o){o===void 0&&(o=!1);const n=vt(t),r=Nt(t),s=Wt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=tt(i)),[i,tt(i)]}function fe(t){const e=tt(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>le[e])}const St=["left","right"],Tt=["right","left"],de=["top","bottom"],pe=["bottom","top"];function me(t,e,o){switch(t){case"top":case"bottom":return o?e?Tt:St:e?St:Tt;case"left":case"right":return e?de:pe;default:return[]}}function he(t,e,o,n){const r=vt(t);let s=me(V(t),o==="start",n);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(pt)))),s}function tt(t){return t.replace(/left|right|bottom|top/g,e=>ce[e])}function ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function we(t){return typeof t!="number"?ge(t):{top:t,right:t,bottom:t,left:t}}function et(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Lt(t,e,o){let{reference:n,floating:r}=t;const s=P(e),i=Nt(e),c=Wt(i),l=V(e),a=s==="y",f=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2,p=n[c]/2-r[c]/2;let d;switch(l){case"top":d={x:f,y:n.y-r.height};break;case"bottom":d={x:f,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:u};break;case"left":d={x:n.x-r.width,y:u};break;default:d={x:n.x,y:n.y}}switch(vt(e)){case"start":d[i]-=p*(o&&a?-1:1);break;case"end":d[i]+=p*(o&&a?-1:1);break}return d}async function ve(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:p=!1,padding:d=0}=wt(e,t),h=we(d),w=c[p?u==="floating"?"reference":"floating":u],m=et(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:l})),v=u==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),x=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},R=et(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:l}):v);return{top:(m.top-R.top+h.top)/x.y,bottom:(R.bottom-m.bottom+h.bottom)/x.y,left:(m.left-R.left+h.left)/x.x,right:(R.right-m.right+h.right)/x.x}}const be=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=Lt(a,n,l),p=n,d={},h=0;for(let w=0;w<c.length;w++){var g;const{name:m,fn:v}=c[w],{x:b,y:x,data:R,reset:y}=await v({x:f,y:u,initialPlacement:n,placement:p,strategy:r,middlewareData:d,rects:a,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:ve},elements:{reference:t,floating:e}});f=b??f,u=x??u,d={...d,[m]:{...d[m],...R}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(a=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:f,y:u}=Lt(a,p,l)),w=-1)}return{x:f,y:u,placement:p,strategy:r,middlewareData:d}},xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=wt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const m=V(r),v=P(c),b=V(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),R=p||(b||!g?[tt(c)]:fe(c)),y=h!=="none";!p&&y&&R.push(...he(c,g,h,x));const B=[c,...R],ct=await l.detectOverflow(e,w),q=[];let W=((n=s.flip)==null?void 0:n.overflows)||[];if(f&&q.push(ct[m]),u){const F=ue(r,i,x);q.push(ct[F[0]],ct[F[1]])}if(W=[...W,{placement:r,overflows:q}],!q.every(F=>F<=0)){var At,Rt;const F=(((At=s.flip)==null?void 0:At.index)||0)+1,lt=B[F];if(lt&&(!(u==="alignment"?v!==P(lt):!1)||W.every(E=>P(E.placement)===v?E.overflows[0]>0:!0)))return{data:{index:F,overflows:W},reset:{placement:lt}};let j=(Rt=W.filter(D=>D.overflows[0]<=0).sort((D,E)=>D.overflows[1]-E.overflows[1])[0])==null?void 0:Rt.placement;if(!j)switch(d){case"bestFit":{var Et;const D=(Et=W.filter(E=>{if(y){const z=P(E.placement);return z===v||z==="y"}return!0}).map(E=>[E.placement,E.overflows.filter(z=>z>0).reduce((z,Kt)=>z+Kt,0)]).sort((E,z)=>E[1]-z[1])[0])==null?void 0:Et[0];D&&(j=D);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},ye=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:m=>{let{x:v,y:b}=m;return{x:v,y:b}}},...a}=wt(t,e),f={x:o,y:n},u=await s.detectOverflow(e,a),p=P(V(r)),d=Bt(p);let h=f[d],g=f[p];if(i){const m=d==="y"?"top":"left",v=d==="y"?"bottom":"right",b=h+u[m],x=h-u[v];h=Ot(b,h,x)}if(c){const m=p==="y"?"top":"left",v=p==="y"?"bottom":"right",b=g+u[m],x=g-u[v];g=Ot(b,g,x)}const w=l.fn({...e,[d]:h,[p]:g});return{...w,data:{x:w.x-o,y:w.y-n,enabled:{[d]:i,[p]:c}}}}}};function ot(){return typeof window<"u"}function _(t){return Vt(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){var e;return(e=(Vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Vt(t){return ot()?t instanceof Node||t instanceof A(t).Node:!1}function C(t){return ot()?t instanceof Element||t instanceof A(t).Element:!1}function T(t){return ot()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function zt(t){return!ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}const Ae=new Set(["inline","contents"]);function U(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!Ae.has(r)}const Re=new Set(["table","td","th"]);function Ee(t){return Re.has(_(t))}const Ce=[":popover-open",":modal"];function rt(t){return Ce.some(e=>{try{return t.matches(e)}catch{return!1}})}const Oe=["transform","translate","scale","rotate","perspective"],Se=["transform","translate","scale","rotate","perspective","filter"],Te=["paint","layout","strict","content"];function bt(t){const e=xt(),o=C(t)?O(t):t;return Oe.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||Se.some(n=>(o.willChange||"").includes(n))||Te.some(n=>(o.contain||"").includes(n))}function Le(t){let e=k(t);for(;T(e)&&!H(e);){if(bt(e))return e;if(rt(e))return null;e=k(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ze=new Set(["html","body","#document"]);function H(t){return ze.has(_(t))}function O(t){return A(t).getComputedStyle(t)}function st(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||zt(t)&&t.host||L(t);return zt(e)?e.host:e}function Ht(t){const e=k(t);return H(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&U(e)?e:Ht(e)}function X(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Ht(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=A(r);if(s){const c=mt(i);return e.concat(i,i.visualViewport||[],U(r)?r:[],c&&o?X(c):[])}return e.concat(r,X(r,[],o))}function mt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _t(t){const e=O(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=T(t),s=r?t.offsetWidth:o,i=r?t.offsetHeight:n,c=Q(o)!==s||Q(n)!==i;return c&&(o=s,n=i),{width:o,height:n,$:c}}function yt(t){return C(t)?t:t.contextElement}function N(t){const e=yt(t);if(!T(e))return S(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:s}=_t(e);let i=(s?Q(o.width):o.width)/n,c=(s?Q(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const ke=S(0);function jt(t){const e=A(t);return!xt()||!e.visualViewport?ke:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fe(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function $(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=yt(t);let i=S(1);e&&(n?C(n)&&(i=N(n)):i=N(t));const c=Fe(s,o,n)?jt(s):S(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,f=r.width/i.x,u=r.height/i.y;if(s){const p=A(s),d=n&&C(n)?A(n):n;let h=p,g=mt(h);for(;g&&n&&d!==h;){const w=N(g),m=g.getBoundingClientRect(),v=O(g),b=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,x=m.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,a*=w.y,f*=w.x,u*=w.y,l+=b,a+=x,h=A(g),g=mt(h)}}return et({width:f,height:u,x:l,y:a})}function it(t,e){const o=st(t).scrollLeft;return e?e.left+o:$(L(t)).left+o}function Xt(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-it(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function De(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const s=r==="fixed",i=L(n),c=e?rt(e.floating):!1;if(n===i||c&&s)return o;let l={scrollLeft:0,scrollTop:0},a=S(1);const f=S(0),u=T(n);if((u||!u&&!s)&&((_(n)!=="body"||U(i))&&(l=st(n)),T(n))){const d=$(n);a=N(n),f.x=d.x+n.clientLeft,f.y=d.y+n.clientTop}const p=i&&!u&&!s?Xt(i,l):S(0);return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+f.x+p.x,y:o.y*a.y-l.scrollTop*a.y+f.y+p.y}}function Pe(t){return Array.from(t.getClientRects())}function Ie(t){const e=L(t),o=st(t),n=t.ownerDocument.body,r=I(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=I(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+it(t);const c=-o.scrollTop;return O(n).direction==="rtl"&&(i+=I(e.clientWidth,n.clientWidth)-r),{width:r,height:s,x:i,y:c}}const kt=25;function Me(t,e){const o=A(t),n=L(t),r=o.visualViewport;let s=n.clientWidth,i=n.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const f=xt();(!f||f&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=it(n);if(a<=0){const f=n.ownerDocument,u=f.body,p=getComputedStyle(u),d=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,h=Math.abs(n.clientWidth-u.clientWidth-d);h<=kt&&(s-=h)}else a<=kt&&(s+=a);return{width:s,height:i,x:c,y:l}}const $e=new Set(["absolute","fixed"]);function Be(t,e){const o=$(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,s=T(t)?N(t):S(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=n*s.y;return{width:i,height:c,x:l,y:a}}function Ft(t,e,o){let n;if(e==="viewport")n=Me(t,o);else if(e==="document")n=Ie(L(t));else if(C(e))n=Be(e,o);else{const r=jt(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return et(n)}function Ut(t,e){const o=k(t);return o===e||!C(o)||H(o)?!1:O(o).position==="fixed"||Ut(o,e)}function We(t,e){const o=e.get(t);if(o)return o;let n=X(t,[],!1).filter(c=>C(c)&&_(c)!=="body"),r=null;const s=O(t).position==="fixed";let i=s?k(t):t;for(;C(i)&&!H(i);){const c=O(i),l=bt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&$e.has(r.position)||U(i)&&!l&&Ut(t,i))?n=n.filter(f=>f!==i):r=c,i=k(i)}return e.set(t,n),n}function Ne(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?rt(e)?[]:We(e,this._c):[].concat(o),n],c=i[0],l=i.reduce((a,f)=>{const u=Ft(e,f,r);return a.top=I(u.top,a.top),a.right=J(u.right,a.right),a.bottom=J(u.bottom,a.bottom),a.left=I(u.left,a.left),a},Ft(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ve(t){const{width:e,height:o}=_t(t);return{width:e,height:o}}function He(t,e,o){const n=T(e),r=L(e),s=o==="fixed",i=$(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function a(){l.x=it(r)}if(n||!n&&!s)if((_(e)!=="body"||U(r))&&(c=st(e)),n){const d=$(e,!0,s,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&a();s&&!n&&r&&a();const f=r&&!n&&!s?Xt(r,c):S(0),u=i.left+c.scrollLeft-l.x-f.x,p=i.top+c.scrollTop-l.y-f.y;return{x:u,y:p,width:i.width,height:i.height}}function ut(t){return O(t).position==="static"}function Dt(t,e){if(!T(t)||O(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return L(t)===o&&(o=o.ownerDocument.body),o}function qt(t,e){const o=A(t);if(rt(t))return o;if(!T(t)){let r=k(t);for(;r&&!H(r);){if(C(r)&&!ut(r))return r;r=k(r)}return o}let n=Dt(t,e);for(;n&&Ee(n)&&ut(n);)n=Dt(n,e);return n&&H(n)&&ut(n)&&!bt(n)?o:n||Le(t)||o}const _e=async function(t){const e=this.getOffsetParent||qt,o=this.getDimensions,n=await o(t.floating);return{reference:He(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function je(t){return O(t).direction==="rtl"}const Xe={convertOffsetParentRelativeRectToViewportRelativeRect:De,getDocumentElement:L,getClippingRect:Ne,getOffsetParent:qt,getElementRects:_e,getClientRects:Pe,getDimensions:Ve,getScale:N,isElement:C,isRTL:je};function Yt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ue(t,e){let o=null,n;const r=L(t);function s(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:f,top:u,width:p,height:d}=a;if(c||e(),!p||!d)return;const h=Y(u),g=Y(r.clientWidth-(f+p)),w=Y(r.clientHeight-(u+d)),m=Y(f),b={rootMargin:-h+"px "+-g+"px "+-w+"px "+-m+"px",threshold:I(0,J(1,l))||1};let x=!0;function R(y){const B=y[0].intersectionRatio;if(B!==l){if(!x)return i();B?i(!1,B):n=setTimeout(()=>{i(!1,1e-7)},1e3)}B===1&&!Yt(a,t.getBoundingClientRect())&&i(),x=!1}try{o=new IntersectionObserver(R,{...b,root:r.ownerDocument})}catch{o=new IntersectionObserver(R,b)}o.observe(t)}return i(!0),s}function qe(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=yt(t),f=r||s?[...a?X(a):[],...X(e)]:[];f.forEach(m=>{r&&m.addEventListener("scroll",o,{passive:!0}),s&&m.addEventListener("resize",o)});const u=a&&c?Ue(a,o):null;let p=-1,d=null;i&&(d=new ResizeObserver(m=>{let[v]=m;v&&v.target===a&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(e)})),o()}),a&&!l&&d.observe(a),d.observe(e));let h,g=l?$(t):null;l&&w();function w(){const m=$(t);g&&!Yt(g,m)&&o(),g=m,h=requestAnimationFrame(w)}return o(),()=>{var m;f.forEach(v=>{r&&v.removeEventListener("scroll",o),s&&v.removeEventListener("resize",o)}),u?.(),(m=d)==null||m.disconnect(),d=null,l&&cancelAnimationFrame(h)}}const Ye=ye,Ke=xe,Ze=(t,e,o)=>{const n=new Map,r={platform:Xe,...o},s={...r.platform,_c:n};return be(t,e,{...r,platform:s})},Ge=[Ke({fallbackAxisSideDirection:"start",crossAxis:!1}),Ye()],Je=({placement:t="bottom-start",strategy:e,middleware:o=Ge}={})=>{const[n,r]=G(),[s,i]=G(),[c,l]=G();return gt(()=>{if(!n||!(s instanceof HTMLElement)){l(void 0);return}return qe(n,s,()=>Ze(n,s,{placement:t,strategy:e,middleware:o}).then(l))},[n,s,t,e,o]),{setReference:r,setFloating:i,styles:dt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Qe=t=>{const e=dt(()=>({}),[]);return dt(()=>Object.assign(e,t),[e,...Object.values(t)])},Pt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,tn=({disabled:t,onFocus:e})=>{const[o,n]=G(),{focused:r,closed:s}=o||{},i=r&&!t,c=Qe({closed:s,onFocus:e}),l=at(f=>n(u=>({...u,closed:f})),[]),a=at(f=>{const u=f.currentTarget;return Pt(u)?n(p=>({focused:!0,closed:!p?.closed})):u.focus()},[]);return gt(()=>{if(!i)return;const f=u=>{if(u.defaultPrevented)return;const{closed:p}=c;u.key==="Escape"&&!p?(u.preventDefault(),l(!0)):["ArrowUp","Up"].includes(u.key)&&p&&(u.preventDefault(),l(!1))};return document.addEventListener("keydown",f,!0),()=>document.removeEventListener("keydown",f,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:a,onFocus:at(f=>{const u=Pt(f.currentTarget);n({focused:u}),c.onFocus?.(u)},[c])}},en=t=>{const e=tn(t),{onFocus:o}=e,n=Jt();return gt(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(n.current),o(i)},s=i=>{clearTimeout(n.current);const c=i.currentTarget;n.current=setTimeout(()=>o({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(n.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[o]),e},nn=t=>t.preventDefault(),on=ht`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,rn=t=>{const{placement:e,strategy:o,middleware:n,render:r}=t,{active:s,onToggle:i}=en(t),{styles:c,setReference:l,setFloating:a}=Je({placement:e,strategy:o,middleware:n});return M` <div class="anchor" part="anchor" ${Ct(l)}>
			<button
				@mousedown=${nn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${oe(s,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${ne(c)}"
					@connected=${f=>f.target.showPopover?.()}
					${Ct(a)}
					><slot></slot>${te([r],()=>r?.()||Zt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",nt(rn,{styleSheets:[on]}));const sn=ht`
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
`,cn=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",nt(cn,{styleSheets:[sn]}));const ln=({placement:t})=>M` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",nt(ln));const dn={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},K={render:()=>M`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},Z={render:()=>M`<cosmoz-dropdown-menu>
            <span slot="button">Menu</span>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<cosmoz-dropdown-menu>
            <span slot="button">Menu</span>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>\`;
  }
}`,...Z.parameters?.docs?.source}}};const pn=["Dropdown","DropdownMenu"];export{K as Dropdown,Z as DropdownMenu,pn as __namedExportsOrder,dn as default};
