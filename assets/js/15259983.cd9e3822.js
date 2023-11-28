"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87702],{49613:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||i;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=b;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},68739:function(e,r,t){t.r(r),t.d(r,{assets:function(){return y},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return w},toc:function(){return v}});var n=t(49613),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(a)for(var t of a(r))u.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>i(e,s(r)),b=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"Kerberos Windows"},m="Kerberos Windows",w={unversionedId:"service/auth/kerberos/kerberos-windows",id:"service/auth/kerberos/kerberos-windows",title:"Kerberos Windows",description:"- Kerberos Authentication Overview",source:"@site/../notes/service/auth/kerberos/kerberos-windows.md",sourceDirName:"service/auth/kerberos",slug:"/service/auth/kerberos/windows",permalink:"/notes/service/auth/kerberos/windows",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/kerberos/kerberos-windows.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639029574,formattedLastUpdatedAt:"Dec 9, 2021",frontMatter:{title:"Kerberos Windows"},sidebar:"docs",previous:{title:"Kerberos Glossary",permalink:"/notes/service/auth/kerberos/glossary"},next:{title:"Keycloak",permalink:"/notes/service/auth/keycloak/"}},y={},v=[],k={toc:v},O="wrapper";function h(e){var r=e,{components:t}=r,o=b(r,["components"]);return(0,n.kt)(O,f(p(p({},k),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"kerberos-windows"}),"Kerberos Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview"}),"Kerberos Authentication Overview"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728 Kerberos \u4e4b\u524d\u4f7f\u7528 NTLM - \u9700\u8981\u8fde\u5230\u4e00\u4e2a\u57df\u63a7"),(0,n.kt)("li",{parentName:"ul"},"Kerberos \u4e0d\u9700\u8981 DC"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/windows/win32/secauthn/microsoft-kerberos"}),"Microsoft Kerberos")),(0,n.kt)("li",{parentName:"ul"},"Windows 2000 \u540e Kerberos \u4e3a\u9ed8\u8ba4\u8ba4\u8bc1\u65b9\u5f0f")))}h.isMDXComponent=!0}}]);