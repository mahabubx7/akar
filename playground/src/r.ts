type ValidationRule<T> = (value: T | undefined) => boolean | string

abstract class BaseSchema<T> {
  protected isOptional: boolean = false
  abstract validate(value: T | undefined): string | true
  optional(): this {
    this.isOptional = true
    return this
  }
}

class StringSchema extends BaseSchema<string> {
  private rules: ValidationRule<string>[] = []
  private _type: "string" = "string"

  get type() {
    return this._type
  }

  minLength(length: number): this {
    this.rules.push(
      (value) =>
        value === undefined ||
        value.length >= length ||
        `Minimum length is ${length}`
    )
    return this
  }

  maxLength(length: number): this {
    this.rules.push(
      (value) =>
        value === undefined ||
        value.length <= length ||
        `Maximum length is ${length}`
    )
    return this
  }

  matches(regex: RegExp): this {
    this.rules.push(
      (value) =>
        value === undefined || regex.test(value) || `Value must match ${regex}`
    )
    return this
  }

  validate(value: string | undefined): string | true {
    if (value === undefined && this.isOptional) return true
    if (value === undefined) return "Value is required"

    for (const rule of this.rules) {
      const result = rule(value)
      if (typeof result === "string") {
        return result
      }
    }
    return true
  }
}

class NumberSchema extends BaseSchema<number> {
  private rules: ValidationRule<number>[] = []
  private _type: "number" = "number"

  get type() {
    return this._type
  }

  min(min: number): this {
    this.rules.push(
      (value) =>
        value === undefined || value >= min || `Minimum value is ${min}`
    )
    return this
  }

  max(max: number): this {
    this.rules.push(
      (value) =>
        value === undefined || value <= max || `Maximum value is ${max}`
    )
    return this
  }

  validate(value: number | undefined): string | true {
    if (value === undefined && this.isOptional) return true
    if (value === undefined) return "Value is required"

    for (const rule of this.rules) {
      const result = rule(value)
      if (typeof result === "string") {
        return result
      }
    }
    return true
  }
}

class BooleanSchema extends BaseSchema<boolean> {
  validate(value: boolean | undefined): string | true {
    if (value === undefined && this.isOptional) return true
    if (value === undefined) return "Value is required"
    return typeof value === "boolean" || "Value must be a boolean"
  }
}

class ObjectSchema<
  T extends Record<string, BaseSchema<any>>
> extends BaseSchema<{
  [K in keyof T]: T[K] extends BaseSchema<infer U> ? U : never
}> {
  private schema: T = {} as T

  private _type: T = {} as unknown as T

  get type() {
    return this._type
  }

  shape(schema: T): this {
    this.schema = schema
    return this
  }

  validate(
    value:
      | { [K in keyof T]: T[K] extends BaseSchema<infer U> ? U : never }
      | undefined
  ): string | true {
    if (value === undefined && this.isOptional) return true
    if (value === undefined) return "Value is required"

    for (const [key, schema] of Object.entries(this.schema)) {
      const result = schema.validate(value[key])
      if (typeof result === "string") {
        return `${key}: ${result}`
      }
    }
    return true
  }
}

class ArraySchema<T> extends BaseSchema<T[]> {
  private itemSchema?: BaseSchema<T>
  private rules: ValidationRule<T[]>[] = []
  private _type: T = [] as unknown as T

  get type() {
    return this._type
  }

  items(schema: BaseSchema<T>): this {
    this.itemSchema = schema
    return this
  }

  minLength(length: number): this {
    this.rules.push(
      (value) =>
        value === undefined ||
        value.length >= length ||
        `Minimum length is ${length}`
    )
    return this
  }

  maxLength(length: number): this {
    this.rules.push(
      (value) =>
        value === undefined ||
        value.length <= length ||
        `Maximum length is ${length}`
    )
    return this
  }

  validate(value: T[] | undefined): string | true {
    if (value === undefined && this.isOptional) return true
    if (value === undefined) return "Value is required"
    if (!Array.isArray(value)) return "Value must be an array"

    for (const rule of this.rules) {
      const result = rule(value)
      if (typeof result === "string") {
        return result
      }
    }

    if (this.itemSchema) {
      for (let i = 0; i < value.length; i++) {
        const result = this.itemSchema.validate(value[i])
        if (typeof result === "string") {
          return `Item at index ${i}: ${result}`
        }
      }
    }

    return true
  }
}

const string = () => new StringSchema()
const number = () => new NumberSchema()
const boolean = () => new BooleanSchema()
const object = <T extends Record<string, BaseSchema<any>>>() =>
  new ObjectSchema<T>()
const array = <T>() => new ArraySchema<T>()

// Usage
const userSchema = object().shape({
  name: string().minLength(4),
  age: number().min(18).optional(),
  hobbies: array<string>().items(string().minLength(2)).minLength(2)
})

// validate the schema
function validateTest() {
  try {
    const result = userSchema.validate({
      name: "John Doe",
      // age: 25,
      hobbies: ["Reading"]
    })
    console.log("RES: ", result)
  } catch (error) {
    console.error("Validation error:", (error as any).message)
  }
}

validateTest()
