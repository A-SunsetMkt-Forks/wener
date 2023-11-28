"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5656],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,k=s["".concat(m,".").concat(d)]||s[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return _},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return b}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),d=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const k={title:"manticoresearch"},h="manticoresearch",N={unversionedId:"db/search/manticoresearch",id:"db/search/manticoresearch",title:"manticoresearch",description:"- manticoresoftware/manticoresearch",source:"@site/../notes/db/search/manticoresearch.md",sourceDirName:"db/search",slug:"/db/search/manticoresearch",permalink:"/notes/db/search/manticoresearch",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/search/manticoresearch.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678453938,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"manticoresearch"},sidebar:"docs",previous:{title:"groonga",permalink:"/notes/db/search/groonga"},next:{title:"Meilisearch",permalink:"/notes/db/search/meilisearch"}},f={},b=[{value:"HTTP",id:"http",level:2},{value:"Notes",id:"notes",level:2},{value:"NLP",id:"nlp",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Cluster",id:"cluster",level:2},{value:"Manticoresearch 6.0",id:"manticoresearch-60",level:2}],g={toc:b},y="wrapper";function _(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(y,u(s(s({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"manticoresearch"}),"manticoresearch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/manticoresoftware/manticoresearch"}),"manticoresoftware/manticoresearch"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GPLv2, C++"),(0,a.kt)("li",{parentName:"ul"},"Database for search"),(0,a.kt)("li",{parentName:"ul"},"MySQL \u534f\u8bae\u548c\u8bed\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 \u884c\u5b58\u3001\u5217\u5b58\u3001\u6587\u6863\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"Replication based on ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/codership/galera"}),"Galera")),(0,a.kt)("li",{parentName:"ul"},"forked from Sphinx 2.3.2 in 2017"),(0,a.kt)("li",{parentName:"ul"},"JSON interface"),(0,a.kt)("li",{parentName:"ul"},"cjk, non_cjk"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Declarative \u5b9a\u4e49"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://play.manticoresearch.com/"}),"https://play.manticoresearch.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://manual.manticoresearch.com/"}),"https://manual.manticoresearch.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/manticoresoftware/columnar"}),"manticoresoftware/columnar"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://pgm.di.unipi.it/"}),"PGM algorithm")," \u4e8c\u7ea7\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/manticoresoftware/manticoresearch-javascript"}),"https://github.com/manticoresoftware/manticoresearch-javascript"))))),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 automatic sharding"),(0,a.kt)("li",{parentName:"ul"},"ID \u56fa\u5b9a\u4e3a bigint"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"port"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"9306"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"mysql")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"9308"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"HTTP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"9312"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"binary protocol")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# https://hub.docker.com/r/manticoresearch/manticore/\n# /var/lib/manticore/\n# /etc/manticoresearch/manticore.conf\ndocker run --rm -it \\\n  -v $(pwd)/data:/var/lib/manticore \\\n  -v $(pwd)/manticore.conf:/etc/manticoresearch/manticore.conf \\\n  -p 127.0.0.1:9306:9306 \\\n  -p 127.0.0.1:9308:9308 \\\n  -p 127.0.0.1:9312:9312 \\\n  --ulimit nofile=65536:65536 \\\n  --cap-add=IPC_LOCK --ulimit memlock=-1:-1 \\\n  --name manticore manticoresearch/manticore\ndocker exec -it manticore mysql -w\n\ncurl -s "http://localhost:9308/search"\ncurl -sX POST http://localhost:9308/cli -d "create table products(title text, price float) morphology=\'stem_en\'"\n\n# macOS\nbrew install manticoresoftware/manticore/manticoresearch\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/search"),(0,a.kt)("li",{parentName:"ul"},"/cli"),(0,a.kt)("li",{parentName:"ul"},"/insert"),(0,a.kt)("li",{parentName:"ul"},"/update"),(0,a.kt)("li",{parentName:"ul"},"/delete")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"-- table \u5373\u4e3a\u4e00\u4e2a\u7d22\u5f15\ncreate table\n  movies(title text, year int) morphology = 'stem_en' html_strip = '1' stopwords = 'en';\n\ninsert into\n  movies(title, year)\nvalues\n  ('The Seven Samurai', 1954),\n  ('Bonnie and Clyde', 1954),\n  ('Reservoir Dogs', 1992),\n  ('Airplane!', 1980),\n  ('Raging Bull', 1980),\n  ('Groundhog Day', 1993),\n  (\n    '<a href=\"http://google.com/\">Jurassic Park</a>',\n    1993\n  ),\n  ('Ferris Bueller''s Day Off', 1986);\n\nselect\n  highlight(),\n  year\nfrom\n  movies\nwhere\n  match('the dog');\n\nselect\n  highlight(),\n  year\nfrom\n  movies\nwhere\n  match('days') facet year;\n\nselect\n  *\nfrom\n  movies\nwhere\n  match('google');\n\n-- Column\ncreate table\n  idx(title text, type int, price float engine = 'rowwise') engine = 'columnar'\ncreate table\n  idx(title text, type int, price float engine = 'columnar');\n\ncreate table\n  idx(title text, type int, price float engine = 'columnar') engine = 'rowwise';\n\n-- \u4fee\u6539 plain index \u914d\u7f6e\u540e\n-- ALTER TABLE <index_name> RECONFIGURE\n")),(0,a.kt)("h2",s({},{id:"http"}),"HTTP"),(0,a.kt)("h2",s({},{id:"notes"}),"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Real-time index",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7531\u591a\u4e2a plain indexes \u7ec4\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u66f4\u65b0 schema"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u7528 indexer"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u5173\u8054 source"),(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u6587\u4ef6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".lock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".ram")," - RAM chunk",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rt_mem_limit"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".meta")," - RT index headers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".*.sp*")," - disk chunks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optimize_cutoff - chunk \u6570\u91cf"))))))),(0,a.kt)("li",{parentName:"ul"},"Plain index",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u9759\u6001\u6570\u636e - \u6570\u636e\u4e0d\u53ef\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"source+indexer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"source \u5fc5\u987b\u5305\u542b\u552f\u4e00\u6807\u8bc6\u7b26"),(0,a.kt)("li",{parentName:"ul"},"source \u652f\u6301 main+delta \u589e\u91cf\u6784\u5efa"))),(0,a.kt)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u76f4\u63a5\u914d\u7f6e\u597d"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string|text [stored|attribute] [indexed]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"indexed - FTS"),(0,a.kt)("li",{parentName:"ul"},"stored - docstore, \u5b58\u50a8\u5728\u78c1\u76d8, lazy read"),(0,a.kt)("li",{parentName:"ul"},"attribute - \u53ef\u4ee5 sort, group by"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u9ed8\u8ba4 attribute"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," \u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"stored indexed")))),(0,a.kt)("li",{parentName:"ul"},"multi,multi64 - \u591a\u503c\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"columnar",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5b58\u50a8 JSON"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fast_fetch='0'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8282\u7701\u7a7a\u95f4\uff0c\u4e0d\u989d\u5916\u5b58\u50a8\u5230 docstore")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"source source {\n  type             = mysql\n  sql_host         = localhost\n  sql_user         = myuser\n  sql_pass         = mypass\n  sql_db           = mydb\n  sql_query        = SELECT id, title, description, category_id  from mytable\n  sql_attr_uint    = category_id\n  sql_field_string = title\n }\n\nindex idx {\n  # plain,rt\n  type   = plain\n  source = source\n  path   = /path/to/index\n\n  stored_fields = title, content\n  stored_only_fields = title,content\n\n  rt_field          = subject\n  rt_attr_uint      = gid\n  rt_attr_bigint    = gid\n  rt_attr_multi     = tags\n  rt_attr_multi_64  = wide_tags\n  rt_attr_float     = lat\n  rt_attr_float     = lon\n  rt_attr_bool      = available\n  rt_attr_string    = title\n  rt_attr_json      = properties\n  rt_attr_timestamp = date_added\n  rt_mem_limit      = 128M\n\n  # plain\n  killlist_target = main:kl\n  columnar_attrs = *\n  columnar_attrs = id, attr1, attr2, attr3\n }\n")),(0,a.kt)("h2",s({},{id:"nlp"}),"NLP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chinese",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"charset_table=chinese or ngram_chars=chinese"),(0,a.kt)("li",{parentName:"ul"},"zh"),(0,a.kt)("li",{parentName:"ul"},"morphology=icu_chinese or ngram_chars=1 correspondingly"),(0,a.kt)("li",{parentName:"ul"},"ICU \u66f4\u51c6\u786e")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE\n  products(title text, price float) charset_table = 'cjk' morphology = 'icu_chinese' stopwords = 'zh';\n\n-- n-grams\nCREATE TABLE\n  products(title text, price float) charset_table = 'non_cjk' ngram_len = '1' ngram_chars = 'cjk';\n")),(0,a.kt)("h2",s({},{id:"kubernetes"}),"Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/manticoresoftware/manticoresearch-helm"}),"https://github.com/manticoresoftware/manticoresearch-helm"))),(0,a.kt)("h2",s({},{id:"cluster"}),"Cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"-- primary\nCREATE TABLE\n  testrt (title text, content text, gid integer);\n\nCREATE CLUSTER posts;\n\nALTER CLUSTER posts\nADD\n  testrt;\n\n-- replica\nJOIN CLUSTER posts AT 'manticore-1:9312';\n\nINSERT INTO\n  posts: testrt(title, content, gid)\nVALUES\n  ('hello', 'world', 1);\n\n-- \u7c7b\u4f3c sharding \u6548\u679c\ncreate table\n  user type = 'distributed' local = 'user1' local = 'user2';\n")),(0,a.kt)("h1",s({},{id:"version"}),"Version"),(0,a.kt)("h2",s({},{id:"manticoresearch-60"}),"Manticoresearch 6.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Elasticsearch-compatible INSERTs and REPLACEs"),(0,a.kt)("li",{parentName:"ul"},"Secondary indexes are on by default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALTER TABLE table_name REBUILD SECONDARY")),(0,a.kt)("li",{parentName:"ul"},"Auto-schema"),(0,a.kt)("li",{parentName:"ul"},"Revamp of Cost-based optimizer"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed telemetry",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"env ",(0,a.kt)("inlineCode",{parentName:"li"},"TELEMETRY=0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://manual.manticoresearch.com/Telemetry"}),"https://manual.manticoresearch.com/Telemetry")))),(0,a.kt)("li",{parentName:"ul"},"manticore-backup"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SHOW QUERIES")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SHOW KILL")),(0,a.kt)("li",{parentName:"ul"},"arm64")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"telemetry = 0\n")))}_.isMDXComponent=!0}}]);