import{g as F,r as I}from"./index-12580422.js";import{j as n,F as E,c as J,a as d}from"./header-a6438612.js";import{L as k}from"./index-89ba917d.js";import{c as A}from"./global-fa5e3625.js";import{S as j}from"./PageLayout-54b4cd0d.js";const ee=e=>{const{buttonText:t,latitude:s,address:r,longitude:g}=e;return n(E,{children:n(k,{"data-ya-track":"getdirections",eventName:"getdirections",className:"btn notHighligh",onClick:()=>{var m=null;if(r.city?m=r.city:r.region?m=r.region:m=r.country,navigator.geolocation){const u=a=>{var N="https://www.google.com/maps/dir/?api=1&destination="+s+","+g+"&origin="+m+",UK";window.open(N,"_blank")};navigator.geolocation.getCurrentPosition(function(a){console.log("current lat lang");let N=a.coords.latitude,y=a.coords.longitude,T="https://www.google.com/maps/dir/?api=1&destination="+s+","+g+"&origin="+N+","+y;window.open(T,"_blank")},u,{timeout:1e4})}},href:"javascript:void(0);",rel:"noopener noreferrer",conversionDetails:A,children:t})})},te="/assets/static/phone-4df45c02.svg",ne="/assets/static/map-4e8d117e.svg";var R={},O={};const $=F(J);var z=$.jsx;Object.defineProperty(O,"__esModule",{value:!0});O.helmetJsonLdProp=O.jsonLdScriptProps=O.JsonLd=void 0;function W(e){return z("script",{...Object.assign({},U(e.item,e))})}O.JsonLd=W;function U(e,t={}){return{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e,M,t.space)}}}O.jsonLdScriptProps=U;function Y(e,t={}){return{type:"application/ld+json",innerHTML:JSON.stringify(e,M,t.space)}}O.helmetJsonLdProp=Y;const _=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),G=new RegExp(`[${Object.keys(_).join("")}]`,"g"),q=e=>_[e],M=(()=>(e,t)=>{switch(typeof t){case"object":return t===null?void 0:t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(G,q);default:return}})();(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.jsonLdScriptProps=e.JsonLd=e.helmetJsonLdProp=void 0;var t=O;Object.defineProperty(e,"helmetJsonLdProp",{enumerable:!0,get:function(){return t.helmetJsonLdProp}}),Object.defineProperty(e,"JsonLd",{enumerable:!0,get:function(){return t.JsonLd}}),Object.defineProperty(e,"jsonLdScriptProps",{enumerable:!0,get:function(){return t.jsonLdScriptProps}})})(R);const re=e=>{const{address:t}=e;var s="https://www.google.com/maps/dir/?api=1&destination=";return s.concat(t.line1," ",t.city," ",t.region," ",t.postalCode),n(E,{children:d("div",{className:"address notHighlight ",children:[n("div",{children:t.line1}),d("div",{children:[d("span",{className:"notHighlight",children:[t.city,", ",t.region,", ",t.postalCode]})," "]})]})})},Z=e=>{var p,w;const[t,s]=I.exports.useState(0),[r,g]=I.exports.useState(0),[o,h]=I.exports.useState(0),[m,u]=I.exports.useState(0),[a,N]=I.exports.useState({props:e});var y="";const T=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],b=new Date(e.dateNewFormat);let v,f,D;function H(i,x,S){function L(P){return new Intl.DateTimeFormat("en",P).format(i)}return x.map(L).join(S)}console.log(T[b.getDay()]),console.log(a.props.hours);for(const i in a.props.hours)a.props.hours!="undefined"&&(typeof a.props.hours.holidayHours<"u"?(p=a.props.hours.holidayHours)==null||p.map(x=>{var S,L,P;v=[{day:"numeric"},{month:"long"},{year:"numeric"}],f=H(new Date(x.date),v," "),D=f,D==e.dateNewFormat?(S=x.openIntervals)==null||S.map(C=>{y=e.dateNewFormat+" "+C.start+":00"}):(L=a.props.hours)!=null&&L.hasOwnProperty(i)&&i===T[b.getDay()]&&((P=a.props.hours[i].openIntervals)==null||P.map(C=>{y=e.dateNewFormat+" "+C.start+":00"}))}):(w=a.props.hours)!=null&&w.hasOwnProperty(i)&&i===T[b.getDay()]&&a.props.hours[i].openIntervals.map(x=>{y=e.dateNewFormat+" "+x.start+":00"}));const c=()=>{var i=new Date,x=new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds());console.log(x);const S=Date.parse(y)-x;s(Math.floor(S/(1e3*60*60*24))),g(Math.floor(S/(1e3*60*60)%24)),h(Math.floor(S/1e3/60%60)),u(Math.floor(S/1e3%60))};return I.exports.useEffect(()=>{const i=setInterval(()=>c(),1e3);return()=>clearInterval(i)},[]),n("div",{className:"timer",children:d("div",{className:"timer flex flex-row text-sm text-white",role:"timer",children:[t>0?n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"day",children:t<10?"0"+t:t}),n("span",{className:"text",children:j.Days})]})}):"",n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"hour",children:r<10?"0"+r:r}),n("span",{className:"text",children:j.Hours})]})}),n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"minute",children:o<10?"0"+o:o}),n("span",{className:"text",children:j.Minutes})]})}),n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"second",children:m<10?"0"+m:m}),n("span",{className:"text",children:j.Seconds})]})})]})})},l={formatOpenNowString:(e,t)=>{const s=new Date,r=new Date(s.toLocaleString("en-US",{timeZone:t})),g=new Date(r.getTime()+60*60*24*1e3);let o=new Date(g.getTime()+864e5),h=0;const m=new Date(r.getTime()-60*60*24*1e3),u=r.getHours()+r.getMinutes()/60,a=l.getIntervalOnDate(r,e),N=l.getIntervalOnDate(g,e),y=l.getIntervalOnDate(o,e),T=l.getIntervalOnDate(m,e);let b=!1,v=null,f=null;if(T)for(let c=0;c<T.length;c++){const p=T[c],w=l.timeStringToNumber(p.start),i=l.timeStringToNumber(p.end);i<w&&u<i&&(v=p,b=!0)}if(a)for(let c=0;c<a.length;c++){const p=a[c],w=l.timeStringToNumber(p.start),i=l.timeStringToNumber(p.end);v==null&&(i<w?u>=w&&(v=p,b=!0):u>=w&&u<i&&(v=p,b=!0)),f==null?w>u&&(f=p):w>u&&w<l.timeStringToNumber(f.start)&&(f=p)}let D=!1;if(f==null){if(N)N.length>0&&(f=N[0],h=g.getDay(),D=!0);else if(y)y.length>0&&(f=y[0],h=o.getDay(),D=!0);else if(l.getIntervalOnDate(new Date(o.getTime()+864e5),e)){o=new Date(o.getTime()+864e5),h=o.getDay();const c=l.getIntervalOnDate(o,e);c.length>0&&(f=c[0],D=!0)}else if(l.getIntervalOnDate(new Date(o.getTime()+1728e5),e)){o=new Date(o.getTime()+1728e5),h=o.getDay();const c=l.getIntervalOnDate(o,e);c.length>0&&(f=c[0],D=!0)}else if(l.getIntervalOnDate(new Date(o.getTime()+864e5+1728e5),e)){o=new Date(o.getTime()+864e5+1728e5),h=o.getDay();const c=l.getIntervalOnDate(o,e);c.length>0&&(f=c[0],D=!0)}}const H=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return b?v.start==="00:00"&&v.end==="23:59"?n("div",{className:"opendot",children:"Open 24 Hours"}):n("div",{className:"opendot green-dot",children:d("div",{className:"hours-info ",children:[" ",n("span",{className:"font-second-main-font text-[#337aff] ",children:" Open now - "}),n("span",{className:"lowercase",children:l.formatTime(v.start).replace(":00","")})," ","to"," ",n("span",{className:"lowercase",children:l.formatTime(v.end).replace(":00","")})," "]})}):f?D?d("div",{className:"closeddot 4",children:[n("div",{className:"red-dot",children:d("div",{className:"hours-info ",children:[n("span",{className:"font-second-main-font text-[#000] ",children:" Closed - "}),"Opens at ",n("span",{className:"lowercase",children:l.formatTime(f.start).replace(":00","")})," ",H[h]]})})," "]}):d("div",{className:"closeddot 3",children:[d("div",{className:"red-dot",children:[d("div",{className:"hours-info ",children:[n("span",{className:"font-second-main-font text-[#000]",children:n("b",{children:" Closed - "})}),"Opens at ",n("span",{className:"lowercase",children:l.formatTime(f.start).replace(":00","")})]})," "]})," "]}):n("div",{className:"closeddot 2",children:d("div",{className:"red-dot",children:[n("div",{className:"hours-info text-[#000] ",children:"Closed"})," "]})})},getYextTimeWithUtcOffset:e=>{const t=new Date;let s=0;if(e&&(s=e*1e3),s!==0){const r=t.getTimezoneOffset()*60*1e3;return new Date(t.valueOf()+s+r)}return t},parseTimeZoneUtcOffset:e=>{if(!e)return 0;const t=e.split(":"),s=parseInt(t[0].replace(/\u200E/g,""),10),r=parseInt(t[1].replace(/\u200E/g,""),10);return s<0?-(Math.abs(s)+r/60)*60*60:(s+r/60)*60*60},timeStringToNumber:e=>{const t=e.split(":"),s=parseInt(t[0].replace(/\u200E/g,""),10),r=parseInt(t[1].replace(/\u200E/g,""),10);return s+r/60},getIntervalOnDate:(e,t)=>{const s=e.getDate(),r=e.getMonth()+1,g=e.getFullYear(),o=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],h=g+"-"+(r<10?"0"+r:r)+"-"+(s<10?"0"+s:s),m=o[e.getDay()];if(t&&t.holidayHours)for(let u=0;u<t.holidayHours.length;u++){const a=t.holidayHours[u];if(a.date==h){if(a.openIntervals)return a.openIntervals;if(a.isClosed===!0)return null}}return t&&t[m]&&t[m].openIntervals?t[m].openIntervals:null},formatTime:e=>{const t=new Date("January 1, 2020 "+e),s="en-US";return t.toLocaleTimeString(s.replace("_","-"),{hour:"numeric",minute:"numeric",hour12:!0})},getUtcOffsetFromTimeZone:(e,t=new Date)=>{const s=t.toLocaleString("en-gb",{timeZone:e,timeStyle:"long"}).split(" ").slice(-1)[0],r=t.toString(),g=Date.parse(`${r} UTC`)-Date.parse(`${r} ${s}`);return l.msToTime(g)},msToTime:e=>{let t=Math.floor(e/36e5%24);return t=(t<10,t),t+":00"}};function se(e){let t,s,r;function g(o,h,m){function u(a){return new Intl.DateTimeFormat("en",a).format(o)}return h.map(u).join(m)}return e.hours&&e.hours.reopenDate&&(t=[{day:"numeric"},{month:"long"},{year:"numeric"}],s=g(new Date(e.hours.reopenDate),t," "),r=s),n(E,{children:e.hours&&e.hours.reopenDate?d(E,{children:[n("h3",{className:"text-2xl md:text-[28px] notHighlight",children:j.tempClosed}),n("p",{className:"mt-4",children:n(Z,{dateNewFormat:r,hours:e.hours})})," "]}):e.hours?n("div",{className:"closeing-div notHighlight",children:l.formatOpenNowString(e.hours,e.timezone)}):n("div",{className:"closeddot  1",children:d("div",{className:"red-dot notHighlight",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8",children:n("circle",{"data-name":"Ellipse 5",cx:"4",cy:"4",r:"4",fill:"#ad1e1f"})}),n("div",{className:"hours-info font-second-main-font text-[#000] ",children:n("b",{children:" Closed"})})," "]})})})}export{re as A,ee as G,se as O,te as P,l as a,ne as m,$ as r,R as s};