import{r as C,H as w,b6 as V,V as p,I as T,j as c,J as g,K as s,l as n,d as t,Q as f,N as v,b0 as _,q as S,R as y,bu as B,P as I,M as u,O as N,k as P,aU as D,F as K,aK as Q,bh as z}from"./index.e6fab067.js";import{Q as A,a as $,C as j}from"./ClosePopup.af316dc2.js";import{Q as E}from"./QImg.b55c87bc.js";import{Q as M,a as R}from"./QSelect.fbef54a2.js";import{Q as H}from"./QForm.8c125916.js";import{Q as x,a as d}from"./QItem.aeb84400.js";import{Q as J}from"./QPage.6dbe15bf.js";import"./rtl.b51694b1.js";import"./format.a33550d6.js";const L={class:"container"},O=n("h6",{style:{"font-weight":"600"}},"\u5546\u54C1\u7BA1\u7406",-1),G={id:"q-app",style:{"min-height":"50vh","max-width":"500px",background:"#FFFEF2",margin:"auto","font-weight":"100"}},W={class:"q-mx-auto q-py-md q-px-xl",style:{"min-width":"400px"}},X={style:{"font-weight":"600","font-size":"calc(15px + 1vw)"}},Y=n("strong",null,"\u9EDE\u64CA\u65B0\u589E\u5716\u7247 : ",-1),Z=n("li",null,"\u5927\u5C0F\u9650\u52362mb",-1),ee=n("li",null,"\u50C5\u9650\u4E0A\u50B3\u4E00\u5F35\u5716\u7247",-1),le={class:"text-center",style:{"margin-top":"3rem"}},ae={style:{"max-width":"100%"}},te={class:"q-pa-md q-gutter-md"},oe=["src"],fe={__name:"AdminProduct",setup(se){const k=C(!1),q=["\u6DE8\u819A\u4FDD\u990A","\u6C90\u6D74\u6E05\u6F54","\u7A7A\u9593\u9999\u6C1B"],m={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},price(a){return a>=0||"\u50F9\u683C\u932F\u8AA4"}},i=w([]),e=w({_id:"",name:"",price:0,description:"",image:void 0,sell:!1,category:"",volume:"",loading:!1}),b=a=>{a===-1?(e._id="",e.name="",e.price=0,e.description="",e.image=void 0,e.sell=!1,e.category="",e.volume="",e.loading=!1,e.idx=-1):(e._id=i[a]._id,e.name=i[a].name,e.price=i[a].price,e.description=i[a].description,e.image=i[a].image,e.sell=i[a].sell,e.category=i[a].category,e.volume=i[a].volume,e.loading=!1,e.idx=a),e.dialog=!0},F=async()=>{var o,r;e.loading=!0;const a=new FormData;a.append("name",e.name),a.append("price",e.price),a.append("description",e.description),a.append("image",e.image),a.append("sell",e.sell),a.append("category",e.category),a.append("volume",e.volume);try{if(e._id.length===0){const{data:l}=await V.post("/products",a);i.push(l.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await V.patch("/products/"+e._id,a);i[e.idx]=l.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(l){p.fire({icon:"error",title:"\u5931\u6557",text:((r=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var a,o;try{const{data:r}=await V.get("/products/all");i.push(...r.result)}catch(r){p.fire({icon:"error",title:"\u5931\u6557",text:((o=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,o)=>{const r=T("v-image-input");return c(),g(J,{class:"bg"},{default:s(()=>[n("div",L,[O,t(f,{label:"\u65B0\u589E\u5546\u54C1",color:"primary",onClick:o[0]||(o[0]=l=>b(-1)),size:"15px",class:"q-px-xl q-py-xs"}),t(I,{modelValue:e.dialog,"onUpdate:modelValue":o[8]||(o[8]=l=>e.dialog=l),persistent:""},{default:s(()=>[n("div",G,[t(A,null,{default:s(()=>[t($),v(t(f,{icon:"close",flat:"",round:"",dense:""},null,512),[[j]])]),_:1}),n("div",W,[n("p",X,_(e._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1),t(H,{onSubmit:F,class:"q-gutter-md"},{default:s(()=>[n("div",null,[t(r,{modelValue:e.image,"onUpdate:modelValue":o[1]||(o[1]=l=>e.image=l),style:{margin:"2rem"}},null,8,["modelValue"]),e.image?(c(),g(E,{key:0,src:e.image,style:{width:"80%"}},null,8,["src"])):S("",!0),t(M,{anchor:"center right",self:"center left",offset:[-200,10]},{default:s(()=>[Y,Z,ee]),_:1})]),t(y,{class:"wid",filled:"",modelValue:e.name,"onUpdate:modelValue":o[2]||(o[2]=l=>e.name=l),label:"\u5546\u54C1\u540D\u7A31",rules:[m.required]},null,8,["modelValue","rules"]),t(y,{class:"wid",filled:"",modelValue:e.price,"onUpdate:modelValue":o[3]||(o[3]=l=>e.price=l),label:"\u5546\u54C1\u50F9\u683C",rules:[m.required,m.price]},null,8,["modelValue","rules"]),t(y,{class:"wid",filled:"",modelValue:e.description,"onUpdate:modelValue":o[4]||(o[4]=l=>e.description=l),label:"\u5546\u54C1\u8AAA\u660E",clearable:"",type:"textarea",color:"red-12",onKeydown:a.processTextareaFill,onFocus:a.processTextareaFill,rules:[m.required]},null,8,["modelValue","onKeydown","onFocus","rules"]),t(y,{class:"wid",filled:"",modelValue:e.volume,"onUpdate:modelValue":o[5]||(o[5]=l=>e.volume=l),label:"\u5546\u54C1\u5BB9\u91CF",rules:[m.required]},null,8,["modelValue","rules"]),t(R,{class:"wid",filled:"",modelValue:e.category,"onUpdate:modelValue":o[6]||(o[6]=l=>e.category=l),options:q,label:"\u5546\u54C1\u5206\u985E",rules:[m.required]},null,8,["modelValue","rules"]),t(B,{modelValue:e.sell,"onUpdate:modelValue":o[7]||(o[7]=l=>e.sell=l),label:"\u4E0A\u67B6\u5546\u54C1"},null,8,["modelValue"]),n("div",le,[t(f,{label:"\u9001\u51FA",type:"submit",loading:k.value,color:"secondary",style:{width:"100%",padding:"1rem","font-weight":"300"}},null,8,["loading"])])]),_:1})])])]),_:1},8,["modelValue"]),n("div",ae,[n("div",te,[v((c(),g(x,{clickable:"",class:"text-center"},{default:s(()=>[t(d,null,{default:s(()=>[u("\u5546\u54C1\u540D\u7A31")]),_:1}),t(d,null,{default:s(()=>[u("\u5546\u54C1\u50F9\u683C")]),_:1}),t(d,null,{default:s(()=>[u("\u5546\u54C1\u540D\u7A31")]),_:1}),t(d,null,{default:s(()=>[u("\u4E0A\u67B6\u72C0\u614B")]),_:1}),t(d,null,{default:s(()=>[u("\u5546\u54C1\u5206\u985E")]),_:1}),t(d,null,{default:s(()=>[u("\u7BA1\u7406/\u7DE8\u8F2F")]),_:1})]),_:1})),[[Q]]),t(N),(c(!0),P(K,null,D(i,(l,U)=>v((c(),g(x,{clickable:"",class:"text-center",style:{background:"#fff"},key:l._id},{default:s(()=>[t(d,null,{default:s(()=>[n("img",{src:l.image,"aspect-ratio":1,width:150,height:150,style:{"object-fit":"cover",margin:"auto"}},null,8,oe)]),_:2},1024),t(d,null,{default:s(()=>[u(_(l.name),1)]),_:2},1024),t(d,null,{default:s(()=>[u(_(l.price)+" \u5143",1)]),_:2},1024),t(d,null,{default:s(()=>[t(z,{label:` ${l.sell?"\u6709":"\u672A"} \u4E0A\u67B6`,modelValue:l.sell,"onUpdate:modelValue":h=>l.sell=h,"checked-icon":"check",color:"green","unchecked-icon":"clear",style:{position:"absolute",left:"54%"}},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024),t(d,null,{default:s(()=>[u(_(l.category),1)]),_:2},1024),t(d,null,{default:s(()=>[n("div",null,[t(f,{round:"",color:"secondary",size:"20px",icon:"save_as",onClick:h=>b(U)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)),[[Q]])),128))])])])]),_:1})}}};export{fe as default};