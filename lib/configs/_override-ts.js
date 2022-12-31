"use strict"

const { Linter } = require("eslint")
const semver = require("semver")

const isESLint71OrHigher = semver.gte(Linter.version, "7.1.0")

module.exports = {
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [require.resolve("./+modules.js")],
            parser: require.resolve("@typescript-eslint/parser"),
            parserOptions: {
                loggerFn: false,
                project: "tsconfig.json",
            },
            rules: {
                // Enabled rules
                "@eslint-community/mysticatea/ts/adjacent-overload-signatures":
                    "error",
                "@eslint-community/mysticatea/ts/array-type": "error",
                "@eslint-community/mysticatea/ts/await-thenable": "error",
                "@eslint-community/mysticatea/ts/ban-ts-comment": "error",
                "@eslint-community/mysticatea/ts/ban-tslint-comment": "error",
                "@eslint-community/mysticatea/ts/class-literal-property-style":
                    "error",
                "@eslint-community/mysticatea/ts/comma-dangle": "error",
                "@eslint-community/mysticatea/ts/comma-spacing": "error",
                "@eslint-community/mysticatea/ts/consistent-generic-constructors":
                    "error",
                "@eslint-community/mysticatea/ts/consistent-indexed-object-style":
                    "error",
                "@eslint-community/mysticatea/ts/consistent-type-assertions":
                    "error",
                "@eslint-community/mysticatea/ts/consistent-type-exports":
                    "error",
                "@eslint-community/mysticatea/ts/consistent-type-imports":
                    "error",
                "@eslint-community/mysticatea/ts/default-param-last": "error",
                "@eslint-community/mysticatea/ts/dot-notation": "error",
                "@eslint-community/mysticatea/ts/explicit-member-accessibility":
                    "error",
                "@eslint-community/mysticatea/ts/explicit-module-boundary-types":
                    "error",
                "@eslint-community/mysticatea/ts/init-declarations": "error",
                "@eslint-community/mysticatea/ts/keyword-spacing": "error",
                "@eslint-community/mysticatea/ts/lines-between-class-members":
                    "error",
                "@eslint-community/mysticatea/ts/method-signature-style":
                    "error",
                "@eslint-community/mysticatea/ts/naming-convention": "error",
                "@eslint-community/mysticatea/ts/no-array-constructor": "error",
                "@eslint-community/mysticatea/ts/no-base-to-string": "error",
                "@eslint-community/mysticatea/ts/no-confusing-non-null-assertion":
                    "error",
                "@eslint-community/mysticatea/ts/no-confusing-void-expression":
                    "error",
                "@eslint-community/mysticatea/ts/no-dupe-class-members":
                    "error",
                "@eslint-community/mysticatea/ts/no-duplicate-enum-values":
                    "error",
                "@eslint-community/mysticatea/ts/no-dynamic-delete": "error",
                "@eslint-community/mysticatea/ts/no-empty-interface": "error",
                "@eslint-community/mysticatea/ts/no-extra-non-null-assertion":
                    "error",
                "@eslint-community/mysticatea/ts/no-extra-semi": "error",
                "@eslint-community/mysticatea/ts/no-extraneous-class": "error",
                "@eslint-community/mysticatea/ts/no-floating-promises": "error",
                "@eslint-community/mysticatea/ts/no-for-in-array": "error",
                "@eslint-community/mysticatea/ts/no-implied-eval": "error",
                "@eslint-community/mysticatea/ts/no-inferrable-types": "error",
                "@eslint-community/mysticatea/ts/no-invalid-this": "error",
                "@eslint-community/mysticatea/ts/no-invalid-void-type": "error",
                ...(isESLint71OrHigher
                    ? {
                          "@eslint-community/mysticatea/ts/no-loss-of-precision":
                              "error",
                      }
                    : {
                          "@eslint-community/mysticatea/ts/no-loss-of-precision":
                              "off",
                      }), // TODO: enable fully once we drop v7 support
                "@eslint-community/mysticatea/ts/no-loop-func": "error",
                "@eslint-community/mysticatea/ts/no-meaningless-void-operator":
                    "error",
                "@eslint-community/mysticatea/ts/no-misused-new": "error",
                "@eslint-community/mysticatea/ts/no-misused-promises": "error",
                "@eslint-community/mysticatea/ts/no-non-null-asserted-nullish-coalescing":
                    "error",
                "@eslint-community/mysticatea/ts/no-non-null-asserted-optional-chain":
                    "error",
                "@eslint-community/mysticatea/ts/no-redundant-type-constituents":
                    "error",
                "@eslint-community/mysticatea/ts/no-redeclare": "error",
                "@eslint-community/mysticatea/ts/no-require-imports": "error",
                "@eslint-community/mysticatea/ts/no-restricted-imports":
                    "error",
                "@eslint-community/mysticatea/ts/no-shadow": "error",
                "@eslint-community/mysticatea/ts/no-this-alias": [
                    "error",
                    { allowDestructuring: true },
                ],
                "@eslint-community/mysticatea/ts/no-throw-literal": "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-boolean-literal-compare":
                    "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-qualifier":
                    "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-type-arguments":
                    "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-type-assertion":
                    "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-type-constraint":
                    "error",
                "@eslint-community/mysticatea/ts/no-unsafe-argument": "error",
                "@eslint-community/mysticatea/ts/no-unsafe-assignment": "error",
                "@eslint-community/mysticatea/ts/no-unsafe-call": "error",
                "@eslint-community/mysticatea/ts/no-unsafe-member-access":
                    "error",
                "@eslint-community/mysticatea/ts/no-unsafe-return": "error",
                "@eslint-community/mysticatea/ts/no-unused-expressions":
                    "error",
                "@eslint-community/mysticatea/ts/no-useless-empty-export":
                    "error",
                "@eslint-community/mysticatea/ts/no-var-requires": "error",
                "@eslint-community/mysticatea/ts/non-nullable-type-assertion-style":
                    "error",
                "@eslint-community/mysticatea/ts/object-curly-spacing": "error",
                "@eslint-community/mysticatea/ts/padding-line-between-statements":
                    "error",
                "@eslint-community/mysticatea/ts/parameter-properties": "error",
                "@eslint-community/mysticatea/ts/prefer-as-const": "error",
                "@eslint-community/mysticatea/ts/prefer-enum-initializers":
                    "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/454
                "@eslint-community/mysticatea/ts/prefer-function-type": "off",
                "@eslint-community/mysticatea/ts/prefer-includes": "error",
                "@eslint-community/mysticatea/ts/prefer-literal-enum-member":
                    "error",
                "@eslint-community/mysticatea/ts/prefer-namespace-keyword":
                    "error",
                "@eslint-community/mysticatea/ts/prefer-nullish-coalescing":
                    "error",
                "@eslint-community/mysticatea/ts/prefer-optional-chain":
                    "error",
                "@eslint-community/mysticatea/ts/prefer-readonly-parameter-types":
                    "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/946
                "@eslint-community/mysticatea/ts/prefer-readonly": "off",
                "@eslint-community/mysticatea/ts/prefer-reduce-type-parameter":
                    "off",
                "@eslint-community/mysticatea/ts/prefer-regexp-exec": "error",
                "@eslint-community/mysticatea/ts/prefer-return-this-type":
                    "off",
                "@eslint-community/mysticatea/ts/prefer-string-starts-ends-with":
                    "error",
                "@eslint-community/mysticatea/ts/prefer-ts-expect-error": "off",
                "@eslint-community/mysticatea/ts/restrict-plus-operands":
                    "error",
                "@eslint-community/mysticatea/ts/require-array-sort-compare":
                    "error",
                "@eslint-community/mysticatea/ts/restrict-template-expressions":
                    "error",
                "@eslint-community/mysticatea/ts/return-await": "error",
                "@eslint-community/mysticatea/ts/sort-type-union-intersection-members":
                    "error",
                "@eslint-community/mysticatea/ts/space-before-function-paren":
                    "error",
                "@eslint-community/mysticatea/ts/space-infix-ops": "error",
                "@eslint-community/mysticatea/ts/switch-exhaustiveness-check":
                    "error",
                "@eslint-community/mysticatea/ts/triple-slash-reference":
                    "error",
                // I get a lot of false positives...
                "@eslint-community/mysticatea/ts/unbound-method": [
                    "off",
                    { ignoreStatic: true },
                ],
                // https://github.com/typescript-eslint/typescript-eslint/issues/452
                "@eslint-community/mysticatea/ts/unified-signatures": "off",
                "@eslint-community/mysticatea/prettier": [
                    "error",
                    {
                        parser: "typescript",
                        semi: false,
                        tabWidth: 4,
                        trailingComma: "all",
                    },
                    {
                        usePrettierrc: false,
                    },
                ],

                // Replacements
                "no-empty-function": "off",
                "@eslint-community/mysticatea/ts/no-empty-function": "error",
                "no-useless-constructor": "off",
                "@eslint-community/mysticatea/ts/no-useless-constructor":
                    "error",
                "require-await": "off",
                "@eslint-community/mysticatea/ts/require-await": "error",

                // Disabled rules
                "func-style": "off",
                "init-declarations": "off",
                "lines-between-class-members": "off",
                "no-dupe-class-members": "off",
                "no-invalid-this": "off",
                "no-loop-func": "off",
                "no-redeclare": "off",
                "no-undef": "off",
                "no-unused-vars": "off",
                "no-use-before-define": "off",
                "one-var": "off",
                "@eslint-community/mysticatea/ts/ban-types": "off",
                "@eslint-community/mysticatea/ts/brace-style": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/consistent-type-definitions":
                    "off",
                "@eslint-community/mysticatea/ts/explicit-function-return-type":
                    "off", // I want but this is not so...
                "@eslint-community/mysticatea/ts/func-call-spacing": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/indent": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/member-delimiter-style": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/member-ordering": "off",
                "@eslint-community/mysticatea/ts/no-explicit-any": "off",
                "@eslint-community/mysticatea/ts/no-extra-parens": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/no-magic-numbers": "off",
                "@eslint-community/mysticatea/ts/no-namespace": "off", // I like the namespace for interfaces (type only things).
                "@eslint-community/mysticatea/ts/no-non-null-assertion": "off",
                "@eslint-community/mysticatea/ts/no-type-alias": "off",
                "@eslint-community/mysticatea/ts/no-unnecessary-condition":
                    "off", // This was problematic for test code.
                "@eslint-community/mysticatea/ts/no-unused-vars": "off", // tsc verifies it.
                "@eslint-community/mysticatea/ts/no-use-before-define": "off", // tsc verifies it.
                "@eslint-community/mysticatea/ts/prefer-for-of": "off",
                "@eslint-community/mysticatea/ts/promise-function-async": "off",
                "@eslint-community/mysticatea/ts/quotes": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/semi": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/space-before-blocks": "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/strict-boolean-expressions":
                    "off",
                "@eslint-community/mysticatea/ts/type-annotation-spacing":
                    "off", // favor of Prettier.
                "@eslint-community/mysticatea/ts/typedef": "off",
            },
        },
        {
            files: ["*.d.ts"],
            rules: {
                strict: "off",
            },
        },
    ],
}
