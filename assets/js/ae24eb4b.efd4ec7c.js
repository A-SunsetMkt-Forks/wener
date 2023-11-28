"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17214],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(a),d=l,h=c["".concat(o,".").concat(d)]||c[d]||s[d]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61406:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return h},metadata:function(){return N},toc:function(){return b}});var r=a(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&u(e,a,t[a]);return e},s=(e,t)=>n(e,i(t)),d=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const h={tags:["Awesome"]},k="LDAP Awesome",N={unversionedId:"service/auth/ldap/ldap-awesome",id:"service/auth/ldap/ldap-awesome",title:"LDAP Awesome",description:"| ref       | for              |",source:"@site/../notes/service/auth/ldap/ldap-awesome.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/awesome",permalink:"/notes/service/auth/ldap/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/ldap/ldap-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679563201,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{tags:["Awesome"]},sidebar:"docs",previous:{title:"glauth",permalink:"/notes/service/auth/ldap/glauth"},next:{title:"LDAP Command line",permalink:"/notes/service/auth/ldap/cli"}},f={},b=[{value:"Server",id:"server",level:2},{value:"Lightweight LDAP Server",id:"lightweight-ldap-server",level:2},{value:"Library",id:"library",level:2}],g={toc:b},v="wrapper";function y(e){var t=e,{components:a}=t,l=d(t,["components"]);return(0,r.kt)(v,s(c(c({},g),l),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"ldap-awesome"}),"LDAP Awesome"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"ref"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"for"),(0,r.kt)("th",c({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"https://www.rfc-editor.org/rfc/rfc2251"}),"rfc2251")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"LDAPv3"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1997")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"https://www.rfc-editor.org/rfc/rfc2252"}),"rfc2252")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Attribute Syntax"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",c({},{id:"server"}),"Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/notes/service/auth/ldap/openldap"}),"OpenLDAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/notes/service/auth/ldap/apacheds"}),"Apache Directory Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/OpenIdentityPlatform/OpenDJ"}),"OpenDJ")),(0,r.kt)("li",{parentName:"ul"},"Kanidm"),(0,r.kt)("li",{parentName:"ul"},"389 Directory Server"),(0,r.kt)("li",{parentName:"ul"},"Active Directory"),(0,r.kt)("li",{parentName:"ul"},"Apple Open Directory"),(0,r.kt)("li",{parentName:"ul"},"eDirectory"),(0,r.kt)("li",{parentName:"ul"},"Red Hat Directory Server"),(0,r.kt)("li",{parentName:"ul"},"Oracle Internet Directory"),(0,r.kt)("li",{parentName:"ul"},"Sun Java System Directory Server"),(0,r.kt)("li",{parentName:"ul"},"OpenDS"),(0,r.kt)("li",{parentName:"ul"},"Oracle Unified Directory"),(0,r.kt)("li",{parentName:"ul"},"IBM Tivoli Directory Server"),(0,r.kt)("li",{parentName:"ul"},"Windows NT Directory Services (NTDS)"),(0,r.kt)("li",{parentName:"ul"},"Critical Path Directory Server"),(0,r.kt)("li",{parentName:"ul"},"Lotus Domino"),(0,r.kt)("li",{parentName:"ul"},"Nexor Directory"),(0,r.kt)("li",{parentName:"ul"},"Novell eDirectory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/erthink/ReOpenLDAP"}),"erthink/ReOpenLDAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://directory.fedoraproject.org/"}),"https://directory.fedoraproject.org/"))),(0,r.kt)("h2",c({},{id:"lightweight-ldap-server"}),"Lightweight LDAP Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/notes/service/auth/ldap/glauth"}),"glauth/glauth"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"LDAP server for development, home use, or CI"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u80fd\u529b\u7ba1\u7406"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/nitnelave/lldap"}),"nitnelave/lldap"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv3, Rust"),(0,r.kt)("li",{parentName:"ul"},"GraphQL - ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/nitnelave/lldap/blob/main/schema.graphql"}),"https://github.com/nitnelave/lldap/blob/main/schema.graphql")),(0,r.kt)("li",{parentName:"ul"},"JWT Auth"),(0,r.kt)("li",{parentName:"ul"},"WebUI \u7ba1\u7406\u7528\u6237"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 LDAPS, HTTPS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/majewsky/portunus"}),"majewsky/portunus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv3, Go")))),(0,r.kt)("h2",c({},{id:"library"}),"Library"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/openstandia/ldap-pg"}),"openstandia/ldap-pg"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv2, Go"),(0,r.kt)("li",{parentName:"ul"},"LDAP server with PostgreSQL as the backend"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/vjeantet/ldapserver"}),"vjeantet/ldapserver"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv2, Go"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/jimlambrt/gldap"}),"jimlambrt/gldap"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"Build LDAP services w/ Go"))))),(0,r.kt)("li",{parentName:"ul"},"Client",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/go-ldap/ldap"}),"go-ldap/ldap"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"LDAP v3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/FreeDSx/LDAP"}),"FreeDSx/LDAP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, PHP"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/DirectoryTree/LdapRecord"}),"DirectoryTree/LdapRecord"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, PHP"),(0,r.kt)("li",{parentName:"ul"},"Active Record ORM that makes working with LDAP"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/Adldap2/Adldap2"}),"Adldap2/Adldap2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pwm-project/pwm"}),"pwm-project/pwm")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/ldapjs/node-ldapjs"}),"ldapjs/node-ldapjs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, JS"),(0,r.kt)("li",{parentName:"ul"},"Server+Client"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/lucianweber/ldap-jwt"}),"https://github.com/lucianweber/ldap-jwt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/ltb-project/self-service-password"}),"ltb-project/self-service-password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv3, PHP"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/lkarlslund/Adalanche"}),"lkarlslund/Adalanche"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AGPLv3, Go"),(0,r.kt)("li",{parentName:"ul"},"Active Directory ACL Visualizer and Explorer"))),(0,r.kt)("li",{parentName:"ul"},"mgmt",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/fusiondirectory/fusiondirectory"}),"fusiondirectory/fusiondirectory"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv2, PHP"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/LDAPAccountManager/lam"}),"LDAPAccountManager/lam"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PHP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://hub.docker.com/r/ldapaccountmanager/lam"}),"https://hub.docker.com/r/ldapaccountmanager/lam")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/eryajf/go-ldap-admin"}),"eryajf/go-ldap-admin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv3, Go+Vue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"http://www.ldapadmin.org/"}),"http://www.ldapadmin.org/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/osixia/docker-phpLDAPadmin"}),"osixia/docker-phpLDAPadmin")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/CroweCybersecurity/ad-ldap-enum"}),"CroweCybersecurity/ad-ldap-enum"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Python"),(0,r.kt)("li",{parentName:"ul"},"LDAP based Active Directory user and group enumeration tool"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/projectdiscovery/interactsh"}),"projectdiscovery/interactsh")),(0,r.kt)("li",{parentName:"ul"},"Tools",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The LDIF Merge Tool ",(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/cd/E19850-01/816-6400-10/mmldif.html"}),"https://docs.oracle.com/cd/E19850-01/816-6400-10/mmldif.html"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# http://localhost:8080/\n# /etc/ldap-account-manager\n# /var/lib/ldap-account-manager\n# https://github.com/LDAPAccountManager/lam/blob/develop/lam-packaging/docker/.env\ndocker run -it --rm \\\n  -p 8080:80 \\\n  -e LDAP_SERVER=ldap://ldap:389 \\\n  -e LDAP_USER=cn=admin,dc=wener,dc=me \\\n  -e LDAP_DOMAIN=wener.me \\\n  -e LDAP_BASE_DN=dc=wener,dc=me \\\n  -e LDAP_USERS_DN=ou=users,dc=wener,dc=me \\\n  -e LDAP_GROUPS_DN=ou=groups,dc=wener,dc=me \\\n  -e LAM_PASSWORD=master \\\n  -e LAM_LANG=zh_CN \\\n  --name lam ldapaccountmanager/lam:stable\n\n# PHPLDAPADMIN_SERVER_PATH=/phpldapadmin\n# /container/service/phpldapadmin/assets/config/config.php\ndocker run --rm -it \\\n  -p 6443:443 -p 8080:80 \\\n  -e PHPLDAPADMIN_HTTPS=false \\\n  -e PHPLDAPADMIN_LDAP_HOSTS=ldap.example.com \\\n  --name phpldapadmin osixia/phpldapadmin\n")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/bbbbbrie/awesome-ldap"}),"https://github.com/bbbbbrie/awesome-ldap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/osixia/docker-openldap"}),"https://github.com/osixia/docker-openldap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://therubyist.org/2020/04/03/ldap-in-containers/"}),"https://therubyist.org/2020/04/03/ldap-in-containers/"))))}y.isMDXComponent=!0}}]);