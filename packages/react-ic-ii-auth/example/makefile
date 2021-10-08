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

.PHONY: stop
.SILENT: stop
clean:
	dfx identity use default
	dfx identity remove gh_action_admin
	dfx stop

.PHONY: test
.SILENT: test
test: deploy-local
	dfx canister call profile whoami | egrep "principal" && echo 'PASS'
	make clean
