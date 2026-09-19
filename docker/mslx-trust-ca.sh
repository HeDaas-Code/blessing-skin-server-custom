#!/usr/bin/env bash
# 把本地 CA 导入 MSLX 守护进程容器内各 JVM 的信任库
#
# 用途：Minecraft 服务器（authlib-injector / 服务端 hasJoined）走 https://<host>:8443/api/yggdrasil
#       时，Java 使用自己的 cacerts，不读取系统证书，因此需要把 ca.crt 导入服务器所用 JVM。
#
# 用法：
#   ./docker/mslx-trust-ca.sh                # 容器名 mslx-daemon，自动处理 Tools/Java/{17,21,25}
#   MSLX_CONTAINER=xxx ./docker/mslx-trust-ca.sh
#
# 注意：容器被删除重建（docker rm + run/compose up -d）后需重新执行本脚本。
set -Eeuo pipefail

cd "$(dirname "$0")/.."

CONTAINER="${MSLX_CONTAINER:-mslx-daemon}"
CA_FILE="certs/ca.crt"

[ -f "$CA_FILE" ] || { echo "缺少 $CA_FILE，请先执行 ./docker/gen-certs.sh <IP或域名...>" >&2; exit 1; }

if ! docker ps --format '{{.Names}}' | grep -qx "$CONTAINER"; then
    echo "容器 $CONTAINER 未运行" >&2
    exit 1
fi

docker cp "$CA_FILE" "$CONTAINER:/tmp/blessing-skin-ca.crt"

docker exec "$CONTAINER" sh -c '
set -e
for v in 17 21 25; do
    J=/app/DaemonData/Tools/Java/$v
    KS=$J/lib/security/cacerts
    [ -f "$KS" ] || { echo "Java $v: 未找到 cacerts，跳过"; continue; }
    "$J/bin/keytool" -delete -alias blessing-skin-ca -keystore "$KS" -storepass changeit >/dev/null 2>&1 || true
    "$J/bin/keytool" -importcert -noprompt -trustcacerts -alias blessing-skin-ca         -file /tmp/blessing-skin-ca.crt -keystore "$KS" -storepass changeit >/dev/null
    echo "Java $v: 已导入 blessing-skin-ca"
done
'

echo
echo "完成。请到 MSLX 面板重启 Minecraft 服务器实例，使信任库生效。"
echo "验证命令（容器内）："
echo "  docker exec $CONTAINER /app/DaemonData/Tools/Java/25/bin/java /tmp/Fetch.java https://<host>:8443/api/yggdrasil"
