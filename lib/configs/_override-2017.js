/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    rules: {
        "@eslint-community/mysticatea/prettier": [
            "error",
            {
                semi: false,
                tabWidth: 4,
                trailingComma: "all",
            },
            {
                usePrettierrc: false,
            },
        ],
    },
}
