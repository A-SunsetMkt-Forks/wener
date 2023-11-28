"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39008],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),k=n,m=u["".concat(p,".").concat(k)]||u[k]||f[k]||i;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},86643:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>i(e,s(t)),k=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const m={id:"air",title:"ARI"},d="Asterisk REST Interface",g={unversionedId:"voip/asterisk/air",id:"voip/asterisk/air",title:"ARI",description:"Tips",source:"@site/../notes/voip/asterisk/asterisk-ari.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/air",permalink:"/notes/voip/asterisk/air",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/asterisk-ari.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1619945683,formattedLastUpdatedAt:"May 2, 2021",frontMatter:{id:"air",title:"ARI"},sidebar:"docs",previous:{title:"Asterisk AMI",permalink:"/notes/voip/asterisk/ami"},next:{title:"Asterisk Awesome",permalink:"/notes/voip/asterisk/awesome"}},h={},b=[{value:"Tips",id:"tips",level:2}],w={toc:b},y="wrapper";function v(e){var t=e,{components:r}=t,n=k(t,["components"]);return(0,a.kt)(y,f(u(u({},w),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"asterisk-rest-interface"}),"Asterisk REST Interface"),(0,a.kt)("h2",u({},{id:"tips"}),"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 ARI \u540e swagger \u5b9a\u4e49 json \u4f4d\u4e8e ",(0,a.kt)("a",u({parentName:"li"},{href:"http://127.0.0.1:8088/ari/api-docs/resources.json"}),"http://127.0.0.1:8088/ari/api-docs/resources.json"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"http://ari.asterisk.org/"}),"http://ari.asterisk.org/")," \u63d0\u4f9b Swagger UI \u53ef\u76f4\u63a5\u4f7f\u7528"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://wiki.asterisk.org/wiki/display/AST/Getting+Started+with+ARI"}),"Getting Started with ARI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/32952007"}),"How to use Asterisk ARI with socket.io & Node.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817239"}),"Asterisk Manager Interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=29395573"}),"Asterisk REST Interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/asterisk/asterisk/tree/master/res/ari"}),"asterisk/res/ari")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/asterisk/asterisk/tree/master/rest-api"}),"https://github.com/asterisk/asterisk/tree/master/rest-api")),(0,a.kt)("li",{parentName:"ul"},"Swagger",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"http://localhost:8088/ari/api-docs/resources.json"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://raw.githubusercontent.com/asterisk/asterisk/master/rest-api/resources.json"}),"https://raw.githubusercontent.com/asterisk/asterisk/master/rest-api/resources.json")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"http://ari.asterisk.org/"}),"http://ari.asterisk.org/"))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"")))}v.isMDXComponent=!0}}]);