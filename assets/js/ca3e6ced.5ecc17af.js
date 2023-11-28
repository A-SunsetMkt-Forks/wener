"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68582],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return O},default:function(){return w},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={tags:["Version"]},O="CentOS \u7248\u672c",b={unversionedId:"os/centos/centos-version",id:"os/centos/centos-version",title:"CentOS \u7248\u672c",description:"CentOS 8",source:"@site/../notes/os/centos/centos-version.md",sourceDirName:"os/centos",slug:"/os/centos/version",permalink:"/notes/os/centos/version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/centos/centos-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{tags:["Version"]},sidebar:"docs",previous:{title:"CentOS FAQ",permalink:"/notes/os/centos/faq"},next:{title:"ChromeOS",permalink:"/notes/os/chromeos"}},y={},v=[{value:"CentOS 8",id:"centos-8",level:2},{value:"CentOS 7",id:"centos-7",level:2}],k={toc:v},g="wrapper";function w(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(g,f(p(p({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"centos-\u7248\u672c"}),"CentOS \u7248\u672c"),(0,r.kt)("h2",p({},{id:"centos-8"}),"CentOS 8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5185\u6838 4.18+"),(0,r.kt)("li",{parentName:"ul"},"RHEL 8/Fedora 28"),(0,r.kt)("li",{parentName:"ul"},"nftable \u66ff\u4ee3 iptable"),(0,r.kt)("li",{parentName:"ul"},"firewalld \u9ed8\u8ba4\u4f7f\u7528 nftable"),(0,r.kt)("li",{parentName:"ul"},"qemu 2.2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"virt \u4ed3\u5e93\u4e0b 4.2"))),(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"update \u4ed3\u5e93\u6ca1\u6709\u4e86 - BaseOS/os + AppStream \u53d6\u4ee3"),(0,r.kt)("li",{parentName:"ul"},"BaseOS/kickstart \u505c\u7559\u5728\u53d1\u5e03\u70b9\u72b6\u6001"))),(0,r.kt)("li",{parentName:"ul"},"\u5305",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e Cockpit")))),(0,r.kt)("h2",p({},{id:"centos-7"}),"CentOS 7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5361\u540d\u5b57\u4f1a\u4f7f\u7528 eth \u683c\u5f0f\u4e86\u800c\u4e0d\u662f bios \u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664 net-tools \u5305 - \u6ca1\u6709\u4e86 ifconfig, netstat - \u4f7f\u7528 iproute2")))}w.isMDXComponent=!0}}]);