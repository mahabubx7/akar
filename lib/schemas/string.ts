/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * String schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { CountryNameKey, CountryNames, CountryPhoneCode } from "../helpers"
import { stringChecker } from "../validators"
import { isString, PwdOptions } from "../validators/string"
import { AkarBase } from "./base"

export class AkarString extends AkarBase<string> {
  private minLength: number | null = null
  private maxLength: number | null = null
  private phoneOptions: null | {
    country?: CountryNames[]
    phoneCode?: CountryPhoneCode[]
    countryNameKey?: CountryNameKey[]
  } = null
  private isPattern: RegExp | null = null
  private isEmail: boolean = false
  private isUrl: boolean = false
  private isAlpha: boolean = false
  private isAlphaNumeric: boolean = false
  private isNumeric: boolean = false
  private isLowercase: boolean = false
  private isUppercase: boolean = false
  private isPhone: boolean = false
  private isHex: boolean = false
  private isBase64: boolean = false
  private isBase64Url: boolean = false
  private isIp: boolean = false
  private isIpv4: boolean = false
  private isIpv6: boolean = false
  private isUuid: boolean = false
  private isMongoId: boolean = false
  private isGuid: boolean = false
  private isCuid: boolean = false
  private isJson: boolean = false
  private isMac: boolean = false
  private isCreditCard: boolean = false
  private isCountry: boolean = false
  private isPostalCode: boolean = false
  private isPassport: boolean = false
  private isPassword: null | PwdOptions = null
  private isCurrency: boolean = false
  private isDataUri: boolean = false
  private isMimeType: boolean = false
  private isLatLong: boolean = false
  private isSemVer: boolean = false
  private isMD5: boolean = false
  private isSHA1: boolean = false
  private isSHA256: boolean = false
  private isSHA512: boolean = false
  private isJWT: boolean = false
  private isIBAN: boolean = false
  private isBIC: boolean = false
  private isISIN: boolean = false
  private isHexColor: boolean = false
  private isRgbColor: boolean = false
  private isHslColor: boolean = false
  private isLocale: boolean = false
  private isOtp: boolean = false
  private isSlug: boolean = false
  private isFqdn: boolean = false
  private isVariableName: boolean = false
  private isDate: boolean = false
  private isTime: boolean = false
  private isHour: boolean = false
  private isMinuteOrSeconds: boolean = false
  private isTimezone: boolean = false
  private isWeekDay: boolean = false
  private isBase: null | number = null
  private isContains: null | string = null
  private isMagnetUri: boolean = false

  min(length: number): this {
    this.minLength = length
    return this
  }

  max(length: number): this {
    this.maxLength = length
    return this
  }

  pattern(regex: RegExp): this {
    this.isPattern = regex
    return this
  }

  email(): this {
    this.isEmail = true
    return this
  }

  url(): this {
    this.isUrl = true
    return this
  }

  alpha(): this {
    this.isAlpha = true
    return this
  }

  alphaNumeric(): this {
    this.isAlphaNumeric = true
    return this
  }

  numeric(): this {
    this.isNumeric = true
    return this
  }

  lowercase(): this {
    this.isLowercase = true
    return this
  }

  uppercase(): this {
    this.isUppercase = true
    return this
  }

  phone(options: {
    country?: CountryNames[]
    phoneCode?: CountryPhoneCode[]
    countryNameKey?: CountryNameKey[]
  }): this {
    this.isPhone = true
    this.phoneOptions = options
    return this
  }

  hex(): this {
    this.isHex = true
    return this
  }

  base64(): this {
    this.isBase64 = true
    return this
  }

  base64Url(): this {
    this.isBase64Url = true
    return this
  }

  ip(): this {
    this.isIp = true
    return this
  }

  ipv4(): this {
    this.isIpv4 = true
    return this
  }

  ipv6(): this {
    this.isIpv6 = true
    return this
  }

  uuid(): this {
    this.isUuid = true
    return this
  }

  mongoId(): this {
    this.isMongoId = true
    return this
  }

  guid(): this {
    this.isGuid = true
    return this
  }

  cuid(): this {
    this.isCuid = true
    return this
  }

  json(): this {
    this.isJson = true
    return this
  }

  mac(): this {
    this.isMac = true
    return this
  }

  creditCard(): this {
    this.isCreditCard = true
    return this
  }

  country(): this {
    this.isCountry = true
    return this
  }

  postalCode(): this {
    this.isPostalCode = true
    return this
  }

  passport(): this {
    this.isPassport = true
    return this
  }

  password(options: PwdOptions): this {
    this.isPassword = options
    return this
  }

  currency(): this {
    this.isCurrency = true
    return this
  }

  dataUri(): this {
    this.isDataUri = true
    return this
  }

  mimeType(): this {
    this.isMimeType = true
    return this
  }

  latLong(): this {
    this.isLatLong = true
    return this
  }

  semVer(): this {
    this.isSemVer = true
    return this
  }

  md5(): this {
    this.isMD5 = true
    return this
  }

  sha1(): this {
    this.isSHA1 = true
    return this
  }

  sha256(): this {
    this.isSHA256 = true
    return this
  }

  sha512(): this {
    this.isSHA512 = true
    return this
  }

  jwt(): this {
    this.isJWT = true
    return this
  }

  iban(): this {
    this.isIBAN = true
    return this
  }

  bic(): this {
    this.isBIC = true
    return this
  }

  isin(): this {
    this.isISIN = true
    return this
  }

  hexColor(): this {
    this.isHexColor = true
    return this
  }

  rgbColor(): this {
    this.isRgbColor = true
    return this
  }

  hslColor(): this {
    this.isHslColor = true
    return this
  }

  locale(): this {
    this.isLocale = true
    return this
  }

  otp(): this {
    this.isOtp = true
    return this
  }

  slug(): this {
    this.isSlug = true
    return this
  }

  fqdn(): this {
    this.isFqdn = true
    return this
  }

  variableName(): this {
    this.isVariableName = true
    return this
  }

  date(): this {
    this.isDate = true
    return this
  }

  time(): this {
    this.isTime = true
    return this
  }

  hour(): this {
    this.isHour = true
    return this
  }

  minuteOrSeconds(): this {
    this.isMinuteOrSeconds = true
    return this
  }

  timezone(): this {
    this.isTimezone = true
    return this
  }

  weekDay(): this {
    this.isWeekDay = true
    return this
  }

  base(b: number): this {
    this.isBase = b
    return this
  }

  contains(str: string): this {
    this.isContains = str
    return this
  }

  magnetUri(): this {
    this.isMagnetUri = true
    return this
  }

  /*--- Parser ---*/
  parse(input: any): {
    value?: string
    errors?: { field: string; reason: string; value?: any }[]
  } {
    const errors: { field: string; reason: string; value?: any }[] = []

    if (!isString(input)) {
      errors.push({
        field: "string",
        reason: "Invalid type, expected string",
        value: input
      })
      return { errors }
    }

    if (this.minLength !== null && input.length < this.minLength) {
      errors.push({
        field: "string",
        reason: `String is too short. Minimum length is ${this.minLength}`,
        value: input
      })
    }

    if (this.maxLength !== null && input.length > this.maxLength) {
      errors.push({
        field: "string",
        reason: `String is too long. Maximum length is ${this.maxLength}`,
        value: input
      })
    }

    if (this.isPattern !== null && !this.isPattern.test(input)) {
      errors.push({
        field: "string",
        reason: "String does not match the pattern",
        value: input
      })
    }

    if (this.isEmail && !stringChecker.isEmail(input)) {
      errors.push({
        field: "string",
        reason: "Invalid email",
        value: input
      })
    }

    if (this.isUrl && !stringChecker.isURL(input)) {
      errors.push({
        field: "string",
        reason: "Invalid URL",
        value: input
      })
    }

    if (this.isAlpha && !stringChecker.isAlpha(input)) {
      errors.push({
        field: "string",
        reason: "String must contain only letters",
        value: input
      })
    }

    if (this.isAlphaNumeric && !stringChecker.isAlphanumeric(input)) {
      errors.push({
        field: "string",
        reason: "String must contain only letters and numbers",
        value: input
      })
    }

    if (this.isNumeric && !stringChecker.isNumeric(input)) {
      errors.push({
        field: "string",
        reason: "String must contain only numbers",
        value: input
      })
    }

    if (this.isLowercase && !stringChecker.isLowercase(input)) {
      errors.push({
        field: "string",
        reason: "String must contain only lowercase letters",
        value: input
      })
    }

    if (this.isUppercase && !stringChecker.isUppercase(input)) {
      errors.push({
        field: "string",
        reason: "String must contain only uppercase letters",
        value: input
      })
    }

    if (this.isPhone && !stringChecker.isPhone(input, this.phoneOptions!)) {
      errors.push({
        field: "string",
        reason: "Invalid phone number",
        value: input
      })
    }

    if (this.isHex && !stringChecker.isHex(input)) {
      errors.push({
        field: "string",
        reason: "Invalid hex",
        value: input
      })
    }

    if (this.isBase64 && !stringChecker.isBase64(input)) {
      errors.push({
        field: "string",
        reason: "Invalid base64",
        value: input
      })
    }

    if (this.isBase64Url && !stringChecker.isBase64URL(input)) {
      errors.push({
        field: "string",
        reason: "Invalid base64 URL",
        value: input
      })
    }

    if (
      this.isIp &&
      (!stringChecker.isIP(input) || !stringChecker.isIPv6(input))
    ) {
      errors.push({
        field: "string",
        reason: "Invalid IP",
        value: input
      })
    }

    if (this.isIpv4 && !stringChecker.isIP(input)) {
      errors.push({
        field: "string",
        reason: "Invalid IPv4"
      })
    }

    if (this.isIpv6 && !stringChecker.isIPv6(input)) {
      errors.push({
        field: "string",
        reason: "Invalid IPv6"
      })
    }

    if (this.isUuid && !stringChecker.isUUID(input)) {
      errors.push({
        field: "string",
        reason: "Invalid UUID"
      })
    }

    if (this.isMongoId && !stringChecker.isMongoID(input)) {
      errors.push({
        field: "string",
        reason: "Invalid Mongo ID"
      })
    }

    if (this.isGuid && !stringChecker.isGUID(input)) {
      errors.push({
        field: "string",
        reason: "Invalid GUID"
      })
    }

    if (this.isCuid && !stringChecker.isCUID(input)) {
      errors.push({
        field: "string",
        reason: "Invalid CUID"
      })
    }

    if (this.isJson && !stringChecker.isJSON(input)) {
      errors.push({
        field: "string",
        reason: "Invalid JSON"
      })
    }

    if (this.isMac && !stringChecker.isMAC(input)) {
      errors.push({
        field: "string",
        reason: "Invalid MAC address"
      })
    }

    if (this.isCreditCard && !stringChecker.isCreditCard(input)) {
      errors.push({
        field: "string",
        reason: "Invalid credit card number"
      })
    }

    if (this.isCountry && !stringChecker.isCountry(input)) {
      errors.push({
        field: "string",
        reason: "Invalid country"
      })
    }

    if (this.isPostalCode && !stringChecker.isPostalCode(input)) {
      errors.push({
        field: "string",
        reason: "Invalid postal code"
      })
    }

    if (this.isPassport && !stringChecker.isPassport(input)) {
      errors.push({
        field: "string",
        reason: "Invalid passport number"
      })
    }

    if (
      this.isPassword !== null &&
      !stringChecker.isPassword(input, this.isPassword)
    ) {
      errors.push({
        field: "string",
        reason: "Invalid password"
      })
    }

    if (this.isCurrency && !stringChecker.isCurrency(input)) {
      errors.push({
        field: "string",
        reason: "Invalid currency"
      })
    }

    if (this.isDataUri && !stringChecker.isDataURI(input)) {
      errors.push({
        field: "string",
        reason: "Invalid data URI"
      })
    }

    if (this.isMimeType && !stringChecker.isMIME(input)) {
      errors.push({
        field: "string",
        reason: "Invalid MIME type"
      })
    }

    if (this.isLatLong && !stringChecker.isLatLng(input)) {
      errors.push({
        field: "string",
        reason: "Invalid latitude or longitude"
      })
    }

    if (this.isSemVer && !stringChecker.isSemVer(input)) {
      errors.push({
        field: "string",
        reason: "Invalid semantic version"
      })
    }

    if (this.isMD5 && !stringChecker.isMD5(input)) {
      errors.push({
        field: "string",
        reason: "Invalid MD5 hash"
      })
    }

    if (this.isSHA1 && !stringChecker.isSHA1(input)) {
      errors.push({
        field: "string",
        reason: "Invalid SHA1 hash"
      })
    }

    if (this.isSHA256 && !stringChecker.isSHA256(input)) {
      errors.push({
        field: "string",
        reason: "Invalid SHA256 hash"
      })
    }

    if (this.isSHA512 && !stringChecker.isSHA512(input)) {
      errors.push({
        field: "string",
        reason: "Invalid SHA512 hash"
      })
    }

    if (this.isJWT && !stringChecker.isJWT(input)) {
      errors.push({
        field: "string",
        reason: "Invalid JWT",
        value: input
      })
    }

    if (this.isIBAN && !stringChecker.isIBAN(input)) {
      errors.push({
        field: "string",
        reason: "Invalid IBAN"
      })
    }

    if (this.isBIC && !stringChecker.isBIC(input)) {
      errors.push({
        field: "string",
        reason: "Invalid BIC"
      })
    }

    if (this.isISIN && !stringChecker.isISIN(input)) {
      errors.push({
        field: "string",
        reason: "Invalid ISIN"
      })
    }

    if (this.isHexColor && !stringChecker.isHex(input)) {
      errors.push({
        field: "string",
        reason: "Invalid hex color"
      })
    }

    if (this.isRgbColor && !stringChecker.isRGB(input)) {
      errors.push({
        field: "string",
        reason: "Invalid RGB color"
      })
    }

    if (this.isHslColor && !stringChecker.isHSL(input)) {
      errors.push({
        field: "string",
        reason: "Invalid HSL color"
      })
    }

    if (this.isLocale && !stringChecker.isLocale(input)) {
      errors.push({
        field: "string",
        reason: "Invalid locale"
      })
    }

    if (this.isOtp && !stringChecker.isOTP(input)) {
      errors.push({
        field: "string",
        reason: "Invalid OTP"
      })
    }

    if (this.isSlug && !stringChecker.isSlug(input)) {
      errors.push({
        field: "string",
        reason: "Invalid slug"
      })
    }

    if (this.isFqdn && !stringChecker.isFQDN(input)) {
      errors.push({
        field: "string",
        reason: "Invalid FQDN"
      })
    }

    if (this.isVariableName && !stringChecker.isVariable(input)) {
      errors.push({
        field: "string",
        reason: "Invalid variable name"
      })
    }

    if (this.isDate && !stringChecker.isDate(input)) {
      errors.push({
        field: "string",
        reason: "Invalid date"
      })
    }

    if (this.isTime && !stringChecker.isTime(input)) {
      errors.push({
        field: "string",
        reason: "Invalid time"
      })
    }

    if (this.isHour && !stringChecker.isHour(input)) {
      errors.push({
        field: "string",
        reason: "Invalid hour"
      })
    }

    if (this.isMinuteOrSeconds && !stringChecker.isMinuteOrSeconds(input)) {
      errors.push({
        field: "string",
        reason: "Invalid minute or seconds"
      })
    }

    if (this.isTimezone && !stringChecker.isTimezone(input)) {
      errors.push({
        field: "string",
        reason: "Invalid timezone"
      })
    }

    if (this.isWeekDay && !stringChecker.isWeekday(input)) {
      errors.push({
        field: "string",
        reason: "Invalid week day"
      })
    }

    if (this.isBase && !stringChecker.isBase(input, this.isBase)) {
      errors.push({
        field: "string",
        reason: "Invalid base"
      })
    }

    if (this.isContains && !stringChecker.contains(input, this.isContains)) {
      errors.push({
        field: "string",
        reason: "Invalid contains"
      })
    }

    if (this.isMagnetUri && !stringChecker.isMagnet(input)) {
      errors.push({
        field: "string",
        reason: "Invalid magnet URI"
      })
    }

    return errors.length > 0 ? { errors } : { value: input }
  }
}
