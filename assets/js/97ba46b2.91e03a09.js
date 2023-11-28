"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85128],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26517:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return w},default:function(){return g},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return v}});var r=t(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&s(e,t,n[t]);return e},d=(e,n)=>a(e,i(n)),m=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const f={title:"PowerDNS LUA"},w="PowerDNS LUA",y={unversionedId:"service/dns/powerdns/powerdns-lua",id:"service/dns/powerdns/powerdns-lua",title:"PowerDNS LUA",description:"- \u81ea 4.2 \u5f00\u59cb\u652f\u6301",source:"@site/../notes/service/dns/powerdns/powerdns-lua.md",sourceDirName:"service/dns/powerdns",slug:"/service/dns/powerdns/lua",permalink:"/notes/service/dns/powerdns/lua",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/powerdns/powerdns-lua.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"PowerDNS LUA"},sidebar:"docs",previous:{title:"PowerDNS FAQ",permalink:"/notes/service/dns/powerdns/faq"},next:{title:"PowerDNS Recursor",permalink:"/notes/service/dns/powerdns/rec"}},b={},v=[],O={toc:v},k="wrapper";function g(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(k,d(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"powerdns-lua"}),"PowerDNS LUA"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea 4.2 \u5f00\u59cb\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://doc.powerdns.com/authoritative/lua-records/functions.html"}),"\u6240\u6709\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://doc.powerdns.com/authoritative/lua-records/reference/index.html"}),"LUA Reference"))),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"return"),"\uff0c\u5982\u679c\u8bed\u53e5\u4e0d\u662f\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},";")," \u524d\u7f00\uff0c\u7136\u540e\u81ea\u5df1\u5199 ",(0,r.kt)("inlineCode",{parentName:"li"},"return"),"\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"-- \u9488\u5bf9\u57df\u540d\u542f\u7528 LUA\n-- \u6216\u914d\u7f6e\u6dfb\u52a0 enable-lua-records \u8fdb\u884c\u5168\u5c40\u542f\u7528\nINSERT INTO domainmetadata (domain_id, kind, content) VALUES (1, 'ENABLE-LUA-RECORDS', 1);\n\n-- \u6dfb\u52a0 LUA \u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES (\n  1,\n  'www.example.com',\n  'LUA',\n  'A \"pickclosest({''192.0.2.1'',''192.0.2.2'',''198.51.100.1''})',\n  600\n);\n\n-- \u914d\u7f6e\u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'config.example.com', 'LUA',\n  'LUA \"fallbackIp=''192.168.1.1''\"', 600\n);\n-- \u4f7f\u7528\u914d\u7f6e\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'www.example.com', 'LUA',\n  'A \";include(''config'');return fallbackIp\"', 600\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-lua"}),"-- \u8fd4\u56de\u8bf7\u6c42\u65b9 IP\nwho:toString()\n\n-- \u6839\u636e\u8bf7\u6c42\u65b9 IP \u4e0d\u540c\u8fd4\u56de\u4e0d\u540c\u5730\u5740\nview({\n  {{'10.10.0.0/16'}, {'10.10.1.1'}}\n  {{'0.0.0.0/0'}, {'192.0.2.1'}}\n})\n\n-- \u8fd4\u56de\u5b58\u6d3b\u7684 IP\n-- \u5f02\u6b65\u68c0\u6d4b - \u5982\u679c\u90fd\u4e0d\u5b58\u6d3b\u5219\u90fd\u8fd4\u56de\nifportup(443, {'192.0.2.1', '192.0.2.2'})\n-- \u4f7f\u7528 URL \u68c0\u6d4b\u5b58\u6d3b - stringmatch \u4e3a\u53ef\u9009\u7684\u5185\u5bb9\u5339\u914d\u6761\u4ef6\nifurlup(\"example.com/status\", { {\"192.0.2.20\", \"203.0.113.4\"}, {\"203.0.113.2\"} },{stringmatch='ok'})\n\n-- \u57fa\u4e8e\u8bf7\u6c42\u65b9\u7684 HASH(bestwho) \u8fdb\u884c\u8fd4\u56de\npickwhashed({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n-- \u968f\u673a\u8fd4\u56de - \u6709\u5e26\u6743\u91cd\u7248\npickrandom({{'192.168.0.1'},{'192.168.0.2'}})\npickwrandom({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n")))}g.isMDXComponent=!0}}]);