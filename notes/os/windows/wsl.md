---
title: WSL
---

# WSL

:::tip

- WSL2 为完整虚拟机 - kernel+rootfs
  - 跨 OS FS 性能不太好 - **建议项目直接放到 VM 里**
  - vsc 和 jetbrain 支持直接打开 wsl 里 fs
- 等同于 macOS 下的 [lima](../virt/lima.md)
- 约等于 [firecracker](../virt/firecracker.md) 效果
- WSL2 内服务需要 portproxy 才能被外部访问
  - NIC Bridge mode [#4150](https://github.com/microsoft/WSL/issues/4150)

:::

- 文档 https://learn.microsoft.com/en-us/windows/wsl/
- 文件浏览器可直接 打开 `\\wsl$\<DISTRO>`
- Windows 10 2004
  - ms-settings:windowsupdate
- WSL2
  - Windows 10 v1903 b18362
  - Windows 11 v18362

## 启用 WSL 功能 {#enable-wsl}

- 下载安装 Windows WSL2 Update
  https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
  - 说明文档 https://aka.ms/wsl2kernel

```bash
cmd.exe /c ver # 确认当前系统版本

# runas /user:Administrator "cmd.exe"
powershell -Command "Start-Process cmd -Verb RunAs" # 以管理员权限运行

# 启用 WSL
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
# 启用 VM
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# dism.exe /online /enable-feature /featurename:Microsoft-Hyper-V-All /all /norestart # 启用 Hyper-V
# Get-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform # 检查是否启用

# 重启，安装 Windows WSL2 Update

# 设置默认 WSL 2
wsl --set-default-version 2
```

## 安装 Alpine {#install-alpine}

- 下载安装 Alpine https://github.com/yuk7/AlpineWSL/releases/download/3.21.3-1/Alpine.zip
  - 注意放到空间较大的位置

```bash
wslconfig /list              # 所有的 VM
wslconfig /setdefault Alpine # 设置 Alpine 为默认

wsl -d Alpine # 进入 Alpine VM

# 配置系统
cat << EOF > /etc/apk/repositories
https://mirrors.aliyun.com/alpine/v3.21/main
https://mirrors.aliyun.com/alpine/v3.21/community
EOF
echo "nameserver 223.5.5.5" > /etc/resolv.conf
apk update
apk upgrade -a
```

- 上海交大 https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.21/main

## Windows 开发环境 {#windows-dev}

- 推荐用 [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)
  - 支持 多 Tab
  - 仓库 [microsoft/terminal](https://github.com/microsoft/terminal)
- VSC [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 扩展
- 参考
  - [microsoft/WSL](https://github.com/microsoft/WSL)
    问题收集仓库
  - [microsoft/WSL2-Linux-Kernel](https://github.com/microsoft/WSL2-Linux-Kernel)
    实际 Linux 内核

## IntelliJ

- Terminal 直接进入 WSL
  - 配置 Terminal 为 wsl.exe -d Alpine
- 可以打开 `\\wsl$` 目录
- https://www.jetbrains.com/help/idea/how-to-use-wsl-development-environment-in-product.html

## 开发环境准备 {#dev-env}

```bash
wsl -d Alpine # 进入 WSL

apk add openssh make rsync bash nano # 基础依赖
# 开发相关依赖apk add openssh make rsync bash nano
apk add libc6-compat gcompat curl bash ca-certificates openssl ncurses coreutils python3 make gcc g++ libgcc linux-headers grep util-linux binutils findutils

bash # ash -> bash

# SSH 配置
# 同步 Windows 上的 ssh 密钥信息
USERNAME=$(/mnt/c/Windows/System32/cmd.exe /c 'echo %USERNAME%' | sed -e 's/\r//g')
rsync -a /mnt/c/Users/USERNAME/.ssh/ ~/.ssh/
chmod 700 ~/.ssh/id_rsa
# 同步 Windows 上的 git 配置
cp /mnt/c/Users/USERNAME/.gitconfig ~

# Git 配置
# 注意修改用户名和邮箱
git config --global user.name "Author Name"
git config --global user.email "email@address.com"

# NodeJS
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
chmod u+x n
# install -t /usr/local/bin n
N_NODE_MIRROR=https://npmmirror.com/mirrors/node-unofficial-builds ./n --arch x64-musl lts

# PHP 环境
apk --no-cache add php81 php81-{bcmath,bz2,calendar,common,ctype,curl,dev,dba,dom,embed,enchant,exif,fileinfo,fpm,ftp,gd,gettext,gmp,iconv,imap,intl,json,ldap,mbstring,mysqli,mysqlnd,odbc,opcache,openssl,pcntl,pdo,pdo_dblib,pdo_mysql,pdo_odbc,pdo_pgsql,pdo_sqlite,pear,pgsql,phar,phpdbg,posix,pspell,session,shmop,simplexml,snmp,soap,sockets,sqlite3,sysvmsg,sysvsem,sysvshm,tidy,tokenizer,xml,xmlreader,xmlwriter,xsl,zip,zlib}
ln -s /usr/bin/php81 /usr/bin/php
```

## 端口暴露 {#expose-ports}

> 1. 每次都需要
> 2. 需要 Admin 执行

```batch title="cmd"
start C:\Windows\system32
; 右键管理员运行 cmd.exe

; 查看 IP 地址
wsl -d Alpine ifconfig eth0
; 映射 8000 到 WSL
netsh interface portproxy set v4tov4 listenport=8000 listenaddress=0.0.0.0 connectport=8000 connectaddress=上面的地址
```

```shell
addr=$(ip -4 addr show eth0 | grep -Po '(?<=inet\s)\d+(\.\d+){3}')

export PATH="$PATH:/usr/lib/wsl/lib:/mnt/c/Windows/system32"
netsh.exe interface portproxy set v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress=$addr
```

```bash
wsl hostname -I             # 返回 disto 的 IP 地址
wsl -d Alpine ifconfig eth0 # 同理
```

- https://github.com/microsoft/WSL/issues/4150

## Docker 环境 {#docker}

> 不需要 Docker Desktop

```bash
apk add docker openrc
tee /etc/docker/daemon.json <<- 'EOF'
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "registry-mirrors": ["https://docker.wener.me"]
}
EOF

# use legacy iptables for docker
apk add iptables-legacy
ln $(which iptables-legacy) $(which iptables) -f
ln $(which ip6tables-legacy) $(which ip6tables) -f

# openrc 启动 networking 需要配置
touch /etc/network/interfaces

rc-update add docker default
openrc default

docker ps
```

- Docker Desktop 创建的
  - docker-desktop
  - docker-desktop-data

## 开机启动 OpenRC {#autostart-openrc}

```bat title="start-wsl-alpine-openrc.bat"
@echo off
REM Alpine 启动 OpenRC
wsl -d Alpine -u root --exec /sbin/openrc-init
```

- Win + R `shell:startup` 目录下放入 `start-wsl-alpine-openrc.bat`
- 或者 WSL 里
  - /mnt/c/Users/$WSLUSER/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup

```bash
WSLUSER=$(powershell.exe '$env:UserName' | tr -d '\r')
cd "/mnt/c/Users/$WSLUSER/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup"

tee start-wsl-alpine-openrc.bat <<- 'EOF'
@echo off
echo Alpine: Starting
wsl -d Alpine -u root -- uname -a
wsl -d Alpine -u root -- openrc default
echo Alpine: Started
pause > nul
EOF
```

## /etc/wsl.conf

- Windows 11
- Windows Build 17093+
- https://learn.microsoft.com/en-us/windows/wsl/wsl-config
- https://gist.github.com/ecarlson94/283102ffd2f2473d41e7c9965be8fdd4

## 管理

```bash
wsl -l -v # 列出所有的 WSL 和 WSL 版本
```

## wslu

| cmd        | for                                                                        | 示例用法                          |
| ---------- | -------------------------------------------------------------------------- | --------------------------------- |
| `wslview`  | 在 WSL 中调用 Windows 默认程序打开文件或 URL。                             | `wslview https://www.example.com` |
| `wslusc`   | `wslview` 的别名，同样用于打开文件或 URL。                                 | `wslusc file.txt`                 |
| `wslvar`   | 从 Windows 环境中获取环境变量的值，便于在 WSL 内访问 Windows 配置。        | `wslvar USERNAME`                 |
| `wslupath` | 在 WSL 与 Windows 路径之间相互转换（例如将 Windows 路径转换为 WSL 格式）。 | `wslupath "C:\Program Files"`     |
| `wslfetch` | 显示 WSL 系统信息，类似于 Linux 下的 neofetch，用于快速了解系统状态。      | `wslfetch`                        |

- https://wslutiliti.es/wslu

# FAQ

- https://learn.microsoft.com/en-us/windows/wsl/troubleshooting

```bash
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Users/USERNAME/AppData/Local/Microsoft/WindowsApps
export PATH="$PATH:/usr/lib/wsl/lib:/mnt/c/Windows/system32:/mnt/c/Windows/System32/WindowsPowerShell/v1.0"
```

## WSL vs WSL2

- WSL
  - 非全虚拟化
  - 相同 FS - 跨 OS FS 更快
  - 支持访问 USB 设备
  - 相同网络空间
- WSL2 - Windows 11, Windows 10 v1903+,b18362+
  - 虚拟机
  - 完整 Linux 内核
  - 完整 syscall 兼容
  - 跨 OS FS 性能差一点 - 建议直接放到 VM 里
  - 用更多内存 - linux 内 cache 不会 free 那么快
- https://learn.microsoft.com/en-us/windows/wsl/compare-versions
- winver

## 适用于 Linux 的 Windows 子系统实例已终止

```bash
#
netsh wincosk reset
# 重启服务 HV Host Service
#
net stop LxssManager
net start LxssManager
```

## 系统找不到指定路径

```batch
wsl --list --all --verbose
```

应该是安装的 镜像位置发生了变化或者被删除

## 迁移

```batch
wsl --export
wsl --import
```

- HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss

## 检测是否运行在 WSL

- /proc/sys/kernel/osrelease
- /proc/version
- Microsoft, WSL

```bash
uname -a
```

## The Windows Subsystem for Linux has not been enabled.

```
ERR: The Windows Subsystem for Linux has not been enabled.
HRESULT: 0x8007019e
```

- dism 启用功能，然后重启

## 获取当前用户名 {#get-current-username}

```shell
powershell.exe '$env:UserName'
cmd.exe /c "echo %USERNAME%"
cmd.exe /c "whoami"

# wsl.locahost
basename "$(wslpath -w ~ | cut -d'\' -f3)"

apk add wslu
wslvar USERNAME

# 所有用户
ls -l /mnt/c/Users/ | grep -v "Public\|Default" | grep -E '^d' | awk '{print $9}'
```

## alpine networking

```
# service docker start
 * Starting networking ...
ifquery: could not parse /etc/network/interfaces
 * ERROR: networking failed to start
 * ERROR: cannot start docker as networking would not start
```

```bash
tee /etc/network/interfaces <<- 'EOF'
auto lo
iface lo inet loopback

auto eth0
EOF
```

**/etc/network/interfaces**

```
auto lo
iface lo inet loopback

auto eth0
```

## Docker network

```bash
sudo dockerd --iptables=false
```

- https://github.com/microsoft/WSL/issues/8450

## Cannot open netlink socket: Protocol not supported

- iproute2 ss
- WSL 1 问题

## docker RULE_APPEND failed (No such file or directory): rule in chain DOCKER-ISOLATION-STAGE-1

```bash
apk add iptables-legacy
# /sbin/xtables-nft-multi -> /sbin/xtables-legacy-multi
# iptables-nft -> iptables-legacy
ln $(which iptables-legacy) $(which iptables) -f
ln $(which ip6tables-legacy) $(which ip6tables) -f

service docker restart
```

- WSL 2
- https://github.com/microsoft/WSL/issues/6655

## The virtual machine could not be started because a required feature is not installed.

```
ERR: The virtual machine could not be started because a required feature is not installed.
HRESULT: 0x80370102
```
