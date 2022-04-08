## Create IC App React Demo

<p align="center">
  <img width="600" alt="image" src="https://user-images.githubusercontent.com/33829677/162221079-f7bafc74-7d68-4bdd-aa18-5d92e564db4e.png">
</p>

A fully developed example application using the NFID integration with React, built on top of an existing application from the community.

Before getting started, you need to have **DFX** installed on your device. You can find more information and a step-by-step guide on how to set up your DFX [here](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html). 

To get the **NFID-SDK** up and running with the [create-ic-app-react-demo](./examples/create-ic-app-react-demo/) example, the following steps are required: 

Open a terminal on the root directory of the NFID-SDK, and run the following commands:

```bash
# Step 1: install dependencies
$ yarn

# Step 2: run dfx 
$ dfx start --clean --background
```

On a new terminal window and run the `create-ic-app-react-demo` example:

```bash
# Step 3: run the create-ic-app-react-demo example
$ cd examples/create-ic-app-react-demo
```

### Deploying
The next step is to open the `create-ic-app-react-demo` example in the browser. There are two approaches to accomplish this, either with **ngrok** or with your **local canisters**. 

#### Ngrok
If you want to use ngrok, you can find more details here to set that up: [setting up with ngrok](../../scripts/README.md).

#### Finished

✨ That is it! The example is now successfully deployed and can be accessed through your ngrok tunnel or your local canister.

---

### Inspired by

- [@MioQuispe](https://github.com/MioQuispe) - [original example application](https://github.com/MioQuispe/create-ic-app)
