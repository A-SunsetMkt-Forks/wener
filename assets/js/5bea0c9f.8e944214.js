"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30517],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),h=l,k=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return a?r.createElement(k,n(n({ref:t},s),{},{components:a})):r.createElement(k,n({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,n[1]=o;for(var m=2;m<i;m++)n[m]=a[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},62730:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return N},default:function(){return v},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return b}});var r=a(49613),l=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&s(e,a,t[a]);return e},c=(e,t)=>i(e,n(t)),h=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const k={title:"Data Awesome",tags:["Awesome"]},N="Data Awesome",d={unversionedId:"service/data/data-awesome",id:"service/data/data-awesome",title:"Data Awesome",description:"- microsoft/Data-Science-For-Beginners",source:"@site/../notes/service/data/data-awesome.md",sourceDirName:"service/data",slug:"/service/data/awesome",permalink:"/notes/service/data/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/data/data-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"Data Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Wayback Machine",permalink:"/notes/service/data/crawler/wayback-machine"},next:{title:"\u6570\u636e\u6cc4\u6f0f",permalink:"/notes/service/data/breach"}},f={},b=[{value:"Crawler",id:"crawler",level:2},{value:"ETL Pipeline",id:"etl-pipeline",level:2},{value:"ML Pipeline",id:"ml-pipeline",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Archive",id:"archive",level:2},{value:"Wayback Machine",id:"wayback-machine",level:2},{value:"Dataset",id:"dataset",level:2},{value:"File Format",id:"file-format",level:2},{value:"Misc",id:"misc",level:2},{value:"Tools",id:"tools",level:2},{value:"Extract",id:"extract",level:2},{value:"Understand",id:"understand",level:2},{value:"Online",id:"online",level:2},{value:"Chinese",id:"chinese",level:2}],g={toc:b},w="wrapper";function v(e){var t=e,{components:a}=t,l=h(t,["components"]);return(0,r.kt)(w,c(u(u({},g),l),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"data-awesome"}),"Data Awesome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/Data-Science-For-Beginners"}),"microsoft/Data-Science-For-Beginners"))),(0,r.kt)("h2",u({},{id:"crawler"}),"Crawler"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scrapy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/crawlab-team/crawlab"}),"crawlab-team/crawlab"),"\n\u5206\u5e03\u5f0f\u722c\u866b\u7ba1\u7406\u5e73\u53f0\uff0c\u652f\u6301\u4efb\u4f55\u8bed\u8a00\u548c\u6846\u67b6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/MontFerret/ferret"}),"MontFerret/ferret"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Declarative web scraping"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/BruceDone/awesome-crawler"}),"BruceDone/awesome-crawler")),(0,r.kt)("li",{parentName:"ul"},"Go",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/eddycjy/fake-useragent"}),"eddycjy/fake-useragent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/asciimoo/colly"}),"asciimoo/colly")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/BruceDone/awesome-crawler"}),"BruceDone/awesome-crawler")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://mihaisplace.blog/2021/10/03/the-state-of-web-scraping-in-2021/"}),"The State of Web Scraping in 2021"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28827509"}),"HN"))))))),(0,r.kt)("h2",u({},{id:"etl-pipeline"}),"ETL Pipeline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache NiFi"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/singer-io"}),"singer.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/transferwise/pipelinewise"}),"transferwise/pipelinewise"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Python"),(0,r.kt)("li",{parentName:"ul"},"Tap \u4e3a AGPL-3.0"),(0,r.kt)("li",{parentName:"ul"},"Data Pipeline Framework using the singer.io spec"),(0,r.kt)("li",{parentName:"ul"},"postgres tap \u57fa\u4e8e wal2json"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/arrow-datafusion"}),"apache/arrow-datafusion"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28296227"}),"https://news.ycombinator.com/item?id=28296227")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/dask/dask"}),"dask/dask"),"\nParallel computing with task scheduling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/airbytehq/airbyte"}),"airbytehq/airbyte"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Java+Python+TypeScript"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/nuclio/nuclio"}),"nuclio/nuclio"),"\nServerless event and data processing platform",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Go"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pditommaso/awesome-pipeline"}),"pditommaso/awesome-pipeline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/rudderlabs/rudder-server"}),"rudderlabs/rudder-server"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AGPL-3.0, Go, TS, React"),(0,r.kt)("li",{parentName:"ul"},"Segment-alternative"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7aef PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"Customer Data Platform, CDP")))),(0,r.kt)("h2",u({},{id:"ml-pipeline"}),"ML Pipeline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/flyteorg/flyte"}),"flyteorg/flyte"),"\nKubernetes-native workflow automation platform - Machine Learning & Data Processing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/polyaxon/polyaxon"}),"polyaxon/polyaxon"),"\nMachine Learning Platform for Kubernetes")),(0,r.kt)("h2",u({},{id:"workflow"}),"Workflow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/spotify/luigi"}),"spotify/luigi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/airflow"}),"apache/airflow"))),(0,r.kt)("h2",u({},{id:"archive"}),"Archive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/freereadorg/awesome-libgen"}),"freereadorg/awesome-libgen"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://libgen.rs/scimag/repository_torrent/"}),"repository_torrent")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/ArchiveBox/ArchiveBox"}),"ArchiveBox/ArchiveBox"))),(0,r.kt)("h2",u({},{id:"wayback-machine"}),"Wayback Machine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/hartator/wayback-machine-downloader"}),"hartator/wayback-machine-downloader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jsvine/waybackpack"}),"jsvine/waybackpack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/oduwsdl/archivenow"}),"oduwsdl/archivenow"))),(0,r.kt)("h2",u({},{id:"dataset"}),"Dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/datasets/awesome-data"}),"datasets/awesome-data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern/denied-persons-list"}),"Denied Persons List"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://bis.doc.gov/dpl/dpl.txt"}),"https://bis.doc.gov/dpl/dpl.txt")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/NYPL-publicdomain/data-and-utilities"}),"NYPL-publicdomain/data-and-utilities"))),(0,r.kt)("h2",u({},{id:"file-format"}),"File Format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parquet - \u5217\u683c\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29\u6bd4\u3001\u5b58\u50a8\u6548\u7387\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5d4c\u5957\u6570\u636e\u7ed3\u6784"))),(0,r.kt)("li",{parentName:"ul"},"Avro - \u884c\u683c\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b schema - JSON"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u4e3a Binary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://zymeworks.github.io/avro-viewer/"}),"https://zymeworks.github.io/avro-viewer/")))),(0,r.kt)("li",{parentName:"ul"},"ORC - Optimized Row Columnar",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u989d\u5916\u7d22\u5f15\u4fe1\u606f"))),(0,r.kt)("li",{parentName:"ul"},"Arrow - \u5185\u5b58",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u5904\u7406"))),(0,r.kt)("li",{parentName:"ul"},"CSV, TSV"),(0,r.kt)("li",{parentName:"ul"},"JSON"),(0,r.kt)("li",{parentName:"ul"},"JSONL - ",(0,r.kt)("inlineCode",{parentName:"li"},".jsonl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".ndjson"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u884c\u4e00\u4e2a JSON")))),(0,r.kt)("h2",u({},{id:"misc"}),"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebookresearch/AugLy"}),"facebookresearch/AugLy"),"\ndata augmentations library for audio, image, text, and video"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://skynettools.com/profil3r-osint-tool-to-find-social-media-profiles-their-email-addresses/"}),"Profil3r \u2013 OSINT Tool To Find Social Media Profiles & Their Email Addresses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Open-source_intelligence"}),"Open-source intelligence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/ml874/Data-Science-Cheatsheet"}),"ml874/Data-Science-Cheatsheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/looker-open-source/malloy"}),"looker-open-source/malloy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/thalo-rs/thalo"}),"thalo-rs/thalo"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Event sourcing suite for Rust")))),(0,r.kt)("h2",u({},{id:"tools"}),"Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/TomWright/dasel"}),"TomWright/dasel"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"JSON, TOML, YAML, XML, CSV"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/johnkerl/miller"}),"johnkerl/miller"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"awk, sed, cut, join, and sort for name-indexed data such as CSV, TSV, and tabular JSON"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/simeji/jid"}),"simeji/jid"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"json incremental digger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fiatjaf/jiq"}),"fiatjaf/jiq"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"jid in jq syntax"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tomnomnom/gron"}),"tomnomnom/gron"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"JSON greppable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/saulpw/visidata"}),"saulpw/visidata"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv3, Python"),(0,r.kt)("li",{parentName:"ul"},"terminal spreadsheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/multiprocessio/dsq"}),"multiprocessio/dsq"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,r.kt)("li",{parentName:"ul"},"SQL for JSON, CSV, Excel, Parquet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/x2bool/xlite"}),"x2bool/xlite"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Rust"),(0,r.kt)("li",{parentName:"ul"},"SQLite for .xlsx, .xls, .ods"))),(0,r.kt)("li",{parentName:"ul"},"jq"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/dbcrossbar/dbcrossbar"}),"dbcrossbar/dbcrossbar"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 jsonl ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/dbcrossbar/dbcrossbar/issues/132"}),"https://github.com/dbcrossbar/dbcrossbar/issues/132")))),(0,r.kt)("li",{parentName:"ul"},"Twitter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/DocNow/twarc"}),"DocNow/twarc")))),(0,r.kt)("li",{parentName:"ul"},"mdb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/mdbtools/mdbtools"}),"mdbtools/mdbtools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pavlov99/mdb-export-all"}),"pavlov99/mdb-export-all")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/AccelerationNet/access2csv"}),"AccelerationNet/access2csv"))))),(0,r.kt)("h2",u({},{id:"extract"}),"Extract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/XHXIAIEIN/split-string-address"}),"XHXIAIEIN/split-string-address"))),(0,r.kt)("h2",u({},{id:"understand"}),"Understand"),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"http://dlib.net/ml_guide.svg",alt:null}))),(0,r.kt)("h2",u({},{id:"online"}),"Online"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.marinetraffic.com/en/ais/home/shipid:4248775/zoom:14"}),"https://www.marinetraffic.com/en/ais/home/shipid:4248775/zoom:14"))),(0,r.kt)("h2",u({},{id:"chinese"}),"Chinese"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bd7\u8bcd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/KonghaYao/classic-poetry"}),"https://github.com/KonghaYao/classic-poetry"))))))}v.isMDXComponent=!0}}]);