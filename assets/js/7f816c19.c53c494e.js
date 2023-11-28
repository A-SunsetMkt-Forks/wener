"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6917],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return E},default:function(){return k},frontMatter:function(){return g},metadata:function(){return d},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={tags:["Configuration"]},E="\u914d\u7f6e",d={unversionedId:"service/forge/gitea/gitea-conf",id:"service/forge/gitea/gitea-conf",title:"\u914d\u7f6e",description:"- docker \u73af\u5883\u53d8\u91cf\u914d\u7f6e - GITEA{name}",source:"@site/../notes/service/forge/gitea/gitea-conf.md",sourceDirName:"service/forge/gitea",slug:"/service/forge/gitea/conf",permalink:"/notes/service/forge/gitea/conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitea/gitea-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"Gitea Action",permalink:"/notes/service/forge/gitea/action"},next:{title:"Gitea FAQ",permalink:"/notes/service/forge/gitea/faq"}},O={},N=[{value:"action",id:"action",level:2}],_={toc:N},b="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(b,f(p(p({},_),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker \u73af\u5883\u53d8\u91cf\u914d\u7f6e - ",(0,r.kt)("inlineCode",{parentName:"li"},"GITEA__{section}__{name}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GITEA__database__DB_TYPE"))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"APP_NAME=Gitea\nRUN_USER=git\nRUN_MODE=prod\n\n[database]\n# PostgreSQL\nDB_TYPE = postgres\nHOST = RELEASE-NAME-postgresql.default.svc.cluster.local:5432\nNAME = gitea\nPASSWD = gitea\nUSER = gitea\nSCHEMA =\nSSL_MODE=disable ; disable, require, verify-full\n\n# SQLite\nDB_TYPE = sqlite3\nPATH = data/gitea.db\nSQLITE_TIMEOUT = 500\n# https://www.sqlite.org/pragma.html#pragma_journal_mode\n# DELETE | TRUNCATE | PERSIST | MEMORY | WAL | OFF\n# \u63a8\u8350 WAL\nSQLITE_JOURNAL_MODE = DELETE\n\n# \u5176\u4ed6\nITERATE_BUFFER_SIZE = 50\nLOG_SQL = false\nDB_RETRIES = 10\nDB_RETRY_BACKOFF = 3s\nMAX_IDLE_CONNS = 2\nCONN_MAX_LIFETIME = 3s\nMAX_OPEN_CONNS = 0\nAUTO_MIGRATION = true\n\n[service]\n# \u65b0\u6ce8\u518c\u7528\u6237\u5fc5\u987b\u7531\u7ba1\u7406\u5458\u624b\u52a8\u6fc0\u6d3b,\u542f\u7528\u6b64\u9009\u9879\u9700\u53d6\u6d88\nREGISTER_MANUAL_CONFIRM=false\n# \u7981\u7528\u6ce8\u518c\uff0c\u542f\u7528\u540e\u53ea\u80fd\u7528\u7ba1\u7406\u5458\u6dfb\u52a0\u7528\u6237\nDISABLE_REGISTRATION=false\n# \u662f\u5426\u6240\u6709\u9875\u9762\u90fd\u5fc5\u987b\u767b\u5f55\u540e\u624d\u53ef\u8bbf\u95ee\u3002\nREQUIRE_SIGNIN_VIEW=false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GITEA_WORK_DIR"),(0,r.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u6570\u636e\u5e93 ",(0,r.kt)("inlineCode",{parentName:"li"},"gitea migrate"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"gitea dump")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.gitea.io/en-us/config-cheat-sheet/"}),"Configuration Cheat Sheet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.gitea.io/zh-cn/config-cheat-sheet/"}),"\u4e2d\u6587")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/go-gitea/gitea/blob/main/custom/conf/app.example.ini"}),"app.example.ini"))),(0,r.kt)("h2",p({},{id:"action"}),"action"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"[action]\nENABLED=false\n# github -> https://github.com\n# self -> \u5f53\u524d gitea - GITEA__server__ROOT_URL\nDEFAULT_ACTIONS_URL=github\n# minio, XYZ -> storage.XYZ\nSTORAGE_TYPE=local\nMINIO_BASE_PATH=actions_log/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DEFAULT_ACTIONS_URL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350 self",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981 mirror \u592a\u591a\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981 gitea \u516c\u5f00\u8bbf\u95ee"))),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350 uses \u5199\u5b8c\u6574 url\uff0c\u4f8b\u5982: ",(0,r.kt)("a",p({parentName:"li"},{href:"https://gitea.com/actions/checkout@v3"}),"https://gitea.com/actions/checkout@v3"))))))}k.isMDXComponent=!0}}]);