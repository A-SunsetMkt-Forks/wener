"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86443],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),k=n,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},12863:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return f}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),k=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const d={title:"React Query"},y="React Query",N={unversionedId:"web/react/react-query",id:"web/react/react-query",title:"React Query",description:"- TanStack/query",source:"@site/../notes/web/react/react-query.md",sourceDirName:"web/react",slug:"/web/react/query",permalink:"/notes/web/react/query",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-query.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"React Query"},sidebar:"docs",previous:{title:"React Practice",permalink:"/notes/web/react/practice"},next:{title:"React Route",permalink:"/notes/web/react/router"}},g={},f=[{value:"QueryClient",id:"queryclient",level:2},{value:"useQuery",id:"usequery",level:2},{value:"Persist",id:"persist",level:2},{value:"broadcast",id:"broadcast",level:2},{value:"React Query v5",id:"react-query-v5",level:2},{value:"React Query v4",id:"react-query-v4",level:2},{value:"React Query v3",id:"react-query-v3",level:2},{value:"React Query v2.x",id:"react-query-v2x",level:2},{value:"useMutation",id:"usemutation",level:3},{value:"isLoading vs isFetching",id:"isloading-vs-isfetching",level:2}],h={toc:f},b="wrapper";function v(e){var t=e,{components:r}=t,n=k(t,["components"]);return(0,a.kt)(b,m(c(c({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"react-query"}),"React Query"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/TanStack/query"}),"TanStack/query")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542f refetchOnMount, refetchOnWindowFocus, refetchOnReconnect"),(0,a.kt)("li",{parentName:"ul"},"cacheTime 5 \u5206\u949f - \u4e0d\u518d\u4f7f\u7528\u7684\u7684\u6570\u636e\u4fdd\u7559 5 \u5206\u949f"),(0,a.kt)("li",{parentName:"ul"},"retry=3, retryDelay exponential"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://react-query.tanstack.com/docs/comparison"}),"vs SWR vs Apollo Client"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"vs SWR - \u652f\u6301\u4fee\u6539\uff0c\u66f4\u597d\u7684\u7f13\u5b58\u72b6\u6001\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"vs Apollo - \u652f\u6301 GraphQL \u548c \u4e00\u822c\u8bf7\u6c42\uff0c\u9488\u5bf9 GraphQL \u7684 entity \u7f13\u5b58\u6ca1\u6709 apollo \u5f3a"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/dano-inc/react-query-helper"}),"dano-inc/react-query-helper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://tkdodo.eu/blog/practical-react-query"}),"Practical React Query")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://react-query.tanstack.com/guides/important-defaults"}),"Important Defaults"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"-"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"condition"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"status")),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"idle"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isIdle"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"enabled:false \u6216 mutation \u672a\u6267\u884c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"loading"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isLoading"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"error"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isError,isLoadingError,isRefetchError"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isSuccess"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"initialData"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isFetching"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"loading \u6216 \u540e\u53f0\u8bf7\u6c42")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isFetched"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isFetchedAfterMount"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u907f\u514d\u663e\u793a\u7f13\u5b58\u6570\u636e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isRefetching"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isFetching && !isLoading")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"options")),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"staleTime"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isStale"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isPlaceholderData"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"keepPreviousData"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"isPreviousData"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",c({},{id:"queryclient"}),"QueryClient"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6846\u67b6\u65e0\u5173\u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u6570\u636e\u9700\u8981 queryKey"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u67e5\u8be2\u9700\u8981 queryFn"),(0,a.kt)("li",{parentName:"ul"},"fetchQuery - \u4f1a\u8fd4\u56de\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"prefetchQuery - \u4e0d\u4f1a\u8fd4\u56de\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"getQueryData"),(0,a.kt)("li",{parentName:"ul"},"setQueryData"),(0,a.kt)("li",{parentName:"ul"},"getQueriesData"),(0,a.kt)("li",{parentName:"ul"},"setQueriesData"),(0,a.kt)("li",{parentName:"ul"},"Queries",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"invalidate"),(0,a.kt)("li",{parentName:"ul"},"refetch"),(0,a.kt)("li",{parentName:"ul"},"cancel"),(0,a.kt)("li",{parentName:"ul"},"remove"),(0,a.kt)("li",{parentName:"ul"},"reset"))),(0,a.kt)("li",{parentName:"ul"},"getQueryState"),(0,a.kt)("li",{parentName:"ul"},"isFetching"),(0,a.kt)("li",{parentName:"ul"},"isMutating"),(0,a.kt)("li",{parentName:"ul"},"getLogger"),(0,a.kt)("li",{parentName:"ul"},"getDefaultOptions"),(0,a.kt)("li",{parentName:"ul"},"setDefaultOptions"),(0,a.kt)("li",{parentName:"ul"},"setQueryDefaults"),(0,a.kt)("li",{parentName:"ul"},"getMutationDefaults"),(0,a.kt)("li",{parentName:"ul"},"setMutationDefaults"),(0,a.kt)("li",{parentName:"ul"},"getQueryCache"),(0,a.kt)("li",{parentName:"ul"},"getMutationCache"),(0,a.kt)("li",{parentName:"ul"},"clear"),(0,a.kt)("li",{parentName:"ul"},"resumePausedMutations")),(0,a.kt)("h2",c({},{id:"usequery"}),"useQuery"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 QueryObserver \u76d1\u542c\u67e5\u8be2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76d1\u542c client + options"))),(0,a.kt)("li",{parentName:"ul"},"\u7531 useQuery \u5904\u7406\u7684\u9009\u9879 - \u7531 QueryObserver \u5904\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"enabled, refetchInterval, refetchIntervalInBackground, refetchOnWindowFocus, refetchOnReconnect, notifyOnChangeProps, onSuccess, onError, onSettled, useErrorBoundary, select, suspense, keepPreviousData, placeholderData"),(0,a.kt)("li",{parentName:"ul"},"notifyOnChangeProps",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u54ea\u4e9b\u89e6\u53d1 rerender"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982: ",(0,a.kt)("inlineCode",{parentName:"li"},"['data', 'error']")," \u5728 date \u548c error \u53d8\u5316\u65f6\u89e6\u53d1"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a all \u5219\u6240\u6709\u72b6\u6001\u53d8\u5316\u90fd\u4f1a rerender"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 getter \u8ddf\u8e2a\u4f7f\u7528\u60c5\u51b5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.defineProperty(trackedResult, key, {configurable: false,enumerable: true,get:()=>{/* \u6dfb\u52a0\u8ddf\u8e2a key */}})")))),(0,a.kt)("li",{parentName:"ul"},"\u7531 QueryObserver \u5b9e\u73b0\u76d1\u542c\u903b\u8f91")))))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"// \u76d1\u542c\u6570\u636e\nconst observer = new QueryObserver(queryClient, { queryKey: ['posts'] });\n\nconst unsubscribe = observer.subscribe((result) => {\n  console.log(result);\n  unsubscribe();\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/TanStack/query/blob/main/packages/query-core/src/queryObserver.ts"}),"https://github.com/TanStack/query/blob/main/packages/query-core/src/queryObserver.ts"))),(0,a.kt)("h2",c({},{id:"persist"}),"Persist"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"\u6574\u4f53 persist \u800c\u4e0d\u662f\u5355\u6761\u8bb0\u5f55\u7ef4\u5ea6 - ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/TanStack/query/discussions/2649"}),"#2649"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PersistQueryClientProvider",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u4ece persistQueryClient unsubscribe"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u5904\u7406 restore - persistQueryClient \u8fd4\u56de\u7684 promise \u88ab resolve")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';\nimport { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n\nconst persister = createSyncStoragePersister({\n  storage: window.localStorage,\n});\n\nReactDOM.createRoot(rootElement).render(\n  <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>\n    <App />\n  </PersistQueryClientProvider>,\n);\n\n//\nconst [unsubscribe, promise] = persistQueryClient({\n  queryClient,\n  persister: localStoragePersister,\n});\n")),(0,a.kt)("h2",c({},{id:"broadcast"}),"broadcast"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u57fa\u4e8e broadcast-channel"),(0,a.kt)("li",{parentName:"ul"},"\u76d1\u542c Cache \u4e8b\u4ef6\uff0c\u5e7f\u64ad\u5230\u5176\u4ed6 tab")),(0,a.kt)("h1",c({},{id:"version"}),"Version"),(0,a.kt)("h2",c({},{id:"react-query-v5"}),"React Query v5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5316 Typescript \u4f7f\u7528\u4f53\u9a8c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u5bf9\u8c61 option \u80fd\u83b7\u53d6\u5230\u6b63\u5e38\u7c7b\u578b\uff0c\u4e4b\u524d queryKey \u4e3a\u72ec\u7acb\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"import { queryOptions } from '@tanstack/react-query'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9884\u5148\u5b9a\u4e49\u597d\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u6301\u6709\u7c7b\u578b\u4fe1\u606f"))))),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664 onSuccess \u548c onError",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ece cache \u8fd4\u56de\u65f6\u4e0d\u4f1a\u89e6\u53d1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose"}),"https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/TanStack/query/discussions/5279"}),"https://github.com/TanStack/query/discussions/5279")))),(0,a.kt)("li",{parentName:"ul"},"cacheTime -> gcTime"),(0,a.kt)("li",{parentName:"ul"},"keepPreviousData -> placeholderData"),(0,a.kt)("li",{parentName:"ul"},"loading -> pending"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useMutationState")),(0,a.kt)("li",{parentName:"ul"},"suspense",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useSuspenseQuery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useSuspenseInfiniteQuery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useSuspenseQueries")))),(0,a.kt)("li",{parentName:"ul"},"createPersister",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5355\u72ec\u7f13\u5b58 Query - \u4e4b\u524d\u53ea\u80fd\u5168\u91cf\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://tanstack.com/query/v5/docs/react/plugins/createPersister"}),"https://tanstack.com/query/v5/docs/react/plugins/createPersister")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://tanstack.com/blog/announcing-tanstack-query-v5"}),"https://tanstack.com/blog/announcing-tanstack-query-v5"))),(0,a.kt)("h2",c({},{id:"react-query-v4"}),"React Query v4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tanstack/react-query")),(0,a.kt)("li",{parentName:"ul"},"Keys \u5fc5\u987b\u4e3a\u6570\u7ec4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://react-query-alpha.tanstack.com/guides/migrating-to-react-query-4"}),"Migrating to React Query 4"))),(0,a.kt)("h2",c({},{id:"react-query-v3"}),"React Query v3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62c6\u5206 QueryCache \u4e3a QueryClient \u548c\u66f4\u5e95\u5c42\u7684 MutationCache, QueryCache"),(0,a.kt)("li",{parentName:"ul"},"useQueryCache -> useQueryClient"),(0,a.kt)("li",{parentName:"ul"},"QueryClientProvider \u53d6\u4ee3 ReactQueryConfigProvider \u548c ReactQueryCacheProvider"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e useQueries"),(0,a.kt)("li",{parentName:"ul"},"\u5305\u542b devtools - ",(0,a.kt)("inlineCode",{parentName:"li"},"react-query/devtools")),(0,a.kt)("li",{parentName:"ul"},"useQuery \u53c2\u6570\u4e0d\u518d\u662f key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u901a\u8fc7 lambada \u4f20\u9012\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd8\u662f\u8981 key ",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery(['post', id], context => fetchPost(context.queryKey[1]))")),(0,a.kt)("li",{parentName:"ul"},"enabled \u9009\u9879\u5fc5\u987b\u4e3a boolean - \u5426\u5219\u4f1a\u8b66\u544a"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 select \u90e8\u5206\u6570\u636e - \u51cf\u5c11\u91cd\u65b0\u6e32\u67d3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('user',fetchUser,{select:user=>user.username})")))))),(0,a.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 usePaginatedQuery, \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"keepPreviousData: true")," \u5b9e\u73b0\u7c7b\u4f3c\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"useInfiniteQuery \u652f\u6301\u524d\u540e\u53cc\u5411\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"useMutation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u5bf9\u8c61",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e4b\u524d ",(0,a.kt)("inlineCode",{parentName:"li"},"const [mutate, { status, reset }] = useMutation()")),(0,a.kt)("li",{parentName:"ul"},"\u73b0\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"const { mutate, mutateAsync, status, reset } = useMutation()"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"mutate \u4e0d\u8fd4\u56de promise, mutateAsync \u8fd4\u56de promise"),(0,a.kt)("li",{parentName:"ul"},"mutate \u652f\u6301\u56de\u8c03 ",(0,a.kt)("inlineCode",{parentName:"li"},"mutate('todo',{onSuccess(){},onError(){},onSettled(){}})")))))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 retry - \u65ad\u7ebf\u91cd\u8054\u4f1a\u91cd\u8bd5\uff0c\u9ed8\u8ba4\u5931\u8d25\u4e0d\u4f1a\u91cd\u8bd5"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6301\u4e45\u5316\u7136\u540e\u6062\u590d"))),(0,a.kt)("li",{parentName:"ul"},"QueryObserver, InfiniteQueryObserver, QueriesObserver - \u53ef\u7528\u4e8e\u76d1\u542c\u6570\u636e\u53d8\u5316"),(0,a.kt)("li",{parentName:"ul"},"useIsFetching - \u652f\u6301 key \u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://react-query.tanstack.com/guides/migrating-to-react-query-3"}),"v3")," - 2020-12-15")),(0,a.kt)("h2",c({},{id:"react-query-v2x"}),"React Query v2.x"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';\nimport { ReactQueryDevtools } from 'react-query-devtools';\n\nconst queryCache = new QueryCache();\n\nexport default function App() {\n  return (\n    <>\n      {/* \u7f13\u5b58 */}\n      <ReactQueryCacheProvider queryCache={queryCache}>\n        <Example />\n      </ReactQueryCacheProvider>\n      {/* \u5f00\u53d1\u5de5\u5177 */}\n      <ReactQueryDevtools initialIsOpen />\n    </>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const key = '';\nconst {\n  data, // \u83b7\u53d6\u5230\u7684\u6570\u636e\u6216\u8005\u662f\u4e0a\u6b21\u7f13\u5b58\u7684\u6570\u636e\n  error, // \u9519\u8bef\n  failureCount,\n  status, // \u72b6\u6001 - idle, loading, error, success\n  isError = status == 'error',\n  isIdle = status == 'idle',\n  isLoading = status == 'loading',\n  isSuccess = status == 'success',\n  isFetched, // \u5df2\u7ecf\u83b7\u53d6\n  isFetchedAfterMount, // \u662f\u5426\u5728 mount \u540e\u83b7\u53d6\u8fc7\n  isFetching, // \u662f\u5426\u6b63\u5728\u83b7\u53d6\n  isStale, // \u6570\u636e\u5df2\u5931\u6548\n  isPreviousData, // \u4f7f\u7528\u7684\u4e0a\u6b21\u6570\u636e\n  isPlaceholderData, // \u4f7f\u7528\u7684\u5360\u4f4d\u6570\u636e\n  refetch, // \u4ece\u65b0\u83b7\u53d6 - \u9664\u975e throwOnError \u5426\u5219\u5f02\u5e38\u53ea\u4f1a log\n  remove, // \u4ece\u7f13\u5b58\u79fb\u9664\u67e5\u8be2\n} = useQuery(\n  key,\n  /* fetcher */ (...key) => fetch(key.join()).then((v) => v.json()),\n  /* config */ {\n    enabled: true, // \u662f\u5426\u67e5\u8be2\n\n    // \u5931\u6548\u63a7\u5236\n    cacheTime: 1000 * 6 * 5, // 5m\n    staleTime: 0, // \u5931\u6548\u65f6\u95f4 - \u9ed8\u8ba4\u8fd4\u56de\u5373\u5931\u6548 - \u8bbe\u7f6e\u5931\u6548\u65f6\u95f4\u53ef\u51cf\u5c11\u8bf7\u6c42 - \u8bbe\u7f6e\u4e3a Infinity \u4e0d\u5931\u6548\n    // \u91cd\u8bd5\u63a7\u5236\n    retry: 3, // \u91cd\u8bd5\u5224\u65ad - Boolean | Int | Function(failureCount, error) => shouldRetry | Boolean\n    retryDelay: (attempt) => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000), // \u91cd\u8bd5\u5ef6\u8fdf - Function(retryAttempt: Int) => Int\n    // \u5237\u65b0\u63a7\u5236\n    refetchInterval: false, // \u5237\u65b0\u95f4\u9694 - Boolean | Integer\n    refetchIntervalInBackground: false, // \u540e\u53f0\u5237\u65b0 - Boolean\n    refetchOnMount: true, // \u5728 mount \u65f6\u5237\u65b0 - boolean | 'always'\n    refetchOnReconnect: true, // \u7f51\u7edc\u6062\u590d\u65f6\u5237\u65b0\n    refetchOnWindowFocus: true, // \u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u65f6\u5237\u65b0\n\n    // \u521d\u59cb\n    initialData: undefined, // \u521d\u59cb\u6570\u636e - any | ()=>any\n    initialStale: true, //  \u521d\u59cb\u5931\u6548 - \u5982\u679c\u8bbe\u7f6e\u4e86\u5219\u521d\u59cb\u6570\u636e\u8ba4\u4e3a\u662f\u6709\u6548\u6570\u636e - \u4f1a\u88ab\u7f13\u5b58 - boolean | ()=>boolean\n    placeholderData: undefined, // \u5360\u4f4d\u6570\u636e - loading \u7684\u65f6\u5019\u7528 - any | ()=>any\n\n    // \u72b6\u6001\u53d8\u5316\u56de\u8c03\n    notifyOnStatusChange: true, // \u72b6\u6001\u53d8\u5316 rerender - \u8bbe\u7f6e\u4e3a false \u5219 data \u6216 error \u53d8\u5316\u65f6\u624d rerender\n    onSuccess: undefined, // \u6210\u529f\u56de\u8c03 - (data)=>data\n    onError: undefined, // \u9519\u8bef\u56de\u8c03 - (error)=>void\n    onSettled: undefined, // \u5b8c\u6210\u56de\u8c03 - (data,error)=>data\n    suspense: false, // \u542f\u7528 react suspense \u6a21\u5f0f - loading \u548c error \u65f6\u4f1a suspense\n\n    queryFnParamsFilter: undefined, // \u67e5\u8be2\u53c2\u6570\u8fc7\u6ee4 - args=>filteredArgs\n    queryKeySerializerFn: undefined,\n    isDataEqual: undefined, // \u81ea\u5b9a\u4e49\u6bd4\u8f83\u64cd\u4f5c\n    keepPreviousData: false, // \u4fdd\u7559\u4e0a\u6b21\u6570\u636e - key \u53d8\u5316\u65f6\n    structuralSharing: true, // \u7ed3\u6784\u5316\u5171\u4eab - \u8de8\u67e5\u8be2\u7f13\u5b58\u5171\u4eab\n    useErrorBoundary: false,\n  },\n);\n\n// \u5206\u9875\u67e5\u8be2\nconst {\n  data = undefined,\n  resolvedData, // \u4e0a\u6b21\u6210\u529f\u6570\u636e - \u5ffd\u7565 key\n  latestData, // \u672c\u6b21\u67e5\u8be2\u6570\u636e\n  ...queryInfo\n} = usePaginatedQuery(queryKey, queryFn, options);\n\n// \u7011\u5e03\u6d41 - queryFn \u4f1a\u591a\u63a5\u53d7\u4e00\u4e2a fetchMoreVariable\nconst {\n  isFetchingMore, // false | 'next' | 'previous'\n  fetchMore, // Function(fetchMoreVariableOverride) => Promise<TResult | undefined>\n  canFetchMore,\n  ...queryInfo\n} = useInfiniteQuery(queryKey, queryFn, {\n  ...queryOptions,\n  getFetchMore: (lastPage, allPages) => fetchMoreVariable,\n});\n")),(0,a.kt)("h3",c({},{id:"usemutation"}),"useMutation"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const [\n  mutate, // \u4fee\u6539\u64cd\u4f5c\n  { status, isIdle, isLoading, isSuccess, isError, data, error, reset },\n] = useMutation(mutationFn, {\n  onMutate,\n  onSuccess,\n  onError,\n  onSettled,\n  throwOnError,\n  useErrorBoundary,\n});\n\nconst promise = mutate(variables, {\n  onSuccess,\n  onSettled,\n  onError,\n  throwOnError,\n});\n")),(0,a.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",c({},{id:"isloading-vs-isfetching"}),"isLoading vs isFetching"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"isLoading \u662f status=loading",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7b2c\u4e00\u6b21 loading \u5224\u65ad"))),(0,a.kt)("li",{parentName:"ul"},"isFetching \u662f\u540e\u53f0\u6b63\u5728\u83b7\u53d6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u662f\u6b63\u5728\u83b7\u53d6\uff0cisLoading \u4e5f\u53ef\u80fd\u4e3a false - \u56e0\u4e3a\u6709\u4e0a\u6b21\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u6570\u636e\u52a0\u8f7d\u5224\u65ad - \u5237\u65b0\u52a0\u8f7d\u8fc7\u7a0b\u663e\u793a")))))}v.isMDXComponent=!0}}]);