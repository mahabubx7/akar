import { describe, expect, test } from "vitest"
import * as arr from "../array"

describe("Array validators", () => {
  test("isArray", () => {
    expect(arr.isArray([])).toBe(true)
    expect(arr.isArray({})).toBe(false)
    expect(arr.isArray("")).toBe(false)
    expect(arr.isArray(1)).toBe(false)
    expect(arr.isArray(null)).toBe(false)
    expect(arr.isArray(undefined)).toBe(false)
  })

  test("isEmpty", () => {
    expect(arr.isEmpty([])).toBe(true)
    expect(arr.isEmpty([1])).toBe(false)
    expect(arr.isEmpty([1, 2])).toBe(false)
  })

  test("isNotEmpty", () => {
    expect(arr.isNotEmpty([])).toBe(false)
    expect(arr.isNotEmpty([1])).toBe(true)
    expect(arr.isNotEmpty([1, 2])).toBe(true)
  })

  test("length", () => {
    expect(arr.length([], 0)).toBe(true)
    expect(arr.length([1], 1)).toBe(true)
    expect(arr.length([1, 2], 2)).toBe(true)
    expect(arr.length([1, 2], 1)).toBe(false)
    expect(arr.length([1], 2)).toBe(false)
  })

  test("minLength", () => {
    expect(arr.minLength([], 0)).toBe(true)
    expect(arr.minLength([1], 1)).toBe(true)
    expect(arr.minLength([1, 2], 2)).toBe(true)
    expect(arr.minLength([1, 2], 1)).toBe(true)
    expect(arr.minLength([1], 2)).toBe(false)
  })

  test("maxLength", () => {
    expect(arr.maxLength([], 0)).toBe(true)
    expect(arr.maxLength([1], 1)).toBe(true)
    expect(arr.maxLength([1, 2], 2)).toBe(true)
    expect(arr.maxLength([1, 2], 1)).toBe(false)
    expect(arr.maxLength([1], 0)).toBe(false)
  })

  test("rangeLength", () => {
    expect(arr.rangeLength([], 0, 0)).toBe(true)
    expect(arr.rangeLength([1], 1, 1)).toBe(true)
    expect(arr.rangeLength([1, 2], 2, 2)).toBe(true)
    expect(arr.rangeLength([1, 2], 1, 2)).toBe(true)
    expect(arr.rangeLength([1, 2], 2, 3)).toBe(true)
    expect(arr.rangeLength([1, 2], 3, 4)).toBe(false)
    expect(arr.rangeLength([1], 2, 3)).toBe(false)
  })

  test("isUnique", () => {
    expect(arr.isUnique([])).toBe(true)
    expect(arr.isUnique([1])).toBe(true)
    expect(arr.isUnique([1, 2])).toBe(true)
    expect(arr.isUnique([1, 1])).toBe(false)
    expect(arr.isUnique([1, 2, 1])).toBe(false)
  })
})
