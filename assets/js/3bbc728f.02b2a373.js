"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64658],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"PHP FAQ",tags:["FAQ"]},g="PHP FAQ",h={unversionedId:"languages/php/php-faq",id:"languages/php/php-faq",title:"PHP FAQ",description:"Timezone",source:"@site/../notes/languages/php/php-faq.md",sourceDirName:"languages/php",slug:"/languages/php/faq",permalink:"/notes/languages/php/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/php/php-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1700666411,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"PHP FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"PHP Conf",permalink:"/notes/languages/php/conf"},next:{title:"PHP FPM",permalink:"/notes/languages/php/fpm"}},y={},b=[{value:"Timezone",id:"timezone",level:2},{value:"redis session",id:"redis-session",level:2},{value:"\u5f3a\u5236\u7c7b\u578b",id:"\u5f3a\u5236\u7c7b\u578b",level:2},{value:"Connection to `ssl://pecl.php.net:443&#39; failed: Unable to find the socket transport &quot;ssl&quot; - did you forget to enable it when you configured PHP",id:"connection-to-sslpeclphpnet443-failed-unable-to-find-the-socket-transport-ssl---did-you-forget-to-enable-it-when-you-configured-php",level:2},{value:"sodium_crypto_aead_aes256gcm_decrypt",id:"sodium_crypto_aead_aes256gcm_decrypt",level:2},{value:"Allowed memory size of 134217728 bytes exhausted (tried to allocate 65011744 bytes)",id:"allowed-memory-size-of-134217728-bytes-exhausted-tried-to-allocate-65011744-bytes",level:2},{value:"epoll_wait() reported that client prematurely closed connection, so upstream connection is closed too while sending request to upstream",id:"epoll_wait-reported-that-client-prematurely-closed-connection-so-upstream-connection-is-closed-too-while-sending-request-to-upstream",level:2},{value:"Declaration of MonologLogger must be compatible with PsrExtLogLoggerInterface",id:"declaration-of-monologlogger-must-be-compatible-with-psrextlogloggerinterface",level:2}],k={toc:b},w="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(w,d(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"php-faq"}),"PHP FAQ"),(0,r.kt)("h2",u({},{id:"timezone"}),"Timezone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 TZ \u73af\u5883\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"<?php\ndate_default_timezone_set('Asia/Shanghai');\n\n$script_tz = date_default_timezone_get();\nif (strcmp($script_tz, ini_get('date.timezone'))){\n    echo '\u65f6\u533a\u4e0eINI\u914d\u7f6e \u4e0d\u540c';\n} else {\n    echo '\u65f6\u533a\u4e0eINI\u914d\u7f6e \u76f8\u540c'\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"php.ini")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'[Date]\n; Defines the default timezone used by the date functions\n; http://php.net/date.timezone\n; https://www.php.net/manual/en/timezones.asia.php\ndate.timezone = "Asia/Shanghai"\n')),(0,r.kt)("h2",u({},{id:"redis-session"}),"redis session"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-redis-server-as-a-session-handler-for-php-on-ubuntu-14-04"}),"How to Set Up a Redis Server as a Session Handler for PHP on Ubuntu 14.04")),(0,r.kt)("li",{parentName:"ul"},"php5-redis")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/php5/fpm/php.ini")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'session.save_handler = redis\n# key \u683c\u5f0f\n# PHPREDIS_SESSION:j9rsgtde6st2rqb6lu5u6f4h83\nsession.save_path = "tcp://10.10.1.1:6379?auth=yourverycomplexpasswordhere"\n')),(0,r.kt)("h2",u({},{id:"\u5f3a\u5236\u7c7b\u578b"}),"\u5f3a\u5236\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"<?\ndeclare(strict_types=1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict"}),"strict_types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8 \u5f31\u7c7b\u578b \u7c7b\u578b\u8f6c\u6362")))),(0,r.kt)("h2",u({},{id:"connection-to-sslpeclphpnet443-failed-unable-to-find-the-socket-transport-ssl---did-you-forget-to-enable-it-when-you-configured-php"}),'Connection to `ssl://pecl.php.net:443\' failed: Unable to find the socket transport "ssl" - did you forget to enable it when you configured PHP'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add php7-openssl\n")),(0,r.kt)("h2",u({},{id:"sodium_crypto_aead_aes256gcm_decrypt"}),"sodium_crypto_aead_aes256gcm_decrypt"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add php7-sodium\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sodium_crypto_aead_aes256gcm_is_available()")),(0,r.kt)("h2",u({},{id:"allowed-memory-size-of-134217728-bytes-exhausted-tried-to-allocate-65011744-bytes"}),"Allowed memory size of 134217728 bytes exhausted (tried to allocate 65011744 bytes)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"php.ini",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"memory_limit=128M")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"<?\nini_set('memory_limit', '-1');\n")),(0,r.kt)("h2",u({},{id:"epoll_wait-reported-that-client-prematurely-closed-connection-so-upstream-connection-is-closed-too-while-sending-request-to-upstream"}),"epoll_wait() reported that client prematurely closed connection, so upstream connection is closed too while sending request to upstream"),(0,r.kt)("h2",u({},{id:"declaration-of-monologlogger-must-be-compatible-with-psrextlogloggerinterface"}),"Declaration of Monolog\\Logger must be compatible with PsrExt\\Log\\LoggerInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk del php82-pecl-psr\n")))}v.isMDXComponent=!0}}]);