"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33714],{49613:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44143:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&m(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&m(t,n,e[n]);return t},c=(t,e)=>l(t,i(e)),d=(t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n};const k={title:"FreeDesktop Thumbnail"},b="FreeDesktop Thumbnail",f={unversionedId:"os/linux/desktop/xdg-thumbnail",id:"os/linux/desktop/xdg-thumbnail",title:"FreeDesktop Thumbnail",description:"- https://specifications.freedesktop.org/thumbnail-spec/thumbnail-spec-latest.html",source:"@site/../notes/os/linux/desktop/xdg-thumbnail.md",sourceDirName:"os/linux/desktop",slug:"/os/linux/desktop/xdg-thumbnail",permalink:"/notes/os/linux/desktop/xdg-thumbnail",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/desktop/xdg-thumbnail.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639938220,formattedLastUpdatedAt:"Dec 19, 2021",frontMatter:{title:"FreeDesktop Thumbnail"},sidebar:"docs",previous:{title:"XDG Dirs",permalink:"/notes/os/linux/desktop/xdg-dirs"},next:{title:"FreeDesktop.org Trash",permalink:"/notes/os/linux/desktop/xdg-trash"}},h={},g=[],N={toc:g},y="wrapper";function O(t){var e=t,{components:n}=e,a=d(e,["components"]);return(0,r.kt)(y,c(s(s({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"freedesktop-thumbnail"}),"FreeDesktop Thumbnail"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://specifications.freedesktop.org/thumbnail-spec/thumbnail-spec-latest.html"}),"https://specifications.freedesktop.org/thumbnail-spec/thumbnail-spec-latest.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$XDG_CACHE_HOME/thumbnails/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"normal/ - 128x128",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"$MD5.png"))),(0,r.kt)("li",{parentName:"ul"},"large/ - 256x256"),(0,r.kt)("li",{parentName:"ul"},"x-large/ - 512x512"),(0,r.kt)("li",{parentName:"ul"},"xx-large/ - 1024x1024"),(0,r.kt)("li",{parentName:"ul"},"fail/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.cache/thumbnails")),(0,r.kt)("li",{parentName:"ul"},".sh_thumbnails/ - \u4e34\u8fd1\u539f\u59cb\u6587\u4ef6\u5b58\u50a8\u7684\u65b9\u5f0f - \u4f8b\u5982 \u53ef\u79fb\u52a8\u8bbe\u5907"),(0,r.kt)("li",{parentName:"ul"},"dir mod 600, png mod 700"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u4f7f\u7528 MD5 hash - 128bit, 32char",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u4e3a\u5b8c\u6574 URI - \u4f8b\u5982 file:///home/wener/photos/me.png",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u652f\u6301\u5916\u90e8 - \u4f8b\u5982 samba, http, ftp, WebDAV"))))),(0,r.kt)("li",{parentName:"ul"},"PNG, 8bit, non-interlaced, full alpha"),(0,r.kt)("li",{parentName:"ul"},"PNG \u53ef\u5b58\u50a8\u4efb\u610f\u6587\u672c - ",(0,r.kt)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/PNG/#11tEXt"}),"https://www.w3.org/TR/PNG/#11tEXt"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KV \u673a\u5236\u5b58\u50a8\u989d\u5916\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u5305\u542b\u6587\u4ef6\u5927\u5c0f\u4fe1\u606f - \u907f\u514d\u518d\u8bbf\u95ee\u6587\u4ef6")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"key"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::URI"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::MTime"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::Size"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::Mimetype"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Software"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::Image::Width"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::Image::Height"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::Document::Pages"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Thumb::Movie::Length"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))))))}O.isMDXComponent=!0}}]);