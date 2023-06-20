module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "react-app",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "quotes": ["error", "double"],
  },
  root: true,
};
