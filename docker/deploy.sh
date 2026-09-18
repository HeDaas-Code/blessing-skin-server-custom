#!/usr/bin/env bash
# 目标服务器一键启动（可先导入离线镜像）
#
#   ./docker/deploy.sh                    使用当前目录的 docker-compose.yml + deploy.env
#   ./docker/deploy.sh image.tar.gz       先导入离线镜像再启动
set -Eeuo pipefail

cd "$(dirname "$0")/.."

if [ $# -ge 1 ] && [ -f "$1" ]; then
    echo "==> 导入镜像 $1"
    docker load -i "$1"
fi

if [ ! -f deploy.env ]; then
    echo "==> 未找到 deploy.env，已从 deploy.env.example 生成，请修改其中的管理员密码后重新执行"
    cp deploy.env.example deploy.env
    exit 0
fi

COMPOSE=(docker compose --env-file deploy.env)
if grep -qE '^[[:space:]]*DB_CONNECTION=mysql' deploy.env; then
    echo "==> 检测到 MySQL 配置，启用 mysql profile"
    COMPOSE+=(--profile mysql)
fi

PORT="$(grep -E '^[[:space:]]*BS_PORT=' deploy.env | tail -1 | cut -d= -f2 | tr -d '[:space:]')"
PORT="${PORT:-8080}"

echo "==> 启动服务"
"${COMPOSE[@]}" up -d

echo
echo "==> 等待应用就绪（首次启动会自动安装，约需 30-90 秒）"
for _ in $(seq 1 60); do
    if curl -fsS -o /dev/null "http://127.0.0.1:$PORT/" 2>/dev/null; then
        echo "已就绪： http://127.0.0.1:$PORT/"
        exit 0
    fi
    sleep 3
done

echo "启动超时，请查看日志： docker compose logs -f app"
"${COMPOSE[@]}" logs --tail=60 app || true
exit 1
