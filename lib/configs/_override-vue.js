/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    overrides: [
        {
            files: ["*.vue"],
            extends: [
                require.resolve("./+browser.js"),
                require.resolve("./+modules.js"),
            ],
            parser: require.resolve("vue-eslint-parser"),
            rules: {
                // Enabled rules
                "@eslint-community/mysticatea/vue/array-bracket-spacing": [
                    "error",
                    "never",
                ],
                "@eslint-community/mysticatea/vue/arrow-spacing": "error",
                "@eslint-community/mysticatea/vue/block-spacing": "error",
                "@eslint-community/mysticatea/vue/brace-style": "error",
                "@eslint-community/mysticatea/vue/camelcase": "error",
                "@eslint-community/mysticatea/vue/comma-dangle": [
                    "error",
                    {
                        arrays: "always",
                        objects: "always",
                        imports: "always",
                        exports: "always",
                        functions: "always",
                    },
                ],
                "@eslint-community/mysticatea/vue/comment-directive": "error",
                "@eslint-community/mysticatea/vue/component-definition-name-casing":
                    "error",
                "@eslint-community/mysticatea/vue/component-tags-order":
                    "error",
                "@eslint-community/mysticatea/vue/dot-location": "error",
                "@eslint-community/mysticatea/vue/eqeqeq": [
                    "error",
                    "always",
                    { null: "ignore" },
                ],
                "@eslint-community/mysticatea/vue/jsx-uses-vars": "error",
                "@eslint-community/mysticatea/vue/key-spacing": "error",
                "@eslint-community/mysticatea/vue/keyword-spacing": "error",
                "@eslint-community/mysticatea/vue/match-component-file-name":
                    "error",
                "@eslint-community/mysticatea/vue/max-attributes-per-line": [
                    "error",
                    {
                        singleline: 3,
                        multiline: {
                            max: 1,
                            allowFirstLine: false,
                        },
                    },
                ],
                "@eslint-community/mysticatea/vue/max-len": [
                    "error",
                    { tabWidth: 4 },
                ],
                "@eslint-community/mysticatea/vue/no-async-in-computed-properties":
                    "error",
                "@eslint-community/mysticatea/vue/no-boolean-default": "error",
                "@eslint-community/mysticatea/vue/no-deprecated-scope-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-slot-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-slot-scope-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-dupe-keys": "error",
                "@eslint-community/mysticatea/vue/no-duplicate-attributes":
                    "error",
                "@eslint-community/mysticatea/vue/no-empty-pattern": "error",
                "@eslint-community/mysticatea/vue/no-irregular-whitespace":
                    "error",
                "@eslint-community/mysticatea/vue/no-parsing-error": "error",
                "@eslint-community/mysticatea/vue/no-reserved-component-names":
                    "error",
                "@eslint-community/mysticatea/vue/no-reserved-keys": "error",
                "@eslint-community/mysticatea/vue/no-shared-component-data":
                    "error",
                "@eslint-community/mysticatea/vue/no-side-effects-in-computed-properties":
                    "error",
                "@eslint-community/mysticatea/vue/no-static-inline-styles":
                    "error",
                "@eslint-community/mysticatea/vue/no-template-key": "error",
                "@eslint-community/mysticatea/vue/no-textarea-mustache":
                    "error",
                "@eslint-community/mysticatea/vue/no-unsupported-features":
                    "error",
                "@eslint-community/mysticatea/vue/no-unused-vars": "error",
                "@eslint-community/mysticatea/vue/object-curly-spacing": [
                    "error",
                    "always",
                ],
                "@eslint-community/mysticatea/vue/padding-line-between-blocks":
                    "error",
                "@eslint-community/mysticatea/vue/require-component-is":
                    "error",
                "@eslint-community/mysticatea/vue/require-direct-export":
                    "error",
                "@eslint-community/mysticatea/vue/require-name-property":
                    "error",
                "@eslint-community/mysticatea/vue/require-render-return":
                    "error",
                "@eslint-community/mysticatea/vue/require-v-for-key": "error",
                "@eslint-community/mysticatea/vue/require-valid-default-prop":
                    "error",
                "@eslint-community/mysticatea/vue/return-in-computed-property":
                    "error",
                "@eslint-community/mysticatea/vue/sort-keys": "error",
                "@eslint-community/mysticatea/vue/space-infix-ops": "error",
                "@eslint-community/mysticatea/vue/space-unary-ops": "error",
                "@eslint-community/mysticatea/vue/static-class-names-order":
                    "error",
                "@eslint-community/mysticatea/vue/v-on-function-call": "error",
                "@eslint-community/mysticatea/vue/v-slot-style": "error",
                "@eslint-community/mysticatea/vue/valid-template-root": "error",
                "@eslint-community/mysticatea/vue/valid-v-bind-sync": "error",
                "@eslint-community/mysticatea/vue/valid-v-bind": "error",
                "@eslint-community/mysticatea/vue/valid-v-cloak": "error",
                "@eslint-community/mysticatea/vue/valid-v-else-if": "error",
                "@eslint-community/mysticatea/vue/valid-v-else": "error",
                "@eslint-community/mysticatea/vue/valid-v-for": "error",
                "@eslint-community/mysticatea/vue/valid-v-html": "error",
                "@eslint-community/mysticatea/vue/valid-v-if": "error",
                "@eslint-community/mysticatea/vue/valid-v-model": "error",
                "@eslint-community/mysticatea/vue/valid-v-on": "error",
                "@eslint-community/mysticatea/vue/valid-v-once": "error",
                "@eslint-community/mysticatea/vue/valid-v-pre": "error",
                "@eslint-community/mysticatea/vue/valid-v-show": "error",
                "@eslint-community/mysticatea/vue/valid-v-slot": "error",
                "@eslint-community/mysticatea/vue/valid-v-text": "error",
                "@eslint-community/mysticatea/vue/attribute-hyphenation":
                    "error",
                "@eslint-community/mysticatea/vue/html-end-tags": "error",
                "@eslint-community/mysticatea/vue/html-indent": ["error", 4],
                "@eslint-community/mysticatea/vue/html-self-closing": "error",
                "@eslint-community/mysticatea/vue/mustache-interpolation-spacing":
                    "error",
                "@eslint-community/mysticatea/vue/name-property-casing":
                    "error",
                "@eslint-community/mysticatea/vue/no-multi-spaces": "error",
                "@eslint-community/mysticatea/vue/require-default-prop":
                    "error",
                "@eslint-community/mysticatea/vue/require-prop-types": "error",
                "@eslint-community/mysticatea/vue/v-bind-style": "error",
                "@eslint-community/mysticatea/vue/v-on-style": "error",
                "@eslint-community/mysticatea/vue/attributes-order": "error",
                "@eslint-community/mysticatea/vue/html-quotes": "error",
                "@eslint-community/mysticatea/vue/order-in-components": "error",
                "@eslint-community/mysticatea/vue/this-in-template": "error",
                "@eslint-community/mysticatea/vue/html-closing-bracket-newline": [
                    "error",
                    {
                        singleline: "never",
                        multiline: "always",
                    },
                ],
                "@eslint-community/mysticatea/vue/html-closing-bracket-spacing":
                    "error",
                "@eslint-community/mysticatea/vue/prop-name-casing": "error",
                "@eslint-community/mysticatea/vue/component-name-in-template-casing": [
                    "error",
                    "kebab-case",
                ],
                "@eslint-community/mysticatea/vue/multiline-html-element-content-newline":
                    "error",
                "@eslint-community/mysticatea/vue/singleline-html-element-content-newline":
                    "error",
                "@eslint-community/mysticatea/vue/no-spaces-around-equal-signs-in-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-template-shadow": "error",
                "@eslint-community/mysticatea/vue/no-unused-components":
                    "error",
                "@eslint-community/mysticatea/vue/no-use-v-if-with-v-for":
                    "error",
                "@eslint-community/mysticatea/vue/no-v-html": "error",
                "@eslint-community/mysticatea/vue/require-prop-type-constructor":
                    "error",
                "@eslint-community/mysticatea/vue/use-v-on-exact": "error",

                // Disabled rules (prefer prettier)
                "@eslint-community/mysticatea/vue/no-restricted-syntax": "off",
                "@eslint-community/mysticatea/vue/script-indent": "off",
            },
        },
    ],
}
