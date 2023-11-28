"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27593],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,g=s["".concat(p,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92354:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>i(e,o(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={title:"Gitea"},d="Gitea",k={unversionedId:"service/forge/gitea/README",id:"service/forge/gitea/README",title:"Gitea",description:"- go-gitea/gitea",source:"@site/../notes/service/forge/gitea/README.md",sourceDirName:"service/forge/gitea",slug:"/service/forge/gitea/",permalink:"/notes/service/forge/gitea/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitea/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Gitea"},sidebar:"docs",previous:{title:".gitignore",permalink:"/notes/service/forge/git/gitignore"},next:{title:"Gitea Action",permalink:"/notes/service/forge/gitea/action"}},b={},y=[{value:"API",id:"api",level:2}],v={toc:y},O="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,m(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"gitea"}),"Gitea"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/go-gitea/gitea"}),"go-gitea/gitea"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Golang")))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4e3a\u516c\u5f00\uff0c\u5219\u6240\u6709 ",(0,n.kt)("strong",{parentName:"li"},"\u955c\u50cf")," \u4e5f\u662f\u516c\u5f00\u7684"),(0,n.kt)("li",{parentName:"ul"},"mirror",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd username+password"),(0,n.kt)("li",{parentName:"ul"},"cron \u9ed8\u8ba4 8h\uff0c\u81f3\u5c11 10m"),(0,n.kt)("li",{parentName:"ul"},"webhook \u89e6\u53d1 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/go-gitea/gitea/issues/5342"}),"#5342"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"curl -X POST https://gitea.com/api/v1/repos/{owner}/{repo}/mirror-sync?token={pta}")),(0,n.kt)("li",{parentName:"ul"},"PTA \u53ea\u9700\u8981 ",(0,n.kt)("inlineCode",{parentName:"li"},"repo")," scope"))))),(0,n.kt)("li",{parentName:"ul"},"PTA \u6ca1\u6709 scope Gitea 1.19 - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/go-gitea/gitea/commit/de484e86bc495a67d2f122ed438178d587a92526"}),"https://github.com/go-gitea/gitea/commit/de484e86bc495a67d2f122ed438178d587a92526")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker run -d --name=gitea -p 2222:22 -p 8080:3000 -v $PWD/gitea/data:/data gitea/gitea:latest\n")),(0,n.kt)("h2",s({},{id:"api"}),"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Auth \u65b9\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Basic Auth"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"?token=")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"?access_token=")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorization: token TOKEN")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.gitea.com/next/development/api-usage"}),"https://docs.gitea.com/next/development/api-usage"))))}h.isMDXComponent=!0}}]);