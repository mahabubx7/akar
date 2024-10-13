import { AkarBase } from "./base"

export class AkarArray<T> extends AkarBase<T[]> {
  constructor(private schema: AkarBase<T>) {
    super()
  }

  parse(input: any): {
    value?: T[]
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    const result: T[] = []

    if (!Array.isArray(input)) {
      errors.push({
        field: "",
        reason: "Invalid type, expected array",
        value: input
      })
    } else {
      input.forEach((item, index) => {
        const parsed = this.schema.parse(item)
        if (parsed.errors) {
          parsed.errors.forEach((error) =>
            errors.push({
              field: `[${index}]`,
              reason: error.reason,
              value: item
            })
          )
        } else {
          result.push(parsed.value!)
        }
      })
    }

    return errors.length > 0 ? { errors } : { value: result }
  }
}
