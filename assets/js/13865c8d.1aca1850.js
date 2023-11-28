"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50799],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||k[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34178:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return h}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&s(e,r,t[r]);return e},k=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"tekton"},d="tekton",b={unversionedId:"devops/kubernetes/app/tekton",id:"devops/kubernetes/app/tekton",title:"tekton",description:"- tektoncd/pipeline",source:"@site/../notes/devops/kubernetes/app/tekton.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/tekton",permalink:"/notes/devops/kubernetes/app/tekton",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/tekton.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693804740,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{title:"tekton"},sidebar:"docs",previous:{title:"stolon",permalink:"/notes/devops/kubernetes/app/stolon"},next:{title:"zalando/postgres-operator",permalink:"/notes/devops/kubernetes/app/zalando-postgres-operator"}},v={},h=[{value:"tekton vs argo",id:"tekton-vs-argo",level:2}],g={toc:h},y="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(y,k(c(c({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"tekton"}),"tekton"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/tektoncd/pipeline"}),"tektoncd/pipeline"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,n.kt)("li",{parentName:"ul"},"cloud-native Pipeline"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c shell on k8s"))),(0,n.kt)("li",{parentName:"ul"},"CDR",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Task"),(0,n.kt)("li",{parentName:"ul"},"TaskRun"),(0,n.kt)("li",{parentName:"ul"},"Pipeline"),(0,n.kt)("li",{parentName:"ul"},"PipelineRun"),(0,n.kt)("li",{parentName:"ul"},"Run"))),(0,n.kt)("li",{parentName:"ul"},"Pipeline -> Task -> Step/Run"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/tektoncd/dashboard"}),"tektoncd/dashboard")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://hub.tekton.dev/"}),"https://hub.tekton.dev/"))))),(0,n.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",c({},{id:"tekton-vs-argo"}),"tekton vs argo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tekton",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"focuses on source based workflows - CI"),(0,n.kt)("li",{parentName:"ul"},"Tekton \u80fd\u5904\u7406 CI \u90e8\u5206"))),(0,n.kt)("li",{parentName:"ul"},"Argo Workflows",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u66f4\u901a\u7528 - ETL\u3001ML\u3001Data"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Argo Events \u5904\u7406 git webhook")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/tektoncd/pipeline/graphs/contributors"}),"https://github.com/tektoncd/pipeline/graphs/contributors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/argoproj/argo-workflows/graphs/contributors"}),"https://github.com/argoproj/argo-workflows/graphs/contributors"))))}O.isMDXComponent=!0}}]);