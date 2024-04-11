const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    ...["@vercel/style-guide/eslint/typescript", "eslint-config-turbo"].map(
      require.resolve
    ),
  ],
  env: {
    node: true,
  },
  ignorePatterns: [".*.cjs", "node_modules/", "dist/"],
  overrides: [
    {
      files: ["*.cjs", "*.ts"],
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
