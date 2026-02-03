import{E as dt,c as mt,a as nt,b as I,u as G,d as ht,e as Zt,f as Gt,g as at,A as Jt}from"./iframe-DCH9ByOY.js";import{e as Mt,i as It,t as Qt,n as Ct}from"./cosmoz-dropdown-next-DoemZQmN.js";import"./cosmoz-menu-label-CKxMYdFg.js";import"./preload-helper-PPVm8Dsz.js";const te={},ee=Mt(class extends It{constructor(){super(...arguments),this.ot=te}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,r)=>n===this.ot[r]))return dt}else if(this.ot===e)return dt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});const $t="important",ne=" !"+$t,oe=Mt(class extends It{constructor(t){if(super(t),t.type!==Qt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(ne);n.includes("-")||i?o.setProperty(n,i?r.slice(0,-11):r,i?$t:""):o[n]=r}}return dt}});function re(t,e,o){return t?e(t):o?.(t)}const ie=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},se=mt`
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
`,ce=()=>I`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",ie(nt(ce,{styleSheets:[se]})));const J=Math.min,M=Math.max,Q=Math.round,q=Math.floor,O=t=>({x:t,y:t}),le={left:"right",right:"left",bottom:"top",top:"bottom"},ae={start:"end",end:"start"};function Rt(t,e,o){return M(t,J(e,o))}function gt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function wt(t){return t.split("-")[1]}function Bt(t){return t==="x"?"y":"x"}function Wt(t){return t==="y"?"height":"width"}const fe=new Set(["top","bottom"]);function P(t){return fe.has(V(t))?"y":"x"}function Nt(t){return Bt(P(t))}function de(t,e,o){o===void 0&&(o=!1);const n=wt(t),r=Nt(t),i=Wt(r);let s=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=tt(s)),[s,tt(s)]}function ue(t){const e=tt(t);return[ut(t),e,ut(e)]}function ut(t){return t.replace(/start|end/g,e=>ae[e])}const St=["left","right"],Ot=["right","left"],pe=["top","bottom"],me=["bottom","top"];function he(t,e,o){switch(t){case"top":case"bottom":return o?e?Ot:St:e?St:Ot;case"left":case"right":return e?pe:me;default:return[]}}function ge(t,e,o,n){const r=wt(t);let i=he(V(t),o==="start",n);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(ut)))),i}function tt(t){return t.replace(/left|right|bottom|top/g,e=>le[e])}function we(t){return{top:0,right:0,bottom:0,left:0,...t}}function ve(t){return typeof t!="number"?we(t):{top:t,right:t,bottom:t,left:t}}function et(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Lt(t,e,o){let{reference:n,floating:r}=t;const i=P(e),s=Nt(e),c=Wt(s),l=V(e),a=i==="y",d=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2,p=n[c]/2-r[c]/2;let u;switch(l){case"top":u={x:d,y:n.y-r.height};break;case"bottom":u={x:d,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:f};break;case"left":u={x:n.x-r.width,y:f};break;default:u={x:n.x,y:n.y}}switch(wt(e)){case"start":u[s]-=p*(o&&a?-1:1);break;case"end":u[s]+=p*(o&&a?-1:1);break}return u}async function xe(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:i,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:u=0}=gt(e,t),h=ve(u),w=c[p?f==="floating"?"reference":"floating":f],m=et(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(w)))==null||o?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),v=f==="floating"?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),y=await(i.isElement==null?void 0:i.isElement(x))?await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1}:{x:1,y:1},E=et(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:x,strategy:l}):v);return{top:(m.top-E.top+h.top)/y.y,bottom:(E.bottom-m.bottom+h.bottom)/y.y,left:(m.left-E.left+h.left)/y.x,right:(E.right-m.right+h.right)/y.x}}const ye=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:i=[],platform:s}=o,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=Lt(a,n,l),p=n,u={},h=0;for(let w=0;w<c.length;w++){var g;const{name:m,fn:v}=c[w],{x,y,data:E,reset:b}=await v({x:d,y:f,initialPlacement:n,placement:p,strategy:r,middlewareData:u,rects:a,platform:{...s,detectOverflow:(g=s.detectOverflow)!=null?g:xe},elements:{reference:t,floating:e}});d=x??d,f=y??f,u={...u,[m]:{...u[m],...E}},b&&h<=50&&(h++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:d,y:f}=Lt(a,p,l)),w=-1)}return{x:d,y:f,placement:p,strategy:r,middlewareData:u}},be=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=gt(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const m=V(r),v=P(c),x=V(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),E=p||(x||!g?[tt(c)]:ue(c)),b=h!=="none";!p&&b&&E.push(...ge(c,g,h,y));const B=[c,...E],ct=await l.detectOverflow(e,w),Y=[];let W=((n=i.flip)==null?void 0:n.overflows)||[];if(d&&Y.push(ct[m]),f){const D=de(r,s,y);Y.push(ct[D[0]],ct[D[1]])}if(W=[...W,{placement:r,overflows:Y}],!Y.every(D=>D<=0)){var bt,At;const D=(((bt=i.flip)==null?void 0:bt.index)||0)+1,lt=B[D];if(lt&&(!(f==="alignment"?v!==P(lt):!1)||W.every(C=>P(C.placement)===v?C.overflows[0]>0:!0)))return{data:{index:D,overflows:W},reset:{placement:lt}};let j=(At=W.filter(F=>F.overflows[0]<=0).sort((F,C)=>F.overflows[1]-C.overflows[1])[0])==null?void 0:At.placement;if(!j)switch(u){case"bestFit":{var Et;const F=(Et=W.filter(C=>{if(b){const z=P(C.placement);return z===v||z==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(z=>z>0).reduce((z,Kt)=>z+Kt,0)]).sort((C,z)=>C[1]-z[1])[0])==null?void 0:Et[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},Ae=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r,platform:i}=e,{mainAxis:s=!0,crossAxis:c=!1,limiter:l={fn:m=>{let{x:v,y:x}=m;return{x:v,y:x}}},...a}=gt(t,e),d={x:o,y:n},f=await i.detectOverflow(e,a),p=P(V(r)),u=Bt(p);let h=d[u],g=d[p];if(s){const m=u==="y"?"top":"left",v=u==="y"?"bottom":"right",x=h+f[m],y=h-f[v];h=Rt(x,h,y)}if(c){const m=p==="y"?"top":"left",v=p==="y"?"bottom":"right",x=g+f[m],y=g-f[v];g=Rt(x,g,y)}const w=l.fn({...e,[u]:h,[p]:g});return{...w,data:{x:w.x-o,y:w.y-n,enabled:{[u]:s,[p]:c}}}}}};function ot(){return typeof window<"u"}function _(t){return Vt(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){var e;return(e=(Vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Vt(t){return ot()?t instanceof Node||t instanceof A(t).Node:!1}function R(t){return ot()?t instanceof Element||t instanceof A(t).Element:!1}function L(t){return ot()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function Tt(t){return!ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}const Ee=new Set(["inline","contents"]);function U(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!Ee.has(r)}const Ce=new Set(["table","td","th"]);function Re(t){return Ce.has(_(t))}const Se=[":popover-open",":modal"];function rt(t){return Se.some(e=>{try{return t.matches(e)}catch{return!1}})}const Oe=["transform","translate","scale","rotate","perspective"],Le=["transform","translate","scale","rotate","perspective","filter"],Te=["paint","layout","strict","content"];function vt(t){const e=xt(),o=R(t)?S(t):t;return Oe.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||Le.some(n=>(o.willChange||"").includes(n))||Te.some(n=>(o.contain||"").includes(n))}function ze(t){let e=k(t);for(;L(e)&&!H(e);){if(vt(e))return e;if(rt(e))return null;e=k(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ke=new Set(["html","body","#document"]);function H(t){return ke.has(_(t))}function S(t){return A(t).getComputedStyle(t)}function it(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Tt(t)&&t.host||T(t);return Tt(e)?e.host:e}function Ht(t){const e=k(t);return H(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&U(e)?e:Ht(e)}function X(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Ht(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=A(r);if(i){const c=pt(s);return e.concat(s,s.visualViewport||[],U(r)?r:[],c&&o?X(c):[])}return e.concat(r,X(r,[],o))}function pt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _t(t){const e=S(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=L(t),i=r?t.offsetWidth:o,s=r?t.offsetHeight:n,c=Q(o)!==i||Q(n)!==s;return c&&(o=i,n=s),{width:o,height:n,$:c}}function yt(t){return R(t)?t:t.contextElement}function N(t){const e=yt(t);if(!L(e))return O(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:i}=_t(e);let s=(i?Q(o.width):o.width)/n,c=(i?Q(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const De=O(0);function jt(t){const e=A(t);return!xt()||!e.visualViewport?De:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fe(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function $(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),i=yt(t);let s=O(1);e&&(n?R(n)&&(s=N(n)):s=N(t));const c=Fe(i,o,n)?jt(i):O(0);let l=(r.left+c.x)/s.x,a=(r.top+c.y)/s.y,d=r.width/s.x,f=r.height/s.y;if(i){const p=A(i),u=n&&R(n)?A(n):n;let h=p,g=pt(h);for(;g&&n&&u!==h;){const w=N(g),m=g.getBoundingClientRect(),v=S(g),x=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,y=m.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,f*=w.y,l+=x,a+=y,h=A(g),g=pt(h)}}return et({width:d,height:f,x:l,y:a})}function st(t,e){const o=it(t).scrollLeft;return e?e.left+o:$(T(t)).left+o}function Xt(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-st(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function Pe(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const i=r==="fixed",s=T(n),c=e?rt(e.floating):!1;if(n===s||c&&i)return o;let l={scrollLeft:0,scrollTop:0},a=O(1);const d=O(0),f=L(n);if((f||!f&&!i)&&((_(n)!=="body"||U(s))&&(l=it(n)),L(n))){const u=$(n);a=N(n),d.x=u.x+n.clientLeft,d.y=u.y+n.clientTop}const p=s&&!f&&!i?Xt(s,l):O(0);return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+d.x+p.x,y:o.y*a.y-l.scrollTop*a.y+d.y+p.y}}function Me(t){return Array.from(t.getClientRects())}function Ie(t){const e=T(t),o=it(t),n=t.ownerDocument.body,r=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+st(t);const c=-o.scrollTop;return S(n).direction==="rtl"&&(s+=M(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:s,y:c}}const zt=25;function $e(t,e){const o=A(t),n=T(t),r=o.visualViewport;let i=n.clientWidth,s=n.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const d=xt();(!d||d&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=st(n);if(a<=0){const d=n.ownerDocument,f=d.body,p=getComputedStyle(f),u=d.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,h=Math.abs(n.clientWidth-f.clientWidth-u);h<=zt&&(i-=h)}else a<=zt&&(i+=a);return{width:i,height:s,x:c,y:l}}const Be=new Set(["absolute","fixed"]);function We(t,e){const o=$(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,i=L(t)?N(t):O(1),s=t.clientWidth*i.x,c=t.clientHeight*i.y,l=r*i.x,a=n*i.y;return{width:s,height:c,x:l,y:a}}function kt(t,e,o){let n;if(e==="viewport")n=$e(t,o);else if(e==="document")n=Ie(T(t));else if(R(e))n=We(e,o);else{const r=jt(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return et(n)}function Ut(t,e){const o=k(t);return o===e||!R(o)||H(o)?!1:S(o).position==="fixed"||Ut(o,e)}function Ne(t,e){const o=e.get(t);if(o)return o;let n=X(t,[],!1).filter(c=>R(c)&&_(c)!=="body"),r=null;const i=S(t).position==="fixed";let s=i?k(t):t;for(;R(s)&&!H(s);){const c=S(s),l=vt(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&Be.has(r.position)||U(s)&&!l&&Ut(t,s))?n=n.filter(d=>d!==s):r=c,s=k(s)}return e.set(t,n),n}function Ve(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const s=[...o==="clippingAncestors"?rt(e)?[]:Ne(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((a,d)=>{const f=kt(e,d,r);return a.top=M(f.top,a.top),a.right=J(f.right,a.right),a.bottom=J(f.bottom,a.bottom),a.left=M(f.left,a.left),a},kt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function He(t){const{width:e,height:o}=_t(t);return{width:e,height:o}}function _e(t,e,o){const n=L(e),r=T(e),i=o==="fixed",s=$(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const l=O(0);function a(){l.x=st(r)}if(n||!n&&!i)if((_(e)!=="body"||U(r))&&(c=it(e)),n){const u=$(e,!0,i,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else r&&a();i&&!n&&r&&a();const d=r&&!n&&!i?Xt(r,c):O(0),f=s.left+c.scrollLeft-l.x-d.x,p=s.top+c.scrollTop-l.y-d.y;return{x:f,y:p,width:s.width,height:s.height}}function ft(t){return S(t).position==="static"}function Dt(t,e){if(!L(t)||S(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return T(t)===o&&(o=o.ownerDocument.body),o}function Yt(t,e){const o=A(t);if(rt(t))return o;if(!L(t)){let r=k(t);for(;r&&!H(r);){if(R(r)&&!ft(r))return r;r=k(r)}return o}let n=Dt(t,e);for(;n&&Re(n)&&ft(n);)n=Dt(n,e);return n&&H(n)&&ft(n)&&!vt(n)?o:n||ze(t)||o}const je=async function(t){const e=this.getOffsetParent||Yt,o=this.getDimensions,n=await o(t.floating);return{reference:_e(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Xe(t){return S(t).direction==="rtl"}const Ue={convertOffsetParentRelativeRectToViewportRelativeRect:Pe,getDocumentElement:T,getClippingRect:Ve,getOffsetParent:Yt,getElementRects:je,getClientRects:Me,getDimensions:He,getScale:N,isElement:R,isRTL:Xe};function qt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ye(t,e){let o=null,n;const r=T(t);function i(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const a=t.getBoundingClientRect(),{left:d,top:f,width:p,height:u}=a;if(c||e(),!p||!u)return;const h=q(f),g=q(r.clientWidth-(d+p)),w=q(r.clientHeight-(f+u)),m=q(d),x={rootMargin:-h+"px "+-g+"px "+-w+"px "+-m+"px",threshold:M(0,J(1,l))||1};let y=!0;function E(b){const B=b[0].intersectionRatio;if(B!==l){if(!y)return s();B?s(!1,B):n=setTimeout(()=>{s(!1,1e-7)},1e3)}B===1&&!qt(a,t.getBoundingClientRect())&&s(),y=!1}try{o=new IntersectionObserver(E,{...x,root:r.ownerDocument})}catch{o=new IntersectionObserver(E,x)}o.observe(t)}return s(!0),i}function qe(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=yt(t),d=r||i?[...a?X(a):[],...X(e)]:[];d.forEach(m=>{r&&m.addEventListener("scroll",o,{passive:!0}),i&&m.addEventListener("resize",o)});const f=a&&c?Ye(a,o):null;let p=-1,u=null;s&&(u=new ResizeObserver(m=>{let[v]=m;v&&v.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=u)==null||x.observe(e)})),o()}),a&&!l&&u.observe(a),u.observe(e));let h,g=l?$(t):null;l&&w();function w(){const m=$(t);g&&!qt(g,m)&&o(),g=m,h=requestAnimationFrame(w)}return o(),()=>{var m;d.forEach(v=>{r&&v.removeEventListener("scroll",o),i&&v.removeEventListener("resize",o)}),f?.(),(m=u)==null||m.disconnect(),u=null,l&&cancelAnimationFrame(h)}}const Ke=Ae,Ze=be,Ge=(t,e,o)=>{const n=new Map,r={platform:Ue,...o},i={...r.platform,_c:n};return ye(t,e,{...r,platform:i})},Je=[Ze({fallbackAxisSideDirection:"start",crossAxis:!1}),Ke()],Qe=({placement:t="bottom-start",strategy:e,middleware:o=Je}={})=>{const[n,r]=G(),[i,s]=G(),[c,l]=G();return ht(()=>{if(!n||!(i instanceof HTMLElement)){l(void 0);return}return qe(n,i,()=>Ge(n,i,{placement:t,strategy:e,middleware:o}).then(l))},[n,i,t,e,o]),{setReference:r,setFloating:s,styles:Zt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Ft=t=>t.matches(":focus-within"),tn=({disabled:t,onFocus:e})=>{const[o,n]=G(),{focused:r,closed:i}=o||{},s=r&&!t,c=Gt({closed:i,onFocus:e}),l=at(d=>n(f=>({...f,closed:d})),[]),a=at(d=>{const f=d.currentTarget;return Ft(f)?n(p=>({focused:!0,closed:!p?.closed})):f.focus()},[]);return ht(()=>{if(!s)return;const d=f=>{if(f.defaultPrevented)return;const{closed:p}=c;f.key==="Escape"&&!p?(f.preventDefault(),l(!0)):["ArrowUp","Up"].includes(f.key)&&p&&(f.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[s]),{focused:s,active:s&&!i,setClosed:l,onToggle:a,onFocus:at(d=>{const f=Ft(d.currentTarget);n({focused:f}),c.onFocus?.(f)},[c])}},Pt=["focusin","focusout"],en=t=>{const e=tn(t),{onFocus:o}=e;return ht(()=>(t.setAttribute("tabindex","0"),Pt.forEach(n=>t.addEventListener(n,o)),()=>{Pt.forEach(n=>t.removeEventListener(n,o))}),[]),e},nn=t=>t.preventDefault(),on=mt`
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
`,rn=t=>{const{placement:e,strategy:o,middleware:n,render:r}=t,{active:i,onToggle:s}=en(t),{styles:c,setReference:l,setFloating:a}=Qe({placement:e,strategy:o,middleware:n});return I` <div class="anchor" part="anchor" ${Ct(l)}>
			<button
				@mousedown=${nn}
				@click=${s}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${re(i,()=>I`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${oe(c)}"
					@connected=${d=>d.target.showPopover?.()}
					${Ct(a)}
					><slot></slot>${ee([r],()=>r?.()||Jt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",nt(rn,{styleSheets:[on]}));const sn=mt`
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
`,cn=()=>I` <slot></slot> `;customElements.define("cosmoz-dropdown-list",nt(cn,{styleSheets:[sn]}));const ln=({placement:t})=>I` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",nt(ln));const pn={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},K={render:()=>I`<cosmoz-dropdown>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <button>Item 6</button>
        </cosmoz-dropdown>`},Z={render:()=>I`<cosmoz-dropdown-menu>
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
