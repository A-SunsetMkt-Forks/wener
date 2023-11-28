"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60199],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(k,c(c({ref:e},u),{},{components:n})):a.createElement(k,c({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:r,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30187:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return x},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&u(t,n,e[n]);return t},m=(t,e)=>l(t,c(e)),d=(t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const k={title:"Linux Container",sidebar_title:"LXC",hide_title:!0},f="Linux Container",x={unversionedId:"devops/container/lxc",id:"devops/container/lxc",title:"Linux Container",description:"- lxc package content",source:"@site/../notes/devops/container/lxc.md",sourceDirName:"devops/container",slug:"/devops/container/lxc",permalink:"/notes/devops/container/lxc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/lxc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"Linux Container",sidebar_title:"LXC",hide_title:!0},sidebar:"docs",previous:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"},next:{title:"LXD",permalink:"/notes/devops/container/lxd"}},g={},N=[{value:"\u975e\u7279\u6743 LXC \u914d\u7f6e",id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"lxc",id:"lxc",level:2},{value:"Docker in LXC",id:"docker-in-lxc",level:2},{value:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",level:2}],h={toc:N},b="wrapper";function y(t){var e=t,{components:n}=e,r=d(e,["components"]);return(0,a.kt)(b,m(s(s({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"linux-container"}),"Linux Container"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lxc package ",(0,a.kt)("a",s({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxc&arch=x86_64&repo=main"}),"content")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/lxc/lxc"}),"lxc/lxc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.config/lxc/default.conf")),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"dir - \u9ed8\u8ba4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/var/lib/lxc/container/rootfs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.local/share/lxc/<name>/rootfs")))),(0,a.kt)("li",{parentName:"ul"},"lvm"),(0,a.kt)("li",{parentName:"ul"},"loop"),(0,a.kt)("li",{parentName:"ul"},"btrfs"),(0,a.kt)("li",{parentName:"ul"},"zfs"),(0,a.kt)("li",{parentName:"ul"},"rbd"),(0,a.kt)("li",{parentName:"ul"},"best"))),(0,a.kt)("li",{parentName:"ul"},"man ",(0,a.kt)("a",s({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages//man1/lxc-create.1.html"}),"lxc-create.1")),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"archlinux ",(0,a.kt)("a",s({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Linux_Containers"}),"lxc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://gist.github.com/hack3d/8a3982329e1df77f380878ff7bbc7b03"}),"armhf lxc"))))),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 poweroff \u9000\u51fa init"),(0,a.kt)("li",{parentName:"ul"},"lxc \u53ef\u4ee5\u5d4c\u5957"))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# /usr/share/lxc/templates/lxc-download\n# /lib/security/pam_cgfs.so\napk add lxc shadow-uidmap lxc-bridge lxc-pam lxc-download lxc-templates lxc-templates-oci\n\n# \u542f\u52a8 lxcbr0 - \u9ed8\u8ba4\u7f51\u6bb5\nservice dnsmasq.lxcbr0 start\n\n# \u5df2\u5b89\u88c5 template\nls /usr/share/lxc/templates/\n# \u67e5\u770b\u53c2\u6570\n/usr/share/lxc/templates/lxc-download -h\n\n# https://images.linuxcontainers.org\n# \u4f7f\u7528 tuna \u955c\u50cf\nlxc-create -t download -n alpine-amd64 -- -d alpine -r 3.12 -a amd64 --server mirrors.tuna.tsinghua.edu.cn/lxc-images\n# \u524d\u53f0\u542f\u52a8\n# -d \u540e\u53f0\u542f\u52a8\nlxc-start -n alpine-amd64 -F\n# \u542f\u52a8\u4e00\u4e2a shell\nlxc-attach -n alpine-amd64\n\n# \u67e5\u770b\u8fd0\u884c\u7684\u5bb9\u5668\nlxc-ls --fancy\n# \u505c\u6b62\u5bb9\u5668\nlxc-stop -n alpine-amd64\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"command"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-attach"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"start a process inside a running container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-autostart"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"start/stop/kill auto-started containers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-cgroup"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"manage the control group associated with a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-checkconfig"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"check the current kernel for lxc support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-checkpoint"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"checkpoints and restores containers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-config"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"query LXC system configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-console"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Launch a console for the specified container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-copy"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"copy an existing container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-create"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"creates a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-destroy"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"destroy a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-device"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"manage devices of running containers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-execute"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"run an application inside a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-freeze"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"freeze all the container's processes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-info"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"query information about a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-ls"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"list the containers existing on the system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-monitor"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"monitor the container state")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-snapshot"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Snapshot an existing container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-start"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"run an application inside a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-stop"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"stop the application running inside a container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-top"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"monitor container statistics")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-unfreeze"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"thaw all the container's processes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-unshare"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Run a task in a new set of namespaces")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-update-config"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"update a legacy pre LXC 2.1 configuration file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-usernsexec"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Run a task as root in a new user namespace")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lxc-wait"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"wait for a specific container state")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"modprobe configs\nlxc-checkconfig\n# \u68c0\u6d4b\u5176\u4ed6 kernel \u914d\u7f6e\nCONFIG=/boot/config-lts /usr/bin/lxc-checkconfig\n\n# \u6240\u6709\u914d\u7f6e\nlxc-config -l\n# \u9ed8\u8ba4\u914d\u7f6e\n# $HOME/.config/lxc/default.conf\nlxc-config lxc.default_config\n# \u8def\u5f84\u4f4d\u7f6e\n# $HOME/.local/share/lxc\nlxc-config lxc.lxcpath\n\nlxc-attach -n container -- /etc/init.d/cron restart\n")),(0,a.kt)("h2",s({},{id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e"}),"\u975e\u7279\u6743 LXC \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# sudo usermod -v 100000-200000 -w 100000-200000 $USER\necho "session    optional   pam_cgfs.so -c freezer,memory,name=systemd,unified" >> /etc/pam.d/system-login\n# echo "lxc.idmap = u 0 100000 65536" >> /etc/lxc/default.conf\n# echo "lxc.idmap = g 0 100000 65536" >> /etc/lxc/default.conf\n\necho root:100000:65536 | sudo tee -a /etc/subuid\necho root:100000:65536 | sudo tee -a /etc/subgid\n\nmkdir -p ~/.config/lxc\n\n# \u5305\u542b\u5168\u5c40\u914d\u7f6e\u53ef\u4ee5\u5c11\u914d\u7f6e\u4e00\u4e9b\necho "lxc.include = /etc/lxc/default.conf" > ~/.config/lxc/default.conf\n\necho "lxc.idmap = u 0 100000 65536" > ~/.config/lxc/default.conf\necho "lxc.idmap = g 0 100000 65536" >> ~/.config/lxc/default.conf\necho "lxc.net.0.type = veth" >> ~/.config/lxc/default.conf\necho "lxc.net.0.link = lxcbr0" >> ~/.config/lxc/default.conf\n\necho "$USER veth lxcbr0 2" | sudo tee -a /etc/lxc/lxc-usernet\n')),(0,a.kt)("h2",s({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.conf.5.html"}),"lxc.conf.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.container.conf.5.html"}),"lxc.container.conf.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages//man5/lxc.system.conf.5.html"}),"lxc.system.conf.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc-usernet.5.html"}),"lxc-usernet.5"))),(0,a.kt)("h2",s({},{id:"lxc"}),"lxc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man7/lxc.7.html"}),"lxc.7"))),(0,a.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",s({},{id:"docker-in-lxc"}),"Docker in LXC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://stackoverflow.com/a/25885682/1870054"}),"https://stackoverflow.com/a/25885682/1870054"))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ini"}),"lxc.apparmor.profile = lxc-container-default-with-nesting\n")),(0,a.kt)("h2",s({},{id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"}),"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5347\u7ea7\u914d\u7f6e\nlxc-update-config -c ~/.local/share/lxc/alpine-amd64/config\n")))}y.isMDXComponent=!0}}]);