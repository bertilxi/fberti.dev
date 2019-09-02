module.exports = {
  parser: "vue-eslint-parser",
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:vue/recommended",
    require.resolve("eslint-config-prettier"),
    require.resolve("eslint-config-prettier/vue")
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"]
  }
};
