"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78875],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var a=t(59496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),i=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(d.Provider,{value:r},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=i(t),m=n,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return t?a.createElement(f,u(u({ref:r},p),{},{components:t})):a.createElement(f,u({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,u=new Array(l);u[0]=m;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[s]="string"==typeof e?e:n,u[1]=o;for(var i=2;i<l;i++)u[i]=t[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98713:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return N}});var a=t(49613),n=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&p(e,t,r[t]);if(o)for(var t of o(r))i.call(r,t)&&p(e,t,r[t]);return e},c=(e,r)=>l(e,u(r)),m=(e,r)=>{var t={};for(var a in e)d.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&i.call(e,a)&&(t[a]=e[a]);return t};const f={title:"rudder"},b="rudder",k={unversionedId:"service/data/rudder",id:"service/data/rudder",title:"rudder",description:"- rudder-server \u4e3a Data Plane\uff0c\u901a\u8fc7 \u914d\u7f6e\u670d\u52a1 \u6216 JSON \u542f\u52a8",source:"@site/../notes/service/data/rudder.md",sourceDirName:"service/data",slug:"/service/data/rudder",permalink:"/notes/service/data/rudder",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/data/rudder.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667482099,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"rudder"},sidebar:"docs",previous:{title:"Apache NiFi",permalink:"/notes/service/data/nifi"},next:{title:"\u6807\u51c6\u6570\u636e",permalink:"/notes/service/data/std/"}},g={},N=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"rudderlabs/config-generator",id:"rudderlabsconfig-generator",level:2}],v={toc:N},h="wrapper";function y(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(h,c(s(s({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"rudder"}),"rudder"),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"rudder-server \u4e3a Data Plane\uff0c\u901a\u8fc7 \u914d\u7f6e\u670d\u52a1 \u6216 JSON \u542f\u52a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AGPLv3"))),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u751f\u6210\u5de5\u5177 ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/config-generator"}),"rudderlabs/config-generator"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u7ef4\u62a4"))),(0,a.kt)("li",{parentName:"ul"},"SDK \u90fd\u662f MIT \u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u4e0a\u7248\u672c \u4e0d\u80fd\u5bfc\u51fa JSON"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/rudder-server"}),"rudderlabs/rudder-server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AGPL-3.0, Go, TS, React"),(0,a.kt)("li",{parentName:"ul"},"Segment-alternative"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef PostgreSQL"),(0,a.kt)("li",{parentName:"ul"},"Customer Data Platform, CDP"))),(0,a.kt)("li",{parentName:"ul"},"8082")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it \\\n  --name rudder rudderlabs/rudder-server\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/rudder-server/blob/master/rudder-docker.yml"}),"https://github.com/rudderlabs/rudder-server/blob/master/rudder-docker.yml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/rudder-transformer"}),"rudderlabs/rudder-transformer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06 RudderStack \u4e8b\u4ef6 \u8f6c\u6362\u4e3a \u76ee\u6807\u683c\u5f0f")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Control Plane")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"env"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CONFIG_BACKEND_URL"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://api.rudderlabs.com"}),"https://api.rudderlabs.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("del",{parentName:"td"},"CONFIG_BACKEND_TOKEN")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"WORKSPACE_TOKEN"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",s({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml"}),"https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/rudder-server/blob/master/config/sample.env"}),"https://github.com/rudderlabs/rudder-server/blob/master/config/sample.env"))),(0,a.kt)("h2",s({},{id:"rudderlabsconfig-generator"}),"rudderlabs/config-generator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Control Plane Lite"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/rudderlabs/config-generator"}),"https://github.com/rudderlabs/config-generator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://raw.githubusercontent.com/rudderlabs/rudder-server/master/rudder-docker.yml"}),"https://raw.githubusercontent.com/rudderlabs/rudder-server/master/rudder-docker.yml"))))}y.isMDXComponent=!0}}]);