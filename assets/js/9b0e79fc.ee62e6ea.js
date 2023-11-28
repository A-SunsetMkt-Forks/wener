"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10537],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?l.createElement(k,s(s({ref:t},u),{},{components:n})):l.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return w},default:function(){return g},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return b}});var l=n(49613),a=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>r(e,s(t)),d=(e,t)=>{var n={};for(var l in e)o.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&i)for(var l of i(e))t.indexOf(l)<0&&p.call(e,l)&&(n[l]=e[l]);return n};const k={title:"WSL"},w="WSL",h={unversionedId:"os/windows/wsl",id:"os/windows/wsl",title:"WSL",description:"- WSL2 \u4e3a\u5b8c\u6574\u865a\u62df\u673a - kernel+rootfs",source:"@site/../notes/os/windows/wsl.md",sourceDirName:"os/windows",slug:"/os/windows/wsl",permalink:"/notes/os/windows/wsl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/windows/wsl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684216634,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"WSL"},sidebar:"docs",previous:{title:"Windows Remote Management",permalink:"/notes/os/windows/winrm"},next:{title:"\u7406\u5ff5",permalink:"/notes/philosophy/"}},f={},b=[{value:"\u542f\u7528 WSL \u529f\u80fd",id:"enable-wsl",level:2},{value:"\u5b89\u88c5 Alpine",id:"install-alpine",level:2},{value:"Windows \u5f00\u53d1\u73af\u5883",id:"windows-dev",level:2},{value:"IntelliJ",id:"intellij",level:2},{value:"\u5f00\u53d1\u73af\u5883\u51c6\u5907",id:"\u5f00\u53d1\u73af\u5883\u51c6\u5907",level:2},{value:"\u7aef\u53e3\u66b4\u9732",id:"\u7aef\u53e3\u66b4\u9732",level:2},{value:"Docker \u73af\u5883",id:"docker-\u73af\u5883",level:2},{value:"WSL vs WSL2",id:"wsl-vs-wsl2",level:2},{value:"\u9002\u7528\u4e8e Linux \u7684 Windows \u5b50\u7cfb\u7edf\u5b9e\u4f8b\u5df2\u7ec8\u6b62",id:"\u9002\u7528\u4e8e-linux-\u7684-windows-\u5b50\u7cfb\u7edf\u5b9e\u4f8b\u5df2\u7ec8\u6b62",level:2},{value:"\u5141\u8bb8\u5916\u9762\u8bbf\u95ee\u7aef\u53e3",id:"\u5141\u8bb8\u5916\u9762\u8bbf\u95ee\u7aef\u53e3",level:2},{value:"\u7cfb\u7edf\u627e\u4e0d\u5230\u6307\u5b9a\u8def\u5f84",id:"\u7cfb\u7edf\u627e\u4e0d\u5230\u6307\u5b9a\u8def\u5f84",level:2},{value:"\u8fc1\u79fb",id:"\u8fc1\u79fb",level:2},{value:"\u68c0\u6d4b\u662f\u5426\u8fd0\u884c\u5728 WSL",id:"\u68c0\u6d4b\u662f\u5426\u8fd0\u884c\u5728-wsl",level:2},{value:"The Windows Subsystem for Linux has not been enabled.",id:"the-windows-subsystem-for-linux-has-not-been-enabled",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u540d",id:"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u540d",level:2}],N={toc:b},v="wrapper";function g(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,l.kt)(v,c(m(m({},N),a),{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",m({},{id:"wsl"}),"WSL"),(0,l.kt)("admonition",m({},{type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"WSL2 \u4e3a\u5b8c\u6574\u865a\u62df\u673a - kernel+rootfs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8de8 OS FS \u6027\u80fd\u4e0d\u592a\u597d - ",(0,l.kt)("strong",{parentName:"li"},"\u5efa\u8bae\u9879\u76ee\u76f4\u63a5\u653e\u5230 VM \u91cc")),(0,l.kt)("li",{parentName:"ul"},"vsc \u548c jetbrain \u652f\u6301\u76f4\u63a5\u6253\u5f00 wsl \u91cc fs"))),(0,l.kt)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e macOS \u4e0b\u7684 ",(0,l.kt)("a",m({parentName:"li"},{href:"/notes/os/virt/lima"}),"lima")),(0,l.kt)("li",{parentName:"ul"},"\u7ea6\u7b49\u4e8e ",(0,l.kt)("a",m({parentName:"li"},{href:"/notes/os/virt/firecracker"}),"firecracker")," \u6548\u679c"),(0,l.kt)("li",{parentName:"ul"},"WSL2 \u5185\u670d\u52a1\u9700\u8981 portproxy \u624d\u80fd\u88ab\u5916\u90e8\u8bbf\u95ee",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NIC Bridge mode ",(0,l.kt)("a",m({parentName:"li"},{href:"https://github.com/microsoft/WSL/issues/4150"}),"#4150")))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863 ",(0,l.kt)("a",m({parentName:"li"},{href:"https://learn.microsoft.com/en-us/windows/wsl/"}),"https://learn.microsoft.com/en-us/windows/wsl/")),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6d4f\u89c8\u5668\u53ef\u76f4\u63a5 \u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"\\\\wsl$\\<DISTRO>")),(0,l.kt)("li",{parentName:"ul"},"Windows 10 2004",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ms-settings:windowsupdate"))),(0,l.kt)("li",{parentName:"ul"},"WSL2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Windows 10 v1903 b18362"),(0,l.kt)("li",{parentName:"ul"},"Windows 11 v18362")))),(0,l.kt)("h2",m({},{id:"enable-wsl"}),"\u542f\u7528 WSL \u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5b89\u88c5 Windows WSL2 Update\n",(0,l.kt)("a",m({parentName:"li"},{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"}),"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bf4\u660e\u6587\u6863 ",(0,l.kt)("a",m({parentName:"li"},{href:"https://aka.ms/wsl2kernel"}),"https://aka.ms/wsl2kernel"))))),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cmd.exe /c ver # \u786e\u8ba4\u5f53\u524d\u7cfb\u7edf\u7248\u672c\n\n# \u542f\u7528 WSL\ndism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\n# \u542f\u7528 VM\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n\n# \u91cd\u542f\uff0c\u5b89\u88c5 Windows WSL2 Update\n\n# \u8bbe\u7f6e\u9ed8\u8ba4 WSL 2\nwsl --set-default-version 2\n")),(0,l.kt)("h2",m({},{id:"install-alpine"}),"\u5b89\u88c5 Alpine"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5b89\u88c5 Alpine ",(0,l.kt)("a",m({parentName:"li"},{href:"https://github.com/yuk7/AlpineWSL/releases/download/3.16.0-0/Alpine.zip"}),"https://github.com/yuk7/AlpineWSL/releases/download/3.16.0-0/Alpine.zip"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u653e\u5230\u7a7a\u95f4\u8f83\u5927\u7684\u4f4d\u7f6e")))),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'wslconfig /list              # \u6240\u6709\u7684 VM\nwslconfig /setdefault Alpine # \u8bbe\u7f6e Alpine \u4e3a\u9ed8\u8ba4\n\nwsl -d Alpine # \u8fdb\u5165 Alpine VM\n\n# \u914d\u7f6e\u7cfb\u7edf\ncat << EOF > /etc/apk/repositories\nhttps://mirrors.sjtug.sjtu.edu.cn/alpine/v3.17/main\nhttps://mirrors.sjtug.sjtu.edu.cn/alpine/v3.17/community\nEOF\necho "nameserver 114.114.114.114" > /etc/resolv.conf\napk update\napk upgrade -a\n')),(0,l.kt)("h2",m({},{id:"windows-dev"}),"Windows \u5f00\u53d1\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u7528 ",(0,l.kt)("a",m({parentName:"li"},{href:"https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701"}),"Windows Terminal"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 \u591a Tab"),(0,l.kt)("li",{parentName:"ul"},"\u4ed3\u5e93 ",(0,l.kt)("a",m({parentName:"li"},{href:"https://github.com/microsoft/terminal"}),"microsoft/terminal")))),(0,l.kt)("li",{parentName:"ul"},"VSC ",(0,l.kt)("a",m({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl"}),"WSL")," \u6269\u5c55"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://github.com/microsoft/WSL"}),"microsoft/WSL"),"\n\u95ee\u9898\u6536\u96c6\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://github.com/microsoft/WSL2-Linux-Kernel"}),"microsoft/WSL2-Linux-Kernel"),"\n\u5b9e\u9645 Linux \u5185\u6838")))),(0,l.kt)("h2",m({},{id:"intellij"}),"IntelliJ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Terminal \u76f4\u63a5\u8fdb\u5165 WSL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e Terminal \u4e3a wsl.exe -d Alpine"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"\\\\wsl$")," \u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/how-to-use-wsl-development-environment-in-product.html"}),"https://www.jetbrains.com/help/idea/how-to-use-wsl-development-environment-in-product.html"))),(0,l.kt)("h2",m({},{id:"\u5f00\u53d1\u73af\u5883\u51c6\u5907"}),"\u5f00\u53d1\u73af\u5883\u51c6\u5907"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"wsl -d Alpine # \u8fdb\u5165 WSL\n\napk add openssh make rsync bash # \u57fa\u7840\u4f9d\u8d56\n# \u5f00\u53d1\u76f8\u5173\u4f9d\u8d56\napk add libc6-compat gcompat curl bash ca-certificates openssl ncurses coreutils python3 make gcc g++ libgcc linux-headers grep util-linux binutils findutils\n\nbash # ash -> bash\n\n\n# SSH \u914d\u7f6e\n# \u540c\u6b65 Windows \u4e0a\u7684 ssh \u5bc6\u94a5\u4fe1\u606f\nUSERNAME=$(/mnt/c/Windows/System32/cmd.exe /c 'echo %USERNAME%' | sed -e 's/\\r//g')\nrsync -a /mnt/c/Users/USERNAME/.ssh/ ~/.ssh/\nchmod 700 ~/.ssh/id_rsa\n# \u540c\u6b65 Windows \u4e0a\u7684 git \u914d\u7f6e\ncp /mnt/c/Users/USERNAME/.gitconfig ~\n\n\n# Git \u914d\u7f6e\n# \u6ce8\u610f\u4fee\u6539\u7528\u6237\u540d\u548c\u90ae\u7bb1\ngit config --global user.name \"Author Name\"\ngit config --global user.email \"email@address.com\"\n\n# NodeJS\ncurl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n\nchmod u+x n\n# install -t /usr/local/bin n\nN_NODE_MIRROR=https://npmmirror.com/mirrors/node-unofficial-builds ./n --arch x64-musl lts\n\n# PHP \u73af\u5883\napk --no-cache add php81 php81-{bcmath,bz2,calendar,common,ctype,curl,dev,dba,dom,embed,enchant,exif,fileinfo,fpm,ftp,gd,gettext,gmp,iconv,imap,intl,json,ldap,mbstring,mysqli,mysqlnd,odbc,opcache,openssl,pcntl,pdo,pdo_dblib,pdo_mysql,pdo_odbc,pdo_pgsql,pdo_sqlite,pear,pgsql,phar,phpdbg,posix,pspell,session,shmop,simplexml,snmp,soap,sockets,sqlite3,sysvmsg,sysvsem,sysvshm,tidy,tokenizer,xml,xmlreader,xmlwriter,xsl,zip,zlib}\nln -s /usr/bin/php81 /usr/bin/php\n")),(0,l.kt)("h2",m({},{id:"\u7aef\u53e3\u66b4\u9732"}),"\u7aef\u53e3\u66b4\u9732"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u90fd\u9700\u8981"),(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981 Admin \u6267\u884c"))),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-batch",metastring:'title="cmd"',title:'"cmd"'}),"start C:\\Windows\\system32\n; \u53f3\u952e\u7ba1\u7406\u5458\u8fd0\u884c cmd.exe\n\n; \u67e5\u770b IP \u5730\u5740\nwsl -d Alpine ifconfig eth0\n; \u6620\u5c04 8000 \u5230 WSL\nnetsh interface portproxy set v4tov4 listenport=8000 listenaddress=0.0.0.0 connectport=8000 connectaddress=\u4e0a\u9762\u7684\u5730\u5740\n")),(0,l.kt)("h2",m({},{id:"docker-\u73af\u5883"}),"Docker \u73af\u5883"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981 Docker Desktop")),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'apk add docker openrc\ntee /etc/docker/daemon.json <<- \'EOF\'\n{\n  "builder": {\n    "gc": {\n      "defaultKeepStorage": "20GB",\n      "enabled": true\n    }\n  },\n  "experimental": false,\n  "features": {\n    "buildkit": true\n  },\n  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]\n}\nEOF\n\nrc-update add docker default\nopenrc default\n\ndocker ps\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker Desktop \u521b\u5efa\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"docker-desktop"),(0,l.kt)("li",{parentName:"ul"},"docker-desktop-data")))),(0,l.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://learn.microsoft.com/en-us/windows/wsl/troubleshooting"}),"https://learn.microsoft.com/en-us/windows/wsl/troubleshooting"))),(0,l.kt)("h2",m({},{id:"wsl-vs-wsl2"}),"WSL vs WSL2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WSL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u975e\u5168\u865a\u62df\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c FS - \u8de8 OS FS \u66f4\u5feb"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bbf\u95ee USB \u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7f51\u7edc\u7a7a\u95f4"))),(0,l.kt)("li",{parentName:"ul"},"WSL2 - Windows 11, Windows 10 v1903+,b18362+",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6574 Linux \u5185\u6838"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6574 syscall \u517c\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u8de8 OS FS \u6027\u80fd\u5dee\u4e00\u70b9 - \u5efa\u8bae\u76f4\u63a5\u653e\u5230 VM \u91cc"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u66f4\u591a\u5185\u5b58 - linux \u5185 cache \u4e0d\u4f1a free \u90a3\u4e48\u5feb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://learn.microsoft.com/en-us/windows/wsl/compare-versions"}),"https://learn.microsoft.com/en-us/windows/wsl/compare-versions")),(0,l.kt)("li",{parentName:"ul"},"winver")),(0,l.kt)("h2",m({},{id:"\u9002\u7528\u4e8e-linux-\u7684-windows-\u5b50\u7cfb\u7edf\u5b9e\u4f8b\u5df2\u7ec8\u6b62"}),"\u9002\u7528\u4e8e Linux \u7684 Windows \u5b50\u7cfb\u7edf\u5b9e\u4f8b\u5df2\u7ec8\u6b62"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"#\nnetsh wincosk reset\n# \u91cd\u542f\u670d\u52a1 HV Host Service\n#\nnet stop LxssManager\nnet start LxssManager\n")),(0,l.kt)("h2",m({},{id:"\u5141\u8bb8\u5916\u9762\u8bbf\u95ee\u7aef\u53e3"}),"\u5141\u8bb8\u5916\u9762\u8bbf\u95ee\u7aef\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"netsh interface portproxy set v4tov4 listenport=8000 listenaddress=0.0.0.0 connectport=8000 connectaddress=$(wsl hostname -I)\n\nwsl hostname -I             # \u8fd4\u56de disto \u7684 IP \u5730\u5740\nwsl -d Alpine ifconfig eth0 # \u540c\u7406\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://github.com/microsoft/WSL/issues/4150"}),"https://github.com/microsoft/WSL/issues/4150"))),(0,l.kt)("h2",m({},{id:"\u7cfb\u7edf\u627e\u4e0d\u5230\u6307\u5b9a\u8def\u5f84"}),"\u7cfb\u7edf\u627e\u4e0d\u5230\u6307\u5b9a\u8def\u5f84"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"wsl --list --all --verbose\n")),(0,l.kt)("p",null,"\u5e94\u8be5\u662f\u5b89\u88c5\u7684 \u955c\u50cf\u4f4d\u7f6e\u53d1\u751f\u4e86\u53d8\u5316\u6216\u8005\u88ab\u5220\u9664"),(0,l.kt)("h2",m({},{id:"\u8fc1\u79fb"}),"\u8fc1\u79fb"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"wsl --export\nwsl --import\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Lxss")),(0,l.kt)("h2",m({},{id:"\u68c0\u6d4b\u662f\u5426\u8fd0\u884c\u5728-wsl"}),"\u68c0\u6d4b\u662f\u5426\u8fd0\u884c\u5728 WSL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/proc/sys/kernel/osrelease"),(0,l.kt)("li",{parentName:"ul"},"/proc/version"),(0,l.kt)("li",{parentName:"ul"},"Microsoft, WSL")),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"uname -a\n")),(0,l.kt)("h2",m({},{id:"the-windows-subsystem-for-linux-has-not-been-enabled"}),"The Windows Subsystem for Linux has not been enabled."),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{}),"ERR: The Windows Subsystem for Linux has not been enabled.\nHRESULT: 0x8007019e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dism \u542f\u7528\u529f\u80fd\uff0c\u7136\u540e\u91cd\u542f")),(0,l.kt)("h2",m({},{id:"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u540d"}),"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-shell"}),'powershell.exe \'$env:UserName\'\ncmd.exe /c "echo %USERNAME%"\ncmd.exe /c "whoami"\n')))}g.isMDXComponent=!0}}]);