import { describe, expect, test } from "vitest"
import { AkarEnum } from "../enum"

describe("Test schema: Enum", () => {
  const enumSchema = new AkarEnum(["A", "B", "C"])

  test("should return data after validate passes", () => {
    const schema = enumSchema
    expect(schema.parse("A").value).toBeDefined()
    expect(schema.parse("A").value!).toBe("A")
  })

  test("should return error when value is not in enum", () => {
    const schema = enumSchema
    expect(schema.parse("D").errors).toBeDefined()
    expect(schema.parse("D").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("D").errors![0].reason).toContain(
      "Value must be one of [A, B, C]"
    )
  })
})
