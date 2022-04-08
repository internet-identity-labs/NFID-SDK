## NFID SDK React

This package contains the React components that can be used within your application. It uses the UI kit ([nfid-ui-kit-core](../nfid-ui-kit-core/)) and also provides a set of utilities to easily integrate with NFID. 

#### Installation
To properly integrate NFID to your application, you need to install not only `nfid-sdk-react`, but also `react-ic-ii-auth`. The `react-ic-ii-auth` combines the Internet Identity and NFID authentication as a wrapper package. 

```shell
$ yarn add nfid-sdk-react react-ic-ii-auth
```

For a deeper understanding of how to actually set up the NFID authentication, it's easier to refer to our [React example](../../examples/create-ic-app-react-demo/), where you can take the architecture from and migrate it to your own application.

### Getting started

```shell
$ yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

### Storybook

> 💡 If you are seeing an out of date component, make sure you are running in watch mode like we recommend above.

To preview the actual React components, you can run the following command and launch an interactive playground in **a new terminal**:

```shell
$ yarn storybook
```

This loads all stories from the `src` folder with files following the naming convention of: `index.stories.tsx` - which can be found at `src/atoms/button`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.
