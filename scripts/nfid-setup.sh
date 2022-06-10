#!/bin/sh

dfx deploy
dfx canister call identity_manager configure '(record {env = opt "test"})'
