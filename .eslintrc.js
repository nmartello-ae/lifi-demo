module.exports = {
  extends: "./../../.eslintrc.js",
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".d.ts", ".ts", ".tsx"],
      },
    },
  },
};
