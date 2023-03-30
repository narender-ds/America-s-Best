import{r as O}from"./index-5cd9444a.js";import{j as n,F as H,a as d}from"./header-ab6cf8ae.js";import{L as k}from"./index-e74f8984.js";import{c as j}from"./global-a7bdc338.js";import{S as b}from"./staticData-e18209fe.js";const P=e=>{const{buttonText:t,latitude:o,address:r,longitude:f}=e;return n(H,{children:n(k,{"data-ya-track":"getdirections",eventName:"getdirections",className:"btn notHighligh",onClick:()=>{var m=null;if(r.city?m=r.city:r.region?m=r.region:m=r.country,navigator.geolocation){const u=s=>{var N="https://www.google.com/maps/dir/?api=1&destination="+o+","+f+"&origin="+m+",UK";window.open(N,"_blank")};navigator.geolocation.getCurrentPosition(function(s){console.log("current lat lang");let N=s.coords.latitude,y=s.coords.longitude,T="https://www.google.com/maps/dir/?api=1&destination="+o+","+f+"&origin="+N+","+y;window.open(T,"_blank")},u,{timeout:1e4})}},href:"javascript:void(0);",rel:"noopener noreferrer",conversionDetails:j,children:t})})},$=e=>{const{address:t}=e;var o="https://www.google.com/maps/dir/?api=1&destination=";return o.concat(t.line1," ",t.city," ",t.region," ",t.postalCode),n(H,{children:d("div",{className:"address notHighlight ",children:[n("div",{children:t.line1}),d("div",{children:[d("span",{className:"notHighlight",children:[t.city,", ",t.region,", ",t.postalCode]})," "]})]})})},L=e=>{var p,w;const[t,o]=O.exports.useState(0),[r,f]=O.exports.useState(0),[a,h]=O.exports.useState(0),[m,u]=O.exports.useState(0),[s,N]=O.exports.useState({props:e});var y="";const T=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],S=new Date(e.dateNewFormat);let v,g,D;function M(i,x,I){function C(U){return new Intl.DateTimeFormat("en",U).format(i)}return x.map(C).join(I)}console.log(T[S.getDay()]),console.log(s.props.hours);for(const i in s.props.hours)s.props.hours!="undefined"&&(typeof s.props.hours.holidayHours<"u"?(p=s.props.hours.holidayHours)==null||p.map(x=>{var I,C,U;v=[{day:"numeric"},{month:"long"},{year:"numeric"}],g=M(new Date(x.date),v," "),D=g,D==e.dateNewFormat?(I=x.openIntervals)==null||I.map(F=>{y=e.dateNewFormat+" "+F.start+":00"}):(C=s.props.hours)!=null&&C.hasOwnProperty(i)&&i===T[S.getDay()]&&((U=s.props.hours[i].openIntervals)==null||U.map(F=>{y=e.dateNewFormat+" "+F.start+":00"}))}):(w=s.props.hours)!=null&&w.hasOwnProperty(i)&&i===T[S.getDay()]&&s.props.hours[i].openIntervals.map(x=>{y=e.dateNewFormat+" "+x.start+":00"}));const c=()=>{var i=new Date,x=new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds());console.log(x);const I=Date.parse(y)-x;o(Math.floor(I/(1e3*60*60*24))),f(Math.floor(I/(1e3*60*60)%24)),h(Math.floor(I/1e3/60%60)),u(Math.floor(I/1e3%60))};return O.exports.useEffect(()=>{const i=setInterval(()=>c(),1e3);return()=>clearInterval(i)},[]),n("div",{className:"timer",children:d("div",{className:"timer flex flex-row text-sm text-white",role:"timer",children:[t>0?n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"day",children:t<10?"0"+t:t}),n("span",{className:"text",children:b.Days})]})}):"",n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"hour",children:r<10?"0"+r:r}),n("span",{className:"text",children:b.Hours})]})}),n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"minute",children:a<10?"0"+a:a}),n("span",{className:"text",children:b.Minutes})]})}),n("div",{className:"col-4 px-3",children:d("div",{className:"box font-normal",children:[n("p",{id:"second",children:m<10?"0"+m:m}),n("span",{className:"text",children:b.Seconds})]})})]})})},l={formatOpenNowString:(e,t)=>{const o=new Date,r=new Date(o.toLocaleString("en-US",{timeZone:t})),f=new Date(r.getTime()+60*60*24*1e3);let a=new Date(f.getTime()+864e5),h=0;const m=new Date(r.getTime()-60*60*24*1e3),u=r.getHours()+r.getMinutes()/60,s=l.getIntervalOnDate(r,e),N=l.getIntervalOnDate(f,e),y=l.getIntervalOnDate(a,e),T=l.getIntervalOnDate(m,e);let S=!1,v=null,g=null;if(T)for(let c=0;c<T.length;c++){const p=T[c],w=l.timeStringToNumber(p.start),i=l.timeStringToNumber(p.end);i<w&&u<i&&(v=p,S=!0)}if(s)for(let c=0;c<s.length;c++){const p=s[c],w=l.timeStringToNumber(p.start),i=l.timeStringToNumber(p.end);v==null&&(i<w?u>=w&&(v=p,S=!0):u>=w&&u<i&&(v=p,S=!0)),g==null?w>u&&(g=p):w>u&&w<l.timeStringToNumber(g.start)&&(g=p)}let D=!1;if(g==null){if(N)N.length>0&&(g=N[0],h=f.getDay(),D=!0);else if(y)y.length>0&&(g=y[0],h=a.getDay(),D=!0);else if(l.getIntervalOnDate(new Date(a.getTime()+864e5),e)){a=new Date(a.getTime()+864e5),h=a.getDay();const c=l.getIntervalOnDate(a,e);c.length>0&&(g=c[0],D=!0)}else if(l.getIntervalOnDate(new Date(a.getTime()+1728e5),e)){a=new Date(a.getTime()+1728e5),h=a.getDay();const c=l.getIntervalOnDate(a,e);c.length>0&&(g=c[0],D=!0)}else if(l.getIntervalOnDate(new Date(a.getTime()+864e5+1728e5),e)){a=new Date(a.getTime()+864e5+1728e5),h=a.getDay();const c=l.getIntervalOnDate(a,e);c.length>0&&(g=c[0],D=!0)}}const M=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return S?v.start==="00:00"&&v.end==="23:59"?n("div",{className:"opendot",children:"Open 24 Hours"}):n("div",{className:"opendot green-dot",children:d("div",{className:"hours-info ",children:[" ",n("span",{className:"font-second-main-font text-[#337aff] ",children:" Open now - "}),n("span",{className:"lowercase",children:l.formatTime(v.start).replace(":00","")})," ","to"," ",n("span",{className:"lowercase",children:l.formatTime(v.end).replace(":00","")})," "]})}):g?D?d("div",{className:"closeddot 4",children:[n("div",{className:"red-dot",children:d("div",{className:"hours-info ",children:[n("span",{className:"font-second-main-font text-[#000] ",children:" Closed - "}),"Opens at ",n("span",{className:"lowercase",children:l.formatTime(g.start).replace(":00","")})," ",M[h]]})})," "]}):d("div",{className:"closeddot 3",children:[d("div",{className:"red-dot",children:[d("div",{className:"hours-info ",children:[n("span",{className:"font-second-main-font text-[#000]",children:n("b",{children:" Closed - "})}),"Opens at ",n("span",{className:"lowercase",children:l.formatTime(g.start).replace(":00","")})]})," "]})," "]}):n("div",{className:"closeddot 2",children:d("div",{className:"red-dot",children:[n("div",{className:"hours-info text-[#000] ",children:"Closed"})," "]})})},getYextTimeWithUtcOffset:e=>{const t=new Date;let o=0;if(e&&(o=e*1e3),o!==0){const r=t.getTimezoneOffset()*60*1e3;return new Date(t.valueOf()+o+r)}return t},parseTimeZoneUtcOffset:e=>{if(!e)return 0;const t=e.split(":"),o=parseInt(t[0].replace(/\u200E/g,""),10),r=parseInt(t[1].replace(/\u200E/g,""),10);return o<0?-(Math.abs(o)+r/60)*60*60:(o+r/60)*60*60},timeStringToNumber:e=>{const t=e.split(":"),o=parseInt(t[0].replace(/\u200E/g,""),10),r=parseInt(t[1].replace(/\u200E/g,""),10);return o+r/60},getIntervalOnDate:(e,t)=>{const o=e.getDate(),r=e.getMonth()+1,f=e.getFullYear(),a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],h=f+"-"+(r<10?"0"+r:r)+"-"+(o<10?"0"+o:o),m=a[e.getDay()];if(t&&t.holidayHours)for(let u=0;u<t.holidayHours.length;u++){const s=t.holidayHours[u];if(s.date==h){if(s.openIntervals)return s.openIntervals;if(s.isClosed===!0)return null}}return t&&t[m]&&t[m].openIntervals?t[m].openIntervals:null},formatTime:e=>{const t=new Date("January 1, 2020 "+e),o="en-US";return t.toLocaleTimeString(o.replace("_","-"),{hour:"numeric",minute:"numeric",hour12:!0})},getUtcOffsetFromTimeZone:(e,t=new Date)=>{const o=t.toLocaleString("en-gb",{timeZone:e,timeStyle:"long"}).split(" ").slice(-1)[0],r=t.toString(),f=Date.parse(`${r} UTC`)-Date.parse(`${r} ${o}`);return l.msToTime(f)},msToTime:e=>{let t=Math.floor(e/36e5%24);return t=(t<10,t),t+":00"}};function A(e){let t,o,r;function f(a,h,m){function u(s){return new Intl.DateTimeFormat("en",s).format(a)}return h.map(u).join(m)}return e.hours&&e.hours.reopenDate&&(t=[{day:"numeric"},{month:"long"},{year:"numeric"}],o=f(new Date(e.hours.reopenDate),t," "),r=o),n(H,{children:e.hours&&e.hours.reopenDate?d(H,{children:[n("h3",{className:"text-2xl md:text-[28px] notHighlight",children:b.tempClosed}),n("p",{className:"mt-4",children:n(L,{dateNewFormat:r,hours:e.hours})})," "]}):e.hours?n("div",{className:"closeing-div notHighlight",children:l.formatOpenNowString(e.hours,e.timezone)}):n("div",{className:"closeddot  1",children:d("div",{className:"red-dot notHighlight",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8",children:n("circle",{"data-name":"Ellipse 5",cx:"4",cy:"4",r:"4",fill:"#ad1e1f"})}),n("div",{className:"hours-info font-second-main-font text-[#000] ",children:n("b",{children:" Closed"})})," "]})})})}export{$ as A,P as G,A as O,l as a};