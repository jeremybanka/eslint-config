/* eslint-disable @typescript-eslint/no-var-requires */

var baseConfig = require("../.eslintrc")

module.exports = {
  extends: [
    `eslint:recommended`,
    `prettier`,
    `plugin:@typescript-eslint/recommended`,
  ],
  plugins: [`prettier`, `import`, `jest`, `@typescript-eslint`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: `module`,
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [`.js, .cjs, .ts, .tsx`],
      },
    },
  },
  rules: {
    ...baseConfig.rules,
    "import/order": [
      `error`,
      {
        "groups": [`builtin`, `external`, `internal`],
        "pathGroups": [
          {
            pattern: `react`,
            group: `external`,
            position: `before`,
          },
        ],
        "pathGroupsExcludedImportTypes": [`react`],
        "newlines-between": `always`,
        "alphabetize": {
          order: `asc`,
          caseInsensitive: true,
        },
      },
    ],
  },
}
