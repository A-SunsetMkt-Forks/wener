"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1737],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||k[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87927:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&u(e,t,r[t]);return e},k=(e,r)=>o(e,i(r)),d=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={title:"krakend"},m="krakend",v={unversionedId:"devops/service/krakend",id:"devops/service/krakend",title:"krakend",description:"- krakendio/krakend-ce",source:"@site/../notes/devops/service/krakend.md",sourceDirName:"devops/service",slug:"/devops/service/krakend",permalink:"/notes/devops/service/krakend",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/service/krakend.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"krakend"},sidebar:"docs",previous:{title:"Istio",permalink:"/notes/devops/service/istio"},next:{title:"Kuma",permalink:"/notes/devops/service/kuma"}},b={},y=[{value:"Lura vs KrakenD",id:"lura-vs-krakend",level:2}],w={toc:y},O="wrapper";function h(e){var r=e,{components:t}=r,a=d(r,["components"]);return(0,n.kt)(O,k(p(p({},w),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"krakend"}),"krakend"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/krakendio/krakend-ce"}),"krakendio/krakend-ce"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.krakend.io/docs/benchmarks/"}),"https://www.krakend.io/docs/benchmarks/"))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# https://github.com/krakendio/krakend-playground\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -v $PWD:/etc/krakend/ \\\n  devopsfaith/krakend run --config /etc/krakend/krakend.json\n\n# macOS\nbrew install krakend\n")),(0,n.kt)("h1",p({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",p({},{id:"lura-vs-krakend"}),"Lura vs KrakenD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lura is the KrakenD\u2019s engine - \u4e4b\u524d\u53eb KrakenD framework"),(0,n.kt)("li",{parentName:"ul"},"lura is toolkit/set of libraries to build API gateways"),(0,n.kt)("li",{parentName:"ul"},"KrakenD CE - \u5f00\u6e90 API Gateway"),(0,n.kt)("li",{parentName:"ul"},"KrakenD Enterprise")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.krakend.io/docs/overview/lura-vs-krakend/"}),"https://www.krakend.io/docs/overview/lura-vs-krakend/"))))}h.isMDXComponent=!0}}]);