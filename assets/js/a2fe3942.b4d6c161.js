"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36979],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,k=c["".concat(o,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return h}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>i(e,s(t)),f=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const k={title:"s6"},d="s6",v={unversionedId:"os/linux/init/s6",id:"os/linux/init/s6",title:"s6",description:"- s6",source:"@site/../notes/os/linux/init/s6.md",sourceDirName:"os/linux/init",slug:"/os/linux/init/s6",permalink:"/notes/os/linux/init/s6",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/init/s6.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1619595507,formattedLastUpdatedAt:"Apr 28, 2021",frontMatter:{title:"s6"},sidebar:"docs",previous:{title:"OpenRC",permalink:"/notes/os/linux/init/openrc"},next:{title:"Process supervision",permalink:"/notes/os/linux/init/supervision"}},N={},h=[],y={toc:h},g="wrapper";function b(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(g,m(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"s6"}),"s6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://skarnet.org/software/s6/"}),"s6"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"size: 765952"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/s6"}),"https://pkgs.alpinelinux.org/package/edge/main/x86_64/s6")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/skarnet/s6"}),"skarnet/s6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/just-containers/s6-overlay"}),"just-containers/s6-overlay")," - s6 overlay for containers (includes execline, s6-linux-utils & a custom init)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://skarnet.org/software/s6/why.html"}),"Why another supervision suite ?")),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u6a21\u5757",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"s6-linux-init init"),(0,r.kt)("li",{parentName:"ul"},"s6-rc \u670d\u52a1\u4f9d\u8d56\u7ba1\u7406"))),(0,r.kt)("li",{parentName:"ul"},"gentoo wiki ",(0,r.kt)("a",c({parentName:"li"},{href:"https://wiki.gentoo.org/wiki/S6"}),"S6")),(0,r.kt)("li",{parentName:"ul"},"s6-supervise",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 supervisor \u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u6536 servicedir \u4f5c\u4e3a\u53c2\u6570"))),(0,r.kt)("li",{parentName:"ul"},"s6-svscan",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76d1\u89c6\u4e00\u7ec4\u8fdb\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u6536 scandir \u4f5c\u4e3a\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"2.3 \u4e4b\u524d\u9ed8\u8ba4\u6bcf 5s \u4f1a\u626b\u63cf\u4e00\u6b21 - \u4e4b\u540e\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"-t ms")," \u6307\u5b9a - SIGALARM \u89e6\u53d1\u626b\u63cf"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 s6-svscanctl \u63a7\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u6bcf\u4e2a\u626b\u63cf\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"servicedir")," \u542f\u52a8 s6-supervise"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u6587\u4ef6\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},".s6-svscan")))),(0,r.kt)("li",{parentName:"ul"},"s6-log",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5de5\u5177"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s6-log '!processor-script arg1 arg2' ./dirname")," \u7b49\u540c\u4e8e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"execlineb -Pc 'processor-script arg1 arg2'")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.skarnet.org/software/s6/servicedir.html"}),"servicedir")," - \u670d\u52a1\u76ee\u5f55 - \u8868\u793a\u5b9a\u4e49\u7684\u4e00\u4e2a\u670d\u52a1 - \u9664\u4e86 run \u811a\u672c\u5176\u4ed6\u5b58\u5728\u53ef\u9009",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"run - \u542f\u52a8\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"down - \u505c\u6b62\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"log - \u5b50\u76ee\u5f55\u6216\u7b26\u53f7\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"finish - \u6bcf\u6b21\u8fdb\u7a0b\u7ed3\u675f\u540e\u7684\u6e05\u7406\u5de5\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570: exitCode \u6216 256 \u8868\u793a\u4fe1\u53f7, \u4fe1\u53f7"))),(0,r.kt)("li",{parentName:"ul"},"timeout-finish - \u8fd0\u884c\u8d85\u65f6\u56de\u8c03 - \u63a5\u53d7\u4e00\u4e2a\u53c2\u6570: \u8fd0\u884c\u65f6\u95f4\u6beb\u79d2 - \u9ed8\u8ba4 5s \u8d85\u65f6"),(0,r.kt)("li",{parentName:"ul"},"nosetsid - \u4e0d\u8c03\u7528 setsid - \u5b50\u7ebf\u7a0b\u4f1a\u8fd0\u884c\u5728 s6-supervise \u7684\u4f1a\u8bdd"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.skarnet.org/software/s6/scandir.html"}),"scandir"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350\u5c06\u670d\u52a1\u4ed3\u5e93\u4f5c\u4e3a\u626b\u63cf\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5728\u626b\u63cf\u76ee\u5f55\u4e0b\u8fdb\u884c\u8f6f\u94fe\u63a5")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# services \u670d\u52a1\u4ed3\u5e93\n# run \u8fd0\u884c\u670d\u52a1\u76ee\u5f55\nmkdir services run\n\n# \u542f\u52a8 - \u6bcf 10s \u626b\u63cf\u4e00\u6b21\ns6-svscan $PWD/run -t 10000\n\n# \u5b9a\u4e49\u4e00\u4e2a\u670d\u52a1\n# ====================\ninstall -Dv /dev/null services/ncat-echo/run\ncat <<SH >services/ncat-echo/run\n#!/usr/bin/env execlineb -P\nncat -e /bin/cat -k -l 8080\nSH\n# \u542f\u52a8\u670d\u52a1\nln -s ../services/ncat-echo run/\ns6-svscanctl -a run\n# \u670d\u52a1\u72b6\u6001\ns6-svstat services/ncat-echo\ns6-svstat -o up,wantedup,normallyup,ready,paused,pid,exitcode,signal,signum,updownsince,readysince,updownfor,readyfor services/ncat-echo\n# \u505c\u6b62\u670d\u52a1\ns6-svc -dx services/ncat-echo\nunlink run/ncat-echo\n\n# \u5e38\u7528\u811a\u672c\n# ====================\n# \u6240\u6709\u670d\u52a1\u72b6\u6001\nfor svc in services/*; do echo -n $(basename $svc)' ';s6-svok $svc && echo ok || echo down;done\n")))}b.isMDXComponent=!0}}]);