"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97945],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68709:function(e,r,t){t.r(r),t.d(r,{assets:function(){return v},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return h}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>a(e,c(r)),m=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const y={tags:["FAQ"]},d="Clash FAQ",b={unversionedId:"service/network/proxy/clash/clash-faq",id:"service/network/proxy/clash/clash-faq",title:"Clash FAQ",description:"MMDB \u4e0b\u8f7d",source:"@site/../notes/service/network/proxy/clash/clash-faq.md",sourceDirName:"service/network/proxy/clash",slug:"/service/network/proxy/clash/faq",permalink:"/notes/service/network/proxy/clash/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/clash/clash-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680154821,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Clash \u914d\u7f6e",permalink:"/notes/service/network/proxy/clash/conf"},next:{title:"Clash.Meta",permalink:"/notes/service/network/proxy/clash/meta"}},v={},h=[{value:"MMDB \u4e0b\u8f7d",id:"mmdb-\u4e0b\u8f7d",level:2}],O={toc:h},w="wrapper";function g(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(w,f(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"clash-faq"}),"Clash FAQ"),(0,n.kt)("h2",u({},{id:"mmdb-\u4e0b\u8f7d"}),"MMDB \u4e0b\u8f7d"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"mkdir -p ~/.config/clash\ncurl -o ~/.config/clash/Country.mmdb https://cdn.jsdelivr.net/gh/Dreamacro/maxmind-geoip@release/Country.mmdb\n")))}g.isMDXComponent=!0}}]);