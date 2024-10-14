/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Number schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { numberChecker } from "../validators"
import { AkarBase } from "./base"

export class AkarNumber extends AkarBase<number> {
  private minValue: number | null = null
  private maxValue: number | null = null
  private integerOnly: boolean = false
  private floatOnly: boolean = false
  private positiveOnly: boolean = false
  private negativeOnly: boolean = false
  private oddOnly: boolean = false
  private evenOnly: boolean = false
  private divisibleByOnly: number | null = null
  private portOnly: boolean = false
  private binaryOnly: boolean = false
  private octalOnly: boolean = false
  private hexOnly: boolean = false
  private rangeOnly: number[] | null = null
  private primeOnly: boolean = false
  private perfectOnly: boolean = false

  min(value: number): this {
    this.minValue = value
    return this
  }

  max(value: number): this {
    this.maxValue = value
    return this
  }

  integer(): this {
    this.integerOnly = true
    return this
  }

  float(): this {
    this.floatOnly = true
    return this
  }

  unsigned(): this {
    this.positiveOnly = true
    return this
  }

  signed(): this {
    this.negativeOnly = true
    return this
  }

  odd(): this {
    this.oddOnly = true
    return this
  }

  even(): this {
    this.evenOnly = true
    return this
  }

  divisibleBy(value: number): this {
    this.divisibleByOnly = value
    return this
  }

  port(): this {
    this.portOnly = true
    return this
  }

  binary(): this {
    this.binaryOnly = true
    return this
  }

  octal(): this {
    this.octalOnly = true
    return this
  }

  hex(): this {
    this.hexOnly = true
    return this
  }

  range(numbers: [number, number]): this {
    this.rangeOnly = [...numbers]
    return this
  }

  prime(): this {
    this.primeOnly = true
    return this
  }

  perfect(): this {
    this.perfectOnly = true
    return this
  }

  parse(input: any): {
    value?: number
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []

    if (
      !numberChecker.isNumber(input) &&
      !this.binaryOnly &&
      !this.octalOnly &&
      !this.hexOnly
    ) {
      errors.push({
        field: "number",
        reason: "Invalid type, expected number",
        value: input
      })
    }

    if (this.minValue !== null && !numberChecker.min(input, this.minValue)) {
      errors.push({
        field: "number",
        reason: `Number is too small. Minimum value is ${this.minValue}`,
        value: input
      })
    }

    if (this.maxValue !== null && !numberChecker.max(input, this.maxValue)) {
      errors.push({
        field: "number",
        reason: `Number is too large. Maximum value is ${this.maxValue}`,
        value: input
      })
    }

    if (this.floatOnly && !numberChecker.isFloat(input)) {
      errors.push({
        field: "number",
        reason: "Number is not a float",
        value: input
      })
    }

    if (this.integerOnly && !numberChecker.isInteger(input)) {
      errors.push({
        field: "number",
        reason: "Number is not an integer",
        value: input
      })
    }

    if (this.positiveOnly && !numberChecker.isPositive(input)) {
      errors.push({
        field: "number",
        reason: "Number is not positive",
        value: input
      })
    }

    if (this.negativeOnly && !numberChecker.isNegative(input)) {
      errors.push({
        field: "number",
        reason: "Number is not negative",
        value: input
      })
    }

    if (this.oddOnly && !numberChecker.isOdd(input)) {
      errors.push({
        field: "number",
        reason: "Number is not odd",
        value: input
      })
    }

    if (this.evenOnly && !numberChecker.isEven(input)) {
      errors.push({
        field: "number",
        reason: "Number is not even",
        value: input
      })
    }

    if (
      this.divisibleByOnly !== null &&
      !numberChecker.isDivisible(input, this.divisibleByOnly)
    ) {
      errors.push({
        field: "number",
        reason: `Number is not divisible by ${this.divisibleByOnly}`,
        value: input
      })
    }

    if (this.portOnly && !numberChecker.isPort(input)) {
      errors.push({
        field: "number",
        reason: "Number is not a valid port number (0-65535)",
        value: input
      })
    }

    if (this.binaryOnly && !numberChecker.isBinary(input)) {
      errors.push({
        field: "number",
        reason: "Number is not a binary number",
        value: input
      })
    }

    if (this.octalOnly && !numberChecker.isOctal(input)) {
      errors.push({
        field: "number",
        reason: "Number is not an octal number",
        value: input
      })
    }

    if (this.hexOnly && !numberChecker.isHex(input)) {
      errors.push({
        field: "number",
        reason: "Number is not a hexadecimal number",
        value: input
      })
    }

    if (
      this.rangeOnly &&
      !numberChecker.range(input, this.rangeOnly[0], this.rangeOnly[1])
    ) {
      errors.push({
        field: "number",
        reason: "Number is not within the range",
        value: input
      })
    }

    if (this.primeOnly && !numberChecker.isPrime(input)) {
      errors.push({
        field: "number",
        reason: "Number is not a prime number",
        value: input
      })
    }

    if (this.perfectOnly && !numberChecker.isPerfect(input)) {
      errors.push({
        field: "number",
        reason: "Number is not a perfect number",
        value: input
      })
    }

    return errors.length > 0 ? { errors } : { value: input }
  }
}
