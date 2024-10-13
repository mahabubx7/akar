import { describe, expect, test } from "vitest"
import { AkarBoolean } from "../boolean"

describe("Test schema: Boolean", () => {
  const boolean = new AkarBoolean()

  test("should return data after validate passes", () => {
    const schema = boolean
    expect(schema.parse(true).value).toBeDefined()
    expect(schema.parse(true).value!).toBe(true)
  })

  test("should return error when value is not a boolean", () => {
    const schema = boolean
    expect(schema.parse(5).errors).toBeDefined()
    expect(schema.parse(5).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(5).errors![0].reason).toContain(
      "Invalid type, expected boolean"
    )
  })
})
