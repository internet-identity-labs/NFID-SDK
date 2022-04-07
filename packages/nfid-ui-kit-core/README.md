## NFID UI Kit Core

This package contains the core utilities of the NFID UI Kit. 

It is built on top of TailwindCSS and provides a set of utility classes that are used by the different libraries and give a consistent look and feel across all of our sample applications.

----

### Getting started
1. Plugins which are added to our Tailwind theme are nested under [the utils folder](./src/utils/).
2. The [`theme.json`](src/theme.js) contains the in-house styles from NFID.
3. When creating a new utility for a component, create a folder if it doesn't exist and add the utility classes within the `index.js` file.

In order to use the NFID UI Kit in your application, all you have to do is import the package into your `tailwind.config.js`:

```diff 
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
+  plugins: [require('@internet-identity-labs/nfid-ui-kit-core')],
};
```