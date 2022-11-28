"use strict"

const config = require("../../../lib/configs/es2022")
const Rules = require("./_rules")

describe("'es2022.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2022.js")
    })
})
