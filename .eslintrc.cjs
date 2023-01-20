module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/self-closing-comp": "off",
    "@typescript-eslint/quotes": "off",
    "linebreak-style": 0,
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "react/button-has-type": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/comma-dangle": "off",
    "import/extensions": "off"
  },
};
