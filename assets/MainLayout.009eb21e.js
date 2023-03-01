import{u as I,c as y,h as E,v as X,i as G,x as A,g as j,y as K,z as W,r as S,w as R,A as J,B as Z,C as ee,D as te,E as le,G as oe,H as O,I as ae,j as B,J as V,K as s,d as e,Q as c,l,L as x,M as k,q as $,N as C,O as z,P as T,R as F,S as L,U as se,V as M}from"./index.83949514.js";import{Q as N,a as Y,b as ne,C as Q}from"./ClosePopup.5ea820dd.js";import{Q as P,a as U}from"./QItem.f96382df.js";import{Q as re,a as ie,b as ue,c as de}from"./QLayout.a7c05bf0.js";import{Q as H}from"./QForm.92a2141d.js";import{_ as ce}from"./logo-front.244961e4.js";import{v as fe}from"./index.be657fbd.js";import"./QResizeObserver.c5610b00.js";const me=["top","middle","bottom"];var ge=I({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:t=>me.includes(t)}},setup(t,{slots:d}){const u=y(()=>t.align!==void 0?{verticalAlign:t.align}:null),f=y(()=>{const n=t.outline===!0&&t.color||t.textColor;return`q-badge flex inline items-center no-wrap q-badge--${t.multiLine===!0?"multi":"single"}-line`+(t.outline===!0?" q-badge--outline":t.color!==void 0?` bg-${t.color}`:"")+(n!==void 0?` text-${n}`:"")+(t.floating===!0?" q-badge--floating":"")+(t.rounded===!0?" q-badge--rounded":"")+(t.transparent===!0?" q-badge--transparent":"")});return()=>E("div",{class:f.value,style:u.value,role:"status","aria-label":t.label},X(d.default,t.label!==void 0?[t.label]:[]))}});const pe={position:{type:String,default:"bottom-right",validator:t=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(t)},offset:{type:Array,validator:t=>t.length===2},expand:Boolean};function ve(){const{props:t,proxy:{$q:d}}=j(),u=G(K,A);if(u===A)return console.error("QPageSticky needs to be child of QLayout"),A;const f=y(()=>{const a=t.position;return{top:a.indexOf("top")>-1,right:a.indexOf("right")>-1,bottom:a.indexOf("bottom")>-1,left:a.indexOf("left")>-1,vertical:a==="top"||a==="bottom",horizontal:a==="left"||a==="right"}}),n=y(()=>u.header.offset),g=y(()=>u.right.offset),w=y(()=>u.footer.offset),p=y(()=>u.left.offset),q=y(()=>{let a=0,h=0;const _=f.value,i=d.lang.rtl===!0?-1:1;_.top===!0&&n.value!==0?h=`${n.value}px`:_.bottom===!0&&w.value!==0&&(h=`${-w.value}px`),_.left===!0&&p.value!==0?a=`${i*p.value}px`:_.right===!0&&g.value!==0&&(a=`${-i*g.value}px`);const o={transform:`translate(${a}, ${h})`};return t.offset&&(o.margin=`${t.offset[1]}px ${t.offset[0]}px`),_.vertical===!0?(p.value!==0&&(o[d.lang.rtl===!0?"right":"left"]=`${p.value}px`),g.value!==0&&(o[d.lang.rtl===!0?"left":"right"]=`${g.value}px`)):_.horizontal===!0&&(n.value!==0&&(o.top=`${n.value}px`),w.value!==0&&(o.bottom=`${w.value}px`)),o}),m=y(()=>`q-page-sticky row flex-center fixed-${t.position} q-page-sticky--${t.expand===!0?"expand":"shrink"}`);function v(a){const h=W(a.default);return E("div",{class:m.value,style:q.value},t.expand===!0?h:[E("div",h)])}return{$layout:u,getStickyContent:v}}var he=I({name:"QPageScroller",props:{...pe,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(t,{slots:d,emit:u}){const{proxy:{$q:f}}=j(),{$layout:n,getStickyContent:g}=ve(),w=S(null);let p;const q=y(()=>n.height.value-(n.isContainer.value===!0?n.containerHeight.value:f.screen.height));function m(){return t.reverse===!0?q.value-n.scroll.value.position>t.scrollOffset:n.scroll.value.position>t.scrollOffset}const v=S(m());function a(){const b=m();v.value!==b&&(v.value=b)}function h(){t.reverse===!0?p===void 0&&(p=R(q,a)):_()}R(n.scroll,a),R(()=>t.reverse,h);function _(){p!==void 0&&(p(),p=void 0)}function i(b){const r=ee(n.isContainer.value===!0?w.value:n.rootRef.value);te(r,t.reverse===!0?n.height.value:0,t.duration),u("click",b)}function o(){return v.value===!0?E("div",{ref:w,class:"q-page-scroller",onClick:i},g(d)):null}return h(),J(_),()=>E(Z,{name:"q-transition--fade"},o)}}),D="/susi-front/assets/XX.094da73b.svg",_e="/susi-front/assets/\u5730\u5716.2d44aedb.png";const be=l("img",{style:{height:"40px"},src:ce},null,-1),ye={style:{position:"absolute",left:"85vw"}},we={style:{"min-width":"600px",position:"relative","overflow-x":"hidden"}},xe={class:"cancel"},ke={src:D},qe={id:"q-app",style:{"min-height":"50vh","max-width":"500px",background:"#FFFEF2",margin:"auto","font-weight":"100"}},Be={class:"q-mx-auto q-py-lg q-px-xl",style:{"min-width":"400px"}},Ve=l("h4",{style:{"font-weight":"600"}},"\u8A3B\u518A\u6703\u54E1",-1),Ce={class:"text-center",style:{"margin-top":"3rem"}},Qe={style:{"min-width":"600px",position:"relative","overflow-x":"hidden"}},$e={class:"cancel"},Fe={src:D},Se={id:"q-app",style:{"min-height":"50vh","max-width":"500px",background:"#FFFEF2",margin:"auto","font-weight":"100"}},Ee={class:"q-py-lg",style:{"max-width":"500px","margin-left":"2rem","margin-right":"2rem"}},Le=l("h4",{style:{"font-weight":"600"}},"\u6703\u54E1\u767B\u5165",-1),Pe=l("p",{style:{"font-weight":"600","font-size":"20px","margin-top":"2rem"}}," \u7B2C\u4E00\u6B21\u4F86sushi?",-1),Ue=l("p",{style:{"font-weight":"300","font-size":"15px"}}," \u7ACB\u5373\u8A3B\u518A\u4EAB\u6709\u66F4\u591A\u512A\u60E0",-1),Ae={class:"row q-gutter-md q-mx-auto",style:{width:"80%"}},Re=l("div",{class:"col-12 col-sm-5"},[l("h6",null,"\u4EA4\u901A\u8CC7\u8A0A"),l("a",{href:"https://www.google.com/maps/place/%E7%B6%A0%E5%96%84%E7%94%9F%E6%B4%BB%E8%BE%B2%E5%A0%B4+(%E8%AB%8B%E5%85%88%E4%BE%86%E9%9B%BB%E9%A0%90%E7%B4%84)/@24.8278207,121.297251,17z/data=!3m1!4b1!4m6!3m5!1s0x346816518056441b:0x8f65bf18fca9e8c9!8m2!3d24.8278158!4d121.2994397!16s%2Fg%2F11f5dp63m0?hl=zh-TW"},[l("img",{class:"map",src:_e})])],-1),ze={class:"col-12 col-sm-3 q-px-lg"},Ne=l("h6",null,"\u806F\u7D61\u8CC7\u8A0A",-1),Oe=l("br",null,null,-1),Te=l("br",null,null,-1),Me=l("br",null,null,-1),Ye=l("a",{href:"https://www.facebook.com/GreenPeaceLivingFarm/",style:{color:"#F6F1EB"}},"Facebook",-1),He=l("br",null,null,-1),Ie=l("a",{href:"https://www.youtube.com/@user-ki3uv7tt6t",style:{color:"#F6F1EB"}},"Youtube",-1),je={class:"col-12 col-sm-3 q-px-lg"},De=l("h6",null,"\u53CB\u5584\u9023\u7D50",-1),Xe=l("br",null,null,-1),Ge=l("br",null,null,-1),Ke=l("br",null,null,-1),We=l("br",null,null,-1),Je=l("br",null,null,-1),rt={__name:"MainLayout",setup(t){const d=S(!1),u=S(!1),f=S(!1),n=le(),{isLogin:g,isAdmin:w,cart:p}=oe(n),{logout:q}=n,m=O({account:"",password:"",passwordConfirm:""}),v=O({account:"",password:""}),a={email(i){return fe.isEmail(i)||"\u683C\u5F0F\u932F\u8AA4"},required(i){return!!i||"\u6B04\u4F4D\u5FC5\u586B"},length(i){return i.length>=4&&i.length<=20||"\u9577\u5EA6\u5FC5\u9808\u70BA 4 ~ 20 \u500B\u5B57"},passwordConfirm(i){return i===m.password||"\u5BC6\u78BC\u4E0D\u4E00\u81F4"}},h=async()=>{var i,o;d.value=!0;try{await se.post("/users",m),M.fire({icon:"success",title:"\u6210\u529F",text:"\u8A3B\u518A\u6210\u529F"}),u.value=!1}catch(b){M.fire({icon:"error",title:"\u5931\u6557",text:((o=(i=b==null?void 0:b.response)==null?void 0:i.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}d.value=!1},_=async()=>{d.value=!0,await n.login(v),d.value=!1,f.value=!1};return(i,o)=>{const b=ae("router-view");return B(),V(re,{view:"hHh lpR fFf",style:{background:"#F6F1EB"}},{default:s(()=>[e(ue,{style:{"padding-top":"5px"},reveal:"",elevated:"",class:"bg text-primary"},{default:s(()=>[e(N,null,{default:s(()=>[e(Y,{style:{position:"absolute",left:"45vw"}},{default:s(()=>[e(c,{flat:"",class:"q-mr-sm",to:"/"},{default:s(()=>[be]),_:1})]),_:1}),l("div",ye,[x(g)?(B(),V(c,{key:0,flat:"",dense:"",icon:"shopping_cart",class:"q-mr-sm",to:"/cart"},{default:s(()=>[e(ge,{label:x(p),rounded:"",floating:"",color:"accent"},null,8,["label"]),k("\u8CFC\u7269\u8ECA ")]),_:1})):$("",!0),e(c,{flat:"",round:"",dense:"",icon:"account_circle",class:"q-mr-sm"},{default:s(()=>[e(ne,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:s(()=>[e(ie,{style:{"min-width":"100px"}},{default:s(()=>[x(g)?$("",!0):C((B(),V(P,{key:0,clickable:"",onClick:o[0]||(o[0]=r=>f.value=!0)},{default:s(()=>[e(U,null,{default:s(()=>[k("\u767B\u5165/\u8A3B\u518A")]),_:1})]),_:1})),[[Q]]),x(g)?C((B(),V(P,{key:1,clickable:"",onClick:x(q)},{default:s(()=>[e(U,null,{default:s(()=>[k("\u767B\u51FA")]),_:1})]),_:1},8,["onClick"])),[[Q]]):$("",!0),e(z),x(g)?C((B(),V(P,{key:2,clickable:"",to:"/vip"},{default:s(()=>[e(U,null,{default:s(()=>[k("\u6703\u54E1\u4E2D\u5FC3")]),_:1})]),_:1})),[[Q]]):$("",!0),x(w)&&x(g)?C((B(),V(P,{key:3,clickable:"",to:"/admin"},{default:s(()=>[e(U,null,{default:s(()=>[k("\u7BA1\u7406\u8005\u4E2D\u5FC3")]),_:1})]),_:1})),[[Q]]):$("",!0)]),_:1})]),_:1})]),_:1})])]),_:1}),e(N,null,{default:s(()=>[e(Y,{class:"text-center"},{default:s(()=>[e(c,{label:"\u6700\u65B0\u6D88\u606F",to:"/"}),e(c,{label:"\u54C1\u724C\u7406\u5FF5",to:"/story"}),e(c,{label:"\u7522\u54C1\u7CFB\u5217",to:"/products"})]),_:1})]),_:1})]),_:1}),e(de,{style:{"padding-top":"0"}},{default:s(()=>[e(b),e(T,{modelValue:u.value,"onUpdate:modelValue":o[5]||(o[5]=r=>u.value=r),persistent:""},{default:s(()=>[l("div",we,[l("div",xe,[C(l("img",ke,null,512),[[Q]])]),l("div",qe,[l("div",Be,[Ve,e(H,{onSubmit:h,class:"q-gutter-md"},{default:s(()=>[e(F,{filled:"",modelValue:m.account,"onUpdate:modelValue":o[1]||(o[1]=r=>m.account=r),label:"Your account *",rules:[a.required,a.length],counter:"",maxlength:"20"},null,8,["modelValue","rules"]),e(F,{filled:"",type:"password",modelValue:m.password,"onUpdate:modelValue":o[2]||(o[2]=r=>m.password=r),label:"Your password *",rules:[a.required,a.length],counter:"",maxlength:"20"},null,8,["modelValue","rules"]),e(F,{filled:"",type:"password",modelValue:m.passwordConfirm,"onUpdate:modelValue":o[3]||(o[3]=r=>m.passwordConfirm=r),label:"Confirm Your password *",rules:[a.required,a.length],counter:"",maxlength:"20"},null,8,["modelValue","rules"]),l("div",Ce,[e(c,{label:"\u8A3B\u518A",type:"submit",loading:d.value,color:"secondary",style:{width:"100%",padding:"1rem","font-weight":"300"}},null,8,["loading"]),e(c,{flat:"",style:{color:"lightslategrey","font-weight":"300","margin-top":"1rem"},onClick:o[4]||(o[4]=r=>{u.value=!1,f.value=!0}),label:"\u5DF2\u7D93\u6709 susi \u6703\u54E1?"})])]),_:1})])])])]),_:1},8,["modelValue"]),e(T,{modelValue:f.value,"onUpdate:modelValue":o[9]||(o[9]=r=>f.value=r),persistent:""},{default:s(()=>[l("div",Qe,[l("div",$e,[C(l("img",Fe,null,512),[[Q]])]),l("div",Se,[l("div",Ee,[Le,e(H,{onSubmit:_,class:"q-gutter-md"},{default:s(()=>[e(F,{filled:"",modelValue:v.account,"onUpdate:modelValue":o[6]||(o[6]=r=>v.account=r),label:"Your account *",rules:[a.required,a.length],counter:"",maxlength:"20"},null,8,["modelValue","rules"]),e(F,{filled:"",type:"password",modelValue:v.password,"onUpdate:modelValue":o[7]||(o[7]=r=>v.password=r),label:"Your password *",rules:[a.required,a.length],counter:"",maxlength:"20"},null,8,["modelValue","rules"]),l("div",null,[e(c,{style:{width:"100%",padding:"1rem","font-weight":"300"},label:"\u767B\u5165",type:"submit",loading:d.value,color:"secondary",icon:"arrow_forward"},null,8,["loading"]),Pe,Ue,e(c,{outline:"",style:{color:"lightslategrey","font-weight":"300","margin-top":"1rem",width:"100%",padding:"1rem"},onClick:o[8]||(o[8]=r=>{u.value=!0,f.value=!1}),label:"\u8A3B\u518A\u65B0\u6703\u54E1",type:"submit",loading:d.value,color:"secondary"},null,8,["loading"])])]),_:1})])])])]),_:1},8,["modelValue"]),e(N,{class:"bg-primary q-py-xl",style:{color:"#F6F1EB"}},{default:s(()=>[l("div",Ae,[Re,l("div",ze,[Ne,e(z,{style:{background:"#fff"}}),Oe,e(L,{icon:"call"}),k("02-2232-5886 "),Te,e(L,{icon:"home"}),k("335\u6843\u5712\u5E02\u5927\u6EAA\u5340\u627F\u6069\u8DEF385\u865F "),Me,e(L,{icon:"flare"}),Ye,He,e(L,{icon:"send"}),Ie]),l("div",je,[De,e(z,{style:{background:"#fff"}}),Xe,e(c,{flat:"",label:"\u6700\u65B0\u6D88\u606F",to:"/"}),Ge,e(c,{flat:"",label:"\u54C1\u724C\u7406\u5FF5",to:"/story"}),Ke,e(c,{flat:"",label:"\u7522\u54C1\u7CFB\u5217",to:"/products"}),We,e(c,{flat:"",label:"\u767B\u5165\u6703\u54E1",onClick:o[10]||(o[10]=r=>f.value=!0)}),Je])])]),_:1}),e(he,{style:{"z-index":"100"},position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:s(()=>[e(c,{fab:"",icon:"keyboard_arrow_up",color:"primary"})]),_:1})]),_:1})]),_:1})}}};export{rt as default};
