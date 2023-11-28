"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27834],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var i=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?i.createElement(v,a(a({ref:t},c),{},{components:r})):i.createElement(v,a({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38799:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return g}});var i=r(49613),n=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,a(t)),d=(e,t)=>{var r={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&p.call(e,i)&&(r[i]=e[i]);return r};const v={title:"Virtio"},f=void 0,h={unversionedId:"os/virt/virtio",id:"os/virt/virtio",title:"Virtio",description:"Virtio",source:"@site/../notes/os/virt/virtio.md",sourceDirName:"os/virt",slug:"/os/virt/virtio",permalink:"/notes/os/virt/virtio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/virtio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1648327879,formattedLastUpdatedAt:"Mar 26, 2022",frontMatter:{title:"Virtio"},sidebar:"docs",previous:{title:"\u5d4c\u5957\u865a\u62df\u5316",permalink:"/notes/os/virt/nested"},next:{title:"virtio-fs",permalink:"/notes/os/virt/virtiofs"}},k={},g=[{value:"Virtio",id:"virtio",level:2},{value:"ref",id:"ref",level:2}],b={toc:g},w="wrapper";function y(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,i.kt)(w,u(m(m({},b),n),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",m({},{id:"virtio"}),"Virtio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"virtio-net",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e2d\u65ad\u548c DMA \u6280\u672f\u5b9e\u73b0\u7684 PCI \u8bbe\u5907"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 lspci \u67e5\u770b\u4fe1\u606f - Red Hat, Inc Virtio network device"))),(0,i.kt)("li",{parentName:"ul"},"virtio-blk",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/sys/block/vda"))),(0,i.kt)("li",{parentName:"ul"},"virtio-scsi"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://virtio-fs.gitlab.io/"}),"virtio-fs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"9p"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://blogs.oracle.com/linux/how-to-emulate-block-devices-with-qemu"}),"https://blogs.oracle.com/linux/how-to-emulate-block-devices-with-qemu")),(0,i.kt)("li",{parentName:"ul"},"virtio-balloon",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://github.com/qemu/qemu/blob/master/docs/virtio-balloon-stats.txt"}),"virtio-balloon-stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://pmhahn.github.io/virtio-balloon/"}),"https://pmhahn.github.io/virtio-balloon/")))),(0,i.kt)("li",{parentName:"ul"},"virtio-serial-pci"),(0,i.kt)("li",{parentName:"ul"},"virtio-balloon-pci"),(0,i.kt)("li",{parentName:"ul"},"virtio-blk -drive file=disk.img,if=virtio"),(0,i.kt)("li",{parentName:"ul"},"virtio-scsi-pci -device virtio-scsi-pci -drive file=disk.img,if=none,id=hd0 -device scsi-hd,drive=hd0")),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"qemu-system-x86_64 \\\n# vda - \u5b58\u50a8\n-drive file=alpine.qcow2,if=virtio \\\n# \u7f51\u7edc\n-netdev user,id=user.0,hostfwd=tcp::4287-:22 \\\n-device virtio-net,netdev=user.0\n\n# PCI 10 GbE virtio-net-pci\n-net nic,model=virtio\n\n# libvirt <memballoon model='virtio' autodeflate='on'>\n-device virtio-balloon,deflate-on-oom=on\n\n# Linux AIO\n-drive file=disk.qcow2,if=virtio,aio=native,cache.direct=on\n\n# RNG/Random Number Generator\n# =========================\n# \u9ed8\u8ba4\n# \u652f\u6301\u9650\u901f \u4f8b\u5982 512 bytes/s -> max-bytes=512,period=1000\n-device virtio-rng-pci\n# UNIX \u73af\u5883\n-object rng-random,filename=/dev/random,id=rng0\n# \u786c\u4ef6 rng\n-object rng-random,filename=/dev/hwrng,id=rng0\n# \u7f51\u7edc RNG\n-chardev socket,host=10.199.13.151,port=9000,id=chr0 -object rng-egd,chardev=chr0,id=rng0\n")),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-xml"}),"<domain>\n  \x3c!-- \u5355\u7ebf\u7a0b --\x3e\n  <iothreads>1</iothreads>\n  <disk type='file' device='disk'>\n    \x3c!-- \u5355\u7ebf\u7a0b --\x3e\n    <driver name='qemu' type='raw' cache='none' iothread='1'/>\n    \x3c!-- virtio --\x3e\n    <target dev='vda' bus='virtio'/>\n  </disk>\n  <devices>\n    <controller type='scsi' index='0' model='virtio-scsi'>\n      \x3c!-- \u5355\u7ebf\u7a0b --\x3e\n      <driver iothread='1'/>\n    </controller>\n  </devices>\n</domain>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# cluster_size \u63d0\u9ad8\u6027\u80fd\nqemu-img create -f qcow2 -o cluster_size=2M my.qcow2 100G\n\n# \u8bbe\u7f6e cache-size \u63d0\u9ad8\u6027\u80fd\nqemu-system-x86_64 -drive file=my.qcow2,if=none,id=drive0,aio=native,cache=none,cache-size=16M\n\n# mode\n# off - \u4e0d\u9884\u5148\u7533\u8bf7\n# falloc - \u4f7f\u7528 posix_fallocate() \u9884\u7559\u7a7a\u95f4\n# full - \u586b 0 \u9884\u7559\nqemu-img create -f $fmt -o preallocation=$mode test.img 100G\n")),(0,i.kt)("h1",m({},{id:"virtio-fs"}),"virtio-fs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/usr/lib/qemu/virtiofsd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://www.qemu.org/docs/master/interop/virtiofsd.html"}),"virtiofsd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://www.qemu.org/docs/master/interop/virtfs-proxy-helper.html"}),"virtfs-proxy-helper"))),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8 daemon\nvirtiofsd --socket-path=/var/run/vm001-vhost-fs.sock -o source=/var/lib/fs/vm001\n\n# -virtfs local,path=/tank/storage,mount_tag=host0,security_model=passthrough,id=host0\n\n# QEMU\nqemu-system-x86_64 \\\n  -chardev socket,id=char0,path=/var/run/vm001-vhost-fs.sock \\\n  -device vhost-user-fs-pci,chardev=char0,tag=myfs \\\n  -object memory-backend-memfd,id=mem,size=4G,share=on \\\n  -numa node,memdev=mem\n# Guest \u6302\u8f7d\nmount -t virtiofs myfs /mnt\n\n\n# virtfs-proxy-helper\n")),(0,i.kt)("h2",m({},{id:"ref"}),"ref"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"https://www.linux-kvm.org/page/9p_virtio"}),"https://www.linux-kvm.org/page/9p_virtio"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://blog.csdn.net/gatieme/article/details/82912921"}),"https://blog.csdn.net/gatieme/article/details/82912921"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://wiki.libvirt.org/page/Virtio"}),"https://wiki.libvirt.org/page/Virtio"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://www.linux-kvm.org/page/Virtio"}),"https://www.linux-kvm.org/page/Virtio"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"http://wiki.osdev.org/Virtio"}),"http://wiki.osdev.org/Virtio"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://www.ibm.com/developerworks/library/l-virtio/"}),"https://www.ibm.com/developerworks/library/l-virtio/"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://fedoraproject.org/wiki/Windows_Virtio_Drivers"}),"https://fedoraproject.org/wiki/Windows_Virtio_Drivers"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://en.wikibooks.org/wiki/QEMU/Devices/Virtio"}),"https://en.wikibooks.org/wiki/QEMU/Devices/Virtio"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://wiki.qemu.org/Features/VirtioVsock"}),"https://wiki.qemu.org/Features/VirtioVsock"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-virtio/virtio-win.iso"}),"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-virtio/virtio-win.iso"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://cloud.google.com/compute/docs/machine-types#verifying_the_driver_installation"}),"https://cloud.google.com/compute/docs/machine-types#verifying_the_driver_installation"),"\n",(0,i.kt)("a",m({parentName:"p"},{href:"https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf"}),"https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf")),(0,i.kt)("h1",m({},{id:"block-format-raw-does-not-support-the-option-boot"}),"Block format 'raw' does not support the option 'boot'"))}y.isMDXComponent=!0}}]);