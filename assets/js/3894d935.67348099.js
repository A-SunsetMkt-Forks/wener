"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5624],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26714:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"Realm"},d="Realm",k={unversionedId:"db/mobile/realm",id:"db/mobile/realm",title:"Realm",description:"- Realm",source:"@site/../notes/db/mobile/realm.md",sourceDirName:"db/mobile",slug:"/db/mobile/realm",permalink:"/notes/db/mobile/realm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/mobile/realm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"Realm"},sidebar:"docs",previous:{title:"Mobile Database",permalink:"/notes/db/mobile/"},next:{title:"CockroachDB",permalink:"/notes/db/newsql/cockroachdb"}},y={},v=[{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:2}],N={toc:v},h="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,s(m(m({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"realm"}),"Realm"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://realm.io/"}),"Realm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u5f00\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/realm/realm-object-store"}),"realm-object-store")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/realm/realm-core"}),"realm-core")))),(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5f00\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"android/java"),(0,n.kt)("li",{parentName:"ul"},"ios/swift/objc"),(0,n.kt)("li",{parentName:"ul"},"react native/js",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/realm/realm-js/issues/261"}),"Cordova / PhoneGap / Ionic Support")))),(0,n.kt)("li",{parentName:"ul"},"uwp/xamarin/dotnet"))),(0,n.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u95ed\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u53d1\u7248",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7684\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Realm Functions: 3 Functions"),(0,n.kt)("li",{parentName:"ul"},"API Bridging"),(0,n.kt)("li",{parentName:"ul"},"Server-side Access"),(0,n.kt)("li",{parentName:"ul"},"Data Integration API"),(0,n.kt)("li",{parentName:"ul"},"Horizontal Scaling"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://realm.io/pricing/"}),"pricing"))))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 Docker \u8fd0\u884c\u670d\u52a1\ndocker run --rm -it -v /data/realmdb:/var/lib/realm/object-server -p 9080:9080 robertwtucker/realm-object-server\n")),(0,n.kt)("h2",m({},{id:"\u6570\u636e\u6a21\u578b"}),"\u6570\u636e\u6a21\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://realm.io/docs/data-model/"}),"The Realm Data Model")),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u4e3a\u4e00\u4e2a\u5d4c\u5165\u5f0f\u7684 Realm Mobile Database")))}O.isMDXComponent=!0}}]);