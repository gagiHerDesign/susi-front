import{u as ze,a5 as Lt,a7 as Rt,a8 as Dt,r as F,c as f,aa as Nt,ab as $t,ac as jt,ad as Kt,ae as Qt,w as oe,A as Fe,a0 as rt,$ as st,Z as ct,C as Wt,h as b,B as Ut,g as Pe,z as yt,an as ae,bi as We,bj as bt,bk as wt,bl as Ct,a6 as Xt,bm as Yt,a9 as Zt,bn as Gt,aT as Jt,aK as el,aM as Ee,bo as tl,aw as ll,Y as ue,bc as nl,bp as ul,aA as al,aB as ol,bq as il,br as rl,bs as dt,aN as Ae,aI as sl,aH as cl,X as je,bt as dl,bb as Ve,W as fl,aL as vl,P as ml,v as Sl}from"./index.fdefb647.js";import{u as hl,v as ft,c as gl,p as vt,d as yl,e as bl,r as mt,s as wl,f as Cl,b as Vl}from"./ClosePopup.4a5464bf.js";import{a as kl,Q as xl}from"./QItem.e409bbdc.js";import{r as Qe}from"./rtl.b51694b1.js";import{n as St}from"./format.a33550d6.js";var Dl=ze({name:"QTooltip",inheritAttrs:!1,props:{...hl,...Lt,...Rt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ft},self:{type:String,default:"top middle",validator:ft},offset:{type:Array,default:()=>[14,14],validator:gl},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Dt],setup(e,{slots:c,emit:i,attrs:h}){let q,a;const M=Pe(),{proxy:{$q:v}}=M,S=F(null),O=F(!1),d=f(()=>vt(e.anchor,v.lang.rtl)),k=f(()=>vt(e.self,v.lang.rtl)),I=f(()=>e.persistent!==!0),{registerTick:y,removeTick:P}=Nt(),{registerTimeout:T}=$t(),{transitionProps:w,transitionStyle:D}=jt(e),{localScrollTarget:H,changeScrollEvent:W,unconfigureScrollTarget:B}=yl(e,o),{anchorEl:x,canShow:U,anchorEvents:X}=bl({showing:O,configureAnchorEl:ne}),{show:te,hide:ee}=Kt({showing:O,canShow:U,handleShow:ie,handleHide:re,hideOnRouteChange:I,processOnMount:!0});Object.assign(X,{delayShow:ve,delayHide:se});const{showPortal:Z,hidePortal:K,renderPortal:le}=Qt(M,S,s,"tooltip");if(v.platform.is.mobile===!0){const r={anchorEl:x,innerRef:S,onClickOutside(_){return ee(_),_.target.classList.contains("q-dialog__backdrop")&&ae(_),!0}},A=f(()=>e.modelValue===null&&e.persistent!==!0&&O.value===!0);oe(A,_=>{(_===!0?Cl:mt)(r)}),Fe(()=>{mt(r)})}function ie(r){Z(),y(()=>{a=new MutationObserver(()=>N()),a.observe(S.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),N(),o()}),q===void 0&&(q=oe(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,N)),T(()=>{Z(!0),i("show",r)},e.transitionDuration)}function re(r){P(),K(),G(),T(()=>{K(!0),i("hide",r)},e.transitionDuration)}function G(){a!==void 0&&(a.disconnect(),a=void 0),q!==void 0&&(q(),q=void 0),B(),rt(X,"tooltipTemp")}function N(){const r=S.value;x.value===null||!r||wl({el:r,offset:e.offset,anchorEl:x.value,anchorOrigin:d.value,selfOrigin:k.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(r){if(v.platform.is.mobile===!0){st(),document.body.classList.add("non-selectable");const A=x.value,_=["touchmove","touchcancel","touchend","click"].map(C=>[A,C,"delayHide","passiveCapture"]);ct(X,"tooltipTemp",_)}T(()=>{te(r)},e.delay)}function se(r){v.platform.is.mobile===!0&&(rt(X,"tooltipTemp"),st(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{ee(r)},e.hideDelay)}function ne(){if(e.noParentEvent===!0||x.value===null)return;const r=v.platform.is.mobile===!0?[[x.value,"touchstart","delayShow","passive"]]:[[x.value,"mouseenter","delayShow","passive"],[x.value,"mouseleave","delayHide","passive"]];ct(X,"anchor",r)}function o(){if(x.value!==null||e.scrollTarget!==void 0){H.value=Wt(x.value,e.scrollTarget);const r=e.noParentEvent===!0?N:ee;W(H.value,r)}}function n(){return O.value===!0?b("div",{...h,ref:S,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,D.value],role:"tooltip"},yt(c.default)):null}function s(){return b(Ut,w.value,n)}return Fe(G),Object.assign(M.proxy,{updatePosition:N}),le}}),pl=ze({name:"QField",inheritAttrs:!1,props:We,emits:bt,setup(){return wt(Ct())}});const ql={xs:8,sm:10,md:14,lg:20,xl:24};var Al=ze({name:"QChip",props:{...Xt,...Yt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:i}){const{proxy:{$q:h}}=Pe(),q=Zt(e,h),a=Gt(e,ql),M=f(()=>e.selected===!0||e.icon!==void 0),v=f(()=>e.selected===!0?e.iconSelected||h.iconSet.chip.selected:e.icon),S=f(()=>e.iconRemove||h.iconSet.chip.remove),O=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=f(()=>{const w=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(w?` text-${w} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(O.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(q.value===!0?" q-chip--dark q-dark":"")}),k=f(()=>{const w=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...w,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||h.lang.label.remove};return{chip:w,remove:D}});function I(w){w.keyCode===13&&y(w)}function y(w){e.disable||(i("update:selected",!e.selected),i("click",w))}function P(w){(w.keyCode===void 0||w.keyCode===13)&&(ae(w),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function T(){const w=[];O.value===!0&&w.push(b("div",{class:"q-focus-helper"})),M.value===!0&&w.push(b(Ee,{class:"q-chip__icon q-chip__icon--left",name:v.value}));const D=e.label!==void 0?[b("div",{class:"ellipsis"},[e.label])]:void 0;return w.push(b("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},tl(c.default,D))),e.iconRight&&w.push(b(Ee,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&w.push(b(Ee,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:S.value,...k.value.remove,onClick:P,onKeyup:P})),w}return()=>{if(e.modelValue===!1)return;const w={class:d.value,style:a.value};return O.value===!0&&Object.assign(w,k.value.chip,{onClick:y,onKeyup:I}),Jt("div",w,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[el,e.ripple]])}}}),Ol=ze({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:c}){const i=f(()=>parseInt(e.lines,10)),h=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),q=f(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>b("div",{style:q.value,class:h.value},yt(c.default))}});const Y=1e3,zl=["start","center","end","start-force","center-force","end-force"],Vt=Array.prototype.filter,_l=window.getComputedStyle(document.body).overflowAnchor===void 0?ll:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];Vt.call(i,q=>q.dataset&&q.dataset.qVsAnchor!==void 0).forEach(q=>{delete q.dataset.qVsAnchor});const h=i[c];h&&h.dataset&&(h.dataset.qVsAnchor="")}))};function ke(e,c){return e+c}function Ke(e,c,i,h,q,a,M,v){const S=e===window?document.scrollingElement||document.documentElement:e,O=q===!0?"offsetWidth":"offsetHeight",d={scrollStart:0,scrollViewSize:-M-v,scrollMaxSize:0,offsetStart:-M,offsetEnd:-v};if(q===!0?(e===window?(d.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d.scrollViewSize+=document.documentElement.clientWidth):(d.scrollStart=S.scrollLeft,d.scrollViewSize+=S.clientWidth),d.scrollMaxSize=S.scrollWidth,a===!0&&(d.scrollStart=(Qe===!0?d.scrollMaxSize-d.scrollViewSize:0)-d.scrollStart)):(e===window?(d.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,d.scrollViewSize+=document.documentElement.clientHeight):(d.scrollStart=S.scrollTop,d.scrollViewSize+=S.clientHeight),d.scrollMaxSize=S.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetStart+=k[O]);if(h!==null)for(let k=h.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetEnd+=k[O]);if(c!==e){const k=S.getBoundingClientRect(),I=c.getBoundingClientRect();q===!0?(d.offsetStart+=I.left-k.left,d.offsetEnd-=I.width):(d.offsetStart+=I.top-k.top,d.offsetEnd-=I.height),e!==window&&(d.offsetStart+=d.scrollStart),d.offsetEnd+=d.scrollMaxSize-d.offsetStart}return d}function ht(e,c,i,h){c==="end"&&(c=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(h===!0&&(c=(Qe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):i===!0?(h===!0&&(c=(Qe===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function Oe(e,c,i,h){if(i>=h)return 0;const q=c.length,a=Math.floor(i/Y),M=Math.floor((h-1)/Y)+1;let v=e.slice(a,M).reduce(ke,0);return i%Y!==0&&(v-=c.slice(a*Y,i).reduce(ke,0)),h%Y!==0&&h!==q&&(v-=c.slice(h,M*Y).reduce(ke,0)),v}const Il={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Tl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Il};function Ml({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:i,virtualScrollItemSizeComputed:h}){const q=Pe(),{props:a,emit:M,proxy:v}=q,{$q:S}=v;let O,d,k,I=[],y;const P=F(0),T=F(0),w=F({}),D=F(null),H=F(null),W=F(null),B=F({from:0,to:0}),x=f(()=>a.tableColspan!==void 0?a.tableColspan:100);h===void 0&&(h=f(()=>a.virtualScrollItemSize));const U=f(()=>h.value+";"+a.virtualScrollHorizontal),X=f(()=>U.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);oe(X,()=>{N()}),oe(U,te);function te(){G(d,!0)}function ee(n){G(n===void 0?d:n)}function Z(n,s){const r=c();if(r==null||r.nodeType===8)return;const A=Ke(r,i(),D.value,H.value,a.virtualScrollHorizontal,S.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==A.scrollViewSize&&N(A.scrollViewSize),le(r,A,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,zl.indexOf(s)>-1?s:d>-1&&n>d?"end":"start")}function K(){const n=c();if(n==null||n.nodeType===8)return;const s=Ke(n,i(),D.value,H.value,a.virtualScrollHorizontal,S.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),r=e.value-1,A=s.scrollMaxSize-s.offsetStart-s.offsetEnd-T.value;if(O===s.scrollStart)return;if(s.scrollMaxSize<=0){le(n,s,0,0);return}k!==s.scrollViewSize&&N(s.scrollViewSize),ie(B.value.from);const _=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(y[r],s.scrollViewSize/2));if(_>0&&Math.ceil(s.scrollStart)>=_){le(n,s,r,s.scrollMaxSize-s.offsetEnd-I.reduce(ke,0));return}let C=0,g=s.scrollStart-s.offsetStart,L=g;if(g<=A&&g+s.scrollViewSize>=P.value)g-=P.value,C=B.value.from,L=g;else for(let V=0;g>=I[V]&&C<r;V++)g-=I[V],C+=Y;for(;g>0&&C<r;)g-=y[C],g>-s.scrollViewSize?(C++,L=g):L=y[C]+g;le(n,s,C,L)}function le(n,s,r,A,_){const C=typeof _=="string"&&_.indexOf("-force")>-1,g=C===!0?_.replace("-force",""):_,L=g!==void 0?g:"start";let V=Math.max(0,r-w.value[L]),$=V+w.value.total;$>e.value&&($=e.value,V=Math.max(0,$-w.value.total)),O=s.scrollStart;const me=V!==B.value.from||$!==B.value.to;if(me===!1&&g===void 0){se(r);return}const{activeElement:xe}=document,J=W.value;me===!0&&J!==null&&J!==xe&&J.contains(xe)===!0&&(J.addEventListener("focusout",re),setTimeout(()=>{J!==null&&J.removeEventListener("focusout",re)})),_l(J,r-V);const _e=g!==void 0?y.slice(V,r).reduce(ke,0):0;if(me===!0){const ce=$>=B.value.from&&V<=B.value.to?B.value.to:$;B.value={from:V,to:ce},P.value=Oe(I,y,0,V),T.value=Oe(I,y,$,e.value),requestAnimationFrame(()=>{B.value.to!==$&&O===s.scrollStart&&(B.value={from:B.value.from,to:$},T.value=Oe(I,y,$,e.value))})}requestAnimationFrame(()=>{if(O!==s.scrollStart)return;me===!0&&ie(V);const ce=y.slice(V,r).reduce(ke,0),Se=ce+s.offsetStart+P.value,Ie=Se+y[r];let pe=Se+A;if(g!==void 0){const He=ce-_e,j=s.scrollStart+He;pe=C!==!0&&j<Se&&Ie<j+s.scrollViewSize?j:g==="end"?Ie-s.scrollViewSize:Se-(g==="start"?0:Math.round((s.scrollViewSize-y[r])/2))}O=pe,ht(n,pe,a.virtualScrollHorizontal,S.lang.rtl),se(r)})}function ie(n){const s=W.value;if(s){const r=Vt.call(s.children,V=>V.classList&&V.classList.contains("q-virtual-scroll--skip")===!1),A=r.length,_=a.virtualScrollHorizontal===!0?V=>V.getBoundingClientRect().width:V=>V.offsetHeight;let C=n,g,L;for(let V=0;V<A;){for(g=_(r[V]),V++;V<A&&r[V].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=_(r[V]),V++;L=g-y[C],L!==0&&(y[C]+=L,I[Math.floor(C/Y)]+=L),C++}}}function re(){W.value!==null&&W.value!==void 0&&W.value.focus()}function G(n,s){const r=1*h.value;(s===!0||Array.isArray(y)===!1)&&(y=[]);const A=y.length;y.length=e.value;for(let C=e.value-1;C>=A;C--)y[C]=r;const _=Math.floor((e.value-1)/Y);I=[];for(let C=0;C<=_;C++){let g=0;const L=Math.min((C+1)*Y,e.value);for(let V=C*Y;V<L;V++)g+=y[V];I.push(g)}d=-1,O=void 0,P.value=Oe(I,y,0,B.value.from),T.value=Oe(I,y,B.value.to,e.value),n>=0?(ie(B.value.from),ue(()=>{Z(n)})):ne()}function N(n){if(n===void 0&&typeof window!="undefined"){const g=c();g!=null&&g.nodeType!==8&&(n=Ke(g,i(),D.value,H.value,a.virtualScrollHorizontal,S.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const s=parseFloat(a.virtualScrollSliceRatioBefore)||0,r=parseFloat(a.virtualScrollSliceRatioAfter)||0,A=1+s+r,_=n===void 0||n<=0?1:Math.ceil(n/h.value),C=Math.max(1,_,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/A));w.value={total:Math.ceil(C*A),start:Math.ceil(C*s),center:Math.ceil(C*(.5+s)),end:Math.ceil(C*(1+s)),view:_}}function ve(n,s){const r=a.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+r]:h.value+"px"};return[n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"before",ref:D},[b("tr",[b("td",{style:{[r]:`${P.value}px`,...A},colspan:x.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[r]:`${P.value}px`,...A}}),b(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},s.flat()),n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"after",ref:H},[b("tr",[b("td",{style:{[r]:`${T.value}px`,...A},colspan:x.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"after",ref:H,style:{[r]:`${T.value}px`,...A}})]}function se(n){d!==n&&(a.onVirtualScroll!==void 0&&M("virtualScroll",{index:n,from:B.value.from,to:B.value.to-1,direction:n<d?"decrease":"increase",ref:v}),d=n)}N();const ne=nl(K,S.platform.is.ios===!0?120:35);ul(()=>{N()});let o=!1;return al(()=>{o=!0}),ol(()=>{if(o!==!0)return;const n=c();O!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?ht(n,O,a.virtualScrollHorizontal,S.lang.rtl):Z(d)}),Fe(()=>{ne.cancel()}),Object.assign(v,{scrollTo:Z,reset:te,refresh:ee}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:w,setVirtualScrollSize:N,onVirtualScrollEvt:ne,localResetVirtualScroll:G,padVirtualScroll:ve,scrollTo:Z,reset:te,refresh:ee}}const gt=e=>["add","add-unique","toggle"].includes(e),Bl=".*+?^${}()|[]\\",El=Object.keys(We);var Nl=ze({name:"QSelect",inheritAttrs:!1,props:{...Tl,...il,...We,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:gt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...bt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:i}){const{proxy:h}=Pe(),{$q:q}=h,a=F(!1),M=F(!1),v=F(-1),S=F(""),O=F(!1),d=F(!1);let k=null,I,y,P,T=null,w,D,H,W;const B=F(null),x=F(null),U=F(null),X=F(null),te=F(null),ee=rl(e),Z=dl(nt),K=f(()=>Array.isArray(e.options)?e.options.length:0),le=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ie,virtualScrollSliceSizeComputed:re,localResetVirtualScroll:G,padVirtualScroll:N,onVirtualScrollEvt:ve,scrollTo:se,setVirtualScrollSize:ne}=Ml({virtualScrollLength:K,getVirtualScrollTarget:qt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:le}),o=Ct(),n=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&I!==void 0?I:[],m=u.map(z=>pt(z,l));return e.modelValue===null&&t===!0?m.filter(z=>z!==null):m}return u}),s=f(()=>{const t={};return El.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),r=f(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),A=f(()=>dt(n.value)),_=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),g=f(()=>K.value===0),L=f(()=>n.value.map(t=>Q.value(t)).join(", ")),V=f(()=>e.displayValue!==void 0?e.displayValue:L.value),$=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),me=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some($.value))),xe=f(()=>o.focused.value===!0?e.tabindex:-1),J=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return v.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${v.value}`),t}),_e=f(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ce=f(()=>n.value.map((t,u)=>({index:u,opt:t,html:$.value(t),selected:!0,removeAtIndex:xt,toggleOption:de,tabindex:xe.value}))),Se=f(()=>{if(K.value===0)return[];const{from:t,to:u}=ie.value;return e.options.slice(t,u).map((l,m)=>{const z=he.value(l)===!0,p=t+m,E={clickable:!0,active:!1,activeClass:He.value,manualFocus:!0,focused:!1,disable:z,tabindex:-1,dense:e.optionsDense,dark:r.value,role:"option",id:`${o.targetUid.value}_${p}`,onClick:()=>{de(l)}};return z!==!0&&(De(l)===!0&&(E.active=!0),v.value===p&&(E.focused=!0),E["aria-selected"]=E.active===!0?"true":"false",q.platform.is.desktop===!0&&(E.onMousemove=()=>{a.value===!0&&ge(p)})),{index:p,opt:l,html:$.value(l),label:Q.value(l),selected:E.active,focused:E.focused,toggleOption:de,setOptionIndex:ge,itemProps:E}})}),Ie=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:q.iconSet.arrow.dropdown),pe=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),He=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),j=f(()=>Re(e.optionValue,"value")),Q=f(()=>Re(e.optionLabel,"label")),he=f(()=>Re(e.optionDisable,"disable")),Te=f(()=>n.value.map(t=>j.value(t))),kt=f(()=>{const t={onInput:nt,onChange:Z,onKeydown:et,onKeyup:Ge,onKeypress:Je,onFocus:Ye,onClick(u){y===!0&&Ve(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Z,t});oe(n,t=>{I=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(M.value!==!0&&a.value!==!0||A.value!==!0)&&(P!==!0&&Ce(),(M.value===!0||a.value===!0)&&ye(""))},{immediate:!0}),oe(()=>e.fillInput,Ce),oe(a,Ne),oe(K,Ht);function Ue(t){return e.emitValue===!0?j.value(t):t}function Le(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function xt(t){Le(t),o.focus()}function Xe(t,u){const l=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&qe(Q.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();i("add",{index:m.length,value:l}),m.push(l),i("update:modelValue",m)}function de(t,u){if(o.editable.value!==!0||t===void 0||he.value(t)===!0)return;const l=j.value(t);if(e.multiple!==!0){u!==!0&&(qe(e.fillInput===!0?Q.value(t):"",!0,!0),fe()),x.value!==null&&x.value.focus(),(n.value.length===0||Ae(j.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((y!==!0||O.value===!0)&&o.focus(),Ye(),n.value.length===0){const p=e.emitValue===!0?l:t;i("add",{index:0,value:p}),i("update:modelValue",e.multiple===!0?[p]:p);return}const m=e.modelValue.slice(),z=Te.value.findIndex(p=>Ae(p,l));if(z>-1)i("remove",{index:z,value:m.splice(z,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const p=e.emitValue===!0?l:t;i("add",{index:m.length,value:p}),m.push(p)}i("update:modelValue",m)}function ge(t){if(q.platform.is.desktop!==!0)return;const u=t>-1&&t<K.value?t:-1;v.value!==u&&(v.value=u)}function Me(t=1,u){if(a.value===!0){let l=v.value;do l=St(l+t,-1,K.value-1);while(l!==-1&&l!==v.value&&he.value(e.options[l])===!0);v.value!==l&&(ge(l),se(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(l>=0?Q.value(e.options[l]):w))}}function pt(t,u){const l=m=>Ae(j.value(m),t);return e.options.find(l)||u.find(l)||t}function Re(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:m=>m!==null&&typeof m=="object"&&l in m?m[l]:m}function De(t){const u=j.value(t);return Te.value.find(l=>Ae(l,u))!==void 0}function Ye(t){e.useInput===!0&&x.value!==null&&(t===void 0||x.value===t.target&&t.target.value===L.value)&&x.value.select()}function Ze(t){fl(t,27)===!0&&a.value===!0&&(Ve(t),fe(),Ce()),i("keyup",t)}function Ge(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ze(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),Ce(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),m=p=>{const E=e.options.find(R=>p.value(R).toLocaleLowerCase()===l);return E===void 0?!1:(n.value.indexOf(E)===-1?de(E):fe(),!0)},z=p=>{m(j)!==!0&&(m(Q)===!0||p===!0||ye(u,!0,()=>z(!0)))};z()}else o.clearValue(t)}function Je(t){i("keypress",t)}function et(t){if(i("keydown",t),vl(t)===!0)return;const u=S.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(v.value>-1||u===!0);if(t.keyCode===27){je(t);return}if(t.keyCode===9&&l===!1){be();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){ae(t),we();return}if(t.keyCode===8&&e.hideSelected!==!0&&S.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof S.value!="string"||S.value.length===0)&&(ae(t),v.value=-1,Me(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&re.value!==void 0&&(ae(t),v.value=Math.max(-1,Math.min(K.value,v.value+(t.keyCode===33?-1:1)*re.value.view)),Me(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ae(t),Me(t.keyCode===38?-1:1,e.multiple));const m=K.value;if((H===void 0||W<Date.now())&&(H=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||H.length>0)){a.value!==!0&&we(t);const z=t.key.toLocaleLowerCase(),p=H.length===1&&H[0]===z;W=Date.now()+1500,p===!1&&(ae(t),H+=z);const E=new RegExp("^"+H.split("").map($e=>Bl.indexOf($e)>-1?"\\"+$e:$e).join(".*"),"i");let R=v.value;if(p===!0||R<0||E.test(Q.value(e.options[R]))!==!0)do R=St(R+1,-1,m-1);while(R!==v.value&&(he.value(e.options[R])===!0||E.test(Q.value(e.options[R]))!==!0));v.value!==R&&ue(()=>{ge(R),se(R),R>=0&&e.useInput===!0&&e.fillInput===!0&&Be(Q.value(e.options[R]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||H!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ae(t),v.value>-1&&v.value<m){de(e.options[v.value]);return}if(u===!0){const z=(p,E)=>{if(E){if(gt(E)!==!0)return}else E=e.newValueMode;if(p==null)return;qe("",e.multiple!==!0,!0),(E==="toggle"?de:Xe)(p,E==="add-unique"),e.multiple!==!0&&(x.value!==null&&x.value.focus(),fe())};if(e.onNewValue!==void 0?i("newValue",S.value,z):z(S.value),e.multiple!==!0)return}a.value===!0?be():o.innerLoading.value!==!0&&we()}}function tt(){return y===!0?te.value:U.value!==null&&U.value.contentEl!==null?U.value.contentEl:void 0}function qt(){return tt()}function At(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?ce.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?ce.value.map((t,u)=>b(Al,{key:"option-"+u,removable:o.editable.value===!0&&he.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:xe.value,onRemove(){t.removeAtIndex(u)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:Q.value(t.opt)}))):[b("span",{[me.value===!0?"innerHTML":"textContent"]:V.value})]}function lt(){if(g.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:S.value}):void 0;const t=c.option!==void 0?c.option:l=>b(xl,{key:l.index,...l.itemProps},()=>b(kl,()=>b(Ol,()=>b("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=N("div",Se.value.map(t));return c["before-options"]!==void 0&&(u=c["before-options"]().concat(u)),Sl(c["after-options"],u)}function Ot(t,u){const l=u===!0?{...J.value,...o.splitAttrs.attributes.value}:void 0,m={ref:u===!0?x:void 0,key:"i_t",class:_.value,style:e.inputStyle,value:S.value!==void 0?S.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...kt.value};return t!==!0&&y===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),b("input",m)}function nt(t){k!==null&&(clearTimeout(k),k=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),P=!0,w=S.value,o.focused.value!==!0&&(y!==!0||O.value===!0)&&o.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,ye(S.value)},e.inputDebounce)))}function Be(t){S.value!==t&&(S.value=t,i("inputValue",t))}function qe(t,u,l){P=l!==!0,e.useInput===!0&&(Be(t),(u===!0||l!==!0)&&(w=t),u!==!0&&ye(t))}function ye(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?i("filterAbort"):(o.innerLoading.value=!0,d.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&P!==!0&&t===Q.value(n.value[0])&&(t="");const m=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);T!==null&&clearTimeout(T),T=m,i("filter",t,(z,p)=>{(u===!0||o.focused.value===!0)&&T===m&&(clearTimeout(T),typeof z=="function"&&z(),d.value=!1,ue(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&fe():a.value===!0?Ne(!0):a.value=!0),typeof p=="function"&&ue(()=>{p(h)}),typeof l=="function"&&ue(()=>{l(h)})}))},()=>{o.focused.value===!0&&T===m&&(clearTimeout(T),o.innerLoading.value=!1,d.value=!1),a.value===!0&&(a.value=!1)})}function zt(){return b(Vl,{ref:U,class:C.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&g.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:r.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:pe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,..._e.value,onScrollPassive:ve,onBeforeShow:at,onBeforeHide:_t,onShow:It},lt)}function _t(t){ot(t),be()}function It(){ne()}function Tt(t){Ve(t),x.value!==null&&x.value.focus(),O.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Mt(t){Ve(t),ue(()=>{O.value=!1})}function Bt(){const t=[b(pl,{class:`col-auto ${o.fieldClass.value}`,...s.value,for:o.targetUid.value,dark:r.value,square:!0,loading:d.value,itemAligned:!1,filled:!0,stackLabel:S.value.length>0,...o.splitAttrs.listeners.value,onFocus:Tt,onBlur:Mt},{...c,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(b("div",{ref:te,class:C.value+" scroll",style:e.popupContentStyle,..._e.value,onClick:je,onScrollPassive:ve},lt())),b(ml,{ref:X,modelValue:M.value,position:e.useInput===!0?"top":void 0,transitionShow:D,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:Et,onHide:Ft,onShow:Pt},()=>b("div",{class:"q-select__dialog"+(r.value===!0?" q-select__dialog--dark q-dark":"")+(O.value===!0?" q-select__dialog--focused":"")},t))}function Et(t){ot(t),X.value!==null&&X.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function Ft(t){fe(),o.focused.value===!1&&i("blur",t),Ce()}function Pt(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&x.value!==null&&x.value!==t&&x.value.focus(),ne()}function be(){M.value!==!0&&(v.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(T!==null&&(clearTimeout(T),T=null),o.innerLoading.value===!0&&(i("filterAbort"),o.innerLoading.value=!1,d.value=!1)))}function we(t){o.editable.value===!0&&(y===!0?(o.onControlFocusin(t),M.value=!0,ue(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?ye(S.value):(g.value!==!0||c["no-option"]!==void 0)&&(a.value=!0))}function fe(){M.value=!1,be()}function Ce(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&Q.value(n.value[0])||"",!0,!0)}function Ne(t){let u=-1;if(t===!0){if(n.value.length>0){const l=j.value(n.value[0]);u=e.options.findIndex(m=>Ae(j.value(m),l))}G(u)}ge(u)}function Ht(t,u){a.value===!0&&o.innerLoading.value===!1&&(G(-1,!0),ue(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?G():Ne(!0))}))}function ut(){M.value===!1&&U.value!==null&&U.value.updatePosition()}function at(t){t!==void 0&&Ve(t),i("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function ot(t){t!==void 0&&Ve(t),i("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function it(){y=q.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||g.value===!1:!0),D=q.platform.is.ios===!0&&y===!0&&e.useInput===!0?"fade":e.transitionShow}return sl(it),cl(ut),it(),Fe(()=>{k!==null&&clearTimeout(k)}),Object.assign(h,{showPopup:we,hidePopup:fe,removeAtIndex:Le,add:Xe,toggleOption:de,getOptionIndex:()=>v.value,setOptionIndex:ge,moveOptionSelection:Me,filter:ye,updateMenuPosition:ut,updateInputValue:qe,isOptionSelected:De,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>he.value.apply(null,t)===!0,getOptionValue:(...t)=>j.value.apply(null,t),getOptionLabel:(...t)=>Q.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:B,targetRef:x,hasValue:A,showPopup:we,floatingLabel:f(()=>e.hideSelected!==!0&&A.value===!0||typeof S.value=="number"||S.value.length>0||dt(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(M.value===!0||g.value!==!0||c["no-option"]!==void 0))return y===!0?Bt():zt();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{Ce(),be()})},onClick(t){if(je(t),y!==!0&&a.value===!0){be(),x.value!==null&&x.value.focus();return}we(t)}},getControl:t=>{const u=At(),l=t===!0||M.value!==!0||y!==!0;if(e.useInput===!0)u.push(Ot(t,l));else if(o.editable.value===!0){const z=l===!0?J.value:void 0;u.push(b("input",{ref:l===!0?x:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:V.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...z,onKeydown:et,onKeyup:Ze,onKeypress:Je})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(ee.value!==void 0&&e.disable!==!0&&Te.value.length>0){const z=Te.value.map(p=>b("option",{value:p,selected:!0}));u.push(b("select",{class:"hidden",name:ee.value,multiple:e.multiple},z))}const m=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...m},u)},getInnerAppend:()=>e.loading!==!0&&d.value!==!0&&e.hideDropdownIcon!==!0?[b(Ee,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Ie.value})]:null}),wt(o)}});export{Dl as Q,Nl as a};