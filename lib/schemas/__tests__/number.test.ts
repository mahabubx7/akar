import { describe, expect, test } from "vitest"
import { AkarNumber } from "../number"

describe("Test schema: Number", () => {
  const number = new AkarNumber()

  test("should return data after validate passes", () => {
    const schema = number.min(1).max(10)
    expect(schema.parse(5).value).toBeDefined()
    expect(schema.parse(5).value!).toBe(5)
  })

  test("should return error when value is not a number", () => {
    const schema = number.min(1).max(10)
    expect(schema.parse("5").errors).toBeDefined()
    expect(schema.parse("5").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("5").errors![0].reason).toContain(
      "Invalid type, expected number"
    )
  })

  test("should return error when value is less than min", () => {
    const schema = number.min(1).max(10)
    expect(schema.parse(0).errors).toBeDefined()
    expect(schema.parse(0).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(0).errors![0].reason).toContain(
      "Number is too small. Minimum value is 1"
    )
  })

  test("should return error when value is greater than max", () => {
    const schema = number.min(1).max(10)
    expect(schema.parse(11).errors).toBeDefined()
    expect(schema.parse(11).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(11).errors![0].reason).toContain(
      "Number is too large. Maximum value is 10"
    )
  })
})
