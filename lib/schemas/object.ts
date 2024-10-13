/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Object schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { isArray } from "../validators/array"
import { isObject } from "../validators/object"
import { AkarBase } from "./base"

export class AkarObject<T extends Record<string, any>> extends AkarBase<T> {
  constructor(
    private shape: { [K in keyof T]: AkarBase<T[K]> },
    private defaults: Partial<T> = {}
  ) {
    super()
  }

  parse(input: any): {
    value?: T
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    const result: Partial<T> = {}

    if (!isObject(input) || input === null || isArray(input)) {
      errors.push({
        field: "object",
        reason: "Invalid type, expected object",
        value: input
      })
      return { errors }
    }

    for (const key in this.shape) {
      const schema = this.shape[key]
      const parsed = schema.parse(
        input[key] !== undefined ? input[key] : this.defaults[key]
      )

      if (parsed.errors) {
        parsed.errors.forEach((error) => {
          errors.push({
            field: key,
            reason: error.reason,
            value: error.value
          })
        })
      } else {
        result[key] = parsed.value!
      }
    }

    return errors.length > 0 ? { errors } : { value: result as T }
  }
}
