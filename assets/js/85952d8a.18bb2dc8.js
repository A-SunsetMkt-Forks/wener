"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37169],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54601:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&m(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),d=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"dmidecode"},k="dmidecode",b={unversionedId:"os/linux/hardware/dmidecode",id:"os/linux/hardware/dmidecode",title:"dmidecode",description:"- DMI - Destktop Management Information",source:"@site/../notes/os/linux/hardware/dmidecode.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/dmidecode",permalink:"/notes/os/linux/hardware/dmidecode",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/hardware/dmidecode.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645427777,formattedLastUpdatedAt:"Feb 21, 2022",frontMatter:{title:"dmidecode"},sidebar:"docs",previous:{title:"OpenZFS Version",permalink:"/notes/os/linux/fs/zfs/version"},next:{title:"Linux Hardware FAQ",permalink:"/notes/os/linux/hardware/faq"}},N={},y=[],v={toc:y},O="wrapper";function w(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,c(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"dmidecode"}),"dmidecode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DMI - Destktop Management Information",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SMBIOS \u63d0\u4f9b"))),(0,n.kt)("li",{parentName:"ul"},"dmidecode - \u63d0\u53d6\u6240\u6709\u786c\u4ef6\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"biosdecode - \u63d0\u53d6 BIOS \u4fe1\u606f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"acpi",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"oem identifier: alaska"),(0,n.kt)("li",{parentName:"ul"},"rsd table 32-bit address"),(0,n.kt)("li",{parentName:"ul"},"xsd table 64-bit address"))),(0,n.kt)("li",{parentName:"ul"},"SMBIOS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"structure table length: 4346"),(0,n.kt)("li",{parentName:"ul"},"structure table address"),(0,n.kt)("li",{parentName:"ul"},"number of structures: 86"),(0,n.kt)("li",{parentName:"ul"},"maximum structure size: 420"))),(0,n.kt)("li",{parentName:"ul"},"pnp bios"),(0,n.kt)("li",{parentName:"ul"},"pci interrupt routing"),(0,n.kt)("li",{parentName:"ul"},"intel multiprocessor"))),(0,n.kt)("li",{parentName:"ul"},"ownership - ownership tag on Compaq computers"),(0,n.kt)("li",{parentName:"ul"},"vpddecode - vital product data on IBM computers")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add dmidecode\n\ndmidecode -t        # \u6240\u6709\u7c7b\u578b\ndmidecode -t memory # \u67e5\u770b\u5185\u5b58\u4fe1\u606f\ndmidecode -s        # \u6240\u6709\u5b57\u7b26\u4e32\n\n# \u663e\u793a\u6240\u6709\u5b57\u7b26\ndmidecode -s 2>&1 | tail -n +4 | xargs -n 1 -I {} sh -c 'echo -n {}: && dmidecode -s {}'\n\n# system-uuid\n# BIOS \u4e2d\u6307\u5b9a, VMware \u53ef\u4fee\u6539 uuid.bios, QEMU -uuid\ncat /sys/devices/virtual/dmi/id/product_uuid\n\n# \u67e5\u770b\u8bbf\u95ee\u7684\u4f4d\u7f6e \u53ef\u5224\u65ad\u8bfb\u53d6\u4e86\u90a3\u4e9b \u7cfb\u7edf\u4fe1\u606f\nsudo strace -f -e open dmidecode > /dev/nul\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bios"),(0,n.kt)("li",{parentName:"ul"},"system"),(0,n.kt)("li",{parentName:"ul"},"baseboard"),(0,n.kt)("li",{parentName:"ul"},"chassis"),(0,n.kt)("li",{parentName:"ul"},"processor"),(0,n.kt)("li",{parentName:"ul"},"memory"),(0,n.kt)("li",{parentName:"ul"},"cache"),(0,n.kt)("li",{parentName:"ul"},"connector"),(0,n.kt)("li",{parentName:"ul"},"slot"))),(0,n.kt)("li",{parentName:"ul"},"String",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bios-vendor"),(0,n.kt)("li",{parentName:"ul"},"bios-version"),(0,n.kt)("li",{parentName:"ul"},"bios-release-date"),(0,n.kt)("li",{parentName:"ul"},"bios-revision"),(0,n.kt)("li",{parentName:"ul"},"firmware-revision"),(0,n.kt)("li",{parentName:"ul"},"system-manufacturer"),(0,n.kt)("li",{parentName:"ul"},"system-product-name"),(0,n.kt)("li",{parentName:"ul"},"system-version"),(0,n.kt)("li",{parentName:"ul"},"system-serial-number"),(0,n.kt)("li",{parentName:"ul"},"system-uuid"),(0,n.kt)("li",{parentName:"ul"},"system-sku-number"),(0,n.kt)("li",{parentName:"ul"},"system-family"),(0,n.kt)("li",{parentName:"ul"},"baseboard-manufacturer"),(0,n.kt)("li",{parentName:"ul"},"baseboard-product-name"),(0,n.kt)("li",{parentName:"ul"},"baseboard-version"),(0,n.kt)("li",{parentName:"ul"},"baseboard-serial-number"),(0,n.kt)("li",{parentName:"ul"},"baseboard-asset-tag"),(0,n.kt)("li",{parentName:"ul"},"chassis-manufacturer"),(0,n.kt)("li",{parentName:"ul"},"chassis-type"),(0,n.kt)("li",{parentName:"ul"},"chassis-version"),(0,n.kt)("li",{parentName:"ul"},"chassis-serial-number"),(0,n.kt)("li",{parentName:"ul"},"chassis-asset-tag"),(0,n.kt)("li",{parentName:"ul"},"processor-family"),(0,n.kt)("li",{parentName:"ul"},"processor-manufacturer"),(0,n.kt)("li",{parentName:"ul"},"processor-version"),(0,n.kt)("li",{parentName:"ul"},"processor-frequency")))))}w.isMDXComponent=!0}}]);