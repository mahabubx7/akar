// Base abstract class
abstract class Base<T> {
  abstract parse(input: any): {
    value?: T
    errors?: { field: string; reason: string; value?: any }[]
  }

  optional(): Base<T | undefined> {
    return new OptionalSchema(this)
  }
}

class OptionalSchema<T> extends Base<T | undefined> {
  constructor(private schema: Base<T>) {
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

// StringSc implementation
class StringSc extends Base<string> {
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

// NumberSc implementation
class NumberSc extends Base<number> {
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

// ObjectSc implementation
class ObjectSc<T extends object> extends Base<T> {
  constructor(private shape: { [K in keyof T]: Base<T[K]> }) {
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

// ArraySc implementation
class ArraySc<T> extends Base<T[]> {
  constructor(private schema: Base<T>) {
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

// Utility functions for schema creation
const s = {
  string: () => new StringSc(),
  number: () => new NumberSc(),
  object: <T extends object>(shape: { [K in keyof T]: Base<T[K]> }) =>
    new ObjectSc<T>(shape),
  array: <T>(schema: Base<T>) => new ArraySc<T>(schema)
}

// Type inference utility
type InferSchema<T extends Base<any>> = T extends Base<infer U> ? U : never

// Usage example
const user = s.object({
  name: s.string().min(4),
  hobbies: s.array(s.string().min(3)).optional(),
  age: s.number().min(18).optional()
})

// Parsing example
console.log(user.parse({ name: "Mahabub" })) // { value: { name: "Mahabub", age: undefined } }

console.log(user.parse({ name: "Mahabub", hobbies: ["ac"], age: 26 })) // { errors: [{ field: "hobbies[0]", reason: "String is too short. Minimum length is 3", value: ["ab"] }, { field: "age", reason: "Number is too small. Minimum value is 18", value: 17 }] }

// Type inference example
type TypeOfUser = InferSchema<typeof user> // { name: string, age?: number }

// const test1: TypeOfUser = { name: "Mahabub" } // OK
type OptionalKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never
}[keyof T]

type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>

type InferSchemaWithConditions<T extends Base<any>> = T extends ObjectSc<
  infer U
>
  ? { [K in RequiredKeys<U>]: U[K] } & { [K in OptionalKeys<U>]?: U[K] }
  : never

type IUser = InferSchemaWithConditions<typeof user>

// Usage example
const test2: IUser = { name: "Mahabub", hobbies: ["abc"], age: 19 } // OK
console.log(test2, typeof test2)
