import { AkarBase } from "./base"

export class AkarString extends AkarBase<string> {
  private minLength: number | null = null

  min(length: number): this {
    this.minLength = length
    return this
  }

  parse(input: any): {
    value?: string
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    if (typeof input !== "string") {
      errors.push({
        field: "",
        reason: "Invalid type, expected string",
        value: input
      })
    } else {
      if (this.minLength !== null && input.length < this.minLength) {
        errors.push({
          field: "",
          reason: `String is too short. Minimum length is ${this.minLength}`,
          value: input
        })
      }
    }
    return errors.length > 0 ? { errors } : { value: input }
  }
}
