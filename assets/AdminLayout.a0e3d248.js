import{Q as V,a as S,b as A,C as _}from"./ClosePopup.af316dc2.js";import{Q as l,a as t}from"./QItem.aeb84400.js";import{r as B,E as N,G as T,I,j as o,J as s,K as a,d as e,M as n,b0 as j,L as u,Q,l as y,N as r,q as c,O as D,S as M,aM as d,aK as i}from"./index.e6fab067.js";import{Q as q,a as k,b as E,c as F}from"./QLayout.dcc85107.js";import{Q as H,a as K,_ as P}from"./logo.0559dbbd.js";import"./QResizeObserver.74b1cbbf.js";import"./format.a33550d6.js";const R=["src"],U=y("img",{src:P},null,-1),$={__name:"AdminLayout",setup(z){const f=B(!1),m=N(),{isLogin:p,isAdmin:v,avatars:w,account:g}=T(m),{logout:h}=m;return(x,b)=>{const C=I("router-view");return o(),s(q,{view:"lHh Lpr lff",style:{background:"#F6F1EB"}},{default:a(()=>[e(E,{elevated:"",class:"bg-transparent"},{default:a(()=>[e(V,null,{default:a(()=>[e(S,{class:"text-center"}),e(l,{style:{color:"#000"}},{default:a(()=>[n(j(u(g))+"\uFF0C\u6B61\u8FCE\u56DE\u4F86! ",1)]),_:1}),e(Q,{flat:"",round:"",dense:"",icon:x.menu,class:"q-mr-sm text-primary"},{default:a(()=>[y("img",{src:u(w),style:{width:"50px"}},null,8,R),e(A,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:a(()=>[e(k,{style:{"min-width":"100px"}},{default:a(()=>[u(p)?r((o(),s(l,{key:0,clickable:"",onClick:u(h),to:"/"},{default:a(()=>[e(t,null,{default:a(()=>[n("\u767B\u51FA")]),_:1})]),_:1},8,["onClick"])),[[_]]):c("",!0),e(D),u(p)?r((o(),s(l,{key:1,clickable:"",to:"/vip"},{default:a(()=>[e(t,null,{default:a(()=>[n("\u6703\u54E1\u4E2D\u5FC3")]),_:1})]),_:1})),[[_]]):c("",!0),u(v)&&u(v)?r((o(),s(l,{key:2,clickable:"",to:"/admin"},{default:a(()=>[e(t,null,{default:a(()=>[n("\u7BA1\u7406\u8005\u4E2D\u5FC3")]),_:1})]),_:1})),[[_]]):c("",!0)]),_:1})]),_:1})]),_:1},8,["icon"])]),_:1})]),_:1}),e(K,{modelValue:f.value,"onUpdate:modelValue":b[0]||(b[0]=L=>f.value=L),"show-if-above":"",width:250,breakpoint:500},{default:a(()=>[e(H,{class:"fit"},{default:a(()=>[e(k,{padding:"",class:"menu-list"},{default:a(()=>[e(Q,{flat:"",to:"/"},{default:a(()=>[e(M,{size:"150px"},{default:a(()=>[U]),_:1})]),_:1}),r((o(),s(l,{clickable:"",to:"/admin"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(d,{name:"inbox"})]),_:1}),e(t,null,{default:a(()=>[n(" \u9996\u9801\u8CC7\u8A0A ")]),_:1})]),_:1})),[[i]]),r((o(),s(l,{clickable:"",to:"/admin/product"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(d,{name:"star"})]),_:1}),e(t,null,{default:a(()=>[n(" \u5546\u54C1\u7BA1\u7406 ")]),_:1})]),_:1})),[[i]]),r((o(),s(l,{clickable:"",to:"/admin/order"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(d,{name:"send"})]),_:1}),e(t,null,{default:a(()=>[n(" \u8A02\u55AE\u7BA1\u7406 ")]),_:1})]),_:1})),[[i]]),r((o(),s(l,{clickable:"",to:"/admin/member"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(d,{name:"drafts"})]),_:1}),e(t,null,{default:a(()=>[n(" \u6703\u54E1\u7BA1\u7406 ")]),_:1})]),_:1})),[[i]]),r((o(),s(l,{clickable:"",to:"/admin/plant"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(d,{name:"nature"})]),_:1}),e(t,null,{default:a(()=>[n(" \u8336\u6A39\u5712\u5340 ")]),_:1})]),_:1})),[[i]]),r((o(),s(l,{clickable:"",to:"/admin/tree"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(d,{name:"navigation"})]),_:1}),e(t,null,{default:a(()=>[n(" \u8336\u6A39\u8CC7\u6599 ")]),_:1})]),_:1})),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(F,null,{default:a(()=>[e(C)]),_:1})]),_:1})}}};export{$ as default};