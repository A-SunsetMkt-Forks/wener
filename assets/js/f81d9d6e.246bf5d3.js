"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40818],{49613:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return v}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,v=u["".concat(p,".").concat(d)]||u[d]||f[d]||c;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34484:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var n=t(49613),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>c(e,i(r)),d=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const v={title:"Server"},m="Woodpecker Server",b={unversionedId:"service/forge/woodpecker/woodpecker-server",id:"service/forge/woodpecker/woodpecker-server",title:"Server",description:"- Server configuration",source:"@site/../notes/service/forge/woodpecker/woodpecker-server.md",sourceDirName:"service/forge/woodpecker",slug:"/service/forge/woodpecker/server",permalink:"/notes/service/forge/woodpecker/server",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/woodpecker/woodpecker-server.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679563201,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Server"},sidebar:"docs",previous:{title:"Pipeline",permalink:"/notes/service/forge/woodpecker/pipeline"},next:{title:"zentao",permalink:"/notes/service/forge/zentao"}},g={},y=[],w={toc:y},k="wrapper";function O(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(k,f(u(u({},w),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"woodpecker-server"}),"Woodpecker Server"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# priviliage\nWOODPECKER_ESCALATE=plugins/docker,plugins/gcr,plugins/ecr,woodpeckerci/plugin-docker-buildx\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://woodpecker-ci.org/docs/next/administration/server-config"}),"Server configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/46452fbd848bb57ad78c7069a5d2ffa63f3156ec/shared/constant/constant.go#L18-L23"}),"constant.go#L18-L23"))))}O.isMDXComponent=!0}}]);