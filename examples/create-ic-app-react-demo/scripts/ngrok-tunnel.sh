#!/bin/sh

NGROK=./scripts/ngrok

if [ -f "$NGROK" ]; then
  $NGROK http --region=${TUNNEL_REGION} --hostname=${TUNNEL_DOMAIN} 9090
else
  echo "you need to download and unzip ngrok in this folder"
  echo "https://dashboard.ngrok.com/get-started/setup"
fi
