"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85461],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,m=p["".concat(l,".").concat(y)]||p[y]||f[y]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},75189:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return d},default:function(){return j},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>i(e,a(t)),y=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"ZeroSSL"},d="ZeroSSL",b={unversionedId:"security/zerossl",id:"security/zerossl",title:"ZeroSSL",description:"- ACME",source:"@site/../notes/security/zerossl.md",sourceDirName:"security",slug:"/security/zerossl",permalink:"/notes/security/zerossl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/zerossl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625589155,formattedLastUpdatedAt:"Jul 6, 2021",frontMatter:{title:"ZeroSSL"},sidebar:"docs",previous:{title:"Yubikeys",permalink:"/notes/security/yubikeys"},next:{title:"\u670d\u52a1",permalink:"/notes/service/"}},O={},v=[],w={toc:v},g="wrapper";function j(e){var t=e,{components:r}=t,o=y(t,["components"]);return(0,n.kt)(g,f(p(p({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"zerossl"}),"ZeroSSL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ACME",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u7ed1\u5b9a\u8d26\u53f7 - EAB/External Account Binding"),(0,n.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u6570\u91cf\u6ca1\u6709\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://acme.zerossl.com/v2/DV90"}),"https://acme.zerossl.com/v2/DV90"))))))}j.isMDXComponent=!0}}]);