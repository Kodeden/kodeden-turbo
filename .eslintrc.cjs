// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@kode/eslint-config/library.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
