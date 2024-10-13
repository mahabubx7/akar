import { AkarBase } from "./base"

export class AkarNumber extends AkarBase<number> {
  private minValue: number | null = null

  min(value: number): this {
    this.minValue = value
    return this
  }

  parse(input: any): {
    value?: number
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    // check if undefined
    if (input === undefined) {
      errors.push({
        field: "",
        reason: "Value is required",
        value: input
      })
      return { errors }
    }

    if (typeof input !== "number") {
      errors.push({
        field: "",
        reason: "Invalid type, expected number",
        value: input
      })
    } else {
      if (this.minValue !== null && input < this.minValue) {
        errors.push({
          field: "",
          reason: `Number is too small. Minimum value is ${this.minValue}`,
          value: input
        })
      }
    }
    return errors.length > 0 ? { errors } : { value: input }
  }
}
