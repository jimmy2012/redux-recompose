module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["import", "jsx-a11y", "babel"],
  extends: ["wolox"],
  globals: {
    __DEV__: true
  },
  rules: {
    // eslint-config-wolox overrides
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "render",
          "getInitialState",
          "getDefaultProps",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "getSnapshotBeforeUpdate",
          "UNSAFE_componentWillMount",
          "UNSAFE_componentWillUpdate",
          "UNSAFE_componentWillReceiveProps"
        ]
      }
    ],
    indent: "off",
    "no-mixed-operators": "off",
    "no-unused-expressions": "off",

    // Babel
    "babel/no-unused-expressions": 1,

    // Import
    "import/default": "error",
    "import/export": "error",
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        svg: "always",
        scss: "always",
        png: "always",
        css: "always"
      }
    ],
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/order": ["error", { "newlines-between": "always" }],
    "import/prefer-default-export": "off",

    // jsx-a11y
    "jsx-a11y/anchor-is-valid": "error",

    // others
    'prefer-object-spread' : 'on',
    'no-async-promise-executor': 'on',
    'no-misleading-character-class': 'on',
    'require-atomic-updates' : 'on',
    'max-classes-per-file' : 'on',
    'no-magic-numbers': 'off',
    'new-cap': 'off'
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".android.js", ".ios.js"]
      }
    }
  }
};

