## Create IC App React Demo

<p align="center">
  <img width="600" alt="image" src="docs/images/preview_demo.png">
</p>

A fully developed application with NFID integrated using React, built on top of an existing application from the community.

## Getting started

#### Dependencies

Open a terminal on the top-level directory of the NFID-SDK, and run the following commands:

```bash
# Step 1: install dependencies
$ yarn

# Step 2: run dfx
$ dfx start --clean --background
```

#### Deploying

```bash
# navigate to the right example directory
$ cd examples/create-ic-app-react-demo

# Step 3: deploy canisters to local replica
$ yarn deploy:local
```

```bash
# Step 4: serve nfid_frontend to port 9090 which is used by ngrok tunnel
$ yarn serve:nfid-frontend
```

You can now open `http://localhost:9090` in your browser and preview the nfid-frontend application.

#### Ngrok

In order to scan the QR Code with your mobile phone while your NFID frontend runs on localhost, it's required to setup a reverse proxy. Therefor you need to download and configure ngrok.
You can find more details here on [how to set up ngrok](../../scripts/README.md).

Once ngrok has been set up, you can run the demo with the following command:

```bash
# Step 5: run the demo front-end and browse localhost:3000
$ yarn dev
```

#### Complete

✨ That is it! The example is now successfully deployed and can be accessed through `localhost:3000`.

---

#### Inspired by

- [@MioQuispe](https://github.com/MioQuispe) - [original example application](https://github.com/MioQuispe/create-ic-app)
