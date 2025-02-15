---
title: Ideas
---

# Ideas

- 还在 云盘
  - 简单的非常小的云盘
  - 主打一个不会丢失
- 看懂 字幕
  - 提供字幕翻译
  - 免费提供字幕服务
  - opensubtitles 现在收费了
  - subhd 依赖广告收入
- hn relay
  - 提供 Hacker news 的代理服务
  - 提供翻译为多个语言
- 站点评论浏览器插件
  - 浏览器插件
  - 提供 Hacker news 的评价
  - 允许用户留下标记/评论
- 播放器弹幕插件
  - 为现在的开源播放器 IINA, MPV 提供弹幕服务
- Free Mind
  - 定时推送让人生活更有意义的事情/图片
  - 定时提醒出去走走
- 个人 NAS 服务
  - 现在的云盘都不 “安全” 不 “可靠”
  - 自托管成为主流
- 游戏加速器
  - 应该个人不好做
- AI Promots Index
  - 收集整理提示词
  - 提供给 AI 生成器

## 小家

> **Notes**
>
> - Your Date is Yours.
> - 私人数据相关服务
> - 私人相册共享同步

数据离线、私有，使用 SQLite WASM。

- 小家云盘
- 小家账本
- 小家相册
- 小家通讯录
- 数据
  - 微信聊天数据
  - 抓取其他平台 - 例如：幼儿园 发照片的 APP

## Tech Fun

- 抽象的多语言的 PEG
- Clash 支持日志到 DB
- Nebula Mobile 支持中心化配置
- ldapapply - merge if exists
- alpine
  - ~~lib asan https://github.com/google/sanitizers~~
    - do not support musl
- twitter relay
  - 类似于代理 - 中间加缓存
  - UI 可增加额外的交互
    - 收藏
    - 媒体
  - 不需要 proxy 也能访问

## Wode

- wode - Wener NodeJS monorepo
- @wener/utils - JS 基础库
- @wener/client - 客户端，外部库
- @wener/reaction - React 基础库
- @wener/console - 实现 Console 应用的基础前端、公共 UI、 Oppioned UI 组件
- @wener/miniquery - 实现 MiniQuery 简单的查询语法
- apps/server - 服务端包，多个应用
  - wode-api-server
    - 入口 apis.wener.me, api.wener.tech
  - 一些小工具，代码的 playground, 后端为主
- apps/demo/mode - 前端
  - 入口 demo.wener.me, demo.wener.tech, wode.vercel.app
  - wode -> demo -> mode
  - 合并以前的一些工具，添加一些新的工具
  - 实验性质
- assistant - 桌面应用
  - wails
  - 工具桌面端，一些小尝试，封装简单工具
  - 封装 assistant ui 代理请求
  - Applet 支持渲染到单个窗口？
  - 怎么处理本地登录问题

---

- wode/demo
  - BlockNote
  - codemirror
  - colors
  - [x] systemsjs
  - [x] systemjs -> try ai/ml
  - [x] calc -> systemjs app
  - ~~bp theme for daisy~~ - 没必要，意义不大
- apis
  - rebuild
  - ~~uri schema editor - with json schema~~ - 基于 Schema 的 Editor 意义不大
    - ldap
    - redis
    - postgres
    - s3
- Indexer
  - Torrent
  - Media
  - APK

<!--
## Web3

- 婚姻登记
- r/pixel

不再对 OHM 感兴趣，繁琐没有 pegjs 直接简单
- ohm AST 生成 railroad-diagrams
  - https://github.com/harc/ohm
  - https://github.com/tabatkins/railroad-diagrams
-->

## Torrent Indexer

- Metadata
  - Probe Initial Data Block
- Torrent Builder
  - v1
  - v2
- Search By File
- Announces & Trackers
- Cralwers

## Media Indexer

- 媒体元信息关联 - douban、imdb、烂番茄、open movie

---

- 字幕索引
- 台词索引
- 翻译/多语言

## APK Indexer

## DevWebTool

- https://emn178.github.io/online-tools/sha256.html

## 参考

- https://profithunt.co/
- https://www.sideprojectors.com/
- https://www.reddit.com/r/SideProject/
- https://what-to-code.com/
- https://github.com/dailyidea/dailyidea.com---ARCHIVE
- http://github-help-wanted.com/
