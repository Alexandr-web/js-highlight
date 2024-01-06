module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"jest/globals": true,
	},
	"extends": "eslint:recommended",
	"overrides": [
		{
			"env": {
				"node": true,
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script",
			},
		}
	],
	"plugins": ["jest"],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"ignorePatterns": [
		"webpack.config.js", "dist/", "postcss.config.js", "node_modules/",
		"jest.config.js"
	],
	"rules": {
		"quotes": ["error", "double"],
		"no-unused-vars": "warn",
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"arrow-parens": "error",
		"arrow-spacing": ["error", { "before": true, "after": true, }],
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": ["error", "1tbs"],
		"no-empty": "warn",
		"camelcase": ["error", { "properties": "always", }],
		"comma-dangle": ["error", {
			"arrays": "never",
			"objects": "always",
			"imports": "always",
			"exports": "always",
			"functions": "never",
		}],
		"comma-spacing": ["error", { "before": false, "after": true, }],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": ["error", "ctx"],
		"constructor-super": "error",
		"curly": ["error", "all"],
		"no-constant-condition": "error",
		"default-case-last": "error",
		"dot-notation": "error",
		"eol-last": ["error", "never"],
		"eqeqeq": "error",
		"func-call-spacing": ["error", "never"],
		"func-style": ["error", "declaration"],
		"function-call-argument-newline": ["error", "consistent"],
		"function-paren-newline": ["error", "consistent"],
		"getter-return": "error",
		"global-require": "error",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"indent": ["error", "tab", { "SwitchCase": 1, }],
		"init-declarations": ["error", "always"],
		"key-spacing": ["error", { "beforeColon": false, }],
		"keyword-spacing": ["error", { "before": true, }],
		"lines-around-comment": [
			"error", { "beforeBlockComment": false, "beforeLineComment": true, }
		],
		"lines-between-class-members": ["error", "always"],
		"max-classes-per-file": ["error", 1],
		"max-params": ["error", 3],
		"multiline-ternary": ["error", "always-multiline"],
		"new-cap": "error",
		"new-parens": "error",
		"newline-before-return": "error",
		"newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2, }],
		"no-spaced-func": "error",
		"no-extra-parens": "error",
		"no-alert": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-class-assign": "error",
		"no-confusing-arrow": "error",
		"no-console": "warn",
		"no-constructor-return": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-eval": "error",
		"no-floating-decimal": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-mixed-requires": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { "max": 1, }],
		"no-native-reassign": "error",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"semi-spacing": "error",
		"no-template-curly-in-string": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-unneeded-ternary": "error",
		"no-use-before-define": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-whitespace-before-property": "error",
		"padded-blocks": ["error", "never"],
		"prefer-const": "error",
		"prefer-regex-literals": "error",
		"prefer-template": "error",
		"require-jsdoc": ["error", {
			"require": {
				"ArrowFunctionExpression": false,
				"ClassDeclaration": false,
				"FunctionDeclaration": true,
				"FunctionExpression": false,
				"MethodDefinition": true,
			},
		}],
		"semi": "error",
		"space-before-function-paren": ["error", "never"],
		"space-before-blocks": ["error", "always"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": ["error", "always"],
		"switch-colon-spacing": "error",
		"template-curly-spacing": "error",
		"valid-jsdoc": "error",
		"valid-typeof": "error",
		"yoda": "error",
		"no-useless-escape": "off",
	},
};