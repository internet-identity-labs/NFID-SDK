## Introduction[![]()](#introduction)

**NFID-SDK** is an open source software development kit that contains libraries and examples for developers to integrate NFID into your applications.

---

## Table of contents[](#table-of-contents)
- [Introduction![](#introduction)](#introduction)
- [Table of contents](#table-of-contents)
- [Getting started![](#getting-started)](#getting-started)
- [Composition![](#composition)](#composition)
- [Use cases & limitations![](#use-cases-and-limitations)](#use-cases-and-limitations)
- [Licensing![](#licensing)](#licensing)
- [Contact us![](#contact-us)](#contact-us)

---

## Getting started[![]()](#getting-started)
> 💡 New to Internet Computer? Check out their [introduction](https://smartcontracts.org/docs/introduction/welcome.html) and start building awesome apps!

Before getting started, you need to have **DFX** installed on your device. You can find more information and a step-by-step guide on how to set up your DFX [here](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html). 


To get the **NFID-SDK** up and running with the [create-ic-app-react-demo](./examples/create-ic-app-react-demo/) example, the following steps are required: 

Open a terminal on the root directory of the NFID-SDK, and run the following commands:

```shell
# Step 1: install dependencies
$ yarn

# Step 2: run dfx 
$ dfx start --clean --background
```

On a new terminal window and run the `create-ic-app-react-demo` example:

```shell
# Step 3: run the create-ic-app-react-demo example
$ cd examples/create-ic-app-react-demo

# Step 4: install dependencies
$ yarn
```

Once the dependencies are installed, you can deploy the example application to your local DFX environment with:

```shell
# Step 5: deploy the example application
$ dfx deploy --argument ‘(null)’
```

<!-- <table>
  <tr>
    <td nowrap><strong>Supported OS</strong></td>
    <td>Linux (list of <a href="./docs/POSIX.md#the-list-of-posix-api-used-in-areg-sdk-including-multicast-message-router" alt="list of POSX API">POSIX API</a>), Windows 8 and higher.</td>
  </tr>
  <tr>
    <td nowrap><strong>Supported CPU</strong></td>
    <td>x86, x86_64, arm and aarch64.</td>
  </tr>
  <tr>
    <td nowrap><strong>Supported compilers</strong></td>
    <td>Version C++17 GCC, g++, clang and MSVC.</td>
  </tr>
</table> -->

## Composition[![]()](#composition)
Currently our *React* components are used to integrate NFID, and the UI utility library is used to provide a consistent look and feel across all of our sample applications.

NFID-SDK consists of the following `packages/*`:
1. [nfid-sdk-react](./packages/nfid-sdk-react/) - React component library with components that make use the UI kit and also provide a set of utilities to integrate with NFID conveniently.
3. [nfid-ui-kit-core](./packages/nfid-ui-kit-core/) - UI utility library with NFID branding, and is used by other sample applications within NFID-SDK.

The NFID-SDK also provides a set of examples of how to integrate NFID into your application, which can be found under the `examples/*` directory, and consists of the following examples:
1. [account-linking-demo](./examples/account-linking-demo/) - A sample application that demonstrates how to link your account to NFID
2. [create-ic-app-react-demo](./examples/create-ic-app-react-demo/) - A fully developed application using the NFID integration with React, built on top of an existing application from the community.

---

## Use cases and limitations[![]()](#use-cases-and-limitations)

NFID-SDK can be used across a wide range of use cases, and it is designed to be easy to integrate into your existing application by providing the right set of libraries and components. 

The NFID-SDK is currently limited to integration with React applications only, and the team is actively developing to expand and include other libraries and components for integration, such as Vue and Svelte.

## Licensing[![]()](#licensing)

For more information on how to use the NFID-SDK, please refer to the [license](./LICENSE).
 
## Contact us[![]()](#contact-us)

> 💠 **For all of our latest updates, you can follow us on [Twitter](https://twitter.com/intent/follow?screen_name=IdentityMaxis)**

If you ran into any issues, have any questions, or have new awesome ideas, you can share them with us on [GitHub Discussions](https://github.com/internet-identity-labs/NFID-SDK/discussions) or [Discord](https://discord.gg/n7zdZ4m7B8).


