import{r as t}from"./index-f1b7cb60.js";import{j as i,a as c,F as u}from"./header-64ea35cc.js";import{L as m}from"./index-35061f12.js";import{c as o,b as f}from"./global-790ced0b.js";const x=a=>{const[n,r]=t.exports.useState(null);var d,s=[];t.exports.useEffect(()=>{h(a.parents,a.baseUrl)},[r]);const h=(l,g)=>{if(l){for(let e=0;e<l.length;e++)l[e].meta.entityType.id=="ce_country"?(l[e].name=l[e].name,l[e].slug=l[e].slug,s.push({name:l[e].name,slug:l[e].slug})):l[e].meta.entityType.id=="ce_region"?(s.push({name:l[e].name,slug:`${l[e-1].slug}/${l[e].slug}`}),l[e].name=l[e].name,l[e].slug=`${l[e-1].slug}/${l[e].slug}`):l[e].meta.entityType.id=="ce_city"&&(l[e].name=l[e].name,l[e].slug=`${l[e-1].slug}/${l[e].slug}`,s.push({name:l[e].name,slug:l[e].slug,count:l[e].dm_baseEntityCount}));d=s.map(e=>i("li",{children:e.count==1?c(m,{href:"javascript:void(0)",className:"cursor-not-allowed","data-ya-track":"Breadcrumbs",eventName:"Breadcrumbs",rel:"noopener noreferrer",conversionDetails:o,children:[" ",e.name]}):c(m,{href:g+e.slug+".html","data-ya-track":"Breadcrumbs",eventName:"Breadcrumbs",rel:"noopener noreferrer",conversionDetails:o,children:[" ",e.name]})},e.slug)),r(d)}else r(null)};return i("div",{className:"breadcrumb",children:i("div",{className:"container mx-auto",children:c("ul",{className:"flex",children:[i("li",{children:i(m,{className:"home",href:"/",eventName:"home-cta",children:i("div",{dangerouslySetInnerHTML:{__html:f}})})}),n||i(u,{children:a.address&&a.address.city?c("li",{className:"inline-block",children:[" ",i(m,{href:a.baseUrl+a.address.city,eventName:"breadcrumb",children:a.address.city?a.address.city:""})]}):i(u,{})}),i("li",{children:a&&a.name})]})})})};export{x as B};