"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68090],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),y=o,d=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},47679:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return d},metadata:function(){return x},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>a(e,p(t)),y=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const d={title:"HAProxy Proxy Protocol"},f="HAProxy Proxy Protocol",x={unversionedId:"devops/web/haproxy/haproxy-proxy-protocol",id:"devops/web/haproxy/haproxy-proxy-protocol",title:"HAProxy Proxy Protocol",description:"- HAProxy Protocol - \u4e3b\u8981\u7528\u4e8e\u4fdd\u7559\u539f IP",source:"@site/../notes/devops/web/haproxy/haproxy-proxy-protocol.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/proxy-protocol",permalink:"/notes/devops/web/haproxy/proxy-protocol",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/haproxy-proxy-protocol.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1698118598,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{title:"HAProxy Proxy Protocol"},sidebar:"docs",previous:{title:"HAProxy FAQ",permalink:"/notes/devops/web/haproxy/faq"},next:{title:"SPOE",permalink:"/notes/devops/web/haproxy/spoe"}},h={},b=[{value:"HAProxy",id:"haproxy",level:2},{value:"Nginx",id:"nginx",level:2}],k={toc:b},v="wrapper";function g(e){var t=e,{components:r}=t,o=y(t,["components"]);return(0,n.kt)(v,m(s(s({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"haproxy-proxy-protocol"}),"HAProxy Proxy Protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HAProxy Protocol - \u4e3b\u8981\u7528\u4e8e\u4fdd\u7559\u539f IP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u57fa\u4e8e\u6765\u6e90 IP \u505a\u7b56\u7565\u7684\u4e00\u822c\u90fd\u4f1a\u652f\u6301"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/haproxy/haproxy/blob/master/doc/proxy-protocol.txt"}),"proxy-protocol.txt"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"v1 - \u660e\u6587 ",(0,n.kt)("inlineCode",{parentName:"li"},"PROXY TCP4 255.255.255.255 255.255.255.255 65535 65535\\r\\n\\r\\n")),(0,n.kt)("li",{parentName:"ul"},"v2 - \u652f\u6301\u4e8c\u8fdb\u5236\uff0c\u652f\u6301\u66f4\u591a\u534f\u8bae"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u60f3\u8981\u77e5\u9053\u539f\u59cb IP - \u57fa\u4e8e IP \u8fc7\u6ee4"))),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"haproxy, nginx, varnish, stud, stunnel"),(0,n.kt)("li",{parentName:"ul"},"postgres - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://www.postgresql.org/message-id/flat/CABUevEz9TLONY3VtOMkUUKpf%2BMb4XD79mXrtwUb-c9VwQ4ek-w%40mail.gmail.com#c9704d4e7ae56f3b58aa3ccf9b106bae"}),"PROXY protocol support"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6709 patch \u8fd8\u6ca1\u5408\u5e76"))))),(0,n.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u57fa\u4e8e\u6765\u6e90 IP \u505a\u7b56\u7565\u7684\u4e00\u822c\u90fd\u4f1a\u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/cloudflare/mmproxy"}),"cloudflare/mmproxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/path-network/go-mmproxy"}),"path-network/go-mmproxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/AdguardTeam/AdGuardHome/issues/2798"}),"AdGuardHome#2798"))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u6d4b\u8bd5\n# \u5982\u679c\u534f\u8bae\u4e0d\u5339\u914d\u5219\u4f1a\n# curl: (56) Recv failure: Connection reset by peer\ncurl --haproxy-protocol 127.0.0.1\n")),(0,n.kt)("h2",s({},{id:"haproxy"}),"HAProxy"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-haproxy",metastring:'title="frontend"',title:'"frontend"'}),"frontend http\n  mode http\n  bind 0.0.0.0:80 name v4\n  bind :::80 name v6\n  tcp-request connection expect-proxy layer4\n\nfrontend https\n  mode http\n  bind 127.0.0.1:443 name v4 crt /etc/haproxy/certs/frontend ssl alpn h2,http/1.1 accept-proxy\n  bind :::443 name v6 crt /etc/haproxy/certs/frontend ssl v4v6 alpn h2,http/1.1 accept-proxy\n\nfrontend ssl\n  mode tcp\n  bind 0.0.0.0:443 name v4\n  bind :::443 name v6 v4v6\n  tcp-request connection expect-proxy layer4\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-haproxy",metastring:'title="backend"',title:'"backend"'}),"backend be\n  server svr 192.168.1.2:443 check send-proxy\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# CURL \u6d4b\u8bd5 proxy protocol\ncurl --haproxy-protocol 192.168.1.2\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"tcp-request connection expect-proxy layer4 if { src -f proxies.lst }\n")),(0,n.kt)("h2",s({},{id:"nginx"}),"Nginx"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-nginx"}),"http {\n  server {\n    listen 80   proxy_protocol;\n    listen 443  ssl proxy_protocol;\n\n    #set_real_ip_from 192.168.1.0/24;\n    #real_ip_header proxy_protocol;\n  }\n}\n\nstream {\n  server {\n    listen 12345 proxy_protocol;\n  }\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/"}),"Accepting the PROXY Protocol"))))}g.isMDXComponent=!0}}]);