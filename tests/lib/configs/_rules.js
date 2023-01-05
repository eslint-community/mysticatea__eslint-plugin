/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { Linter } = require("eslint")
const {
    Legacy: { ConfigArrayFactory, ConfigValidator },
} = require("@eslint/eslintrc")
const {
    rules: PluginRulesIndex,
} = require("@eslint-community/eslint-plugin-mysticatea")
const { rules: removedRules } = require("./eslint-replacements.json")
const { rules: prettierConfigRules } = require("eslint-config-prettier")

const coreRules = new Linter().getRules()
const pluginRules = new Map(
    Object.keys(PluginRulesIndex).map((key) => [
        `@eslint-community/mysticatea/${key}`,
        PluginRulesIndex[key],
    ])
)
const allRules = new Map([...coreRules, ...pluginRules])

const deprecatedRuleNames = new Set(
    Array.from(allRules)
        .filter(([, rule]) => rule && rule.meta && rule.meta.deprecated)
        .map(([ruleId]) => ruleId)
)
const removedRuleNames = new Set(Object.keys(removedRules))

const configFactory = new ConfigArrayFactory()
const configValidator = new ConfigValidator()

module.exports = {
    /**
     * Validate the given config object.
     * @param {any} config The config object to check.
     * @param {string} source The filename of the configuration to show error messages.
     * @returns {void}
     */
    validateConfig(config, source) {
        configValidator.validate(config, source, (ruleId) =>
            allRules.get(ruleId)
        )

        /* istanbul ignore next */
        for (const [ruleId, ruleConf] of [
            config.rules,
            ...(config.overrides || []).map((c) => c.rules),
        ]
            .filter(Boolean)
            .flatMap((r) => Object.entries(r))) {
            const rule = allRules.get(ruleId)
            if (rule == null) {
                throw new Error(`The '${ruleId}' rule does not exist.`)
            }
            if (deprecatedRuleNames.has(ruleId)) {
                throw new Error(`The '${ruleId}' rule was deprecated.`)
            }
            if (removedRuleNames.has(ruleId)) {
                throw new Error(`The '${ruleId}' rule was removed.`)
            }
            const originalRuleId = ruleId.includes("/")
                ? `${ruleId
                      .replace(/^@eslint-community\/mysticatea\//u, "")
                      .replace(/^ts\//u, "@typescript-eslint/")}`
                : ruleId
            if (prettierConfigRules[originalRuleId] != null) {
                const severity = Array.isArray(ruleConf)
                    ? ruleConf[0]
                    : ruleConf
                if (severity != null && severity !== 0 && severity !== "off") {
                    throw new Error(
                        `The '${ruleId}' rule conflicts with prettier and should be turned 'off'.`
                    )
                }
            }
        }
    },

    /**
     * Get the rule definition of the given ID.
     * @param {string} ruleId The rule ID to get.
     * @returns {object} The rule definition.
     */
    getRuleDefinition(ruleId) {
        return allRules.get(ruleId)
    },

    /**
     * Get the core rules.
     * @returns {string[]} The core rule names.
     */
    getCoreRuleNames() {
        return Array.from(coreRules.keys()).filter(
            (ruleId) =>
                !deprecatedRuleNames.has(ruleId) &&
                !removedRuleNames.has(ruleId)
        )
    },

    /**
     * Get the plugin rules.
     * @param {"eslint-comments"|"node"|"ts"|"vue"} pluginName The plugin name to get.
     * @returns {object} The core rules. Keys are rule IDs and values are each rule definition.
     */
    getPluginRuleNames(pluginName) {
        return Object.keys(PluginRulesIndex)
            .filter((ruleId) =>
                pluginName === "@eslint-community/mysticatea"
                    ? !ruleId.includes("/")
                    : ruleId.startsWith(`${pluginName}/`)
            )
            .map((ruleId) => `@eslint-community/mysticatea/${ruleId}`)
            .filter(
                (ruleId) =>
                    !deprecatedRuleNames.has(ruleId) &&
                    !removedRuleNames.has(ruleId)
            )
    },

    *iterateRulesOfConfig(config, name) {
        const filePath = require.resolve(`../../../lib/configs/${name}`)
        for (const element of configFactory.create(config, { filePath })) {
            if (element.rules) {
                yield* Object.entries(element.rules)
            }
        }
    },

    getRulesOfConfig(config, name) {
        const rules = {}
        for (const [key, value] of this.iterateRulesOfConfig(config, name)) {
            rules[key] = value
        }
        return rules
    },
}
