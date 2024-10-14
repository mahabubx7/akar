import { describe, expect, test } from "vitest"
import * as obj from "../object"

describe("Object validators", () => {
  test("isObject", () => {
    expect(obj.isObject({})).toBe(true)
    expect(obj.isObject([])).toBe(false)
    expect(obj.isObject("")).toBe(false)
    expect(obj.isObject(1)).toBe(false)
    expect(obj.isObject(null)).toBe(false)
    expect(obj.isObject(undefined)).toBe(false)
  })

  test("hasKey", () => {
    expect(obj.hasKey({ a: 1 }, "a")).toBe(true)
    expect(obj.hasKey({ a: 1 }, "b")).toBe(false)
  })

  test("hasKeys", () => {
    expect(obj.hasKeys({ a: 1, b: 2 }, ["a", "b"])).toBe(true)
    expect(obj.hasKeys({ a: 1, b: 2 }, ["a", "b", "c"])).toBe(false)
  })

  test("isJSON", () => {
    expect(obj.isJSON('{"a":1}')).toBe(true)
    expect(obj.isJSON("{a:1}")).toBe(false)
  })

  test("isEqual", () => {
    expect(obj.isEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(obj.isEqual({ a: 1 }, { a: 2 })).toBe(false)
  })

  test("isDeepEqual", () => {
    expect(obj.isDeepEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(obj.isDeepEqual({ a: 1 }, { a: 2 })).toBe(false)
  })

  test("isShallowEqual", () => {
    expect(obj.isShallowEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(obj.isShallowEqual({ a: 1 }, { a: 2 })).toBe(false)
  })

  test("hasKey", () => {
    expect(obj.hasKey({ a: 1 }, "a")).toBe(true)
    expect(obj.hasKey({ a: 1 }, "b")).toBe(false)
  })

  test("hasKeys", () => {
    expect(obj.hasKeys({ a: 1, b: 2 }, ["a", "b"])).toBe(true)
    expect(obj.hasKeys({ a: 1, b: 2 }, ["a", "b", "c"])).toBe(false)
  })
})
