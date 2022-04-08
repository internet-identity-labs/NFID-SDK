<p align="center">
  <img width="600" alt="image" src="https://user-images.githubusercontent.com/33829677/162224559-f38581ec-fbd7-4ab0-a99a-5bf5332811b3.png">
</p>
 
## Introduction[](#introduction)

**NFID-SDK** is an open source software development kit that contains examples and packages for developers to integrate NFID into your application. The SDK is designed to provide an overview of all installable packages that will help you easily integrate the appropriate packages into your existing application and include the appropriate examples.

> 💡 The NFID-SDK is currently limited to integration with React applications only, and the team is actively developing to expand and include other libraries and components for integration, such as Vue and Svelte.

If you want to integrate NFID into your React application, we offer certain **packages**. [`nfid-sdk-react`](#packages) is the main package that you need to add to your project as a dependency. You can find more details about exactly what it does in the package itself. For all the packages NFID offers, check out the `packages` section.

We have also prepared some **examples** to show how we use these packages. This will ensure that you get a clear picture of what exactly is needed to fully integrate NFID. 

A fully developed application with NFID integrated using React is available in the [`create-ic-app-react-demo`](#examples) example

> 💡 New to Internet Computer? Check out the [introduction](https://smartcontracts.org/docs/introduction/welcome.html) and get started!

---

### Table of contents[](#table-of-contents)
- [Introduction![](#introduction)](#introduction)
- [Table of Contents](#table-of-contents)
- [Packages![](#packages)](#packages)
- [Examples![](#examples)](#examples)
- [Contribution Guidelines![](#guidelines)](#guidelines)
- [Licensing![](#licensing)](#licensing)
- [Contact us![](#contact-us)](#contact-us)

---

### DFX

We run on **DFX v0.9.3** so you will need to install this specific version. If you have an older version, run this command to install this specific version: 
```bash
DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

A step-by-step guide on how to set up your DFX can be found [here](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html). 


### Examples[](#examples)
The NFID-SDK also provides a set of examples of how to integrate NFID into your application, which can be found under the `examples/*` directory, and consists of the following examples:

| Repository                                                      | Description                                                                                                                 |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [create-ic-app-react-demo](./examples/create-ic-app-react-demo) | A fully developed application with NFID integrated using React, built on top of an existing application from the community. |
| [🚧 account-linking-demo](./examples/account-linking-demo)       | A sample application that demonstrates how to link your account to NFID.                                                    |


### Packages[](#packages)
NFID-SDK consists of the following `packages`:

| Repository                                      | Description                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [nfid-sdk-react](./packages/nfid-sdk-react)     | React component library to integrate with NFID into your application.                            |
| [nfid-ui-kit-core](./packages/nfid-ui-kit-core) | UI utility library with NFID branding, and is used by other sample applications within NFID-SDK. |


### Guidelines[](#guidelines)

Read through our [contribution guidelines](./nfid-docs/CONTRIBUTING.md) before reporting an issue or contributing to the NFID-SDK.

### Licensing[](#licensing)

[MIT © 2021 Internet Identity Labs, Inc](./LICENSE)
 
### Contact us[](#contact-us)

> 💠 **For all of our latest updates, you can follow us on [Twitter](https://twitter.com/intent/follow?screen_name=IdentityMaxis)**

If you ran into any issues, have any questions, or have new awesome ideas, you can share them with us on [GitHub Discussions](https://github.com/internet-identity-labs/NFID-SDK/discussions) or [Discord](https://discord.gg/n7zdZ4m7B8).


