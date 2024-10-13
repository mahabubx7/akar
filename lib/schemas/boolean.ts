import { AkarBase } from "./base"

export class AkarBoolean extends AkarBase<boolean> {
  private _value: boolean = false
  private _default: boolean = false

  default(value: boolean): this {
    this._value = value
    this._default = value
    return this
  }

  parse(input: any): {
    value?: boolean
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []
    if (typeof input !== "boolean") {
      errors.push({
        field: "",
        reason: "Invalid type, expected boolean",
        value: input
      })
    } else {
      this._value = input
    }
    return errors.length > 0 ? { errors } : { value: input }
  }
}
