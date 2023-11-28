"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8749],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),u=i(n),k=a,N=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(N,o(o({ref:e},d),{},{components:n})):r.createElement(N,o({ref:e},d))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[u]="string"==typeof t?t:a,o[1]=m;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},32899:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return N},metadata:function(){return c},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&d(t,n,e[n]);if(m)for(var n of m(e))i.call(e,n)&&d(t,n,e[n]);return t},s=(t,e)=>l(t,o(e)),k=(t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&i.call(t,r)&&(n[r]=t[r]);return n};const N={title:"\u547d\u540d\u89c4\u8303"},g="Naming",c={unversionedId:"dev/naming",id:"dev/naming",title:"\u547d\u540d\u89c4\u8303",description:"- Java data transfer object naming convention?",source:"@site/../notes/dev/naming.md",sourceDirName:"dev",slug:"/dev/naming",permalink:"/notes/dev/naming",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/naming.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1621311972,formattedLastUpdatedAt:"May 18, 2021",frontMatter:{title:"\u547d\u540d\u89c4\u8303"},sidebar:"docs",previous:{title:"License",permalink:"/notes/dev/license"},next:{title:"OpenSource Awesome",permalink:"/notes/dev/opensource"}},f={},y=[],b={toc:y},v="wrapper";function O(t){var e=t,{components:n}=e,a=k(e,["components"]);return(0,r.kt)(v,s(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"naming"}),"Naming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/1724774"}),"Java data transfer object naming convention?")),(0,r.kt)("li",{parentName:"ul"},".NET ",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-classes-structs-and-interfaces"}),"Names of Classes, Structs, and Interfaces"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"DTO"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Command")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Configuration")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Credentials")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Details")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Element")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Event")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Header")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Input")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Instruction")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Item")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Message")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Metadata")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Operation")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Output")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Payload")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Projection")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Properties")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"QueryParameter")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"QueryResult")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Representation")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Request")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Resource")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Response")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Result")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Row")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Settings")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Specification")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Status")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Some",(0,r.kt)("strong",{parentName:"td"},"Summary")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))))}O.isMDXComponent=!0}}]);