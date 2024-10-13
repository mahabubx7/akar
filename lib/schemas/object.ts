import { AkarBase } from "./base"

export class AkarObject<T extends object> extends AkarBase<T> {
  constructor(private shape: { [K in keyof T]: AkarBase<T[K]> }) {
    super()
  }

  parse(input: any): {
    data?: T
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    const result: any = {}

    if (typeof input !== "object" || input === null) {
      errors.push({
        field: "",
        reason: "Invalid type, expected object",
        value: input
      })
    } else {
      for (const key in this.shape) {
        const parsed = this.shape[key].parse(input[key])
        if (parsed.errors) {
          parsed.errors.forEach((error) =>
            errors.push({ field: key, reason: error.reason, value: input[key] })
          )
        } else {
          result[key] = parsed.value
        }
      }
    }

    return errors.length > 0 ? { errors } : { data: result }
  }
}
