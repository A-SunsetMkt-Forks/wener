"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92371],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(r),f=o,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[b]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))l.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={title:"RabbitMQ"},y="RabbitMQ",d={unversionedId:"queue/rabbitmq",id:"queue/rabbitmq",title:"RabbitMQ",description:"- AMQP",source:"@site/../notes/queue/rabbitmq.md",sourceDirName:"queue",slug:"/queue/rabbitmq",permalink:"/notes/queue/rabbitmq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/rabbitmq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"RabbitMQ"},sidebar:"docs",previous:{title:"Queue FAQ",permalink:"/notes/queue/faq"},next:{title:"RocketMQ",permalink:"/notes/queue/rocketmq"}},O={},v=[],g={toc:v},w="wrapper";function h(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(w,s(b(b({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",b({},{id:"rabbitmq"}),"RabbitMQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AMQP"),(0,n.kt)("li",{parentName:"ul"},"Go client ",(0,n.kt)("a",b({parentName:"li"},{href:"https://github.com/streadway/amqp"}),"https://github.com/streadway/amqp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go tutor ",(0,n.kt)("a",b({parentName:"li"},{href:"https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/go"}),"https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/go"))))))}h.isMDXComponent=!0}}]);