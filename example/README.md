# MultipassDemo

## Background

When we release our identity interface, we need to know that there exists a way
to link existing Internet Identities such that data associated with those
anchors will still be accessible when masquerading through a Multipass account.

## Acceptance criteria:

- Build a simple app X locally that authenticates an Internet Identity A
- Let this Identity create a post only this Identity can view
- Log out
- Demo a way for hard-coded information about Internet Identity A on app X to
  display Internet Identity A's private post
- Written requirements for which data should be stored such that a Multipass
  account could masquerade as a principal ID

## Build with Next.js

This project is bootstrapped with [Next.js](https://nextjs.org/).

### Before you start

copy `.env.template` to `.env`. If you have Internet Identity deployed locally
and want to use it for authentication, you need to provide the url to it.
Default is:

```
REACT_APP_II_CANISTER_URL=https://identity.ic0.app/#authorize
```

Your local version might look like this:

```
http://r7inp-6aaaa-aaaaa-aaabq-cai.localhost:8000/#authorize
#      |    <II canister id>     |
```

Get the canister id by:

```
dfx canister id internet_identity
```

### Available Scripts

In the project directory, you can run:

#### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

#### `yarn start`

to run the production build.

#### `yarn ic:deploy`

TODO: be more specific

deploys your canisters to your local network
