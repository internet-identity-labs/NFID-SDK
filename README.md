<img 
  src="./nfid-docs/assets/images/NFID.png" 
  alt="NFID" 
  width="400"
  style="background: white;padding:10px;border-radius:8px;"
/>
 
## Introduction[](#introduction)

**NFID-SDK** is an open source software development kit that contains libraries and examples for developers to integrate NFID into your applications. It can be used across a wide range of use cases, and it is designed to be easy to integrate into your existing application by providing the right set of libraries and components. 

> 💡 The NFID-SDK is currently limited to integration with React applications only, and the team is actively developing to expand and include other libraries and components for integration, such as Vue and Svelte.

---

### Table of contents[](#table-of-contents)
- [Introduction![](#introduction)](#introduction)
- [Table of Contents](#table-of-contents)
- [Getting started![](#getting-started)](#getting-started)
- [Composition![](#composition)](#composition)
- [Examples![](#examples)](#examples)
- [Contribution Guidelines![](#guidelines)](#guidelines)
- [Licensing![](#licensing)](#licensing)
- [Contact us![](#contact-us)](#contact-us)

---

### Getting started[](#getting-started)
> 💡 New to Internet Computer? Check out their [introduction](https://smartcontracts.org/docs/introduction/welcome.html) and get started!

1. Clone the Git repository
2. Run `yarn` to install the dependencies

Once the dependencies are installed, you can start exploring the `examples` and `packages` folders.

### Composition[](#composition)
Currently our *React* components are used to integrate NFID, and the UI utility library is used to provide a consistent look and feel across all of our sample applications.

NFID-SDK consists of the following `packages`:

| Repository                                      | Description                                                                                                                               |                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [nfid-sdk-react](./packages/nfid-sdk-react)     | React component library with components that make use the UI kit and also provide a set of utilities to integrate with NFID conveniently. | [README](./packages/nfid-sdk-react/README.md)     |
| [nfid-ui-kit-core](./packages/nfid-ui-kit-core) | UI utility library with NFID branding, and is used by other sample applications within NFID-SDK.                                          | [README](./packages/nfid-sdk-react/README.md) |


### Examples[](#examples)
The NFID-SDK also provides a set of examples of how to integrate NFID into your application, which can be found under the `examples/*` directory, and consists of the following examples:

| Repository                                                       | Description                                                                                                                      |                                               |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [account-linking-demo](./examples/account-linking-demo/)         | A sample application that demonstrates how to link your account to NFID.                                                         | [README](./examples/account-linking-demo)     |
| [create-ic-app-react-demo](./examples/create-ic-app-react-demo/) | A fully developed application using the NFID integration with React, built on top of an existing application from the community. | [README](./examples/create-ic-app-react-demo) |


### Guidelines[](#guidelines)

Read through our [contribution guidelines](./nfid-docs/CONTRIBUTING.md) before reporting an issue or contributing to the NFID-SDK.

### Licensing[](#licensing)

[MIT © 2021 Internet Identity Labs, Inc](./LICENSE)
 
### Contact us[](#contact-us)

> 💠 **For all of our latest updates, you can follow us on [Twitter](https://twitter.com/intent/follow?screen_name=IdentityMaxis)**

If you ran into any issues, have any questions, or have new awesome ideas, you can share them with us on [GitHub Discussions](https://github.com/internet-identity-labs/NFID-SDK/discussions) or [Discord](https://discord.gg/n7zdZ4m7B8).


