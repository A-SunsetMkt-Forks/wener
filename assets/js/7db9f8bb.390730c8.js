"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70580],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:o,l[1]=u;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return y},default:function(){return g},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={tags:["Protocol"]},y="NATS Protocol",b={unversionedId:"queue/nats/nats-protocol",id:"queue/nats/nats-protocol",title:"NATS Protocol",description:"- Client Protocol",source:"@site/../notes/queue/nats/nats-protocol.md",sourceDirName:"queue/nats",slug:"/queue/nats/protocol",permalink:"/notes/queue/nats/protocol",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-protocol.md",tags:[{label:"Protocol",permalink:"/notes/tags/protocol"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{tags:["Protocol"]},sidebar:"docs",previous:{title:"Nats on K8S",permalink:"/notes/queue/nats/k8s"},next:{title:"nats-server",permalink:"/notes/queue/nats/server"}},k={},v=[{value:"Request-Reply",id:"request-reply",level:2},{value:"RPC vs Request-Reply",id:"rpc-vs-request-reply",level:2}],O={toc:v},h="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(h,f(s(s({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"nats-protocol"}),"NATS Protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.nats.io/reference/reference-protocols/nats-protocol"}),"Client Protocol"))),(0,n.kt)("h2",s({},{id:"request-reply"}),"Request-Reply"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Service API ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/nats-io/nats-architecture-and-design/blob/main/adr/ADR-32.md"}),"ADR-32")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.nats.io/nats-concepts/core-nats/reqreply"}),"https://docs.nats.io/nats-concepts/core-nats/reqreply"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Reply subjects are called "inbox".'),(0,n.kt)("li",{parentName:"ul"},"drain before exiting - \u5e94\u7528\u9000\u51fa\u524d\u4f1a\u5904\u7406\u6240\u6709\u6d88\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u6d88\u8d39\u8005\u8fd4\u56de no_responders")))),(0,n.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",s({},{id:"rpc-vs-request-reply"}),"RPC vs Request-Reply"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request-Reply",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u662f\u4e00\u79cd\u6d88\u606f\u4f20\u9012 pattern"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u8bf7\u6c42\u5185\u5bb9\u65e0\u5b9a\u4e49"))),(0,n.kt)("li",{parentName:"ul"},"RPC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u662f\u4e00\u79cd Request-Reply"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u8bf7\u6c42\u5185\u5bb9\u6709\u5b9a\u4e49"),(0,n.kt)("li",{parentName:"ul"},"\u6709 \u670d\u52a1\u3001\u65b9\u6cd5\u3001\u53c2\u6570\u3001\u8fd4\u56de\u503c \u7b49\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u8003\u8651\u8de8\u8bed\u8a00 \u5e8f\u5217\u5316")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/nats-rpc/nrpc"}),"nats-rpc/nrpc"))))}g.isMDXComponent=!0}}]);