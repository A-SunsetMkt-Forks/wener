"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96998],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},26240:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return N}});var a=r(49613),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),k=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const d={title:"Build Asterisk"},f="Build Asterisk",b={unversionedId:"voip/asterisk/asterisk-build",id:"voip/asterisk/asterisk-build",title:"Build Asterisk",description:"- debian \u80fd\u5b89\u88c5 16",source:"@site/../notes/voip/asterisk/asterisk-build.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/build",permalink:"/notes/voip/asterisk/build",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/asterisk-build.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1626706991,formattedLastUpdatedAt:"Jul 19, 2021",frontMatter:{title:"Build Asterisk"},sidebar:"docs",previous:{title:"Asterisk Awesome",permalink:"/notes/voip/asterisk/awesome"},next:{title:"Asterisk CDR",permalink:"/notes/voip/asterisk/cdr"}},h={},N=[{value:"Asterisk Crash",id:"asterisk-crash",level:2},{value:"There are no local system nameservers configured, resorting to system resolution",id:"there-are-no-local-system-nameservers-configured-resorting-to-system-resolution",level:2},{value:"AlpineLinux musl \u95ee\u9898",id:"alpinelinux-musl-\u95ee\u9898",level:2}],g={toc:N},v="wrapper";function y(e){var t=e,{components:r}=t,n=k(t,["components"]);return(0,a.kt)(v,c(m(m({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"build-asterisk"}),"Build Asterisk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"debian \u80fd\u5b89\u88c5 16",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 codec_ilbc, app_meetme",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ilbc -> opus"),(0,a.kt)("li",{parentName:"ul"},"meetme -> ConfBridge"))))),(0,a.kt)("li",{parentName:"ul"},"alpine \u80fd\u5b89\u88c5 18 - \u6700\u65b0 \b lts \u7248 - \u4f46\u6709\u4e9b\u573a\u666f\u53ef\u80fd crash",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u57fa\u4e8e frolvlad/alpine-glibc \u4ece\u65b0\u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 codec_opus_open_source - ",(0,a.kt)("a",m({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12808"}),"#12808")))),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981 certificated asterisk \u7248\u672c\u53ea\u80fd\u81ea\u5df1\u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"aports ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/alpinelinux/aports/blob/master/main/asterisk/APKBUILD"}),"main/asterisk/APKBUILD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/andrius/asterisk"}),"andrius/asterisk"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"debian, centos \u6784\u5efa\u4e2a\u4e2a\u7248\u672c asterisk"))))),(0,a.kt)("li",{parentName:"ul"},"debian",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5171\u4eab\u8d44\u6e90\u4f4d\u4e8e /usr/share/asterisk")))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"opus \u7f16\u7801\u6a21\u5757\u4e0d\u662f\u5f00\u6e90\u7684 - \u9ed8\u8ba4\u5b89\u88c5\u662f\u7528\u5b98\u65b9\u4e0b\u8f7d - \u4f1a phonehome \u5230 stats.asterisk.org",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"debian \u7684 opus \u57fa\u4e8e ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/traud/asterisk-opus"}),"traud/asterisk-opus")),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5305\u542b codec_opus \u548c format_ogg_opus"),(0,a.kt)("li",{parentName:"ul"},"debian \u6e90\u7801 ",(0,a.kt)("a",m({parentName:"li"},{href:"https://salsa.debian.org/pkg-voip-team/asterisk-opus"}),"pkg-voip-team/asterisk-opus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://web.archive.org/web/20161003135358/http://blogs.digium.com/2016/09/30/opus-in-asterisk/"}),"Opus for Asterisk"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u56e0\u4e3a\u6cd5\u5f8b\u5173\u7cfb\u6240\u4ee5\u4e0d\u5f00\u653e\u6e90\u7801"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u6784\u5efa doc xml\n# \u53ef\u7528\u4e8e\u751f\u6210\u4ee3\u7801\u6216\u6587\u6863\n# core \u505a\u4e86 html escape, full \u6ca1\u6709 - \u4e24\u4e2a\u533a\u522b\u4e0d\u5927\nmake doc/core-en_US.xml\nmake doc/full-en_US.xml\n\n# \u6a21\u5757\u652f\u6301\u72b6\u6001\ngrep -rP '^\\t<support_level>' $(find . -name '*.c') | sed -re 's#</?support_level>##g' | sort\n")),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"asterisk-crash"}),"Asterisk Crash"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dial \u65f6 WebSocket \u53d1\u9001 DTMF",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Debian 16.16 crash"))),(0,a.kt)("li",{parentName:"ul"},"Echo \u5e94\u7528\u6309\u4efb\u610f\u952e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"18 alpinelinux crash"))),(0,a.kt)("li",{parentName:"ul"},"Asterisk crashes during call transfer ",(0,a.kt)("a",m({parentName:"li"},{href:"https://issues.asterisk.org/jira/browse/ASTERISK-29168"}),"ASTERISK-29168"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pbx_realtime diaplans")))),(0,a.kt)("h2",m({},{id:"there-are-no-local-system-nameservers-configured-resorting-to-system-resolution"}),"There are no local system nameservers configured, resorting to system resolution"),(0,a.kt)("p",null,"musl \u4e0d\u652f\u6301"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u81f4 pjsip \u65e0\u6cd5\u4f7f\u7528 DNS SRV \u800c\u4f7f\u7528 A \u548c AAAA \u89e3\u6790"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/asterisk/asterisk/blob/b4347c486150653ec7ce1d129e8f9017c69344da/res/res_pjsip/config_system.c#L266-L270"}),"res/res_pjsip/config_system.c#L266-L270"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8dd1\u51fa\u5f02\u5e38\u7684\u5730\u65b9"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/asterisk/asterisk/blob/b4347c486150653ec7ce1d129e8f9017c69344da/configure.ac#L1415-L1471"}),"configure.ac#L1415-L1471"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u7684\u7cfb\u7edf\u51fd\u6570"))),(0,a.kt)("li",{parentName:"ul"},"musl \u672a\u5b9e\u73b0 res_ninit"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5\u8be5 patch ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/openembedded/openembedded-core/blob/master/meta/recipes-connectivity/connman/connman/0002-resolve-musl-does-not-implement-res_ninit.patch"}),"0002-resolve-musl-does-not-implement-res_ninit.patch"))))),(0,a.kt)("h2",m({},{id:"alpinelinux-musl-\u95ee\u9898"}),"AlpineLinux musl \u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"segfault",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"agi dump html"))),(0,a.kt)("li",{parentName:"ul"},"pjsip \u65e0\u6cd5\u83b7\u53d6 nameserver")))}y.isMDXComponent=!0}}]);