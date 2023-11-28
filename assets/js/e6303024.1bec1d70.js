"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50385],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=l,b=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var n=r(49613),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>a(e,o(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={id:"leveldb",title:"LevelDB"},m="LevelDB",v={unversionedId:"db/kv/leveldb",id:"db/kv/leveldb",title:"LevelDB",description:"- c.h - C API",source:"@site/../notes/db/kv/leveldb.md",sourceDirName:"db/kv",slug:"/db/kv/leveldb",permalink:"/notes/db/kv/leveldb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/leveldb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642767775,formattedLastUpdatedAt:"Jan 21, 2022",frontMatter:{id:"leveldb",title:"LevelDB"},sidebar:"docs",previous:{title:"KV DB Awesome",permalink:"/notes/db/kv/awesome"},next:{title:"LMDB",permalink:"/notes/db/kv/lmdb"}},y={},k=[],O={toc:k},w="wrapper";function g(e){var t=e,{components:r}=t,l=d(t,["components"]);return(0,n.kt)(w,s(f(f({},O),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"leveldb"}),"LevelDB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/google/leveldb/blob/master/include/leveldb/c.h"}),"c.h")," - C API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u770b\u5230\u6838\u5fc3\u63a5\u53e3\u548c\u80fd\u529b\uff0c\u5176\u4ed6\u8bed\u8a00\u7684\u5c01\u88c5\u4e3b\u8981\u57fa\u4e8e C"),(0,n.kt)("li",{parentName:"ul"},"KV \u8bfb\u5199\u5220\u3001\u8fed\u4ee3\u5668\u3001\u6279\u91cf\u5199\u3001\u5feb\u7167\u3001\u538b\u7f29\u3001\u6bd4\u8f83\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u66b4\u9732 Slice \u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u539f\u5b50\u64cd\u4f5c\u901a\u8fc7\u6279\u91cf\u64cd\u4f5c\u5b9e\u73b0"))),(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5355\u7ebf\u7a0b\uff0cDB \u5bf9\u8c61\u7ebf\u7a0b\u5b89\u5168"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e LevelDB \u505a KKV \u7684\u4e00\u822c\u662f\u4f7f\u7528 Prefix \u5b9e\u73b0\uff0c\u67e5\u8be2\u65f6\u4f7f\u7528\u8fed\u4ee3\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u5feb\u7167\u4e0b\uff0c\u770b\u5230\u7684\u6570\u636e\u4e0d\u53d8"),(0,n.kt)("li",{parentName:"ul"},"KV \u5141\u8bb8\u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"\\0")),(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u672a\u9488\u5bf9 SSD \u505a\u4f18\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5931\u6548")))))}g.isMDXComponent=!0}}]);