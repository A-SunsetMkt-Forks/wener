"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88798],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=o,g=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},45972:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return j},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),b=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const g={title:"Gitlab SAST"},m="Gitlab SAST",y={unversionedId:"service/forge/gitlab/gitlab-sast",id:"service/forge/gitlab/gitlab-sast",title:"Gitlab SAST",description:"- \u5b89\u5168\u626b\u63cf",source:"@site/../notes/service/forge/gitlab/gitlab-sast.md",sourceDirName:"service/forge/gitlab",slug:"/service/forge/gitlab/sast",permalink:"/notes/service/forge/gitlab/sast",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitlab/gitlab-sast.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629019137,formattedLastUpdatedAt:"Aug 15, 2021",frontMatter:{title:"Gitlab SAST"},sidebar:"docs",previous:{title:"Gitlab Runner",permalink:"/notes/service/forge/gitlab/runner"},next:{title:"goproxy",permalink:"/notes/service/forge/goproxy"}},d={},v=[],O={toc:v},w="wrapper";function j(e){var t=e,{components:r}=t,o=b(t,["components"]);return(0,n.kt)(w,f(p(p({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"gitlab-sast"}),"Gitlab SAST"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u626b\u63cf"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42 linux \u5bb9\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8fd0\u884c\u5728 test stage"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.gitlab-ci.yml"}),"Jobs/SAST.gitlab-ci.yml"))))}j.isMDXComponent=!0}}]);