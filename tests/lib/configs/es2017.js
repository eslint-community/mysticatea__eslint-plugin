/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const config = require("../../../lib/configs/es2017")
const Rules = require("./_rules")

describe("'es2017.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2017.js")
    })
})
