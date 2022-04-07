## Create IC App React Demo

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

To complete the next step, you need an account on ngrok. You can find more information on how to set up ngrok [here](https://ngrok.com/docs/).

Copy .env.template and rename it to .env and set the your ngrok variables accordingly:

```diff
# Step 4: set your variables (e.g: john)
- REACT_APP_NFID_PROVIDER_IFRAME_URL=https://<YOUR_NAME>.eu.ngrok.io/
- REACT_APP_NFID_PROVIDER_URL=https://<YOUR_NAME>.eu.ngrok.io/authenticate/?applicationName=NFID-Demo
+ REACT_APP_NFID_PROVIDER_IFRAME_URL=https://john.eu.ngrok.io/
+ REACT_APP_NFID_PROVIDER_URL=https://john.eu.ngrok.io/authenticate/?applicationName=NFID-Demo
```

You can deploy the example application to your local DFX environment using:

```bash
# Step 5: deploy the example application
$ dfx deploy --argument '(null)'
```

---

### Inspired by

- [@MioQuispe](https://github.com/MioQuispe) - [original example application](https://github.com/MioQuispe/create-ic-app)
