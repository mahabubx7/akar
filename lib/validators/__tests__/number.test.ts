import { describe, expect, test } from "vitest"
import * as number from "../number"

describe("Number validators", () => {
  test("isNumber", () => {
    expect(number.isNumber(1)).toBe(true)
    expect(number.isNumber(1.1)).toBe(true)
    expect(number.isNumber("1")).toBe(false)
    expect(number.isNumber("1.1")).toBe(false)
    expect(number.isNumber(null)).toBe(false)
    expect(number.isNumber(undefined)).toBe(false)
  })

  test("isInteger", () => {
    expect(number.isInteger(1)).toBe(true)
    expect(number.isInteger(1.1)).toBe(false)
    expect(number.isInteger(1.0)).toBe(true)
    expect(number.isInteger(1.1)).toBe(false)
    expect(number.isInteger(NaN)).toBe(false)
  })

  test("isFloat", () => {
    expect(number.isFloat(1)).toBe(false)
    expect(number.isFloat(1.1)).toBe(true)
    expect(number.isFloat(1.0)).toBe(false)
    expect(number.isFloat(1.1)).toBe(true)
    expect(number.isFloat(NaN)).toBe(false)
  })

  test("isPositive", () => {
    expect(number.isPositive(1)).toBe(true)
    expect(number.isPositive(1.1)).toBe(true)
    expect(number.isPositive(0)).toBe(true)
    expect(number.isPositive(-1)).toBe(false)
    expect(number.isPositive(-1.1)).toBe(false)
    expect(number.isPositive(NaN)).toBe(false)
  })

  test("isNegative", () => {
    expect(number.isNegative(-1)).toBe(true)
    expect(number.isNegative(-1.1)).toBe(true)
    expect(number.isNegative(0)).toBe(false)
    expect(number.isNegative(1)).toBe(false)
    expect(number.isNegative(1.1)).toBe(false)
  })

  test("min", () => {
    expect(number.min(1, 0)).toBe(true)
    expect(number.min(1, 1)).toBe(true)
    expect(number.min(1, 2)).toBe(false)
  })

  test("max", () => {
    expect(number.max(1, 0)).toBe(false)
    expect(number.max(1, 1)).toBe(true)
    expect(number.max(1, 2)).toBe(true)
  })

  test("range", () => {
    expect(number.range(1, 0, 1)).toBe(true)
    expect(number.range(1, 1, 1)).toBe(true)
    expect(number.range(1, 1, 2)).toBe(true)
    expect(number.range(1, 2, 3)).toBe(false)
  })

  test("isPort", () => {
    expect(number.isPort(0)).toBe(true)
    expect(number.isPort(65535)).toBe(true)
    expect(number.isPort(65536)).toBe(false)
  })

  test("isOdd", () => {
    expect(number.isOdd(1)).toBe(true)
    expect(number.isOdd(2)).toBe(false)
  })

  test("isEven", () => {
    expect(number.isEven(1)).toBe(false)
    expect(number.isEven(2)).toBe(true)
  })

  test("isDivisible", () => {
    expect(number.isDivisible(4, 2)).toBe(true)
    expect(number.isDivisible(4, 3)).toBe(false)
  })

  test("isPrime", () => {
    expect(number.isPrime(1)).toBe(false)
    expect(number.isPrime(2)).toBe(true)
    expect(number.isPrime(3)).toBe(true)
    expect(number.isPrime(4)).toBe(false)
    expect(number.isPrime(5)).toBe(true)
    expect(number.isPrime(6)).toBe(false)
  })

  test("isPerfect", () => {
    expect(number.isPerfect(6)).toBe(true)
    expect(number.isPerfect(28)).toBe(true)
    expect(number.isPerfect(496)).toBe(true)
    expect(number.isPerfect(8128)).toBe(true)
    expect(number.isPerfect(8129)).toBe(false)
  })
})
