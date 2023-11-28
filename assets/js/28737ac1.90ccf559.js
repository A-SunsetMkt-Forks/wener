"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80994],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return N}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(a),k=n,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||r;return a?l.createElement(N,i(i({ref:t},m),{},{components:a})):l.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49266:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return N},metadata:function(){return h},toc:function(){return g}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>r(e,i(t)),k=(e,t)=>{var a={};for(var l in e)o.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&p.call(e,l)&&(a[l]=e[l]);return a};const N={title:"Hazelcast"},d="Hazelcast",h={unversionedId:"java/lib/hazelcast",id:"java/lib/hazelcast",title:"Hazelcast",description:"- hazelcast/hazelcast",source:"@site/../notes/java/lib/hazelcast.md",sourceDirName:"java/lib",slug:"/java/lib/hazelcast",permalink:"/notes/java/lib/hazelcast",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/lib/hazelcast.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678678348,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Hazelcast"},sidebar:"docs",previous:{title:"Guice",permalink:"/notes/java/lib/guice"},next:{title:"hikari",permalink:"/notes/java/lib/hikari"}},f={},g=[{value:"Tips",id:"tips",level:2},{value:"Hazelcast Jet",id:"hazelcast-jet",level:2},{value:"Features",id:"features",level:2},{value:"Notes",id:"notes",level:2},{value:"\u7ebf\u7a0b\u6a21\u578b",id:"\u7ebf\u7a0b\u6a21\u578b",level:2},{value:"\u6162\u64cd\u4f5c\u68c0\u6d4b",id:"\u6162\u64cd\u4f5c\u68c0\u6d4b",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Version",id:"version",level:2},{value:"IMDG 4.0",id:"imdg-40",level:2},{value:"IMDG 3.9",id:"imdg-39",level:2},{value:"IMGD 3.8",id:"imgd-38",level:3}],v={toc:g},y="wrapper";function b(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,l.kt)(y,c(s(s({},v),n),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"hazelcast"}),"Hazelcast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/hazelcast/hazelcast"}),"hazelcast/hazelcast"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,l.kt)("li",{parentName:"ul"},"IMDG + Stream"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5ba2\u6237\u7aef: Java, .NET, C++, Python, Node.js, Go"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5206\u4e3a smart \u548c dump \u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},"IMDG \u6570\u636e\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"CP \u5b50\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"IMDG - In Memory Data Grid - \u5185\u5b58\u6570\u636e\u7f51\u683c"),(0,l.kt)("li",{parentName:"ul"},"Near Cache - \u8fd1\u7f13\u5b58,\u4f1a\u5c06\u4ece\u96c6\u7fa4\u4e2d\u83b7\u53d6\u5230\u7684\u6570\u636e\u7f13\u5b58\u5728\u672c\u5730"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.hazelcast.org/docs/latest-dev/manual/html-single/"}),"\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://hazelcast.com/blog/hazelcast-platform-5-0-ga-release-the-speed-of-insight/"}),"Hazelcast Platform 5.0 GA Release"))))),(0,l.kt)("admonition",s({},{type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Hazelcast Platform 5.0 \u5408\u5e76 IMDG + Jet - 2021-09-28"))),(0,l.kt)("h2",s({},{id:"tips"}),"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hazelcast ",(0,l.kt)("a",s({parentName:"li"},{href:"https://hazelcast.org/plugins/"}),"Plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://hazelcast.org/features/"}),"Features")),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"WAN \u590d\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u70ed\u91cd\u542f, \u4e0d\u4e22\u5931\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u4e2d\u5fc3"),(0,l.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u5347\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1,\u6388\u6743"))),(0,l.kt)("li",{parentName:"ul"},"hazelcast < 5MB"),(0,l.kt)("li",{parentName:"ul"},"Features",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Distributed implementations of ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.{Queue, Set, List, Map}"),"."),(0,l.kt)("li",{parentName:"ul"},"Distributed implementation of ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.concurrent.locks.Lock"),"."),(0,l.kt)("li",{parentName:"ul"},"Distributed implementation of ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.concurrent.ExecutorService"),"."),(0,l.kt)("li",{parentName:"ul"},"Distributed ",(0,l.kt)("inlineCode",{parentName:"li"},"MultiMap")," for one-to-many relationships."),(0,l.kt)("li",{parentName:"ul"},"Distributed ",(0,l.kt)("inlineCode",{parentName:"li"},"Topic")," for publish/subscribe messaging."),(0,l.kt)("li",{parentName:"ul"},"Distributed Query, MapReduce and Aggregators."),(0,l.kt)("li",{parentName:"ul"},"Synchronous (write-through) and asynchronous (write-behind) persistence."),(0,l.kt)("li",{parentName:"ul"},"Transaction support."),(0,l.kt)("li",{parentName:"ul"},"Specification compliant JCache implementation."),(0,l.kt)("li",{parentName:"ul"},"Native Java, .NET, C++ clients, Memcache and REST clients."),(0,l.kt)("li",{parentName:"ul"},"Socket level encryption support for secure clusters."),(0,l.kt)("li",{parentName:"ul"},"Second level cache provider for Hibernate."),(0,l.kt)("li",{parentName:"ul"},"Monitoring and management of the cluster via JMX."),(0,l.kt)("li",{parentName:"ul"},"Dynamic HTTP session clustering."),(0,l.kt)("li",{parentName:"ul"},"Support for cluster info and membership events."),(0,l.kt)("li",{parentName:"ul"},"Dynamic discovery, scaling, partitioning with backups and fail-over.")))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-yml"}),"# \u662f\u5426\u542f\u7528 3.6 \u4e2d\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49\u670d\u52a1\u53d1\u73b0\nhazelcast.discovery.enabled: true\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# \u901a\u8fc7 REST \u63a5\u53e3\u83b7\u53d6\u96c6\u7fa4\u72b6\u6001\ncurl --data "dev&dev-pass" http://127.0.0.1:5701/hazelcast/rest/management/cluster/state\n')),(0,l.kt)("h2",s({},{id:"hazelcast-jet"}),"Hazelcast Jet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d41\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"Hazelcast ",(0,l.kt)("a",s({parentName:"li"},{href:"https://hazelcast.com/products/jet/"}),"Jet")),(0,l.kt)("li",{parentName:"ul"},"Jet ",(0,l.kt)("a",s({parentName:"li"},{href:"http://jet.hazelcast.org/features/"}),"Features")),(0,l.kt)("li",{parentName:"ul"},"Jet ",(0,l.kt)("a",s({parentName:"li"},{href:"http://docs.hazelcast.org/docs/jet/latest/manual/"}),"Manual"))),(0,l.kt)("h2",s({},{id:"features"}),"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Map"),(0,l.kt)("li",{parentName:"ul"},"Queue"),(0,l.kt)("li",{parentName:"ul"},"Set"),(0,l.kt)("li",{parentName:"ul"},"List"),(0,l.kt)("li",{parentName:"ul"},"MultiMap"),(0,l.kt)("li",{parentName:"ul"},"ReplicatedMap"),(0,l.kt)("li",{parentName:"ul"},"Ring Buffer"),(0,l.kt)("li",{parentName:"ul"},"Topic"),(0,l.kt)("li",{parentName:"ul"},"Reliable Topic"),(0,l.kt)("li",{parentName:"ul"},"JCache - JVM"),(0,l.kt)("li",{parentName:"ul"},"Cardinality Estimator"))),(0,l.kt)("li",{parentName:"ul"},"\u5e76\u53d1 - CP \u7cfb\u7edf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Lock"),(0,l.kt)("li",{parentName:"ul"},"Condition"),(0,l.kt)("li",{parentName:"ul"},"Semaphore"),(0,l.kt)("li",{parentName:"ul"},"AtomicLong"),(0,l.kt)("li",{parentName:"ul"},"AtomicReference"),(0,l.kt)("li",{parentName:"ul"},"ID Generator"),(0,l.kt)("li",{parentName:"ul"},"CountDownLatch"),(0,l.kt)("li",{parentName:"ul"},"CRDT PN Counter"),(0,l.kt)("li",{parentName:"ul"},"Flake ID Generator"))),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5904\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Distributed Executor Service"),(0,l.kt)("li",{parentName:"ul"},"Event Listeners"),(0,l.kt)("li",{parentName:"ul"},"Sub-Listener Interfaces for Map Listener"),(0,l.kt)("li",{parentName:"ul"},"Entry Processor"))),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TxnMap"),(0,l.kt)("li",{parentName:"ul"},"TxnMultiMap"),(0,l.kt)("li",{parentName:"ul"},"TxnQueue"),(0,l.kt)("li",{parentName:"ul"},"TxnList"),(0,l.kt)("li",{parentName:"ul"},"TxnSet"))),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Query (SQL)"),(0,l.kt)("li",{parentName:"ul"},"Query (Predicates)"),(0,l.kt)("li",{parentName:"ul"},"Paging predicates"),(0,l.kt)("li",{parentName:"ul"},"Partition predicate"),(0,l.kt)("li",{parentName:"ul"},"Built-in Predicates"),(0,l.kt)("li",{parentName:"ul"},"Continuous Query Caching"),(0,l.kt)("li",{parentName:"ul"},"Listener with Predicate"),(0,l.kt)("li",{parentName:"ul"},"Projections"),(0,l.kt)("li",{parentName:"ul"},"Fast Aggregations"))),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Near Cache"),(0,l.kt)("li",{parentName:"ul"},"HD Memory"),(0,l.kt)("li",{parentName:"ul"},"Preload Cache from Last Used"),(0,l.kt)("li",{parentName:"ul"},"Eventual Consistency Control")))),(0,l.kt)("h2",s({},{id:"notes"}),"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5206\u7247\u6570\u4e3a 271"),(0,l.kt)("li",{parentName:"ul"},"lite-member",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5b58\u50a8\u6570\u636e\u4f46\u53ef\u6267\u884c\u4efb\u52a1\u548c\u6dfb\u52a0\u76d1\u542c,\u4e0d\u5f71\u54cd\u96c6\u7fa4"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53c2\u4e0e\u5206\u7247"))),(0,l.kt)("li",{parentName:"ul"},"Smart Client - \u5bf9\u6574\u4e2a\u96c6\u7fa4\u6709\u611f\u77e5,\u5728\u5ba2\u6237\u7aef\u4f1a\u7ef4\u62a4\u5206\u7247\u8868,\u5ba2\u6237\u7aef\u4f1a\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\u5230\u76f8\u5e94\u7684\u670d\u52a1\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"Dummy Client - \u5bf9\u96c6\u7fa4\u65e0\u611f\u77e5,\u8bf7\u6c42\u7531\u670d\u52a1\u7aef\u8fdb\u884c\u8f6c\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u6210\u5458\u5c5e\u6027\u662f\u5426\u4f1a\u7f13\u5b58\u5728\u672c\u5730?"),(0,l.kt)("li",{parentName:"ul"},"\u60f3\u8981\u5b89\u5168\u7684\u5173\u95ed\u672c\u5730\u8282\u70b9\u4e0d\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u9700\u8981\u68c0\u6d4b\u8282\u70b9\u662f\u5426\u5b89\u5168"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u5bf9\u5355\u4e2a\u5206\u5e03\u5f0f\u5bf9\u8c61(Map/List)\u6307\u5b9a\u4e00\u4e2a Quorum, \u5373\u53ea\u6709\u6ee1\u8db3\u7ed9\u5b9a\u7684\u8282\u70b9\u6570\u91cf\u65f6\u8be5\u5bf9\u8c61\u624d\u53ef\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"Management Center",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"http://docs.hazelcast.org/docs/latest/manual/html-single/index.html#getting-started-to-management-center"}),"Getting Started to Management Center")),(0,l.kt)("li",{parentName:"ul"},"\u793e\u533a\u7248\u9650\u5236\u4e3a 2 \u4e2a\u6210\u5458"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u529f\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u811a\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u8b66\u544a"),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u70ed\u91cd\u542f"),(0,l.kt)("li",{parentName:"ul"},"Caches"),(0,l.kt)("li",{parentName:"ul"},"Maps"),(0,l.kt)("li",{parentName:"ul"},"Replicated Maps"),(0,l.kt)("li",{parentName:"ul"},"Queues"),(0,l.kt)("li",{parentName:"ul"},"Topics"),(0,l.kt)("li",{parentName:"ul"},"MultiMaps"),(0,l.kt)("li",{parentName:"ul"},"Executors"),(0,l.kt)("li",{parentName:"ul"},"WAN"),(0,l.kt)("li",{parentName:"ul"},"Members"))))),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MembershipListener"),(0,l.kt)("li",{parentName:"ul"},"InstanceListener"),(0,l.kt)("li",{parentName:"ul"},"MigrationListener"),(0,l.kt)("li",{parentName:"ul"},"DistributedObjectListener"),(0,l.kt)("li",{parentName:"ul"},"PartitionLostListener"))),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.nio.ssl.SSLContextFactory"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.spi.discovery.DiscoveryStrategy"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.core.QueueStore"))),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u5408",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76d1\u542c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ItemListener"))),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Queue"),(0,l.kt)("li",{parentName:"ul"},"Set"),(0,l.kt)("li",{parentName:"ul"},"List"))))),(0,l.kt)("li",{parentName:"ul"},"Map",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76d1\u542c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"EntryListener"),(0,l.kt)("li",{parentName:"ul"},"MapListener"),(0,l.kt)("li",{parentName:"ul"},"MapClearedListener"),(0,l.kt)("li",{parentName:"ul"},"MapEvictedListener"),(0,l.kt)("li",{parentName:"ul"},"EntryAddedListener"),(0,l.kt)("li",{parentName:"ul"},"EntryEvictedListener"),(0,l.kt)("li",{parentName:"ul"},"EntryRemovedListener"),(0,l.kt)("li",{parentName:"ul"},"EntryMergedListener"),(0,l.kt)("li",{parentName:"ul"},"EntryUpdatedListener"))),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.map.merge.MapMergePolicy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.map.merge.PutIfAbsentMapMergePolicy"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.map.merge.HigherHitsMapMergePolicy"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.map.merge.PassThroughMergePolicy"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.map.merge.LatestUpdateMapMergePolicy"))),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.partition.PartitionLostListener"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.core.MapStore"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.core.MapLoader"))))),(0,l.kt)("li",{parentName:"ul"},"Query",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.query.Predicate"))),(0,l.kt)("li",{parentName:"ul"},"Cache"),(0,l.kt)("li",{parentName:"ul"},"Topic",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.core.MessageListener"))),(0,l.kt)("li",{parentName:"ul"},"Reliable Topic",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u540c\u4e3a ITopic"),(0,l.kt)("li",{parentName:"ul"},"\u4f46\u5185\u90e8\u4f7f\u7528 Hazelcast Ringbuffer \u6570\u636e\u7ed3\u6784"))),(0,l.kt)("li",{parentName:"ul"},"JobTracker",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u6765\u505a MR"))),(0,l.kt)("li",{parentName:"ul"},"Semaphore"),(0,l.kt)("li",{parentName:"ul"},"Lock"),(0,l.kt)("li",{parentName:"ul"},"Ringbuffer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u91cf"),(0,l.kt)("li",{parentName:"ul"},"TTL"),(0,l.kt)("li",{parentName:"ul"},"\u5907\u4efd\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u5907\u4efd\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u683c\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8"))),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.core.RingbufferStore"))))),(0,l.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.IdentifiedDataSerializable"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.DataSerializableFactory"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.DataSerializable"),(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.Portable"))))),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"Quorum",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76d1\u542c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"com.hazelcast.quorum.QuorumListener"))))),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u4ee3\u7801\u90e8\u7f72",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542f\u4e86, \u5219\u5141\u8bb8\u4ece\u5176\u4ed6\u96c6\u7fa4\u6210\u5458\u52a0\u8f7d\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316\u90e8\u7f72, \u4e0d\u9700\u8981\u5728\u6240\u6709\u8282\u70b9\u90fd\u90e8\u7f72\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5982\u4f55\u5904\u7406\u7c7b\u52a0\u8f7d\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u9ed1\u540d\u5355\u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},"\u767d\u540d\u5355\u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u65b9\u8fc7\u6ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u53ea\u4ece lite \u8282\u70b9\u8bf7\u6c42"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"com.hazelcast.core.server.StartServer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u542f\u52a8\u7c7b")))),(0,l.kt)("h2",s({},{id:"\u7ebf\u7a0b\u6a21\u578b"}),"\u7ebf\u7a0b\u6a21\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IO \u7ebf\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a hazelcast.io.thread.count=3, \u5373 1 \u63a5\u6536, 3 \u8bfb, 3 \u5199"),(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u6709\u81ea\u5df1\u7684 Selector.select \u4e8b\u4ef6\u5206\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u53d1\u73b0\u8bfb\u6216\u5199\u7ebf\u7a0b\u8d1f\u8f7d\u4e0d\u5747\u8861\u7684\u65f6\u5019,\u4f1a\u81ea\u52a8\u8c03\u6574,\u53ef\u901a\u8fc7 hazelcast.io.balancer.interval.seconds=20 \u63a7\u5236,\u8bbe\u7f6e\u4e3a < 0 \u5373\u5173\u95ed"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8bfb\u7ebf\u7a0b\u5728\u8bfb\u53d6\u65f6\u53d1\u73b0\u8be5\u5305\u4e3a\u64cd\u4f5c\u6216\u4e8b\u4ef6\u65f6,\u4f1a\u5c06\u5176\u8fc1\u79fb\u5230\u76f8\u5e94\u7684\u7ebf\u7a0b\u505a\u540e\u7eed\u7684\u63a5\u6536\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u5206\u7c7b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u63a5\u6536\u7ebf\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u7ebf\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 hazelcast.io.input.thread.count \u5355\u72ec\u63a7\u5236"))),(0,l.kt)("li",{parentName:"ul"},"\u5199\u7ebf\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 hazelcast.io.ouput.thread.count \u5355\u72ec\u63a7\u5236"))))))),(0,l.kt)("li",{parentName:"ul"},"Event \u7ebf\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570\u91cf hazelcast.event.thread.count=5"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u961f\u5217 hazelcast.event.queue.capacity=1000000"),(0,l.kt)("li",{parentName:"ul"},"\u653e\u5165\u4e8b\u4ef6\u961f\u5217\u7684\u8d85\u65f6\u65f6\u95f4 hazelcast.event.queue.timeout.millis=250"))),(0,l.kt)("li",{parentName:"ul"},"IExecutor \u7ebf\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutorConfig")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"<executor>")," \u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u662f Hazelcast \u63d0\u4f9b\u7684\u670d\u52a1\u800c\u4e0d\u662f\u5185\u90e8\u4f7f\u7528\u7684\u7ebf\u7a0b"))),(0,l.kt)("li",{parentName:"ul"},"Operation \u7ebf\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5206\u7247\u5173\u8054",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570 hazelcast.operation.thread.count property=Max(CORE ","*"," 2, 2)"),(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u9009\u62e9\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"li"},"threadIndex = partitionId % partition thread-count")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5b9c\u5728\u8fd9\u7c7b\u7ebf\u7a0b\u4e2d\u64cd\u4f5c\u8fc7\u957f\u7684\u64cd\u4f5c,\u7ebf\u7a0b\u963b\u585e\u4f1a\u5bfc\u81f4\u540e\u7eed\u5206\u7247\u7684\u64cd\u4f5c\u53d7\u5230\u5f71\u54cd"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570 hazelcast.operation.generic.thread.count=Max(CORE / 2, 2)"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u975e\u5206\u7247\u76f8\u5173\u7684\u64cd\u4f5c\u90fd\u5728\u8fd9\u7c7b\u7ebf\u7a0b\u4e2d\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u5728 genericWorkQueue"))),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u5728 genericPriorityWorkQueue"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528\u7ebf\u7a0b\u4f1a\u5148\u68c0\u67e5 genericPriorityWorkQueue")))))),(0,l.kt)("h3",s({},{id:"\u6162\u64cd\u4f5c\u68c0\u6d4b"}),"\u6162\u64cd\u4f5c\u68c0\u6d4b"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{}),"hazelcast.slow.operation.detector.enabled\nhazelcast.slow.operation.detector.log.purge.interval.seconds\nhazelcast.slow.operation.detector.log.retention.seconds\nhazelcast.slow.operation.detector.stacktrace.logging.enabled\nhazelcast.slow.operation.detector.threshold.millis\n")),(0,l.kt)("h2",s({},{id:"\u5ba2\u6237\u7aef"}),"\u5ba2\u6237\u7aef"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://hazelcast.com/clients/#client-compatibility"}),"Clients"))),(0,l.kt)("h2",s({},{id:"kubernetes"}),"Kubernetes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/hazelcast/charts"}),"https://github.com/hazelcast/charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/hazelcast/hazelcast-operator"}),"https://github.com/hazelcast/hazelcast-operator"))),(0,l.kt)("h2",s({},{id:"version"}),"Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"http://docs.hazelcast.org/docs/rn/index.html"}),"Release Notes"))),(0,l.kt)("h2",s({},{id:"imdg-40"}),"IMDG 4.0"),(0,l.kt)("p",null,"Java 8 Language Level\nLift the language level for Hazelcast members and their API to Java 8. Add a new Java 8\nclient. Continue to maintain the Java 6 compatible client. This will allow us to take advantage\nof Java 8 language features.\nJava 9 Modularisation Java 9 modularisation for Hazelcast IMDG, which introduces Jigsaw - a new modular\nsystems with a strict enforcement of module boundaries.\nProper Separation of Public and\nPrivate APIs Re-design of the whole private/public API to keep as much private as possible.\nPublic and Stable SPI Make SPI a second public and stable API. This work includes many refactorings, client\nprotocol enhancements, documentation efforts, and reference implementations.\nEntryProcessor Contract\nFormalisation\nOptimization of the EntryProcessor which would bring the IMap behaviour inline with the\nJCache behaviour.\nUnification of Client / Member\nBehaviour in Exceptional States\nEqualization of exceptions in client-side and member-side so that clients can throw the same\nexceptions as server whenever possible. This work also includes a documentation effort on\nexceptional cases for each method."),(0,l.kt)("h2",s({},{id:"imdg-39"}),"IMDG 3.9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Features\nNear Cache: Key Store-byReference\nOption Key store-by-reference option for IMap and Hazelcast JCache Near Cache.\nDynamic Creation of Specificly\nConfigured Distributed Objects Ability to define new data structures with custom configuration on the fly.\nGigantic Cache Migration\nEnhancements Improvements in partition migration process to allow better gigantic cache migrations.\nLazy Initiation for Java Client An async client factory to connect lazily and in a non-blocking manner.\nClient Support for User Code\nDeployment Dynamic Classloading from clients for User Code Deployment.\nQuery Async API Async query methods on the IMap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Security Features\nMutual TLS Auth Java Client Allow a member to authenticate a client using a certificate installed in the client\nMutual TLS Auth C# Client Allow a member to authenticate a client using a certificate installed in the client\nManagement Center TLS TLS from members to Man Center. TLS from browser. TLS for REST endpoint\nTLS for REST endpoint on\nMembers\nGeneral Security Hardening Implement things like password blacklisting, password complexity requirements, toggling off\nof non-secure mechanisms when secure version is enabled and so on\nFast SSL/TLS Make SSL/TLS almost as fast as unencrypted.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New Hazelcast IMDG 3.9 Enterprise Features\nDynamic Addition of WAN\nEndpoints Ability to add WAN Targets to a running cluster.\nNearCache Stats in Management\nCenter\nProvision of showing data inside Near-Cache of client or member, similar to IMap/Cache in\nManagement Center.\nSearch Indexes in HD Memory Support for sorted and unsorted indexes in Hazelcast HD Memory Store.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New Hazelcast IMDG 3.9 Clients Features\nSimulator Integrations of\nC++, Python, and Node.js Clients Integration of C++, Python, and Node.js clients into Hazelcast Simulator.\nSSL Performance Improvements\nfor .NET Client Large performance increase in SSL when using the .NET Client.\nProjections for .NET Client Add projections (returning attributes rather than full values) to .NET.\nPaging Predicate for .NET Client Support for paging predicates in Hazelcast .NET Client.\nExecutorService for C++ Client Ability to use the distributed ExecutorService from Hazelcast C++ Client.\nNear Cache for C++ Client Add near cache to C++ client\nTLS for C++ Client Add TLS encryption for C++ Clients communicating with members")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New Hazelcast IMDG 3.9 Cloud & Plugins Features\nGoogle Cloud Platform Integration SPI Plugin for GCP for Cloud Discovery with a support for partition groups.\nAWS support for C++ Client We have comprehensive cloud support for Java. Adding AWS to C++.\nStats for Hibernate\nLocalRegionCache Ability to provide statistics for Hibernate LocalRegionCache.\nWeb Sessions for WebSphere\nLiberty Web sessions replication plugin for WebSphere Liberty"))),(0,l.kt)("h3",s({},{id:"imgd-38"}),"IMGD 3.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"http://hazelcast.com/content/Whats_New_in_Hazelcast_IMDG_3.8_Slides.pdf"}),"http://hazelcast.com/content/Whats_New_in_Hazelcast_IMDG_3.8_Slides.pdf")),(0,l.kt)("li",{parentName:"ul"},"Scheduled Executor Service",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Delays operations for single execution or"),(0,l.kt)("li",{parentName:"ul"},"Offers to schedule tasks for recurring events"),(0,l.kt)("li",{parentName:"ul"},"Supports execution with member selection"))),(0,l.kt)("li",{parentName:"ul"},"Continuous Query Cache \u2013 open sourced!",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Keeps a local cache on clients or members"),(0,l.kt)("li",{parentName:"ul"},"Local cache is automatically updated"),(0,l.kt)("li",{parentName:"ul"},"Predicate is used to create a view on-top of the overall dataset"))),(0,l.kt)("li",{parentName:"ul"},"Query Projection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Helps to optimize traffic"),(0,l.kt)("li",{parentName:"ul"},"Offers functionality similar to SELECT x, y, z queries"),(0,l.kt)("li",{parentName:"ul"},"Optimized handling of large object hierarchies"))),(0,l.kt)("li",{parentName:"ul"},"Revised Aggregations API",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Fast way to retrieve standard aggregates, such as min, max, avg, \u2026"),(0,l.kt)("li",{parentName:"ul"},"Supports the usage of existing indexes"),(0,l.kt)("li",{parentName:"ul"},"Easy to use API"))),(0,l.kt)("li",{parentName:"ul"},"User Code Deployment",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Lite-Member contains additional classes"),(0,l.kt)("li",{parentName:"ul"},"Black- and Whitelisting support"),(0,l.kt)("li",{parentName:"ul"},"Remote Class Caching support"),(0,l.kt)("li",{parentName:"ul"},"Security Restrictions support"))),(0,l.kt)("li",{parentName:"ul"},"Rolling Upgrades"),(0,l.kt)("li",{parentName:"ul"},"New Hazelcast IMDG 3.8 Features",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Fast Aggregations Based on Queries"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u4ee3\u7801\u90e8\u7f72",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8bbf\u95ee\u548c\u4f7f\u7528\u7528\u6237\u5b9a\u4e49\u7684\u7c7b, \u4e0d\u9700\u5176\u7c7b\u8981\u5728\u7c7b\u8def\u5f84\u4e2d"))),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6620\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 RingBuffer \u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u7eed\u67e5\u8be2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4e3a\u4f01\u4e1a\u7248\u529f\u80fd, \u73b0\u5728\u5f00\u6e90\u4e86"))),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u4e00 IMap \u548c JCache \u7684 Near Cache \u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"Near Cache \u6027\u80fd\u63d0\u5347"),(0,l.kt)("li",{parentName:"ul"},"Eventually Consistent Near Cache",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A guarantee of delivery of cache invalidations to the near cache."))),(0,l.kt)("li",{parentName:"ul"},"HyperLogLog",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 HyperLogLog \u6570\u636e\u7ed3\u6784"))),(0,l.kt)("li",{parentName:"ul"},"Scheduled Executor Service",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u7684 java.util.concurrent.ScheduledExecutorService"))),(0,l.kt)("li",{parentName:"ul"},"Queue \u548c Lock \u652f\u6301 Quorum"))),(0,l.kt)("li",{parentName:"ul"},"New Hazelcast IMDG 3.8 Enterprise Features",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Rolling Member Upgrades for Minor Releases",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Extending current rolling upgrade capability of Hazelcast IMDG (client rolling upgradeability, patch version rolling member upgrades) to allow heterogeneous versions of Hazelcast IMDG members to be rolling upgraded without service interruption for minor version changes."))),(0,l.kt)("li",{parentName:"ul"},"Copying HRS Data from a Source to a Target Cluster",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ability to copy the Hot Restart store files from a source environment to a target environment (for example, product to test environment). This feature also applies to running sources."))),(0,l.kt)("li",{parentName:"ul"},"One-Off WAN Sync with Dynamically Added Endpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ability to copy all Maps\u2019 content to a target cluster dynamically in runtime."))),(0,l.kt)("li",{parentName:"ul"},"SSL Performance Improvements (Java)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Large performance increase in SSL when using the Java client."))),(0,l.kt)("li",{parentName:"ul"},"LDAP Integration for Management Center",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Authentication and authorizarion with LDAP in Management Center."))),(0,l.kt)("li",{parentName:"ul"},"Many Management Center Enhancements",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"More metrics, stats, and improved usability and monitoring."))))),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u7684\u5ba2\u6237\u7aef\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 TLS \u8bc1\u4e66\u4f5c\u4e3a\u6388\u6743"),(0,l.kt)("li",{parentName:"ul"},"Simulator Integration for Hazelcast .NET Client"),(0,l.kt)("li",{parentName:"ul"},"Node.js \u5ba2\u6237\u7aef\u589e\u5f3a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RingBuffer, Topic, and Near Cache Support for Node.js client."))),(0,l.kt)("li",{parentName:"ul"},"Node.js \u5ba2\u6237\u7aef\u652f\u6301 SSL"),(0,l.kt)("li",{parentName:"ul"},"Near Cache Support for C++ Client"),(0,l.kt)("li",{parentName:"ul"},"AWS Discovery for C++ Client"))),(0,l.kt)("li",{parentName:"ul"},"New Hazelcast IMDG 3.8 Plugins Features",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pivotal\xae CloudFoundry"),(0,l.kt)("li",{parentName:"ul"},"IBM DynaCache API Support"),(0,l.kt)("li",{parentName:"ul"},"Discovery SPI based AWS Module"),(0,l.kt)("li",{parentName:"ul"},"Striim Hot Cache Adapter"),(0,l.kt)("li",{parentName:"ul"},"Hibernate 5.2 Support")))))}b.isMDXComponent=!0}}]);