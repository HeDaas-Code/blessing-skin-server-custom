#!/usr/bin/env bash
# 生成"本地 CA + 服务端证书"，用于自建 HTTPS（局域网/无公网域名场景）
#
#   ./docker/gen-certs.sh 10.63.127.239 skin.lan 192.168.1.10
#
# 产出 certs/：
#   ca.crt      客户端需要安装/信任的根证书（一次性）
#   server.crt  服务器证书（由上面的 CA 签发，含全部 SAN）
#   server.key  服务器私钥（勿外传）
set -Eeuo pipefail

cd "$(dirname "$0")/.."

OUT="${CERTS_DIR:-certs}"
mkdir -p "$OUT"

SAN="DNS:localhost,IP:127.0.0.1"
for name in "$@"; do
    if [[ "$name" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        SAN="$SAN,IP:$name"
    else
        SAN="$SAN,DNS:$name"
    fi
done

if [ ! -f "$OUT/ca.crt" ] || [ ! -f "$OUT/ca.key" ]; then
    echo "==> 生成本地 CA（有效期 10 年）"
    openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
        -keyout "$OUT/ca.key" -out "$OUT/ca.crt" \
        -subj "/O=Blessing Skin/CN=Blessing Skin Local CA" \
        -addext "basicConstraints=critical,CA:TRUE" \
        -addext "keyUsage=critical,keyCertSign,cRLSign"
else
    echo "==> 复用已有 CA：$OUT/ca.crt"
fi

echo "==> 签发服务端证书（SAN: $SAN，有效期 825 天）"
openssl req -newkey rsa:2048 -sha256 -nodes \
    -keyout "$OUT/server.key" -out "$OUT/server.csr" \
    -subj "/O=Blessing Skin/CN=blessing-skin"

cat > "$OUT/server.ext" <<EXT
basicConstraints=CA:FALSE
keyUsage=critical,digitalSignature,keyEncipherment
extendedKeyUsage=serverAuth
subjectAltName=$SAN
EXT

openssl x509 -req -in "$OUT/server.csr" \
    -CA "$OUT/ca.crt" -CAkey "$OUT/ca.key" -CAcreateserial \
    -out "$OUT/server.crt" -days 825 -sha256 -extfile "$OUT/server.ext"

rm -f "$OUT/server.csr" "$OUT/server.ext" "$OUT/ca.srl"
chmod 600 "$OUT/ca.key" "$OUT/server.key" 2>/dev/null || true

echo
echo "完成："
echo "  服务端证书  $OUT/server.crt / $OUT/server.key"
echo "  客户端根证书 $OUT/ca.crt（安装并信任后浏览器不再告警）"
openssl x509 -in "$OUT/server.crt" -noout -subject -dates -ext subjectAltName
