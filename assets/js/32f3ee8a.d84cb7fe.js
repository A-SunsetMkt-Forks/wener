"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21890],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(d,i(i({ref:e},c),{},{components:n})):a.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92486:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return N},default:function(){return w},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return y}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&c(t,n,e[n]);return t},k=(t,e)=>l(t,i(e)),s=(t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const d={title:"Tinc \u914d\u7f6e",tags:["Configuration"]},N="Tinc \u914d\u7f6e",v={unversionedId:"service/network/vpn/tinc/tinc-conf",id:"service/network/vpn/tinc/tinc-conf",title:"Tinc \u914d\u7f6e",description:"\u914d\u7f6e\u6587\u4ef6",source:"@site/../notes/service/network/vpn/tinc/tinc-conf.md",sourceDirName:"service/network/vpn/tinc",slug:"/service/network/vpn/tinc/conf",permalink:"/notes/service/network/vpn/tinc/conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/tinc/tinc-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680154821,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{title:"Tinc \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"tinc 1.0",permalink:"/notes/service/network/vpn/tinc/1.0"},next:{title:"Tinc \u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/network/vpn/tinc/faq"}},f={},y=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"tinc.conf",id:"tincconf",level:2},{value:"Mode",id:"mode",level:3},{value:"DeviceType",id:"devicetype",level:3}],b={toc:y},g="wrapper";function w(t){var e=t,{components:n}=e,r=s(e,["components"]);return(0,a.kt)(g,k(m(m({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"tinc-\u914d\u7f6e"}),"Tinc \u914d\u7f6e"),(0,a.kt)("h2",m({},{id:"\u914d\u7f6e\u6587\u4ef6"}),"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/tinc/NETNAME/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tinc.conf"),(0,a.kt)("li",{parentName:"ul"},"conf.d/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.conf")," - \u989d\u5916\u914d\u7f6e\u6587\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"hosts/ - \u4e3b\u673a\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"tinc-up"),(0,a.kt)("li",{parentName:"ul"},"tinc-down"),(0,a.kt)("li",{parentName:"ul"},"invitations/"),(0,a.kt)("li",{parentName:"ul"},"invitation-data - \u63a5\u53d7\u9080\u8bf7\u5305\u542b\u7684\u5185\u5bb9")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u811a\u672c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/tinc/NETNAME/ - \u7f51\u7edc\u914d\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tinc-up - \u542f\u52a8\u540e\u914d\u7f6e\u7f51\u7edc\u7684\u811a\u672c"),(0,a.kt)("li",{parentName:"ul"},"tinc-down"),(0,a.kt)("li",{parentName:"ul"},"hosts/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HOSTS-up - HOST \u7684\u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u540e\u7684\u811a\u672c"),(0,a.kt)("li",{parentName:"ul"},"HOSTS-down"))),(0,a.kt)("li",{parentName:"ul"},"host-up - \u5f53\u67d0 HOST \u53ef\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"host-down - \u5f53\u67d0 HOST \u4e0d\u53ef\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"subnet-up - \u5f53 subnet \u53ef\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"subnet-down"),(0,a.kt)("li",{parentName:"ul"},"invitation-created - \u9080\u8bf7\u521b\u5efa"),(0,a.kt)("li",{parentName:"ul"},"invitation-accepted - \u9080\u8bf7\u63a5\u53d7")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u73af\u5883\u53d8\u91cf")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"env"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NETNAME"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NAME"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"this tinc daemon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"DEVICE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual network device")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"INTERFACE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual network interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NODE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"host-up/down, subnet-up/down")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"REMOTEADDRESS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"host-up/down - \u5bf9\u65b9\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"REMOTEPORT"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"host-up/down - \u5bf9\u65b9\u7aef\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SUBNET"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"subnet-up/down")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"WEIGHT"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"subnet-up/down")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"INVITATION_FILE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"INVITATION_URL"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",m({},{id:"tincconf"}),"tinc.conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.tinc-vpn.org/documentation-1.1/tinc.conf.5"}),"tinc.conf.5")),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 ConnectTo \u4e14 ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoConnect=no")," \u53ef\u4ee5\u8ba4\u4e3a\u662f\u670d\u52a1\u7aef - metanode"),(0,a.kt)("li",{parentName:"ul"},"\u6709 ConnectTo \u4e14 ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoConnect=yes")," \u53ef\u4ee5\u8ba4\u4e3a\u662f\u5ba2\u6237\u7aef")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"# \u8282\u70b9\u540d\u5b57 - \u552f\u4e00\u3001\u5fc5\u987b\n# \u53ef\u4ee5\u6307\u5b9a\u4e3a $HOST - \u5982\u679c\u73af\u5883\u53d8\u4e86\u4e0d\u5b58\u5728\u5219 gethostname()\nName = name\n# router | switch | hub\nMode = router\n\n# \u542f\u52a8\u65f6\u8fde\u63a5\u5230\u7684\u8282\u70b9 - meta \u8282\u70b9\n# \u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\n# \u5982\u679c\u4e00\u4e2a\u90fd\u4e0d\u6307\u5b9a\u4e14\u4e5f\u4e0d\u6307\u5b9a AutoConnect \u5219\u8282\u70b9\u5904\u4e8e\u53ea\u63a5\u53d7\u94fe\u63a5\u7684\u72b6\u6001\nConnectTo = name\n\n# \u5982\u679c\u542f\u7528, \u4f1a\u81ea\u52a8\u5c1d\u8bd5\u4e0e\u5176\u4ed6\u8282\u70b9\u5efa\u7acb meta \u94fe\u63a5, \u800c\u4e0d\u9700\u8981\u8bbe\u7f6e ConnectTo\n# \u4e0d\u80fd\u94fe\u63a5 Port=0 \u7684\u8282\u70b9 - \u7cfb\u7edf\u968f\u673a\u7aef\u53e3\n# \u8bd5\u9a8c\u9636\u6bb5\n# yes | no\nAutoConnect = yes\n\n\n# \u5f71\u54cd\u76d1\u542c\u548c\u5916\u90e8 sockets \u5305, any \u4f1a\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u521b\u5efa ipv4 \u548c ipv6\n# ipv4 | ipv6 | any\nAddressFamily = any\n\n# \u7c7b\u4f3c\u4e8e ListenAddress\uff0c\u4f46\u51fa\u53bb\u7684\u6d41\u91cf\u4e5f\u4f1a\u4f7f\u7528\n# \u6709\u591a\u8def\u51fa\u53e3\u65f6\u6709\u7528\n# BindToAddress=address [port]\n\n# \u8bbe\u7f6e\u5e7f\u64ad\u5305\u53d1\u5230\u5176\u4ed6\u8282\u70b9\u7684\u65b9\u5f0f, \u6240\u6709\u8282\u70b9\u9700\u8981\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u5f0f, \u5426\u5219\u53ef\u80fd\u4f1a\u4ea7\u751f\u8def\u7531\u5faa\u73af\n# no \u4e0d\u53d1\u9001\u5e7f\u64ad\u5305\n# mst \u4f7f\u7528 Minimum Spanning Tree, \u4fdd\u8bc1\u53d1\u5f80\u6bcf\u4e2a\u8282\u70b9\n# direct \u53ea\u53d1\u9001\u7ed9\u76f4\u63a5\u8bbf\u95ee\u7684\u8282\u70b9, \u4ece\u5176\u4ed6\u8282\u70b9\u63a5\u6536\u5230\u7684\u4e0d\u8f6c\u53d1. \u5982\u679c\u8bbe\u7f6e\u4e86 IndirectData, \u5e7f\u64ad\u5305\u4e5f\u4f1a\u53d1\u9001\u7ed9\u6709 meta \u94fe\u63a5\u7684\u8282\u70b9\n# \u8bd5\u9a8c\u9636\u6bb5\n# no | mst | direct\nBroadcast = mst\n\n# \u5b9a\u4e49\u5e7f\u64ad\u5730\u5740\n# \u6807\u51c6\u7684\u5e7f\u64ad\u5730\u5740\u5df2\u5305\u542b\n# BroadcastSubnet = address[/prefixlength]\n\n# \u8f6c\u53d1\u524d\u51cf\u5c0f ipv4 \u5305 ttl \u548c ipv6 \u5305\u7684 Hop Limit\n# switc \u6a21\u5f0f\u4e14\u9700\u8981 ipv6 \u5219\u4e0d\u8981\u542f\u7528\n# \u5b9e\u9a8c\u9636\u6bb5\nDecrementTTL=no\n\n# \u9ed8\u8ba4\u81ea\u52a8\u521b\u5efa\n# Device=/dev/tap0\n# dummy,raw_socket,multicast,fd,uml,vde,tun,tunnohead,tunifhead,utun,tap\n# DeviceType=type\n\n# \u81f3\u5c11\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\u4f1a\u8c03\u7528 tinc-up\uff0c\u6ca1\u6709\u8282\u70b9\u65f6\u8c03\u7528 tinc-down\nDeviceStandby=no\n\n# \u4ec5\u76f4\u8fde\u4e0d\u8f6c\u53d1 - \u9002\u7528\u4e8e meta node\n# \u5b9e\u9a8c\u9636\u6bb5\nDirectOnly=no\n\n# Ed25519 key - SPTPS \u534f\u8bae\u4f7f\u7528\n# Ed25519PrivateKeyFile=/etc/tinc/NETNAME/ed25519_key.priv\n\n# \u542f\u7528\u540e, \u4f1a\u5c1d\u8bd5\u4f7f\u7528 SPTPS \u534f\u8bae, key \u4ea4\u6362\u4f1a\u4f7f\u7528 Ephemeral ECDH, \u4f1a\u4f7f\u7528 Ed25519 \u4f5c\u4e3a\u6388\u6743, \u800c\u4e0d\u662f RSA, \u56e0\u6b64\u9700\u8981\u5148\u751f\u6210 Ed25519\n# \u5982\u679c\u5148\u542f\u7528\u4e86\u4e14 join \u4e86\u7f51\u7edc\uff0c\u518d\u6539\u6210 no \u65f6\u9700\u8981\u5148\u51c6\u5907\u597d rsa key\nExperimentalProtocol = yes\n\n# \u8f6c\u53d1\u7b56\u7565\n# \u5b9e\u9a8c\u9636\u6bb5\n# off \u4e0d\u8f6c\u53d1\n# internal \u5185\u90e8\u8f6c\u53d1\n# kernel \u5305\u53d1\u5f80 TUN/TAP \u8bbe\u5907, \u4ea4\u7531\u5185\u6838\u8f6c\u53d1, \u6027\u80fd\u66f4\u4f4e, \u4f46\u80fd\u4f7f\u7528\u5185\u6838\u7684\u8def\u7531\u529f\u80fd\nForwarding = internal\n\n# \u5305\u6253\u4e0a fwmark - \u914d\u5408 iptables \u53ef\u8fdb\u884c\u8fc7\u6ee4\n# \u8bd5\u9a8c\u9636\u6bb5\nFWMark=0\n\n# \u662f\u5426\u89e3\u6790 hostname - dns \u963b\u585e\u67e5\u8be2\u5bf9\u6027\u80fd\u6709\u4e00\u70b9\u5f71\u54cd\nHostnames=no\n\n# tun/tap IFF_ONE_QUEUE\n# \u5b9e\u9a8c\u9636\u6bb5\nIffOneQueue=no\n\n# Interface=interface\n\n# \u9080\u8bf7\u65f6\u6548\u65f6\u95f4\n# \u79d2\nInvitationExpire=604800\n\n# key \u5931\u6548\u65f6\u95f4 - \u79d2\nKeyExpire=3600\n\n# \u9ed8\u8ba4\u76d1\u542c\u6240\u6709\n# address \u53ef\u4ee5\u8bbe\u7f6e\u4e3a *\n# port \u9ed8\u8ba4\u4e3a hosts \u4e0b\u7684 Port \u9009\u9879\u6216 655 - \u8bbe\u7f6e\u4e3a 0 \u5219\u968f\u673a\u9009\u62e9\n# ListenAddress=address port\n\n# \u5c1d\u8bd5\u53d1\u73b0\u672c\u673a\u7f51\u7edc\u4e2d\u7684\u8282\u70b9\n# \u5141\u8bb8\u4e0e\u672c\u5730\u8282\u70b9\u5730\u5740\u5efa\u7acb\u76f4\u63a5\u8fde\u63a5\n# \u76ee\u524d, \u672c\u5730\u53d1\u73b0\u673a\u5236\u662f\u901a\u8fc7\u5728 UDP \u53d1\u73b0\u9636\u6bb5\u53d1\u9001\u672c\u5730\u5730\u5740\u7684\u65b9\u5f0f\nLocalDiscovery = yes\n\nLogLevel=0\n\n# mac \u5730\u5740\u5931\u6548\u65f6\u95f4 - \u79d2\n# switch \u6a21\u5f0f\u6709\u6548\nMACExpire=600\n\n# \u6700\u5927\u7206\u53d1\u8fde\u63a5\u6570 - \u8d85\u8fc7\u7684 1/s \u4e00\u4e2a\nMaxConnectionBurst=100\n\n# \u6700\u5927\u91cd\u8fde\u5ef6\u65f6\nMaxTimeout=900\n\n\n# ping \u95f4\u9694 - \u53d1\u73b0 mtu \u68c0\u6d4b\u8282\u70b9\nPingInterval=60\n# \u8d85\u65f6\u540e\u4e2d\u65ad meta \u94fe\u63a5\nPingTimeout=5\n\n# UDP \u7ee7\u627f TCP \u7684 TOS \u5b57\u6bb5\n# \u5b9e\u9a8c\u9636\u6bb5\nPriorityInheritance=no\n\n# RSA key - \u65e7\u7684\u534f\u8bae\u4f7f\u7528\n# PrivateKey=key\n# PrivateKeyFile=/etc/tinc/NETNAME/rsa_key.priv\n\n# \u8fdb\u7a0b\u4f18\u5148\u7ea7 - \u53ef\u80fd\u5f71\u54cd VPN \u5ef6\u65f6\n# ProcessPriority = low | normal | high\n\n# \u51fa\u7684\u8fde\u63a5\u7ecf\u8fc7\u4ee3\u7406\n# socks4 address port [username]\n# socks5 address port [username password]\n# http address port\n# exec command\n#   \u73af\u5883\u53d8\u91cf NAME, NODE, REMOTEADDRES, REMOTEPORT\n# \u5b9e\u9a8c\u9636\u6bb5\n# Proxy = socks4 | socks5 | http | exec\n\n# byte\nReplayWindow=32\n\n# \u53ea\u5141\u8bb8 /etc/tinc/NETNAME/hosts/ \u4e0b\u7684 Subnet \u4fe1\u606f\n# \u4f8b\u5982 A -> B -> C - C \u4e0d\u4f1a\u5b66\u4e60\u5230 A \u7684\u5b50\u7f51\u4fe1\u606f\n# \u5b9e\u9a8c\u9636\u6bb5\nStrictSubnets = no\n\n# \u4e0d\u4f1a\u8f6c\u53d1\u5176\u4ed6\u8282\u70b9\u95f4\u7684\u4fe1\u606f\uff0c /etc/tinc/NETNAME/hosts/ , \u9690\u6027\u6307\u5b9a StrictSubnets\n# \u5b9e\u9a8c\u9636\u6bb5\nTunnelServer = no\n\nUDPDiscovery=yes\nUDPDiscoveryKeepaliveInterval=9\nUDPDiscoveryInterval=2\nUDPDiscoveryTimeout=30\nUDPInfoInterval=5\nUDPRcvBuf=1048576\nUDPSndBuf=1048576\n\n# \u641c\u7d22 UPnP-IGD\uff0c\u7ba1\u7406\u7ef4\u62a4 tinc \u7684\u7aef\u53e3\u6620\u5c04\n# udponly \u53ea\u7ef4\u62a4 udp \u7aef\u53e3\n# yes | udponly | no\nUPnP=no\nUPnPDiscoverWait=5\nUPnPRefreshPeriod=60\n")),(0,a.kt)("h3",m({},{id:"mode"}),"Mode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"router",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5b50\u7f51\u4fe1\u606f\u6784\u5efa\u8def\u7531\u8868"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e ip \u7684\u5355\u64ad\u901a\u8baf"),(0,a.kt)("li",{parentName:"ul"},"tun \u8bbe\u5907",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"mac tun \u53ea\u652f\u6301\u70b9\u5bf9\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"ifconfig tun0 inet 10.2.1.1 10.2.1.2 up")),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u8def\u7531 ",(0,a.kt)("inlineCode",{parentName:"li"},"route add -net 10.2 -interface tun0")))))))),(0,a.kt)("li",{parentName:"ul"},"switch",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e mac \u4fe1\u606f\u6784\u5efa\u8def\u7531\u8868"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e ethernet \u7684\u5355\u64ad,\u5e7f\u64ad\u901a\u8baf"),(0,a.kt)("li",{parentName:"ul"},"tap \u8bbe\u5907"))),(0,a.kt)("li",{parentName:"ul"},"hub",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u7ef4\u62a4\u8def\u7531\u8868, \u53ea\u505a\u8f6c\u53d1")))),(0,a.kt)("h3",m({},{id:"devicetype"}),"DeviceType"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tuntap \u8bbe\u5907\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"dummy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u8282\u70b9\u53ea\u8d1f\u8d23\u4e3a\u5176\u4ed6\u8282\u70b9\u8f6c\u53d1\u5305"))),(0,a.kt)("li",{parentName:"ul"},"raw_socket",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u5230\u73b0\u6709 interface \u7684 socket."),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u5305\u4ece\u8be5 interface \u8bfb. \u4ece\u672c\u5730\u8282\u70b9\u6536\u5230\u7684\u5305\u4f1a\u5199\u5230 raw socket."),(0,a.kt)("li",{parentName:"ul"},"\u5728 linux \u4e0b, os \u4e0d\u4f1a\u5904\u7406\u76ee\u7684\u4e3a\u672c\u5730\u8282\u70b9\u7684\u5305"))),(0,a.kt)("li",{parentName:"ul"},"multicast",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u591a\u64ad udp socket, \u7ed1\u5b9a\u5230\u5730\u5740\u548c\u7aef\u53e3, \u7a7a\u683c\u5206\u5272, ttl \u53c2\u6570\u53ef\u9009"),(0,a.kt)("li",{parentName:"ul"},"\u5305\u4ece\u5e7f\u64ad socket \u8bfb\u5199"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8fde\u63a5 UML, QEMU, KVM, \u6240\u6709\u5b9e\u4f8b\u76d1\u542c\u76f8\u540c\u7684\u5e7f\u64ad\u5730\u5740."),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u8fde\u63a5\u591a\u4e2a tinc \u5230\u76f8\u540c\u7684\u591a\u64ad\u5730\u5740, \u5bf9\u5bfc\u81f4\u5faa\u73af\u8def\u7531"),(0,a.kt)("li",{parentName:"ul"},"\u9519\u8bef\u7684\u914d\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u52a0\u5bc6\u7684 vpn \u5305\u53d1\u5230\u5916\u7f51"))),(0,a.kt)("li",{parentName:"ul"},"fd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6587\u4ef6\u63cf\u8ff0\u7b26"))),(0,a.kt)("li",{parentName:"ul"},"uml",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672a\u7f16\u8bd1"),(0,a.kt)("li",{parentName:"ul"},"unix socket"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a Device, \u5219\u4e3a /var/run/NETNAME.umlsocket"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u7b49\u5f85\u592a\u6e56\u8fde\u63a5\u8be5 socket"))),(0,a.kt)("li",{parentName:"ul"},"vde",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672a\u7f16\u8bd1"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 libvdeplug \u8fde\u63a5 vde \u4ea4\u6362\u673a, \u4f7f\u7528 unix socket \u6216 /var/run/vde.ctl"))),(0,a.kt)("li",{parentName:"ul"},"tun"),(0,a.kt)("li",{parentName:"ul"},"tunnohead",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5730\u5740\u5934"))),(0,a.kt)("li",{parentName:"ul"},"tunifhead",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6709\u5730\u5740\u5934"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 ipv4 \u548c ipv6"))),(0,a.kt)("li",{parentName:"ul"},"utun",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"macOS"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 ipv4 \u548c ipv6"))),(0,a.kt)("li",{parentName:"ul"},"tap",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Switch"),(0,a.kt)("li",{parentName:"ul"},"\u5305\u5e26 Ethernet \u5934")))))}w.isMDXComponent=!0}}]);