import{Q as o}from"./QImg.f8fda5da.js";import{j as r,k as i,d as e,K as s,l as a,a_ as n,a$ as c,b0 as l,b1 as u,Q as d}from"./index.fdefb647.js";const m={id:"Pcard"},_={class:"q-pa-md row items-start q-gutter-md"},f={style:{width:"100%",height:"100%"}},g={class:"text-overline text-orange-9"},y={class:"text-primary q-mt-sm q-mb-xs",style:{"font-size":"calc(12px + 0.5vw)","font-weight":"600"}},h={class:"text-primary",style:{"font-weight":"100"}},S={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""},volume:{type:String,default:""}},setup(t){return(p,v)=>(r(),i("div",m,[e(d,{bordered:"",to:"/contents/"+t._id,class:"cardLook"},{default:s(()=>[a("div",_,[e(n,{class:"my-card",flat:""},{default:s(()=>[a("div",f,[e(o,{src:t.image,class:"cardImg"},null,8,["src"])]),e(c,null,{default:s(()=>[a("div",g,l(t.category),1),a("div",y,l(t.name),1),a("div",h,l(t.volume)+"ml ",1)]),_:1}),e(u,null,{default:s(()=>[e(d,{flat:"",class:"q-px-lg",color:"dark",label:"More",to:"/contents/"+t._id,style:{"font-weight":"100",width:"70%",margin:"auto"}},null,8,["to"])]),_:1})]),_:1})])]),_:1},8,["to"])]))}};export{S as _};
