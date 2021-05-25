module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier", "plugin:vue/base"],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue", ".scss"],
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  root: true,
  rules: {
    indent: "off",
    semi: ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
    camelcase: "off",
    "no-console": "off",
    "prettier/prettier": "error",
    quotes: ["error", "double"],
    "sort-imports": "off",
    "vue/no-v-for-template-key-on-child": "off",
    "vue/no-v-html": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-empty-function": ["off"],
  },
  settings: {
    "prettier-vue": {
      SFCBlocks: {
        template: true,
        script: true,
      },
      usePrettierrc: true,
    },
  },
};
