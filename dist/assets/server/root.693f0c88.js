import{a as i,F as l,j as e,H as c,b as p}from"../static/header-ab6cf8ae.js";import{B as g}from"../static/Breadcrumb-c8ad418f.js";import"../static/index-e74f8984.js";import"../static/index-5cd9444a.js";import"../static/global-a7bdc338.js";const C={stream:{$id:"root",filter:{entityTypes:["ce_root"]},fields:["id","uid","meta","name","slug","description","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.meta.entityType","dm_directoryChildren.name","dm_directoryChildren.slug","dm_baseEntityCount"],localization:{locales:["en"],primary:!1}}},N=({document:r})=>(r.slug.toString()+"",r.slug.toString()+".html"),P=({relativePrefixToRoot:r,path:h,document:a})=>{const{description:y,dm_directoryParents:n,dm_directoryChildren:o,_site:s}=a,{name:d,slug:m,c_globalData:u}=a;return i(l,{children:[e(c,{_site:s}),e(g,{name:d,parents:n,baseUrl:r,address:{}}),e("div",{className:"header-title ",children:e("div",{className:"directory-root py-5 lg:py-[60px]",children:e("div",{className:"container",children:e("div",{className:"flex flex-wrap -mx-4",children:o.map(t=>e(l,{children:e("div",{className:"w-full md:w-full lg:w-fi px-4 text-center",children:i("a",{href:m+"/"+t.slug+".html",className:"hover:text-red",children:[t.name," ",t.dm_baseEntityCount]},t.slug)})}))})})})}),e(p,{_site:s})]})};export{C as config,P as default,N as getPath};
