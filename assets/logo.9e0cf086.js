import{ao as Qe,a3 as Y,b7 as me,aw as Xe,b8 as be,b9 as Ve,Z as G,ba as oe,X as ye,bb as ie,ag as de,a0 as ne,an as Ye,$ as Re,u as Me,a6 as ke,r as g,a9 as Te,c as s,bc as Ie,w,aA as Ne,aB as Ke,A as Be,h as M,v as Ue,N as fe,g as Oe,bd as ue,D as pe,a5 as Ze,a8 as Ge,ab as Je,i as et,x as se,ad as tt,be as at,o as lt,Y as ze,aT as ge,z as rt,y as ot,bf as it}from"./index.83949514.js";import{Q as Se}from"./QResizeObserver.c5610b00.js";import{d as nt}from"./QLayout.a7c05bf0.js";import{b as E}from"./format.a33550d6.js";function ce(t,c,d){const z=de(t);let e,r=z.left-c.event.x,n=z.top-c.event.y,a=Math.abs(r),m=Math.abs(n);const f=c.direction;f.horizontal===!0&&f.vertical!==!0?e=r<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?e=n<0?"up":"down":f.up===!0&&n<0?(e="up",a>m&&(f.left===!0&&r<0?e="left":f.right===!0&&r>0&&(e="right"))):f.down===!0&&n>0?(e="down",a>m&&(f.left===!0&&r<0?e="left":f.right===!0&&r>0&&(e="right"))):f.left===!0&&r<0?(e="left",a<m&&(f.up===!0&&n<0?e="up":f.down===!0&&n>0&&(e="down"))):f.right===!0&&r>0&&(e="right",a<m&&(f.up===!0&&n<0?e="up":f.down===!0&&n>0&&(e="down")));let i=!1;if(e===void 0&&d===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};e=c.event.lastDir,i=!0,e==="left"||e==="right"?(z.left-=r,a=0,r=0):(z.top-=n,m=0,n=0)}return{synthetic:i,payload:{evt:t,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:z,direction:e,isFirst:c.event.isFirst,isFinal:d===!0,duration:Date.now()-c.event.time,distance:{x:a,y:m},offset:{x:r,y:n},delta:{x:z.left-c.event.lastX,y:z.top-c.event.lastY}}}}let ut=0;var R=Qe({name:"touch-pan",beforeMount(t,{value:c,modifiers:d}){if(d.mouse!==!0&&Y.has.touch!==!0)return;function z(r,n){d.mouse===!0&&n===!0?Ye(r):(d.stop===!0&&ie(r),d.prevent===!0&&ye(r))}const e={uid:"qvtp_"+ut++,handler:c,modifiers:d,direction:me(d),noop:Xe,mouseStart(r){be(r,e)&&Ve(r)&&(G(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(be(r,e)){const n=r.target;G(e,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,n){if(Y.is.firefox===!0&&oe(t,!0),e.lastEvt=r,n===!0||d.stop===!0){if(e.direction.all!==!0&&(n!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const f=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&ye(f),r.cancelBubble===!0&&ie(f),Object.assign(f,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:f}}ie(r)}const{left:a,top:m}=de(r);e.event={x:a,y:m,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:m}},move(r){if(e.event===void 0)return;const n=de(r),a=n.left-e.event.x,m=n.top-e.event.y;if(a===0&&m===0)return;e.lastEvt=r;const f=e.event.mouse===!0,i=()=>{z(r,f);let S;d.preserveCursor!==!0&&d.preservecursor!==!0&&(S=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Re(),e.styleCleanup=b=>{if(e.styleCleanup=void 0,S!==void 0&&(document.documentElement.style.cursor=S),document.body.classList.remove("non-selectable"),f===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{P(),b()},50):P()}else b!==void 0&&b()}};if(e.event.detected===!0){e.event.isFirst!==!0&&z(r,e.event.mouse);const{payload:S,synthetic:b}=ce(r,e,!1);S!==void 0&&(e.handler(S)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=S.position.left,e.event.lastY=S.position.top,e.event.lastDir=b===!0?void 0:S.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||f===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(r);return}const q=Math.abs(a),p=Math.abs(m);q!==p&&(e.direction.horizontal===!0&&q>p||e.direction.vertical===!0&&q<p||e.direction.up===!0&&q<p&&m<0||e.direction.down===!0&&q<p&&m>0||e.direction.left===!0&&q>p&&a<0||e.direction.right===!0&&q>p&&a>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,n){if(e.event!==void 0){if(ne(e,"temp"),Y.is.firefox===!0&&oe(t,!1),n===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ce(r===void 0?e.lastEvt:r,e).payload);const{payload:a}=ce(r===void 0?e.lastEvt:r,e,!0),m=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,d.mouse===!0){const r=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";G(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}Y.has.touch===!0&&G(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,c){const d=t.__qtouchpan;d!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&d.end(),d.handler=c.value),d.direction=me(c.modifiers))},beforeUnmount(t){const c=t.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),ne(c,"main"),ne(c,"temp"),Y.is.firefox===!0&&oe(t,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete t.__qtouchpan)}});const we=["vertical","horizontal"],ve={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},qe={prevent:!0,mouse:!0,mouseAllDir:!0},Ce=t=>t>=250?50:Math.ceil(t/5);var ht=Me({name:"QScrollArea",props:{...ke,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:c,emit:d}){const z=g(!1),e=g(!1),r=g(!1),n={vertical:g(0),horizontal:g(0)},a={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:m}=Oe(),f=Te(t,m.$q);let i=null,q;const p=g(null),S=s(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=s(()=>{const o=a.vertical.size.value-n.vertical.value;if(o<=0)return 0;const u=E(a.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.vertical.thumbHidden=s(()=>(t.visible===null?r.value:t.visible)!==!0&&z.value===!1&&e.value===!1||a.vertical.size.value<=n.vertical.value+1),a.vertical.thumbStart=s(()=>a.vertical.percentage.value*(n.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=s(()=>Math.round(E(n.vertical.value*n.vertical.value/a.vertical.size.value,Ce(n.vertical.value),n.vertical.value))),a.vertical.style=s(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=s(()=>{const o=a.horizontal.size.value-n.horizontal.value;if(o<=0)return 0;const u=E(Math.abs(a.horizontal.position.value)/o,0,1);return Math.round(u*1e4)/1e4}),a.horizontal.thumbHidden=s(()=>(t.visible===null?r.value:t.visible)!==!0&&z.value===!1&&e.value===!1||a.horizontal.size.value<=n.horizontal.value+1),a.horizontal.thumbStart=s(()=>a.horizontal.percentage.value*(n.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=s(()=>Math.round(E(n.horizontal.value*n.horizontal.value/a.horizontal.size.value,Ce(n.horizontal.value),n.horizontal.value))),a.horizontal.style=s(()=>({...t.thumbStyle,...t.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const b=s(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),P=[[R,o=>{N(o,"vertical")},void 0,{vertical:!0,...qe}]],C=[[R,o=>{N(o,"horizontal")},void 0,{horizontal:!0,...qe}]];function y(){const o={};return we.forEach(u=>{const h=a[u];o[u+"Position"]=h.position.value,o[u+"Percentage"]=h.percentage.value,o[u+"Size"]=h.size.value,o[u+"ContainerSize"]=n[u].value}),o}const W=Ie(()=>{const o=y();o.ref=m,d("scroll",o)},0);function j(o,u,h){if(we.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?pe:ue)(p.value,u,h)}function I({height:o,width:u}){let h=!1;n.vertical.value!==o&&(n.vertical.value=o,h=!0),n.horizontal.value!==u&&(n.horizontal.value=u,h=!0),h===!0&&O()}function Q({position:o}){let u=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,u=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,u=!0),u===!0&&O()}function x({height:o,width:u}){a.horizontal.size.value!==u&&(a.horizontal.size.value=u,O()),a.vertical.size.value!==o&&(a.vertical.size.value=o,O())}function N(o,u){const h=a[u];if(o.isFirst===!0){if(h.thumbHidden.value===!0)return;q=h.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const k=ve[u],F=n[u].value,J=(h.size.value-F)/(F-h.thumbSize.value),ee=o.distance[k.dist],U=q+(o.direction===k.dir?1:-1)*ee*J;X(U,u)}function K(o,u){const h=a[u];if(h.thumbHidden.value!==!0){const k=o[ve[u].offset];if(k<h.thumbStart.value||k>h.thumbStart.value+h.thumbSize.value){const F=k-h.thumbSize.value/2;X(F/n[u].value*h.size.value,u)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function L(o){K(o,"vertical")}function B(o){K(o,"horizontal")}function O(){z.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,z.value=!1},t.delay),t.onScroll!==void 0&&W()}function X(o,u){p.value[ve[u].scroll]=o}function A(){r.value=!0}function V(){r.value=!1}let H=null;return w(()=>m.$q.lang.rtl,o=>{p.value!==null&&ue(p.value,Math.abs(a.horizontal.position.value)*(o===!0?-1:1))}),Ne(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ke(()=>{if(H===null)return;const o=p.value;o!==null&&(ue(o,H.left),pe(o,H.top))}),Be(W.cancel),Object.assign(m,{getScrollTarget:()=>p.value,getScroll:y,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:j,setScrollPercentage(o,u,h){j(o,u*(a[o].size.value-n[o].value)*(o==="horizontal"&&m.$q.lang.rtl===!0?-1:1),h)}}),()=>M("div",{class:S.value,onMouseenter:A,onMouseleave:V},[M("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[M("div",{class:"q-scrollarea__content absolute",style:b.value},Ue(c.default,[M(Se,{debounce:0,onResize:x})])),M(nt,{axis:"both",onScroll:Q})]),M(Se,{debounce:0,onResize:I}),M("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:L}),M("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:B}),fe(M("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),P),fe(M("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),C)])}});const _e=150;var mt=Me({name:"QDrawer",inheritAttrs:!1,props:{...Ze,...ke,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ge,"onLayout","miniState"],setup(t,{slots:c,emit:d,attrs:z}){const e=Oe(),{proxy:{$q:r}}=e,n=Te(t,r),{preventBodyScroll:a}=it(),{registerTimeout:m,removeTimeout:f}=Je(),i=et(ot,se);if(i===se)return console.error("QDrawer needs to be child of QLayout"),se;let q,p=null,S;const b=g(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),P=s(()=>t.mini===!0&&b.value!==!0),C=s(()=>P.value===!0?t.miniWidth:t.width),y=g(t.showIfAbove===!0&&b.value===!1?!0:t.modelValue===!0),W=s(()=>t.persistent!==!0&&(b.value===!0||F.value===!0));function j(l,v){if(N(),l!==!1&&i.animate(),T(0),b.value===!0){const _=i.instances[o.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),D(1),i.isContainer.value!==!0&&a(!0)}else D(0),l!==!1&&ae(!1);m(()=>{l!==!1&&ae(!0),v!==!0&&d("show",l)},_e)}function I(l,v){K(),l!==!1&&i.animate(),D(0),T(O.value*C.value),le(),v!==!0?m(()=>{d("hide",l)},_e):f()}const{show:Q,hide:x}=tt({showing:y,hideOnRouteChange:W,handleShow:j,handleHide:I}),{addToHistory:N,removeFromHistory:K}=at(y,x,W),L={belowBreakpoint:b,hide:x},B=s(()=>t.side==="right"),O=s(()=>(r.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),X=g(0),A=g(!1),V=g(!1),H=g(C.value*O.value),o=s(()=>B.value===!0?"left":"right"),u=s(()=>y.value===!0&&b.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),h=s(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(B.value?"R":"L")>-1||r.platform.is.ios===!0&&i.isContainer.value===!0),k=s(()=>t.overlay===!1&&y.value===!0&&b.value===!1),F=s(()=>t.overlay===!0&&y.value===!0&&b.value===!1),J=s(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&A.value===!1?" hidden":"")),ee=s(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),U=s(()=>B.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Pe=s(()=>B.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ae=s(()=>{const l={};return i.header.space===!0&&U.value===!1&&(h.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&Pe.value===!1&&(h.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),De=s(()=>{const l={width:`${C.value}px`,transform:`translateX(${H.value}px)`};return b.value===!0?l:Object.assign(l,Ae.value)}),$e=s(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ee=s(()=>`q-drawer q-drawer--${t.side}`+(V.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(h.value===!0||k.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(U.value===!0?" q-drawer--top-padding":""))),xe=s(()=>{const l=r.lang.rtl===!0?t.side:o.value;return[[R,We,void 0,{[l]:!0,mouse:!0}]]}),He=s(()=>{const l=r.lang.rtl===!0?o.value:t.side;return[[R,he,void 0,{[l]:!0,mouse:!0}]]}),Le=s(()=>{const l=r.lang.rtl===!0?o.value:t.side;return[[R,he,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function te(){je(b,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}w(b,l=>{l===!0?(q=y.value,y.value===!0&&x(!1)):t.overlay===!1&&t.behavior!=="mobile"&&q!==!1&&(y.value===!0?(T(0),D(0),le()):Q(!1))}),w(()=>t.side,(l,v)=>{i.instances[v]===L&&(i.instances[v]=void 0,i[v].space=!1,i[v].offset=0),i.instances[l]=L,i[l].size=C.value,i[l].space=k.value,i[l].offset=u.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&te()}),w(()=>t.behavior+t.breakpoint,te),w(i.isContainer,l=>{y.value===!0&&a(l!==!0),l===!0&&te()}),w(i.scrollbarWidth,()=>{T(y.value===!0?0:void 0)}),w(u,l=>{$("offset",l)}),w(k,l=>{d("onLayout",l),$("space",l)}),w(B,()=>{T()}),w(C,l=>{T(),re(t.miniToOverlay,l)}),w(()=>t.miniToOverlay,l=>{re(l,C.value)}),w(()=>r.lang.rtl,()=>{T()}),w(()=>t.mini,()=>{t.modelValue===!0&&(Fe(),i.animate())}),w(P,l=>{d("miniState",l)});function T(l){l===void 0?ze(()=>{l=y.value===!0?0:C.value,T(O.value*l)}):(i.isContainer.value===!0&&B.value===!0&&(b.value===!0||Math.abs(l)===C.value)&&(l+=O.value*i.scrollbarWidth.value),H.value=l)}function D(l){X.value=l}function ae(l){const v=l===!0?"remove":i.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function Fe(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),V.value=!0,p=setTimeout(()=>{p=null,V.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(l){if(y.value!==!1)return;const v=C.value,_=E(l.distance.x,0,v);if(l.isFinal===!0){_>=Math.min(75,v)===!0?Q():(i.animate(),D(0),T(O.value*v)),A.value=!1;return}T((r.lang.rtl===!0?B.value!==!0:B.value)?Math.max(v-_,0):Math.min(0,_-v)),D(E(_/v,0,1)),l.isFirst===!0&&(A.value=!0)}function he(l){if(y.value!==!0)return;const v=C.value,_=l.direction===t.side,Z=(r.lang.rtl===!0?_!==!0:_)?E(l.distance.x,0,v):0;if(l.isFinal===!0){Math.abs(Z)<Math.min(75,v)===!0?(i.animate(),D(1),T(0)):x(),A.value=!1;return}T(O.value*Z),D(E(1-Z/v,0,1)),l.isFirst===!0&&(A.value=!0)}function le(){a(!1),ae(!0)}function $(l,v){i.update(t.side,l,v)}function je(l,v){l.value!==v&&(l.value=v)}function re(l,v){$("size",l===!0?t.miniWidth:v)}return i.instances[t.side]=L,re(t.miniToOverlay,C.value),$("space",k.value),$("offset",u.value),t.showIfAbove===!0&&t.modelValue!==!0&&y.value===!0&&t["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!0),lt(()=>{d("onLayout",k.value),d("miniState",P.value),q=t.showIfAbove===!0;const l=()=>{(y.value===!0?j:I)(!1,!0)};if(i.totalWidth.value!==0){ze(l);return}S=w(i.totalWidth,()=>{S(),S=void 0,y.value===!1&&t.showIfAbove===!0&&b.value===!1?Q(!1):l()})}),Be(()=>{S!==void 0&&S(),p!==null&&(clearTimeout(p),p=null),y.value===!0&&le(),i.instances[t.side]===L&&(i.instances[t.side]=void 0,$("size",0),$("offset",0),$("space",!1))}),()=>{const l=[];b.value===!0&&(t.noSwipeOpen===!1&&l.push(fe(M("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),xe.value)),l.push(ge("div",{ref:"backdrop",class:J.value,style:ee.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",t.noSwipeBackdrop!==!0&&y.value===!0,()=>Le.value)));const v=P.value===!0&&c.mini!==void 0,_=[M("div",{...z,key:""+v,class:[$e.value,z.class]},v===!0?c.mini():rt(c.default))];return t.elevated===!0&&y.value===!0&&_.push(M("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(ge("aside",{ref:"content",class:Ee.value,style:De.value},_,"contentclose",t.noSwipeClose!==!0&&b.value===!0,()=>He.value)),M("div",{class:"q-drawer-container"},l)}}}),bt="/susi-front/assets/logo.526cd3c6.svg";export{ht as Q,bt as _,mt as a};
