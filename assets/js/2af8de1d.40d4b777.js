"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22247],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,c[1]=o;for(var u=2;u<l;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5777:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,c(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"ncc"},b="ncc",k={unversionedId:"web/dev/bundle/ncc",id:"web/dev/bundle/ncc",title:"ncc",description:"- vercel/ncc",source:"@site/../notes/web/dev/bundle/ncc.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/ncc",permalink:"/notes/web/dev/bundle/ncc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/bundle/ncc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ncc"},sidebar:"docs",previous:{title:"ESBuild",permalink:"/notes/web/dev/bundle/esbuild"},next:{title:"Parcel",permalink:"/notes/web/dev/bundle/parcel"}},v={},y=[{value:"require is not defined",id:"require-is-not-defined",level:2}],g={toc:y},N="wrapper";function h(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(N,d(s(s({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"ncc"}),"ncc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/vercel/ncc"}),"vercel/ncc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Node.js \u9879\u76ee -> \u5355\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 webpack bundle"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 babel \u8f6c\u8bd1"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/acornjs/acorn"}),"acornjs/acorn"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684 JS \u89e3\u6790\u5668"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/vercel/nft"}),"@vercel/nft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/vercel/webpack-asset-relocator-loader"}),"@vercel/webpack-asset-relocator-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9759\u6001\u4f9d\u8d56\u5206\u6790")))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npx -y @vercel/ncc build src/server.ts -o dist/ncc --target es2020 -s\n\n# \u76f4\u63a5\u8fd0\u884c - \u53ef\u7528\u4e8e\u6d4b\u8bd5,\u751f\u6210\u5230\u4e34\u65f6\u76ee\u5f55\nnpx -y @vercel/ncc run src/server.ts --target es2020 -s\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"transpile-only ts \u53ea\u8f6c\u8bd1\uff0c\u5ffd\u7565\u7c7b\u578b\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-m"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"minify")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-s"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"source-map")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-e"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"external")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"--v8-cache"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",s({},{id:"require-is-not-defined"}),"require is not defined"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u6ca1\u6709 bundle\uff0c\u5bfc\u81f4 esm+cjs \u4f1a\u6709\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 fastify \u662f cjs")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c external \u80fd\u907f\u514d\nncc build src/index.ts -m -s --target es2020 -e sqlite3 -e sqlite\n\n# \u5426\u5219\u53ea\u80fd bundle\nnpx esbuild --bundle --outfile=dist/esm/server.js src/server.ts --platform=node --format=esm --charset=utf8 --target=chrome90 --sourcemap --external:{sqlite,pg,pg-hstore}\n\n# rollup\nnpx rollup -e sqlite3,pg,pg-hstore --format es -m inline -o dist/es/server.js -i src/server.ts -p typescript -p node-resolve\n")))}h.isMDXComponent=!0}}]);