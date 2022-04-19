#!/bin/sh

dfx deploy --no-wallet --argument '(null)'
dfx canister call identity_manager configure '(record {lambda = principal "sculj-2sjuf-dxqlm-dcv5y-hin5x-zfyvr-tzngf-bt5b5-dwhcc-zbsqf-rae"; token_ttl = 60;  token_refresh_ttl = 60; env = opt "test"})'
