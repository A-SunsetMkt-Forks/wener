"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48253],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48044:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return y},default:function(){return j},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return k}});var r=t(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&p(e,t,n[t]);return e},m=(e,n)=>a(e,l(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const d={title:"inversify"},y="inversify",b={unversionedId:"web/script/lib/inversify",id:"web/script/lib/inversify",title:"inversify",description:"- inversify/InversifyJS",source:"@site/../notes/web/script/lib/inversify.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/inversify",permalink:"/notes/web/script/lib/inversify",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/inversify.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1658265387,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{title:"inversify"},sidebar:"docs",previous:{title:"i18next",permalink:"/notes/web/script/lib/i18next"},next:{title:"JS Library FAQ",permalink:"/notes/web/script/lib/js-lib-faq"}},v={},k=[{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2}],N={toc:k},w="wrapper";function j(e){var n=e,{components:t}=n,i=f(n,["components"]);return(0,r.kt)(w,m(u(u({},N),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"inversify"}),"inversify"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/inversify/InversifyJS"}),"inversify/InversifyJS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, TS"),(0,r.kt)("li",{parentName:"ul"},"~50kB/11kB"),(0,r.kt)("li",{parentName:"ul"},"Reflect.getMetadata, Map, Promise, Proxy"))),(0,r.kt)("li",{parentName:"ul"},"Decorator",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@injectable()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'@inject("token")'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@optional()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'@tagged("key", "value")'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d AMBIGUOUS_MATCH"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'@named("name")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'@targetName("")')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@unmanaged()")," - \u907f\u514d BaseClass constructor \u6ce8\u5165"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'@multiInject("token")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@postConstruct()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@preDestroy()")))))),(0,r.kt)("li",{parentName:"ul"},"inversify-inject-decorators",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@lazyInject"),(0,r.kt)("li",{parentName:"ul"},"@lazyInjectNamed"),(0,r.kt)("li",{parentName:"ul"},"@lazyInjectTagged"),(0,r.kt)("li",{parentName:"ul"},"@lazyMultiInject"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/inversify/InversifyJS/blob/master/wiki/ecosystem.md"}),"https://github.com/inversify/InversifyJS/blob/master/wiki/ecosystem.md"))))),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 Symbol - \u4e5f\u53ef\u4ee5\u4f7f\u7528 Class/string \u4f5c\u4e3a Token"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const TYPES = {\n  ServiceFoo: Symbol.for('ServiceFoo'),\n  ServiceConf: Symbol.for('ServiceConf'),\n  ServiceBar: Symbol.for('ServiceBar'),\n};\n\n@injectable()\nclass ServiceBar implements IServiceBar {\n  private _conf: any;\n  @inject(TYPES.ServiceFoo) private _foo: IServiceFoo;\n  public constructor(@inject(TYPES.ServiceConf) conf: any) {\n    this._conf = conf;\n  }\n}\n\n//\nconst container = new Container();\ncontainer.bind<IServiceBar>(TYPES.ServiceBar).to(ServiceBar);\n//\nconst bar = container.get<IServiceBar>(TYPES.ServiceBar);\n// \u7ea7\u8054\nlet childContainer = new Container();\nchildContainer.parent = parentContainer;\n\n// \u5916\u90e8 Class \u53ef\u624b\u52a8\u4fee\u9970\nimport {decorate, injectable} from 'inversify';\ndecorate(injectable(), SomeClass);\n")),(0,r.kt)("h2",u({},{id:"\u6838\u5fc3\u6982\u5ff5"}),"\u6838\u5fc3\u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ContainerModule"),(0,r.kt)("li",{parentName:"ul"},"AsyncContainerModule")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// \u6a21\u5757\nlet warriors = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {\n  bind<Ninja>('Ninja').to(Ninja);\n});\n// \u5f02\u6b65 load\nlet warriors = new AsyncContainerModule(async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {\n  const ninja = await getNinja();\n  bind<Ninja>('Ninja').toConstantValue(ninja);\n});\n\ncontainer.load(warriors); // \u52a0\u8f7d\nawait container.loadAsync(warriors, weapons); // \u52a0\u8f7d\u5f02\u6b65\ncontainer.unload(warriors); // \u5378\u8f7d\n")))}j.isMDXComponent=!0}}]);