/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * String validators
 * @since 1.0.0-beta
 * @license MIT
 */

import {
  CountryNameKey,
  CountryNames,
  CountryPhoneCode,
  getCountryByName,
  getCountryByNameValue
} from "../helpers"

// String: check the type
export const isString = (input: unknown): input is string =>
  typeof input === "string"

// Empty: check if the string is empty
export const isEmpty = (input: string): boolean => input.length === 0

// Length: check if the string length is equal to the specified length
export const length = (input: string, len: number): boolean =>
  input.length === len

// Min: check if the string length is greater than or equal to the min length
export const minLength = (input: string, min: number): boolean =>
  input.length >= min

// Max: check if the string length is less than or equal to the max length
export const maxLength = (input: string, max: number): boolean =>
  input.length <= max

// Range: check if the string length is within the range
export const range = (input: string, min: number, max: number): boolean =>
  input.length >= min && input.length <= max

// Pattern: check if the string matches the specified pattern
export const pattern = (input: string, pattern: string | RegExp): boolean =>
  new RegExp(pattern).test(input)

// Alphanumeric: check if the string contains only alphanumeric characters
export const isAlphanumeric = (input: string): boolean =>
  /^[a-z0-9]+$/i.test(input)

// Alpha: check if the string contains only alphabetic characters
export const isAlpha = (input: string): boolean => /^[a-z]+$/i.test(input)

// Numeric: check if the string contains only numeric characters
export const isNumeric = (input: string): boolean => /^[0-9]+$/.test(input)

// Lowercase: check if the string contains only lowercase characters
export const isLowercase = (input: string): boolean => /^[a-z]+$/.test(input)

// Uppercase: check if the string contains only uppercase characters
export const isUppercase = (input: string): boolean => /^[A-Z]+$/.test(input)

// Whitespace: check if the string contains only whitespace characters
export const isWhitespace = (input: string): boolean => /^\s+$/.test(input)

// Email: check if the string is a valid email address
export const isEmail = (input: string): boolean =>
  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(input)

// URL: check if the string is a valid URL
export const isURL = (input: string): boolean =>
  /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(input)

// IP: check if the string is a valid IP address
export const isIP = (input: string): boolean =>
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    input
  )

// MAC: check if the string is a valid MAC address
export const isMAC = (input: string): boolean =>
  /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(input)

// UUID: check if the string is a valid UUID
export const isUUID = (input: string): boolean =>
  /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(input)

// GUID: check if the string is a valid GUID
export const isGUID = (input: string): boolean =>
  /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(input)

// CUID: check if the string is a valid CUID
export const isCUID = (input: string): boolean =>
  /^[cdefghijklmnopqrstuvwxyz0123456789]{25}$/.test(input)

// MongoID: check if the string is a valid MongoDB ID
export const isMongoID = (input: string): boolean =>
  /^[a-f0-9]{24}$/i.test(input)

// ISBN: check if the string is a valid ISBN
export const isISBN = (input: string): boolean =>
  /^(?:\d{9}[\dx]|\d{13})$/i.test(input)

// ISSN: check if the string is a valid ISSN
export const isISSN = (input: string): boolean =>
  /^\d{4}-\d{3}[\dx]$/i.test(input)

// Credit Card: check if the string is a valid credit card number
export const isCreditCard = (input: string): boolean =>
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
    input
  )

// Phone: check if the string is a valid phone number
export const isPhone = (
  input: string,
  options: {
    country?: CountryNames[]
    phoneCode?: CountryPhoneCode[]
    countryNameKey?: CountryNameKey[]
  }
): boolean => {
  let flag = false

  if (options.phoneCode) {
    // Check if the phone code is valid
    options.phoneCode.forEach((code) => {
      if (input.startsWith(code) || input.startsWith(code.slice(1))) flag = true
    })

    return flag
  } else if (options.countryNameKey) {
    // Check if the country name key is valid
    const countries = options.countryNameKey.map((c) => getCountryByName(c))

    const phCodes = countries
      .map((c) => c?.phoneCode)
      .filter((p) => p !== undefined)
    if (!phCodes.length || phCodes.length < 1)
      throw new Error("Invalid phone code!")

    phCodes.forEach((code) => {
      if (input.startsWith(code) || input.startsWith(code.slice(1))) flag = true
    })

    if (!flag) throw new Error("Invalid phone-number format!")
  } else if (options.country) {
    // Check if the country is valid
    const countries = options.country.map((c) => getCountryByNameValue(c))
    if (countries.includes(undefined)) {
      throw new Error("Invalid country name!")
    }

    const phCodes = countries
      .map((c) => c?.phoneCode)
      .filter((p) => p !== undefined)
    if (!phCodes.length || phCodes.length < 1)
      throw new Error("Invalid phone code!")

    phCodes.forEach((code) => {
      if (input.startsWith(code) || input.startsWith(code.slice(1))) flag = true
    })

    if (!flag) throw new Error("Invalid phone-number format!")
  }

  return flag
}

// Country: check if the string is a valid country name
export const isCountry = (input: string): boolean => {
  try {
    const _c = getCountryByNameValue(input as CountryNames)
    return _c !== undefined || _c !== null
  } catch (_err) {
    return false
  }
}

// Postal Code: check if the string is a valid postal code
export const isPostalCode = (input: string): boolean =>
  /^[a-z0-9\s-]+$/i.test(input)

// Passport: check if the string is a valid passport number
export const isPassport = (input: string): boolean =>
  /^[A-Z]{2}[a-zA-Z0-9]{3,18}$/.test(input)

// Currency: check if the string is a valid currency code
export const isCurrency = (input: string): boolean => /^[a-z]{3}$/i.test(input)

// BIC: check if the string is a valid BIC code
export const isBIC = (input: string): boolean =>
  /^[a-z]{6}[a-z0-9]{2}([a-z0-9]{3})?$/.test(input)

// IBAN: check if the string is a valid IBAN code
export const isIBAN = (input: string): boolean =>
  /^[a-z]{2}\d{2}[a-z0-9]{4}\d{7}([a-z0-9]{0,3})?$/.test(input)

// Hex: check if the string is a valid hexadecimal
export const isHex = (input: string): boolean => /^[0-9A-F]+$/i.test(input)

// RGB: check if the string is a valid RGB color
export const isRGB = (input: string): boolean =>
  /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(input)

// HSL: check if the string is a valid HSL color
export const isHSL = (input: string): boolean =>
  /^hsl\(\d{1,3},\d{1,3}%,\d{1,3}%\)$/i.test(input)

// Password: check if the string is a valid password
export const isPassword = (
  input: string,
  options: {
    uppercase?: boolean
    minUppercase?: number
    lowercase?: boolean
    minLowercase?: number
    number?: boolean
    minNumber?: number
    special?: boolean
    minSpecial?: number
    min?: number
  }
): boolean => {
  if (options.min && input.length < options.min) return false
  if (
    options.minUppercase &&
    (input.match(/[A-Z]/g)?.length ?? 0) < options.minUppercase
  )
    return false
  if (
    options.minLowercase &&
    (input.match(/[a-z]/g)?.length ?? 0) < options.minLowercase
  )
    return false
  if (
    options.minNumber &&
    (input.match(/[0-9]/g)?.length ?? 0) < options.minNumber
  )
    return false
  if (
    options.minSpecial &&
    (input.match(/[^a-zA-Z0-9]/g)?.length ?? 0) < options.minSpecial
  )
    return false

  // Check if the password contains uppercase characters
  if (options.uppercase) {
    if (!/[A-Z]/.test(input)) return false
  }

  // Check if the password contains lowercase characters
  if (options.lowercase) {
    if (!/[a-z]/.test(input)) return false
  }

  // Check if the password contains numeric characters
  if (options.number) {
    if (!/[0-9]/.test(input)) return false
  }

  return true
}

// OTP: check if the string is a valid OTP
export const isOTP = (
  input: string,
  options: {
    length: number
    type: "numeric" | "alphanumeric"
    pattern?: string
  } = { length: 6, type: "numeric" }
): boolean => {
  if (options.pattern) {
    return new RegExp(options.pattern).test(input)
  }

  if (options.type === "numeric") {
    return /^[0-9]+$/.test(input) && input.length === options.length
  }

  return /^[a-z0-9]+$/i.test(input) && input.length === options.length
}

// Base64: check if the string is a valid base64
export const isBase64 = (input: string): boolean =>
  /^[a-z0-9+/]+={0,2}$/i.test(input)

// DataURI: check if the string is a valid data URI
export const isDataURI = (input: string): boolean =>
  /^data:[a-z0-9-]+\/[a-z0-9-]+;base64,[a-z0-9+/]+=*$/i.test(input)

// MIME: check if the string is a valid MIME type
export const isMIME = (input: string): boolean =>
  /^[a-z0-9-]+\/[a-z0-9-]+(;\s?charset=[a-z0-9-]+)?$/i.test(input) &&
  !input.endsWith(";")

// JSON: check if the string is a valid JSON
export const isJSON = (input: string): boolean => {
  try {
    JSON.parse(input)
    return true
  } catch {
    return false
  }
}

// JWT: check if the string is a valid JWT
export const isJWT = (input: string): boolean => {
  const parts = input.split(".")
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/
  return parts.length === 3 && jwtRegex.test(input)
}

// MD5: check if the string is a valid MD5 hash
export const isMD5 = (input: string): boolean => /^[a-f0-9]{32}$/.test(input)

// SHA1: check if the string is a valid SHA1 hash
export const isSHA1 = (input: string): boolean => /^[a-f0-9]{40}$/.test(input)

// SHA256: check if the string is a valid SHA256 hash
export const isSHA256 = (input: string): boolean => /^[a-f0-9]{64}$/.test(input)

// SHA512: check if the string is a valid SHA512 hash
export const isSHA512 = (input: string): boolean =>
  /^[a-f0-9]{128}$/.test(input)

// ASCII: check if the string contains only ASCII characters
// export const isASCII = (input: string): boolean => /^[\x00-\x7F]+$/.test(input)

// Multibyte: check if the string contains multibyte characters
export const isMultibyte = (input: string): boolean =>
  /[^\x00-\x7F]/.test(input)

// Fullwidth: check if the string contains fullwidth characters
export const isFullwidth = (input: string): boolean =>
  /[^\u0000-\u00FF]/.test(input)

// Halfwidth: check if the string contains halfwidth characters
export const isHalfwidth = (input: string): boolean =>
  /^[\u0000-\u00FF]+$/.test(input)

// Variable: check if the string is a valid variable name
export const isVariable = (input: string): boolean =>
  /^[a-z_][a-z0-9_]*$/i.test(input)

// Slug: check if the string is a valid slug
export const isSlug = (input: string): boolean =>
  /^[a-z0-9]{2,}(?:-[a-z0-9]{1,})*$/i.test(input)

// Semver: check if the string is a valid semantic version
export const isSemver = (input: string): boolean =>
  /^\d+\.\d+\.\d+(-[a-z0-9-]+(\.[a-z0-9-]+)*)?$/i.test(input)

// Base32: check if the string is a valid base32
export const isBase32 = (input: string): boolean => /^[A-Z2-7]+=*$/i.test(input)

// Base58: check if the string is a valid base58
export const isBase58 = (input: string): boolean =>
  /^[1-9A-HJ-NP-Za-km-z]+$/i.test(input)

// Base62: check if the string is a valid base62
export const isBase62 = (input: string): boolean =>
  /^[0-9A-Za-z]+$/i.test(input)

// Base64URL: check if the string is a valid base64 URL
export const isBase64URL = (input: string): boolean =>
  /^[a-zA-Z0-9_-]+$/i.test(input)

// Date: check if the string is a valid date
export const isDate = (input: string): boolean => !isNaN(Date.parse(input))

// Time: check if the string is a valid time
export const isTime = (input: string): boolean =>
  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/.test(input)

// UTC: check if the string is a valid UTC date-time
export const isUTC = (input: string): boolean =>
  !isNaN(Date.parse(input)) && input.endsWith("Z")

// Year: check if the string is a valid year
export const isYear = (input: string): boolean => /^\d{4}$/.test(input)

// Month: check if the string is a valid month
export const isMonth = (input: string): boolean =>
  /^(0[1-9]|1[0-2])$/.test(input)

// Day: check if the string is a valid day
export const isDay = (input: string): boolean =>
  /^(0[1-9]|[12][0-9]|3[01])$/.test(input)

// Hour: check if the string is a valid hour
export const isHour = (input: string): boolean =>
  /^(0[0-9]|1[0-9]|2[0-3])$/.test(input)

// Minute or Seconds: check if the string is a valid minute
export const isMinuteOrSeconds = (input: string): boolean =>
  /^[0-5][0-9]$/.test(input)

// Weekday: check if the string is a valid weekday
export const isWeekday = (input: string): boolean =>
  /^(mon|tue|wed|thu|fri|sat|sun)$/i.test(input.toLowerCase())

// Base: check if the string is a valid base
export const isBase = (input: string, base: number): boolean =>
  new RegExp(`^[0-${base - 1}]+$`).test(input)

// Match: check if the string matches the specified string
export const isMatch = (input: string, target: string): boolean =>
  input === target

// Contains: check if the string contains the specified string
export const contains = (input: string, target: string): boolean =>
  input.includes(target)
