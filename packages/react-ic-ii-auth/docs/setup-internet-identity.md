# install Internet Identity locally

to make it as easy as possible working with a local instance of
[internet-identity](https://github.com/dfinity/internet-identity) we provide
a docker image.

## Docker setup

- TODO: describe docker version

## Native setup

**start dfx (within example folder):**

```bash
dfx start [--background]
```

**Install dependencies:**

[Install Rust](https://www.rust-lang.org/tools/install) (version 1.51)

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Install cmake

```
brew install cmake
```

**clone internet-identity repo:**

Clone repo

```
git clone git@github.com:dfinity/internet-identity.git
cd internet-identity
npm install
```

Deploy II on local network (in case of error, delete .dfx directory and run
again)

```
II_ENV=development dfx deploy --no-wallet --argument '(null)'
```

Get II canister id:

```
$ dfx canister id internet_identity

Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "<your_identity>" is "renrk-eyaaa-aaaaa-aaada-cai"
rkp4c-7iaaa-aaaaa-aaaca-cai
```

Take the last line from output above and replace `YOUR_ID` within: `http://<YOUR_ID>.localhost:8000/authorize` and open that url in your browser to check if the deployment has worked.

Put `rkp4c-7iaaa-aaaaa-aaaca-cai` (but replace with your command output) to
`.env.local` as `II_CANISTER_ID=rkp4c-7iaaa-aaaaa-aaaca-cai`
