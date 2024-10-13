/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Base schema
 * @since 1.0.0-beta
 * @license MIT
 */

export abstract class AkarBase<T> {
  abstract parse(input: any): {
    value?: T
    errors?: { field: string; reason: string; value?: any }[]
  }

  optional(): AkarOptionalSchema<T> {
    return new AkarOptionalSchema(this)
  }
}

export class AkarOptionalSchema<T> extends AkarBase<T | undefined> {
  constructor(private schema: AkarBase<T>) {
    super()
  }

  parse(input: any): {
    value?: T | undefined
    errors?: { field: string; reason: string; value?: any }[]
  } {
    // If input is undefined, return undefined
    if (input === undefined) return { value: undefined }

    // Otherwise, parse the value using the base schema
    return this.schema.parse(input)
  }
}
