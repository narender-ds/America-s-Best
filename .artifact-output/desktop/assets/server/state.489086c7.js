import"../static/index-e74f8984.js";import{B as C}from"../static/Breadcrumb-c8ad418f.js";import{P as w}from"../static/PageLayout-0102c22a.js";import{s as v,f as p}from"../static/global-a7bdc338.js";import{S as P}from"../static/staticData-e18209fe.js";import{j as a,a as o,F as $}from"../static/header-ab6cf8ae.js";import"../static/index-5cd9444a.js";var d="";const j={stream:{$id:"region",fields:["id","uid","meta","name","address","slug","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.dm_baseEntityCount","dm_directoryParents.meta.entityType","dm_directoryChildren.name","dm_directoryChildren.address","dm_directoryChildren.slug","dm_directoryChildren.dm_baseEntityCount","dm_directoryChildren.dm_directoryChildren.name","dm_directoryChildren.dm_directoryChildren.id","dm_directoryChildren.dm_directoryChildren.slug","dm_directoryChildren.dm_directoryChildren.address"],filter:{entityTypes:["ce_region"],savedFilterIds:["dm_stores-directory_address_region"]},localization:{locales:["en"],primary:!1}}},A=({document:r})=>{var s;return r!=null&&r.dm_directoryParents?((s=r==null?void 0:r.dm_directoryParents)==null||s.map(e=>{d=e.slug,d=`${d}/${r.slug.toString()}`}),d+".html"):`${r.slug.toString()}.html`},U=({relativePrefixToRoot:r,path:s,document:e})=>(e.dm_directoryParents.map(l=>{l.slug.toLowerCase()}),{title:e.c_meta_title?e.c_meta_title:`${e.name}Pacific Smile Dental`,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"meta",attributes:{name:"description",content:`${e.c_meta_description?e.c_meta_description:""}`}},{type:"meta",attributes:{name:"author",content:P.Brandname}},{type:"meta",attributes:{name:"robots",content:"noindex, nofollow"}},{type:"link",attributes:{rel:"canonical",href:`${e._site.c_canonical?e.c_canonical:v}${e.slug?e.slug:`${e.name.toLowerCase()}`}.html`}},{type:"meta",attributes:{property:"og:description",content:`${e.c_meta_description?e.c_meta_description:""}`}},{type:"link",attributes:{rel:"shortcut icon",href:p}},{type:"meta",attributes:{property:"og:title",content:`${e.name}`}},{type:"meta",attributes:{property:"og:image",content:p}},{type:"meta",attributes:{name:"twitter:card",content:"summary"}},{type:"meta",attributes:{name:"twitter:title",content:e.c_meta_title?e.c_meta_title:`${e.name} Pacific Smile Dental`}},{type:"meta",attributes:{name:"twitter:description",content:`${e.c_meta_description?e.c_meta_description:""}`}}]}),k=({relativePrefixToRoot:r,path:s,document:e})=>{const{name:l,_site:h,slug:y,address:x,c_banner_image:m,c_bannerHeading:N,dm_directoryParents:_,dm_directoryChildren:n}=e;let i="";const b=n&&(n==null?void 0:n.map(t=>{var g;if((t==null?void 0:t.dm_baseEntityCount)==1)return i=t.slug,i.replaceAll(" ","-"),t.dm_directoryChildren.map(c=>{var f=c.name.toString();let u=f.replaceAll(" ","-");i=y+"/"+i+"/"+u.toLowerCase()+".html"}),a("div",{className:"w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4",children:o("a",{href:i,className:"hover:text-red",children:[t.name," (",t.dm_baseEntityCount,")"]},t.slug)});{let c="/"+((g=_[1])==null?void 0:g.slug)+"/"+e.slug+"/"+t.slug+".html";return a("div",{className:"w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4 test",children:o("a",{href:c,className:"hover:text-red",children:[t.name," (",t.dm_baseEntityCount,")"]},t.slug)})}}));return m&&m.image.url,a($,{children:o(w,{_site:h,children:[a(C,{name:l,parents:_,baseUrl:r,address:""}),a("div",{className:"content-list",children:o("div",{className:"container",children:[a("div",{className:"sec-title",children:a("h2",{style:{textAlign:"center"},children:l})}),a("ul",{className:"region-list",children:b})]})})]})})};export{j as config,k as default,U as getHeadConfig,A as getPath};