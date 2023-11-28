"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25243],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return O}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const b={title:"Ansible for Cloud"},m="Kubernetes",y={unversionedId:"devops/infra/ansible/ansible-cloud",id:"devops/infra/ansible/ansible-cloud",title:"Ansible for Cloud",description:"- Kubernetes Guide",source:"@site/../notes/devops/infra/ansible/ansible-cloud.md",sourceDirName:"devops/infra/ansible",slug:"/devops/infra/ansible/cloud",permalink:"/notes/devops/infra/ansible/cloud",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/ansible/ansible-cloud.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Ansible for Cloud"},sidebar:"docs",previous:{title:"Ansible AWX",permalink:"/notes/devops/infra/ansible/awx"},next:{title:"Ansible Collection",permalink:"/notes/devops/infra/ansible/collection"}},v={},O=[],g={toc:O},k="wrapper";function w(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(p(p({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"kubernetes"}),"Kubernetes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/scenario_guides/guide_kubernetes.html"}),"Kubernetes Guide"))),(0,r.kt)("h1",p({},{id:"\u963f\u91cc\u4e91"}),"\u963f\u91cc\u4e91"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/scenario_guides/guide_alicloud.html"}),"Alibaba Cloud Compute Services Guide"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"export ALICLOUD_ACCESS_KEY='Alicloud123'\nexport ALICLOUD_SECRET_KEY='AlicloudSecret123'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 vars_file")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"---\nalicloud_access_key: '--REMOVED--'\nalicloud_secret_key: '--REMOVED--'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"# \u9700\u8981\u6bcf\u6b21\u5f15\u7528\n- ali_instance:\n    alicloud_access_key: '{{alicloud_access_key}}'\n    alicloud_secret_key: '{{alicloud_secret_key}}'\n    image_id: '...'\n")))}w.isMDXComponent=!0}}]);