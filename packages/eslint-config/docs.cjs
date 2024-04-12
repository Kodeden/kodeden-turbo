const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/react",
    ].map(require.resolve),
    "plugin:storybook/recommended",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
  parserOptions: {
    project,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-default-export": "off",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
