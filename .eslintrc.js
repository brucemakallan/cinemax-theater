module.exports = {
  parser: "babel-eslint",
  extends: [
      "airbnb"
  ],
  env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      jsx: true,
      ecmaFeatures: {
          experimentalObjectRestSpread: true
      }
  },
  plugins: ["react", "import"],
  rules: {
      indent: ["error", "tab"],
      "linebreak-style": ["error", "unix"],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      curly: [2, "multi-line"],
      "no-shadow": "warn",
      "no-unused-vars": ["error", { "args": "none" }],
      "eol-last": ["error", "always"],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "error",
      "max-len": [1, 110, 4]
  },
  globals: {
      page: true,
      browser: true,
      context: true,
  }
};
