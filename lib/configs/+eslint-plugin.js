/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { rulesDocumentUrl } = require("../utils")

module.exports = {
    extends: [require.resolve("./+node.js")],
    overrides: [
        {
            files: ["**/rules/**", "**/internal-rules/**"],
            rules: {
                // Enabled rules
                "@eslint-community/mysticatea/eslint-plugin/consistent-output":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/fixer-return":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/meta-property-ordering":
                    [
                        "error",
                        [
                            "deprecated",
                            "docs",
                            "fixable",
                            "messages",
                            "replacedBy",
                            "schema",
                            "type",
                        ],
                    ],
                "@eslint-community/mysticatea/eslint-plugin/no-deprecated-context-methods":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/no-deprecated-report-api":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/no-identical-tests":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/no-missing-placeholders":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/no-unused-placeholders":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/no-useless-token-range":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/prefer-object-rule":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/prefer-output-null":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/prefer-placeholders":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/prefer-replace-text":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/report-message-format":
                    ["error", "[^a-z'\"{].*\\.$"],
                "@eslint-community/mysticatea/eslint-plugin/require-meta-docs-description":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/require-meta-docs-url":
                    ["error", { pattern: rulesDocumentUrl }],
                "@eslint-community/mysticatea/eslint-plugin/require-meta-fixable":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/require-meta-schema":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/require-meta-type":
                    "error",
                "@eslint-community/mysticatea/eslint-plugin/test-case-property-ordering":
                    [
                        "error",
                        [
                            "filename",
                            "code",
                            "output",
                            "options",
                            "parser",
                            "parserOptions",
                            "globals",
                            "env",
                            "errors",
                        ],
                    ],
                "@eslint-community/mysticatea/eslint-plugin/test-case-shorthand-strings":
                    "error",
            },
        },
    ],
}
