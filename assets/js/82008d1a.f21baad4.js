"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4768],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(t),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[f]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36673:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return w},default:function(){return h},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return v}});var r=t(49613),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(a)for(var t of a(n))l.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>i(e,s(n)),p=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const m={title:"Windows Manifest"},w="Windows Manifest",y={unversionedId:"dev/windows/windows-manifest",id:"dev/windows/windows-manifest",title:"Windows Manifest",description:"- What is a Manifest (in Windows)?",source:"@site/../notes/dev/windows/windows-manifest.md",sourceDirName:"dev/windows",slug:"/dev/windows/manifest",permalink:"/notes/dev/windows/manifest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/windows/windows-manifest.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634220239,formattedLastUpdatedAt:"Oct 14, 2021",frontMatter:{title:"Windows Manifest"},sidebar:"docs",previous:{title:"\u803b\u8fb1\u5899",permalink:"/notes/dev/wall-of-shame"},next:{title:"DevOps",permalink:"/notes/devops/"}},b={},v=[],O={toc:v},g="wrapper";function h(e){var n=e,{components:t}=n,o=p(n,["components"]);return(0,r.kt)(g,d(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",f({},{id:"windows-manifest"}),"Windows Manifest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://www.samlogic.net/articles/manifest.htm"}),"What is a Manifest (in Windows)?"))),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">\n<assemblyIdentity\n    version="1.0.0.0"\n    processorArchitecture="x86"\n    name="controls"\n    type="win32"\n></assemblyIdentity>\n<dependency>\n    <dependentAssembly>\n        <assemblyIdentity\n            type="win32"\n            name="Microsoft.Windows.Common-Controls"\n            version="6.0.0.0"\n            processorArchitecture="*"\n            publicKeyToken="6595b64144ccf1df"\n            language="*"\n        ></assemblyIdentity>\n    </dependentAssembly>\n</dependency>\n<trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">\n    <security>\n        <requestedPrivileges>\n            <requestedExecutionLevel level="requireAdministrator" uiAccess="false"/>\n        </requestedPrivileges>\n    </security>\n</trustInfo>\n</assembly>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cmd"}),"# C:\\Program Files\\Microsoft SDKs\\Windows\\v6.1\\bin\nmt -inputresource:dll_with_manifest.dll;#1 -out:extracted.manifest\n")))}h.isMDXComponent=!0}}]);