#!/bin/sh

. .env.local
NGROK=./scripts/ngrok

if [ -f "$NGROK" ]; then
  $NGROK http --region=${TUNNEL_REGION:-eu} --hostname=${TUNNEL_DOMAIN} file://${PWD}/examples/create-ic-app-react-demo/canister/nfid_frontend/build
else
  echo "you need to download and unzip ngrok in this folder"
  echo "https://dashboard.ngrok.com/get-started/setup"
fi
