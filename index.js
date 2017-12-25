module.exports = {
  "extends": [
    "@jetbrains",
    "@jetbrains/eslint-config/es6",
    "@jetbrains/eslint-config/node"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "complexity": ["error", 15],
    "import/no-commonjs": "off",
    "max-len": ["error", 100, {
      "ignoreComments": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "object-curly-spacing": ["error", "always"],
    "no-magic-numbers": ["error", { "ignore": [-1, 0, 1, 2] }],
    "no-return-assign": "off",
    "valid-jsdoc": "off"
  }
};