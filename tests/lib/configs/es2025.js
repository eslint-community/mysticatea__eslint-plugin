"use strict"

const config = require("../../../lib/configs/es2025")
const Rules = require("./_rules")

describe("'es2025.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2025.js")
    })
})
