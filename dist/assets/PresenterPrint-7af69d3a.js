import{f as d,h as _,j as p,ag as u,c as m,ah as h,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as i,an as y,ao as b,m as N,ap as j,aq as k,_ as w}from"./nav-3e7bccbc.js";import{N as P}from"./NoteViewer-68e1631c.js";import{u as S}from"./index-69c1b7b4.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),S({title:`Notes - ${m.title}`});const r=h(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,l)=>(i(),n("div",{id:"page-root",style:v(s(k))},[t("div",V,[t("div",D,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(s(r),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",C,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),N(P,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(i(),n("hr",F)):j("v-if",!0)]))),128))])],4))}}),R=w(M,[["__file","D:/OneDrive - zju.edu.cn/Slidev/julia/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
