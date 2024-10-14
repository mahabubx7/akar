/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Enum schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { isString } from "../validators/string"
import { AkarBase } from "./base"

export class AkarEnum<T extends readonly string[]> extends AkarBase<T[number]> {
  private values: T
  private defaultValue?: T[number]

  constructor(values: T, defaultValue?: T[number]) {
    super()
    this.values = values
    this.defaultValue = defaultValue
  }

  parse(input: any): {
    value?: T[number]
    errors?: { field: string; reason: string; value?: any }[]
  } {
    if (input === undefined) {
      return { value: this.defaultValue }
    }

    if (!isString(input)) {
      return {
        errors: [
          {
            field: "enum",
            reason: `Invalid type, expected string`,
            value: input
          }
        ]
      }
    }

    if (!this.values.includes(input)) {
      return {
        errors: [
          {
            field: "enum",
            reason: `Value must be one of [${this.values.join(", ")}]`,
            value: input
          }
        ]
      }
    }

    return { value: input }
  }
}