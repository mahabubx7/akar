import { describe, expect, test } from "vitest"
import { AkarNumber } from "../number"

describe("Test schema: Number", () => {
  const number = () => new AkarNumber()

  test("should return data after validate passes", () => {
    const schema = number().min(1).max(10)
    expect(schema.parse(5).value).toBeDefined()
    expect(schema.parse(5).value!).toBe(5)
  })

  test("should return error when value is not a number", () => {
    const schema = number().min(1).max(10)
    expect(schema.parse("5").errors).toBeDefined()
    expect(schema.parse("5").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("5").errors![0].reason).toContain(
      "Invalid type, expected number"
    )
  })

  test("should return error when value is less than min", () => {
    const schema = number().min(1).max(10)
    expect(schema.parse(0).errors).toBeDefined()
    expect(schema.parse(0).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(0).errors![0].reason).toContain(
      "Number is too small. Minimum value is 1"
    )
  })

  test("should return error when value is greater than max", () => {
    const schema = number().min(1).max(10)
    expect(schema.parse(11).errors).toBeDefined()
    expect(schema.parse(11).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(11).errors![0].reason).toContain(
      "Number is too large. Maximum value is 10"
    )
  })

  test("should return error when value is not an integer", () => {
    const schema = number().integer()
    expect(schema.parse(1).value).toBeDefined()
    expect(schema.parse(1).value!).toBe(1)
    expect(schema.parse(1.5).errors).toBeDefined()
    expect(schema.parse(1.5).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(1.5).errors![0].reason).toContain(
      "Number is not an integer"
    )
  })

  test("should return error when value is not a float", () => {
    const schema = number().float()
    expect(schema.parse(1.5).value).toBeDefined()
    expect(schema.parse(1.5).value!).toBe(1.5)
    expect(schema.parse(1).errors).toBeDefined()
    expect(schema.parse(1).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(1).errors![0].reason).toContain("Number is not a float")
  })

  test("should return error when value is not positive", () => {
    const schema = number().unsigned()
    expect(schema.parse(1).value).toBeDefined()
    expect(schema.parse(1).value!).toBe(1)
    expect(schema.parse(-1).errors).toBeDefined()
    expect(schema.parse(-1).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(-1).errors![0].reason).toContain(
      "Number is not positive"
    )
  })

  test("should return error when value is not negative", () => {
    const schema = number().signed()
    expect(schema.parse(-1).value).toBeDefined()
    expect(schema.parse(-1).value!).toBe(-1)
    expect(schema.parse(1).errors).toBeDefined()
    expect(schema.parse(1).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(1).errors![0].reason).toContain(
      "Number is not negative"
    )
  })

  test("should return error when value is not a port number", () => {
    const schema = number().port()
    expect(schema.parse(80).value).toBeDefined()
    expect(schema.parse(80).value!).toBe(80)
    expect(schema.parse(65536).errors).toBeDefined()
    expect(schema.parse(65536).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(65536).errors![0].reason).toContain(
      "Number is not a valid port number (0-65535)"
    )
  })

  test("should return error when value is not odd", () => {
    const schema = number().odd()
    expect(schema.parse(1).value).toBeDefined()
    expect(schema.parse(1).value!).toBe(1)
    expect(schema.parse(2).errors).toBeDefined()
    expect(schema.parse(2).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(2).errors![0].reason).toContain("Number is not odd")
  })

  test("should return error when value is not even", () => {
    const schema = number().even()
    expect(schema.parse(2).value).toBeDefined()
    expect(schema.parse(2).value!).toBe(2)
    expect(schema.parse(1).errors).toBeDefined()
    expect(schema.parse(1).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(1).errors![0].reason).toContain("Number is not even")
  })

  test("should return error when value is not divisible by divisor", () => {
    const schema = number().divisibleBy(3)
    expect(schema.parse(3).value).toBeDefined()
    expect(schema.parse(3).value!).toBe(3)
    expect(schema.parse(4).errors).toBeDefined()
    expect(schema.parse(4).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(4).errors![0].reason).toContain(
      "Number is not divisible by 3"
    )
  })

  test("should return error when value is not a prime number", () => {
    const schema = number().prime()
    expect(schema.parse(2).value).toBeDefined()
    expect(schema.parse(2).value!).toBe(2)
    expect(schema.parse(3).value).toBeDefined()
    expect(schema.parse(3).value!).toBe(3)
    expect(schema.parse(4).errors).toBeDefined()
    expect(schema.parse(4).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(4).errors![0].reason).toContain(
      "Number is not a prime number"
    )
  })

  test("should return error when value is not a perfect number", () => {
    const schema = number().perfect()
    expect(schema.parse(6).value).toBeDefined()
    expect(schema.parse(6).value!).toBe(6)
    expect(schema.parse(28).value).toBeDefined()
    expect(schema.parse(28).value!).toBe(28)
    expect(schema.parse(10).errors).toBeDefined()
    expect(schema.parse(10).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(10).errors![0].reason).toContain(
      "Number is not a perfect number"
    )
  })

  test("should return error when value is not a binary number", () => {
    const schema = number().binary()
    expect(schema.parse(0b1010).value).toBeDefined()
    expect(schema.parse(0b1010).value!).toBe(0b1010)
    expect(schema.parse("0b10102").errors).toBeDefined()
    expect(schema.parse("0b10102").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("0b10102").errors![0].reason).toContain(
      "Number is not a binary number"
    )
  })

  test("should return error when value is not an octal number", () => {
    const schema = number().octal()
    expect(schema.parse(0o777).value).toBeDefined()
    expect(schema.parse(0o777).value!).toBe(0o777)
    expect(schema.parse("0o778").errors).toBeDefined()
    expect(schema.parse("0o778").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("0o778").errors![0].reason).toContain(
      "Number is not an octal number"
    )
  })

  test("should return error when value is not a hexadecimal number", () => {
    const schema = number().hex()
    expect(schema.parse(0x10).value).toBeDefined()
    expect(schema.parse(0x10).value!).toBe(0x10)
    expect(schema.parse("0x1G").errors).toBeDefined()
    expect(schema.parse("0x1G").errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse("0x1G").errors![0].reason).toContain(
      "Number is not a hexadecimal number"
    )
  })

  test("should return error when value is not within the range", () => {
    const schema = number().range([1, 10])
    expect(schema.parse(5).value).toBeDefined()
    expect(schema.parse(5).value!).toBe(5)
    expect(schema.parse(0).errors).toBeDefined()
    expect(schema.parse(0).errors?.length).toBeGreaterThanOrEqual(1)
    expect(schema.parse(0).errors![0].reason).toContain(
      "Number is not within the range"
    )
  })
})
