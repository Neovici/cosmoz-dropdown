import{E as mt,c as vt,a as rt,b as B,u as J,d as st,e as pt,A as Jt}from"./iframe-CJkg9OtG.js";import{e as It,i as Bt,t as Qt,u as $t,a as Q,n as Rt}from"./cosmoz-dropdown-next-8-v9rkM4.js";import"./preload-helper-PPVm8Dsz.js";const te={},ee=It(class extends Bt{constructor(){super(...arguments),this.ot=te}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return mt}else if(this.ot===e)return mt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const Wt="important",oe=" !"+Wt,ne=It(class extends Bt{constructor(t){if(super(t),t.type!==Qt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(oe);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?Wt:""):n[o]=r}}return mt}}),re=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},se=vt`
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
		padding: var(--cz-spacing) calc(var(--cz-spacing) * 1.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		border: 1px solid
			var(--cosmoz-dropdown-menu-border-color, var(--cz-color-border-primary));
	}
	::slotted(*) {
		display: block;
	}
`,ie=()=>B`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",re(rt(ie,{styleSheets:[se]})));const tt=Math.min,P=Math.max,et=Math.round,Y=Math.floor,S=t=>({x:t,y:t}),ce={left:"right",right:"left",bottom:"top",top:"bottom"},le={start:"end",end:"start"};function St(t,e,n){return P(t,tt(e,n))}function wt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function bt(t){return t.split("-")[1]}function Nt(t){return t==="x"?"y":"x"}function Vt(t){return t==="y"?"height":"width"}const ae=new Set(["top","bottom"]);function M(t){return ae.has(V(t))?"y":"x"}function Ht(t){return Nt(M(t))}function de(t,e,n){n===void 0&&(n=!1);const o=bt(t),r=Ht(t),s=Vt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=ot(i)),[i,ot(i)]}function ue(t){const e=ot(t);return[ht(t),e,ht(e)]}function ht(t){return t.replace(/start|end/g,e=>le[e])}const Ot=["left","right"],Tt=["right","left"],fe=["top","bottom"],me=["bottom","top"];function pe(t,e,n){switch(t){case"top":case"bottom":return n?e?Tt:Ot:e?Ot:Tt;case"left":case"right":return e?fe:me;default:return[]}}function he(t,e,n,o){const r=bt(t);let s=pe(V(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(ht)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>ce[e])}function ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function ve(t){return typeof t!="number"?ge(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Lt(t,e,n){let{reference:o,floating:r}=t;const s=M(e),i=Ht(e),c=Vt(i),l=V(e),a=s==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(bt(e)){case"start":m[i]-=f*(n&&a?-1:1);break;case"end":m[i]+=f*(n&&a?-1:1);break}return m}async function we(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=wt(e,t),h=ve(m),v=c[f?d==="floating"?"reference":"floating":d],p=nt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(v)))==null||n?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),w=d==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),y=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},A=nt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:b,strategy:l}):w);return{top:(p.top-A.top+h.top)/y.y,bottom:(A.bottom-p.bottom+h.bottom)/y.y,left:(p.left-A.left+h.left)/y.x,right:(A.right-p.right+h.right)/y.x}}const be=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Lt(a,o,l),f=o,m={},h=0;for(let v=0;v<c.length;v++){var g;const{name:p,fn:w}=c[v],{x:b,y,data:A,reset:x}=await w({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:m,rects:a,platform:{...i,detectOverflow:(g=i.detectOverflow)!=null?g:we},elements:{reference:t,floating:e}});u=b??u,d=y??d,m={...m,[p]:{...m[p],...A}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(a=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:u,y:d}=Lt(a,f,l)),v=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:m}},ye=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...v}=wt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=V(r),w=M(c),b=V(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),A=f||(b||!g?[ot(c)]:ue(c)),x=h!=="none";!f&&x&&A.push(...he(c,g,h,y));const $=[c,...A],dt=await l.detectOverflow(e,v),q=[];let W=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&q.push(dt[p]),d){const D=de(r,i,y);q.push(dt[D[0]],dt[D[1]])}if(W=[...W,{placement:r,overflows:q}],!q.every(D=>D<=0)){var At,Ct;const D=(((At=s.flip)==null?void 0:At.index)||0)+1,ut=$[D];if(ut&&(!(d==="alignment"?w!==M(ut):!1)||W.every(C=>M(C.placement)===w?C.overflows[0]>0:!0)))return{data:{index:D,overflows:W},reset:{placement:ut}};let j=(Ct=W.filter(F=>F.overflows[0]<=0).sort((F,C)=>F.overflows[1]-C.overflows[1])[0])==null?void 0:Ct.placement;if(!j)switch(m){case"bestFit":{var Et;const F=(Et=W.filter(C=>{if(x){const L=M(C.placement);return L===w||L==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(L=>L>0).reduce((L,Gt)=>L+Gt,0)]).sort((C,L)=>C[1]-L[1])[0])==null?void 0:Et[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},xe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:p=>{let{x:w,y:b}=p;return{x:w,y:b}}},...a}=wt(t,e),u={x:n,y:o},d=await s.detectOverflow(e,a),f=M(V(r)),m=Nt(f);let h=u[m],g=u[f];if(i){const p=m==="y"?"top":"left",w=m==="y"?"bottom":"right",b=h+d[p],y=h-d[w];h=St(b,h,y)}if(c){const p=f==="y"?"top":"left",w=f==="y"?"bottom":"right",b=g+d[p],y=g-d[w];g=St(b,g,y)}const v=l.fn({...e,[m]:h,[f]:g});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[m]:i,[f]:c}}}}}};function it(){return typeof window<"u"}function _(t){return _t(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){var e;return(e=(_t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _t(t){return it()?t instanceof Node||t instanceof z(t).Node:!1}function E(t){return it()?t instanceof Element||t instanceof z(t).Element:!1}function O(t){return it()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function kt(t){return!it()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}const ze=new Set(["inline","contents"]);function U(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!ze.has(r)}const Ae=new Set(["table","td","th"]);function Ce(t){return Ae.has(_(t))}const Ee=[":popover-open",":modal"];function ct(t){return Ee.some(e=>{try{return t.matches(e)}catch{return!1}})}const Re=["transform","translate","scale","rotate","perspective"],Se=["transform","translate","scale","rotate","perspective","filter"],Oe=["paint","layout","strict","content"];function yt(t){const e=xt(),n=E(t)?R(t):t;return Re.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Se.some(o=>(n.willChange||"").includes(o))||Oe.some(o=>(n.contain||"").includes(o))}function Te(t){let e=k(t);for(;O(e)&&!H(e);){if(yt(e))return e;if(ct(e))return null;e=k(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Le=new Set(["html","body","#document"]);function H(t){return Le.has(_(t))}function R(t){return z(t).getComputedStyle(t)}function lt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||T(t);return kt(e)?e.host:e}function jt(t){const e=k(t);return H(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&U(e)?e:jt(e)}function X(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=jt(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=z(r);if(s){const c=gt(i);return e.concat(i,i.visualViewport||[],U(r)?r:[],c&&n?X(c):[])}return e.concat(r,X(r,[],n))}function gt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Xt(t){const e=R(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=O(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=et(n)!==s||et(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function zt(t){return E(t)?t:t.contextElement}function N(t){const e=zt(t);if(!O(e))return S(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=Xt(e);let i=(s?et(n.width):n.width)/o,c=(s?et(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const ke=S(0);function Ut(t){const e=z(t);return!xt()||!e.visualViewport?ke:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function De(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=zt(t);let i=S(1);e&&(o?E(o)&&(i=N(o)):i=N(t));const c=De(s,n,o)?Ut(s):S(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,u=r.width/i.x,d=r.height/i.y;if(s){const f=z(s),m=o&&E(o)?z(o):o;let h=f,g=gt(h);for(;g&&o&&m!==h;){const v=N(g),p=g.getBoundingClientRect(),w=R(g),b=p.left+(g.clientLeft+parseFloat(w.paddingLeft))*v.x,y=p.top+(g.clientTop+parseFloat(w.paddingTop))*v.y;l*=v.x,a*=v.y,u*=v.x,d*=v.y,l+=b,a+=y,h=z(g),g=gt(h)}}return nt({width:u,height:d,x:l,y:a})}function at(t,e){const n=lt(t).scrollLeft;return e?e.left+n:I(T(t)).left+n}function qt(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-at(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function Fe(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=T(o),c=e?ct(e.floating):!1;if(o===i||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=S(1);const u=S(0),d=O(o);if((d||!d&&!s)&&((_(o)!=="body"||U(i))&&(l=lt(o)),O(o))){const m=I(o);a=N(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=i&&!d&&!s?qt(i,l):S(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+u.x+f.x,y:n.y*a.y-l.scrollTop*a.y+u.y+f.y}}function Me(t){return Array.from(t.getClientRects())}function Pe(t){const e=T(t),n=lt(t),o=t.ownerDocument.body,r=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+at(t);const c=-n.scrollTop;return R(o).direction==="rtl"&&(i+=P(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:c}}const Dt=25;function Ie(t,e){const n=z(t),o=T(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const u=xt();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=at(o);if(a<=0){const u=o.ownerDocument,d=u.body,f=getComputedStyle(d),m=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,h=Math.abs(o.clientWidth-d.clientWidth-m);h<=Dt&&(s-=h)}else a<=Dt&&(s+=a);return{width:s,height:i,x:c,y:l}}const Be=new Set(["absolute","fixed"]);function $e(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=O(t)?N(t):S(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=o*s.y;return{width:i,height:c,x:l,y:a}}function Ft(t,e,n){let o;if(e==="viewport")o=Ie(t,n);else if(e==="document")o=Pe(T(t));else if(E(e))o=$e(e,n);else{const r=Ut(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return nt(o)}function Yt(t,e){const n=k(t);return n===e||!E(n)||H(n)?!1:R(n).position==="fixed"||Yt(n,e)}function We(t,e){const n=e.get(t);if(n)return n;let o=X(t,[],!1).filter(c=>E(c)&&_(c)!=="body"),r=null;const s=R(t).position==="fixed";let i=s?k(t):t;for(;E(i)&&!H(i);){const c=R(i),l=yt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&Be.has(r.position)||U(i)&&!l&&Yt(t,i))?o=o.filter(u=>u!==i):r=c,i=k(i)}return e.set(t,o),o}function Ne(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?ct(e)?[]:We(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,u)=>{const d=Ft(e,u,r);return a.top=P(d.top,a.top),a.right=tt(d.right,a.right),a.bottom=tt(d.bottom,a.bottom),a.left=P(d.left,a.left),a},Ft(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ve(t){const{width:e,height:n}=Xt(t);return{width:e,height:n}}function He(t,e,n){const o=O(e),r=T(e),s=n==="fixed",i=I(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function a(){l.x=at(r)}if(o||!o&&!s)if((_(e)!=="body"||U(r))&&(c=lt(e)),o){const m=I(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&a();s&&!o&&r&&a();const u=r&&!o&&!s?qt(r,c):S(0),d=i.left+c.scrollLeft-l.x-u.x,f=i.top+c.scrollTop-l.y-u.y;return{x:d,y:f,width:i.width,height:i.height}}function ft(t){return R(t).position==="static"}function Mt(t,e){if(!O(t)||R(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return T(t)===n&&(n=n.ownerDocument.body),n}function Kt(t,e){const n=z(t);if(ct(t))return n;if(!O(t)){let r=k(t);for(;r&&!H(r);){if(E(r)&&!ft(r))return r;r=k(r)}return n}let o=Mt(t,e);for(;o&&Ce(o)&&ft(o);)o=Mt(o,e);return o&&H(o)&&ft(o)&&!yt(o)?n:o||Te(t)||n}const _e=async function(t){const e=this.getOffsetParent||Kt,n=this.getDimensions,o=await n(t.floating);return{reference:He(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function je(t){return R(t).direction==="rtl"}const Xe={convertOffsetParentRelativeRectToViewportRelativeRect:Fe,getDocumentElement:T,getClippingRect:Ne,getOffsetParent:Kt,getElementRects:_e,getClientRects:Me,getDimensions:Ve,getScale:N,isElement:E,isRTL:je};function Zt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ue(t,e){let n=null,o;const r=T(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:u,top:d,width:f,height:m}=a;if(c||e(),!f||!m)return;const h=Y(d),g=Y(r.clientWidth-(u+f)),v=Y(r.clientHeight-(d+m)),p=Y(u),b={rootMargin:-h+"px "+-g+"px "+-v+"px "+-p+"px",threshold:P(0,tt(1,l))||1};let y=!0;function A(x){const $=x[0].intersectionRatio;if($!==l){if(!y)return i();$?i(!1,$):o=setTimeout(()=>{i(!1,1e-7)},1e3)}$===1&&!Zt(a,t.getBoundingClientRect())&&i(),y=!1}try{n=new IntersectionObserver(A,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(A,b)}n.observe(t)}return i(!0),s}function qe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=zt(t),u=r||s?[...a?X(a):[],...X(e)]:[];u.forEach(p=>{r&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=a&&c?Ue(a,n):null;let f=-1,m=null;i&&(m=new ResizeObserver(p=>{let[w]=p;w&&w.target===a&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(e)})),n()}),a&&!l&&m.observe(a),m.observe(e));let h,g=l?I(t):null;l&&v();function v(){const p=I(t);g&&!Zt(g,p)&&n(),g=p,h=requestAnimationFrame(v)}return n(),()=>{var p;u.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),d?.(),(p=m)==null||p.disconnect(),m=null,l&&cancelAnimationFrame(h)}}const Ye=xe,Ke=ye,Ze=(t,e,n)=>{const o=new Map,r={platform:Xe,...n},s={...r.platform,_c:o};return be(t,e,{...r,platform:s})},Ge=[Ke({fallbackAxisSideDirection:"start",crossAxis:!1}),Ye()],Je=({placement:t="bottom-start",strategy:e,middleware:n=Ge}={})=>{const[o,r]=J(),[s,i]=J(),[c,l]=J();return st(()=>{if(!o||!(s instanceof HTMLElement)){l(void 0);return}return qe(o,s,()=>Ze(o,s,{placement:t,strategy:e,middleware:n}).then(l))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:pt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Qe=t=>{const e=pt(()=>({}),[]);return pt(()=>Object.assign(e,t),[e,...Object.values(t)])},Pt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,to=({disabled:t,onFocus:e})=>{const[n,o]=J(),{focused:r,closed:s}=n||{},i=r&&!t,c=Qe({closed:s,onFocus:e}),l=Q(u=>o(d=>({...d,closed:u})),[]),a=Q(u=>{const d=u.currentTarget;return Pt(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return st(()=>{if(!i)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=c;d.key==="Escape"&&!f?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:a,onFocus:Q(u=>{const d=Pt(u.currentTarget);o({focused:d}),c.onFocus?.(d)},[c])}},eo=t=>{const e=to(t),{onFocus:n}=e,o=$t();return st(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},oo=t=>t.preventDefault(),no=vt`
	.anchor {
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}

	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,ro=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=eo(t),c=$t(),{styles:l,setReference:a,setFloating:u}=Je({placement:e,strategy:n,middleware:o}),d=Q(f=>{c.current=f,u(f)},[u]);return st(()=>{const f=c.current;f&&(s&&!f.matches(":popover-open")&&f.showPopover?.(),!s&&f.matches(":popover-open")&&f.hidePopover?.())},[s]),B`
		<div class="anchor" part="anchor" ${Rt(a)}>
			<cosmoz-button
				@mousedown=${oo}
				@click=${i}
				part="button"
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
			style="${ne(l)}"
			${Rt(d)}
			><slot></slot>${ee([r],()=>r?.()||Jt)}</cosmoz-dropdown-content
		>
	`};customElements.define("cosmoz-dropdown",rt(ro,{styleSheets:[no]}));const so=vt`
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
`,io=()=>B` <slot></slot> `;customElements.define("cosmoz-dropdown-list",rt(io,{styleSheets:[so]}));const co=({placement:t})=>B` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",rt(co));const fo={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},K={render:()=>B`<cosmoz-dropdown>
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
