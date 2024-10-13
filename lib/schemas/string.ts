/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * String schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { isString } from "../validators/string"
import { AkarBase } from "./base"

export class AkarString extends AkarBase<string> {
  private minLength: number | null = null
  private maxLength: number | null = null

  min(length: number): this {
    this.minLength = length
    return this
  }

  max(length: number): this {
    this.maxLength = length
    return this
  }

  parse(input: any): {
    value?: string
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []

    if (!isString(input)) {
      errors.push({
        field: "string",
        reason: "Invalid type, expected string",
        value: input
      })
      return { errors }
    }

    if (this.minLength !== null && input.length < this.minLength) {
      errors.push({
        field: "string",
        reason: `String is too short. Minimum length is ${this.minLength}`,
        value: input
      })
    }

    if (this.maxLength !== null && input.length > this.maxLength) {
      errors.push({
        field: "string",
        reason: `String is too long. Maximum length is ${this.maxLength}`,
        value: input
      })
    }

    return errors.length > 0 ? { errors } : { value: input }
  }
}
