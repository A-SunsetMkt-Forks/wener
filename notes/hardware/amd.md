---
title: AMD
---

# AMD

## Epyc

- AMD EPYC 7642
- https://en.wikipedia.org/wiki/Epyc

| Gen | Name   | Date | Arch  |
| --- | ------ | ---- | ----- |
| 4   | Genoa  | 2022 | Zen 4 |
| 3   | Milan  | 2019 | Zen 3 |
| 2   | Rome   | 2019 | Zen 2 |
| 1   | Naples | 2017 | Zen 1 |

- P -> single socket

# ROCm

- AMD GPU 加速技术
- ROCm - Radeon Open Compute
- Instinct
- Radeon Pro
- Radeon RX

```bash
apk add pciutils

lspci | grep -E 'VGA|Display'
# Radeon RX 7900 XTX

rocminfo
rocm-smi

lsmod | grep amdgpu
```
