"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89469],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83109:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return O}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"NVME"},v="NVME",y={unversionedId:"os/linux/hardware/nvme",id:"os/linux/hardware/nvme",title:"NVME",description:"- /dev/nvme0 - \u63a7\u5236 char \u8bbe\u5907",source:"@site/../notes/os/linux/hardware/nvme.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/nvme",permalink:"/notes/os/linux/hardware/nvme",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/hardware/nvme.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{title:"NVME"},sidebar:"docs",previous:{title:"Linux Hardware FAQ",permalink:"/notes/os/linux/hardware/faq"},next:{title:"S.M.A.R.T.",permalink:"/notes/os/linux/hardware/smart"}},b={},O=[],w={toc:O},h="wrapper";function g(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,f(s(s({},w),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"nvme"}),"NVME"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/dev/nvme0 - \u63a7\u5236 char \u8bbe\u5907"),(0,n.kt)("li",{parentName:"ul"},"/dev/nvme0n1 - \u5b9e\u9645\u5b58\u50a8\u7684\u547d\u540d\u7a7a\u95f4"),(0,n.kt)("li",{parentName:"ul"},"/dev/nvme0n1p1 - \u5206\u533a")))}g.isMDXComponent=!0}}]);