"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59561],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),u=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(r),k=n,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return r?a.createElement(d,p(p({ref:e},s),{},{components:r})):a.createElement(d,p({ref:e},s))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:n,p[1]=i;for(var u=2;u<l;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},82512:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return N},default:function(){return w},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return h}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&s(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&s(t,r,e[r]);return t},c=(t,e)=>l(t,p(e)),k=(t,e)=>{var r={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(r[a]=t[a]);return r};const d={title:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"},N="\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f",y={unversionedId:"security/crypto/password",id:"security/crypto/password",title:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f",description:"- \u9ed8\u8ba4\u9009\u62e9 bcrypt",source:"@site/../notes/security/crypto/password.md",sourceDirName:"security/crypto",slug:"/security/crypto/password",permalink:"/notes/security/crypto/password",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/crypto/password.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"},sidebar:"docs",previous:{title:"hashcat",permalink:"/notes/security/crypto/hashcat"},next:{title:"PGP",permalink:"/notes/security/crypto/pgp"}},g={},h=[{value:"\u5e93",id:"library",level:2},{value:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5",id:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5",level:2},{value:"Gitea",id:"gitea",level:3},{value:"OpenLDAP",id:"openldap",level:3},{value:"ApacheDirectory Server",id:"apachedirectory-server",level:3},{value:"Gitlab",id:"gitlab",level:3},{value:"Key stretching",id:"key-stretching",level:2},{value:"argon2 vs bcrypt vs scrypt vs pkdf2",id:"argon2-vs-bcrypt-vs-scrypt-vs-pkdf2",level:2}],b={toc:h},f="wrapper";function w(t){var e=t,{components:r}=e,n=k(e,["components"]);return(0,a.kt)(f,c(m(m({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"}),"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"),(0,a.kt)("admonition",m({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9009\u62e9 bcrypt"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KDF - Key Derivation Function - \u5bc6\u94a5\u6d3e\u751f\u51fd\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PBKDF2 - Password-Based Key Derivation Function 2 - \u57fa\u4e8e\u5bc6\u7801\u7684\u5bc6\u94a5\u6d3e\u751f\u51fd\u6570 2"),(0,a.kt)("li",{parentName:"ul"},"bcrypt - Blowfish-based Adaptive Cryptographic Hash Function - \u57fa\u4e8e Blowfish \u7684\u81ea\u9002\u5e94\u5bc6\u7801\u54c8\u5e0c\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"argon2 - Argon2 - Argon2 \u5bc6\u7801\u54c8\u5e0c\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"scrypt - \u7528\u4e8e\u5bc6\u7801\u54c8\u5e0c\u7684\u5185\u5b58\u5bc6\u96c6\u578b\u5bc6\u94a5\u6d3e\u751f\u51fd\u6570"))),(0,a.kt)("li",{parentName:"ul"},"PHF - Password Hashing Function - \u5bc6\u7801\u54c8\u5e0c\u51fd\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"scrypt - \u7528\u4e8e\u5bc6\u7801\u54c8\u5e0c\u7684\u5185\u5b58\u5bc6\u96c6\u578b\u5bc6\u94a5\u6d3e\u751f\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"sha256_crypt - SHA-256 Crypt - SHA-256 \u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"sha512_crypt - SHA-512 Crypt - SHA-512 \u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"md5_crypt - MD5 Crypt - MD5 \u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"sha1_crypt - SHA-1 Crypt - SHA-1 \u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"bcrypt - Blowfish-based Adaptive Cryptographic Hash Function - \u57fa\u4e8e Blowfish \u7684\u81ea\u9002\u5e94\u5bc6\u7801\u54c8\u5e0c\u51fd\u6570")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"$<id>[$<param>=<value>(,<param>=<value>)*][$<salt>[$<hash>]]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Scheme ID"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"MD5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Blowfish / bcrypt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2b"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2x"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u517c\u5bb9 2a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u517c\u5bb9 2a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NTHASH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SHA-256")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SHA-512")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"md5"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Solaris MD5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sha1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PBKDF1 with SHA-1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"argon2d"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"argon2i"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"argon2id"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"pbkdf2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PBKDF2 with SHA-1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"scrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4f7f\u7528\u5185\u5b58\u5bc6\u96c6\u578b\u5bc6\u94a5\u5bfc\u51fa\u51fd\u6570\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bcrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4f7f\u7528 Blowfish \u52a0\u5bc6\u7b97\u6cd5\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u4e0d\u662f\u6240\u6709 mkpasswd \u90fd\u652f\u6301 rounds \u548c -m\nmkpasswd --rounds 1000 -m sha-512 --salt $(head -c 40 /dev/random | base64 | sed -e 's/+/./g' | cut -b 10-25) 'password'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sha",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rounds"))),(0,a.kt)("li",{parentName:"ul"},"argon2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"m - \u5185\u5b58 - 1 - ",(0,a.kt)("inlineCode",{parentName:"li"},"(2^32)-1"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"WebApp - 64Mib"),(0,a.kt)("li",{parentName:"ul"},"\u654f\u611f\u6570\u636e\u79bb\u7ebf - 1Gib"))),(0,a.kt)("li",{parentName:"ul"},"t - \u8fed\u4ee3"),(0,a.kt)("li",{parentName:"ul"},"p - \u5e76\u884c - 1 - 255"),(0,a.kt)("li",{parentName:"ul"},"keyid - 0-8 bytes, b64 0-11 char"),(0,a.kt)("li",{parentName:"ul"},"data - 0-32 bytes, b64 0-43 char"),(0,a.kt)("li",{parentName:"ul"},"salt - 8-48 bytes, b64 11-64 char"),(0,a.kt)("li",{parentName:"ul"},"hash - 16-64 bytes, b64 22-86 char - \u9ed8\u8ba4 32 bytes 43 char"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350 argon2id"))),(0,a.kt)("li",{parentName:"ul"},"Argon2d\uff08\u6570\u636e\u4f9d\u8d56\uff09\uff1a\u8fd9\u4e2a\u53d8\u4f53\u4f7f\u7528\u6570\u636e\u4f9d\u8d56\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff0c\u4f7f\u5f97\u5b83\u5177\u6709\u8f83\u5f3a\u7684\u62b5\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u5176\u6570\u636e\u4f9d\u8d56\u6027\uff0c\u5b83\u53ef\u80fd\u5bf9\u65f6\u95f4\u7a7a\u95f4\u6743\u8861\u653b\u51fb\uff08TMTO\uff09\u8f83\u4e3a\u654f\u611f\u3002Argon2d \u9002\u7528\u4e8e\u9700\u8981\u8f83\u9ad8\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u7684\u573a\u666f\uff0c\u4f46\u4e0d\u9700\u8981\u8003\u8651 TMTO \u653b\u51fb\u7684\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},"Argon2i\uff08\u6570\u636e\u72ec\u7acb\uff09\uff1a\u8fd9\u4e2a\u53d8\u4f53\u4f7f\u7528\u6570\u636e\u72ec\u7acb\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff0c\u4f7f\u5176\u5bf9\u65f6\u95f4\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u5177\u6709\u8f83\u597d\u7684\u62b5\u6297\u80fd\u529b\u3002\u4f46\u662f\uff0c\u76f8\u5bf9\u4e8e Argon2d\uff0c\u5b83\u7684\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u8f83\u5f31\u3002Argon2i \u9002\u7528\u4e8e\u9700\u8981\u8003\u8651 TMTO \u653b\u51fb\u62b5\u6297\u80fd\u529b\uff0c\u4f46\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u8981\u6c42\u8f83\u4f4e\u7684\u573a\u666f\u3002"),(0,a.kt)("li",{parentName:"ul"},"Argon2id\uff08\u6df7\u5408\uff09\uff1a\u8fd9\u4e2a\u53d8\u4f53\u662f Argon2d \u548c Argon2i \u7684\u6df7\u5408\uff0c\u7ed3\u5408\u4e86\u5b83\u4eec\u7684\u4f18\u70b9\u3002\u5b83\u9996\u5148\u4f7f\u7528\u6570\u636e\u72ec\u7acb\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff08\u7c7b\u4f3c\u4e8e Argon2i\uff09\uff0c\u7136\u540e\u5728\u540e\u7eed\u7684\u8fc7\u7a0b\u4e2d\u5207\u6362\u4e3a\u6570\u636e\u4f9d\u8d56\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff08\u7c7b\u4f3c\u4e8e Argon2d\uff09\u3002\u8fd9\u79cd\u65b9\u6cd5\u65e2\u63d0\u4f9b\u4e86\u8f83\u5f3a\u7684\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\uff0c\u53c8\u5177\u6709\u8f83\u597d\u7684\u62b5\u6297\u65f6\u95f4\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u80fd\u529b\u3002Argon2id \u662f\u4e00\u79cd\u901a\u7528\u7684\u5bc6\u7801\u54c8\u5e0c\u65b9\u6848\uff0c\u9002\u7528\u4e8e\u5927\u591a\u6570\u573a\u666f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"}),"https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PHC - Password Hashing Competition"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://argon2.online/"}),"https://argon2.online/"))),(0,a.kt)("h2",m({},{id:"library"}),"\u5e93"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"argon2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ranisalt/node-argon2"}),"ranisalt/node-argon2"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"npm argon2"))))),(0,a.kt)("li",{parentName:"ul"},"bcrypt",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"npm - bcryptjs"))),(0,a.kt)("li",{parentName:"ul"},"crypto-js"),(0,a.kt)("li",{parentName:"ul"},"crypto-browserify"),(0,a.kt)("li",{parentName:"ul"},"crypt -> scrypt"),(0,a.kt)("li",{parentName:"ul"},"SpringSecurity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html"}),"https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://w3c.github.io/webappsec-change-password-url/"}),"https://w3c.github.io/webappsec-change-password-url/"))),(0,a.kt)("h2",m({},{id:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5"}),"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$algorithm$[cost]$[salt][hash]"))),(0,a.kt)("h3",m({},{id:"gitea"}),"Gitea"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PASSWORD_HASH_ALGO=pbkdf2")),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u9009 argon2, pbkdf2, pbkdf2_v1, pbkdf2_hi, scrypt, bcrypt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u7ed9\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"argon2$<time>$<memory>$<threads>$<key-length>\nbcrypt$<cost>\npbkdf2$<iterations>$<key-length>\nscrypt$<n>$<r>$<p>$<key-length>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"argon2: argon2$2$65536$8$50\nbcrypt: bcrypt$10\npbkdf2: pbkdf2$50000$50\npbkdf2_v1: pbkdf2$10000$50\npbkdf2_v2: pbkdf2$50000$50\npbkdf2_hi: pbkdf2$320000$50\nscrypt: scrypt$65536$16$2$50\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.gitea.io/en-us/administration/config-cheat-sheet/"}),"https://docs.gitea.io/en-us/administration/config-cheat-sheet/"))),(0,a.kt)("h3",m({},{id:"openldap"}),"OpenLDAP"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"userPassword: {SSHA}DkMTwBl+a/3DQTxCYEApdUtNXGgdUac3\nuserPassword: {CRYPT}aUihad99hmev6\nuserPassword: {CRYPT}$1$czBJdDqS$TmkzUAb836oMxg/BmIwN.1\nuserPassword: {MD5}Xr4ilOzQ4PCOq3aQ0qbuaQ==\nuserPassword: {SMD5}4QWGWZpj9GCmfuqEvm8HtZhZS6E=\nuserPassword: {SMD5}g2/J/7D5EO6+oPdklp5p8YtNFk4=\nuserPassword: {SHA}5en6G6MezRroT3XKqkdPOmY/BfQ=\n\nuserPassword: {SASL}username@realm\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OpenLDAP \u5185\u7f6e")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MD5"),(0,a.kt)("li",{parentName:"ul"},"SMD5 - MD5 + Salt"),(0,a.kt)("li",{parentName:"ul"},"SHA - SHA-1"),(0,a.kt)("li",{parentName:"ul"},"SSHA - SHA1 + Salt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pass-Through authentication")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CRYPT"),(0,a.kt)("li",{parentName:"ul"},"SASL - Cyrus SASL")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.openldap.org/doc/admin25/security.html"}),"https://www.openldap.org/doc/admin25/security.html"))),(0,a.kt)("h3",m({},{id:"apachedirectory-server"}),"ApacheDirectory Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SHA, SSHA, SHA-{256,384,512}, SSHA-{256,384,512}, MD5, SMD5, crypt, PLAIN"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://directory.apache.org/apacheds/advanced-ug/4.1.1.2-name-password-authn.html"}),"https://directory.apache.org/apacheds/advanced-ug/4.1.1.2-name-password-authn.html"))),(0,a.kt)("h3",m({},{id:"gitlab"}),"Gitlab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bcrypt - \u9ed8\u8ba4 - Stretching 10"),(0,a.kt)("li",{parentName:"ul"},"PBKDF2 + SHA512 - 20,000")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.gitlab.com/ee/security/password_storage.html"}),"https://docs.gitlab.com/ee/security/password_storage.html"))),(0,a.kt)("h2",m({},{id:"key-stretching"}),"Key stretching"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Key_stretching"}),"https://en.wikipedia.org/wiki/Key_stretching"))),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"argon2-vs-bcrypt-vs-scrypt-vs-pkdf2"}),"argon2 vs bcrypt vs scrypt vs pkdf2"),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"argon2 \u548c scrypt \u4f1a\u7528\u975e\u5e38\u591a\u7684\u5185\u5b58"))),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u9009\u62e9\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5\u65f6\uff0c\u4e3b\u8981\u8003\u8651\u4ee5\u4e0b\u56e0\u7d20\uff1a\u5b89\u5168\u6027\u3001\u6027\u80fd\u3001\u53ef\u7528\u6027\u548c\u793e\u533a\u652f\u6301\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e Argon2\u3001bcrypt\u3001scrypt \u548c PBKDF2 \u7684\u7b80\u8981\u6bd4\u8f83\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u5168\u6027\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Argon2\uff1a\u76ee\u524d\u88ab\u8ba4\u4e3a\u662f\u6700\u5b89\u5168\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5\u3002\u5b83\u8d62\u5f97\u4e86\u5bc6\u7801\u54c8\u5e0c\u7ade\u8d5b\uff08PHC\uff09\uff0c\u5e76\u4e14\u5177\u6709\u5f88\u597d\u7684\u5185\u5b58\u5bc6\u96c6\u5ea6\uff0c\u62b5\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u548c\u65f6\u95f4-\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u3002"),(0,a.kt)("li",{parentName:"ul"},"bcrypt\uff1a\u4e5f\u662f\u4e00\u79cd\u5b89\u5168\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5\uff0c\u4f46\u76f8\u8f83\u4e8e Argon2\uff0c\u5b83\u7684\u5185\u5b58\u5bc6\u96c6\u5ea6\u8f83\u4f4e\uff0c\u62b5\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u548c\u65f6\u95f4-\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u7684\u80fd\u529b\u8f83\u5f31\u3002"),(0,a.kt)("li",{parentName:"ul"},"scrypt\uff1a\u8bbe\u8ba1\u4e3a\u5185\u5b58\u5bc6\u96c6\u578b\u7b97\u6cd5\uff0c\u4ee5\u62b5\u6297\u5927\u89c4\u6a21\u5b9a\u5236\u786c\u4ef6\u653b\u51fb\u3002\u5b83\u7684\u5b89\u5168\u6027\u4f18\u4e8e bcrypt\uff0c\u4f46\u4ecd\u7136\u4f4e\u4e8e Argon2\u3002"),(0,a.kt)("li",{parentName:"ul"},"PBKDF2\uff1a\u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e09\u79cd\u7b97\u6cd5\uff0cPBKDF2 \u7684\u5b89\u5168\u6027\u6700\u4f4e\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u9488\u5bf9 GPU \u6216 ASIC \u653b\u51fb\u7684\u5185\u5b58\u5bc6\u96c6\u7279\u6027\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u6027\u80fd\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Argon2\u3001bcrypt \u548c scrypt \u7684\u6027\u80fd\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u53c2\u6570\uff08\u5982\u5185\u5b58\u3001\u8fed\u4ee3\u6b21\u6570\u7b49\uff09\u6765\u63a7\u5236\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u7684\u9700\u6c42\u548c\u786c\u4ef6\u8d44\u6e90\u8c03\u6574\u8fd9\u4e9b\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"PBKDF2 \u6027\u80fd\u4e3b\u8981\u53d6\u51b3\u4e8e\u8fed\u4ee3\u6b21\u6570\uff0c\u4f46\u4e0e\u5176\u4ed6\u7b97\u6cd5\u76f8\u6bd4\uff0c\u5b83\u5728\u73b0\u4ee3\u786c\u4ef6\u4e0a\u7684\u6027\u80fd\u76f8\u5bf9\u8f83\u5dee\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u7528\u6027\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u90fd\u652f\u6301\u8fd9\u56db\u79cd\u54c8\u5e0c\u7b97\u6cd5\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cArgon2 \u7684\u652f\u6301\u53ef\u80fd\u4e0d\u5982\u5176\u4ed6\u7b97\u6cd5\u5e7f\u6cdb\u3002\u5728\u9009\u62e9\u7b97\u6cd5\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u6240\u9009\u7b97\u6cd5\u5728\u9879\u76ee\u4f7f\u7528\u7684\u6280\u672f\u6808\u4e2d\u53ef\u7528\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u793e\u533a\u652f\u6301\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Argon2\u3001bcrypt \u548c scrypt \u90fd\u62e5\u6709\u76f8\u5bf9\u5e7f\u6cdb\u7684\u793e\u533a\u652f\u6301\uff0c\u800c\u4e14\u8fd9\u4e9b\u7b97\u6cd5\u5df2\u7ecf\u5f97\u5230\u4e86\u5b89\u5168\u7814\u7a76\u4eba\u5458\u7684\u5ba1\u67e5\u548c\u63a8\u8350\u3002PBKDF2 \u4e5f\u5f97\u5230\u4e86\u4e00\u5b9a\u7684\u652f\u6301\uff0c\u4f46\u76f8\u5bf9\u8f83\u5f31\u3002")))),(0,a.kt)("p",null,"\u7efc\u5408\u8003\u8651\u4e0a\u8ff0\u56e0\u7d20\uff0cArgon2\uff08\u5c24\u5176\u662f Argon2id \u53d8\u4f53\uff09\u901a\u5e38\u662f\u9996\u9009\u7b97\u6cd5\uff0c\u56e0\u4e3a\u5b83\u5728\u5b89\u5168\u6027\u548c\u6027\u80fd\u65b9\u9762\u8868\u73b0\u6700\u4f73\u3002\u5982\u679c\u9879\u76ee\u4e2d Argon2 \u7684\u652f\u6301\u6709\u9650\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 bcrypt \u6216 scrypt\u3002PBKDF2 \u5e94\u8be5\u4f5c\u4e3a\u6700\u540e\u7684\u9009\u62e9\uff0c\u4ec5\u5728\u5176\u4ed6\u9009\u9879\u4e0d\u53ef\u7528\u65f6\u4f7f\u7528\u3002"))}w.isMDXComponent=!0}}]);