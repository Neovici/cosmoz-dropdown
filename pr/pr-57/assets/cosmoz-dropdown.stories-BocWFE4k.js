import{E as dt,c as gt,a as ot,b as H,u as G,d as rt,e as pt,A as Gt}from"./iframe-DzhQpCeR.js";import{e as It,i as $t,t as Jt,u as J,a as Qt,n as Rt}from"./cosmoz-dropdown-next-jhVtfbMH.js";import"./preload-helper-PPVm8Dsz.js";const te={},ee=It(class extends $t{constructor(){super(...arguments),this.ot=te}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,r)=>n===this.ot[r]))return dt}else if(this.ot===e)return dt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});const Bt="important",ne=" !"+Bt,oe=It(class extends $t{constructor(t){if(super(t),t.type!==Jt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const s=typeof r=="string"&&r.endsWith(ne);n.includes("-")||s?o.setProperty(n,s?r.slice(0,-11):r,s?Bt:""):o[n]=r}}return dt}}),re=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},se=gt`
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
`,ie=()=>H`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",re(ot(ie,{styleSheets:[se]})));const Q=Math.min,M=Math.max,tt=Math.round,q=Math.floor,S=t=>({x:t,y:t}),ce={left:"right",right:"left",bottom:"top",top:"bottom"},le={start:"end",end:"start"};function Ot(t,e,o){return M(t,Q(e,o))}function wt(t,e){return typeof t=="function"?t(e):t}function N(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Wt(t){return t==="x"?"y":"x"}function Nt(t){return t==="y"?"height":"width"}const ae=new Set(["top","bottom"]);function P(t){return ae.has(N(t))?"y":"x"}function Vt(t){return Wt(P(t))}function fe(t,e,o){o===void 0&&(o=!1);const n=vt(t),r=Vt(t),s=Nt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=et(i)),[i,et(i)]}function ue(t){const e=et(t);return[mt(t),e,mt(e)]}function mt(t){return t.replace(/start|end/g,e=>le[e])}const St=["left","right"],Lt=["right","left"],de=["top","bottom"],pe=["bottom","top"];function me(t,e,o){switch(t){case"top":case"bottom":return o?e?Lt:St:e?St:Lt;case"left":case"right":return e?de:pe;default:return[]}}function he(t,e,o,n){const r=vt(t);let s=me(N(t),o==="start",n);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(mt)))),s}function et(t){return t.replace(/left|right|bottom|top/g,e=>ce[e])}function ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function we(t){return typeof t!="number"?ge(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Tt(t,e,o){let{reference:n,floating:r}=t;const s=P(e),i=Vt(e),c=Nt(i),l=N(e),f=s==="y",u=n.x+n.width/2-r.width/2,a=n.y+n.height/2-r.height/2,d=n[c]/2-r[c]/2;let p;switch(l){case"top":p={x:u,y:n.y-r.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:a};break;case"left":p={x:n.x-r.width,y:a};break;default:p={x:n.x,y:n.y}}switch(vt(e)){case"start":p[i]-=d*(o&&f?-1:1);break;case"end":p[i]+=d*(o&&f?-1:1);break}return p}async function ve(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:d=!1,padding:p=0}=wt(e,t),h=we(p),w=c[d?a==="floating"?"reference":"floating":a],m=nt(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:l})),v=a==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),x=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},E=nt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:l}):v);return{top:(m.top-E.top+h.top)/x.y,bottom:(E.bottom-m.bottom+h.bottom)/x.y,left:(m.left-E.left+h.left)/x.x,right:(E.right-m.right+h.right)/x.x}}const be=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let f=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:a}=Tt(f,n,l),d=n,p={},h=0;for(let w=0;w<c.length;w++){var g;const{name:m,fn:v}=c[w],{x:b,y:x,data:E,reset:y}=await v({x:u,y:a,initialPlacement:n,placement:d,strategy:r,middlewareData:p,rects:f,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:ve},elements:{reference:t,floating:e}});u=b??u,a=x??a,p={...p,[m]:{...p[m],...E}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(d=y.placement),y.rects&&(f=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:u,y:a}=Tt(f,d,l)),w=-1)}return{x:u,y:a,placement:d,strategy:r,middlewareData:p}},xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=wt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const m=N(r),v=P(c),b=N(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(f.floating)),E=d||(b||!g?[et(c)]:ue(c)),y=h!=="none";!d&&y&&E.push(...he(c,g,h,x));const $=[c,...E],at=await l.detectOverflow(e,w),Y=[];let B=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&Y.push(at[m]),a){const D=fe(r,i,x);Y.push(at[D[0]],at[D[1]])}if(B=[...B,{placement:r,overflows:Y}],!Y.every(D=>D<=0)){var At,Et;const D=(((At=s.flip)==null?void 0:At.index)||0)+1,ft=$[D];if(ft&&(!(a==="alignment"?v!==P(ft):!1)||B.every(C=>P(C.placement)===v?C.overflows[0]>0:!0)))return{data:{index:D,overflows:B},reset:{placement:ft}};let j=(Et=B.filter(F=>F.overflows[0]<=0).sort((F,C)=>F.overflows[1]-C.overflows[1])[0])==null?void 0:Et.placement;if(!j)switch(p){case"bestFit":{var Ct;const F=(Ct=B.filter(C=>{if(y){const z=P(C.placement);return z===v||z==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(z=>z>0).reduce((z,Zt)=>z+Zt,0)]).sort((C,z)=>C[1]-z[1])[0])==null?void 0:Ct[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},ye=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:m=>{let{x:v,y:b}=m;return{x:v,y:b}}},...f}=wt(t,e),u={x:o,y:n},a=await s.detectOverflow(e,f),d=P(N(r)),p=Wt(d);let h=u[p],g=u[d];if(i){const m=p==="y"?"top":"left",v=p==="y"?"bottom":"right",b=h+a[m],x=h-a[v];h=Ot(b,h,x)}if(c){const m=d==="y"?"top":"left",v=d==="y"?"bottom":"right",b=g+a[m],x=g-a[v];g=Ot(b,g,x)}const w=l.fn({...e,[p]:h,[d]:g});return{...w,data:{x:w.x-o,y:w.y-n,enabled:{[p]:i,[d]:c}}}}}};function st(){return typeof window<"u"}function _(t){return Ht(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){var e;return(e=(Ht(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ht(t){return st()?t instanceof Node||t instanceof A(t).Node:!1}function R(t){return st()?t instanceof Element||t instanceof A(t).Element:!1}function L(t){return st()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function zt(t){return!st()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}const Ae=new Set(["inline","contents"]);function U(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!Ae.has(r)}const Ee=new Set(["table","td","th"]);function Ce(t){return Ee.has(_(t))}const Re=[":popover-open",":modal"];function it(t){return Re.some(e=>{try{return t.matches(e)}catch{return!1}})}const Oe=["transform","translate","scale","rotate","perspective"],Se=["transform","translate","scale","rotate","perspective","filter"],Le=["paint","layout","strict","content"];function bt(t){const e=xt(),o=R(t)?O(t):t;return Oe.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||Se.some(n=>(o.willChange||"").includes(n))||Le.some(n=>(o.contain||"").includes(n))}function Te(t){let e=k(t);for(;L(e)&&!V(e);){if(bt(e))return e;if(it(e))return null;e=k(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ze=new Set(["html","body","#document"]);function V(t){return ze.has(_(t))}function O(t){return A(t).getComputedStyle(t)}function ct(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||zt(t)&&t.host||T(t);return zt(e)?e.host:e}function _t(t){const e=k(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&U(e)?e:_t(e)}function X(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=_t(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=A(r);if(s){const c=ht(i);return e.concat(i,i.visualViewport||[],U(r)?r:[],c&&o?X(c):[])}return e.concat(r,X(r,[],o))}function ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function jt(t){const e=O(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=L(t),s=r?t.offsetWidth:o,i=r?t.offsetHeight:n,c=tt(o)!==s||tt(n)!==i;return c&&(o=s,n=i),{width:o,height:n,$:c}}function yt(t){return R(t)?t:t.contextElement}function W(t){const e=yt(t);if(!L(e))return S(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:s}=jt(e);let i=(s?tt(o.width):o.width)/n,c=(s?tt(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const ke=S(0);function Xt(t){const e=A(t);return!xt()||!e.visualViewport?ke:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function De(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function I(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=yt(t);let i=S(1);e&&(n?R(n)&&(i=W(n)):i=W(t));const c=De(s,o,n)?Xt(s):S(0);let l=(r.left+c.x)/i.x,f=(r.top+c.y)/i.y,u=r.width/i.x,a=r.height/i.y;if(s){const d=A(s),p=n&&R(n)?A(n):n;let h=d,g=ht(h);for(;g&&n&&p!==h;){const w=W(g),m=g.getBoundingClientRect(),v=O(g),b=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,x=m.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,f*=w.y,u*=w.x,a*=w.y,l+=b,f+=x,h=A(g),g=ht(h)}}return nt({width:u,height:a,x:l,y:f})}function lt(t,e){const o=ct(t).scrollLeft;return e?e.left+o:I(T(t)).left+o}function Ut(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-lt(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function Fe(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const s=r==="fixed",i=T(n),c=e?it(e.floating):!1;if(n===i||c&&s)return o;let l={scrollLeft:0,scrollTop:0},f=S(1);const u=S(0),a=L(n);if((a||!a&&!s)&&((_(n)!=="body"||U(i))&&(l=ct(n)),L(n))){const p=I(n);f=W(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const d=i&&!a&&!s?Ut(i,l):S(0);return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-l.scrollLeft*f.x+u.x+d.x,y:o.y*f.y-l.scrollTop*f.y+u.y+d.y}}function Pe(t){return Array.from(t.getClientRects())}function Me(t){const e=T(t),o=ct(t),n=t.ownerDocument.body,r=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+lt(t);const c=-o.scrollTop;return O(n).direction==="rtl"&&(i+=M(e.clientWidth,n.clientWidth)-r),{width:r,height:s,x:i,y:c}}const kt=25;function Ie(t,e){const o=A(t),n=T(t),r=o.visualViewport;let s=n.clientWidth,i=n.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const u=xt();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const f=lt(n);if(f<=0){const u=n.ownerDocument,a=u.body,d=getComputedStyle(a),p=u.compatMode==="CSS1Compat"&&parseFloat(d.marginLeft)+parseFloat(d.marginRight)||0,h=Math.abs(n.clientWidth-a.clientWidth-p);h<=kt&&(s-=h)}else f<=kt&&(s+=f);return{width:s,height:i,x:c,y:l}}const $e=new Set(["absolute","fixed"]);function Be(t,e){const o=I(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,s=L(t)?W(t):S(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,f=n*s.y;return{width:i,height:c,x:l,y:f}}function Dt(t,e,o){let n;if(e==="viewport")n=Ie(t,o);else if(e==="document")n=Me(T(t));else if(R(e))n=Be(e,o);else{const r=Xt(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return nt(n)}function Yt(t,e){const o=k(t);return o===e||!R(o)||V(o)?!1:O(o).position==="fixed"||Yt(o,e)}function We(t,e){const o=e.get(t);if(o)return o;let n=X(t,[],!1).filter(c=>R(c)&&_(c)!=="body"),r=null;const s=O(t).position==="fixed";let i=s?k(t):t;for(;R(i)&&!V(i);){const c=O(i),l=bt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&$e.has(r.position)||U(i)&&!l&&Yt(t,i))?n=n.filter(u=>u!==i):r=c,i=k(i)}return e.set(t,n),n}function Ne(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?it(e)?[]:We(e,this._c):[].concat(o),n],c=i[0],l=i.reduce((f,u)=>{const a=Dt(e,u,r);return f.top=M(a.top,f.top),f.right=Q(a.right,f.right),f.bottom=Q(a.bottom,f.bottom),f.left=M(a.left,f.left),f},Dt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ve(t){const{width:e,height:o}=jt(t);return{width:e,height:o}}function He(t,e,o){const n=L(e),r=T(e),s=o==="fixed",i=I(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function f(){l.x=lt(r)}if(n||!n&&!s)if((_(e)!=="body"||U(r))&&(c=ct(e)),n){const p=I(e,!0,s,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&f();s&&!n&&r&&f();const u=r&&!n&&!s?Ut(r,c):S(0),a=i.left+c.scrollLeft-l.x-u.x,d=i.top+c.scrollTop-l.y-u.y;return{x:a,y:d,width:i.width,height:i.height}}function ut(t){return O(t).position==="static"}function Ft(t,e){if(!L(t)||O(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return T(t)===o&&(o=o.ownerDocument.body),o}function qt(t,e){const o=A(t);if(it(t))return o;if(!L(t)){let r=k(t);for(;r&&!V(r);){if(R(r)&&!ut(r))return r;r=k(r)}return o}let n=Ft(t,e);for(;n&&Ce(n)&&ut(n);)n=Ft(n,e);return n&&V(n)&&ut(n)&&!bt(n)?o:n||Te(t)||o}const _e=async function(t){const e=this.getOffsetParent||qt,o=this.getDimensions,n=await o(t.floating);return{reference:He(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function je(t){return O(t).direction==="rtl"}const Xe={convertOffsetParentRelativeRectToViewportRelativeRect:Fe,getDocumentElement:T,getClippingRect:Ne,getOffsetParent:qt,getElementRects:_e,getClientRects:Pe,getDimensions:Ve,getScale:W,isElement:R,isRTL:je};function Kt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ue(t,e){let o=null,n;const r=T(t);function s(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const f=t.getBoundingClientRect(),{left:u,top:a,width:d,height:p}=f;if(c||e(),!d||!p)return;const h=q(a),g=q(r.clientWidth-(u+d)),w=q(r.clientHeight-(a+p)),m=q(u),b={rootMargin:-h+"px "+-g+"px "+-w+"px "+-m+"px",threshold:M(0,Q(1,l))||1};let x=!0;function E(y){const $=y[0].intersectionRatio;if($!==l){if(!x)return i();$?i(!1,$):n=setTimeout(()=>{i(!1,1e-7)},1e3)}$===1&&!Kt(f,t.getBoundingClientRect())&&i(),x=!1}try{o=new IntersectionObserver(E,{...b,root:r.ownerDocument})}catch{o=new IntersectionObserver(E,b)}o.observe(t)}return i(!0),s}function Ye(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,f=yt(t),u=r||s?[...f?X(f):[],...X(e)]:[];u.forEach(m=>{r&&m.addEventListener("scroll",o,{passive:!0}),s&&m.addEventListener("resize",o)});const a=f&&c?Ue(f,o):null;let d=-1,p=null;i&&(p=new ResizeObserver(m=>{let[v]=m;v&&v.target===f&&p&&(p.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(e)})),o()}),f&&!l&&p.observe(f),p.observe(e));let h,g=l?I(t):null;l&&w();function w(){const m=I(t);g&&!Kt(g,m)&&o(),g=m,h=requestAnimationFrame(w)}return o(),()=>{var m;u.forEach(v=>{r&&v.removeEventListener("scroll",o),s&&v.removeEventListener("resize",o)}),a?.(),(m=p)==null||m.disconnect(),p=null,l&&cancelAnimationFrame(h)}}const qe=ye,Ke=xe,Ze=(t,e,o)=>{const n=new Map,r={platform:Xe,...o},s={...r.platform,_c:n};return be(t,e,{...r,platform:s})},Ge=[Ke({fallbackAxisSideDirection:"start",crossAxis:!1}),qe()],Je=({placement:t="bottom-start",strategy:e,middleware:o=Ge}={})=>{const[n,r]=G(),[s,i]=G(),[c,l]=G();return rt(()=>{if(!n||!(s instanceof HTMLElement)){l(void 0);return}return Ye(n,s,()=>Ze(n,s,{placement:t,strategy:e,middleware:o}).then(l))},[n,s,t,e,o]),{setReference:r,setFloating:i,styles:pt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Qe=t=>{const e=pt(()=>({}),[]);return pt(()=>Object.assign(e,t),[e,...Object.values(t)])},Pt=t=>t.matches(":focus-within"),tn=t=>t.composedPath().some(e=>e instanceof HTMLDialogElement&&e.open),en=({disabled:t,onFocus:e})=>{const[o,n]=G(),{focused:r,closed:s}=o||{},i=r&&!t,c=Qe({closed:s,onFocus:e}),l=J(u=>n(a=>({...a,closed:u})),[]),f=J(u=>{const a=u.currentTarget;return Pt(a)?n(d=>({focused:!0,closed:!d?.closed})):a.focus()},[]);return rt(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented||a.key==="Escape"&&tn(a))return;const{closed:d}=c;a.key==="Escape"&&!d?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&d&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:f,onFocus:J(u=>{const a=Pt(u.currentTarget);n({focused:a}),c.onFocus?.(a)},[c])}},Mt=["focusin","focusout"],nn=t=>{const e=en(t),{onFocus:o}=e;return rt(()=>(t.setAttribute("tabindex","0"),Mt.forEach(n=>t.addEventListener(n,o)),()=>{Mt.forEach(n=>t.removeEventListener(n,o))}),[]),e},on=t=>t.preventDefault(),rn=gt`
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
`,sn=t=>{const{placement:e,strategy:o,middleware:n,render:r}=t,{active:s,onToggle:i}=nn(t),c=Qt(),{styles:l,setReference:f,setFloating:u}=Je({placement:e,strategy:o,middleware:n}),a=J(d=>{c.current=d,u(d)},[u]);return rt(()=>{const d=c.current;d&&(s&&!d.matches(":popover-open")&&d.showPopover?.(),!s&&d.matches(":popover-open")&&d.hidePopover?.())},[s]),H`
		<div class="anchor" part="anchor" ${Rt(f)}>
			<button
				@mousedown=${on}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		<cosmoz-dropdown-content
			popover
			id="content"
			part="content"
			exportparts="wrap, content"
			style="${oe(l)}"
			${Rt(a)}
			><slot></slot>${ee([r],()=>r?.()||Gt)}</cosmoz-dropdown-content
		>
	`};customElements.define("cosmoz-dropdown",ot(sn,{styleSheets:[rn]}));const cn=gt`
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
`,ln=()=>H` <slot></slot> `;customElements.define("cosmoz-dropdown-list",ot(ln,{styleSheets:[cn]}));const an=({placement:t})=>H` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",ot(an));const pn={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},K={render:()=>H`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},Z={render:()=>H`<cosmoz-dropdown-menu>
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
}`,...Z.parameters?.docs?.source}}};const mn=["Dropdown","DropdownMenu"];export{K as Dropdown,Z as DropdownMenu,mn as __namedExportsOrder,pn as default};
