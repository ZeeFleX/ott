module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
		"extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
				"no-console": "warn",
				"no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
