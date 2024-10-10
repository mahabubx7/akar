import { BaseSchema, OmitFields, PickFields, ValidationResult } from "../types"

export class AObject<T extends { [key: string]: BaseSchema<any> }>
  implements BaseSchema<{ [K in keyof T]: InferType<T[K]> }>
{
  constructor(private shape: T) {}

  parse(input: unknown): ValidationResult<{ [K in keyof T]: InferType<T[K]> }> {
    if (typeof input !== "object" || input === null) {
      return { success: false, error: "Invalid object" }
    }

    const result: any = {}
    for (const key in this.shape) {
      const value = (input as any)[key]
      const schema = this.shape[key]
      const validationResult = schema.parse(value)
      if (!validationResult.success) {
        return { success: false, error: `Invalid field: ${key}` }
      }
      result[key] = validationResult.data
    }

    return { success: true, data: result }
  }

  pick<K extends keyof T>(keys: K[]): AObject<PickFields<T, K>> {
    const pickedShape = keys.reduce((acc, key) => {
      acc[key] = this.shape[key]
      return acc
    }, {} as any)
    return new AObject(pickedShape)
  }

  omit<K extends keyof T>(keys: K[]): AObject<OmitFields<T, K>> {
    const omittedShape = Object.keys(this.shape)
      .filter((key) => !keys.includes(key as K))
      .reduce((acc, key) => {
        acc[key] = this.shape[key]
        return acc
      }, {} as any)
    return new AObject(omittedShape)
  }
}

// Type Inference Utility
type InferType<T extends BaseSchema<any>> = T extends BaseSchema<infer U>
  ? U
  : never

// Optional version of AObject
export class AObjectOptional<T extends { [key: string]: BaseSchema<any> }>
  implements BaseSchema<{ [K in keyof T]: InferType<T[K]> | undefined }>
{
  constructor(private schema: AObject<T>) {}

  parse(
    input: unknown
  ): ValidationResult<{ [K in keyof T]: InferType<T[K]> | undefined }> {
    if (input === undefined) {
      return { success: true, data: undefined }
    }

    return this.schema.parse(input)
  }
}
