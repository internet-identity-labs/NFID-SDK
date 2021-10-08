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

## Bootstrapped with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

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

#### `yarn start`

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

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
