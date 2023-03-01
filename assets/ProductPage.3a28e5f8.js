import{i as Ke,x as ve,r as q,c as m,A as ke,o as ze,aJ as Se,N as He,aK as Oe,h as w,an as Ce,W as Ge,aL as Je,aM as K,v as Xe,g as be,aN as Ye,aO as Ze,u as se,aa as fe,ab as Pe,w as X,au as et,aA as tt,aB as at,z as Re,aP as lt,aQ as nt,a6 as st,aR as rt,a9 as ot,aS as it,aT as ct,H as ut,U as dt,V as vt,j as I,J as ft,K as B,l as t,d as f,k as Q,aU as Y,F as Z,M as j,aV as ee,aW as te}from"./index.06b18f7d.js";import{Q as xe,a as bt}from"./QBreadcrumbs.99f02669.js";import{Q as ht}from"./QResizeObserver.176f2b2b.js";import{r as mt}from"./rtl.b51694b1.js";import{Q as gt}from"./QPage.ab16c7b4.js";import{_ as ae}from"./ProductCard.69e8f299.js";import"./QImg.0b4a6162.js";let _t=0;const yt=["click","keydown"],pt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${_t++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function wt(e,b,y,u){const r=Ke(Se,ve);if(r===ve)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ve;const{proxy:k}=be(),h=q(null),p=q(null),c=q(null),re=m(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),E=m(()=>r.currentModel.value===e.name),oe=m(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(E.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),V=m(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),C=m(()=>e.disable===!0||r.hasFocus.value===!0||E.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function S(s,T){if(T!==!0&&h.value!==null&&h.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&Ce(s);return}if(u===void 0){r.updateModel({name:e.name}),y("click",s);return}if(u.hasRouterLink.value===!0){const P=(g={})=>{let x;const R=g.to===void 0||Ye(g.to,e.to)===!0?r.avoidRouteWatcher=Ze():null;return u.navigateToRouterLink(s,{...g,returnRouterError:!0}).catch(D=>{x=D}).then(D=>{if(R===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,x===void 0&&(D===void 0||D.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),g.returnRouterError===!0)return x!==void 0?Promise.reject(x):D})};y("click",s,P),s.defaultPrevented!==!0&&P();return}y("click",s)}function A(s){Ge(s,[13,32])?S(s,!0):Je(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&r.onKbdNavigate(s.keyCode,k.$el)===!0&&Ce(s),y("keydown",s)}function N(){const s=r.tabProps.value.narrowIndicator,T=[],P=w("div",{ref:c,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&T.push(w(K,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&T.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&T.push(e.alertIcon!==void 0?w(K,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&T.push(P);const g=[w("div",{class:"q-focus-helper",tabindex:-1,ref:h}),w("div",{class:V.value},Xe(b.default,T))];return s===!1&&g.push(P),g}const F={name:m(()=>e.name),rootRef:p,tabIndicatorRef:c,routeData:u};ke(()=>{r.unregisterTab(F)}),ze(()=>{r.registerTab(F)});function z(s,T){const P={ref:p,class:oe.value,tabindex:C.value,role:"tab","aria-selected":E.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:A,...T};return He(w(s,P,N()),[[Oe,re.value]])}return{renderTab:z,$tabs:r}}var le=se({name:"QTab",props:pt,emits:yt,setup(e,{slots:b,emit:y}){const{renderTab:u}=wt(e,b,y);return()=>u("div")}});function Tt(e,b,y){const u=y===!0?["left","right"]:["top","bottom"];return`absolute-${b===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const qt=["left","center","right","justify"];var Ct=se({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>qt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:b,emit:y}){const{proxy:u}=be(),{$q:r}=u,{registerTick:k}=fe(),{registerTick:h}=fe(),{registerTick:p}=fe(),{registerTimeout:c,removeTimeout:re}=Pe(),{registerTimeout:E,removeTimeout:oe}=Pe(),V=q(null),C=q(null),S=q(e.modelValue),A=q(!1),N=q(!0),F=q(!1),z=q(!1),s=[],T=q(0),P=q(!1);let g=null,x=null,R;const D=m(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Tt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Le=m(()=>{const a=T.value,l=S.value;for(let n=0;n<a;n++)if(s[n].name.value===l)return!0;return!1}),Ie=m(()=>`q-tabs__content--align-${A.value===!0?"left":z.value===!0?"justify":e.align}`),Be=m(()=>`q-tabs row no-wrap items-center q-tabs--${A.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ae=m(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ie.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),H=m(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),O=m(()=>e.vertical!==!0&&r.lang.rtl===!0),ie=m(()=>mt===!1&&O.value===!0);X(O,U),X(()=>e.modelValue,a=>{ce({name:a,setCurrent:!0,skipEmit:!0})}),X(()=>e.outsideArrows,G);function ce({name:a,setCurrent:l,skipEmit:n}){S.value!==a&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&y("update:modelValue",a),(l===!0||e["onUpdate:modelValue"]===void 0)&&($e(S.value,a),S.value=a))}function G(){k(()=>{he({width:V.value.offsetWidth,height:V.value.offsetHeight})})}function he(a){if(H.value===void 0||C.value===null)return;const l=a[H.value.container],n=Math.min(C.value[H.value.scroll],Array.prototype.reduce.call(C.value.children,(v,i)=>v+(i[H.value.content]||0),0)),d=l>0&&n>l;A.value=d,d===!0&&h(U),z.value=l<parseInt(e.breakpoint,10)}function $e(a,l){const n=a!=null&&a!==""?s.find(v=>v.name.value===a):null,d=l!=null&&l!==""?s.find(v=>v.name.value===l):null;if(n&&d){const v=n.tabIndicatorRef.value,i=d.tabIndicatorRef.value;g!==null&&(clearTimeout(g),g=null),v.style.transition="none",v.style.transform="none",i.style.transition="none",i.style.transform="none";const o=v.getBoundingClientRect(),_=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-_.top}px,0) scale3d(1,${_.height?o.height/_.height:1},1)`:`translate3d(${o.left-_.left}px,0,0) scale3d(${_.width?o.width/_.width:1},1,1)`,p(()=>{g=setTimeout(()=>{g=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}d&&A.value===!0&&W(d.rootRef.value)}function W(a){const{left:l,width:n,top:d,height:v}=C.value.getBoundingClientRect(),i=a.getBoundingClientRect();let o=e.vertical===!0?i.top-d:i.left-l;if(o<0){C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),U();return}o+=e.vertical===!0?i.height-v:i.width-n,o>0&&(C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),U())}function U(){const a=C.value;if(a===null)return;const l=a.getBoundingClientRect(),n=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);O.value===!0?(N.value=Math.ceil(n+l.width)<a.scrollWidth-1,F.value=n>0):(N.value=n>0,F.value=e.vertical===!0?Math.ceil(n+l.height)<a.scrollHeight:Math.ceil(n+l.width)<a.scrollWidth)}function me(a){x!==null&&clearInterval(x),x=setInterval(()=>{Ve(a)===!0&&$()},5)}function ge(){me(ie.value===!0?Number.MAX_SAFE_INTEGER:0)}function _e(){me(ie.value===!0?0:Number.MAX_SAFE_INTEGER)}function $(){x!==null&&(clearInterval(x),x=null)}function Me(a,l){const n=Array.prototype.filter.call(C.value.children,_=>_===l||_.matches&&_.matches(".q-tab.q-focusable")===!0),d=n.length;if(d===0)return;if(a===36)return W(n[0]),n[0].focus(),!0;if(a===35)return W(n[d-1]),n[d-1].focus(),!0;const v=a===(e.vertical===!0?38:37),i=a===(e.vertical===!0?40:39),o=v===!0?-1:i===!0?1:void 0;if(o!==void 0){const _=O.value===!0?-1:1,L=n.indexOf(l)+o*_;return L>=0&&L<d&&(W(n[L]),n[L].focus({preventScroll:!0})),!0}}const Qe=m(()=>ie.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,l)=>{a.scrollLeft=-l}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,l)=>{a.scrollTop=l}}:{get:a=>a.scrollLeft,set:(a,l)=>{a.scrollLeft=l}});function Ve(a){const l=C.value,{get:n,set:d}=Qe.value;let v=!1,i=n(l);const o=a<i?-1:1;return i+=o*5,i<0?(v=!0,i=0):(o===-1&&i<=a||o===1&&i>=a)&&(v=!0,i=a),d(l,i),U(),v}function ye(a,l){for(const n in a)if(a[n]!==l[n])return!1;return!0}function De(){let a=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const n=s.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:d,query:v}=u.$route,i=Object.keys(v).length;for(const o of n){const _=o.routeData.exact.value===!0;if(o.routeData[_===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:L,query:ue,matched:je,href:Ne}=o.routeData.resolvedLink.value,de=Object.keys(ue).length;if(_===!0){if(L!==d||de!==i||ye(v,ue)===!1)continue;a=o.name.value;break}if(L!==""&&L!==d||de!==0&&ye(ue,v)===!1)continue;const M={matchedLen:je.length,queryDiff:i-de,hrefLen:Ne.length-L.length};if(M.matchedLen>l.matchedLen){a=o.name.value,l=M;continue}else if(M.matchedLen!==l.matchedLen)continue;if(M.queryDiff<l.queryDiff)a=o.name.value,l=M;else if(M.queryDiff!==l.queryDiff)continue;M.hrefLen>l.hrefLen&&(a=o.name.value,l=M)}a===null&&s.some(o=>o.routeData===void 0&&o.name.value===S.value)===!0||ce({name:a,setCurrent:!0})}function Ee(a){if(re(),P.value!==!0&&V.value!==null&&a.target&&typeof a.target.closest=="function"){const l=a.target.closest(".q-tab");l&&V.value.contains(l)===!0&&(P.value=!0,A.value===!0&&W(l))}}function Fe(){c(()=>{P.value=!1},30)}function J(){we.avoidRouteWatcher===!1?E(De):oe()}function pe(){if(R===void 0){const a=X(()=>u.$route.fullPath,J);R=()=>{a(),R=void 0}}}function We(a){s.push(a),T.value++,G(),a.routeData===void 0||u.$route===void 0?E(()=>{if(A.value===!0){const l=S.value,n=l!=null&&l!==""?s.find(d=>d.name.value===l):null;n&&W(n.rootRef.value)}}):(pe(),a.routeData.hasRouterLink.value===!0&&J())}function Ue(a){s.splice(s.indexOf(a),1),T.value--,G(),R!==void 0&&a.routeData!==void 0&&(s.every(l=>l.routeData===void 0)===!0&&R(),J())}const we={currentModel:S,tabProps:D,hasFocus:P,hasActiveTab:Le,registerTab:We,unregisterTab:Ue,verifyRouteModel:J,updateModel:ce,onKbdNavigate:Me,avoidRouteWatcher:!1};et(Se,we);function Te(){g!==null&&clearTimeout(g),$(),R!==void 0&&R()}let qe;return ke(Te),tt(()=>{qe=R!==void 0,Te()}),at(()=>{qe===!0&&pe(),G()}),()=>w("div",{ref:V,class:Be.value,role:"tablist",onFocusin:Ee,onFocusout:Fe},[w(ht,{onResize:he}),w("div",{ref:C,class:Ae.value,onScroll:U},Re(b.default)),w(K,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ge,onTouchstartPassive:ge,onMouseupPassive:$,onMouseleavePassive:$,onTouchendPassive:$}),w(K,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:_e,onTouchstartPassive:_e,onMouseupPassive:$,onMouseleavePassive:$,onTouchendPassive:$})])}}),ne=se({name:"QTabPanel",props:lt,setup(e,{slots:b}){return()=>w("div",{class:"q-tab-panel",role:"tabpanel"},Re(b.default))}}),Pt=se({name:"QTabPanels",props:{...nt,...st},emits:rt,setup(e,{slots:b}){const y=be(),u=ot(e,y.proxy.$q),{updatePanelsList:r,getPanelContent:k,panelDirectives:h}=it(),p=m(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(b),ct("div",{class:p.value},k(),"pan",e.swipeable,()=>h.value))}}),xt="/susi-front/assets/product_hero(wide).a1c0870c.png",kt="/susi-front/assets/purify-(\u767D\u8272\u5B57\u9AD4\u900F\u660E\u80CC\u666F).360a5622.png",St="/susi-front/assets/tone-(\u767D\u8272\u5B57\u9AD4\u900F\u660E\u80CC\u666F).4fa12a06.png",Rt="/susi-front/assets/renew-(\u767D\u8272\u5B57\u9AD4\u900F\u660E\u80CC\u666F).db1999a7.png",Lt="/susi-front/assets/hydrate-(\u767D\u8272\u5B57\u9AD4\u900F\u660E\u80CC\u666F).9ffc1a77.png";const It=t("div",{class:"proHero"},[t("input",{type:"radio",name:"scene",id:"scene-1",value:"1",checked:""}),t("input",{type:"radio",name:"scene",id:"scene-2",value:"2"}),t("input",{type:"radio",name:"scene",id:"scene-3",value:"3"}),t("input",{type:"radio",name:"scene",id:"scene-4",value:"4"}),t("main",{id:"site"},[t("header",{class:"top-nav"}),t("div",{class:"ocean"},[t("div",{class:"ocean-text"},[t("img",{src:xt,style:{height:"400px","margin-left":"-30vw"}})])]),t("div",{class:"left-side"},[t("div",{class:"page-numbers","data-total":"04"},[t("div",{class:"page-number -tens"},"0"),t("div",{class:"page-number -ones"},[j(" 1"),t("br"),j("2"),t("br"),j("3"),t("br"),j("4 ")])])]),t("div",{class:"hero"},[t("div",{class:"layer","data-scene":"1"},[t("h1",{class:"heading"},[t("img",{src:kt})])]),t("div",{class:"layer","data-scene":"2"},[t("h1",{class:"heading"},[t("img",{src:St})])]),t("div",{class:"layer","data-scene":"3"},[t("h1",{class:"heading"},[t("img",{src:Rt})])]),t("div",{class:"layer","data-scene":"4"},[t("div",{class:"heading"},[t("img",{src:Lt})])])]),t("div",{class:"left-content"},[t("div",{class:"layer","data-scene":"1"},[t("div",{class:"fact subtitle text-orange-10"},"#\u4FDD\u6FD5 #\u4FEE\u8B77"),t("div",{class:"fact number"},"\u71B1\u92B7\u63A8\u85A6"),t("div",{class:"fact description"},"[\u6703\u54E1\u9650\u5B9A] \u65E9\u5B89\u6DE8\u819A\u7165\u767D\u7D44")]),t("div",{class:"layer","data-scene":"2"},[t("div",{class:"fact subtitle text-orange-10"},"#\u654F\u611F\u808C\u819A #\u4EAE\u767D"),t("div",{class:"fact number"},"\u5C0F\u7DE8\u7CBE\u9078"),t("div",{class:"fact description"},"[\u597D\u8A55\u71B1\u8CE3] \u8336\u6A39\u5BB6\u65CF\u4FDD\u6FD5\u6C34\u4E73\u7D44")]),t("div",{class:"layer","data-scene":"3"},[t("div",{class:"fact subtitle text-orange-10"},"#\u4FDD\u6FD5 #\u4FEE\u8B77"),t("div",{class:"fact number"},"\u73FE\u6B63\u512A\u60E0"),t("div",{class:"fact description"},"[\u6703\u54E1\u9650\u5B9A] \u65E9\u5B89\u6DE8\u819A\u7165\u767D\u7D44")]),t("div",{class:"layer","data-scene":"4"},[t("div",{class:"fact subtitle text-orange-10"},"#\u654F\u611F\u808C\u819A #\u4EAE\u767D"),t("div",{class:"fact number"},"\u71B1\u92B7\u7522\u54C1"),t("div",{class:"fact description"},"[\u597D\u8A55\u71B1\u8CE3] \u8336\u6A39\u5BB6\u65CF\u4FDD\u6FD5\u6C34\u4E73\u7D44")])]),t("div",{class:"right-content"},[t("nav",{class:"slide-nav"},[t("div",{class:"nav-button -prev"},[j(" < "),t("label",{class:"nav-toggle",for:"scene-1"},"1"),t("label",{class:"nav-toggle",for:"scene-2"},"2"),t("label",{class:"nav-toggle",for:"scene-3"},"3"),t("label",{class:"nav-toggle",for:"scene-4"},"4")]),t("div",{class:"nav-button -next"},[j(" > "),t("label",{class:"nav-toggle",for:"scene-1"},"1"),t("label",{class:"nav-toggle",for:"scene-2"},"2"),t("label",{class:"nav-toggle",for:"scene-3"},"3"),t("label",{class:"nav-toggle",for:"scene-4"},"4")])]),t("div",{class:"layer","data-scene":"1"},[t("h2",{class:"heading"}," SUSI\u8336\u6A39\u6975\u6548\u4FEE\u8B77\u5B89\u74F6 30ml "),t("p",{class:"paragraph"}," \u5C08\u70BA\u75B2\u52DE\u808C\u3001\u71AC\u591C\u808C\u6253\u9020\u7684\u9AD8\u6548\u80FD\u7CBE\u83EF \u73FE\u4EE3\u4EBA\u56E0\u70BA\u5DE5\u4F5C\u52A0\u73ED\u3001\u71AC\u591C\u8FFD\u5287\uFF0C\u5404\u7A2E\u751F\u6D3B\u58D3\u529B\u5C0E\u81F4\u808C\u819A\u81EA\u6211\u4FEE\u8B77\u529B\u4E0B\u964D\uFF0C \u7D05\u8336\u7CBE\u83EF\u5F37\u5927\u7684\u4FEE\u8B77\u8207\u6297\u6C27\u5316\u6548\u679C\uFF0C\u7DE9\u89E3\u808C\u819A\u7684\u75B2\u52DE\u3001\u7165\u56DE\u539F\u6709\u7684\u5F48\u6F64\u6D3B\u529B\u3002 ")]),t("div",{class:"layer","data-scene":"2"},[t("h2",{class:"heading"}," SUSI\u8336\u6A39\u4EAE\u984F\u63A7\u6CB9\u5E95\u599D\u7D44 400ml "),t("p",{class:"paragraph"}," \u6253\u9020\u7C89\u7D05\u6C34\u4EAE\u808C\u6DFB\u52A0\u8336\u6A39\u8403\u53D6\u3001\u751C\u83DC\u9E7C\u4EE5\u53CA\u83F8\u9E7C\u80FA\uFF0C\u80FD\u5920\u5E6B\u52A9\u808C\u819A\u540C\u6642\u63D0\u5347\u4FDD\u6FD5\u5EA6\u53CA\u4EAE\u767D\u808C\u819A\u3002\u4EAE\u984F\u971C\u540C\u6642\u5177\u6709\u7D20\u984F\u971C&\u9632\u66EC\u4E8C\u5408\u4E00\u529F\u6548\u3002\u8F15\u4E73\u971C\u8CEA\u5730\u8F15\u8584\u6C34\u6F64\uFF0CSPF50+\u9AD8\u9632\u66EC\u4FC2\u6578\uFF0C\u6253\u9020\u7C89\u5AE9\u7684\u88F8\u599D\u7D20\u984F\u611F\uFF0C\u7C89\u6F64\u6C34\u5149\u8CBC\u819A\u79D1\u6280\uFF0C\u6821\u6B63\u819A\u8272\u4E0D\u5747\u53CA\u589E\u52A0\u6301\u599D\u5EA6\uFF0C\u4FDD\u6FD5&\u7D30\u6ED1\u8CEA\u5730\u7684\u4EAE\u984F\u971C\uFF0C\u4F7F\u7528\u5728\u808C\u819A\u4E0A\uFF0C\u80FD\u5920\u6253\u9020\u51FA\u5982\u540C\u6AFB\u82B1\u822C\u7C89\u5AE9\u5149\u6FA4\u7684\u808C\u819A\u3002 ")]),t("div",{class:"layer","data-scene":"3"},[t("h2",{class:"heading"}," SUSI\u8336\u6A39\u6975\u6548\u4FEE\u8B77\u5B89\u74F6 30ml "),t("p",{class:"paragraph"}," \u5C08\u70BA\u75B2\u52DE\u808C\u3001\u71AC\u591C\u808C\u6253\u9020\u7684\u9AD8\u6548\u80FD\u7CBE\u83EF \u73FE\u4EE3\u4EBA\u56E0\u70BA\u5DE5\u4F5C\u52A0\u73ED\u3001\u71AC\u591C\u8FFD\u5287\uFF0C\u5404\u7A2E\u751F\u6D3B\u58D3\u529B\u5C0E\u81F4\u808C\u819A\u81EA\u6211\u4FEE\u8B77\u529B\u4E0B\u964D\uFF0C \u7D05\u8336\u7CBE\u83EF\u5F37\u5927\u7684\u4FEE\u8B77\u8207\u6297\u6C27\u5316\u6548\u679C\uFF0C\u7DE9\u89E3\u808C\u819A\u7684\u75B2\u52DE\u3001\u7165\u56DE\u539F\u6709\u7684\u5F48\u6F64\u6D3B\u529B\u3002 ")]),t("div",{class:"layer","data-scene":"4"},[t("h2",{class:"heading"}," SUSI\u8336\u6A39\u4EAE\u984F\u63A7\u6CB9\u5E95\u599D\u7D44 400ml "),t("p",{class:"paragraph"}," \u6253\u9020\u7C89\u7D05\u6C34\u4EAE\u808C\u6DFB\u52A0\u8336\u6A39\u8403\u53D6\u3001\u751C\u83DC\u9E7C\u4EE5\u53CA\u83F8\u9E7C\u80FA\uFF0C\u80FD\u5920\u5E6B\u52A9\u808C\u819A\u540C\u6642\u63D0\u5347\u4FDD\u6FD5\u5EA6\u53CA\u4EAE\u767D\u808C\u819A\u3002\u4EAE\u984F\u971C\u540C\u6642\u5177\u6709\u7D20\u984F\u971C&\u9632\u66EC\u4E8C\u5408\u4E00\u529F\u6548\u3002\u8F15\u4E73\u971C\u8CEA\u5730\u8F15\u8584\u6C34\u6F64\uFF0CSPF50+\u9AD8\u9632\u66EC\u4FC2\u6578\uFF0C\u6253\u9020\u7C89\u5AE9\u7684\u88F8\u599D\u7D20\u984F\u611F\uFF0C\u7C89\u6F64\u6C34\u5149\u8CBC\u819A\u79D1\u6280\uFF0C\u6821\u6B63\u819A\u8272\u4E0D\u5747\u53CA\u589E\u52A0\u6301\u599D\u5EA6\uFF0C\u4FDD\u6FD5&\u7D30\u6ED1\u8CEA\u5730\u7684\u4EAE\u984F\u971C\uFF0C\u4F7F\u7528\u5728\u808C\u819A\u4E0A\uFF0C\u80FD\u5920\u6253\u9020\u51FA\u5982\u540C\u6AFB\u82B1\u822C\u7C89\u5AE9\u5149\u6FA4\u7684\u808C\u819A\u3002 ")])])])],-1),Bt={class:"container"},At={class:"menu"},$t={class:"proCards q-pa-xs"},Mt={class:"row q-mx-auto"},Qt={class:"proCards q-pa-xs"},Vt={class:"row q-mx-auto"},Dt={class:"proCards q-pa-xs"},Et={class:"row q-mx-auto"},Ft={class:"proCards q-pa-xs"},Wt={class:"row q-mx-auto"},Gt={__name:"ProductPage",setup(e){const b=ut([]),y=()=>b.filter(h=>h.category==="\u6DE8\u819A\u4FDD\u990A"),u=()=>b.filter(h=>h.category==="\u6C90\u6D74\u6E05\u6F54"),r=()=>b.filter(h=>h.category==="\u7A7A\u9593\u9999\u6C1B"),k=q("\u6240\u6709\u5546\u54C1");return(async()=>{var h,p;try{const{data:c}=await dt.get("/products");b.push(...c.result)}catch(c){vt.fire({icon:"error",title:"\u5931\u6557",text:((p=(h=c==null?void 0:c.response)==null?void 0:h.data)==null?void 0:p.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(h,p)=>(I(),ft(gt,{id:"ProductPage",class:"bg text-center",style:{"padding-top":"100px","padding-bottom":"30vh"}},{default:B(()=>[It,t("div",Bt,[f(bt,{class:"text-brown"},{separator:B(()=>[f(K,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:B(()=>[f(xe,{label:"\u9996\u9801",icon:"home",to:"/"}),f(xe,{label:"\u7522\u54C1\u7CFB\u5217",icon:"widgets",to:"/products"})]),_:1})]),t("div",At,[f(Ct,{modelValue:k.value,"onUpdate:modelValue":p[0]||(p[0]=c=>k.value=c),class:"text-grey","active-color":"primary",vertical:"",style:{width:"10vw"}},{default:B(()=>[f(le,{name:"\u6240\u6709\u5546\u54C1",label:"\u6240\u6709\u5546\u54C1",style:{"font-weight":"900"}}),f(le,{name:"\u6DE8\u819A\u4FDD\u990A",label:"\u6DE8\u819A\u4FDD\u990A"}),f(le,{name:"\u6C90\u6D74\u6E05\u6F54",label:"\u6C90\u6D74\u6E05\u6F54"}),f(le,{name:"\u7A7A\u9593\u9999\u6C1B",label:"\u7A7A\u9593\u9999\u6C1B"})]),_:1},8,["modelValue"]),f(Pt,{modelValue:k.value,"onUpdate:modelValue":p[1]||(p[1]=c=>k.value=c),animated:"","transition-prev":"jump-up","transition-next":"jump-up",style:{background:"#F6F1EB",width:"99vw",overflow:"hidden"}},{default:B(()=>[f(ne,{name:"\u6240\u6709\u5546\u54C1"},{default:B(()=>[t("div",$t,[t("div",Mt,[(I(!0),Q(Z,null,Y(b,c=>(I(),Q("div",{class:"col-12 col-md-4",key:c._id,style:{"margin-top":"5rem"}},[f(ae,ee(te(c)),null,16)]))),128))])])]),_:1}),f(ne,{name:"\u6DE8\u819A\u4FDD\u990A"},{default:B(()=>[t("div",Qt,[t("div",Vt,[(I(!0),Q(Z,null,Y(y(),c=>(I(),Q("div",{class:"col-12 col-md-4",key:c,style:{"margin-top":"5rem"}},[f(ae,ee(te(c)),null,16)]))),128))])])]),_:1}),f(ne,{name:"\u6C90\u6D74\u6E05\u6F54"},{default:B(()=>[t("div",Dt,[t("div",Et,[(I(!0),Q(Z,null,Y(u(),c=>(I(),Q("div",{class:"col-12 col-md-4",key:c,style:{"margin-top":"5rem"}},[f(ae,ee(te(c)),null,16)]))),128))])])]),_:1}),f(ne,{name:"\u7A7A\u9593\u9999\u6C1B"},{default:B(()=>[t("div",Ft,[t("div",Wt,[(I(!0),Q(Z,null,Y(r(),c=>(I(),Q("div",{class:"col-12 col-md-4",key:c,style:{"margin-top":"5rem"}},[f(ae,ee(te(c)),null,16)]))),128))])])]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{Gt as default};