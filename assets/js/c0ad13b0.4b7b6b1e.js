"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98138],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(l,".").concat(g)]||p[g]||f[g]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},17127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return _},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return y}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>a(e,s(t)),g=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={tags:["Diagnosis","Troubleshooting","Debug"]},d="PostgreSQL Troubleshooting",b={unversionedId:"db/relational/postgresql/postgresql-debug",id:"db/relational/postgresql/postgresql-debug",title:"PostgreSQL Troubleshooting",description:"",source:"@site/../notes/db/relational/postgresql/postgresql-debug.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/debug",permalink:"/notes/db/relational/postgresql/debug",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-debug.md",tags:[{label:"Diagnosis",permalink:"/notes/tags/diagnosis"},{label:"Troubleshooting",permalink:"/notes/tags/troubleshooting"},{label:"Debug",permalink:"/notes/tags/debug"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{tags:["Diagnosis","Troubleshooting","Debug"]},sidebar:"docs",previous:{title:"DDL",permalink:"/notes/db/relational/postgresql/ddl"},next:{title:"PostgreSQL Extension",permalink:"/notes/db/relational/postgresql/extension"}},_={},y=[],v={toc:y},O="wrapper";function h(e){var t=e,{components:n}=t,o=g(t,["components"]);return(0,r.kt)(O,f(p(p({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"postgresql-troubleshooting"}),"PostgreSQL Troubleshooting"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"-- \u603b\u8fde\u63a5\u6570\uff0c\u5df2\u4f7f\u7528\uff0csuper \u9884\u7559\uff0c\u666e\u901a\u7528\u6237\u53ef\u7528\nselect max_conn, used, res_for_super, max_conn - used - res_for_super res_for_normal\nfrom (select count(*) used from pg_stat_activity) t1,\n     (select setting::int res_for_super from pg_settings where name = $$superuser_reserved_connections$$) t2,\n     (select setting::int max_conn from pg_settings where name = $$max_connections$$) t3\n\n-- \u67e5\u770b\u5f53\u524d\u7684\u6700\u5927\u8fde\u63a5\u6570\nshow max_connections;\nselect current_setting('max_connections');\nselect *\nfrom pg_settings\nwhere name = 'max_connections';\n\nshow shared_buffers;\n\n-- \u67e5\u770b\u8fde\u63a5\u6570\u4e3b\u8981\u8c01\u5360\u7528\n-- idle \u591a\u8fd8\u662f active \u591a\nselect state, usename, application_name, datname, count(*)\nfrom pg_stat_activity\ngroup by state, usename, application_name, datname\norder by 1, 2, 3;\n\n-- \u6392\u67e5 active \u8fde\u63a5\nselect *\nfrom pg_stat_activity\nwhere state = 'active';\n\nALTER SYSTEM SET max_connections TO '150';\nALTER SYSTEM SET shared_buffers TO '256MB';\n\nshow idle_in_transaction_session_timeout;\n\n-- \u5355\u4e2a\u7528\u6237\nalter user username SET idle_in_transaction_session_timeout to 60000;\n-- \u7cfb\u7edf\nALTER SYSTEM SET idle_in_transaction_session_timeout to 60000; -- 1minute\n\n-- pg_terminate_backend(pid)\nSELECT *\nFROM pg_stat_activity\nWHERE datname = 'centralauth'\n  AND pid <> pg_backend_pid()\n  AND state in ('idle', 'idle in transaction', 'idle in transaction (aborted)', 'disabled')\n  AND state_change < current_timestamp - INTERVAL '15' MINUTE;\n\n-- WAL\nselect name, setting, unit\nfrom pg_settings\nwhere name in (\n               'effective_cache_size',\n               'shared_buffers',\n               'work_mem',\n               'maintenance_work_mem',\n               'wal_buffers'\n    );\n")))}h.isMDXComponent=!0}}]);