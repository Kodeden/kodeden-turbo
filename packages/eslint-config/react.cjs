const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/react",
    ].map(require.resolve),
  ],
  env: {
    browser: true,
    es2023: true,
  },
  globals: {
    JSX: true,
    React: true,
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs", "**/*.css"],
  parserOptions: {
    project,
  },
  plugins: ["react-refresh", "use-encapsulation"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
    "react/button-has-type": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "use-encapsulation/prefer-custom-hooks": ["error", { allow: ["useMemo"] }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      typescript: {
        project,
      },
    },
  },
};
