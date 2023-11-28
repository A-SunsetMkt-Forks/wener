"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75463],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return N},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const d={title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6"},N="Tools",h={unversionedId:"network/tool/README",id:"network/tool/README",title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6",description:"iproute2",source:"@site/../notes/network/tool/README.md",sourceDirName:"network/tool",slug:"/network/tool/",permalink:"/notes/network/tool/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/network/tool/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6"},sidebar:"docs",previous:{title:"\u79c1\u6709\u7f51\u7edc",permalink:"/notes/network/private/"},next:{title:"ifconfig",permalink:"/notes/network/tool/ifconfig"}},g={},f=[{value:"iproute2",id:"iproute2",level:2},{value:"net-tools",id:"net-tools",level:2},{value:"ethtool",id:"ethtool",level:2},{value:"aria2c",id:"aria2c",level:2},{value:"OpenSSL Tunnel",id:"openssl-tunnel",level:3},{value:"curl",id:"curl",level:2},{value:"wget",id:"wget",level:2},{value:"httpie",id:"httpie",level:2},{value:"kcptun",id:"kcptun",level:2}],b={toc:f},v="wrapper";function y(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(v,c(m(m({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"tools"}),"Tools"),(0,a.kt)("h2",m({},{id:"iproute2"}),"iproute2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contents ",(0,a.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=v3.6&name=iproute2&arch=x86_64&repo=main"}),"iproute2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.cyberciti.biz/tips/linux-investigate-sockets-network-connections.html"}),"ss cheatsheet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Display Linux TCP / UDP Network and Socket Information")))),(0,a.kt)("h2",m({},{id:"net-tools"}),"net-tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://sourceforge.net/projects/net-tools/"}),"https://sourceforge.net/projects/net-tools/")),(0,a.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u6bd4\u8f83\u8001\u4e86, \u4e0d\u63a8\u8350\u4f7f\u7528")),(0,a.kt)("h2",m({},{id:"ethtool"}),"ethtool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://linux.die.net/man/8/ethtool"}),"ethtool.8")),(0,a.kt)("li",{parentName:"ul"},"query or control network driver and hardware settings")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"ethtool eth0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"Settings for eth0:\n    Supported ports: [ TP ]\n    Supported link modes:   10baseT/Half 10baseT/Full\n                            100baseT/Half 100baseT/Full\n                            1000baseT/Full\n    Supported pause frame use: No\n    Supports auto-negotiation: Yes\n    Advertised link modes:  10baseT/Half 10baseT/Full\n                            100baseT/Half 100baseT/Full\n                            1000baseT/Full\n    Advertised pause frame use: No\n    Advertised auto-negotiation: Yes\n    Speed: 100Mb/s\n    Duplex: Full\n    Port: Twisted Pair\n    PHYAD: 1\n    Transceiver: internal\n    Auto-negotiation: on\n    MDI-X: off\n    Supports Wake-on: g\n    Wake-on: d\n    Link detected: yes\n")),(0,a.kt)("h2",m({},{id:"aria2c"}),"aria2c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://aria2.github.io/manual/en/html/aria2c.html"}),"https://aria2.github.io/manual/en/html/aria2c.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/aria2/aria2"}),"https://github.com/aria2/aria2"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u6587\u4ef6\u4f5c\u4e3a\u4e0b\u8f7d\u5217\u8868\n# \u6700\u5927\u5e76\u53d1 16\n# \u9ed8\u8ba4\u7ee7\u7eed\u4e0b\u8f7d\n# \u5355\u4e2a\u670d\u52a1\u6700\u591a 16 \u4e2a\u94fe\u63a5\n# \u91cd\u8bd5\u6b21\u6570 0, \u5ffd\u7565 404\naria2c -i list.txt -j 16 -c -x 16 -m 0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://aria2c.com/"}),"http://aria2c.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://aria2c.com/usage.html"}),"http://aria2c.com/usage.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ziahamza/webui-aria2"}),"https://github.com/ziahamza/webui-aria2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mayswind/AriaNg"}),"https://github.com/mayswind/AriaNg"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"dir=.\ncontinue=true\nmax-connection-per-server=5\nmin-split-size=10M\n\ninput-file=aria2.session\nsave-session=aria2.session\n\nenable-rpc=true\nrpc-allow-origin-all=true\nrpc-listen-all=true\nrpc-listen-port=6800\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"touch aria2.session\naria2c --conf-path=$PWD/aria2.conf\n")),(0,a.kt)("h3",m({},{id:"openssl-tunnel"}),"OpenSSL Tunnel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://www.dest-unreach.org/socat/doc/socat-openssltunnel.html"}),"openssltunnel"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u751f\u6210\u670d\u52a1\u5668\u7aef\u7b7e\u540d\nFILENAME=server\nopenssl genrsa -out $FILENAME.key 1024\nopenssl req -new -key $FILENAME.key -x509 -days 3653 -out $FILENAME.crt -subj "/C=CN/ST=Wener/L=ShangHai/O=None/CN=hello"\ncat $FILENAME.key $FILENAME.crt > $FILENAME.pem\nchmod 600 $FILENAME.key $FILENAME.pem\n\n# \u751f\u6210\u5ba2\u6237\u7aef\u7b7e\u540d\nFILENAME=client\nopenssl genrsa -out $FILENAME.key 1024\nopenssl req -new -key $FILENAME.key -x509 -days 3653 -out $FILENAME.crt -subj "/C=CN/ST=Wener/L=ShangHai/O=None/CN=hello"\ncat $FILENAME.key $FILENAME.crt > $FILENAME.pem\nchmod 600 $FILENAME.key $FILENAME.pem\n\n# \u542f\u52a8\u670d\u52a1\u7aef\nsocat openssl-listen:4433,reuseaddr,cert=$PWD/server.pem,cafile=$PWD/client.crt echo\n\n# \u542f\u52a8\u5ba2\u6237\u7aef\nsocat stdio openssl-connect:localhost:4433,cert=$PWD/client.pem,cafile=$PWD/server.crt\n# \u5982\u679c\u51fa\u73b0\u5f02\u5e38 2016/12/15 17:49:50 socat[8259] E certificate is valid but its commonName does not match hostname\n# \u53ef\u4f7f\u7528 verify=0 \u5173\u95ed\u9a8c\u8bc1\n# \u6216\u8005\u6dfb\u52a0 commonname\nsocat stdio openssl-connect:localhost:4433,cert=$PWD/client.pem,cafile=$PWD/server.crt,commonname=hello\n\n# \u901a\u8fc7 SSL \u8f6c\u53d1 DNS\n# \u670d\u52a1\u7aef\u76d1\u542c 1053\nsocat openssl-listen:1053,fork,reuseaddr,cert=$PWD/server.pem,cafile=$PWD/client.crt UDP:8.8.8.8:53\n# \u5ba2\u6237\u7aef\u8fde\u63a5\u670d\u52a1\u7aef\u7684 1053\nsudo socat UDP-RECVFROM:53,fork,reuseaddr openssl-connect:SERVER:1053,cert=$PWD/client.pem,cafile=$PWD/server.crt\n')),(0,a.kt)("h2",m({},{id:"curl"}),"curl"),(0,a.kt)("h2",m({},{id:"wget"}),"wget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.gnu.org/software/wget/manual/wget.html"}),"GNU Wget Manual")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-e robots=off"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5ffd\u7565 robot.txt"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-np"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"--no-parent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8bbf\u95ee\u4e0a\u7ea7"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-N"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"--timestamping"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8bbf\u95ee\u66f4\u65b0\u7684"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-nc"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"--no-clobber"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4e0b\u8f7d\u5df2\u5b58\u5728\u5c06\u88ab\u8986\u76d6\u7684\u6587\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-q"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"--quiet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b89\u9759\u6a21\u5f0f")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u77ed\u9009\u9879"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u957f\u9009\u9879"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"2.5 \u4e0b\u8f7d\u9009\u9879")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--limit-rate=amount")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u9650\u901f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u76ee\u5f55\u9009\u9879")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-P")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--directory-prefix")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5b58\u50a8\u6587\u4ef6\u5230\u524d\u7f00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-nH")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--no-host-directories")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0d\u521b\u5efa\u4e3b\u673a\u524d\u7f00\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-nd")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--no-directories")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0d\u521b\u5efa\u9012\u5f52\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"2.11 \u9012\u5f52\u4e0b\u8f7d\u9009\u9879")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-r")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--recursive")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u9012\u5f52, \u9ed8\u8ba4\u6700\u5927\u6df1\u5ea6\u4e3a 5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-l depth")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--level=depth")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6307\u5b9a\u6700\u5927\u9012\u5f52\u6df1\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-m")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--mirror")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u955c\u50cf, \u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"td"},"-r -N -l inf --no-remove-listing"))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"wget -rN --no-parent -e robots=off -P /some/where http://some.site\n# \u955c\u50cf\u7ad9\u70b9\nwget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://example.org\nwget -mkEpnp http://example.org\n")),(0,a.kt)("h2",m({},{id:"httpie"}),"httpie"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://daniel.haxx.se/docs/curl-vs-httpie.html"}),"https://daniel.haxx.se/docs/curl-vs-httpie.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/jakubroztocil/httpie"}),"https://github.com/jakubroztocil/httpie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://curl2httpie.online/"}),"http://curl2httpie.online/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://httpie.org/"}),"https://httpie.org/"))),(0,a.kt)("h2",m({},{id:"kcptun"}),"kcptun"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/xtaci/kcptun"}),"https://github.com/xtaci/kcptun")),(0,a.kt)("li",{parentName:"ul"},"ssh client <---\x3e kcptun client <---\x3e kcptun server <----\x3e ssh server")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Alpine\ndocker run -d --name tmp xtaci/kcptun\ndocker cp tmp:/bin/client kcptun-client\ndocker cp tmp:/bin/server kcptun-server\ndocker rm -f tmp\n\n# App <-> Target Client(9003/tcp) <-> KCP Client <-> KCP Server(9002/udp) <-> Target Server(9001/tcp)\n# \u76ee\u6807 9001 \u76d1\u542c 9002\n./kcptun-server -key $KEY -t "127.0.0.1:9001" -l ":9002" -mode fast2\n# \u76ee\u6807 9002 \u76d1\u542c 9003\n./kcptun-client -key $KEY -r "127.0.0.1:9002" -l ":9003" -mode fast2\n')))}y.isMDXComponent=!0}}]);