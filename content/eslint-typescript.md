---
title: Linting Typescript with ESLint
date: 2019-04-06
description: How to setup ESLint for Typescript easily.
---

# Linting Typescript with ESLint

Now that the awesome TSLint will be deprecated some time in 2019. [(Roadmap: TSLint &rarr; ESLint)](https://github.com/palantir/tslint/issues/4534), projects may start migrating to ESLint, or other alternatives.

I am using it in production for some time now and i can say the ESLint support for Typescript is pretty good and can be used at the moment without issues.

## Minimal config

We install the needed npm packages

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

And create an `.eslintrc.js` file

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"]
};
```

#### And thats it!

<br>

## But wait, we can do more!

### Let's see some variations.

For rules that require type information we can add our `tsconfig.json` file path:

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ["plugin:@typescript-eslint/recommended"]
};
```

I personally use `eslint:recommended` because of the good amount of rules that it has:

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
};
```

And of course i can't live without `Prettier`.

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ]
};
```

#### Related Links

- [TSLint](https://github.com/palantir/tslint)
- [Typescript ESLint parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
- [Typescript ESLint plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
