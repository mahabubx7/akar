/* eslint-disable @typescript-eslint/no-require-imports */
const { badgen } = require("badgen")
const fs = require("fs")

// Example logic for test results
const testsPassed = true // Replace with actual test result logic
const badge = badgen({
  label: "tests",
  status: testsPassed ? "passing" : "failing",
  color: testsPassed ? "green" : "red"
})

// Save the badge as SVG
fs.writeFileSync("coverage/badge.svg", badge)
console.log("Test result badge generated!")
