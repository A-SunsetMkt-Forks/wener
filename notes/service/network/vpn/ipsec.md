---
title: IPSec
---

# IPSec

- IPSec - Internet Protocol Security
- 数据加密
- 验证来源
- 验证数据完整性
- 主要特性
  - 内核加密：速度快
  - 高加密强度：确保数据安全
  - 开放协议：兼容性好
- IPSec 使用的协议：
  - AH (Authentication Header)：数据完整性和来源验证
  - ESP (Encapsulating Security Payload)：数据加密
- IPSec 的工作模式：
  - 通道模式：适用于站点对站点和主机对主机的通信，封装消息头和消息体
  - 传输模式：适用于主机对主机的通信，仅封装消息体，配置简单，性能更好
- 机会性加密 (Opportunistic IPsec)：
  - 允许大量节点使用相同的配置进行部署
  - 适用于企业或云环境
- 参考
  - [IPsec](https://en.wikipedia.org/wiki/IPsec)
  - [Full-mesh IPsec network](https://www.usenix.org/sites/default/files/conference/protected-files/srecon16europe_slides_garcia.pdf)
  - [IPSec over NAT](http://docs.ruckuswireless.com/fastiron/08.0.80/fastiron-08080-securityguide/GUID-0F5E2C64-B9B8-4900-A446-F44FBEA493C1.html)
  - [CONFIGURING A VPN WITH IPSEC](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/configuring-a-vpn-with-ipsec_securing-networks)
  - [“On the fly” IPsec VPN with iproute2](https://backreference.org/2014/11/12/on-the-fly-ipsec-vpn-with-iproute2/)
  - [Opportunistic IPsec](https://libreswan.org/wiki/HOWTO:_Opportunistic_IPsec)
  - [Quick Start: 在 AWS 云上部署机会性 IPsec 网格](https://aws.amazon.com/cn/about-aws/whats-new/2019/05/new-quick-start-deploys-opportunistic-ipsec-mesh-on-aws/)
  - [OPPORTUNISTIC ENCRYPTION USING IPSEC](http://events17.linuxfoundation.org/sites/events/files/slides/LinuxSecuritySummit-2016-OE-16x9.pdf)
  - [IPsec](https://en.wikipedia.org/wiki/IPsec) - Internet Protocol Security
  - [Full-mesh IPsec network](https://www.usenix.org/sites/default/files/conference/protected-files/srecon16europe_slides_garcia.pdf)
    - [n2n](https://github.com/ntop/n2n) 迁移 IPSec
    - 不要使用 ipsec-tools/racoon
  - [IPSec over NAT](http://docs.ruckuswireless.com/fastiron/08.0.80/fastiron-08080-securityguide/GUID-0F5E2C64-B9B8-4900-A446-F44FBEA493C1.html)
  - RHEL 8 [CONFIGURING A VPN WITH IPSEC](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/configuring-a-vpn-with-ipsec_securing-networks)
  - [“On the fly” IPsec VPN with iproute2](https://backreference.org/2014/11/12/on-the-fly-ipsec-vpn-with-iproute2/)
  - http://www.unixwiz.net/techtips/iguide-ipsec.html

```bash
# ip xfrm
# =========
# http://man7.org/linux/man-pages/man8/ip-xfrm.8.html
# 当前的 SPDB
ip xfrm policy
# 当前的 SADB
ip xfrm state
# 监控 SADB 和 SPDB 变更
ip xfrm monitor
# 删除所有 SADB
ip xfrm state flush

# 内核的 xfrm 统计信息
# https://www.kernel.org/doc/Documentation/networking/xfrm_proc.txt
cat /proc/net/xfrm_stat
```

## 概念

- 一组协议 - 开放标准
- 核心能力
  - 数据加密
  - 数据来源验证
  - 数据完整性
- 特性
  - 内核加密 - 速度快
  - 加密强度较高
  - 开放协议
- 协议方式
  - AH - Authentication Header - 数据完整性和来源校验
  - ESP - Encapsulating Security Payload - 数据加密
  - AH+ESP
- SP - Security Policy - 安全策略
  - 存储在 SPD - Security Policy Database
  - 由内核使用，表述如下语义
    - 从 A 到 B 使用 ESP 的传输模式
    - 从 C 到 D 的 443 端口不使用 IPSec
- SPD - Security Policy Database - 安全策略数据库
  - 定义 SA 路由 - 包 匹配 得出目标 SA
- SA - Security Association - 安全关系
  - 单向的点之间安全配置
  - 包含点的基本信息
  - 存储在 SAD
  - wikipedia [SA](https://en.wikipedia.org/wiki/Security_association)
- IKE - Internet Key Exchange
  - 协商用于建立安全通道的算法和密钥
  - 协商完成后的信息记录为 SA
- 工作方式
  - 通道模式
  - 传输模式 - transport

**工作模式**

| 模式\方式 | 封装消息头 | 封装消息体 | 主机对主机 | 站点对站点 |
| --------- | ---------- | ---------- | ---------- | ---------- |
| 通道模式  | ✅         | ✅         | ✅         | ✅         |
| 传输模式  | ❌         | ✅         | ✅         | ❌         |

> 传输模式配置更简单，性能更好

## Opportunistic IPsec

- libreswan HowTo [Opportunistic IPsec](https://libreswan.org/wiki/HOWTO:_Opportunistic_IPsec)
- 大量节点使用相同的配置来部署 IPsec - 添加节点不需要从新配置现有节点
- 主要用于企业或云部署
- 也叫 Mesh Encryption / [Opportunistic encryption](https://en.wikipedia.org/wiki/Opportunistic_encryption)
- 参考
  - [Quick Start: 在 AWS 云上部署机会性 IPsec 网格](https://aws.amazon.com/cn/about-aws/whats-new/2019/05/new-quick-start-deploys-opportunistic-ipsec-mesh-on-aws/)
  - [OPPORTUNISTIC ENCRYPTION USING IPSEC](http://events17.linuxfoundation.org/sites/events/files/slides/LinuxSecuritySummit-2016-OE-16x9.pdf)
