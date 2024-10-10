import { BaseSchema, ValidationResult } from "../types"
import { numberChecker } from "../validators"

export class ANumber implements BaseSchema<number> {
  private minValue?: number
  private maxValue?: number

  private isInteger: boolean = false
  private isFloat: boolean = false

  private isNegative: boolean = false
  private isPositive: boolean = false

  private isPort: boolean = false

  // Chainable methods
  min(min: number): this {
    this.minValue = min
    return this
  }

  max(max: number): this {
    this.maxValue = max
    return this
  }

  integer(): this {
    this.isInteger = true
    return this
  }

  float(): this {
    this.isFloat = true
    return this
  }

  signed(): this {
    this.isNegative = true
    return this
  }

  unsigned(): this {
    this.isPositive = true
    return this
  }

  port(): this {
    this.isPort = true
    return this
  }

  optional(): ANumberOptional {
    return new ANumberOptional()
  }

  parse(input: unknown): ValidationResult<number> {
    if (!numberChecker.isNumber(input)) {
      return { success: false, error: "Expected a number" }
    }

    if (this.isInteger && !numberChecker.isInteger(input)) {
      return { success: false, error: "Expected an integer" }
    }

    if (this.isFloat && !numberChecker.isFloat(input)) {
      return { success: false, error: "Expected a float" }
    }

    if (this.isNegative && !numberChecker.isNegative(input)) {
      return { success: false, error: "Expected a negative number" }
    }

    if (this.isPositive && !numberChecker.isPositive(input)) {
      return { success: false, error: "Expected a positive number" }
    }

    if (this.isPort && !numberChecker.isPort(input)) {
      return { success: false, error: "Expected a port number" }
    }

    if (this.minValue && input < this.minValue) {
      return {
        success: false,
        error: `Expected a number greater than ${this.minValue}`
      }
    }

    if (this.maxValue && input > this.maxValue) {
      return {
        success: false,
        error: `Expected a number less than ${this.maxValue}`
      }
    }

    /// RETURN THE PARSED INPUT ...
    return { success: true, data: input }
  }
}

// optional
export class ANumberOptional extends ANumber {
  private isOptional: boolean = true

  parse(input: undefined | null): ValidationResult<undefined>
  parse(input: unknown): ValidationResult<number> {
    if (this.isOptional && (input === undefined || input === null)) {
      return { success: true, data: undefined }
    }

    return super.parse(input)
  }
}
