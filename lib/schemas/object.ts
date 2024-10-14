/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Object schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { objectChecker } from "../validators"
import { isArray } from "../validators/array"
import { isObject } from "../validators/object"
import { AkarBase } from "./base"

export class AkarObject<T extends Record<string, any>> extends AkarBase<T> {
  private shape: { [K in keyof T]: AkarBase<T[K]> }
  private defaults: Partial<T>
  private hasOwnKeys: string[] | null = null
  private hasOwnValues: unknown[] | null = null
  private isJson: boolean = false
  private compare: T | null = null
  private isEqual: boolean = false
  private isDeepEqual: boolean = false
  private isShallowEqual: boolean = false

  constructor(
    shape: { [K in keyof T]: AkarBase<T[K]> },
    defaults: Partial<T> = {}
  ) {
    super()
    this.shape = shape
    this.defaults = defaults
  }

  hasKeys(keys: string[]): this {
    if (!this.hasOwnKeys) {
      this.hasOwnKeys = keys
      return this
    }
    this.hasOwnKeys = [...this.hasOwnKeys!, ...keys]
    return this
  }

  hasValues(values: unknown[]): this {
    if (!this.hasOwnValues) {
      this.hasOwnValues = values
      return this
    }
    this.hasOwnValues = [...this.hasOwnValues!, ...values]
    return this
  }

  equalTo(compare: T): this {
    this.isEqual = true
    this.compare = compare
    return this
  }

  deepEqualTo(compare: T): this {
    this.isDeepEqual = true
    this.compare = compare
    return this
  }

  shallowEqualTo(compare: T): this {
    this.isShallowEqual = true
    this.compare = compare
    return this
  }

  jsonObject(): this {
    this.isJson = true
    return this
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

    // json-object
    if (this.isJson && !objectChecker.isJSON(JSON.stringify(input))) {
      errors.push({
        field: "object",
        reason: "Invalid JSON object",
        value: input
      })
    }

    // comapares
    if (this.isEqual && !objectChecker.isEqual(input, this.compare!)) {
      errors.push({
        field: "object",
        reason: `Object must be equal to ${JSON.stringify(this.compare)}`,
        value: input
      })
    }

    if (this.isDeepEqual && !objectChecker.isDeepEqual(input, this.compare!)) {
      errors.push({
        field: "object",
        reason: `Object must be deeply equal to ${JSON.stringify(this.compare)}`,
        value: input
      })
    }

    if (
      this.isShallowEqual &&
      !objectChecker.isShallowEqual(input, this.compare!)
    ) {
      errors.push({
        field: "object",
        reason: `Object must be shallowly equal to ${JSON.stringify(this.compare)}`,
        value: input
      })
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
