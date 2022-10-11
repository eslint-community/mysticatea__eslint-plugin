/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

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
                "@eslint-community/mysticatea/ts/ban-ts-ignore": "error",
                "@eslint-community/mysticatea/ts/class-name-casing": "error",
                "@eslint-community/mysticatea/ts/consistent-type-assertions":
                    "error",
                "@eslint-community/mysticatea/ts/explicit-member-accessibility":
                    "error",
                "@eslint-community/mysticatea/ts/interface-name-prefix":
                    "error",
                "@eslint-community/mysticatea/ts/member-naming": "error",
                "@eslint-community/mysticatea/ts/no-array-constructor": "error",
                "@eslint-community/mysticatea/ts/no-empty-interface": "error",
                "@eslint-community/mysticatea/ts/no-extraneous-class": "error",
                "@eslint-community/mysticatea/ts/no-floating-promises": "error",
                "@eslint-community/mysticatea/ts/no-for-in-array": "error",
                "@eslint-community/mysticatea/ts/no-inferrable-types": "error",
                "@eslint-community/mysticatea/ts/no-misused-new": "error",
                "@eslint-community/mysticatea/ts/no-misused-promises": "error",
                "@eslint-community/mysticatea/ts/no-parameter-properties":
                    "error",
                "@eslint-community/mysticatea/ts/no-require-imports": "error",
                "@eslint-community/mysticatea/ts/no-this-alias": [
                    "error",
                    { allowDestructuring: true },
                ],
                "@eslint-community/mysticatea/ts/no-unnecessary-qualifier":
                    "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-type-arguments":
                    "error",
                "@eslint-community/mysticatea/ts/no-unnecessary-type-assertion":
                    "error",
                "@eslint-community/mysticatea/ts/no-var-requires": "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/454
                "@eslint-community/mysticatea/ts/prefer-function-type": "off",
                "@eslint-community/mysticatea/ts/prefer-includes": "error",
                "@eslint-community/mysticatea/ts/prefer-namespace-keyword":
                    "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/946
                "@eslint-community/mysticatea/ts/prefer-readonly": "off",
                "@eslint-community/mysticatea/ts/prefer-regexp-exec": "error",
                "@eslint-community/mysticatea/ts/prefer-string-starts-ends-with":
                    "error",
                "@eslint-community/mysticatea/ts/restrict-plus-operands":
                    "error",
                "@eslint-community/mysticatea/ts/require-array-sort-compare":
                    "error",
                "@eslint-community/mysticatea/ts/triple-slash-reference":
                    "error",
                // なんか誤検知が多い...
                "@eslint-community/mysticatea/ts/unbound-method": [
                    "off",
                    { ignoreStatic: true },
                ],
                // https://github.com/typescript-eslint/typescript-eslint/issues/452
                "@eslint-community/mysticatea/ts/unified-signatures": "off",
                "@eslint-community/mysticatea/prettier": [
                    "error",
                    {
                        tabWidth: 4,
                        semi: false,
                        trailingComma: "all",
                        parser: "typescript",
                    },
                    {
                        usePrettierrc: false,
                    },
                ],

                // Replacements
                camelcase: "off",
                "@eslint-community/mysticatea/ts/camelcase": "error",
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
                "@eslint-community/mysticatea/ts/generic-type-naming": "off",
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
