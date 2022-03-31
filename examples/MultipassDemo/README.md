<!-- vscode-markdown-toc -->

- 1. [Before you start](#Beforeyoustart)
  - 1.1. [Available Scripts](#AvailableScripts)
    - 1.1.1. [`yarn dev`](#yarndev)
    - 1.1.2. [`yarn test`](#yarntest)
    - 1.1.3. [`yarn build`](#yarnbuild)
    - 1.1.4. [`yarn start`](#yarnstart)
    - 1.1.5. [`yarn ic:deploy`](#yarnic:deploy)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Multipass Demo

This project is bootstrapped with [Next.js](https://nextjs.org/).

## 1. <a name='Beforeyoustart'></a>Before you start

For the example to work fully, you need to run II locally. [Check out the II setup instructions on how to do this](../docs/setup-internet-identity.md).

Copy `.env.local.template` to `.env.local`. If you have Internet Identity deployed locally
and want to use it for authenticated calls, you need to provide the `II_CANISTER_ID` and set `DFX_NETWORK=local`.

Get the II canister id by:

```
dfx canister id internet_identity

Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "<your_identity>" is "renrk-eyaaa-aaaaa-aaada-cai"
rkp4c-7iaaa-aaaaa-aaaca-cai
```

take the last line and put it into `.env.local`.

**`.env.local` should then look something like this:**

```
DFX_NETWORK=local
II_CANISTER_ID=qhbym-qaaaa-aaaaa-aaafq-cai
```

now you can run `yarn ic:deploy` which deploys the example backend canister. When this is successful,
proceed with running `yarn dev`.

now your browser should automatically open [http://localhost:3000](http://localhost:3000).

### 1.1. <a name='AvailableScripts'></a>Available Scripts

In this directory (`example`), you can run the following commands:

#### 1.1.1. <a name='yarndev'></a>`yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### 1.1.2. <a name='yarntest'></a>`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

#### 1.1.3. <a name='yarnbuild'></a>`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

#### 1.1.4. <a name='yarnstart'></a>`yarn start`

requires `yarn build` first and runs the production build.

#### 1.1.5. <a name='yarnic:deploy'></a>`yarn ic:deploy`

deploys the example backend canisters to your local network
