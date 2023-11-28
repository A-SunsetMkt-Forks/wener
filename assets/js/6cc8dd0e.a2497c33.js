"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45250],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>i(e,a(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={tags:["Tip"]},y="Alpine Tip",b={unversionedId:"os/alpine/alpine-tip",id:"os/alpine/alpine-tip",title:"Alpine Tip",description:"\u4fee\u6539 /etc/apk/world \u7136\u540e apk fix \u53ef\u5feb\u901f\u8c03\u6574\u5b89\u88c5\u5305",source:"@site/../notes/os/alpine/alpine-tip.md",sourceDirName:"os/alpine",slug:"/os/alpine/tip",permalink:"/notes/os/alpine/tip",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-tip.md",tags:[{label:"Tip",permalink:"/notes/tags/tip"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639029574,formattedLastUpdatedAt:"Dec 9, 2021",frontMatter:{tags:["Tip"]},sidebar:"docs",previous:{title:"AlpineLinux Setup",permalink:"/notes/os/alpine/setup"},next:{title:"AlpineLinux \u7248\u672c\u5386\u53f2",permalink:"/notes/os/alpine/version"}},O={},v=[{value:"\u4fee\u6539 /etc/apk/world \u7136\u540e apk fix \u53ef\u5feb\u901f\u8c03\u6574\u5b89\u88c5\u5305",id:"\u4fee\u6539-etcapkworld-\u7136\u540e-apk-fix-\u53ef\u5feb\u901f\u8c03\u6574\u5b89\u88c5\u5305",level:2}],w={toc:v},g="wrapper";function k(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,f(s(s({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"alpine-tip"}),"Alpine Tip"),(0,r.kt)("h2",s({},{id:"\u4fee\u6539-etcapkworld-\u7136\u540e-apk-fix-\u53ef\u5feb\u901f\u8c03\u6574\u5b89\u88c5\u5305"}),"\u4fee\u6539 /etc/apk/world \u7136\u540e apk fix \u53ef\u5feb\u901f\u8c03\u6574\u5b89\u88c5\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u6dfb\u52a0\necho nginx >> /etc/apk/world\napk fix\n\n# \u79fb\u9664\nsed -i '/nginx/d' /etc/apk/world\napk fix\n")))}k.isMDXComponent=!0}}]);