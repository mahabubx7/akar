import { BaseSchema, ValidationResult } from "../types"
import { stringChecker } from "../validators"

// STRING (base)
export class AString implements BaseSchema<string> {
  // private isOptional: boolean = false
  private minLength?: number
  private maxLength?: number
  private isEmail: boolean = false
  private isPassword: boolean = false
  private isPhone: boolean = false
  private isCountry: boolean = false
  private isPostalCode: boolean = false
  private isPassport: boolean = false
  private isCurrency: boolean = false
  private isDate: boolean = false
  private isTime: boolean = false
  private isDateTime: boolean = false
  private isDay: boolean = false
  private isMonth: boolean = false
  private isYear: boolean = false
  private isAlphaNumeric: boolean = false
  private isWeekDay: boolean = false
  private isUuid: boolean = false
  private isURL: boolean = false
  private isHex: boolean = false
  private isAlphanumeric: boolean = false
  private isAlpha: boolean = false
  private isLowercase: boolean = false
  private isUppercase: boolean = false
  private isBase64: boolean = false
  private isJSON: boolean = false
  private isAscii: boolean = false
  private isCuid: boolean = false
  private isFQDN: boolean = false
  private isMD5: boolean = false
  private isSHA1: boolean = false
  private isSHA256: boolean = false
  private isJWT: boolean = false
  private isMACAddress: boolean = false
  private isIP: boolean = false
  private isIPRange: boolean = false
  private isISBN: boolean = false
  private isISSN: boolean = false
  private isMobilePhone: boolean = false
  private isCreditCard: boolean = false
  private isDataURI: boolean = false
  private isEAN: boolean = false
  private isISIN: boolean = false
  private isIMEI: boolean = false
  private isMagnetURI: boolean = false
  private isSemVer: boolean = false
  private isSlug: boolean = false
  private isNumeric: boolean = false
  private isGUID: boolean = false

  // Chainable methods
  min(length: number): this {
    this.minLength = length
    return this
  }

  max(length: number): this {
    this.maxLength = length
    return this
  }

  email(): this {
    this.isEmail = true
    return this
  }

  optional(): AStringOptional {
    return new AStringOptional(this)
  }

  // Validate string
  parse(input: unknown): ValidationResult<string | undefined> {
    if (!stringChecker.isString(input)) {
      return { success: false, error: "Invalid string" }
    }

    if (this.minLength && !stringChecker.minLength(input, this.minLength)) {
      return {
        success: false,
        error: `String must be at least ${this.minLength} characters long`
      }
    }

    if (this.maxLength && !stringChecker.maxLength(input, this.maxLength)) {
      return {
        success: false,
        error: `String must be at most ${this.maxLength} characters long`
      }
    }

    if (this.isEmail && !stringChecker.isEmail(input)) {
      return { success: false, error: "Invalid email format" }
    }

    return { success: true, data: input }
  }
}

// Optional version of AString
class AStringOptional implements BaseSchema<string | undefined> {
  private isOptional: boolean

  constructor(private schema: AString) {
    this.isOptional = true
  }

  parse(input: unknown): ValidationResult<string | undefined> {
    if (this.isOptional && (input === undefined || input === null)) {
      return { success: true, data: undefined }
    }

    return this.schema.parse(input)
  }
}
