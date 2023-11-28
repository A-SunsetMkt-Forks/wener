"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16533],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||y[f]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return P},frontMatter:function(){return m},metadata:function(){return E},toc:function(){return h}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&l(e,n,t[n]);return e},y=(e,t)=>s(e,o(t)),f=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"typesense"},d="typesense",E={unversionedId:"db/search/typesense",id:"db/search/typesense",title:"typesense",description:"- typesense/typesense",source:"@site/../notes/db/search/typesense.md",sourceDirName:"db/search",slug:"/db/search/typesense",permalink:"/notes/db/search/typesense",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/search/typesense.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696577752,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{title:"typesense"},sidebar:"docs",previous:{title:"sonic",permalink:"/notes/db/search/sonic"},next:{title:"zinc",permalink:"/notes/db/search/zincsearch"}},b={},h=[],g={toc:h},O="wrapper";function P(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,y(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"typesense"}),"typesense"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/typesense/typesense"}),"typesense/typesense"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPL-3.0, C++")))),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 CJK",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for writing systems without spaces between words ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/typesense/typesense/issues/228"}),"typesense/typesense#228")))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# TYPESENSE_API_KEY=$(uuidgen| tr -d \'[:space:]\' | tee -a /dev/fd/2 )\nTYPESENSE_API_KEY=CHANGEME\ndocker run --rm -it \\\n  -v $PWD/data:/data \\\n  -p 8108:8108 \\\n  --name typesense typesense/typesense:0.25.1 \\\n  --data-dir /data --api-key=$TYPESENSE_API_KEY --enable-cors\n\nTYPESENSE_HOST=\'http://localhost:8108\'\nTYPESENSE_API_KEY=CHANGEME\n\ncurl "${TYPESENSE_HOST}/health"\n\ncurl "${TYPESENSE_HOST}/collections" \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \\\n  -d \'{\n        "name": "tang-poetry",\n        "fields": [\n          {"name": "author", "type": "string" },\n          {"name": "paragraphs", "type": "string[]" },\n          {"name": "tags", "type": "string[]"},\n          {"name": "title", "type": "string" },\n          {"name": "id", "type": "string", "facet": true  }\n        ]\n      }\'\n\ncurl -LO https://github.com/chinese-poetry/chinese-poetry/raw/master/\u5168\u5510\u8bd7/\u5510\u8bd7\u4e09\u767e\u9996.json\njq -c \'.[]\' \u5510\u8bd7\u4e09\u767e\u9996.json > tang-poetry.jsonl\n\ncurl "${TYPESENSE_HOST}/collections/tang-poetry/documents/import" \\\n  -X POST \\\n  -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \\\n  --data-binary @tang-poetry.jsonl\n\ncurl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \\\n  "${TYPESENSE_HOST}/collections/tang-poetry/documents/search?q=\u5929\u6daf&query_by=paragraphs"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://typesense.org/docs/0.25.1/api/server-configuration.html"}),"https://typesense.org/docs/0.25.1/api/server-configuration.html"))))}P.isMDXComponent=!0}}]);