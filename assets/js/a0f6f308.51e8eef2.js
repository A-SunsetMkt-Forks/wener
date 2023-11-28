"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19036],{49613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(t),h=o,f=u["".concat(s,".").concat(h)]||u[h]||i[h]||p;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,c=new Array(p);c[0]=h;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var d=2;d<p;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},41262:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return g}});var r=t(49613),o=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&l(e,t,n[t]);if(a)for(var t of a(n))d.call(n,t)&&l(e,t,n[t]);return e},i=(e,n)=>p(e,c(n)),h=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const f={id:"ceph-ubuntu-16-install",title:"Ubuntu 16.04 \u5b89\u88c5 Ceph"},b="Ubuntu 16.04 \u5b89\u88c5 Ceph",y={unversionedId:"service/storage/ceph/ceph-ubuntu-16-install",id:"service/storage/ceph/ceph-ubuntu-16-install",title:"Ubuntu 16.04 \u5b89\u88c5 Ceph",description:"- Configure Ceph Cluster on Ubuntu 16.04",source:"@site/../notes/service/storage/ceph/ceph-ubuntu-16-install.md",sourceDirName:"service/storage/ceph",slug:"/service/storage/ceph/ubuntu-16-install",permalink:"/notes/service/storage/ceph/ubuntu-16-install",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/ceph/ceph-ubuntu-16-install.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1631970678,formattedLastUpdatedAt:"Sep 18, 2021",frontMatter:{id:"ceph-ubuntu-16-install",title:"Ubuntu 16.04 \u5b89\u88c5 Ceph"},sidebar:"docs",previous:{title:"Ceph Kubernetes",permalink:"/notes/service/storage/ceph/k8s"},next:{title:"filebrowser",permalink:"/notes/service/storage/client/filebrowser"}},m={},g=[],v={toc:g},O="wrapper";function w(e){var n=e,{components:t}=n,o=h(n,["components"]);return(0,r.kt)(O,i(u(u({},v),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"ubuntu-1604-\u5b89\u88c5-ceph"}),"Ubuntu 16.04 \u5b89\u88c5 Ceph"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.server-world.info/en/note?os=Ubuntu_16.04&p=ceph"}),"Configure Ceph Cluster on Ubuntu 16.04")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://docs.ceph.com/docs/master/start/quick-ceph-deploy/"}),"Quick Ceph Deploy"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u51c6\u5907\u673a\u5668 node-1 node-2 node-3 node-4\n# mon \u8282\u70b9  node-2, node-4\n# admin \u8282\u70b9 node-1\n# \u6bcf\u4e2a\u8282\u70b9\u4e0a\u51c6\u5907\n#   vdb 20G   SSD  \u65e5\u5fd7\n#   vdc 500G  \u673a\u68b0  \u6570\u636e\n\n# \u5728 node-1 \u4e0a\u5b89\u88c5\napt install ceph-deploy\n# \u5728\u6240\u6709\u8282\u70b9\u4e0a\u6267\u884c\u6216\u5728\u4e3b\u8282\u70b9\u4e0a\u6267\u884c ceph-deploy pkg --install btrfs-tools node-{1,2,3,4}\napt install btrfs-tools\n\necho -e 'Defaults:ubuntu !requiretty\\nubuntu ALL = (root) NOPASSWD:ALL' | tee /etc/sudoers.d/ceph\nchmod 440 /etc/sudoers.d/ceph\n\n# \u521b\u5efa\u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u914d\u7f6e\nmkdir ceph\ncd ceph\n\n# \u6e05\u7406\u4e4b\u524d\u7684\u65e7\u6570\u636e\u548c\u5b89\u88c5\u7684\u65e7\u7248\u672c\nceph-deploy purge node-{1,2,3,4}\n# \u5c06 node-2 \u548c node-4 \u4f5c\u4e3a\u521d\u59cb\u7684 mon \u8282\u70b9\nceph-deploy new node-{2,4}\n\n# \u6ce8\u610f\n# \u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361,\u4e00\u5b9a\u8981\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ceph.conf \u4e2d\u52a0\u5165 public network = {ip-address}/{netmask} \u914d\u7f6e\n\n# \u5b89\u88c5 ceph\nceph-deploy install node-{1,2,3,4}\n# \u90e8\u7f72 node-2 \u548c node-4 \u4e0a\u7684 mon\nceph-deploy mon create-initial\n# \u62f7\u8d1d\u79d8\u94a5,\u4f7f node-1 \u53ef\u7ba1\u7406\u96c6\u7fa4\nceph-deploy admin node-1\n# \u67e5\u770b\u72b6\u6001\nceph status\n\n# \u51c6\u5907 osd\n# \u8be5\u64cd\u4f5c\u4f1a\u6e05\u9664\u6307\u5b9a\u78c1\u76d8\u4e0a\u7684\u6570\u636e,\u5e76\u5c06\u78c1\u76d8\u4ece\u65b0\u683c\u5f0f\u5316\u4e3a btrfs\nceph-deploy osd prepare --fs-type=btrfs --zap-disk node-1:vdc:vdb\nceph-deploy osd activate node-1:vdc:vdb\n# \u8fd9\u4e24\u90e8\u64cd\u4f5c\u7b49\u540c\u4e8e ceph-deploy osd create --fs-type=btrfs --zap-disk node-1:vdc:vdb\nceph-deploy osd activate --fs-type=btrfs --zap-disk  node-{2,3,4}:vdc:vdb\n\n\n# \u51c6\u5907\u597d\u4ee5\u4e0b\u673a\u5668 dlp node1 node2 node3, \u914d\u7f6e\u597d ssh \u65e0\u5bc6\u7801\u767b\u9646\n# \u5c06\u5728 admin \u673a\u5668\u4e0a\u8fdb\u884c\u90e8\u7f72, \u5c06\u4f7f\u7528 node1,node2,node3 \u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4\n\n# \u5305\u51c6\u5907\napt-get -y install openssh-server python-ceph\necho -e 'Defaults:ubuntu !requiretty\\nubuntu ALL = (root) NOPASSWD:ALL' | tee /etc/sudoers.d/ceph\nchmod 440 /etc/sudoers.d/ceph\n# \u90e8\u7f72\napt-get -y install ceph-deploy ceph-common ceph-mds\nmkdir ceph\ncd ceph\n\nceph-deploy new node01\nnano ceph.conf\n# \u5728\u7ed3\u5c3e\u6dfb\u52a0 osd pool default size = 2\n# \u5728\u6240\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 ceph\nceph-deploy install dlp node01 node02 node03\n# \u914d\u7f6e\u76d1\u63a7\u548c key\nceph-deploy mon create-initial\n\n# \u5206\u522b\u5728 node1 \u4e0a\u521b\u5efa /storage01 node2 \u4e0a\u521b\u5efa /storage02 node3 \u4e0a\u521b\u5efa /storage03\n# \u5e76\u4e14\u5c06\u6743\u9650\u7ed9 ceph\n# chown ceph:ceph /storage0*\n\n# \u51c6\u5907 OSD\nceph-deploy osd prepare node01:/storage01 node02:/storage02 node03:/storage03\n# \u6fc0\u6d3b OSD\nceph-deploy osd activate node01:/storage01 node02:/storage02 node03:/storage03\n# \u4f20\u8f93\u914d\u7f6e\u6587\u4ef6\nceph-deploy admin dlp node01 node02 node03\n# \u67e5\u770b\u72b6\u6001,\u6b63\u5e38\u7684\u4f1a\u8f93\u51fa HEALTH_OK\n\n\n# \u5982\u679c\u60f3\u8981\u91cd\u65b0\u914d\u7f6e\u53ef\u4f7f\u7528\u4ee5\u4e0b\u64cd\u4f5c\n# \u53bb\u9664\u6240\u6709\u5305\nceph-deploy purge dlp node01 node02 node03\n# \u53bb\u9664\u6240\u6709\u914d\u7f6e\nceph-deploy purgedata dlp node01 node02 node03\nceph-deploy forgetkeys\n\n# \u5982\u679c\u91cd\u590d\u5b89\u88c5,\u5728 mon create-initial \u65f6\u51fa\u73b0 KeyNotFound \u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0b\u64cd\u4f5c\nrm -rf /var/{lib,run,log}/ceph/\n# \u5373\u4fbf\u6307\u5b9a\u4e86\u65e5\u5fd7\u76d8\u7b26,\u4e5f\u53ea\u4f1a\u4f7f\u7528 5G ,\u5982\u679c\u91cd\u590d\u4f7f\u7528\u8be5\u65e5\u5fd7\u76d8,\u4e4b\u524d\u5360\u7528\u7684\u7a7a\u95f4\u5e76\u4e0d\u4f1a\u88ab\u91ca\u653e,\n#   \u56e0\u6b64 osd create \u53ef\u80fd\u4f1a\u5931\u8d25,\u6b64\u65f6\u9700\u8981\u6e05\u9664\u78c1\u76d8\u7684\u5206\u533a.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u79fb\u9664 OSD\n##########\nceph osd out $OSD_NUM\n# \u5728 OSD \u6240\u5728\u7684\u8282\u70b9\u4e0a\u6267\u884c\nceph stop osd.$OSD_NUM\n\nceph osd crush remove osd.$OSD_NUM\nceph auth del osd.$OSD_NUM\nceph osd down $OSD_NUM\nceph osd rm $OSD_NUM\n")),(0,r.kt)("p",null,"\u4f7f\u7528 Ceph \u5c3d\u91cf\u907f\u514d RAID, \u56e0\u4e3a\u5e76\u6ca1\u6709\u5f97\u5230\u4efb\u4f55\u597d\u5904,\u9664\u975e\u662f\u5728\u6709\u975e\u5e38\u591a\u7684\u78c1\u76d8\u4e14\u5185\u5b58\u8d44\u6e90\u4e0d\u8db3\u65f6\u53ef\u4f7f\u7528 RAID \u6765\u51cf\u5c11 Ceph \u5bf9\u5185\u5b58\u7684\u4f7f\u7528,\u56e0\u4e3a\u5bf9\u4e8e\u6bcf\u4e2a\u78c1\u76d8\u7684\u76d1\u63a7 Ceph \u5927\u7ea6\u4f1a\u4f7f\u7528 2G \u5185\u5b58."))}w.isMDXComponent=!0}}]);