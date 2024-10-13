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
    if (input === undefined) return { value: undefined }
    return this.schema.parse(input)
  }
}
