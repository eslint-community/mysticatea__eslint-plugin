/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { CLIEngine } = require("eslint")

const targetFile = path.resolve(__dirname, "../lib/configs.js")

fs.writeFileSync(
    targetFile,
    `/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY './scripts/generate-configs.js'.
 */
"use strict"

module.exports = {
${fs
        .readdirSync(path.resolve(__dirname, "../lib/configs"))
        .map(fileName => path.basename(fileName, ".js"))
        .filter(id => !id.startsWith("_"))
        .map(id => `    "${id}": require("./configs/${id}"),`)
        .join("\n")}
}
`
)

const linter = new CLIEngine({ fix: true })
const result = linter.executeOnFiles([targetFile])
CLIEngine.outputFixes(result)