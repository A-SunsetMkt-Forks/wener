---
title: IKEv2
---

# IKEv2

## IKEv2 服务端

- 通过 strongSwan 提供 IKEv2
- PSK
- 500/udp 4500/udp
- 参考
  - proposals not match when using iOS 14.01 https://github.com/gaomd/docker-ikev2-vpn-server/issues/51

## hwdsl2/docker-ipsec-vpn-server

- [hwdsl2/docker-ipsec-vpn-server](https://github.com/hwdsl2/docker-ipsec-vpn-server)
  - 不支持 K8S 环境运行
- 需要 privileged
- /dev/ppp for IPsec/L2TP

| env                     | default                                                                           |
| ----------------------- | --------------------------------------------------------------------------------- |
| VPN_IPSEC_PSK           | `LC_CTYPE=C tr -dc 'A-HJ-NPR-Za-km-z2-9' </dev/urandom 2>/dev/null \| head -c 20` |
| VPN_USER                | vpnuser                                                                           |
| VPN_PASSWORD            | `LC_CTYPE=C tr -dc 'A-HJ-NPR-Za-km-z2-9' </dev/urandom 2>/dev/null \| head -c 16` |
| VPN_ADDL_IP_ADDRS       |
| VPN_ADDL_USERS          | user1,user2                                                                       |
| VPN_ADDL_PASSWORDS      | pass1,pass2                                                                       |
| VPN_DNS_NAME            |
| VPN_CLIENT_NAME         | vpnclient                                                                         |
| VPN_DNS_SRV1            | 8.8.8.8                                                                           |
| VPN_DNS_SRV2            | 8.                                                                                |
| VPN_PROTECT_CONFIG      | yes                                                                               |
| VPN_ANDROID_MTU_FIX     |
| VPN_SHA2_TRUNCBUG       |
| VPN_SPLIT_IKEV2         |
| VPN_DISABLE_IPSEC_L2TP  |
| VPN_DISABLE_IPSEC_XAUTH |
| VPN_IKEV2_ONLY          |
| VPN_ENABLE_MODP1024     |
| VPN_ENABLE_MODP1536     |
| VPN_L2TP_NET            |
| VPN_L2TP_LOCAL          |
| VPN_L2TP_POO            |
| VPN_XAUTH_NET           |
| VPN_XAUTH_POOL          |

```bash
# https://github.com/hwdsl2/docker-ipsec-vpn-server/blob/master/vpn.env.example
# /etc/ipsec.d/vpnclient.p12 (for Windows & Linux)
# /etc/ipsec.d/vpnclient.sswan (for Android)
# /etc/ipsec.d/vpnclient.mobileconfig (for iOS & macOS)
docker run --rm -it --privileged \
  --name ipsec-vpn-server \
  -v /data/vpn/ipsec.d:/etc/ipsec.d \
  -v /lib/modules:/lib/modules:ro \
  -p 500:500/udp \
  -p 4500:4500/udp \
  hwdsl2/ipsec-vpn-server


docker exec -it ipsec-vpn-server ikev2.sh --listclients

alias ikev2cli="docker exec -it ipsec-vpn-server ikev2.sh"
# --revokeclient [client name]
# --deleteclient [client name]
# --removeikev2 移除所有
ikev2cli --listclients
ikev2cli -h

# ikev2cli --addclient user1 pass1
# ikev2cli --exportclient [client name]
```

## gaomd/ikev2-vpn-server

- DockerHub [ikev2-vpn-server](https://hub.docker.com/r/gaomd/ikev2-vpn-server)
  - [aomd/docker-ikev2-vpn-server](https://github.com/gaomd/docker-ikev2-vpn-server)
    - [bin/start-vpn](https://github.com/gaomd/docker-ikev2-vpn-server/blob/master/bin/start-vpn)
      - 10.8.0.0/16

```bash
docker run -d --restart always --privileged \
  -p 500:500/udp -p 4500:4500/udp \
  --name ikev2-vpn-server gaomd/ikev2-vpn-server:0.3.0

# fix proposals not match when using iOS 14.01
docker exec -it ikev2-vpn-server /bin/bash -c 'echo esp=aes256-sha256-modp2048  >> /etc/ipsec.conf'
docker restart ikev2-vpn-server

# 将 vpn1.example.com 修改为机器的 IP 地址
docker run -i -t --rm --volumes-from ikev2-vpn-server -e "HOST=vpn1.example.com" gaomd/ikev2-vpn-server:0.3.0 generate-mobileconfig > ikev2-vpn.mobileconfig

# 生成的秘钥位于 /etc/ipsec.secrets
# 如果还想二次使用, 可以拷贝出来
docker cp ikev2-vpn-server:/etc/ipsec.secrets .
# 如果已经有了 PKI
echo ": PSK \"$IKEV2_PKI\"" > ipsec.secrets
# 使用现有的 PKI 启动
docker run -d --restart always --privileged \
  -p 500:500/udp -p 4500:4500/udp -v $PWD/ipsec.secrets:/etc/ipsec.secrets \
  --name ikev2-vpn-server gaomd/ikev2-vpn-server:0.3.0
```

### 启动脚本

```bash
# https://wiki.strongswan.org/projects/strongswan/wiki/ForwardingAndSplitTunneling
# Continue reading: https://wiki.strongswan.org/projects/strongswan/wiki/VirtualIP
sysctl net.ipv4.ip_forward=1
sysctl net.ipv6.conf.all.forwarding=1
sysctl net.ipv6.conf.eth0.proxy_ndp=1
iptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT
iptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -j MASQUERADE
ip6tables -t nat -A POSTROUTING -s fd6a:6ce3:c8d8:7caa::/64 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT
ip6tables -t nat -A POSTROUTING -s fd6a:6ce3:c8d8:7caa::/64 -o eth0 -j MASQUERADE

# hotfix for openssl `unable to write 'random state'` stderr
SHARED_SECRET="123$(openssl rand -base64 32 2> /dev/null)"
[ -f /etc/ipsec.secrets ] || echo ": PSK \"${SHARED_SECRET}\"" > /etc/ipsec.secrets

# hotfix for https://github.com/gaomd/docker-ikev2-vpn-server/issues/7
rm -f /var/run/starter.charon.pid

service ndppd start
# http://wiki.loopop.net/doku.php?id=server:vpn:strongswanonopenvz
/usr/sbin/ipsec start --nofork
```

**/etc/ipsec.conf**

```ini
# /etc/ipsec.conf - strongSwan IPsec configuration file
#
# Based on http://www.strongswan.org/uml/testresults/ikev2/rw-psk-ipv4/

config setup

conn %default
    left=%defaultroute
    ikelifetime=60m
    keylife=20m
    rekeymargin=3m
    keyingtries=1
    keyexchange=ikev2
    authby=secret

conn rw
    # http://wiki.loopop.net/doku.php?id=server:vpn:strongswanonopenvz
    # https://wiki.strongswan.org/projects/strongswan/wiki/ForwardingAndSplitTunneling
    leftsubnet=0.0.0.0/0,::/0
    # end ref
    leftfirewall=yes
    right=%any
    rightsourceip=10.8.0.0/16,fd6a:6ce3:c8d8:7caa::/64
    auto=add
```

## IKEv2 Linux 客户端

```bash
apk add strongswan
service strongswan start
rc-update add strongswan

cat << CONF >> /etc/ipsec.conf
conn %default
	ikelifetime=60m
	keylife=20m
	rekeymargin=3m
	keyingtries=1
	keyexchange=ikev2
	authby=secret

conn pri
  left=%defaultroute
  leftsourceip=%config
  # 服务端地址
  right=192.168.1.1
  rightsubnet=0.0.0.0/0
  type=tunnel
  auto=add
CONF
# sed -i 's/load = yes/load = no/g' /etc/strongswan.d/charon/constraints.conf
echo ":PSK \"${IKEV2_PKI}\"" >> /etc/ipsec.secrets
ipsec restart
ipsec up pri

ipsec statusall
```

```bash
ipsec rereadsecrets
ipsec reload
ipsec restart
```

## 默认 ipsec.conf

```ini
# ipsec.conf - strongSwan IPsec configuration file

# basic configuration

config setup
	# strictcrlpolicy=yes
	# uniqueids = no

# Add connections here.

# Sample VPN connections

#conn sample-self-signed
#      leftsubnet=10.1.0.0/16
#      leftcert=selfCert.der
#      leftsendcert=never
#      right=192.168.0.2
#      rightsubnet=10.2.0.0/16
#      rightcert=peerCert.der
#      auto=start

#conn sample-with-ca-cert
#      leftsubnet=10.1.0.0/16
#      leftcert=myCert.pem
#      right=192.168.0.2
#      rightsubnet=10.2.0.0/16
#      rightid="C=CH, O=Linux strongSwan CN=peer name"
#      auto=start
```
