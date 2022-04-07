#!/bin/sh

sed -i '' 's/<NFID_DOMAIN>/'${NFID_DOMAIN}'/g' ./canister/nfid_frontend/build/static/js/main.*.js
sed -i '' 's/<INTERNET_IDENTITY_CANISTER_ID>/'${INTERNET_IDENTITY_CANISTER_ID}'/g' ./canister/nfid_frontend/build/static/js/main.*.js
sed -i '' 's/<IDENTITY_MANAGER_CANISTER_ID>/'${IDENTITY_MANAGER_CANISTER_ID}'/g' ./canister/nfid_frontend/build/static/js/main.*.js
sed -i '' 's/<PUB_SUB_CHANNEL_CANISTER_ID>/'${PUB_SUB_CHANNEL_CANISTER_ID}'/g' ./canister/nfid_frontend/build/static/js/main.*.js
