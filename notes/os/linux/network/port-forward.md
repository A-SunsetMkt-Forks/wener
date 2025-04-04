---
title: Port forward
---

# Port forward

- 所有的负载均衡都能实现
  - Nginx - TCP,UDP
  - HAProxy - TCP
  - Keepalived
- iptables - 内核层实现
- SSH
- socat
- nc
- [samhocevar/rinetd](https://github.com/samhocevar/rinetd)
  - [rinetd.8](https://manpages.debian.org/unstable/rinetd/rinetd.8.en.html)
- 参考
  - [How To Forward Ports through a Linux Gateway with Iptables](https://www.digitalocean.com/community/tutorials/how-to-forward-ports-through-a-linux-gateway-with-iptables)

```bash
socat TCP4-LISTEN:80,fork TCP4:www.yourdomain.org:8080

# 启用转发
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

# 本地
#   eth0 192.168.1.2
#   testnet 10.10.1.1
# 目标
#   testnet 10.10.2.1
# eth0:80 -> testnet 10.10.2.1

# 允许新的链接 eth0:80 -> testnet
iptables -A FORWARD -i eth0 -o testnet -p tcp --syn --dport 80 -m conntrack --ctstate NEW -j ACCEPT
# 允许链接通信 eth0 -> testnet 和 testnet -> eth0
iptables -A FORWARD -i eth0 -o testnet -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A FORWARD -i testnet -o eth0 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# 默认拒绝
iptables -P FORWARD DROP

# 从外部可以通过，但是本地是不可以的
curl 192.168.1.2
```

## DNAT

- 不同网口转发需要控制好 SNAT 地址

```bash
# 允许转发 - 实际使用时建议进行更精细化控制 - 防火墙
iptables -A FORWARD -j ACCEPT

# DNAT eth0:80 -> 10.10.2.1
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 10.10.2.1
# SNAT eth0:80 -> 10.10.2.1 from 10.10.1.1
iptables -t nat -A POSTROUTING -o eth0 -p tcp --dport 80 -d 10.10.2.1 -j SNAT --to-source 10.10.1.1

# 可以一个网口配置一个 SNAT - 所有出去的都是相同的 IP
iptables -t nat -A POSTROUTING -o eth0 -j SNAT --to-source 10.10.1.1

# 如果是动态 IP 也可以直接使用 MASQUERADE
iptables -t nat -A POSTROUTING -j MASQUERADE
```

## DNAT+SNAT

- GUEST
  - 192.168.1.3/24
- HOST
  - eth0 192.168.1.2/24
  - testnet 10.10.1.1
- TARGET
  - testnet 10.10.2.1

```bash
# 准备
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -A FORWARD -j ACCEPT

# 调试
tcpdump -ni any 'port 2222 or (host 10.10.2.1 and port 22)'

# DNAT
# 192.168.1.3=>192.168.1.2:2222 -> 192.168.1.2=>10.10.2.1:22
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 2222 -j DNAT --to-destination 10.10.2.1:22
# 也可以
# iptables -t nat -A PREROUTING -d 192.168.1.2 -p tcp -m tcp --dport 2222 -j DNAT --to-destination 10.10.2.1:22

# SNAT
# 192.168.1.2=>10.10.2.1:22 -> 10.10.1.1=>10.10.2.1:22
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -j SNAT --to-source 10.10.1.1
# 也可以
# iptables -t nat -A POSTROUTING -o testnet -j SNAT --to-source 10.10.1.1
```

以上规则转换为 nftables

```
# DNAT+SNAT
table ip nat {
	chain PREROUTING {
		type nat hook prerouting priority dstnat; policy accept;
		iifname "eth0" meta l4proto tcp # xt_tcp counter packets 1 bytes 64 # xt_DNAT
	}

	chain INPUT {
		type nat hook input priority 100; policy accept;
	}

	chain POSTROUTING {
		type nat hook postrouting priority srcnat; policy accept;
		oifname "testnet" counter packets 2 bytes 124 # xt_SNAT
	}

	chain OUTPUT {
		type nat hook output priority -100; policy accept;
	}
}
# 允许转发
table ip filter {
	chain INPUT {
		type filter hook input priority filter; policy accept;
	}

	chain FORWARD {
		type filter hook forward priority filter; policy accept;
		counter packets 9 bytes 509 accept
	}

	chain OUTPUT {
		type filter hook output priority filter; policy accept;
	}
}
```

## 本地端口转发

```bash
# 8001 -> 80
iptables -t nat -A PREROUTING -s 127.0.0.1 -p tcp --dport 8001 -j REDIRECT --to 80
iptables -t nat -A OUTPUT -s 127.0.0.1 -p tcp --dport 8001 -j REDIRECT --to 80
```

```bash
#  UDP 500, 4500
iptables -t nat -A PREROUTING -p udp --dport 500 -j DNAT --to-destination 192.168.1.100:500
iptables -t nat -A PREROUTING -p udp --dport 4500 -j DNAT --to-destination 192.168.1.100:4500

# 确保转发后的数据包可以返回客户端
iptables -t nat -A POSTROUTING -p udp --dport 500 -d 192.168.1.100 -j MASQUERADE
iptables -t nat -A POSTROUTING -p udp --dport 4500 -d 192.168.1.100 -j MASQUERADE
```
