module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'prettier/prettier':'off',
    "vue/multi-word-component-names" : "off",
     "no-unused-vars": 0

  },
};
