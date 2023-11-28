"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64025],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,h=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39438:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const h={title:"Fuchsia"},d="Fuchsia",b={unversionedId:"os/fuchsia",id:"os/fuchsia",title:"Fuchsia",description:"- FuchsiaOS",source:"@site/../notes/os/fuchsia.md",sourceDirName:"os",slug:"/os/fuchsia",permalink:"/notes/os/fuchsia",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/fuchsia.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642153539,formattedLastUpdatedAt:"Jan 14, 2022",frontMatter:{title:"Fuchsia"},sidebar:"docs",previous:{title:"FreeBSD",permalink:"/notes/os/freebsd/"},next:{title:"lakka tv",permalink:"/notes/os/lakka"}},y={},O=[],k={toc:O},v="wrapper";function g(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,f(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"fuchsia"}),"Fuchsia"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://fuchsia.dev/"}),"FuchsiaOS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD, MIT, Apache License 2.0"),(0,n.kt)("li",{parentName:"ul"},"Zircon ROTS \u5185\u6838"),(0,n.kt)("li",{parentName:"ul"},"fuchsia ",(0,n.kt)("a",p({parentName:"li"},{href:"https://fuchsia.googlesource.com/"}),"source")),(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u6587 ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/FuchsiaOS/FuchsiaOS-docs-zh_CN"}),"\u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/dahliaOS"}),"dahliaOS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FuchsiaOS on Linux/Zircon"),(0,n.kt)("li",{parentName:"ul"},"Emulator, Prebuild Image"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://fuchsia.dev/fuchsia-src/concepts"}),"concepts")))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.youtube.com/watch?v=DYaqzEbU0Vk"}),"Building an Operating System from Scratch with LLVM"))))))}g.isMDXComponent=!0}}]);