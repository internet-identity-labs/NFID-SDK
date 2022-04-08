#!/bin/sh

. .env.local
NGROK=./scripts/ngrok

if [ -f "$NGROK" ]; then
  $NGROK http --region=${TUNNEL_REGION:-eu} --hostname=${TUNNEL_DOMAIN} ${TUNNEL_PORT}
else
  echo "you need to download and unzip ngrok in this folder"
  echo "https://dashboard.ngrok.com/get-started/setup"
fi
