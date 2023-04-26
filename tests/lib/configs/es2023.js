"use strict"

const config = require("../../../lib/configs/es2023")
const Rules = require("./_rules")

describe("'es2023.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2023.js")
    })
})
