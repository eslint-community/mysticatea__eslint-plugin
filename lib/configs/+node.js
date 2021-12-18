/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    parserOptions: {
        ecmaFeatures: { globalReturn: true },
        ecmaVersion: 2020,
        sourceType: "script",
    },
    globals: {
        // ECMAScript (experimental)
        globalThis: "readonly",
        // ECMA-404
        Intl: "readonly",

        // Web Standard
        TextDecoder: "readonly",
        TextEncoder: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        WebAssembly: "readonly",
        clearInterval: "readonly",
        clearTimeout: "readonly",
        console: "readonly",
        queueMicrotask: "readonly",
        setInterval: "readonly",
        setTimeout: "readonly",

        // Node.js
        Buffer: "readonly",
        GLOBAL: "readonly",
        clearImmediate: "readonly",
        global: "readonly",
        process: "readonly",
        root: "readonly",
        setImmediate: "readonly",

        // CommonJS
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "readonly",
        require: "readonly",
    },
    rules: {
        "@eslint-community/mysticatea/node/callback-return": "error",
        "@eslint-community/mysticatea/node/exports-style": [
            "error",
            "module.exports",
        ],
        "@eslint-community/mysticatea/node/file-extension-in-import": [
            "error",
            "always",
            { ".js": "never", ".ts": "never", ".tsx": "never" },
        ],
        "@eslint-community/mysticatea/node/global-require": "error",
        "@eslint-community/mysticatea/node/handle-callback-err": "error",
        "@eslint-community/mysticatea/node/no-callback-literal": "off",
        "@eslint-community/mysticatea/node/no-deprecated-api": "error",
        "@eslint-community/mysticatea/node/no-exports-assign": "error",
        "@eslint-community/mysticatea/node/no-extraneous-import": "error",
        "@eslint-community/mysticatea/node/no-extraneous-require": "error",
        "@eslint-community/mysticatea/node/no-missing-import": "error",
        "@eslint-community/mysticatea/node/no-missing-require": "error",
        "@eslint-community/mysticatea/node/no-mixed-requires": "error",
        "@eslint-community/mysticatea/node/no-new-require": "error",
        "@eslint-community/mysticatea/node/no-path-concat": "error",
        "@eslint-community/mysticatea/node/no-process-env": "error",
        "@eslint-community/mysticatea/node/no-process-exit": "error",
        "@eslint-community/mysticatea/node/no-restricted-import": "error",
        "@eslint-community/mysticatea/node/no-restricted-require": "error",
        "@eslint-community/mysticatea/node/no-sync": "error",
        "@eslint-community/mysticatea/node/no-unpublished-bin": "error",
        "@eslint-community/mysticatea/node/no-unpublished-import": "error",
        "@eslint-community/mysticatea/node/no-unpublished-require": "error",
        "@eslint-community/mysticatea/node/no-unsupported-features/es-builtins":
            "error",
        "@eslint-community/mysticatea/node/no-unsupported-features/es-syntax":
            "error",
        "@eslint-community/mysticatea/node/no-unsupported-features/node-builtins":
            "error",
        "@eslint-community/mysticatea/node/prefer-global/buffer": "error",
        "@eslint-community/mysticatea/node/prefer-global/console": "error",
        "@eslint-community/mysticatea/node/prefer-global/process": "error",
        "@eslint-community/mysticatea/node/prefer-global/text-decoder": "off",
        "@eslint-community/mysticatea/node/prefer-global/text-encoder": "off",
        "@eslint-community/mysticatea/node/prefer-global/url-search-params":
            "off",
        "@eslint-community/mysticatea/node/prefer-global/url": "off",
        "@eslint-community/mysticatea/node/prefer-promises/dns": "off",
        "@eslint-community/mysticatea/node/prefer-promises/fs": "off",
        "@eslint-community/mysticatea/node/process-exit-as-throw": "error",
        "@eslint-community/mysticatea/node/shebang": "error",
    },
    settings: {
        node: {
            tryExtensions: [
                ".vue",
                ".tsx",
                ".ts",
                ".mjs",
                ".cjs",
                ".js",
                ".json",
                ".node",
            ],
        },
    },
    overrides: [
        {
            files: ["*.mjs", "*.ts", "*.tsx", "*.vue"],
            extends: [require.resolve("./+modules.js")],
        },
    ],
}
