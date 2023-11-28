"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34780],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62121:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"zram"},y="zram",b={unversionedId:"os/linux/sys/zram",id:"os/linux/sys/zram",title:"zram",description:"- \u652f\u6301\u538b\u7f29\u7684 \u5185\u5b58 \u5757\u5b58\u50a8\u7cfb\u7edf",source:"@site/../notes/os/linux/sys/zram.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/zram",permalink:"/notes/os/linux/sys/zram",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/zram.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"zram"},sidebar:"docs",previous:{title:"USB",permalink:"/notes/os/linux/sys/usb"},next:{title:"util-linux",permalink:"/notes/os/linux/util-linux"}},g={},v=[],w={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,m(p(p({},w),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"zram"}),"zram"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u538b\u7f29\u7684 \u5185\u5b58 \u5757\u5b58\u50a8\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u540e\u7aef\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"\u573a\u666f - swap, /tmp, ramdisk"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.kernel.org/doc/html/next/admin-guide/blockdev/zram.html"}),"https://www.kernel.org/doc/html/next/admin-guide/blockdev/zram.html"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"modprobe zram\n# zramctl\napk add util-linux-misc\nzramctl /dev/zram0 --algorithm zstd --size 32G\n\n# \u53ef\u4ee5\u7528\u6765\u505a swap - \u51cf\u5c11\u5185\u5b58\u4f7f\u7528\n# \u786e\u4fdd\u5173\u95ed zswap\nmkswap -U clear /dev/zram0\nswapon --priority 100 /dev/zram0\n\n\necho zaram | tee -a /etc/modules-load.d/zram.conf\n\n# https://github.com/vaeth/zram-init\napk add zram-init\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-txt",metastring:"title=/etc/udev/rules.d/99-zram.rules",title:"/etc/udev/rules.d/99-zram.rules"}),'ACTION=="add", KERNEL=="zram0", ATTR{comp_algorithm}="zstd", ATTR{disksize}="4G", RUN="/usr/bin/mkswap -U clear /dev/%k", TAG+="systemd"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-txt",metastring:"title=/etc/fstab",title:"/etc/fstab"}),"/dev/zram0 none swap defaults,pri=100 0 0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://wiki.archlinux.org/title/Zram"}),"https://wiki.archlinux.org/title/Zram"))))}O.isMDXComponent=!0}}]);