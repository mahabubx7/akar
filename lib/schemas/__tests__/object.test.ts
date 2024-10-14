import { describe, expect, test } from "vitest"
import { AkarBase } from "../base"
import { AkarObject } from "../object"
import { AkarString } from "../string"

describe("Test schema: Object", () => {
  const object = <T extends object>(shape: {
    [K in keyof T]: AkarBase<T[K]>
  }) => new AkarObject<T>(shape)

  test("should return data after validate passes", () => {
    const schema = object({})
    expect(schema.parse({}).value).toBeDefined()
    expect(schema.parse({}).value!).toEqual({})
  })

  test("should return error when value is not an object", () => {
    const schema = object({})
    expect(schema.parse(5).errors).toBeDefined()
    expect(schema.parse(5).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(5).errors![0].reason).toContain(
      "Invalid type, expected object"
    )
  })

  test("should return error when value is not an object", () => {
    const schema = object({})
    expect(schema.parse("hello").errors).toBeDefined()
    expect(schema.parse("hello").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("hello").errors![0].reason).toContain(
      "Invalid type, expected object"
    )
  })

  test("should return parsed data when value is an object", () => {
    const string = new AkarString()
    const schema = object({
      name: string.min(1).max(10)
    })

    expect(schema.parse({ name: "hello" }).value).toBeDefined()
    expect(schema.parse({ name: "hello" }).value!.name).toBe("hello")
    expect(schema.parse({ name: "hello" }).errors).toBeUndefined()
  })

  test("should return error when value is an object with invalid field", () => {
    const string = new AkarString()
    const schema = object({
      name: string.min(1).max(10)
    })

    expect(schema.parse({ name: "hello world" }).errors).toBeDefined()
    expect(
      schema.parse({ name: "hello world" }).errors?.length
    ).toBeGreaterThanOrEqual(1)
    expect(schema.parse({ name: "hello world" }).errors![0].reason).toContain(
      "String is too long. Maximum length is 10"
    )
  })

  test("should return error when value is an object with invalid field", () => {
    const string = new AkarString()
    const schema = object({
      name: string.min(1).max(10)
    }).jsonObject()

    expect(schema.parse({ name: "" }).errors).toBeDefined()
    expect(schema.parse({ name: "" }).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse({ name: "" }).errors![0].reason).toContain(
      "String is too short. Minimum length is 1"
    )
  })
})
