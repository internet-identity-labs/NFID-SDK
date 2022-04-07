## NFID SDK React

This package contains the React components which can be used within your React applications. It makes use of the UI kit ([nfid-ui-kit-core](../nfid-ui-kit-core/)) and also provide a set of utilities to integrate with NFID conveniently.

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
