"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53991],{49613:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),f=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=f(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=f(t),m=a,d=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var f=2;f<o;f++)i[f]=t[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},945:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return k}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))f.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>o(e,i(r)),m=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&f.call(e,n)&&(t[n]=e[n]);return t};const d={title:"Terraform K8S"},v="Terraform K8S",y={unversionedId:"devops/infra/terraform/terraform-k8s",id:"devops/infra/terraform/terraform-k8s",title:"Terraform K8S",description:"Tips",source:"@site/../notes/devops/infra/terraform/terraform-k8s.md",sourceDirName:"devops/infra/terraform",slug:"/devops/infra/terraform/k8s",permalink:"/notes/devops/infra/terraform/k8s",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/terraform/terraform-k8s.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Terraform K8S"},sidebar:"docs",previous:{title:"Terraform",permalink:"/notes/devops/infra/terraform/faq"},next:{title:"Terraform Provider",permalink:"/notes/devops/infra/terraform/provider"}},b={},k=[{value:"Tips",id:"tips",level:2}],h={toc:k},O="wrapper";function g(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(O,u(c(c({},h),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"terraform-k8s"}),"Terraform K8S"),(0,n.kt)("h2",c({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/hashicorp/terraform-provider-helm/issues/509"}),"#509"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6a21\u5757\u540d\u5b57\u4e0d\u80fd\u4e0e helm \u53d1\u5e03\u7684\u540d\u5b57\u4e00\u6837"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/hashicorp/terraform-provider-kubernetes-alpha/issues/58"}),"hashicorp/terraform-provider-kubernetes-alpha#58"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8be5 provider \u652f\u6301 crd"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u8fd8\u6ca1\u53d1\u5e03\u5230 registry"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/jrhouston/tfk8s"}),"jrhouston/tfk8s"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"k8s yaml \u8f6c tf \u5b9a\u4e49")))))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# YAML \u8f6c HCL\necho 'yamldecode(file(\"test.yaml\"))' | terraform console\n")))}g.isMDXComponent=!0}}]);