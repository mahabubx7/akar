/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * @since 0.1.0-beta
 * @license MIT
 */

import { AkarBase } from "./base"

export class AkarNumber extends AkarBase<number> {
  private minValue: number | null = null
  private maxValue: number | null = null

  min(value: number): this {
    this.minValue = value
    return this
  }

  max(value: number): this {
    this.maxValue = value
    return this
  }

  parse(input: any): {
    value?: number
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []

    if (typeof input !== "number") {
      errors.push({
        field: "number",
        reason: "Invalid type, expected number",
        value: input
      })
      return { errors }
    }

    if (this.minValue !== null && input < this.minValue) {
      errors.push({
        field: "number",
        reason: `Number is too small. Minimum value is ${this.minValue}`,
        value: input
      })
    }

    if (this.maxValue !== null && input > this.maxValue) {
      errors.push({
        field: "number",
        reason: `Number is too large. Maximum value is ${this.maxValue}`,
        value: input
      })
    }

    return errors.length > 0 ? { errors } : { value: input }
  }
}
