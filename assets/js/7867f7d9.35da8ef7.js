"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91447],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return _},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return v}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const f={title:"ZFS Ops"},k="ZFS Ops",b={unversionedId:"os/linux/fs/zfs/zfs-ops",id:"os/linux/fs/zfs/zfs-ops",title:"ZFS Ops",description:"- ARC \u9ed8\u8ba4 50% \u5185\u5b58",source:"@site/../notes/os/linux/fs/zfs/zfs-ops.md",sourceDirName:"os/linux/fs/zfs",slug:"/os/linux/fs/zfs/ops",permalink:"/notes/os/linux/fs/zfs/ops",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/zfs/zfs-ops.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690351481,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"ZFS Ops"},sidebar:"docs",previous:{title:"Inside",permalink:"/notes/os/linux/fs/zfs/inside"},next:{title:"PostgreSQL & ZFS",permalink:"/notes/os/linux/fs/zfs/postgresql"}},g={},v=[{value:"System",id:"system",level:2},{value:"MySQL",id:"mysql",level:2},{value:"Postgres",id:"postgres",level:2},{value:"Kube Vol",id:"kube-vol",level:2},{value:"Docker Vol",id:"docker-vol",level:2}],h={toc:v},y="wrapper";function _(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(y,m(c(c({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"zfs-ops"}),"ZFS Ops"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set atime=off relatime=on xattr=sa compression=lz4 data\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ARC \u9ed8\u8ba4 50% \u5185\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u589e\u52a0\u4e3a 70-80%"),(0,a.kt)("li",{parentName:"ul"},"/sys/module/zfs/parameters/zfs_arc_max")))),(0,a.kt)("h2",c({},{id:"system"}),"System"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# System\nzfs create data/var\nzfs create -o mountpoint=/var/log/ data/var/log\nzfs create -o mountpoint=/var/lib/kubelet data/var/kubelet\n")),(0,a.kt)("h2",c({},{id:"mysql"}),"MySQL"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs create data/mysql\nzfs set recordsize=16K primarycache=metadata logbias=throughput data/mysql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title="my.zfs.cnf"',title:'"my.zfs.cnf"'}),"innodb_flush_method         = fsync\ninnodb_doublewrite          = 0       # ZIL \u907f\u514d\u4e86 crash \u95ee\u9898\ninnodb_use_native_aio       = 0\ninnodb_use_atomic_writes    = 0\ninnodb_checksum_algorithm   = none    # \u4e0d\u9700\u8981\u8003\u8651\u6570\u636e\u635f\u574f\ninnodb_log_write_ahead_size = 16384   #=recordsize\ninnodb_flush_neighbors      = 0       # \u4f20\u7edf\u673a\u68b0\u76d8\u9002\u7528\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title="my.ext4.cnf"',title:'"my.ext4.cnf"'}),"innodb_flush_method = O_DIRECT\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title="my.cnf"',title:'"my.cnf"'}),"skip-log-bin\ninnodb_buffer_pool_size=\ninnodb_flush_log_at_trx_commit = 1 # TPCC reqs.\ninnodb_log_file_size = 1G\ninnodb_log_group_home_dir = /var/lib/mysql/log\ninnodb_flush_neighbors = 0\ninnodb_fast_shutdown = 2\n\ninnodb_read_io_threads      = 10\ninnodb_write_io_threads     = 10\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sync_binlog=0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"binlog \u4e0d sync"))),(0,a.kt)("li",{parentName:"ul"},"innodb_flush_log_at_trx_commit=0"),(0,a.kt)("li",{parentName:"ul"},"zfs_prefetch_disable=1"),(0,a.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u589e\u52a0\u6027\u80fd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MySQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"innodb_flush_log_at_trx_commit=0"),(0,a.kt)("li",{parentName:"ul"},"sync_binlog=0"))),(0,a.kt)("li",{parentName:"ul"},"\u6216 ZFS \u5c42\u9762",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sync=disabled"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/bajrang0789/mysql-zfs"}),"https://github.com/bajrang0789/mysql-zfs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.percona.com/blog/mysql-zfs-performance-update/"}),"https://www.percona.com/blog/mysql-zfs-performance-update/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://shatteredsilicon.net/mysql-mariadb-innodb-on-zfs/"}),"https://shatteredsilicon.net/mysql-mariadb-innodb-on-zfs/"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"cat /sys/block/*/queue/scheduler\n")),(0,a.kt)("h2",c({},{id:"postgres"}),"Postgres"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs create data/postgres\nzfs set recordsize=8K logbias=latency data/postgres\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"logbias=throughput \u5bfc\u81f4\u788e\u7247")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ini"}),"full_page_writes=false # ZFS always writes full blocks\n\nrandom_page_cost = 1\neffective_io_concurrency = 200\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"recordsize",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5c0f TPS \u66f4\u9ad8"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5927 \u538b\u7f29\u6bd4\u66f4\u9ad8"))),(0,a.kt)("li",{parentName:"ul"},"\u503e\u5411\u4e8e\u4f7f\u7528 ARC \u51cf\u5c11 shared_buffers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u592a\u5c0f\u5f71\u54cd\u5199\u5165\uff0c\u51cf\u5c0f\u5230\u4e0d\u5f71\u54cd\u5199\u5165\u7684\u65f6\u5019"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://vadosware.io/post/everything-ive-seen-on-optimizing-postgres-on-zfs-on-linux/"}),"https://vadosware.io/post/everything-ive-seen-on-optimizing-postgres-on-zfs-on-linux/"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ini"}),"# pgtune https://pgtune.leopard.in.ua/\n# SSD\nrandom_page_cost = 1.1\neffective_io_concurrency = 200\n# HDD\nrandom_page_cost = 4\neffective_io_concurrency = 2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://bun.uptrace.dev/postgres/tuning-zfs-aws-ebs.html"}),"https://bun.uptrace.dev/postgres/tuning-zfs-aws-ebs.html"))),(0,a.kt)("h1",c({},{id:"vol"}),"Vol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-s sparse volume \u4e0d\u4fdd\u7559\u7a7a\u95f4")),(0,a.kt)("h2",c({},{id:"kube-vol"}),"Kube Vol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"k3s, k0s"),(0,a.kt)("li",{parentName:"ul"},"avoid zfs snapshotter")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'zfs create -s -V 200GB data/kube-vol\nmkfs.ext4 /dev/zvol/data/kube-vol\n\n# \u53ef\u4ee5\u653e\u5728\u5176\u4ed6\u4f4d\u7f6e\u7136\u540e\u4fee\u6539 data-dir\n# mkdir -p /data/k3s\n# mount /dev/zvol/data/kube-vol /data/k3s\n\nmkdir -p /var/lib/rancher/k3s\nmount /dev/zvol/data/kube-vol /var/lib/rancher/k3s\necho "/dev/zvol/data/kube-vol /var/lib/rancher/k3s ext4 rw,relatime,stripe=4 0 0" | tee -a /etc/fstab\n')),(0,a.kt)("h2",c({},{id:"docker-vol"}),"Docker Vol"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'zfs create -s -V 200GB data/docker-vol\nmkfs.ext4 /dev/zvol/data/docker-vol\n\n# \u53ef\u4ee5\u653e\u5728\u5176\u4ed6\u4f4d\u7f6e\u7136\u540e\u4fee\u6539 data-dir\n\nmkdir -p /var/lib/docker/\nmount /dev/zvol/data/docker-vol /var/lib/docker/\necho "/dev/zvol/data/docker-vol /var/lib/docker ext4 rw,relatime,stripe=4 0 0" | tee -a /etc/fstab\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://bigstep.com/blog/zfs-best-practices-and-caveats"}),"https://bigstep.com/blog/zfs-best-practices-and-caveats"))))}_.isMDXComponent=!0}}]);