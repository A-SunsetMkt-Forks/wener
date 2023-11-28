"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31546],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),k=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=k(a),o=r,g=d["".concat(m,".").concat(o)]||d[o]||N[o]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},16111:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return s},default:function(){return O},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))k.call(e,a)&&u(t,a,e[a]);return t},N=(t,e)=>l(t,i(e)),o=(t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&k.call(t,n)&&(a[n]=t[n]);return a};const g={title:"BaseN",tags:["Codec"]},s="BaseN",c={unversionedId:"algorithm/base",id:"algorithm/base",title:"BaseN",description:"- \u6570\u5b57 0-9 - 10 \u4e2a\u5b57\u7b26",source:"@site/../notes/algorithm/base.md",sourceDirName:"algorithm",slug:"/algorithm/base",permalink:"/notes/algorithm/base",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/base.md",tags:[{label:"Codec",permalink:"/notes/tags/codec"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"BaseN",tags:["Codec"]},sidebar:"docs",previous:{title:"Algorithm Awesome",permalink:"/notes/algorithm/awesome"},next:{title:"BCrypt",permalink:"/notes/algorithm/bcrypt"}},b={},h=[],f={toc:h},y="wrapper";function O(t){var e=t,{components:a}=e,r=o(e,["components"]);return(0,n.kt)(y,N(d(d({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"basen"}),"BaseN"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6570\u5b57 0-9 - 10 \u4e2a\u5b57\u7b26"),(0,n.kt)("li",{parentName:"ul"},"\u5b57\u6bcd a-z - 26 \u4e2a\u5b57\u7b26,\u5927\u5199 A-Z 26 \u4e2a\u5b57\u7b26"),(0,n.kt)("li",{parentName:"ul"},"26+26+10=62 \u4e2a\u5b57\u7b26"),(0,n.kt)("li",{parentName:"ul"},"MIME 76 \u6bcf\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc4648"}),"rfc4648"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Base16, Base32, Base64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://www.rfc-editor.org/rfc/rfc9285.html"}),"rfc9285"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"base45 for QR"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Binary-to-text_encoding"}),"Binary to text encoding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://www.crockford.com/base32.html"}),"crockford base32")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/ilyakurdyukov/crzy64"}),"ilyakurdyukov/crzy64"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"An easy to decode base64 modification")))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"BaseN"),(0,n.kt)("th",d({parentName:"tr"},{align:"right"}),"eff"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"chars"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Base10"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~42%"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"0-9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Base16"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"50%"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"0-9A-F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Base32"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"62.5%"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"0-9A-V"),",",(0,n.kt)("inlineCode",{parentName:"td"},"2-7A-Z"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Base36"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~64%"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"0-9A-Z")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Base64"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"3/4, 75%"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"0-9A-Za-z+/"),".",(0,n.kt)("inlineCode",{parentName:"td"},"0-9A-Za-z-_"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Base85"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"4/5, 80%"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base10=Decimal"),(0,n.kt)("li",{parentName:"ul"},"Base64 \u5e38\u89c1\u8865\u5145\u5b57\u7b26",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+"),",",(0,n.kt)("inlineCode",{parentName:"li"},"/")," - \u5927\u591a\u6570\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-"),",",(0,n.kt)("inlineCode",{parentName:"li"},"_")," - URL \u5b89\u5168"),(0,n.kt)("li",{parentName:"ul"},"Pad \u901a\u5e38\u4f7f\u7528 ="),(0,n.kt)("li",{parentName:"ul"},"3/4 - \u6570\u636e\u957f\u5ea6\u4e3a 3 \u7684\u500d\u6570\u5219\u4e0d\u4f1a\u6709 Padding"))),(0,n.kt)("li",{parentName:"ul"},"Base85=Ascii85",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"big-endian"),(0,n.kt)("li",{parentName:"ul"},"used by ZMODEM, Adobe PostScript, PDF, Git Binary Patch"),(0,n.kt)("li",{parentName:"ul"},"Z85 - ZeroMQ Base-85"),(0,n.kt)("li",{parentName:"ul"},"Base85 RFC1924 62 ",(0,n.kt)("inlineCode",{parentName:"li"},"0\u20139A\u2013Za\u2013z")," + 23 ",(0,n.kt)("inlineCode",{parentName:"li"},"!#$%&()*+-;<=>?@^_`{|}~")))),(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u89c6\u89c9\u6df7\u6dc6\u5b57\u7b26",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0,o,O"),(0,n.kt)("li",{parentName:"ul"},"1,l,I,i,j"),(0,n.kt)("li",{parentName:"ul"},"2,z,Z"),(0,n.kt)("li",{parentName:"ul"},"5,s,S")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"bits"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"byte"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"hex"),(0,n.kt)("th",d({parentName:"tr"},{align:"right"}),"b32"),(0,n.kt)("th",d({parentName:"tr"},{align:"right"}),"b64"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"e.g."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"32"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~7"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~7"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"64"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"16"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~13"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~11"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"timestamp,long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"16"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"32"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"26"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~22"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"md5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"160"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"20"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"40"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"32"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~27"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"sha1,uuid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"224"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"28"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"56"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~45"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~38"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"sha2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"32"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"64"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~52"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~43"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"sha2-256")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"320"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"RIPEMD-320")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"384"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"48"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"96"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~77"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"64"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"64"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~103"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"~86"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"whirlpool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1024"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1280"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"160"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"320"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"256"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1536"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"192"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"384"),(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"256"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"byte=bits/8"),(0,n.kt)("li",{parentName:"ul"},"hex=bits/8/0.5=bits/4"),(0,n.kt)("li",{parentName:"ul"},"base32=bits/8/0.625"),(0,n.kt)("li",{parentName:"ul"},"base64=bits/8/0.75=bits/6")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u89c1")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"bits"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"string"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"uuid"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"16"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"36=32+4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"sha1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"160"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"20"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"hex 40")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"md5"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"16"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"hex 32")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UUID - 1 million, bytes \u8282\u7701 20MB")))}O.isMDXComponent=!0}}]);