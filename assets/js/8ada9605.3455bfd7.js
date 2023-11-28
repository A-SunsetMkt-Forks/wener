"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58554],{49613:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(59496);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?t.createElement(d,l(l({ref:n},u),{},{components:r})):t.createElement(d,l({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24510:function(e,n,r){r.r(n),r.d(n,{assets:function(){return O},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return g}});var t=r(49613),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&u(e,r,n[r]);if(a)for(var r of a(n))s.call(n,r)&&u(e,r,n[r]);return e},m=(e,n)=>o(e,l(n)),f=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&a)for(var t of a(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const d={title:"Terminal"},y="Terminal",b={unversionedId:"os/linux/shell/terminal",id:"os/linux/shell/terminal",title:"Terminal",description:"screen",source:"@site/../notes/os/linux/shell/terminal.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/terminal",permalink:"/notes/os/linux/shell/terminal",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/terminal.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627915171,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"Terminal"},sidebar:"docs",previous:{title:"sudo",permalink:"/notes/os/linux/shell/sudo"},next:{title:"xargs",permalink:"/notes/os/linux/shell/xargs"}},O={},g=[{value:"screen",id:"screen",level:2},{value:"minicom",id:"minicom",level:2}],h={toc:g},v="wrapper";function k(e){var n=e,{components:r}=n,i=f(n,["components"]);return(0,t.kt)(v,m(p(p({},h),i),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",p({},{id:"terminal"}),"Terminal"),(0,t.kt)("h2",p({},{id:"screen"}),"screen"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",p({parentName:"li"},{href:"http://aperiodic.net/screen/quick_reference"}),"Screen quick reference")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",p({parentName:"li"},{href:"http://www.gnu.org/software/screen/manual/screen.html"}),"Screen manual")),(0,t.kt)("li",{parentName:"ul"},"FAQ",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\u5f53\u8fde\u63a5\u4e32\u53e3, \u5f3a\u5236\u628a screen kill \u540e, screen \u53ef\u80fd\u51fa\u73b0 100% CPU \u5360\u7528, \u6b64\u65f6\u53ea\u80fd\u91cd\u542f\u4e86")))),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u6240\u6709\u7684\u4f1a\u8bdd\nscreen -ls\n# \u9000\u51fa\nscreen -X -S ${SESSION} quit\n# \u8fde\u4e0a screen \u4f1a\u8bdd\nscreen -r ${SESSION}\n")),(0,t.kt)("h2",p({},{id:"minicom"}),"minicom"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Meta \u4e3a ESC")),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{}),"+-------------------------------------------------------------------+\n|                      Minicom Command Summary                      |\n|                                                                   |\n|               Commands can be called by Meta-<key>                |\n|                                                                   |\n|               Main Functions                  Other Functions     |\n|                                                                   |\n| Dialing directory..D  run script (Go)....G | Clear Screen.......C |\n| Send files.........S  Receive files......R | cOnfigure Minicom..O |\n| comm Parameters....P  Add linefeed.......A | Suspend minicom....J |\n| Capture on/off.....L  Hangup.............H | eXit and reset.....X |\n| send break.........F  initialize Modem...M | Quit with no reset.Q |\n| Terminal settings..T  run Kermit.........K | Cursor key mode....I |\n| lineWrap on/off....W  local Echo on/off..E | Help screen........Z |\n| Paste file.........Y  Timestamp toggle...N | scroll Back........B |\n| Add Carriage Ret...U                                              |\n|                                                                   |\n|             Select function or press Enter for none.              |\n+-------------------------------------------------------------------+\n")))}k.isMDXComponent=!0}}]);