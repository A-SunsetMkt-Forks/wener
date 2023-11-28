"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88484],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||l;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1249:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return k}});var n=r(49613),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>l(e,a(t)),y=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"OpenTelemetry"},f="OpenTelemetry",b={unversionedId:"service/observability/tracing/opentelemetry/README",id:"service/observability/tracing/opentelemetry/README",title:"OpenTelemetry",description:"- OpenTelemetry \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/observability/tracing/opentelemetry/README.md",sourceDirName:"service/observability/tracing/opentelemetry",slug:"/service/observability/tracing/opentelemetry/",permalink:"/notes/service/observability/tracing/opentelemetry/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/tracing/opentelemetry/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687760370,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"OpenTelemetry"},sidebar:"docs",previous:{title:"Jaeger",permalink:"/notes/service/observability/tracing/jaeger"},next:{title:"Sentry",permalink:"/notes/service/observability/tracing/sentry"}},g={},k=[{value:"collector",id:"collector",level:2},{value:"NodeJS",id:"nodejs",level:2}],v={toc:k},h="wrapper";function O(e){var t=e,{components:r}=t,o=y(t,["components"]);return(0,n.kt)(h,m(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"opentelemetry"}),"OpenTelemetry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OpenTelemetry \u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 spec"),(0,n.kt)("li",{parentName:"ul"},"OpenTracing \u548c OpenCensus \u5408\u5e76\u540e\u7684\u9879\u76ee"),(0,n.kt)("li",{parentName:"ul"},"API -> SDK -> Processing -> Exporter -out of app-> Collector -> Backend"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/open-telemetry/opentelemetry-operator"}),"open-telemetry/opentelemetry-operator")))),(0,n.kt)("li",{parentName:"ul"},"otlp")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it \\\n  --name opentelemetry-collector otel/opentelemetry-collector\n")),(0,n.kt)("h2",u({},{id:"collector"}),"collector"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/open-telemetry/opentelemetry-collector"}),"open-telemetry/opentelemetry-collector"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vendor-agnostic implementation"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u591a\u5957\u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u6a21\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"agent - sidecar,\u91c7\u96c6\u5668"),(0,n.kt)("li",{parentName:"ul"},"gateway - \u7f51\u5173\u96c6\u7fa4,\u72ec\u7acb\u670d\u52a1"))),(0,n.kt)("li",{parentName:"ul"},"core \u7248 - Jaeger, Prometheus, Fluent Bit"),(0,n.kt)("li",{parentName:"ul"},"contrib \u7248 - \u5305\u542b\u6240\u6709 contrib \u7ec4\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter"}),"open-telemetry/opentelemetry-collector-contrib/exporter"),"\n\u4e0d\u540c\u540e\u7aef\u7684 exporter"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"receivers"),(0,n.kt)("li",{parentName:"ul"},"processors"),(0,n.kt)("li",{parentName:"ul"},"exporters")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# \u6570\u636e\u6e90\u5b9a\u4e49 - \u5728 pipeline/service \u4e2d\u4f7f\u7528\n# push or pull\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n\nexporters:\n  otlp:\n    endpoint: otelcol:55680\n\nextensions:\n  health_check:\n  pprof:\n  zpages:\n\nservice:\n  extensions: [health_check, pprof, zpages]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n    logs:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n")),(0,n.kt)("h2",u({},{id:"nodejs"}),"NodeJS"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node\n\n# @opentelemetry/sdk-trace-web\n# @opentelemetry/sdk-metrics\nnpm add @opentelemetry/sdk-trace-node @opentelemetry/exporter-trace-otlp-proto\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title="tracing.ts"',title:'"tracing.ts"'}),"'use strict';\n\nimport process from 'node:process';\n\nconst opentelemetry = require('@opentelemetry/sdk-node');\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');\nconst { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');\nconst { Resource } = require('@opentelemetry/resources');\nconst { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');\n\n// configure the SDK to export telemetry data to the console\n// enable all auto-instrumentations from the meta package\nconst traceExporter = new ConsoleSpanExporter();\nconst sdk = new opentelemetry.NodeSDK({\n  resource: new Resource({\n    [SemanticResourceAttributes.SERVICE_NAME]: 'my-service',\n  }),\n  traceExporter,\n  instrumentations: [getNodeAutoInstrumentations()],\n});\n\n// initialize the SDK and register with the OpenTelemetry API\n// this enables the API to record telemetry\nsdk.start();\n\n// gracefully shut down the SDK on process exit\nprocess.on('SIGTERM', () => {\n  sdk\n    .shutdown()\n    .then(() => console.log('Tracing terminated'))\n    .catch((error) => console.log('Error terminating tracing', error))\n    .finally(() => process.exit(0));\n});\n")))}O.isMDXComponent=!0}}]);