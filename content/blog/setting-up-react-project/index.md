---
title: Setting up a React project
date: "2019-05-20T19:00:00.000Z"
description: I'll show you how I bootstrapped my own version of create-react-app!
---

Disclaimer: I've only started to document the process at the end of it (because I did NOT expect it to be this difficult!), so following the exact steps _might_ not work. Anyway, I've included the end result (you can find in the GitHub link at the bottom of the post), and also the pages which I referred when I was setting up.

Our toolbelt:

- React
- Typescript
- Linting & formatting
- Apollo GraphQL
- Jest (testing)
- Storybook (documentation)

## Create React App (with Typescript)

Well, of course we will start with the original `create-react-app` utility -- a great tool by React team to kickstart any React project! This is the easiest step, haha!

```bash
npx create-react-app <your_app_name_here> --typescript
```

## Linting and Formatting

Typescript linting is included since `create-react-app` v3.0.0! Check out more details [here](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor).

I cannot live without the convenience of auto-formatting provided by [Prettier](https://prettier.io/), so let's install them:

```bash
yarn add --dev eslint-config-prettier eslint-plugin-prettier prettier
```

Let's also prepare our VS Code environment for that (only the highlighted portions are necessary, the rest are up to you):

`.vscode/settings.json` (Workspace settings):

```json{2,10-15}
{
  "editor.formatOnSave": true,
  "breadcrumbs.enabled": true,
  "editor.minimap.enabled": false,
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "Operator Mono",
  "workbench.colorTheme": "Night Owl",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

## Setting up Apollo GraphQL

We'll be using the Apollo stack, so let's install them:

```bash
yarn add --exact react-apollo
yarn add --exact apollo-boost
yarn add --exact graphql
yarn add --exact graphql.macro
yarn add @apollo/react-hooks
```

## Setting up Storybook

Just run the following command (note the `-f` flag to ignore conflicts with `create-react-app` dependencies):

```bash
npx -p @storybook/cli sb init -f
```

Since we're going to use Typescript, we will follow the instruction [here](https://storybook.js.org/docs/configurations/typescript-config/). There seems to be a few ways to achieve the same, we will be using the recommended way _Setting up TypeScript with awesome-typescript-loader_.

```bash
yarn add -D typescript
yarn add -D awesome-typescript-loader
yarn add -D @types/storybook__react # typings
yarn add -D @storybook/addon-info react-docgen-typescript-loader # optional but recommended
yarn add -D jest "@types/jest" ts-jest #testing
```

Also we need to add `tsconfig.json` (not really sure whether this file is required since there is already one inside the main project folder) and `webpack.config.js` into `.storybook` folder.

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "outDir": "build/lib",
    "module": "commonjs",
    "target": "es5",
    "lib": ["es5", "es6", "es7", "es2017", "dom"],
    "sourceMap": true,
    "allowJs": false,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDirs": ["src", "stories"],
    "baseUrl": "src",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "declaration": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build", "scripts"]
}
```

`webpack.config.js`:

```javascript
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
```

Our project uses absolute path (with a defined `baseDir`), for storybook to resolve and find our modules by absolute path, we need to install the following package:

```bash
yarn add -D tsconfig-paths-webpack-plugin
```

Then add these two lines inside `webpack.config.js` that we've just created:

```javascript{1,17}
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.plugins = [new TsconfigPathsPlugin({})];
  return config;
};
```

Cool! But Typescript would still complain that type definition for the addons are missing, let's add them:

```bash
yarn add -D @types/storybook__addon-actions
yarn add -D @types/storybook__addon-links
```

## Setting up Testing

I'm thrilled to find out that there is an official integration between Storybook and Jest Snapshot Testing -- more details [here](https://storybook.js.org/docs/testing/structural-testing/). Let's install them:

```bash
yarn add -D @storybook/addon-storyshots
yarn add -D @types/storybook__addon-storyshots # if you are using Typescript
```

`create-react-app` complains that the installed version of `jest` is not compatible. So similar trick to solve the incompatibility of `babel-loader`:

```bash
yarn add -D jest@24.7.1 --exact
```

Aww snap! Running `yarn test` in the terminal results in:

```bash
Cannot find module 'react-test-renderer' from 'renderTree.js'
```

After searching, finally found someone in GitHub saying by installing `react-test-renderer` package solves the issue. Hence I did the same:

```bash
yarn add -D react-test-renderer
```

And then... I run `yarn test` again, and now...

```bash
Error: EMFILE: too many open files, watch
```

Oh God why....
Luckily I found another guy on GitHub saying that installing `watchman` solves the issue, so again...

```bash
brew install watchman
```

Yay! The tests are finally running ✨

## TLDR

The result of the above setup can be found in my GitHub repository [here](https://github.com/yshean/cra-bootstrap).

---

_Written with 💌 by Yong Shean. I'm currently looking for a frontend engineering job, preferably remote, or based in Kuala Lumpur. I'm also open to opportunities to work outside of Malaysia, e.g. in the U.S. if visa is sponsored._

```javascript
res.end();
```
