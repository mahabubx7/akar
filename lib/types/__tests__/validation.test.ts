import { describe, expect, test } from "vitest"
import type { ValidationRule } from "../validation"

describe("Test type: ValidationRule", () => {
  test("should return true when value is valid", () => {
    const rule: ValidationRule<string> = (value) => value === "hello"
    expect(rule("hello")).toBe(true)
  })

  test("should return false when value is invalid", () => {
    const rule: ValidationRule<string> = (value) => value === "hello"
    expect(rule("world")).toBe(false)
  })

  test("should return error message when value is invalid", () => {
    const rule: ValidationRule<string> = (value) =>
      value === "hello" ? true : "Invalid value"
    expect(rule("world")).toBe("Invalid value")
  })
})
