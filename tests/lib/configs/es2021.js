"use strict"

const config = require("../../../lib/configs/es2021")
const Rules = require("./_rules")

describe("'es2021.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2021.js")
    })
})
