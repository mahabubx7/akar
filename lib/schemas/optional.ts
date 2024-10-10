import { BaseSchema, ValidationResult } from "../types"

export class AOptional<T> implements BaseSchema<T | undefined> {
  constructor(private schema: BaseSchema<T>) {}

  parse(input: unknown): ValidationResult<T | undefined> {
    if (input === undefined) return { success: true, data: undefined }
    return this.schema.parse(input)
  }
}
