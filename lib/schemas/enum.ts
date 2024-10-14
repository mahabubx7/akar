/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Enum schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { enumChecker } from "../validators"
import { AkarBase } from "./base"

export class AkarEnum<T extends readonly string[]> extends AkarBase<T[number]> {
  private values: T
  private defaultValue?: T[number]
  private isNative?: boolean

  constructor(values: T, defaultValue?: T[number]) {
    super()
    this.values = values
    this.defaultValue = defaultValue
  }

  default(value: T[number]): this {
    this.defaultValue = value
    return this
  }

  parse(input: any): {
    value?: T[number]
    errors?: { field: string; reason: string; value?: any }[]
  } {
    if (input === undefined && this.defaultValue !== undefined) {
      return { value: this.defaultValue }
    }

    const errors: { field: string; reason: string; value?: any }[] = []

    if (this.defaultValue === undefined && !this.optional) {
      errors.push({
        field: "enum",
        reason: `Required value, no default value provided nor marked as optional`,
        value: input
      })
    }

    if (!enumChecker.isEnum(input, this.values as unknown as string[])) {
      errors.push({
        field: "enum",
        reason: `Value must be one of [${this.values.join(", ")}]`,
        value: input
      })
    }

    if (
      this.isNative &&
      !enumChecker.isNativeEnum(input, this.values as unknown as object)
    ) {
      errors.push({
        field: "enum",
        reason: `Value must be one of [${this.values.join(", ")}]`,
        value: input
      })
    }

    if (typeof input !== "string") {
      errors.push({
        field: "enum",
        reason: `Invalid type, expected string`,
        value: input
      })
    }

    if (errors.length > 0) {
      return { errors }
    }

    return { value: input }
  }
}
