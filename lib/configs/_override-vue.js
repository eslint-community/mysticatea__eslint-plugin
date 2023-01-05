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
                "@eslint-community/mysticatea/vue/attribute-hyphenation":
                    "error",
                "@eslint-community/mysticatea/vue/attributes-order": "error",
                "@eslint-community/mysticatea/vue/block-lang": "error",
                "@eslint-community/mysticatea/vue/camelcase": "error",
                "@eslint-community/mysticatea/vue/comment-directive": "error",
                "@eslint-community/mysticatea/vue/component-api-style": "error",
                "@eslint-community/mysticatea/vue/component-definition-name-casing":
                    "error",
                "@eslint-community/mysticatea/vue/component-name-in-template-casing":
                    ["error", "kebab-case"],
                "@eslint-community/mysticatea/vue/component-options-name-casing":
                    "error",
                "@eslint-community/mysticatea/vue/component-tags-order":
                    "error",
                "@eslint-community/mysticatea/vue/custom-event-name-casing":
                    "error",
                "@eslint-community/mysticatea/vue/define-macros-order": "error",
                "@eslint-community/mysticatea/vue/dot-notation": "error",
                "@eslint-community/mysticatea/vue/eqeqeq": [
                    "error",
                    "always",
                    { null: "ignore" },
                ],
                "@eslint-community/mysticatea/vue/first-attribute-linebreak":
                    "error",
                "@eslint-community/mysticatea/vue/html-button-has-type":
                    "error",
                "@eslint-community/mysticatea/vue/jsx-uses-vars": "error",
                "@eslint-community/mysticatea/vue/match-component-file-name":
                    "error",
                "@eslint-community/mysticatea/vue/match-component-import-name":
                    "error",
                "@eslint-community/mysticatea/vue/multi-word-component-names":
                    "error",
                "@eslint-community/mysticatea/vue/new-line-between-multi-line-property":
                    "error",
                "@eslint-community/mysticatea/vue/next-tick-style": "error",
                "@eslint-community/mysticatea/vue/no-arrow-functions-in-watch":
                    "error",
                "@eslint-community/mysticatea/vue/no-async-in-computed-properties":
                    "error",
                "@eslint-community/mysticatea/vue/no-bare-strings-in-template":
                    "error",
                "@eslint-community/mysticatea/vue/no-boolean-default": "error",
                "@eslint-community/mysticatea/vue/no-child-content": "error",
                "@eslint-community/mysticatea/vue/no-computed-properties-in-data":
                    "error",
                "@eslint-community/mysticatea/vue/no-constant-condition":
                    "error",
                "@eslint-community/mysticatea/vue/no-custom-modifiers-on-v-model":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-data-object-declaration":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-destroyed-lifecycle":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-dollar-listeners-api":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-dollar-scopedslots-api":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-events-api":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-filter":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-functional-template":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-html-element-is":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-inline-template":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-props-default-this":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-router-link-tag-prop":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-scope-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-slot-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-slot-scope-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-v-bind-sync":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-v-is": "error",
                "@eslint-community/mysticatea/vue/no-deprecated-v-on-native-modifier":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-v-on-number-modifiers":
                    "error",
                "@eslint-community/mysticatea/vue/no-deprecated-vue-config-keycodes":
                    "error",
                "@eslint-community/mysticatea/vue/no-dupe-keys": "error",
                "@eslint-community/mysticatea/vue/no-dupe-v-else-if": "error",
                "@eslint-community/mysticatea/vue/no-duplicate-attr-inheritance":
                    "error",
                "@eslint-community/mysticatea/vue/no-duplicate-attributes":
                    "error",
                "@eslint-community/mysticatea/vue/no-empty-component-block":
                    "error",
                "@eslint-community/mysticatea/vue/no-empty-pattern": "error",
                "@eslint-community/mysticatea/vue/no-export-in-script-setup":
                    "error",
                "@eslint-community/mysticatea/vue/no-expose-after-await":
                    "error",
                "@eslint-community/mysticatea/vue/no-invalid-model-keys":
                    "error",
                "@eslint-community/mysticatea/vue/no-irregular-whitespace":
                    "error",
                "@eslint-community/mysticatea/vue/no-lifecycle-after-await":
                    "error",
                "@eslint-community/mysticatea/vue/no-lone-template": "error",
                "@eslint-community/mysticatea/vue/no-loss-of-precision": "off", // requires ESLint v7.1
                "@eslint-community/mysticatea/vue/no-multiple-objects-in-class":
                    "error",
                "@eslint-community/mysticatea/vue/no-multiple-slot-args":
                    "error",
                "@eslint-community/mysticatea/vue/no-multiple-template-root":
                    "error",
                "@eslint-community/mysticatea/vue/no-mutating-props": "error",
                "@eslint-community/mysticatea/vue/no-parsing-error": "error",
                "@eslint-community/mysticatea/vue/no-potential-component-option-typo":
                    "error",
                "@eslint-community/mysticatea/vue/no-ref-as-operand": "error",
                "@eslint-community/mysticatea/vue/no-reserved-component-names":
                    "error",
                "@eslint-community/mysticatea/vue/no-reserved-keys": "error",
                "@eslint-community/mysticatea/vue/no-reserved-props": "error",
                "@eslint-community/mysticatea/vue/no-restricted-block": "error",
                "@eslint-community/mysticatea/vue/no-restricted-call-after-await":
                    "error",
                "@eslint-community/mysticatea/vue/no-restricted-class": "error",
                "@eslint-community/mysticatea/vue/no-restricted-component-options":
                    "error",
                "@eslint-community/mysticatea/vue/no-restricted-custom-event":
                    "error",
                "@eslint-community/mysticatea/vue/no-restricted-html-elements":
                    "error",
                "@eslint-community/mysticatea/vue/no-restricted-props": "error",
                "@eslint-community/mysticatea/vue/no-restricted-static-attribute":
                    "error",
                "@eslint-community/mysticatea/vue/no-restricted-v-bind":
                    "error",
                "@eslint-community/mysticatea/vue/no-setup-props-destructure":
                    "error",
                "@eslint-community/mysticatea/vue/no-shared-component-data":
                    "error",
                "@eslint-community/mysticatea/vue/no-side-effects-in-computed-properties":
                    "error",
                "@eslint-community/mysticatea/vue/no-sparse-arrays": "error",
                "@eslint-community/mysticatea/vue/no-static-inline-styles":
                    "error",
                "@eslint-community/mysticatea/vue/no-template-key": "error",
                "@eslint-community/mysticatea/vue/no-template-shadow": "error",
                "@eslint-community/mysticatea/vue/no-template-target-blank":
                    "error",
                "@eslint-community/mysticatea/vue/no-textarea-mustache":
                    "error",
                "@eslint-community/mysticatea/vue/no-this-in-before-route-enter":
                    "error",
                "@eslint-community/mysticatea/vue/no-undef-components": "error",
                "@eslint-community/mysticatea/vue/no-undef-properties": "error",
                "@eslint-community/mysticatea/vue/no-unsupported-features":
                    "error",
                "@eslint-community/mysticatea/vue/no-unused-components":
                    "error",
                "@eslint-community/mysticatea/vue/no-unused-properties":
                    "error",
                "@eslint-community/mysticatea/vue/no-unused-refs": "error",
                "@eslint-community/mysticatea/vue/no-unused-vars": "error",
                "@eslint-community/mysticatea/vue/no-use-computed-property-like-method":
                    "error",
                "@eslint-community/mysticatea/vue/no-use-v-if-with-v-for":
                    "error",
                "@eslint-community/mysticatea/vue/no-useless-concat": "error",
                "@eslint-community/mysticatea/vue/no-useless-mustaches":
                    "error",
                "@eslint-community/mysticatea/vue/no-useless-template-attributes":
                    "error",
                "@eslint-community/mysticatea/vue/no-useless-v-bind": "error",
                "@eslint-community/mysticatea/vue/no-v-for-template-key-on-child":
                    "error",
                "@eslint-community/mysticatea/vue/no-v-for-template-key":
                    "error",
                "@eslint-community/mysticatea/vue/no-v-html": "error",
                "@eslint-community/mysticatea/vue/no-v-model-argument": "error",
                "@eslint-community/mysticatea/vue/no-v-text": "error",
                "@eslint-community/mysticatea/vue/no-v-text-v-html-on-component":
                    "error",
                "@eslint-community/mysticatea/vue/no-watch-after-await":
                    "error",
                "@eslint-community/mysticatea/vue/object-shorthand": [
                    "error",
                    "always",
                    { avoidExplicitReturnArrows: true },
                ],
                "@eslint-community/mysticatea/vue/one-component-per-file":
                    "error",
                "@eslint-community/mysticatea/vue/order-in-components": "error",
                "@eslint-community/mysticatea/vue/padding-line-between-blocks":
                    "error",
                "@eslint-community/mysticatea/vue/prefer-import-from-vue":
                    "error",
                "@eslint-community/mysticatea/vue/prefer-prop-type-boolean-first":
                    "error",
                "@eslint-community/mysticatea/vue/prefer-separate-static-class":
                    "error",
                "@eslint-community/mysticatea/vue/prefer-template": "error",
                "@eslint-community/mysticatea/vue/prefer-true-attribute-shorthand":
                    "error",
                "@eslint-community/mysticatea/vue/prop-name-casing": "error",
                "@eslint-community/mysticatea/vue/require-component-is":
                    "error",
                "@eslint-community/mysticatea/vue/require-default-prop":
                    "error",
                "@eslint-community/mysticatea/vue/require-direct-export":
                    "error",
                "@eslint-community/mysticatea/vue/require-emit-validator":
                    "error",
                "@eslint-community/mysticatea/vue/require-explicit-emits":
                    "error",
                "@eslint-community/mysticatea/vue/require-expose": "error",
                "@eslint-community/mysticatea/vue/require-name-property":
                    "error",
                "@eslint-community/mysticatea/vue/require-prop-type-constructor":
                    "error",
                "@eslint-community/mysticatea/vue/require-prop-types": "error",
                "@eslint-community/mysticatea/vue/require-render-return":
                    "error",
                "@eslint-community/mysticatea/vue/require-slots-as-functions":
                    "error",
                "@eslint-community/mysticatea/vue/require-toggle-inside-transition":
                    "error",
                "@eslint-community/mysticatea/vue/require-v-for-key": "error",
                "@eslint-community/mysticatea/vue/require-valid-default-prop":
                    "error",
                "@eslint-community/mysticatea/vue/return-in-computed-property":
                    "error",
                "@eslint-community/mysticatea/vue/return-in-emits-validator":
                    "error",
                "@eslint-community/mysticatea/vue/script-setup-uses-vars":
                    "error",
                "@eslint-community/mysticatea/vue/sort-keys": "error",
                "@eslint-community/mysticatea/vue/static-class-names-order":
                    "error",
                "@eslint-community/mysticatea/vue/this-in-template": "error",
                "@eslint-community/mysticatea/vue/use-v-on-exact": "error",
                "@eslint-community/mysticatea/vue/v-bind-style": "error",
                "@eslint-community/mysticatea/vue/v-for-delimiter-style":
                    "error",
                "@eslint-community/mysticatea/vue/v-on-event-hyphenation":
                    "error",
                "@eslint-community/mysticatea/vue/v-on-function-call": "error",
                "@eslint-community/mysticatea/vue/v-on-style": "error",
                "@eslint-community/mysticatea/vue/v-slot-style": "error",
                "@eslint-community/mysticatea/vue/valid-define-emits": "error",
                "@eslint-community/mysticatea/vue/valid-define-props": "error",
                "@eslint-community/mysticatea/vue/valid-next-tick": "error",
                "@eslint-community/mysticatea/vue/valid-template-root": "error",
                "@eslint-community/mysticatea/vue/valid-v-bind-sync": "error",
                "@eslint-community/mysticatea/vue/valid-v-bind": "error",
                "@eslint-community/mysticatea/vue/valid-v-cloak": "error",
                "@eslint-community/mysticatea/vue/valid-v-else-if": "error",
                "@eslint-community/mysticatea/vue/valid-v-else": "error",
                "@eslint-community/mysticatea/vue/valid-v-for": "error",
                "@eslint-community/mysticatea/vue/valid-v-html": "error",
                "@eslint-community/mysticatea/vue/valid-v-if": "error",
                "@eslint-community/mysticatea/vue/valid-v-is": "error",
                "@eslint-community/mysticatea/vue/valid-v-memo": "error",
                "@eslint-community/mysticatea/vue/valid-v-model": "error",
                "@eslint-community/mysticatea/vue/valid-v-on": "error",
                "@eslint-community/mysticatea/vue/valid-v-once": "error",
                "@eslint-community/mysticatea/vue/valid-v-pre": "error",
                "@eslint-community/mysticatea/vue/valid-v-show": "error",
                "@eslint-community/mysticatea/vue/valid-v-slot": "error",
                "@eslint-community/mysticatea/vue/valid-v-text": "error",

                // Disabled rules (prefer prettier)
                "@eslint-community/mysticatea/vue/array-bracket-newline": "off",
                "@eslint-community/mysticatea/vue/array-bracket-spacing": "off",
                "@eslint-community/mysticatea/vue/arrow-spacing": "off",
                "@eslint-community/mysticatea/vue/block-spacing": "off",
                "@eslint-community/mysticatea/vue/block-tag-newline": "off",
                "@eslint-community/mysticatea/vue/brace-style": "off",
                "@eslint-community/mysticatea/vue/comma-dangle": "off",
                "@eslint-community/mysticatea/vue/comma-spacing": "off",
                "@eslint-community/mysticatea/vue/comma-style": "off",
                "@eslint-community/mysticatea/vue/dot-location": "off",
                "@eslint-community/mysticatea/vue/func-call-spacing": "off",
                "@eslint-community/mysticatea/vue/html-closing-bracket-newline":
                    "off",
                "@eslint-community/mysticatea/vue/html-closing-bracket-spacing":
                    "off",
                "@eslint-community/mysticatea/vue/html-comment-content-newline":
                    "off",
                "@eslint-community/mysticatea/vue/html-comment-content-spacing":
                    "off",
                "@eslint-community/mysticatea/vue/html-comment-indent": "off",
                "@eslint-community/mysticatea/vue/html-end-tags": "off",
                "@eslint-community/mysticatea/vue/html-indent": "off",
                "@eslint-community/mysticatea/vue/html-quotes": "off",
                "@eslint-community/mysticatea/vue/html-self-closing": "off",
                "@eslint-community/mysticatea/vue/key-spacing": "off",
                "@eslint-community/mysticatea/vue/keyword-spacing": "off",
                "@eslint-community/mysticatea/vue/max-attributes-per-line":
                    "off",
                "@eslint-community/mysticatea/vue/max-len": "off",
                "@eslint-community/mysticatea/vue/multiline-html-element-content-newline":
                    "off",
                "@eslint-community/mysticatea/vue/mustache-interpolation-spacing":
                    "off",
                "@eslint-community/mysticatea/vue/no-extra-parens": "off",
                "@eslint-community/mysticatea/vue/no-multi-spaces": "off",
                "@eslint-community/mysticatea/vue/no-restricted-syntax": "off",
                "@eslint-community/mysticatea/vue/no-spaces-around-equal-signs-in-attribute":
                    "off",
                "@eslint-community/mysticatea/vue/object-curly-newline": "off",
                "@eslint-community/mysticatea/vue/object-curly-spacing": "off",
                "@eslint-community/mysticatea/vue/object-property-newline":
                    "off",
                "@eslint-community/mysticatea/vue/operator-linebreak": "off",
                "@eslint-community/mysticatea/vue/quote-props": "off",
                "@eslint-community/mysticatea/vue/script-indent": "off",
                "@eslint-community/mysticatea/vue/singleline-html-element-content-newline":
                    "off",
                "@eslint-community/mysticatea/vue/space-in-parens": "off",
                "@eslint-community/mysticatea/vue/space-infix-ops": "off",
                "@eslint-community/mysticatea/vue/space-unary-ops": "off",
                "@eslint-community/mysticatea/vue/template-curly-spacing":
                    "off",
            },
        },
    ],
}
