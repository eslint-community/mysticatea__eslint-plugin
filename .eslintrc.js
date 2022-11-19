"use strict"

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+eslint-plugin",
    ],
    overrides: [
        {
            files: ["lib/utils.js", "scripts/*.js"],
            rules: {
                "@eslint-community/mysticatea/node/no-sync": "off",
            },
        },
        {
            files: [
                "lib/configs.js",
                "lib/foreign-rules/ts.js",
                "lib/processors.js",
                "lib/rules.js",
            ],
            rules: {
                "@eslint-community/mysticatea/node/global-require": "off",
            },
        },
    ],
}
