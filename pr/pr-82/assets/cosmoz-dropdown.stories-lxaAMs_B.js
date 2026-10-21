import{E as mt,b as B,u as Q,a as U,c as Jt,A as Qt}from"./iframe--w8rjZhC.js";import{e as It,i as Bt,t as te,c as gt,a as st,u as $t,b as ee,d as tt,n as Rt}from"./cosmoz-dropdown-next-Dba2IhgH.js";import"./preload-helper-PPVm8Dsz.js";const oe={},ne=It(class extends Bt{constructor(){super(...arguments),this.ot=oe}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return mt}else if(this.ot===e)return mt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const Wt="important",re=" !"+Wt,se=It(class extends Bt{constructor(t){if(super(t),t.type!==te.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(re);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?Wt:""):n[o]=r}}return mt}}),ie=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ce=gt`
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
`,le=()=>B`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",ie(st(le,{styleSheets:[ce]})));const et=Math.min,P=Math.max,ot=Math.round,K=Math.floor,C=t=>({x:t,y:t}),ae={left:"right",right:"left",bottom:"top",top:"bottom"},de={start:"end",end:"start"};function St(t,e,n){return P(t,et(e,n))}function wt(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Nt(t){return t==="x"?"y":"x"}function Ht(t){return t==="y"?"height":"width"}const ue=new Set(["top","bottom"]);function M(t){return ue.has(H(t))?"y":"x"}function Vt(t){return Nt(M(t))}function fe(t,e,n){n===void 0&&(n=!1);const o=vt(t),r=Vt(t),s=Ht(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=nt(i)),[i,nt(i)]}function me(t){const e=nt(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>de[e])}const Ct=["left","right"],Ot=["right","left"],pe=["top","bottom"],he=["bottom","top"];function ge(t,e,n){switch(t){case"top":case"bottom":return n?e?Ot:Ct:e?Ct:Ot;case"left":case"right":return e?pe:he;default:return[]}}function we(t,e,n,o){const r=vt(t);let s=ge(H(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(pt)))),s}function nt(t){return t.replace(/left|right|bottom|top/g,e=>ae[e])}function ve(t){return{top:0,right:0,bottom:0,left:0,...t}}function be(t){return typeof t!="number"?ve(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Tt(t,e,n){let{reference:o,floating:r}=t;const s=M(e),i=Vt(e),c=Ht(i),l=H(e),a=s==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(vt(e)){case"start":m[i]-=f*(n&&a?-1:1);break;case"end":m[i]+=f*(n&&a?-1:1);break}return m}async function ye(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=wt(e,t),h=be(m),w=c[f?d==="floating"?"reference":"floating":d],p=rt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),v=d==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),y=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},E=rt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:l}):v);return{top:(p.top-E.top+h.top)/y.y,bottom:(E.bottom-p.bottom+h.bottom)/y.y,left:(p.left-E.left+h.left)/y.x,right:(E.right-p.right+h.right)/y.x}}const xe=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Tt(a,o,l),f=o,m={},h=0;for(let w=0;w<c.length;w++){var g;const{name:p,fn:v}=c[w],{x:b,y,data:E,reset:x}=await v({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:m,rects:a,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:ye},elements:{reference:t,floating:e}});u=b??u,d=y??d,m={...m,[p]:{...m[p],...E}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(a=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:u,y:d}=Tt(a,f,l)),w=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:m}},ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=wt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=H(r),v=M(c),b=H(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),E=f||(b||!g?[nt(c)]:me(c)),x=h!=="none";!f&&x&&E.push(...we(c,g,h,y));const $=[c,...E],dt=await l.detectOverflow(e,w),Y=[];let W=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&Y.push(dt[p]),d){const D=fe(r,i,y);Y.push(dt[D[0]],dt[D[1]])}if(W=[...W,{placement:r,overflows:Y}],!Y.every(D=>D<=0)){var zt,Et;const D=(((zt=s.flip)==null?void 0:zt.index)||0)+1,ut=$[D];if(ut&&(!(d==="alignment"?v!==M(ut):!1)||W.every(A=>M(A.placement)===v?A.overflows[0]>0:!0)))return{data:{index:D,overflows:W},reset:{placement:ut}};let j=(Et=W.filter(F=>F.overflows[0]<=0).sort((F,A)=>F.overflows[1]-A.overflows[1])[0])==null?void 0:Et.placement;if(!j)switch(m){case"bestFit":{var At;const F=(At=W.filter(A=>{if(x){const L=M(A.placement);return L===v||L==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(L=>L>0).reduce((L,Gt)=>L+Gt,0)]).sort((A,L)=>A[1]-L[1])[0])==null?void 0:At[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},Ee=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:p=>{let{x:v,y:b}=p;return{x:v,y:b}}},...a}=wt(t,e),u={x:n,y:o},d=await s.detectOverflow(e,a),f=M(H(r)),m=Nt(f);let h=u[m],g=u[f];if(i){const p=m==="y"?"top":"left",v=m==="y"?"bottom":"right",b=h+d[p],y=h-d[v];h=St(b,h,y)}if(c){const p=f==="y"?"top":"left",v=f==="y"?"bottom":"right",b=g+d[p],y=g-d[v];g=St(b,g,y)}const w=l.fn({...e,[m]:h,[f]:g});return{...w,data:{x:w.x-n,y:w.y-o,enabled:{[m]:i,[f]:c}}}}}};function it(){return typeof window<"u"}function _(t){return _t(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){var e;return(e=(_t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _t(t){return it()?t instanceof Node||t instanceof z(t).Node:!1}function R(t){return it()?t instanceof Element||t instanceof z(t).Element:!1}function O(t){return it()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function Lt(t){return!it()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}const Ae=new Set(["inline","contents"]);function q(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!Ae.has(r)}const Re=new Set(["table","td","th"]);function Se(t){return Re.has(_(t))}const Ce=[":popover-open",":modal"];function ct(t){return Ce.some(e=>{try{return t.matches(e)}catch{return!1}})}const Oe=["transform","translate","scale","rotate","perspective"],Te=["transform","translate","scale","rotate","perspective","filter"],Le=["paint","layout","strict","content"];function bt(t){const e=yt(),n=R(t)?S(t):t;return Oe.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Te.some(o=>(n.willChange||"").includes(o))||Le.some(o=>(n.contain||"").includes(o))}function ke(t){let e=k(t);for(;O(e)&&!V(e);){if(bt(e))return e;if(ct(e))return null;e=k(e)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const De=new Set(["html","body","#document"]);function V(t){return De.has(_(t))}function S(t){return z(t).getComputedStyle(t)}function lt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lt(t)&&t.host||T(t);return Lt(e)?e.host:e}function jt(t){const e=k(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&q(e)?e:jt(e)}function X(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=jt(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=z(r);if(s){const c=ht(i);return e.concat(i,i.visualViewport||[],q(r)?r:[],c&&n?X(c):[])}return e.concat(r,X(r,[],n))}function ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Xt(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=O(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=ot(n)!==s||ot(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function xt(t){return R(t)?t:t.contextElement}function N(t){const e=xt(t);if(!O(e))return C(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=Xt(e);let i=(s?ot(n.width):n.width)/o,c=(s?ot(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Fe=C(0);function Ut(t){const e=z(t);return!yt()||!e.visualViewport?Fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Me(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=xt(t);let i=C(1);e&&(o?R(o)&&(i=N(o)):i=N(t));const c=Me(s,n,o)?Ut(s):C(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,u=r.width/i.x,d=r.height/i.y;if(s){const f=z(s),m=o&&R(o)?z(o):o;let h=f,g=ht(h);for(;g&&o&&m!==h;){const w=N(g),p=g.getBoundingClientRect(),v=S(g),b=p.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,y=p.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,a*=w.y,u*=w.x,d*=w.y,l+=b,a+=y,h=z(g),g=ht(h)}}return rt({width:u,height:d,x:l,y:a})}function at(t,e){const n=lt(t).scrollLeft;return e?e.left+n:I(T(t)).left+n}function qt(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-at(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function Pe(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=T(o),c=e?ct(e.floating):!1;if(o===i||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=C(1);const u=C(0),d=O(o);if((d||!d&&!s)&&((_(o)!=="body"||q(i))&&(l=lt(o)),O(o))){const m=I(o);a=N(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=i&&!d&&!s?qt(i,l):C(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+u.x+f.x,y:n.y*a.y-l.scrollTop*a.y+u.y+f.y}}function Ie(t){return Array.from(t.getClientRects())}function Be(t){const e=T(t),n=lt(t),o=t.ownerDocument.body,r=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+at(t);const c=-n.scrollTop;return S(o).direction==="rtl"&&(i+=P(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:c}}const kt=25;function $e(t,e){const n=z(t),o=T(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const u=yt();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=at(o);if(a<=0){const u=o.ownerDocument,d=u.body,f=getComputedStyle(d),m=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,h=Math.abs(o.clientWidth-d.clientWidth-m);h<=kt&&(s-=h)}else a<=kt&&(s+=a);return{width:s,height:i,x:c,y:l}}const We=new Set(["absolute","fixed"]);function Ne(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=O(t)?N(t):C(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=o*s.y;return{width:i,height:c,x:l,y:a}}function Dt(t,e,n){let o;if(e==="viewport")o=$e(t,n);else if(e==="document")o=Be(T(t));else if(R(e))o=Ne(e,n);else{const r=Ut(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return rt(o)}function Yt(t,e){const n=k(t);return n===e||!R(n)||V(n)?!1:S(n).position==="fixed"||Yt(n,e)}function He(t,e){const n=e.get(t);if(n)return n;let o=X(t,[],!1).filter(c=>R(c)&&_(c)!=="body"),r=null;const s=S(t).position==="fixed";let i=s?k(t):t;for(;R(i)&&!V(i);){const c=S(i),l=bt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&We.has(r.position)||q(i)&&!l&&Yt(t,i))?o=o.filter(u=>u!==i):r=c,i=k(i)}return e.set(t,o),o}function Ve(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?ct(e)?[]:He(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,u)=>{const d=Dt(e,u,r);return a.top=P(d.top,a.top),a.right=et(d.right,a.right),a.bottom=et(d.bottom,a.bottom),a.left=P(d.left,a.left),a},Dt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function _e(t){const{width:e,height:n}=Xt(t);return{width:e,height:n}}function je(t,e,n){const o=O(e),r=T(e),s=n==="fixed",i=I(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=C(0);function a(){l.x=at(r)}if(o||!o&&!s)if((_(e)!=="body"||q(r))&&(c=lt(e)),o){const m=I(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&a();s&&!o&&r&&a();const u=r&&!o&&!s?qt(r,c):C(0),d=i.left+c.scrollLeft-l.x-u.x,f=i.top+c.scrollTop-l.y-u.y;return{x:d,y:f,width:i.width,height:i.height}}function ft(t){return S(t).position==="static"}function Ft(t,e){if(!O(t)||S(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return T(t)===n&&(n=n.ownerDocument.body),n}function Kt(t,e){const n=z(t);if(ct(t))return n;if(!O(t)){let r=k(t);for(;r&&!V(r);){if(R(r)&&!ft(r))return r;r=k(r)}return n}let o=Ft(t,e);for(;o&&Se(o)&&ft(o);)o=Ft(o,e);return o&&V(o)&&ft(o)&&!bt(o)?n:o||ke(t)||n}const Xe=async function(t){const e=this.getOffsetParent||Kt,n=this.getDimensions,o=await n(t.floating);return{reference:je(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ue(t){return S(t).direction==="rtl"}const qe={convertOffsetParentRelativeRectToViewportRelativeRect:Pe,getDocumentElement:T,getClippingRect:Ve,getOffsetParent:Kt,getElementRects:Xe,getClientRects:Ie,getDimensions:_e,getScale:N,isElement:R,isRTL:Ue};function Zt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ye(t,e){let n=null,o;const r=T(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:u,top:d,width:f,height:m}=a;if(c||e(),!f||!m)return;const h=K(d),g=K(r.clientWidth-(u+f)),w=K(r.clientHeight-(d+m)),p=K(u),b={rootMargin:-h+"px "+-g+"px "+-w+"px "+-p+"px",threshold:P(0,et(1,l))||1};let y=!0;function E(x){const $=x[0].intersectionRatio;if($!==l){if(!y)return i();$?i(!1,$):o=setTimeout(()=>{i(!1,1e-7)},1e3)}$===1&&!Zt(a,t.getBoundingClientRect())&&i(),y=!1}try{n=new IntersectionObserver(E,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(t)}return i(!0),s}function Ke(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=xt(t),u=r||s?[...a?X(a):[],...X(e)]:[];u.forEach(p=>{r&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=a&&c?Ye(a,n):null;let f=-1,m=null;i&&(m=new ResizeObserver(p=>{let[v]=p;v&&v.target===a&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(e)})),n()}),a&&!l&&m.observe(a),m.observe(e));let h,g=l?I(t):null;l&&w();function w(){const p=I(t);g&&!Zt(g,p)&&n(),g=p,h=requestAnimationFrame(w)}return n(),()=>{var p;u.forEach(v=>{r&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),d?.(),(p=m)==null||p.disconnect(),m=null,l&&cancelAnimationFrame(h)}}const Ze=Ee,Ge=ze,Je=(t,e,n)=>{const o=new Map,r={platform:qe,...n},s={...r.platform,_c:o};return xe(t,e,{...r,platform:s})},Qe=[Ge({fallbackAxisSideDirection:"start",crossAxis:!1}),Ze()],to=({placement:t="bottom-start",strategy:e,middleware:n=Qe}={})=>{const[o,r]=Q(),[s,i]=Q(),[c,l]=Q();return U(()=>{if(!o||!(s instanceof HTMLElement)){l(void 0);return}return Ke(o,s,()=>Je(o,s,{placement:t,strategy:e,middleware:n}).then(l))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:Jt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Mt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,eo=({disabled:t,onFocus:e})=>{const[n,o]=Q(),{focused:r,closed:s}=n||{},i=r&&!t,c=ee({closed:s,onFocus:e}),l=tt(u=>o(d=>({...d,closed:u})),[]),a=tt(u=>{const d=u.currentTarget;return Mt(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return U(()=>{if(!i)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=c;d.key==="Escape"&&!f?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:a,onFocus:tt(u=>{const d=Mt(u.currentTarget);o({focused:d}),c.onFocus?.(d)},[c])}},oo=t=>{const e=eo(t),{onFocus:n}=e,o=$t();return U(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},no=t=>t.preventDefault(),ro=gt`
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
`,so=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=oo(t),c=$t(),{styles:l,setReference:a,setFloating:u}=to({placement:e,strategy:n,middleware:o}),d=tt(f=>{c.current=f,u(f)},[u]);return U(()=>{const f=c.current;f&&(s&&!f.matches(":popover-open")&&f.showPopover?.(),!s&&f.matches(":popover-open")&&f.hidePopover?.())},[s]),B`
		<div class="anchor" part="anchor" ${Rt(a)}>
			<cosmoz-button
				variant="tertiary"
				@mousedown=${no}
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
			style="${se(l)}"
			${Rt(d)}
			><slot></slot>${ne([r],()=>r?.()||Qt)}</cosmoz-dropdown-content
		>
	`};customElements.define("cosmoz-dropdown",st(so,{styleSheets:[ro]}));const io=gt`
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
`,co={ArrowDown:t=>[t+1,1],ArrowUp:(t,e)=>[(t<0?e:t)-1,-1],Home:()=>[0,1],End:(t,e)=>[e-1,-1]},Pt=t=>{const e=co[t.key],n=t.currentTarget.shadowRoot?.querySelector("slot");if(!e||!n||t.defaultPrevented)return;const o=n.assignedElements({flatten:!0}).filter(c=>c instanceof HTMLElement&&!c.matches("[disabled], [hidden]")),r=o.length;if(r===0)return;t.preventDefault();const[s,i]=e(o.findIndex(c=>c.matches(":focus-within")),r);for(let c=0;c<r;c++){const l=o[((s+c*i)%r+r)%r];if(l.focus(),l.matches(":focus-within"))return}},lo=t=>(U(()=>(t.addEventListener("keydown",Pt),()=>t.removeEventListener("keydown",Pt)),[]),B` <slot></slot> `);customElements.define("cosmoz-dropdown-list",st(lo,{styleSheets:[io]}));const ao=({placement:t})=>B` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",st(ao));const po={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},Z={render:()=>B`<cosmoz-dropdown>
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
}`,...J.parameters?.docs?.source}}};const ho=["Dropdown","DropdownMenu","DropdownMenuSlotted"];export{Z as Dropdown,G as DropdownMenu,J as DropdownMenuSlotted,ho as __namedExportsOrder,po as default};
