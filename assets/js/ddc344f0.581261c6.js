"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32442],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,k=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(k,s(s({ref:t},c),{},{components:r})):n.createElement(k,s({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},56604:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return g}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,s(t)),b=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const k={title:"Storybook"},d="Storybook",y={unversionedId:"web/ui/storybook",id:"web/ui/storybook",title:"Storybook",description:"- nextjs/examples/with-storybook",source:"@site/../notes/web/ui/storybook.md",sourceDirName:"web/ui",slug:"/web/ui/storybook",permalink:"/notes/web/ui/storybook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/ui/storybook.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"Storybook"},sidebar:"docs",previous:{title:"Playroom",permalink:"/notes/web/ui/playroom"},next:{title:"svgr",permalink:"/notes/web/ui/svgr"}},f={},g=[{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"docs",id:"docs",level:2}],v={toc:g},h="wrapper";function w(e){var t=e,{components:r}=t,o=b(t,["components"]);return(0,n.kt)(h,m(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"storybook"}),"Storybook"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/zeit/next.js/tree/canary/examples/with-storybook"}),"nextjs/examples/with-storybook")),(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6 - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/storybookjs/storybook/tree/next/addons"}),"addons"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"actions - \u7eaa\u5f55\u4e8b\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"links - \u5185\u90e8\u8df3\u8f6c"),(0,n.kt)("li",{parentName:"ul"},"storysource - \u67e5\u770b\u6e90\u7801"),(0,n.kt)("li",{parentName:"ul"},"viewport - \u4e0d\u540c\u8bbe\u5907\u89c6\u56fe"),(0,n.kt)("li",{parentName:"ul"},"toolbars - \u5de5\u5177\u680f\u3001\u4e0a\u4e0b\u6587\u53c2\u6570"),(0,n.kt)("li",{parentName:"ul"},"docs - \u751f\u6210\u6587\u6863",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5916\u90e8\u5e93 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/storybookjs/storybook/issues/10034"}),"#10034")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/reactjs/react-docgen/issues/416"}),"reactjs/react-docgen#416")))),(0,n.kt)("li",{parentName:"ul"},"essentials - actions, backgrounds, controls, docs, measure, outline, toolbars, viewport"))),(0,n.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bundle \u8fc7\u5927 - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/storybookjs/storybook/issues/6391#issuecomment-530262331"}),"#6391"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"webpack \u62c6\u5206"))),(0,n.kt)("li",{parentName:"ul"},"npm 7+react 17 \u517c\u5bb9\u95ee\u9898 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/storybookjs/storybook/issues/14065"}),"#14065")))),(0,n.kt)("li",{parentName:"ul"},"Component Story Format (CSF) - Storybook",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://storybook.js.org/docs/react/api/csf"}),"https://storybook.js.org/docs/react/api/csf"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u521d\u59cb\u5316\nnpx sb init\n\n# \u624b\u52a8\u5b89\u88c5\nyarn add --dev @storybook/{react,addons}\nyarn add --dev @storybook/addon-{actions,links,knob}\n")),(0,n.kt)("h2",u({},{id:"configuration"}),"\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},".storybook/manager.js - \u63a7\u5236 StoryBook UI")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title=".storybook/preview.js"',title:'".storybook/preview.js"'}),"// \u5168\u5c40\u6837\u5f0f\nimport '../src/styles/globals.css';\n\nexport const parameters = {\n  actions: { argTypesRegex: '^on[A-Z].*' },\n  controls: {\n    matchers: {\n      color: /(background|color)$/i,\n      date: /Date$/,\n    },\n  },\n\n  // \u5168\u5c40\u53c2\u6570\n  backgrounds: {\n    values: [\n      { name: 'red', value: '#f00' },\n      { name: 'green', value: '#0f0' },\n    ],\n  },\n};\n\nimport React from 'react';\n\nexport const decorators = [\n  (Story) => (\n    <div style={{ margin: '3em' }}>\n      <Story />\n    </div>\n  ),\n];\n\nexport const globalTypes = {};\n")),(0,n.kt)("h2",u({},{id:"docs"}),"docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709 stories \u90fd\u4f1a\u751f\u6210 DocsPage")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-tsx"}),"import { Meta } from '@storybook/addon-docs';\nimport Changelog from '../CHANGELOG.md';\n\n<Meta title=\"Changelog\" />\n\n<Changelog />\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9690\u85cf Docs")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"export default {\n  title: 'YourTitle',\n  parameters: {\n    previewTabs: {\n      'storybook/docs/panel': { hidden: true },\n    },\n    viewMode: 'canvas',\n  },\n};\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4 Docs")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"export default {\n  title: 'YourTitle',\n  parameters: {\n    previewTabs: {\n      canvas: { hidden: true },\n    },\n    viewMode: 'docs',\n  },\n};\n")))}w.isMDXComponent=!0}}]);