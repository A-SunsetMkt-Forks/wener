"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76102],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||s[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55578:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&d(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"Drag & Drop"},g="Drag & Drop",b={unversionedId:"web/spec/dnd",id:"web/spec/dnd",title:"Drag & Drop",description:"- HTML Drag and Drop API",source:"@site/../notes/web/spec/dnd.md",sourceDirName:"web/spec",slug:"/web/spec/dnd",permalink:"/notes/web/spec/dnd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/dnd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653630561,formattedLastUpdatedAt:"May 27, 2022",frontMatter:{title:"Drag & Drop"},sidebar:"docs",previous:{title:"URLPattern",permalink:"/notes/web/spec/URLPattern"},next:{title:"ESM",permalink:"/notes/web/spec/esm"}},k={},y=[],N={toc:y},v="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,s(c(c({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"drag--drop"}),"Drag & Drop"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"}),"HTML Drag and Drop API"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"event"),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"drag"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u62d6\u52a8\u5143\u7d20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dragend"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u62d6\u52a8\u7ed3\u675f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dragenter"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u62d6\u52a8\u5143\u7d20\u8fdb\u5165 \u53ef drop \u533a\u57df")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dragleave"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u79bb\u5f00 drop \u76ee\u6807")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dragover"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dragstart"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5f00\u59cb\u62d6\u52a8\u4e00\u4e2a\u5143\u7d20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"drop"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"drop \u5143\u7d20")))),(0,n.kt)("admonition",c({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e86 ondragover, ondrop \u8868\u793a\u4e3a\u53ef drop \u533a\u57df"),(0,n.kt)("li",{parentName:"ul"},"drop \u4e4b\u524d\uff0c dragstart\u3001dragover \u65f6\u662f\u65e0\u6cd5\u8bbf\u95ee\u6587\u4ef6"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.dataTransfer.types",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Files - \u8868\u793a\u4e3a\u6587\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"e.dataTransfer.dropEffect",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"copy"),(0,n.kt)("li",{parentName:"ul"},"move"),(0,n.kt)("li",{parentName:"ul"},"link"),(0,n.kt)("li",{parentName:"ul"},"none - \u7981\u6b62 drop")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),"function onDragStart(ev) {\n  // \u9650\u5b9a\n  ev.dataTransfer.setData('application/my-app', ev.target.id);\n  ev.dataTransfer.effectAllowed = 'move';\n\n  // \u68c0\u6d4b\u6587\u4ef6\n  const isFiles = ev.dataTransfer.types.indexOf('Files') >= 0;\n}\n")))}O.isMDXComponent=!0}}]);