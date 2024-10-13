import { describe, expect, test } from "vitest"
import { AkarBase } from "../base"

// Create a concrete subclass for testing
class TestSchema extends AkarBase<string> {
  parse(input: any) {
    if (typeof input === "string") {
      return { value: input }
    } else {
      return {
        errors: [{ field: "input", reason: "Not a string", value: input }]
      }
    }
  }
}

describe("AkarBase", () => {
  test("should parse valid input", () => {
    const schema = new TestSchema()
    const result = schema.parse("valid string")
    expect(result).toEqual({ value: "valid string" })
  })

  test("should return errors for invalid input", () => {
    const schema = new TestSchema()
    const result = schema.parse(123)
    expect(result).toEqual({
      errors: [{ field: "input", reason: "Not a string", value: 123 }]
    })
  })

  test("optional schema should return undefined for undefined input", () => {
    const schema = new TestSchema().optional()
    const result = schema.parse(undefined)
    expect(result).toEqual({ value: undefined })
  })

  test("optional schema should parse valid input", () => {
    const schema = new TestSchema().optional()
    const result = schema.parse("valid string")
    expect(result).toEqual({ value: "valid string" })
  })

  test("optional schema should return errors for invalid input", () => {
    const schema = new TestSchema().optional()
    const result = schema.parse(123)
    expect(result).toEqual({
      errors: [{ field: "input", reason: "Not a string", value: 123 }]
    })
  })
})
