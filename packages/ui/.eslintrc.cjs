/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@kode/eslint-config/react.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
};
