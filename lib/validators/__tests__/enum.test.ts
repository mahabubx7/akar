import { describe, expect, test } from "vitest"
import * as en from "../enum"

describe("Enum validators", () => {
  test("isEnum", () => {
    expect(en.isEnum("a", ["a", "b", "c"])).toBe(true)
    expect(en.isEnum("b", ["a", "b", "c"])).toBe(true)
    expect(en.isEnum("c", ["a", "b", "c"])).toBe(true)
    expect(en.isEnum("d", ["a", "b", "c"])).toBe(false)
  })

  test("isNativeEnum", () => {
    enum Colors {
      Red = "red",
      Green = "green",
      Blue = "blue"
    }

    expect(en.isNativeEnum("red", Colors)).toBe(true)
    expect(en.isNativeEnum("green", Colors)).toBe(true)
    expect(en.isNativeEnum("blue", Colors)).toBe(true)
    expect(en.isNativeEnum("yellow", Colors)).toBe(false)
  })
})
