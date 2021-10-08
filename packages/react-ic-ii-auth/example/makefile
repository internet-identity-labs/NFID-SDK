.PHONY: all
all: deploy

.PHONY: dfx_start
.SILENT: dfx_start
dfx_start:
	dfx start --clean --background

.PHONY: identity
.SILENT: identity
identity: dfx_start
	dfx identity use gin_admin

.PHONY: deploy-local
.SILENT: deploy-local
deploy-local: dfx_start
	dfx identity new gh_action_admin
	dfx identity use gh_action_admin
	dfx deploy

.PHONY: deploy
.SILENT: deploy
deploy:
	dfx identity use gh_action_admin
	dfx deploy --network ic --no-wallet

.PHONY: test
.SILENT: test
test:
	dfx canister call profile whoami | egrep "principal" && echo 'PASS'

.PHONY: stop
.SILENT: stop
stop:
	dfx stop
