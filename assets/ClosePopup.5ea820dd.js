import{u as L,c as g,h as T,z as B,r as k,W as oe,X as N,Y as Te,Z as I,$ as ke,w as b,o as we,A as O,g as ne,a0 as Ce,a1 as P,a2 as V,a3 as Ee,a4 as qe,a5 as Se,a6 as He,a7 as Me,a8 as Pe,a9 as We,aa as Le,ab as Be,ac as Oe,ad as Ae,ae as ze,af as $e,ag as Fe,ah as _e,ai as X,C as Ke,aj as Re,B as De,ak as Qe,al as je,am as Ne,an as Ie,ao as Ve,ap as Xe,aq as Ye}from"./index.83949514.js";var it=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=g(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:n.value},B(o.default))}});const Ue={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ze({showing:e,avoidEmit:o,configureAnchorEl:n}){const{props:t,proxy:l,emit:c}=ne(),a=k(null);let d=null;function f(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){oe(i,13)===!0&&s.toggle(i)},contextClick(i){l.hide(i),N(i),Te(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:N,mobileTouch(i){if(s.mobileCleanup(i),f(i)!==!0)return;l.hide(i),a.value.classList.add("non-selectable");const h=i.target;I(s,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&ke()}}),n=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let h;i===!0?l.$q.platform.is.mobile===!0?h=[[a.value,"touchstart","mobileTouch","passive"]]:h=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:h=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],I(s,"anchor",h)});function u(){Ce(s,"anchor")}function v(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function m(){if(t.target===!1||t.target===""||l.$el.parentNode===null)a.value=null;else if(t.target===!0)v(l.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,n()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return b(()=>t.contextMenu,i=>{a.value!==null&&(u(),n(i))}),b(()=>t.target,()=>{a.value!==null&&u(),m()}),b(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?u():n())}),we(()=>{m(),o!==!0&&t.modelValue===!0&&a.value===null&&c("update:modelValue",!1)}),O(()=>{d!==null&&clearTimeout(d),u()}),{anchorEl:a,canShow:f,anchorEvents:s}}function Ge(e,o){const n=k(null);let t;function l(d,f){const s=`${f!==void 0?"add":"remove"}EventListener`,u=f!==void 0?f:t;d!==window&&d[s]("scroll",u,P.passive),window[s]("scroll",u,P.passive),t=f}function c(){n.value!==null&&(l(n.value),n.value=null)}const a=b(()=>e.noParentEvent,()=>{n.value!==null&&(c(),o())});return O(a),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:w}=P,p=[];function C(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let n=V.length-1;for(;n>=0;){const t=V[n].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=p.length-1;t>=0;t--){const l=p[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(o)===!1)&&(o===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(o)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Je(e){p.push(e),p.length===1&&(document.addEventListener("mousedown",C,w),document.addEventListener("touchstart",C,w))}function Y(e){const o=p.findIndex(n=>n===e);o>-1&&(p.splice(o,1),p.length===0&&(document.removeEventListener("mousedown",C,w),document.removeEventListener("touchstart",C,w)))}let U,Z;function G(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const W={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{W[`${e}#ltr`]=e,W[`${e}#rtl`]=e});function J(e,o){const n=e.split(" ");return{vertical:n[0],horizontal:W[`${n[1]}#${o===!0?"rtl":"ltr"}`]}}function tt(e,o){let{top:n,left:t,right:l,bottom:c,width:a,height:d}=e.getBoundingClientRect();return o!==void 0&&(n-=o[1],t-=o[0],c+=o[1],l+=o[0],a+=o[0],d+=o[1]),{top:n,bottom:c,height:d,left:t,right:l,width:a,middle:t+(l-t)/2,center:n+(c-n)/2}}function ot(e,o,n){let{top:t,left:l}=e.getBoundingClientRect();return t+=o.top,l+=o.left,n!==void 0&&(t+=n[1],l+=n[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function nt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function ee(e,o,n){return{top:e[n.anchorOrigin.vertical]-o[n.selfOrigin.vertical],left:e[n.anchorOrigin.horizontal]-o[n.selfOrigin.horizontal]}}function lt(e){if(Ee.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:f,offsetTop:s}=window.visualViewport;f!==U&&(d.setProperty("--q-pe-left",f+"px"),U=f),s!==Z&&(d.setProperty("--q-pe-top",s+"px"),Z=s)}const{scrollLeft:o,scrollTop:n}=e.el,t=e.absoluteOffset===void 0?tt(e.anchorEl,e.cover===!0?[0,0]:e.offset):ot(e.anchorEl,e.absoluteOffset,e.offset);let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const c=nt(e.el);let a=ee(t,c,e);if(e.absoluteOffset===void 0||e.offset===void 0)M(a,t,c,e.anchorOrigin,e.selfOrigin);else{const{top:d,left:f}=a;M(a,t,c,e.anchorOrigin,e.selfOrigin);let s=!1;if(a.top!==d){s=!0;const u=2*e.offset[1];t.center=t.top-=u,t.bottom-=u+2}if(a.left!==f){s=!0;const u=2*e.offset[0];t.middle=t.left-=u,t.right-=u+2}s===!0&&(a=ee(t,c,e),M(a,t,c,e.anchorOrigin,e.selfOrigin))}l={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(l.maxHeight=a.maxHeight+"px",t.height>a.maxHeight&&(l.minHeight=l.maxHeight)),a.maxWidth!==void 0&&(l.maxWidth=a.maxWidth+"px",t.width>a.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function M(e,o,n,t,l){const c=n.bottom,a=n.right,d=qe(),f=window.innerHeight-d,s=document.body.clientWidth;if(e.top<0||e.top+c>f)if(l.vertical==="center")e.top=o[t.vertical]>f/2?Math.max(0,f-c):0,e.maxHeight=Math.min(c,f);else if(o[t.vertical]>f/2){const u=Math.min(f,t.vertical==="center"?o.center:t.vertical===l.vertical?o.bottom:o.top);e.maxHeight=Math.min(c,u),e.top=Math.max(0,u-c)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===l.vertical?o.top:o.bottom),e.maxHeight=Math.min(c,f-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),l.horizontal==="middle")e.left=o[t.horizontal]>s/2?Math.max(0,s-a):0;else if(o[t.horizontal]>s/2){const u=Math.min(s,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.right:o.left);e.maxWidth=Math.min(a,u),e.left=Math.max(0,u-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.left:o.right),e.maxWidth=Math.min(a,s-e.left)}var rt=L({name:"QMenu",inheritAttrs:!1,props:{...Ue,...Se,...He,...Me,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:G},self:{type:String,validator:G},offset:{type:Array,validator:et},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pe,"click","escapeKey"],setup(e,{slots:o,emit:n,attrs:t}){let l=null,c,a,d;const f=ne(),{proxy:s}=f,{$q:u}=s,v=k(null),m=k(!1),i=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=We(e,u),{registerTick:le,removeTick:ae}=Le(),{registerTimeout:A}=Be(),{transitionProps:ie,transitionStyle:re}=Oe(e),{localScrollTarget:z,changeScrollEvent:se,unconfigureScrollTarget:ue}=Ge(e,Q),{anchorEl:x,canShow:ce}=Ze({showing:m}),{hide:$}=Ae({showing:m,canShow:ce,handleShow:me,handleHide:ge,hideOnRouteChange:i,processOnMount:!0}),{showPortal:F,hidePortal:_,renderPortal:de}=ze(f,v,xe,"menu"),E={anchorEl:x,innerRef:v,onClickOutside(r){if(e.persistent!==!0&&m.value===!0)return $(r),(r.type==="touchstart"||r.target.classList.contains("q-dialog__backdrop"))&&Ie(r),!0}},K=g(()=>J(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),fe=g(()=>e.cover===!0?K.value:J(e.self||"top start",u.lang.rtl)),he=g(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),ve=g(()=>e.autoClose===!0?{onClick:pe}:{}),R=g(()=>m.value===!0&&e.persistent!==!0);b(R,r=>{r===!0?(Qe(S),Je(E)):(X(S),Y(E))});function q(){je(()=>{let r=v.value;r&&r.contains(document.activeElement)!==!0&&(r=r.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.querySelector("[autofocus], [data-autofocus]")||r,r.focus({preventScroll:!0}))})}function me(r){if(l=e.noRefocus===!1?document.activeElement:null,$e(j),F(),Q(),c=void 0,r!==void 0&&(e.touchPosition||e.contextMenu)){const H=Fe(r);if(H.left!==void 0){const{top:be,left:ye}=x.value.getBoundingClientRect();c={left:H.left-ye,top:H.top-be}}}a===void 0&&(a=b(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,y)),e.noFocus!==!0&&document.activeElement.blur(),le(()=>{y(),e.noFocus!==!0&&q()}),A(()=>{u.platform.is.ios===!0&&(d=e.autoClose,v.value.click()),y(),F(!0),n("show",r)},e.transitionDuration)}function ge(r){ae(),_(),D(!0),l!==null&&(r===void 0||r.qClickOutside!==!0)&&(((r&&r.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),A(()=>{_(!0),n("hide",r)},e.transitionDuration)}function D(r){c=void 0,a!==void 0&&(a(),a=void 0),(r===!0||m.value===!0)&&(_e(j),ue(),Y(E),X(S)),r!==!0&&(l=null)}function Q(){(x.value!==null||e.scrollTarget!==void 0)&&(z.value=Ke(x.value,e.scrollTarget),se(z.value,y))}function pe(r){d!==!0?(Re(s,r),n("click",r)):d=!1}function j(r){R.value===!0&&e.noFocus!==!0&&Ne(v.value,r.target)!==!0&&q()}function S(r){n("escapeKey"),$(r)}function y(){const r=v.value;r===null||x.value===null||lt({el:r,offset:e.offset,anchorEl:x.value,anchorOrigin:K.value,selfOrigin:fe.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function xe(){return T(De,ie.value,()=>m.value===!0?T("div",{role:"menu",...t,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+he.value,t.class],style:[t.style,re.value],...ve.value},B(o.default)):null)}return O(D),Object.assign(s,{focus:q,updatePosition:y}),de}}),st=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=g(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:n.value,role:"toolbar"},B(o.default))}});function te(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}var ut=Ve({name:"close-popup",beforeMount(e,{value:o}){const n={depth:te(o),handler(t){n.depth!==0&&setTimeout(()=>{const l=Xe(e);l!==void 0&&Ye(l,t,n.depth)})},handlerKey(t){oe(t,13)===!0&&n.handler(t)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:o,oldValue:n}){o!==n&&(e.__qclosepopup.depth=te(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}});export{ut as C,st as Q,it as a,rt as b,et as c,Ge as d,Ze as e,Je as f,J as p,Y as r,lt as s,Ue as u,G as v};
