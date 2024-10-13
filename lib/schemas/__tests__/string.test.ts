import { describe, expect, test } from "vitest"
import { AkarString } from "../string"

describe("Test schema: String", () => {
  const string = new AkarString()

  test("should return data after validate passes", () => {
    const schema = string.min(1).max(10)
    expect(schema.parse("hello").value).toBeDefined()
    expect(schema.parse("hello").value!).toBe("hello")
  })

  test("should return error when value is not a string", () => {
    const schema = string.min(1).max(10)
    expect(schema.parse(5).errors).toBeDefined()
    expect(schema.parse(5).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(5).errors![0].reason).toContain(
      "Invalid type, expected string"
    )
  })

  test("should return error when value is less than min", () => {
    const schema = string.min(1).max(10)
    expect(schema.parse("").errors).toBeDefined()
    expect(schema.parse("").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("").errors![0].reason).toContain(
      "String is too short. Minimum length is 1"
    )
  })

  test("should return error when value is greater than max", () => {
    const schema = string.min(1).max(10)
    expect(schema.parse("hello world").errors).toBeDefined()
    expect(schema.parse("hello world").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("hello world").errors![0].reason).toContain(
      "String is too long. Maximum length is 10"
    )
  })
})
