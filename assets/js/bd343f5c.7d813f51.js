"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56057],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,y=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return y},metadata:function(){return k},toc:function(){return v}});var r=n(49613),l=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>a(e,s(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const y={title:"sysctl"},d="sysctl",k={unversionedId:"os/linux/sys/sysctl",id:"os/linux/sys/sysctl",title:"sysctl",description:"- /etc/sysctl.d",source:"@site/../notes/os/linux/sys/sysctl.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/sysctl",permalink:"/notes/os/linux/sys/sysctl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/sysctl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672817159,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"sysctl"},sidebar:"docs",previous:{title:"syscall",permalink:"/notes/os/linux/sys/syscall"},next:{title:"sysfs",permalink:"/notes/os/linux/sys/sysfs"}},b={},v=[{value:"tuning.conf",id:"tuningconf",level:2},{value:"bbr.conf",id:"bbrconf",level:2}],g={toc:v},N="wrapper";function O(e){var t=e,{components:n}=t,l=m(t,["components"]);return(0,r.kt)(N,f(u(u({},g),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"sysctl"}),"sysctl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/sysctl.d.5.html"}),"/etc/sysctl.d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/sysctl.8.html"}),"sysctl.8")),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/sysctl.d/*.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/run/sysctl.d/*.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/lib/sysctl.d/*.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/usr/lib/sysctl.d/*.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lib/sysctl.d/*.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/sysctl.conf")))),(0,r.kt)("li",{parentName:"ul"},"/proc/sys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt"}),"networking/ip-sysctl.txt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://sysctl-explorer.net/"}),"https://sysctl-explorer.net/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/proudier/sysctl-explorer"}),"proudier/sysctl-explorer"))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"sysctl -p       # \u52a0\u8f7d \u6587\u4ef6 - \u9ed8\u8ba4\u4e3a /etc/sysctl.conf\nsysctl --system # \u52a0\u8f7d\u6240\u6709\u7cfb\u7edf\u914d\u7f6e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"net.ipv4.tcp_fwmark_accept    =0\n\nnet.ipv4.tcp_keepalive_time   = 75    # \u5728\u7b2c\u4e00\u6b21keep alive\u8bf7\u6c42\u53d1\u9001\u540e\uff0c\u4e0d\u6d3b\u52a8\u8fde\u63a5\u7684\u65f6\u95f4\nnet.ipv4.tcp_keepalive_probes = 9     # \u5728\u8fd9\u4e2a\u8fde\u63a5\u88ab\u8ba4\u4e3a\u662f\u65ad\u5f00\u4e4b\u524d\uff0ckeep alive\u8bf7\u6c42\u88ab\u91cd\u53d1\u7684\u6b21\u6570\nnet.ipv4.tcp_keepalive_intvl  = 7200  # keep alive\u63a2\u6d4b\u7684\u65f6\u95f4\u95f4\u9694\n")),(0,r.kt)("h2",u({},{id:"tuningconf"}),"tuning.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-conf"}),"vm.max_map_count=262144\n")),(0,r.kt)("h2",u({},{id:"bbrconf"}),"bbr.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-conf"}),"net.core.default_qdisc=fq\nnet.ipv4.tcp_congestion_control=bbr\n")))}O.isMDXComponent=!0}}]);