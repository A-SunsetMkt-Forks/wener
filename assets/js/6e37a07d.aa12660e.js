"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15185],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,s=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(s,c(c({ref:t},m),{},{components:n})):r.createElement(s,c({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return y},default:function(){return g},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>a(e,c(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const s={title:"DynamoDB"},y="DynamoDB",b={unversionedId:"db/document/dynamodb",id:"db/document/dynamodb",title:"DynamoDB",description:"- Amazon DynamoDB",source:"@site/../notes/db/document/dynamodb.md",sourceDirName:"db/document",slug:"/db/document/dynamodb",permalink:"/notes/db/document/dynamodb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/document/dynamodb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666539775,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"DynamoDB"},sidebar:"docs",previous:{title:"CouchDB",permalink:"/notes/db/document/couchdb"},next:{title:"FerretDB",permalink:"/notes/db/document/ferretdb"}},O={},v=[],D={toc:v},w="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(w,d(p(p({},D),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"dynamodb"}),"DynamoDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon DynamoDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"January 2012"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/"}),"DynamoDB API Reference"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JSON over HTTP"))),(0,r.kt)("li",{parentName:"ul"},"KV + JSON Document"),(0,r.kt)("li",{parentName:"ul"},"Amazon DocumentDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e DynamoDB \u7684 MongoDB \u9002\u914d\u5c42")))))}g.isMDXComponent=!0}}]);