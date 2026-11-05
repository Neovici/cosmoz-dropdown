import{E as mt,b as B,u as Q,a as U,c as Gt,A as Jt}from"./iframe-D0tTjn8-.js";import{e as It,i as Bt,t as Qt,c as gt,a as st,u as vt,b as te,d as tt,n as Rt}from"./cosmoz-dropdown-next-BtqXNRbY.js";import"./preload-helper-PPVm8Dsz.js";const ee={},oe=It(class extends Bt{constructor(){super(...arguments),this.ot=ee}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return mt}else if(this.ot===e)return mt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const $t="important",ne=" !"+$t,re=It(class extends Bt{constructor(t){if(super(t),t.type!==Qt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(ne);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?$t:""):n[o]=r}}return mt}}),se=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ie=gt`
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
`,ce=()=>B`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",se(st(ce,{styleSheets:[ie]})));const et=Math.min,P=Math.max,ot=Math.round,K=Math.floor,S=t=>({x:t,y:t}),le={left:"right",right:"left",bottom:"top",top:"bottom"},ae={start:"end",end:"start"};function St(t,e,n){return P(t,et(e,n))}function wt(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function bt(t){return t.split("-")[1]}function Wt(t){return t==="x"?"y":"x"}function Nt(t){return t==="y"?"height":"width"}const de=new Set(["top","bottom"]);function M(t){return de.has(H(t))?"y":"x"}function Ht(t){return Wt(M(t))}function ue(t,e,n){n===void 0&&(n=!1);const o=bt(t),r=Ht(t),s=Nt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=nt(i)),[i,nt(i)]}function fe(t){const e=nt(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>ae[e])}const Ot=["left","right"],Lt=["right","left"],me=["top","bottom"],pe=["bottom","top"];function he(t,e,n){switch(t){case"top":case"bottom":return n?e?Lt:Ot:e?Ot:Lt;case"left":case"right":return e?me:pe;default:return[]}}function ge(t,e,n,o){const r=bt(t);let s=he(H(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(pt)))),s}function nt(t){return t.replace(/left|right|bottom|top/g,e=>le[e])}function ve(t){return{top:0,right:0,bottom:0,left:0,...t}}function we(t){return typeof t!="number"?ve(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Tt(t,e,n){let{reference:o,floating:r}=t;const s=M(e),i=Ht(e),c=Nt(i),l=H(e),a=s==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(bt(e)){case"start":m[i]-=f*(n&&a?-1:1);break;case"end":m[i]+=f*(n&&a?-1:1);break}return m}async function be(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=wt(e,t),h=we(m),v=c[f?d==="floating"?"reference":"floating":d],p=rt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(v)))==null||n?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),w=d==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),y=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},E=rt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:b,strategy:l}):w);return{top:(p.top-E.top+h.top)/y.y,bottom:(E.bottom-p.bottom+h.bottom)/y.y,left:(p.left-E.left+h.left)/y.x,right:(E.right-p.right+h.right)/y.x}}const ye=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Tt(a,o,l),f=o,m={},h=0;for(let v=0;v<c.length;v++){var g;const{name:p,fn:w}=c[v],{x:b,y,data:E,reset:x}=await w({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:m,rects:a,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:be},elements:{reference:t,floating:e}});u=b??u,d=y??d,m={...m,[p]:{...m[p],...E}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(a=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:u,y:d}=Tt(a,f,l)),v=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:m}},xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...v}=wt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=H(r),w=M(c),b=H(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),E=f||(b||!g?[nt(c)]:fe(c)),x=h!=="none";!f&&x&&E.push(...ge(c,g,h,y));const $=[c,...E],dt=await l.detectOverflow(e,v),Y=[];let W=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&Y.push(dt[p]),d){const D=ue(r,i,y);Y.push(dt[D[0]],dt[D[1]])}if(W=[...W,{placement:r,overflows:Y}],!Y.every(D=>D<=0)){var Et,At;const D=(((Et=s.flip)==null?void 0:Et.index)||0)+1,ut=$[D];if(ut&&(!(d==="alignment"?w!==M(ut):!1)||W.every(A=>M(A.placement)===w?A.overflows[0]>0:!0)))return{data:{index:D,overflows:W},reset:{placement:ut}};let j=(At=W.filter(F=>F.overflows[0]<=0).sort((F,A)=>F.overflows[1]-A.overflows[1])[0])==null?void 0:At.placement;if(!j)switch(m){case"bestFit":{var Ct;const F=(Ct=W.filter(A=>{if(x){const T=M(A.placement);return T===w||T==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(T=>T>0).reduce((T,Zt)=>T+Zt,0)]).sort((A,T)=>A[1]-T[1])[0])==null?void 0:Ct[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},ze=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:p=>{let{x:w,y:b}=p;return{x:w,y:b}}},...a}=wt(t,e),u={x:n,y:o},d=await s.detectOverflow(e,a),f=M(H(r)),m=Wt(f);let h=u[m],g=u[f];if(i){const p=m==="y"?"top":"left",w=m==="y"?"bottom":"right",b=h+d[p],y=h-d[w];h=St(b,h,y)}if(c){const p=f==="y"?"top":"left",w=f==="y"?"bottom":"right",b=g+d[p],y=g-d[w];g=St(b,g,y)}const v=l.fn({...e,[m]:h,[f]:g});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[m]:i,[f]:c}}}}}};function it(){return typeof window<"u"}function _(t){return Vt(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){var e;return(e=(Vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Vt(t){return it()?t instanceof Node||t instanceof z(t).Node:!1}function C(t){return it()?t instanceof Element||t instanceof z(t).Element:!1}function O(t){return it()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function kt(t){return!it()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}const Ee=new Set(["inline","contents"]);function q(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!Ee.has(r)}const Ae=new Set(["table","td","th"]);function Ce(t){return Ae.has(_(t))}const Re=[":popover-open",":modal"];function ct(t){return Re.some(e=>{try{return t.matches(e)}catch{return!1}})}const Se=["transform","translate","scale","rotate","perspective"],Oe=["transform","translate","scale","rotate","perspective","filter"],Le=["paint","layout","strict","content"];function yt(t){const e=xt(),n=C(t)?R(t):t;return Se.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Oe.some(o=>(n.willChange||"").includes(o))||Le.some(o=>(n.contain||"").includes(o))}function Te(t){let e=k(t);for(;O(e)&&!V(e);){if(yt(e))return e;if(ct(e))return null;e=k(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ke=new Set(["html","body","#document"]);function V(t){return ke.has(_(t))}function R(t){return z(t).getComputedStyle(t)}function lt(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||L(t);return kt(e)?e.host:e}function _t(t){const e=k(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&q(e)?e:_t(e)}function X(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=_t(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=z(r);if(s){const c=ht(i);return e.concat(i,i.visualViewport||[],q(r)?r:[],c&&n?X(c):[])}return e.concat(r,X(r,[],n))}function ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function jt(t){const e=R(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=O(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=ot(n)!==s||ot(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function zt(t){return C(t)?t:t.contextElement}function N(t){const e=zt(t);if(!O(e))return S(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=jt(e);let i=(s?ot(n.width):n.width)/o,c=(s?ot(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const De=S(0);function Xt(t){const e=z(t);return!xt()||!e.visualViewport?De:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=zt(t);let i=S(1);e&&(o?C(o)&&(i=N(o)):i=N(t));const c=Fe(s,n,o)?Xt(s):S(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,u=r.width/i.x,d=r.height/i.y;if(s){const f=z(s),m=o&&C(o)?z(o):o;let h=f,g=ht(h);for(;g&&o&&m!==h;){const v=N(g),p=g.getBoundingClientRect(),w=R(g),b=p.left+(g.clientLeft+parseFloat(w.paddingLeft))*v.x,y=p.top+(g.clientTop+parseFloat(w.paddingTop))*v.y;l*=v.x,a*=v.y,u*=v.x,d*=v.y,l+=b,a+=y,h=z(g),g=ht(h)}}return rt({width:u,height:d,x:l,y:a})}function at(t,e){const n=lt(t).scrollLeft;return e?e.left+n:I(L(t)).left+n}function Ut(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-at(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function Me(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=L(o),c=e?ct(e.floating):!1;if(o===i||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=S(1);const u=S(0),d=O(o);if((d||!d&&!s)&&((_(o)!=="body"||q(i))&&(l=lt(o)),O(o))){const m=I(o);a=N(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=i&&!d&&!s?Ut(i,l):S(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+u.x+f.x,y:n.y*a.y-l.scrollTop*a.y+u.y+f.y}}function Pe(t){return Array.from(t.getClientRects())}function Ie(t){const e=L(t),n=lt(t),o=t.ownerDocument.body,r=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+at(t);const c=-n.scrollTop;return R(o).direction==="rtl"&&(i+=P(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:c}}const Dt=25;function Be(t,e){const n=z(t),o=L(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const u=xt();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=at(o);if(a<=0){const u=o.ownerDocument,d=u.body,f=getComputedStyle(d),m=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,h=Math.abs(o.clientWidth-d.clientWidth-m);h<=Dt&&(s-=h)}else a<=Dt&&(s+=a);return{width:s,height:i,x:c,y:l}}const $e=new Set(["absolute","fixed"]);function We(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=O(t)?N(t):S(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=o*s.y;return{width:i,height:c,x:l,y:a}}function Ft(t,e,n){let o;if(e==="viewport")o=Be(t,n);else if(e==="document")o=Ie(L(t));else if(C(e))o=We(e,n);else{const r=Xt(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return rt(o)}function qt(t,e){const n=k(t);return n===e||!C(n)||V(n)?!1:R(n).position==="fixed"||qt(n,e)}function Ne(t,e){const n=e.get(t);if(n)return n;let o=X(t,[],!1).filter(c=>C(c)&&_(c)!=="body"),r=null;const s=R(t).position==="fixed";let i=s?k(t):t;for(;C(i)&&!V(i);){const c=R(i),l=yt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&$e.has(r.position)||q(i)&&!l&&qt(t,i))?o=o.filter(u=>u!==i):r=c,i=k(i)}return e.set(t,o),o}function He(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?ct(e)?[]:Ne(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,u)=>{const d=Ft(e,u,r);return a.top=P(d.top,a.top),a.right=et(d.right,a.right),a.bottom=et(d.bottom,a.bottom),a.left=P(d.left,a.left),a},Ft(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ve(t){const{width:e,height:n}=jt(t);return{width:e,height:n}}function _e(t,e,n){const o=O(e),r=L(e),s=n==="fixed",i=I(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function a(){l.x=at(r)}if(o||!o&&!s)if((_(e)!=="body"||q(r))&&(c=lt(e)),o){const m=I(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&a();s&&!o&&r&&a();const u=r&&!o&&!s?Ut(r,c):S(0),d=i.left+c.scrollLeft-l.x-u.x,f=i.top+c.scrollTop-l.y-u.y;return{x:d,y:f,width:i.width,height:i.height}}function ft(t){return R(t).position==="static"}function Mt(t,e){if(!O(t)||R(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return L(t)===n&&(n=n.ownerDocument.body),n}function Yt(t,e){const n=z(t);if(ct(t))return n;if(!O(t)){let r=k(t);for(;r&&!V(r);){if(C(r)&&!ft(r))return r;r=k(r)}return n}let o=Mt(t,e);for(;o&&Ce(o)&&ft(o);)o=Mt(o,e);return o&&V(o)&&ft(o)&&!yt(o)?n:o||Te(t)||n}const je=async function(t){const e=this.getOffsetParent||Yt,n=this.getDimensions,o=await n(t.floating);return{reference:_e(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Xe(t){return R(t).direction==="rtl"}const Ue={convertOffsetParentRelativeRectToViewportRelativeRect:Me,getDocumentElement:L,getClippingRect:He,getOffsetParent:Yt,getElementRects:je,getClientRects:Pe,getDimensions:Ve,getScale:N,isElement:C,isRTL:Xe};function Kt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function qe(t,e){let n=null,o;const r=L(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:u,top:d,width:f,height:m}=a;if(c||e(),!f||!m)return;const h=K(d),g=K(r.clientWidth-(u+f)),v=K(r.clientHeight-(d+m)),p=K(u),b={rootMargin:-h+"px "+-g+"px "+-v+"px "+-p+"px",threshold:P(0,et(1,l))||1};let y=!0;function E(x){const $=x[0].intersectionRatio;if($!==l){if(!y)return i();$?i(!1,$):o=setTimeout(()=>{i(!1,1e-7)},1e3)}$===1&&!Kt(a,t.getBoundingClientRect())&&i(),y=!1}try{n=new IntersectionObserver(E,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(t)}return i(!0),s}function Ye(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=zt(t),u=r||s?[...a?X(a):[],...X(e)]:[];u.forEach(p=>{r&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=a&&c?qe(a,n):null;let f=-1,m=null;i&&(m=new ResizeObserver(p=>{let[w]=p;w&&w.target===a&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(e)})),n()}),a&&!l&&m.observe(a),m.observe(e));let h,g=l?I(t):null;l&&v();function v(){const p=I(t);g&&!Kt(g,p)&&n(),g=p,h=requestAnimationFrame(v)}return n(),()=>{var p;u.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),d?.(),(p=m)==null||p.disconnect(),m=null,l&&cancelAnimationFrame(h)}}const Ke=ze,Ze=xe,Ge=(t,e,n)=>{const o=new Map,r={platform:Ue,...n},s={...r.platform,_c:o};return ye(t,e,{...r,platform:s})},Je=[Ze({fallbackAxisSideDirection:"start",crossAxis:!1}),Ke()],Qe=({placement:t="bottom-start",strategy:e,middleware:n=Je}={})=>{const[o,r]=Q(),[s,i]=Q(),[c,l]=Q();return U(()=>{if(!o||!(s instanceof HTMLElement)){l(void 0);return}return Ye(o,s,()=>Ge(o,s,{placement:t,strategy:e,middleware:n}).then(l))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:Gt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Pt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,to=({disabled:t,onFocus:e})=>{const[n,o]=Q(),{focused:r,closed:s}=n||{},i=r&&!t,c=te({closed:s,onFocus:e}),l=tt(u=>o(d=>({...d,closed:u})),[]),a=tt(u=>{const d=u.currentTarget;return Pt(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return U(()=>{if(!i)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=c;d.key==="Escape"&&!f?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:a,onFocus:tt(u=>{const d=Pt(u.currentTarget);o({focused:d}),c.onFocus?.(d)},[c])}},eo=t=>{const e=to(t),{onFocus:n}=e,o=vt();return U(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},oo=t=>t.preventDefault(),no=gt`
	.anchor {
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}

	cosmoz-button {
		width: 100%;
		pointer-events: none;
	}

	cosmoz-button::part(button) {
		width: auto;
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;

		height: auto;
	}

	::slotted(svg) {
		pointer-events: none;
	}

	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,ro=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=eo(t),c=vt(),{styles:l,setReference:a,setFloating:u}=Qe({placement:e,strategy:n,middleware:o}),d=tt(f=>{c.current=f,u(f)},[u]);return U(()=>{const f=c.current;f&&(s&&!f.matches(":popover-open")&&f.showPopover?.(),!s&&f.matches(":popover-open")&&f.hidePopover?.())},[s]),B`
		<div class="anchor" part="anchor" ${Rt(a)}>
			<cosmoz-button
				variant="tertiary"
				@mousedown=${oo}
				@click=${i}
				exportparts="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</cosmoz-button>
		</div>
		<cosmoz-dropdown-content
			popover
			id="content"
			part="content"
			exportparts="wrap, content"
			style="${re(l)}"
			${Rt(d)}
			><slot></slot>${oe([r],()=>r?.()||Jt)}</cosmoz-dropdown-content
		>
	`};customElements.define("cosmoz-dropdown",st(ro,{styleSheets:[no]}));const so=gt`
	:host {
		display: block;
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

	/* Button components own their padding, hover and disabled appearance. */
	::slotted([variant]),
	::slotted([variant]:hover) {
		padding: 0;
		background: none;
		--cosmoz-button-justify-content: flex-start;
	}

	::slotted([variant][disabled]) {
		opacity: 1;
	}
`,io={ArrowDown:(t,e)=>(t+1)%e,ArrowUp:(t,e)=>(t>0?t:e)-1,Home:()=>0,End:(t,e)=>e-1},co=t=>t instanceof HTMLElement&&!t.matches('hr, [role="separator"]'),lo=t=>!t.hidden&&!t.hasAttribute("disabled")&&!t.disabled,ao=t=>{const e=vt([]);return U(()=>{const n=o=>{const r=io[o.key];if(!r||o.defaultPrevented)return;const s=(e.current??[]).filter(lo);if(s.length===0)return;o.preventDefault();const i=o.composedPath();s[r(s.findIndex(c=>i.includes(c)),s.length)].focus()};return t.addEventListener("keydown",n),()=>t.removeEventListener("keydown",n)},[]),B`<slot
		@slotchange=${n=>e.current=n.target.assignedElements({flatten:!0}).filter(co)}
	></slot>`};customElements.define("cosmoz-dropdown-list",st(ao,{styleSheets:[so]}));const uo=({placement:t})=>B` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",st(uo));const ho={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},Z={render:()=>B`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},G={render:()=>B`<cosmoz-dropdown-menu>
            <span slot="button">Menu</span>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <a href="#">Achor 1</a>
        </cosmoz-dropdown-menu>`},J={name:"Dropdown Menu – Slotted Elements",render:()=>B`<cosmoz-dropdown-menu>
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
        </cosmoz-dropdown-menu>`};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};const go=["Dropdown","DropdownMenu","DropdownMenuSlotted"];export{Z as Dropdown,G as DropdownMenu,J as DropdownMenuSlotted,go as __namedExportsOrder,ho as default};
