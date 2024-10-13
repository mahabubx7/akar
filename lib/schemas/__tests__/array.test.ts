import { describe, expect, test } from "vitest"
import { AkarArray } from "../array"
import { AkarBase } from "../base"
import { AkarNumber } from "../number"

describe("Test schema: Array", () => {
  const array = <T>(schema: AkarBase<T>) => new AkarArray<T>(schema)
  const number = new AkarNumber()

  test("should return data after validate passes", () => {
    const schema = array(number.min(1).max(10))
    expect(schema.parse([1, 2, 3, 4, 5]).value).toBeDefined()
    expect(schema.parse([1, 2, 3, 4, 5]).value!).toEqual([1, 2, 3, 4, 5])
  })

  test("should return error when value is not an array", () => {
    const schema = array(number.min(1).max(10))
    expect(schema.parse("5").errors).toBeDefined()
    expect(schema.parse("5").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("5").errors![0].reason).toContain(
      "Invalid type, expected array"
    )
  })

  test("should return error when value items validation have errors", () => {
    const schema = array(number.min(1).max(10))
    expect(schema.parse([1, 2, 3, 4, 5, "6"]).errors).toBeDefined()
    expect(
      schema.parse([1, 2, 3, 4, 5, "6"]).errors?.length
    ).toBeGreaterThanOrEqual(1)
    expect(schema.parse([1, 2, 3, 4, 5, "6"]).errors![0].reason).toContain(
      "Invalid type, expected number"
    )

    expect(schema.parse([0, 1, 2, 3]).errors).toBeDefined()
    expect(schema.parse([0, 1, 2, 3]).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse([0, 1, 2, 3]).errors![0].reason).toContain(
      "Number is too small. Minimum value is 1"
    )
  })
})
