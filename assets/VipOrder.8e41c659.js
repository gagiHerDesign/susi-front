import{Q as f,a}from"./QItem.aeb84400.js";import{H as k,b6 as x,V as v,j as i,J as d,K as t,l as n,N as m,d as e,M as s,O as w,k as o,aU as h,F as y,aK as g,b0 as u}from"./index.e6fab067.js";import{Q as b}from"./QPage.6dbe15bf.js";const Q={class:"container"},V=n("h6",{style:{"font-weight":"600"}},"\u6D88\u8CBB\u8005\u8A02\u55AE\u7D00\u9304",-1),D={style:{"max-width":"100%"}},S={class:"q-pa-md q-gutter-md"},O={__name:"VipOrder",setup(q){const p=k([]);return(async()=>{try{const{data:_}=await x.get("/orders");p.push(..._.result.map(c=>(c.totalPrice=c.products.reduce((l,r)=>l+r.p_id.price*r.quantity,0),c)))}catch{v.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(_,c)=>(i(),d(b,{class:"bg"},{default:t(()=>[n("div",Q,[V,n("div",D,[n("div",S,[m((i(),d(f,{clickable:"",class:"text-center"},{default:t(()=>[e(a,null,{default:t(()=>[s("\u5546\u54C1ID")]),_:1}),e(a,null,{default:t(()=>[s("\u65E5\u671F")]),_:1}),e(a,null,{default:t(()=>[s("\u7E3D\u91D1\u984D")]),_:1}),e(a,null,{default:t(()=>[s("\u5546\u54C1\u9805\u76EE")]),_:1})]),_:1})),[[g]]),e(w),(i(!0),o(y,null,h(p,l=>m((i(),d(f,{clickable:"",class:"text-center",style:{background:"#fff"},key:l._id},{default:t(()=>[e(a,null,{default:t(()=>[s(u(l._id),1)]),_:2},1024),e(a,null,{default:t(()=>[s(u(new Date(l.date).toLocaleDateString()),1)]),_:2},1024),e(a,null,{default:t(()=>[s(u(l.totalPrice)+" \u5143",1)]),_:2},1024),e(a,null,{default:t(()=>[n("ul",null,[(i(!0),o(y,null,h(l.products,r=>(i(),o("li",{key:r._id},u(r.quantity+" \u500B "+r.p_id.name),1))),128))])]),_:2},1024)]),_:2},1024)),[[g]])),128))])])])]),_:1}))}};export{O as default};
