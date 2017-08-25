module.exports = {
  "extends": [
    "@jetbrains",
    "@jetbrains/eslint-config/es6",
    "@jetbrains/eslint-config/node"
  ],
  "parserOptions":{
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "complexity": ["error", 15],
    "valid-jsdoc": "off",
    "object-curly-spacing": ["error", "always"],
    "no-magic-numbers": ["error", { "ignore": [-1, 0, 1, 2] }],
    "max-len": ["error", 100, {
      "ignoreComments": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "import/no-commonjs": "off"
  }
};