import{Q as i,a as s}from"./QItem.3c96c2a7.js";import{H as p,b6 as h,V as g,j as n,J as u,K as t,l as c,N as f,d as a,M as l,O as x,k as y,aU as b,F as k,aK as m,b0 as r}from"./index.06b18f7d.js";import{Q as w}from"./QPage.ab16c7b4.js";const Q={class:"container"},v=c("h6",{style:{"font-weight":"600"}},"\u7BA1\u7406\u8005\u6703\u54E1",-1),B={style:{"max-width":"100%"}},N={class:"q-pa-md q-gutter-md"},q={__name:"AdminMember",setup(S){const _=p([]);return(async()=>{var o,d;try{const{data:e}=await h.get("/users/all");_.push(...e.result)}catch(e){g.fire({icon:"error",title:"\u5931\u6557",text:((d=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:d.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(o,d)=>(n(),u(w,{class:"bg"},{default:t(()=>[c("div",Q,[v,c("div",B,[c("div",N,[f((n(),u(i,{clickable:"",class:"text-center"},{default:t(()=>[a(s,null,{default:t(()=>[l("\u4F7F\u7528\u8005")]),_:1}),a(s,null,{default:t(()=>[l("\u96FB\u8A71")]),_:1}),a(s,null,{default:t(()=>[l("\u4FE1\u7BB1")]),_:1}),a(s,null,{default:t(()=>[l("\u6027\u5225")]),_:1})]),_:1})),[[m]]),a(x),(n(!0),y(k,null,b(_,e=>f((n(),u(i,{clickable:"",class:"text-center",style:{background:"#fff"},key:e._id},{default:t(()=>[a(s,null,{default:t(()=>[l(r(e.account),1)]),_:2},1024),a(s,null,{default:t(()=>[l(r(e.phone),1)]),_:2},1024),a(s,null,{default:t(()=>[l(r(e.email),1)]),_:2},1024),a(s,null,{default:t(()=>[l(r(e.gender?"\u5973":"\u7537"),1)]),_:2},1024)]),_:2},1024)),[[m]])),128))])])])]),_:1}))}};export{q as default};