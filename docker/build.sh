#!/usr/bin/env bash
# 构建镜像（可选导出离线包）
#
#   ./docker/build.sh [标签]          构建并导出 dist/<标签>-image.tar.gz
#   SAVE=0 ./docker/build.sh 标签     只构建，不导出
set -Eeuo pipefail

cd "$(dirname "$0")/.."

TAG="${1:-blessing-skin:6.0.2}"
SAVE="${SAVE:-1}"
NAME="$(printf '%s' "$TAG" | tr ':/' '--')"

if docker buildx version >/dev/null 2>&1; then
    BUILDER=(docker buildx build --load)
else
    BUILDER=(docker build)
fi

echo "==> 构建镜像 $TAG"
"${BUILDER[@]}" -t "$TAG" .

if [ "$SAVE" = "1" ]; then
    mkdir -p dist
    ARCHIVE="dist/${NAME}-image.tar.gz"
    echo "==> 导出离线镜像 $ARCHIVE（体积较大，请耐心等待）"
    docker save "$TAG" | gzip -1 > "$ARCHIVE"
    ls -lh "$ARCHIVE"
    echo
    echo "目标服务器上执行："
    echo "  docker load -i $(basename "$ARCHIVE")"
    echo "  ./docker/deploy.sh"
fi
