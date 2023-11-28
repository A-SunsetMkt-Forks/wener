"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49536],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,d=s["".concat(u,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48981:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"FST"},y="FST",g={unversionedId:"algorithm/fst",id:"algorithm/fst",title:"FST",description:"- Finite-State Transducer - \u6709\u9650\u72b6\u6001\u4f20\u611f\u673a",source:"@site/../notes/algorithm/fst.md",sourceDirName:"algorithm",slug:"/algorithm/fst",permalink:"/notes/algorithm/fst",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/fst.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629271390,formattedLastUpdatedAt:"Aug 18, 2021",frontMatter:{title:"FST"},sidebar:"docs",previous:{title:"FSA",permalink:"/notes/algorithm/fsa"},next:{title:"Hashing",permalink:"/notes/algorithm/hashing"}},b={},O=[],h={toc:O},v="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,f(s(s({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"fst"}),"FST"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finite-State Transducer - \u6709\u9650\u72b6\u6001\u4f20\u611f\u673a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"recognizer"),(0,n.kt)("li",{parentName:"ul"},"generator"),(0,n.kt)("li",{parentName:"ul"},"set relater"),(0,n.kt)("li",{parentName:"ul"},"translator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"morphological parsing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"string of letter -> string of morphemes"))))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/valeriansaliou/sonic"}),"valeriansaliou/sonic"),"\n\u4f7f\u7528 FST \u6784\u5efa"),(0,n.kt)("li",{parentName:"ul"},"Automata theory"))),(0,n.kt)("li",{parentName:"ul"},"vs FSA",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FSA \u65e0\u8f93\u51fa"),(0,n.kt)("li",{parentName:"ul"},"FST \u6709\u8f93\u51fa")))))}k.isMDXComponent=!0}}]);