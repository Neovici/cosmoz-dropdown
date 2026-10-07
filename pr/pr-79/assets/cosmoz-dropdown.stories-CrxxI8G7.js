import{E as mt,b as B,u as J,a as rt,c as Gt,A as Jt}from"./iframe-c2NlyF3Y.js";import{e as Pt,i as It,t as Qt,c as gt,a as st,u as Bt,b as te,d as Q,n as Et}from"./cosmoz-dropdown-next-DNDIijIP.js";import"./preload-helper-PPVm8Dsz.js";const ee={},oe=Pt(class extends It{constructor(){super(...arguments),this.ot=ee}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return mt}else if(this.ot===e)return mt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const $t="important",ne=" !"+$t,re=Pt(class extends It{constructor(t){if(super(t),t.type!==Qt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(ne);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?$t:""):n[o]=r}}return mt}}),se=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ie=gt`
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
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		box-shadow: var(--cosmoz-dropdown-box-shadow, var(--cz-shadow-sm));
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
	}
	::slotted(*) {
		display: block;
	}
`,ce=()=>B`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",se(st(ce,{styleSheets:[ie]})));const tt=Math.min,P=Math.max,et=Math.round,Y=Math.floor,S=t=>({x:t,y:t}),le={left:"right",right:"left",bottom:"top",top:"bottom"},ae={start:"end",end:"start"};function Rt(t,e,n){return P(t,tt(e,n))}function wt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Wt(t){return t==="x"?"y":"x"}function Nt(t){return t==="y"?"height":"width"}const de=new Set(["top","bottom"]);function M(t){return de.has(V(t))?"y":"x"}function Vt(t){return Wt(M(t))}function ue(t,e,n){n===void 0&&(n=!1);const o=vt(t),r=Vt(t),s=Nt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=ot(i)),[i,ot(i)]}function fe(t){const e=ot(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>ae[e])}const St=["left","right"],Ot=["right","left"],me=["top","bottom"],pe=["bottom","top"];function he(t,e,n){switch(t){case"top":case"bottom":return n?e?Ot:St:e?St:Ot;case"left":case"right":return e?me:pe;default:return[]}}function ge(t,e,n,o){const r=vt(t);let s=he(V(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(pt)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>le[e])}function we(t){return{top:0,right:0,bottom:0,left:0,...t}}function ve(t){return typeof t!="number"?we(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Tt(t,e,n){let{reference:o,floating:r}=t;const s=M(e),i=Vt(e),c=Nt(i),l=V(e),a=s==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(vt(e)){case"start":m[i]-=f*(n&&a?-1:1);break;case"end":m[i]+=f*(n&&a?-1:1);break}return m}async function be(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=wt(e,t),h=ve(m),w=c[f?d==="floating"?"reference":"floating":d],p=nt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),v=d==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),y=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},A=nt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:l}):v);return{top:(p.top-A.top+h.top)/y.y,bottom:(A.bottom-p.bottom+h.bottom)/y.y,left:(p.left-A.left+h.left)/y.x,right:(A.right-p.right+h.right)/y.x}}const ye=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Tt(a,o,l),f=o,m={},h=0;for(let w=0;w<c.length;w++){var g;const{name:p,fn:v}=c[w],{x:b,y,data:A,reset:x}=await v({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:m,rects:a,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:be},elements:{reference:t,floating:e}});u=b??u,d=y??d,m={...m,[p]:{...m[p],...A}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(a=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:u,y:d}=Tt(a,f,l)),w=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:m}},xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=wt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=V(r),v=M(c),b=V(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),A=f||(b||!g?[ot(c)]:fe(c)),x=h!=="none";!f&&x&&A.push(...ge(c,g,h,y));const $=[c,...A],dt=await l.detectOverflow(e,w),q=[];let W=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&q.push(dt[p]),d){const D=ue(r,i,y);q.push(dt[D[0]],dt[D[1]])}if(W=[...W,{placement:r,overflows:q}],!q.every(D=>D<=0)){var zt,At;const D=(((zt=s.flip)==null?void 0:zt.index)||0)+1,ut=$[D];if(ut&&(!(d==="alignment"?v!==M(ut):!1)||W.every(C=>M(C.placement)===v?C.overflows[0]>0:!0)))return{data:{index:D,overflows:W},reset:{placement:ut}};let j=(At=W.filter(F=>F.overflows[0]<=0).sort((F,C)=>F.overflows[1]-C.overflows[1])[0])==null?void 0:At.placement;if(!j)switch(m){case"bestFit":{var Ct;const F=(Ct=W.filter(C=>{if(x){const L=M(C.placement);return L===v||L==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(L=>L>0).reduce((L,Zt)=>L+Zt,0)]).sort((C,L)=>C[1]-L[1])[0])==null?void 0:Ct[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},ze=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:p=>{let{x:v,y:b}=p;return{x:v,y:b}}},...a}=wt(t,e),u={x:n,y:o},d=await s.detectOverflow(e,a),f=M(V(r)),m=Wt(f);let h=u[m],g=u[f];if(i){const p=m==="y"?"top":"left",v=m==="y"?"bottom":"right",b=h+d[p],y=h-d[v];h=Rt(b,h,y)}if(c){const p=f==="y"?"top":"left",v=f==="y"?"bottom":"right",b=g+d[p],y=g-d[v];g=Rt(b,g,y)}const w=l.fn({...e,[m]:h,[f]:g});return{...w,data:{x:w.x-n,y:w.y-o,enabled:{[m]:i,[f]:c}}}}}};function it(){return typeof window<"u"}function _(t){return Ht(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){var e;return(e=(Ht(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ht(t){return it()?t instanceof Node||t instanceof z(t).Node:!1}function E(t){return it()?t instanceof Element||t instanceof z(t).Element:!1}function O(t){return it()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function Lt(t){return!it()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}const Ae=new Set(["inline","contents"]);function U(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!Ae.has(r)}const Ce=new Set(["table","td","th"]);function Ee(t){return Ce.has(_(t))}const Re=[":popover-open",":modal"];function ct(t){return Re.some(e=>{try{return t.matches(e)}catch{return!1}})}const Se=["transform","translate","scale","rotate","perspective"],Oe=["transform","translate","scale","rotate","perspective","filter"],Te=["paint","layout","strict","content"];function bt(t){const e=yt(),n=E(t)?R(t):t;return Se.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Oe.some(o=>(n.willChange||"").includes(o))||Te.some(o=>(n.contain||"").includes(o))}function Le(t){let e=k(t);for(;O(e)&&!H(e);){if(bt(e))return e;if(ct(e))return null;e=k(e)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ke=new Set(["html","body","#document"]);function H(t){return ke.has(_(t))}function R(t){return z(t).getComputedStyle(t)}function lt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lt(t)&&t.host||T(t);return Lt(e)?e.host:e}function _t(t){const e=k(t);return H(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&U(e)?e:_t(e)}function X(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=_t(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=z(r);if(s){const c=ht(i);return e.concat(i,i.visualViewport||[],U(r)?r:[],c&&n?X(c):[])}return e.concat(r,X(r,[],n))}function ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function jt(t){const e=R(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=O(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=et(n)!==s||et(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function xt(t){return E(t)?t:t.contextElement}function N(t){const e=xt(t);if(!O(e))return S(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=jt(e);let i=(s?et(n.width):n.width)/o,c=(s?et(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const De=S(0);function Xt(t){const e=z(t);return!yt()||!e.visualViewport?De:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=xt(t);let i=S(1);e&&(o?E(o)&&(i=N(o)):i=N(t));const c=Fe(s,n,o)?Xt(s):S(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,u=r.width/i.x,d=r.height/i.y;if(s){const f=z(s),m=o&&E(o)?z(o):o;let h=f,g=ht(h);for(;g&&o&&m!==h;){const w=N(g),p=g.getBoundingClientRect(),v=R(g),b=p.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,y=p.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,a*=w.y,u*=w.x,d*=w.y,l+=b,a+=y,h=z(g),g=ht(h)}}return nt({width:u,height:d,x:l,y:a})}function at(t,e){const n=lt(t).scrollLeft;return e?e.left+n:I(T(t)).left+n}function Ut(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-at(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function Me(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=T(o),c=e?ct(e.floating):!1;if(o===i||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=S(1);const u=S(0),d=O(o);if((d||!d&&!s)&&((_(o)!=="body"||U(i))&&(l=lt(o)),O(o))){const m=I(o);a=N(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=i&&!d&&!s?Ut(i,l):S(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+u.x+f.x,y:n.y*a.y-l.scrollTop*a.y+u.y+f.y}}function Pe(t){return Array.from(t.getClientRects())}function Ie(t){const e=T(t),n=lt(t),o=t.ownerDocument.body,r=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+at(t);const c=-n.scrollTop;return R(o).direction==="rtl"&&(i+=P(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:c}}const kt=25;function Be(t,e){const n=z(t),o=T(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const u=yt();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=at(o);if(a<=0){const u=o.ownerDocument,d=u.body,f=getComputedStyle(d),m=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,h=Math.abs(o.clientWidth-d.clientWidth-m);h<=kt&&(s-=h)}else a<=kt&&(s+=a);return{width:s,height:i,x:c,y:l}}const $e=new Set(["absolute","fixed"]);function We(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=O(t)?N(t):S(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=o*s.y;return{width:i,height:c,x:l,y:a}}function Dt(t,e,n){let o;if(e==="viewport")o=Be(t,n);else if(e==="document")o=Ie(T(t));else if(E(e))o=We(e,n);else{const r=Xt(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return nt(o)}function qt(t,e){const n=k(t);return n===e||!E(n)||H(n)?!1:R(n).position==="fixed"||qt(n,e)}function Ne(t,e){const n=e.get(t);if(n)return n;let o=X(t,[],!1).filter(c=>E(c)&&_(c)!=="body"),r=null;const s=R(t).position==="fixed";let i=s?k(t):t;for(;E(i)&&!H(i);){const c=R(i),l=bt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&$e.has(r.position)||U(i)&&!l&&qt(t,i))?o=o.filter(u=>u!==i):r=c,i=k(i)}return e.set(t,o),o}function Ve(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?ct(e)?[]:Ne(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,u)=>{const d=Dt(e,u,r);return a.top=P(d.top,a.top),a.right=tt(d.right,a.right),a.bottom=tt(d.bottom,a.bottom),a.left=P(d.left,a.left),a},Dt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function He(t){const{width:e,height:n}=jt(t);return{width:e,height:n}}function _e(t,e,n){const o=O(e),r=T(e),s=n==="fixed",i=I(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function a(){l.x=at(r)}if(o||!o&&!s)if((_(e)!=="body"||U(r))&&(c=lt(e)),o){const m=I(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&a();s&&!o&&r&&a();const u=r&&!o&&!s?Ut(r,c):S(0),d=i.left+c.scrollLeft-l.x-u.x,f=i.top+c.scrollTop-l.y-u.y;return{x:d,y:f,width:i.width,height:i.height}}function ft(t){return R(t).position==="static"}function Ft(t,e){if(!O(t)||R(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return T(t)===n&&(n=n.ownerDocument.body),n}function Yt(t,e){const n=z(t);if(ct(t))return n;if(!O(t)){let r=k(t);for(;r&&!H(r);){if(E(r)&&!ft(r))return r;r=k(r)}return n}let o=Ft(t,e);for(;o&&Ee(o)&&ft(o);)o=Ft(o,e);return o&&H(o)&&ft(o)&&!bt(o)?n:o||Le(t)||n}const je=async function(t){const e=this.getOffsetParent||Yt,n=this.getDimensions,o=await n(t.floating);return{reference:_e(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Xe(t){return R(t).direction==="rtl"}const Ue={convertOffsetParentRelativeRectToViewportRelativeRect:Me,getDocumentElement:T,getClippingRect:Ve,getOffsetParent:Yt,getElementRects:je,getClientRects:Pe,getDimensions:He,getScale:N,isElement:E,isRTL:Xe};function Kt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function qe(t,e){let n=null,o;const r=T(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:u,top:d,width:f,height:m}=a;if(c||e(),!f||!m)return;const h=Y(d),g=Y(r.clientWidth-(u+f)),w=Y(r.clientHeight-(d+m)),p=Y(u),b={rootMargin:-h+"px "+-g+"px "+-w+"px "+-p+"px",threshold:P(0,tt(1,l))||1};let y=!0;function A(x){const $=x[0].intersectionRatio;if($!==l){if(!y)return i();$?i(!1,$):o=setTimeout(()=>{i(!1,1e-7)},1e3)}$===1&&!Kt(a,t.getBoundingClientRect())&&i(),y=!1}try{n=new IntersectionObserver(A,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(A,b)}n.observe(t)}return i(!0),s}function Ye(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=xt(t),u=r||s?[...a?X(a):[],...X(e)]:[];u.forEach(p=>{r&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=a&&c?qe(a,n):null;let f=-1,m=null;i&&(m=new ResizeObserver(p=>{let[v]=p;v&&v.target===a&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(e)})),n()}),a&&!l&&m.observe(a),m.observe(e));let h,g=l?I(t):null;l&&w();function w(){const p=I(t);g&&!Kt(g,p)&&n(),g=p,h=requestAnimationFrame(w)}return n(),()=>{var p;u.forEach(v=>{r&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),d?.(),(p=m)==null||p.disconnect(),m=null,l&&cancelAnimationFrame(h)}}const Ke=ze,Ze=xe,Ge=(t,e,n)=>{const o=new Map,r={platform:Ue,...n},s={...r.platform,_c:o};return ye(t,e,{...r,platform:s})},Je=[Ze({fallbackAxisSideDirection:"start",crossAxis:!1}),Ke()],Qe=({placement:t="bottom-start",strategy:e,middleware:n=Je}={})=>{const[o,r]=J(),[s,i]=J(),[c,l]=J();return rt(()=>{if(!o||!(s instanceof HTMLElement)){l(void 0);return}return Ye(o,s,()=>Ge(o,s,{placement:t,strategy:e,middleware:n}).then(l))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:Gt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Mt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,to=({disabled:t,onFocus:e})=>{const[n,o]=J(),{focused:r,closed:s}=n||{},i=r&&!t,c=te({closed:s,onFocus:e}),l=Q(u=>o(d=>({...d,closed:u})),[]),a=Q(u=>{const d=u.currentTarget;return Mt(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return rt(()=>{if(!i)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=c;d.key==="Escape"&&!f?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:a,onFocus:Q(u=>{const d=Mt(u.currentTarget);o({focused:d}),c.onFocus?.(d)},[c])}},eo=t=>{const e=to(t),{onFocus:n}=e,o=Bt();return rt(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},oo=t=>t.preventDefault(),no=gt`
	.anchor {
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
`,ro=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=eo(t),c=Bt(),{styles:l,setReference:a,setFloating:u}=Qe({placement:e,strategy:n,middleware:o}),d=Q(f=>{c.current=f,u(f)},[u]);return rt(()=>{const f=c.current;f&&(s&&!f.matches(":popover-open")&&f.showPopover?.(),!s&&f.matches(":popover-open")&&f.hidePopover?.())},[s]),B`
		<div class="anchor" part="anchor" ${Et(a)}>
			<button
				@mousedown=${oo}
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
			style="${re(l)}"
			${Et(d)}
			><slot></slot>${oe([r],()=>r?.()||Jt)}</cosmoz-dropdown-content
		>
	`};customElements.define("cosmoz-dropdown",st(ro,{styleSheets:[no]}));const so=gt`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96dvh - 64px));
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		overflow-y: auto;
		padding: var(--cz-spacing) calc(var(--cz-spacing) * 1.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		border: 1px solid
			var(--cosmoz-dropdown-menu-border-color, var(--cz-color-border-primary));
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, var(--cz-color-text-primary));
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		text-align: left;
		margin: 0;
		width: 100%;
		white-space: nowrap;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cz-color-bg-secondary)
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,io=()=>B` <slot></slot> `;customElements.define("cosmoz-dropdown-list",st(io,{styleSheets:[so]}));const co=({placement:t})=>B` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",st(co));const fo={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},K={render:()=>B`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},Z={render:()=>B`<cosmoz-dropdown-menu>
            <span slot="button">Menu</span>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},G={name:"Dropdown Menu – Slotted Elements",render:()=>B`<cosmoz-dropdown-menu>
            <span slot="button">Menu</span>
            <button>Button item</button>
            <button disabled>Disabled button</button>
            <a href="#">Anchor item</a>
            <div>Div item</div>
            <div
                style="--cosmoz-dropdown-menu-bg-color: #f0f4ff; --cosmoz-dropdown-menu-color: #1a56db;"
            >
                Custom colors item
            </div>
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
}`,...Z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Dropdown Menu – Slotted Elements',
  render: () => {
    return html\`<cosmoz-dropdown-menu>
            <span slot="button">Menu</span>
            <button>Button item</button>
            <button disabled>Disabled button</button>
            <a href="#">Anchor item</a>
            <div>Div item</div>
            <div
                style="--cosmoz-dropdown-menu-bg-color: #f0f4ff; --cosmoz-dropdown-menu-color: #1a56db;"
            >
                Custom colors item
            </div>
        </cosmoz-dropdown-menu>\`;
  }
}`,...G.parameters?.docs?.source}}};const mo=["Dropdown","DropdownMenu","DropdownMenuSlotted"];export{K as Dropdown,Z as DropdownMenu,G as DropdownMenuSlotted,mo as __namedExportsOrder,fo as default};
