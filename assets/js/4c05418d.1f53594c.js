"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95615],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77334:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return C},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={title:"CubeJS \u914d\u7f6e",tags:["Configuration"]},b="CubeJS \u914d\u7f6e",f={unversionedId:"service/bi/cubejs-conf",id:"service/bi/cubejs-conf",title:"CubeJS \u914d\u7f6e",description:"- \u73af\u5883\u53d8\u91cf\u914d\u7f6e",source:"@site/../notes/service/bi/cubejs-conf.md",sourceDirName:"service/bi",slug:"/service/bi/cubejs-conf",permalink:"/notes/service/bi/cubejs-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/bi/cubejs-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"CubeJS \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"BI FAQ",permalink:"/notes/service/bi/faq"},next:{title:"CubeJS Frontend",permalink:"/notes/service/bi/cubejs-frontend"}},y={},k=[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"Multitenancy",id:"multitenancy",level:2},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:2}],h={toc:k},v="wrapper";function C(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(v,m(p(p({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"cubejs-\u914d\u7f6e"}),"CubeJS \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u914d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CUBEJS_DEV_MODE=true - \u5f00\u53d1\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"CUBEJS_APP - APP ID"),(0,r.kt)("li",{parentName:"ul"},"CUBEJS_TELEMETRY=false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://cube.dev/docs/reference/environment-variables"}),"Environment Variables")),(0,r.kt)("li",{parentName:"ul"},"\u6620\u5c04\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"li"},"CUBEJS_DB_TYPE")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"dbType")))),(0,r.kt)("li",{parentName:"ul"},"cube.js \u914d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://cube.dev/docs/config"}),"https://cube.dev/docs/config")))),(0,r.kt)("li",{parentName:"ul"},"dev mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e0 auth"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9 cubestore"),(0,r.kt)("li",{parentName:"ul"},"background refresh for in-memory cache, cheduled pre-aggregations"),(0,r.kt)("li",{parentName:"ul"},"log level trace"),(0,r.kt)("li",{parentName:"ul"},"playground http://localhost:4000"),(0,r.kt)("li",{parentName:"ul"},"memory as the default cache/queue engine"),(0,r.kt)("li",{parentName:"ul"},"log incorrect/invalid configuration for for externalRefresh /waitForRenew instead of throwing errors")))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="cube.js"',title:'"cube.js"'}),"module.exports = {\n  telemetry: false,\n  logger: (msg, params) => {\n    console.log(`${msg}: ${JSON.stringify(params)}`);\n  },\n};\n")),(0,r.kt)("h2",p({},{id:"\u914d\u7f6e\u8bf4\u660e"}),"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u4e0b\u6587\u5173\u7cfb")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42 - ExpressRequest"),(0,r.kt)("li",{parentName:"ul"},"appId - RequestContext"),(0,r.kt)("li",{parentName:"ul"},"COMPILE_CONTEXT - RequestContext"),(0,r.kt)("li",{parentName:"ul"},"jwt - securityContext"),(0,r.kt)("li",{parentName:"ul"},"SECURITY_CONTEXT - securityContext",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4f7f\u7528 queryRewrite \u800c\u4e0d\u662f SECURITY_CONTEXT"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e row level security")))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"interface CubejsConfiguration {\n  // Schema \u6587\u4ef6\u8def\u5f84 /schema\n  schemaPath: string;\n  // REST \u63a5\u53e3\u8def\u5f84 /cubejs-api\n  basePath: string;\n  // \u9ed8\u8ba4 /\n  webSocketsBasePath: string;\n  // \u81ea\u5b9a\u4e49 logger\n  // \u4f8b\u5982 console.log(`${msg}: ${JSON.stringify(params)}`);\n  logger: (msg: string, params: object) => any;\n\n  // \u6570\u636e\u5e93\u7c7b\u578b - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  dbType: string | ((context: RequestContext) => string);\n  // \u6570\u636e\u6e90\u914d\u7f6e - \u4e00\u4e2a\u6570\u636e\u6e90\u8bf7\u6c42\u4e00\u6b21\n  driverFactory: (context: DriverContext) => BaseDriver | Promise<BaseDriver>;\n  // \u5916\u90e8\u6570\u636e\u5e93\u7c7b\u578b - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  externalDbType: string | ((context: RequestContext) => string);\n  // \u5916\u90e8 rollup - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  externalDriverFactory: (context: RequestContext) => BaseDriver | Promise<BaseDriver>;\n\n  // AppID - \u6bcf\u6b21\u8bf7\u6c42\n  // \u7f13\u5b58 Key - schema compilation results, connection pool \u7b49\n  // \u4f8b\u5982 ({ securityContext }) => `CUBEJS_APP_${securityContext.tenantId}_${securityContext.user_id}`\n  contextToAppId: (context: RequestContext) => string;\n  // \u67e5\u8be2\u7f16\u6392\u7f13\u5b58 Key - \u9ed8\u8ba4\u4e3a appId - \u6bcf\u6b21\u8bf7\u6c42\n  // \u6570\u636e\u5e93\u8fde\u63a5, \u6267\u884c\u961f\u5217, \u9884\u805a\u5408\u8868\u7f13\u5b58\n  // \u4f8b\u5982 ({ securityContext }) => `CUBEJS_APP_${securityContext.tenantId}`\n  contextToOrchestratorId: (context: RequestContext) => string;\n  // Schema \u4ed3\u5e93 - \u6bcf AppID \u8bf7\u6c42\n  // \u5b9e\u73b0\u591a\u79df\u6237\u4e0d\u540c schema\n  // \u4f8b\u5982 ({ securityContext }) => new FileRepository(`schema/${securityContext.appId}`)\n  repositoryFactory: (context: RequestContext) => SchemaFileRepository;\n  // REST \u548c WebSockets API \u9274\u6743\n  // \u9ed8\u8ba4 \u68c0\u67e5 Authorization JWT\uff0c\u9a8c\u8bc1\u540e\u5185\u5bb9\u8bbe\u7f6e\u4e3a req.securityContext\n  // \u53ef\u7981\u7528 (req, auth) => {}\n  checkAuth: (req: ExpressRequest, authorization: string) => any;\n  // SQL API \u9274\u6743 - \u9ed8\u8ba4\u6821\u9a8c CUBE_SQL_USERNAME, CUBE_SQL_PASSWORD\n  checkSqlAuth: (req: SQLRequest, user: string) => any;\n  // \u67e5\u8be2\u6267\u884c\u524d\u7684\u989d\u5916\u68c0\u67e5\n  queryRewrite: (query: object, context: RequestContext) => object;\n  // \u9884\u805a\u5408 schema - \u63a8\u8350\u751f\u4ea7\u548c\u5f00\u53d1\u4f7f\u7528\u4e0d\u540c schema - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  // \u5f00\u53d1\u6a21\u5f0f\u9ed8\u8ba4 dev_pre_aggregations\n  // \u751f\u4ea7\u6a21\u5f0f\u9ed8\u8ba4 prod_pre_aggregations\n  preAggregationsSchema: string | ((context: RequestContext) => string);\n  // schema \u7248\u672c - \u786e\u5b9a\u4ec0\u4e48\u65f6\u5019\u91cd\u65b0\u7f16\u8bd1\n  schemaVersion: (context: RequestContext) => string;\n\n  scheduledRefreshTimer: boolean | number;\n  scheduledRefreshTimeZones: string[];\n  scheduledRefreshContexts: () => Promise<object[]>;\n\n  // \u6269\u5c55 RequestContext\n  extendContext: (req: ExpressRequest) => any;\n  // \u9ed8\u8ba4 250\n  compilerCacheSize: number;\n  // \u5355\u4f4d ms\n  maxCompilerCacheKeepAlive: number;\n  updateCompilerCacheKeepAlive: boolean;\n  allowUngroupedWithoutPrimaryKey: boolean;\n  telemetry: boolean;\n\n  http: {\n    cors: {\n      methods: string | string[];\n      origin: string;\n      allowedHeaders: string | string[];\n      exposedHeaders: string | string[];\n      credentials: boolean;\n      maxAge: number;\n      preflightContinue: boolean;\n      optionsSuccessStatus: number;\n    };\n  };\n\n  jwt: {\n    jwkUrl?: ((payload: any) => string) | string;\n    key?: string;\n    algorithms?: string[];\n    issuer?: string[];\n    audience?: string;\n    subject?: string;\n    claimsNamespace?: string;\n  };\n  // \u63a8\u8350\u751f\u4ea7\u4f7f\u7528 redis\n  cacheAndQueueDriver: 'memory' | 'redis';\n  // \u63a8\u8350\u4fdd\u7559\u9ed8\u8ba4\n  orchestratorOptions: OrchestratorOptions | ((context: RequestContext) => OrchestratorOptions);\n  allowJsDuplicatePropsInSchema: boolean;\n}\n\ninterface OrchestratorOptions {\n  redisPrefix: string;\n  rollupOnlyMode: bool;\n  queryCacheOptions: {\n    refreshKeyRenewalThreshold: number;\n    backgroundRenew: boolean;\n    queueOptions: QueueOptions;\n  };\n  preAggregationsOptions: {\n    queueOptions: QueueOptions;\n  };\n}\n\ninterface QueueOptions {\n  concurrency: number;\n  continueWaitTimeout: number;\n  executionTimeout: number;\n  orphanedTimeout: number;\n  heartBeatInterval: number;\n}\n\ninterface RequestContext {\n  securityContext: object;\n  requestId: string;\n}\n\ninterface DriverContext extends RequestContext {\n  dataSource: string;\n}\n\ninterface SchemaFileRepository {\n  dataSchemaFiles(): Promise<FileContent[]>;\n}\n\ninterface FileContent {\n  fileName: string;\n  content: string;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json",metastring:'title="QueueOptions"',title:'"QueueOptions"'}),'{\n  "concurrency": 2,\n  "continueWaitTimeout": 5,\n  "executionTimeout": 600,\n  "orphanedTimeout": 120,\n  "heartBeatInterval": 30\n}\n')),(0,r.kt)("h2",p({},{id:"multitenancy"}),"Multitenancy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multitenancy vs Multiple Data Sources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multitenancy",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u591a\u7528\u6237\uff0c\u4e0d\u540c\u6570\u636e\u96c6"))),(0,r.kt)("li",{parentName:"ul"},"Multiple Data Sources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u6570\u636e\u4e0d\u540c\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"cube \u5173\u8054 dataSource"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e dbType+driverFactory \u751f\u6210\u591a\u6570\u636e\u6e90"))))),(0,r.kt)("li",{parentName:"ul"},"Security Context vs Multitenant Compile Context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Security Context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"row-level security within the same database for different users"))),(0,r.kt)("li",{parentName:"ul"},"Multitenant Compile Context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"access different databases"))))),(0,r.kt)("li",{parentName:"ul"},"Security Context vs queryRewrite",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Security Context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"explicit control")))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="cube.js"',title:'"cube.js"'}),"const PostgresDriver = require('@cubejs-backend/postgres-driver');\n\nmodule.exports = {\n  driverFactory: ({ dataSource }) => new PostgresDriver({ database: dataSource }),\n};\n")),(0,r.kt)("h2",p({},{id:"\u6570\u636e\u5e93"}),"\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const MySQLDriver = require('@cubejs-backend/mysql-driver');\n\nnew MySQLDriver({\n  host: process.env.CUBEJS_EXT_DB_HOST,\n  database: process.env.CUBEJS_EXT_DB_NAME,\n  port: process.env.CUBEJS_EXT_DB_PORT,\n  user: process.env.CUBEJS_EXT_DB_USER,\n  password: process.env.CUBEJS_EXT_DB_PASS,\n});\n")))}C.isMDXComponent=!0}}]);