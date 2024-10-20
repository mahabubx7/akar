/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Array schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { arrayChecker } from "../validators"
import { AkarBase } from "./base"

export class AkarArray<T> extends AkarBase<T[]> {
  private miniumLength?: number
  private maximumLength?: number
  private hasRange: [number, number] = [0, -1]
  private isUnique?: boolean

  constructor(private schema: AkarBase<T>) {
    super()
  }

  min(min: number): this {
    this.miniumLength = min
    return this
  }

  max(max: number): this {
    this.maximumLength = max
    return this
  }

  range(min: number, max: number): this {
    this.hasRange = [min, max]
    return this
  }

  unique(): this {
    this.isUnique = true
    return this
  }

  parse(input: any): {
    value?: T[]
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []

    if (!arrayChecker.isArray(input)) {
      errors.push({
        field: "array",
        reason: "Invalid type, expected array",
        value: input
      })
      return { errors }
    }

    if (
      this.miniumLength &&
      !arrayChecker.minLength(input, this.miniumLength)
    ) {
      errors.push({
        field: "array",
        reason: `Expected at least ${this.miniumLength} items`,
        value: input
      })
    }

    if (
      this.maximumLength &&
      !arrayChecker.maxLength(input, this.maximumLength)
    ) {
      errors.push({
        field: "array",
        reason: `Expected at most ${this.maximumLength} items`,
        value: input
      })
    }

    if (this.isUnique && !arrayChecker.isUnique(input)) {
      errors.push({
        field: "array",
        reason: "Expected unique items",
        value: input
      })
    }

    const result: T[] = []

    input.forEach((item, index) => {
      const parsed = this.schema.parse(item)
      if (parsed.errors) {
        parsed.errors.forEach((error) => {
          errors.push({
            field: `${index}`,
            reason: error.reason,
            value: error.value
          })
        })
      } else {
        result.push(parsed.value!)
      }
    })

    return errors.length > 0 ? { errors } : { value: result }
  }
}
