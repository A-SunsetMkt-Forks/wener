---
title: IPv6
---

# IPv6

- [NICMx/Jool](https://github.com/NICMx/Jool)
  SIIT and NAT64 for Linux
- 参考
  - https://test-ipv6.com/

```bash
[ -f /proc/net/if_inet6 ] && echo 'IPv6: yes' || echo 'IPv6: no'

modprobe ipv6
cat /proc/net/if_inet6

# disable
sysctl -w net.ipv6.conf.all.disable_ipv6=1
sysctl -w net.ipv6.conf.default.disable_ipv6=1
sysctl -w net.ipv6.conf.lo.disable_ipv6=1
```
