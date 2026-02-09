import{u as J,E as dt,c as ht,a as ot,b as I,d as G,e as gt,A as Gt}from"./iframe-Csr1b-_B.js";import{e as It,i as $t,t as Jt,n as Rt}from"./cosmoz-dropdown-next-CdLlJhPK.js";import"./preload-helper-PPVm8Dsz.js";const ft=(t,e)=>J(()=>t,e);const Qt={},te=It(class extends $t{constructor(){super(...arguments),this.ot=Qt}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,r)=>n===this.ot[r]))return dt}else if(this.ot===e)return dt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});const Bt="important",ee=" !"+Bt,ne=It(class extends $t{constructor(t){if(super(t),t.type!==Jt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(ee);n.includes("-")||i?o.setProperty(n,i?r.slice(0,-11):r,i?Bt:""):o[n]=r}}return dt}});function oe(t,e,o){return t?e(t):o?.(t)}const re=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ie=ht`
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
`,se=()=>I`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",re(ot(se,{styleSheets:[ie]})));const Q=Math.min,M=Math.max,tt=Math.round,q=Math.floor,S=t=>({x:t,y:t}),ce={left:"right",right:"left",bottom:"top",top:"bottom"},le={start:"end",end:"start"};function Ot(t,e,o){return M(t,Q(e,o))}function wt(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Wt(t){return t==="x"?"y":"x"}function Nt(t){return t==="y"?"height":"width"}const ae=new Set(["top","bottom"]);function P(t){return ae.has(V(t))?"y":"x"}function Vt(t){return Wt(P(t))}function fe(t,e,o){o===void 0&&(o=!1);const n=vt(t),r=Vt(t),i=Nt(r);let s=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=et(s)),[s,et(s)]}function ue(t){const e=et(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>le[e])}const St=["left","right"],Lt=["right","left"],de=["top","bottom"],pe=["bottom","top"];function me(t,e,o){switch(t){case"top":case"bottom":return o?e?Lt:St:e?St:Lt;case"left":case"right":return e?de:pe;default:return[]}}function he(t,e,o,n){const r=vt(t);let i=me(V(t),o==="start",n);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(pt)))),i}function et(t){return t.replace(/left|right|bottom|top/g,e=>ce[e])}function ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function we(t){return typeof t!="number"?ge(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Tt(t,e,o){let{reference:n,floating:r}=t;const i=P(e),s=Vt(e),c=Nt(s),l=V(e),a=i==="y",u=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2,p=n[c]/2-r[c]/2;let d;switch(l){case"top":d={x:u,y:n.y-r.height};break;case"bottom":d={x:u,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:f};break;case"left":d={x:n.x-r.width,y:f};break;default:d={x:n.x,y:n.y}}switch(vt(e)){case"start":d[s]-=p*(o&&a?-1:1);break;case"end":d[s]+=p*(o&&a?-1:1);break}return d}async function ve(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:i,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:d=0}=wt(e,t),h=we(d),w=c[p?f==="floating"?"reference":"floating":f],m=nt(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(w)))==null||o?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),v=f==="floating"?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),x=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},E=nt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:l}):v);return{top:(m.top-E.top+h.top)/x.y,bottom:(E.bottom-m.bottom+h.bottom)/x.y,left:(m.left-E.left+h.left)/x.x,right:(E.right-m.right+h.right)/x.x}}const be=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:i=[],platform:s}=o,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:f}=Tt(a,n,l),p=n,d={},h=0;for(let w=0;w<c.length;w++){var g;const{name:m,fn:v}=c[w],{x:b,y:x,data:E,reset:y}=await v({x:u,y:f,initialPlacement:n,placement:p,strategy:r,middlewareData:d,rects:a,platform:{...s,detectOverflow:(g=s.detectOverflow)!=null?g:ve},elements:{reference:t,floating:e}});u=b??u,f=x??f,d={...d,[m]:{...d[m],...E}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(a=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:u,y:f}=Tt(a,p,l)),w=-1)}return{x:u,y:f,placement:p,strategy:r,middlewareData:d}},xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=wt(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const m=V(r),v=P(c),b=V(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),E=p||(b||!g?[et(c)]:ue(c)),y=h!=="none";!p&&y&&E.push(...he(c,g,h,x));const B=[c,...E],lt=await l.detectOverflow(e,w),Y=[];let W=((n=i.flip)==null?void 0:n.overflows)||[];if(u&&Y.push(lt[m]),f){const D=fe(r,s,x);Y.push(lt[D[0]],lt[D[1]])}if(W=[...W,{placement:r,overflows:Y}],!Y.every(D=>D<=0)){var At,Et;const D=(((At=i.flip)==null?void 0:At.index)||0)+1,at=B[D];if(at&&(!(f==="alignment"?v!==P(at):!1)||W.every(C=>P(C.placement)===v?C.overflows[0]>0:!0)))return{data:{index:D,overflows:W},reset:{placement:at}};let j=(Et=W.filter(F=>F.overflows[0]<=0).sort((F,C)=>F.overflows[1]-C.overflows[1])[0])==null?void 0:Et.placement;if(!j)switch(d){case"bestFit":{var Ct;const F=(Ct=W.filter(C=>{if(y){const z=P(C.placement);return z===v||z==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(z=>z>0).reduce((z,Zt)=>z+Zt,0)]).sort((C,z)=>C[1]-z[1])[0])==null?void 0:Ct[0];F&&(j=F);break}case"initialPlacement":j=c;break}if(r!==j)return{reset:{placement:j}}}return{}}}},ye=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r,platform:i}=e,{mainAxis:s=!0,crossAxis:c=!1,limiter:l={fn:m=>{let{x:v,y:b}=m;return{x:v,y:b}}},...a}=wt(t,e),u={x:o,y:n},f=await i.detectOverflow(e,a),p=P(V(r)),d=Wt(p);let h=u[d],g=u[p];if(s){const m=d==="y"?"top":"left",v=d==="y"?"bottom":"right",b=h+f[m],x=h-f[v];h=Ot(b,h,x)}if(c){const m=p==="y"?"top":"left",v=p==="y"?"bottom":"right",b=g+f[m],x=g-f[v];g=Ot(b,g,x)}const w=l.fn({...e,[d]:h,[p]:g});return{...w,data:{x:w.x-o,y:w.y-n,enabled:{[d]:s,[p]:c}}}}}};function rt(){return typeof window<"u"}function _(t){return Ht(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){var e;return(e=(Ht(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ht(t){return rt()?t instanceof Node||t instanceof A(t).Node:!1}function R(t){return rt()?t instanceof Element||t instanceof A(t).Element:!1}function L(t){return rt()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function zt(t){return!rt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}const Ae=new Set(["inline","contents"]);function U(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!Ae.has(r)}const Ee=new Set(["table","td","th"]);function Ce(t){return Ee.has(_(t))}const Re=[":popover-open",":modal"];function it(t){return Re.some(e=>{try{return t.matches(e)}catch{return!1}})}const Oe=["transform","translate","scale","rotate","perspective"],Se=["transform","translate","scale","rotate","perspective","filter"],Le=["paint","layout","strict","content"];function bt(t){const e=xt(),o=R(t)?O(t):t;return Oe.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||Se.some(n=>(o.willChange||"").includes(n))||Le.some(n=>(o.contain||"").includes(n))}function Te(t){let e=k(t);for(;L(e)&&!H(e);){if(bt(e))return e;if(it(e))return null;e=k(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ze=new Set(["html","body","#document"]);function H(t){return ze.has(_(t))}function O(t){return A(t).getComputedStyle(t)}function st(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function k(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||zt(t)&&t.host||T(t);return zt(e)?e.host:e}function _t(t){const e=k(t);return H(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&U(e)?e:_t(e)}function X(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=_t(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=A(r);if(i){const c=mt(s);return e.concat(s,s.visualViewport||[],U(r)?r:[],c&&o?X(c):[])}return e.concat(r,X(r,[],o))}function mt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function jt(t){const e=O(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=L(t),i=r?t.offsetWidth:o,s=r?t.offsetHeight:n,c=tt(o)!==i||tt(n)!==s;return c&&(o=i,n=s),{width:o,height:n,$:c}}function yt(t){return R(t)?t:t.contextElement}function N(t){const e=yt(t);if(!L(e))return S(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:i}=jt(e);let s=(i?tt(o.width):o.width)/n,c=(i?tt(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const ke=S(0);function Xt(t){const e=A(t);return!xt()||!e.visualViewport?ke:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function De(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function $(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),i=yt(t);let s=S(1);e&&(n?R(n)&&(s=N(n)):s=N(t));const c=De(i,o,n)?Xt(i):S(0);let l=(r.left+c.x)/s.x,a=(r.top+c.y)/s.y,u=r.width/s.x,f=r.height/s.y;if(i){const p=A(i),d=n&&R(n)?A(n):n;let h=p,g=mt(h);for(;g&&n&&d!==h;){const w=N(g),m=g.getBoundingClientRect(),v=O(g),b=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,x=m.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,a*=w.y,u*=w.x,f*=w.y,l+=b,a+=x,h=A(g),g=mt(h)}}return nt({width:u,height:f,x:l,y:a})}function ct(t,e){const o=st(t).scrollLeft;return e?e.left+o:$(T(t)).left+o}function Ut(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-ct(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function Fe(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const i=r==="fixed",s=T(n),c=e?it(e.floating):!1;if(n===s||c&&i)return o;let l={scrollLeft:0,scrollTop:0},a=S(1);const u=S(0),f=L(n);if((f||!f&&!i)&&((_(n)!=="body"||U(s))&&(l=st(n)),L(n))){const d=$(n);a=N(n),u.x=d.x+n.clientLeft,u.y=d.y+n.clientTop}const p=s&&!f&&!i?Ut(s,l):S(0);return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+u.x+p.x,y:o.y*a.y-l.scrollTop*a.y+u.y+p.y}}function Pe(t){return Array.from(t.getClientRects())}function Me(t){const e=T(t),o=st(t),n=t.ownerDocument.body,r=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+ct(t);const c=-o.scrollTop;return O(n).direction==="rtl"&&(s+=M(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:s,y:c}}const kt=25;function Ie(t,e){const o=A(t),n=T(t),r=o.visualViewport;let i=n.clientWidth,s=n.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const u=xt();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}const a=ct(n);if(a<=0){const u=n.ownerDocument,f=u.body,p=getComputedStyle(f),d=u.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,h=Math.abs(n.clientWidth-f.clientWidth-d);h<=kt&&(i-=h)}else a<=kt&&(i+=a);return{width:i,height:s,x:c,y:l}}const $e=new Set(["absolute","fixed"]);function Be(t,e){const o=$(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,i=L(t)?N(t):S(1),s=t.clientWidth*i.x,c=t.clientHeight*i.y,l=r*i.x,a=n*i.y;return{width:s,height:c,x:l,y:a}}function Dt(t,e,o){let n;if(e==="viewport")n=Ie(t,o);else if(e==="document")n=Me(T(t));else if(R(e))n=Be(e,o);else{const r=Xt(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return nt(n)}function Yt(t,e){const o=k(t);return o===e||!R(o)||H(o)?!1:O(o).position==="fixed"||Yt(o,e)}function We(t,e){const o=e.get(t);if(o)return o;let n=X(t,[],!1).filter(c=>R(c)&&_(c)!=="body"),r=null;const i=O(t).position==="fixed";let s=i?k(t):t;for(;R(s)&&!H(s);){const c=O(s),l=bt(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&$e.has(r.position)||U(s)&&!l&&Yt(t,s))?n=n.filter(u=>u!==s):r=c,s=k(s)}return e.set(t,n),n}function Ne(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const s=[...o==="clippingAncestors"?it(e)?[]:We(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((a,u)=>{const f=Dt(e,u,r);return a.top=M(f.top,a.top),a.right=Q(f.right,a.right),a.bottom=Q(f.bottom,a.bottom),a.left=M(f.left,a.left),a},Dt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ve(t){const{width:e,height:o}=jt(t);return{width:e,height:o}}function He(t,e,o){const n=L(e),r=T(e),i=o==="fixed",s=$(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);function a(){l.x=ct(r)}if(n||!n&&!i)if((_(e)!=="body"||U(r))&&(c=st(e)),n){const d=$(e,!0,i,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&a();i&&!n&&r&&a();const u=r&&!n&&!i?Ut(r,c):S(0),f=s.left+c.scrollLeft-l.x-u.x,p=s.top+c.scrollTop-l.y-u.y;return{x:f,y:p,width:s.width,height:s.height}}function ut(t){return O(t).position==="static"}function Ft(t,e){if(!L(t)||O(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return T(t)===o&&(o=o.ownerDocument.body),o}function qt(t,e){const o=A(t);if(it(t))return o;if(!L(t)){let r=k(t);for(;r&&!H(r);){if(R(r)&&!ut(r))return r;r=k(r)}return o}let n=Ft(t,e);for(;n&&Ce(n)&&ut(n);)n=Ft(n,e);return n&&H(n)&&ut(n)&&!bt(n)?o:n||Te(t)||o}const _e=async function(t){const e=this.getOffsetParent||qt,o=this.getDimensions,n=await o(t.floating);return{reference:He(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function je(t){return O(t).direction==="rtl"}const Xe={convertOffsetParentRelativeRectToViewportRelativeRect:Fe,getDocumentElement:T,getClippingRect:Ne,getOffsetParent:qt,getElementRects:_e,getClientRects:Pe,getDimensions:Ve,getScale:N,isElement:R,isRTL:je};function Kt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ue(t,e){let o=null,n;const r=T(t);function i(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const a=t.getBoundingClientRect(),{left:u,top:f,width:p,height:d}=a;if(c||e(),!p||!d)return;const h=q(f),g=q(r.clientWidth-(u+p)),w=q(r.clientHeight-(f+d)),m=q(u),b={rootMargin:-h+"px "+-g+"px "+-w+"px "+-m+"px",threshold:M(0,Q(1,l))||1};let x=!0;function E(y){const B=y[0].intersectionRatio;if(B!==l){if(!x)return s();B?s(!1,B):n=setTimeout(()=>{s(!1,1e-7)},1e3)}B===1&&!Kt(a,t.getBoundingClientRect())&&s(),x=!1}try{o=new IntersectionObserver(E,{...b,root:r.ownerDocument})}catch{o=new IntersectionObserver(E,b)}o.observe(t)}return s(!0),i}function Ye(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=yt(t),u=r||i?[...a?X(a):[],...X(e)]:[];u.forEach(m=>{r&&m.addEventListener("scroll",o,{passive:!0}),i&&m.addEventListener("resize",o)});const f=a&&c?Ue(a,o):null;let p=-1,d=null;s&&(d=new ResizeObserver(m=>{let[v]=m;v&&v.target===a&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(e)})),o()}),a&&!l&&d.observe(a),d.observe(e));let h,g=l?$(t):null;l&&w();function w(){const m=$(t);g&&!Kt(g,m)&&o(),g=m,h=requestAnimationFrame(w)}return o(),()=>{var m;u.forEach(v=>{r&&v.removeEventListener("scroll",o),i&&v.removeEventListener("resize",o)}),f?.(),(m=d)==null||m.disconnect(),d=null,l&&cancelAnimationFrame(h)}}const qe=ye,Ke=xe,Ze=(t,e,o)=>{const n=new Map,r={platform:Xe,...o},i={...r.platform,_c:n};return be(t,e,{...r,platform:i})},Ge=[Ke({fallbackAxisSideDirection:"start",crossAxis:!1}),qe()],Je=({placement:t="bottom-start",strategy:e,middleware:o=Ge}={})=>{const[n,r]=G(),[i,s]=G(),[c,l]=G();return gt(()=>{if(!n||!(i instanceof HTMLElement)){l(void 0);return}return Ye(n,i,()=>Ze(n,i,{placement:t,strategy:e,middleware:o}).then(l))},[n,i,t,e,o]),{setReference:r,setFloating:s,styles:J(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Qe=t=>{const e=J(()=>({}),[]);return J(()=>Object.assign(e,t),[e,...Object.values(t)])},Pt=t=>t.matches(":focus-within"),tn=({disabled:t,onFocus:e})=>{const[o,n]=G(),{focused:r,closed:i}=o||{},s=r&&!t,c=Qe({closed:i,onFocus:e}),l=ft(u=>n(f=>({...f,closed:u})),[]),a=ft(u=>{const f=u.currentTarget;return Pt(f)?n(p=>({focused:!0,closed:!p?.closed})):f.focus()},[]);return gt(()=>{if(!s)return;const u=f=>{if(f.defaultPrevented)return;const{closed:p}=c;f.key==="Escape"&&!p?(f.preventDefault(),l(!0)):["ArrowUp","Up"].includes(f.key)&&p&&(f.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[s]),{focused:s,active:s&&!i,setClosed:l,onToggle:a,onFocus:ft(u=>{const f=Pt(u.currentTarget);n({focused:f}),c.onFocus?.(f)},[c])}},Mt=["focusin","focusout"],en=t=>{const e=tn(t),{onFocus:o}=e;return gt(()=>(t.setAttribute("tabindex","0"),Mt.forEach(n=>t.addEventListener(n,o)),()=>{Mt.forEach(n=>t.removeEventListener(n,o))}),[]),e},nn=t=>t.preventDefault(),on=ht`
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
`,rn=t=>{const{placement:e,strategy:o,middleware:n,render:r}=t,{active:i,onToggle:s}=en(t),{styles:c,setReference:l,setFloating:a}=Je({placement:e,strategy:o,middleware:n});return I` <div class="anchor" part="anchor" ${Rt(l)}>
			<button
				@mousedown=${nn}
				@click=${s}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${oe(i,()=>I`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${ne(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${Rt(a)}
					><slot></slot>${te([r],()=>r?.()||Gt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",ot(rn,{styleSheets:[on]}));const sn=ht`
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
`,cn=()=>I` <slot></slot> `;customElements.define("cosmoz-dropdown-list",ot(cn,{styleSheets:[sn]}));const ln=({placement:t})=>I` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",ot(ln));const dn={title:"Cosmoz Dropdown",component:"cosmoz-dropdown"},K={render:()=>I`<cosmoz-dropdown>
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
}`,...Z.parameters?.docs?.source}}};const pn=["Dropdown","DropdownMenu"];export{K as Dropdown,Z as DropdownMenu,pn as __namedExportsOrder,dn as default};
