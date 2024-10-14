import { describe, expect, test } from "vitest"
import { AkarEnum } from "../enum"

describe("Test schema: Enum", () => {
  const enumSchema = (input: readonly string[]) => new AkarEnum(input)

  test("should return data after validate passes", () => {
    const schema = enumSchema(["A", "B", "C"])
    expect(schema.parse("A").value).toBeDefined()
    expect(schema.parse("A").value!).toBe("A")
  })

  test("should return error when value is not in enum", () => {
    const schema = enumSchema(["A", "B", "C"])
    expect(schema.parse("D").errors).toBeDefined()
    expect(schema.parse("D").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("D").errors![0].reason).toContain(
      "Value must be one of [A, B, C]"
    )
  })

  test("should return error when value is not string", () => {
    const schema = enumSchema(["A", "B", "C"])
    expect(schema.parse(1).errors).toBeDefined()
    expect(schema.parse(1).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(1).errors![0].reason).toContain(
      "Value must be one of [A, B, C]"
    )
  })

  test("should return default value when value is undefined", () => {
    const schema = enumSchema(["A", "B", "C"]).default("A")
    expect(schema.parse(undefined).value).toBeDefined()
    expect(schema.parse(undefined).value!).toBe("A")
  })

  test("should return error when value is undefined and no default value", () => {
    const schema = enumSchema(["A", "B", "C"])
    expect(schema.parse(undefined).errors!).toBeDefined()
    expect(schema.parse(undefined).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(undefined).errors![0].reason).toContain(
      "Value must be one of [A, B, C]"
    )
  })

  test("should return error when value is not in enum and optional", () => {
    const schema = enumSchema(["A", "B", "C"]).optional()
    expect(schema.parse("D").errors).toBeDefined()
    expect(schema.parse("D").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("D").errors![0].reason).toContain(
      "Value must be one of [A, B, C]"
    )
  })
})
