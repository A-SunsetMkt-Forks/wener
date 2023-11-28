"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56914],{49613:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var s=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},b=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(u,".").concat(b)]||p[b]||c[b]||o;return n?s.createElement(m,a(a({ref:t},f),{},{components:n})):s.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}b.displayName="MDXCreateElement"},47611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return y}});var s=n(49613),r=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&f(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&f(e,n,t[n]);return e},c=(e,t)=>o(e,a(t)),b=(e,t)=>{var n={};for(var s in e)u.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&i)for(var s of i(e))t.indexOf(s)<0&&l.call(e,s)&&(n[s]=e[s]);return n};const m={title:"Btrfs"},d="btrfs",v={unversionedId:"os/linux/fs/btrfs",id:"os/linux/fs/btrfs",title:"Btrfs",description:"\u5c3d\u91cf\u4e0d\u8981\u7528 BTRFS & LVM",source:"@site/../notes/os/linux/fs/btrfs.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/btrfs",permalink:"/notes/os/linux/fs/btrfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/btrfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685296509,formattedLastUpdatedAt:"May 28, 2023",frontMatter:{title:"Btrfs"},sidebar:"docs",previous:{title:"bcachefs",permalink:"/notes/os/linux/fs/bcachefs"},next:{title:"exFAT",permalink:"/notes/os/linux/fs/exfat"}},h={},y=[{value:"Usage",id:"usage",level:2},{value:"BTRFS critical (device dm-2): corrupt leaf",id:"btrfs-critical-device-dm-2-corrupt-leaf",level:2}],g={toc:y},w="wrapper";function k(e){var t=e,{components:n}=t,r=b(t,["components"]);return(0,s.kt)(w,c(p(p({},g),r),{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",p({},{id:"btrfs"}),"btrfs"),(0,s.kt)("admonition",p({},{type:"caution"}),(0,s.kt)("p",{parentName:"admonition"},"\u5c3d\u91cf\u4e0d\u8981\u7528 BTRFS & LVM")),(0,s.kt)("admonition",p({},{type:"tip"}),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"ext4 \u6ca1\u4ec0\u4e48\u4e0d\u597d"),(0,s.kt)("li",{parentName:"ul"},"btrfs \u4f18\u4e8e lvm, raid"),(0,s.kt)("li",{parentName:"ul"},"btrfs raid5 raid6 \u8fd8\u4e0d\u591f\u6210\u719f\u7a33\u5b9a - \u53ef\u80fd\u4f1a\u635f\u574f\u6570\u636e"),(0,s.kt)("li",{parentName:"ul"},"\u505a nas \u4f18\u5148\u9009\u62e9 zfs"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"btrfs - butter fs - better fs - b-tree fs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",p({parentName:"li"},{href:"https://www.reddit.com/r/linux/comments/61js64"}),"Let's discuss. Why do you use or not use BTRFS? "))),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add btrfs-progs btrfs-progs-extra\nmodprobe btrfs\n\nbtrfs device scan --all-devices\n\nbtrfs filesystem show\nbtrfs fi show\n\nDEV=/dev/mapper/cachedev_0\nbtrfs scrub status $DEV\n\nbtrfs scrub start $DEV\nbtrfs scrub status $DEV\n")),(0,s.kt)("h2",p({},{id:"usage"}),"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"usage: btrfs [--help] [--version] <group> [<group>...] <command> [<args>]\n\n    btrfs subvolume create [-i <qgroupid>] [<dest>/]<name>\n        Create a subvolume\n    btrfs subvolume delete [options] <subvolume> [<subvolume>...]\n        Delete subvolume(s)\n    btrfs subvolume list [options] [-G [+|-]value] [-C [+|-]value] [--sort=gen,ogen,rootid,path] <path>\n        List subvolumes (and snapshots)\n    btrfs subvolume snapshot [-r] [-i <qgroupid>] [-u <subvolume id>|<subvolume path>] <source> <dest>|[<dest>/]<name>\n        Create a snapshot of the subvolume\n    btrfs subvolume get-default <path>\n        Get the default subvolume of a filesystem\n    btrfs subvolume set-default <subvolid> <path>\n        Set the default subvolume of a filesystem\n    btrfs subvolume find-new <path> <lastgen>\n        List the recently modified files in a filesystem\n    btrfs subvolume show <subvol-path>\n        Show more information of the subvolume\n    btrfs subvolume sync <path> [<subvol-id>...]\n        Wait until given subvolume(s) are completely removed from the filesystem.\n    btrfs subvolume size [-v] [-p] [-m] [-r <volume_path>] <subvolume|subvol_id> [<subvolume|subvol_id>...]\n        Query the actual disk usage exclusively owned by selected snapshots.\n\n    btrfs filesystem df [options] <path>\n        Show space usage information for a mount point\n    btrfs filesystem du [options] <path> [<path>..]\n        Summarize disk usage of each file.\n    btrfs filesystem show [options] [<path>|<uuid>|<device>|label]\n        Show the structure of a filesystem\n    btrfs filesystem sync <path>\n        Force a sync on a filesystem\n    btrfs filesystem defragment [options] <file>|<dir> [<file>|<dir>...]\n        Defragment a file or a directory\n    btrfs filesystem resize [devid:][+[?]/-]<newsize>[kKmMgGtTpPeE]|[devid:]max <path>\n        Resize a filesystem\n    btrfs filesystem label [<device>|<mount_point>] [<newlabel>]\n        Get or change the label of a filesystem\n    btrfs filesystem usage [options] <path> [<path>..]\n        Show detailed information about internal filesystem usage .\n    btrfs filesystem corrupted <mount_point>\n        Pop the path of a cksumfailed file on this volume\n    btrfs filesystem reclaim-space [options] <file>|<dir> [<file>|<dir>...]\n        reclaim space from a file or a directory\n\n    btrfs balance start [options] <path>\n        Balance chunks across the devices\n    btrfs balance pause <path>\n        Pause running balance\n    btrfs balance cancel <path>\n        Cancel running or paused balance\n    btrfs balance resume <path>\n        Resume interrupted balance\n    btrfs balance status [-v] <path>\n        Show status of running or paused balance\n\n    btrfs device add [options] <device> [<device>...] <path>\n        Add a device to a filesystem\n    btrfs device delete <device>|<devid> [<device>|<devid>...] <path>    btrfs device remove <device>|<devid> [<device>|<devid>...] <path>\n        Remove a device from a filesystem\n    btrfs device scan [(-d|--all-devices)|<device> [<device>...]]\n        Scan devices for a btrfs filesystem\n    btrfs device ready <device>\n        Check device to see if it has all of its devices in cache for mounting\n    btrfs device stats [-z] <path>|<device>\n        Show current device IO stats.\n    btrfs device usage [options] <path> [<path>..]\n        Show detailed information about internal allocations in devices.\n\n    btrfs scrub start [-BdqrRf] [-c ioprio_class -n ioprio_classdata] <path>|<device>\n        Start a new scrub. If a scrub is already running, the new one fails.\n    btrfs scrub cancel <path>|<device>\n        Cancel a running scrub\n    btrfs scrub resume [-BdqrR] [-c ioprio_class -n ioprio_classdata] <path>|<device>\n        Resume previously canceled or interrupted scrub\n    btrfs scrub status [-dR] <path>|<device>\n        Show status of running or finished scrub\n\n    btrfs check [options] <device>\n        Check structural inegrity of a filesystem (unmounted).\n\n    btrfs rescue chunk-recover [options] <device>\n        Recover the chunk tree by scanning the devices one by one.\n    btrfs rescue super-recover [options] <device>\n        Recover bad superblocks from good copies\n    btrfs rescue zero-log <device>\n        Clear the tree log. Usable if it's corrupted and prevents mount.\n\n    btrfs restore [options] <device> <path> | -l <device>\n        Try to restore files from a damaged filesystem (unmounted)\n\n    btrfs inspect-internal inode-resolve [-v] <inode> <path>\n        Get file system paths for the given inode\n    btrfs inspect-internal logical-resolve [-Pv] [-s bufsize] <logical> <path>\n        Get file system paths for the given logical address\n    btrfs inspect-internal subvolid-resolve <subvolid> <path>\n        Get file system paths for the given subvolume ID.\n    btrfs inspect-internal rootid <path>\n        Get tree ID of the containing subvolume of path.\n    btrfs inspect-internal min-dev-size [options] <path>\n        Get the minimum size the device can be shrunk to. The\n    btrfs inspect-internal dump-tree [options] device\n        Dump tree structures from a given device\n    btrfs inspect-internal dump-super [options] device [device...]\n        Dump superblock from a device in a textual form\n    btrfs inspect-internal tree-stats [options] <device>\n        Print various stats for trees\n    btrfs inspect-internal tree-info <[-t <tree_id> <mnt_point>]|[subvolume_path]>\n        Get tree information about given tree id or subvolume path.\n    btrfs inspect-internal punch-info [-o <offset>] -l <len> <file_path>\n        Syno punch check with offset & len.\n    btrfs inspect-internal chunk-info [-m] <volume_path>\n        Get chunk information about given volume path.\n\n    btrfs property get [-t <type>] <object> [<name>]\n        Gets a property from a btrfs object.\n    btrfs property set [-t <type>] <object> <name> <value>\n        Sets a property on a btrfs object.\n    btrfs property list [-t <type>] <object>\n        Lists available properties with their descriptions for the given object.\n\n    btrfs send [-ve] [-p <parent>] [-c <clone-src>] [-f <outfile>] <subvol> [<subvol>...]\n        Send the subvolume(s) to stdout.\n    btrfs receive [-ve] [-f <infile>] [--max-errors <N>] <mount>\n        Receive subvolumes from stdin.\n\n    btrfs quota enable <path>\n        Enable subvolume quota support for a filesystem.\n    btrfs quota enable-v1 <path>\n        For 4.4 and 3.10 kernel, it enables syno v1 quota.\n    btrfs quota enable-v2 <path>\n        For 4.4 and 5.10 kernel, it enables syno v2 quota.\n    btrfs quota disable <path>\n        Disable subvolume quota support for a filesystem.\n    btrfs quota unload <path>\n        Unload qgroup from memory but do not erase on-disk quota btree.\n    btrfs quota remove-v1 <path>\n        Remove on-disk v1 quota btree.\n    btrfs quota rescan [-sw] <path>\n        Trash all qgroup numbers and scan the metadata again with the current config.\n    btrfs quota syno-status <path>\n        Show quota status of specified volume and subvolume.\n    btrfs quota syno-rescan [-prR] <path>\n        Do qouta 2.0 rescan on specified subvolume.\n\n    btrfs qgroup assign [options] <src> <dst> <path>\n        Assign SRC as the child qgroup of DST\n    btrfs qgroup remove <src> <dst> <path>\n        Remove a child qgroup SRC from DST.\n    btrfs qgroup create <qgroupid> <path>\n        Create a subvolume quota group.\n    btrfs qgroup destroy <qgroupid> <path>\n        Destroy a quota group.\n    btrfs qgroup show -pcreFf [--sort=qgroupid,rfer,excl,max_rfer,max_excl] <path>\n        Show subvolume quota groups.\n    btrfs qgroup limit [options] <size>|none [<qgroupid>] <path>\n        Set the limits a subvolume quota group.\n\n    btrfs replace start [-Bfr] <srcdev>|<devid> <targetdev> <mount_point>\n        Replace device of a btrfs filesystem.\n    btrfs replace status [-1] <mount_point>\n        Print status and progress information of a running device replace\n    btrfs replace cancel <mount_point>\n        Cancel a running device replace operation.\n\n    btrfs usrquota enable <path>\n        Enable subvolume usrquota support for a filesystem.\n    btrfs usrquota enable-v1 <path>\n        For 4.4 and 3.10 kernel, it enables syno v1 usrquota.\n    btrfs usrquota enable-v1 <path>\n        For 4.4 and 5.10 kernel, it enables syno v2 usrquota.\n    btrfs usrquota disable <path>\n        Disable subvolume usrquota support for a filesystem.\n    btrfs usrquota unload <path>\n        Unload user quota from memory but do not erase on-disk user quota btree.\n    btrfs usrquota remove-v1 <path>\n        Remove on-disk v1 user quota btree.\n    btrfs usrquota show [-an] [-u <uid>|-U <user name>] <path>\n        Show subvolume usrquota.\n    btrfs usrquota limit -u <uid>|-U <user name> <size>|none <path>\n        Set usr quota limit on a subvolume.\n    btrfs usrquota rescan [-sw] <path>\n        Trash all usrquota info items\n\n    btrfs syno-usage enable <volume_path>\n        Enable syno usage given volume path.\n    btrfs syno-usage disable <volume_path>\n        Disable syno usage given volume path.\n    btrfs syno-usage status <volume_path>\n        Get syno usage status given volume path.\n    btrfs syno-usage rescan <volume_path>\n        Rescan syno usage given volume path.\n    btrfs syno-usage rescan-pause <volume_path>\n        Rescan syno usage given volume path.\n    btrfs syno-usage subvol-type-set <type> <subvol_path>\n        Set syno usage type [2,255] given subvol path.\n    btrfs syno-usage subvol-type-get <subvol_path>\n        Get syno usage type given subvol path.\n    btrfs syno-usage show <volume_path>\n        Show usage for all type.\n\n    btrfs syno-cache-protection enable <volume_path>\n        Enable syno cache protection given volume path.\n    btrfs syno-cache-protection disable <volume_path>\n        Disable syno cache protection given volume path.\n    btrfs syno-cache-protection replay [-v] <volume_path>\n        Replay syno cache protection given volume path.\n    btrfs syno-cache-protection clear <volume_path>\n        Clear syno cache protection passive instance given volume path\n    btrfs syno-cache-protection status <volume_path>\n        Show syno cache protection status given volume path\n\n    btrfs syno-xattr get -k <xattr key name> [-r <root_tree> -i <inode>] [-v] <device>\n        manage xattr from raw device\n\n    btrfs syno-feat-tree enable <volume_path>\n        Enable syno feature tree for the given volume path.\n    btrfs syno-feat-tree disable <volume_path>\n        Disable syno feature tree for the given volume path.\n    btrfs syno-feat-tree status <volume_path>\n        Get status of syno feature tree for the given volume path.\n\n    btrfs help [--full]\n        Display help information\n    btrfs version\n        Display btrfs-progs version\n")),(0,s.kt)("h2",p({},{id:"btrfs-critical-device-dm-2-corrupt-leaf"}),"BTRFS critical (device dm-2): corrupt leaf"),(0,s.kt)("p",null,"\u7cfb\u7edf\u635f\u574f\uff0c\u9700\u8981\u79bb\u7ebf\u4fee\u590d\u3002"))}k.isMDXComponent=!0}}]);