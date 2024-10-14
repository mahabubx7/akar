/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Boolean schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { AkarBase } from "./base"

export class AkarBoolean extends AkarBase<boolean> {
  private exactValue: boolean | null = null

  exact(value: boolean): this {
    this.exactValue = value
    return this
  }

  parse(input: any): {
    value?: boolean
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    if (typeof input !== "boolean") {
      errors.push({
        field: "boolean",
        reason: "Invalid type, expected boolean",
        value: input
      })
    }
    if (this.exactValue !== null && input !== this.exactValue) {
      errors.push({
        field: "boolean",
        reason: `Value must be ${this.exactValue}`,
        value: input
      })
    }

    if (errors.length > 0) {
      return { errors }
    }

    return { value: input }
  }
}
