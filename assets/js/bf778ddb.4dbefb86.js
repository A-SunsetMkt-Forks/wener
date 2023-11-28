"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71809],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return b}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,i(t)),d=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const f={title:"veta lite"},g="veta lite",v={unversionedId:"service/bi/vega-lite",id:"service/bi/vega-lite",title:"veta lite",description:"- vega/vega-lite",source:"@site/../notes/service/bi/vega-lite.md",sourceDirName:"service/bi",slug:"/service/bi/vega-lite",permalink:"/notes/service/bi/vega-lite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/bi/vega-lite.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"veta lite"},sidebar:"docs",previous:{title:"CubeJS",permalink:"/notes/service/bi/cubejs"},next:{title:"Vega",permalink:"/notes/service/bi/vega"}},k={},b=[{value:"spec",id:"spec",level:2},{value:"data",id:"data",level:3},{value:"transform",id:"transform",level:2},{value:"\u79fb\u9664\u8fb9\u6846",id:"\u79fb\u9664\u8fb9\u6846",level:2}],y={toc:b},h="wrapper";function N(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(h,m(u(u({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"veta-lite"}),"veta lite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/vega/vega-lite"}),"vega/vega-lite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u7f16\u8bd1\u4e3a Vega"),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6bd4 Vega \u66f4\u7b80\u5355")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "data": { "url": "data/seattle-weather.csv" },\n  "mark": "bar",\n  "encoding": {\n    "x": { "timeUnit": "month", "field": "date", "type": "ordinal" },\n    "y": { "aggregate": "mean", "field": "precipitation" }\n  }\n}\n')),(0,a.kt)("h2",u({},{id:"spec"}),"spec"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://vega.github.io/vega-lite/docs/spec.html"}),"spec"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"single view"),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u5408: layer, facet, concat, repeat")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  // top-level\n  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",\n  "background": "white",\n  "padding": 5,\n  "autosize": "pad", // fit, none\n  "config": {},\n  "usermeta": {},\n\n  // common\n  "title": "",\n  "name": "",\n  "description": "",\n  "data": {},\n  "transform": [],\n  "params": [],\n\n  // view composition - layer, facet, concat, repeat\n  "resolve": {},\n  // layout composition - facet, concat, repeat\n  "align": "all",\n  "bounds": "full",\n  "center": false,\n  "spacing": 20,\n\n  // single view\n  "mark": "", // bar, circle, square, tick, line, area, point, rule, geoshape, text\n  "encoding": {},\n  "width": 0,\n  "height": 0,\n  "view": null,\n  "projection": ""\n}\n')),(0,a.kt)("h3",u({},{id:"data"}),"data"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'title="inline"',title:'"inline"'}),'{\n  "values": "a\\n1\\n2\\n3\\n4",\n  "format": {\n    "type": "csv"\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'title="url"',title:'"url"'}),'{ "url": "data/cars.json" }\n')),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'title="named"',title:'"named"'}),'{\n  // top-level\n  "datasets": {\n    "somedata": [1, 2, 3]\n  },\n  "data": {\n    "name": "somedata"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"format")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "format": "json", // json, csv, tsv, dsv, topojson\n  "parse": {\n    // number, date, boolean\n    "created_at": "date" // \u5c06 created_at \u89e3\u6790\u4e3a date\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\"date:'%m%d%Y'\" - \u652f\u6301 ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/d3/d3-time-format#locale_format"}),"d3 time-format")),(0,a.kt)("li",{parentName:"ul"},"\"utc:'%m%d%Y'\" - UTC \u65f6\u95f4")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"generate")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "sequence": {\n    "start": 0,\n    "stop": 12.7,\n    "step": 0.1,\n    "as": "x"\n  },\n  "graticule": {\n    "step": [15, 15]\n  }\n}\n')),(0,a.kt)("h2",u({},{id:"transform"}),"transform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"density",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u4e3a\u5bc6\u5ea6 - density, value"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u5360\u6bd4")))),(0,a.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",u({},{id:"\u79fb\u9664\u8fb9\u6846"}),"\u79fb\u9664\u8fb9\u6846"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "config": {\n    "style": {\n      "cell": {\n        "stroke": "transparent"\n      }\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "config": {\n    "view": {\n      "stroke": "transparent"\n    }\n  }\n}\n')))}N.isMDXComponent=!0}}]);