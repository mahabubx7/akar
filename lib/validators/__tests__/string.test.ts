import { describe, expect, test } from "vitest"
import * as str from "../string"

describe("String validators", () => {
  test("isString", () => {
    expect(str.isString("")).toBe(true)
    expect(str.isString({})).toBe(false)
    expect(str.isString([])).toBe(false)
    expect(str.isString(1)).toBe(false)
    expect(str.isString(null)).toBe(false)
    expect(str.isString(undefined)).toBe(false)
  })

  test("isEmpty", () => {
    expect(str.isEmpty("")).toBe(true)
    expect(str.isEmpty("a")).toBe(false)
    expect(str.isEmpty("ab")).toBe(false)
  })

  test("length", () => {
    expect(str.length("", 0)).toBe(true)
    expect(str.length("a", 1)).toBe(true)
    expect(str.length("ab", 2)).toBe(true)
    expect(str.length("ab", 1)).toBe(false)
    expect(str.length("a", 2)).toBe(false)
  })

  test("minLength", () => {
    expect(str.minLength("", 0)).toBe(true)
    expect(str.minLength("a", 1)).toBe(true)
    expect(str.minLength("ab", 2)).toBe(true)
    expect(str.minLength("ab", 1)).toBe(true)
    expect(str.minLength("a", 2)).toBe(false)
  })

  test("maxLength", () => {
    expect(str.maxLength("", 0)).toBe(true)
    expect(str.maxLength("a", 1)).toBe(true)
    expect(str.maxLength("ab", 2)).toBe(true)
    expect(str.maxLength("ab", 1)).toBe(false)
    expect(str.maxLength("a", 0)).toBe(false)
  })

  test("pattern", () => {
    expect(str.pattern("a", /^a$/)).toBe(true)
    expect(str.pattern("a", /^b$/)).toBe(false)
    expect(str.pattern("a", "/^b$/")).toBe(false)
  })

  test("isEmail", () => {
    expect(str.isEmail("")).toBe(false)
    expect(str.isEmail("a")).toBe(false)
    expect(str.isEmail("a@")).toBe(false)
    expect(str.isEmail("a@a")).toBe(false)
    expect(str.isEmail("a@a.")).toBe(false)
    expect(str.isEmail("a@a.c")).toBe(false)
    expect(str.isEmail("a@a.c")).toBe(false)
    expect(str.isEmail("aaa@aa.c")).toBe(false)
    expect(str.isEmail("abc@abc.cd")).toBe(true)
  })

  test("isURL", () => {
    expect(str.isURL("")).toBe(false)
    expect(str.isURL("a")).toBe(false)
    expect(str.isURL("a.")).toBe(false)
    expect(str.isURL("a.c")).toBe(false)
    expect(str.isURL("a.c")).toBe(false)
    expect(str.isURL("http://a.c")).toBe(true)
    expect(str.isURL("https://a.c")).toBe(true)
  })

  test("isUUID", () => {
    expect(str.isUUID("")).toBe(false)
    expect(str.isUUID("a")).toBe(false)
    expect(str.isUUID("a-")).toBe(false)
    expect(str.isUUID("a-b")).toBe(false)
    expect(str.isUUID("a-b-c")).toBe(false)
    expect(str.isUUID("a-b-c")).toBe(false)
    expect(str.isUUID("550-e2-d4-a7-446")).toBe(false)
    expect(str.isUUID("550e8400-e29b-41d4-a716-446655440000")).toBe(true)
  })

  test("isAlpha", () => {
    expect(str.isAlpha("")).toBe(false)
    expect(str.isAlpha("a")).toBe(true)
    expect(str.isAlpha("a1")).toBe(false)
    expect(str.isAlpha("a ")).toBe(false)
    expect(str.isAlpha("a-")).toBe(false)
    expect(str.isAlpha("a_")).toBe(false)
  })

  test("isAlphanumeric", () => {
    expect(str.isAlphanumeric("")).toBe(false)
    expect(str.isAlphanumeric("a")).toBe(true)
    expect(str.isAlphanumeric("a1")).toBe(true)
    expect(str.isAlphanumeric("a ")).toBe(false)
    expect(str.isAlphanumeric("a-")).toBe(false)
    expect(str.isAlphanumeric("a_")).toBe(false)
  })

  test("isNumeric", () => {
    expect(str.isNumeric("")).toBe(false)
    expect(str.isNumeric("1")).toBe(true)
    expect(str.isNumeric("1.1")).toBe(false)
    expect(str.isNumeric("1.1.1")).toBe(false)
    expect(str.isNumeric("1 ")).toBe(false)
    expect(str.isNumeric("1-")).toBe(false)
    expect(str.isNumeric("1_")).toBe(false)
  })

  test("isLowercase", () => {
    expect(str.isLowercase("")).toBe(false)
    expect(str.isLowercase("a")).toBe(true)
    expect(str.isLowercase("A")).toBe(false)
    expect(str.isLowercase("a1")).toBe(false)
    expect(str.isLowercase("a ")).toBe(false)
    expect(str.isLowercase("a-")).toBe(false)
    expect(str.isLowercase("a_")).toBe(false)
  })

  test("isUppercase", () => {
    expect(str.isUppercase("")).toBe(false)
    expect(str.isUppercase("a")).toBe(false)
    expect(str.isUppercase("A")).toBe(true)
    expect(str.isUppercase("A1")).toBe(false)
    expect(str.isUppercase("A ")).toBe(false)
    expect(str.isUppercase("A-")).toBe(false)
    expect(str.isUppercase("A_")).toBe(false)
  })

  test("isHex", () => {
    expect(str.isHex("")).toBe(false)
    expect(str.isHex("a")).toBe(true)
    expect(str.isHex("A")).toBe(true)
    expect(str.isHex("1")).toBe(true)
    expect(str.isHex("1a")).toBe(true)
    expect(str.isHex("1A")).toBe(true)
    expect(str.isHex("1A ")).toBe(false)
    expect(str.isHex("1A-")).toBe(false)
    expect(str.isHex("1A_")).toBe(false)
  })

  test("isBase64", () => {
    expect(str.isBase64("")).toBe(false)
    expect(str.isBase64("a")).toBe(true)
    expect(str.isBase64("aA")).toBe(true)
    expect(str.isBase64("aA1")).toBe(true)
    expect(str.isBase64("aA1=")).toBe(true)
    expect(str.isBase64("aA1==")).toBe(true)
  })

  test("isDataURI", () => {
    expect(str.isDataURI("")).toBe(false)
    expect(str.isDataURI("data:")).toBe(false)
    expect(str.isDataURI("data:text/plain;base64")).toBe(false)
    expect(str.isDataURI("data:text/plain;base64,")).toBe(false)
    expect(str.isDataURI("data:text/plain;base64,a")).toBe(true)
  })

  test("isMimeType", () => {
    expect(str.isMIME("")).toBe(false)
    expect(str.isMIME("text/plain")).toBe(true)
    expect(str.isMIME("text/plain; charset=utf-8")).toBe(true)
    expect(str.isMIME("text/plain;charset=utf-8")).toBe(true)
    expect(str.isMIME("text/plain; charset=utf-8;")).toBe(false)
    expect(str.isMIME("text/plain;charset=utf-8;")).toBe(false)
  })

  test("isJSON", () => {
    expect(str.isJSON("")).toBe(false)
    expect(str.isJSON("{}")).toBe(true)
    expect(str.isJSON("[]")).toBe(true)
    expect(str.isJSON("{a:1}")).toBe(false)
    expect(str.isJSON("[a]")).toBe(false)
  })

  test("isJWT", () => {
    expect(str.isJWT("")).toBe(false)
    expect(str.isJWT("a")).toBe(false)
    expect(str.isJWT("a.b")).toBe(false)
    expect(str.isJWT("a.b.c")).toBe(true)

    const sampleJwtOne = "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp.jKfQH0X2zZQ.mJy1Q"
    const sampleJwtTwo =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    expect(str.isJWT(sampleJwtOne)).toBe(true)
    expect(str.isJWT(sampleJwtTwo)).toBe(true)
  })

  test("isCreditCard", () => {
    expect(str.isCreditCard("")).toBe(false)
    expect(str.isCreditCard("a")).toBe(false)
    expect(str.isCreditCard("411")).toBe(false)
    expect(str.isCreditCard("4111111111111111")).toBe(true)
    expect(str.isCreditCard("378282246310005")).toBe(true)
    expect(str.isCreditCard("1234567890123456")).toBe(false)
  })

  test("isPhone", () => {
    expect(str.isPhone("", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("a", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("123", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("1234567890", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("123-456-7890", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("123.456.7890", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("123 456 7890", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("12345678901234567890", { phoneCode: ["+880"] })).toBe(
      false
    )
    expect(str.isPhone("+1234567890", { phoneCode: ["+880"] })).toBe(false)
    expect(str.isPhone("+8801234567890", { phoneCode: ["+880"] })).toBe(true)
    expect(str.isPhone("8801234567890", { phoneCode: ["+880"] })).toBe(true)
  })

  test("isPassword", () => {
    expect(str.isPassword("", { min: 8 })).toBe(false)
    expect(str.isPassword("a", { min: 8 })).toBe(false)
    expect(str.isPassword("12345678", { min: 8 })).toBe(true)
    expect(str.isPassword("1234567", { min: 8 })).toBe(false)
    expect(
      str.isPassword("12345678", {
        special: true,
        number: true,
        minNumber: 1,
        minSpecial: 1
      })
    ).toBe(false)

    expect(
      str.isPassword("12345678!", {
        special: true,
        number: true,
        minNumber: 1,
        minSpecial: 1
      })
    ).toBe(true)

    expect(
      str.isPassword("12345678!", {
        minNumber: 2,
        minSpecial: 2
      })
    ).toBe(false)

    expect(
      str.isPassword("12345678!!", {
        minNumber: 2,
        minLowercase: 2,
        minUppercase: 1,
        minSpecial: 2
      })
    ).toBe(false)

    expect(
      str.isPassword("M0!ahabub1!", {
        minNumber: 2,
        minLowercase: 2,
        minUppercase: 1,
        minSpecial: 2
      })
    ).toBe(true)
  })

  test("isIP", () => {
    expect(str.isIP("")).toBe(false)
    expect(str.isIP("a")).toBe(false)
    expect(str.isIP("123")).toBe(false)
    expect(str.isIP("123.123")).toBe(false)
    expect(str.isIP("123.123.123")).toBe(false)
    expect(str.isIP("123.124.124.121")).toBe(true)
    expect(str.isIP("104.103.256.201")).toBe(false)
  })

  test("Date group", () => {
    expect(str.isDate("")).toBe(false)
    expect(str.isDate("a")).toBe(false)
    expect(str.isDate("2020-12-12")).toBe(true)
    expect(str.isDate("2020-12-32")).toBe(false)
    expect(str.isDate("2020/12/12")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12Z")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)
    expect(str.isDate("2020-12-12T12:12:12+00:00")).toBe(true)

    expect(str.isTime("")).toBe(false)
    expect(str.isTime("a")).toBe(false)
    expect(str.isTime("12:12")).toBe(true)
    expect(str.isTime("12:12:12")).toBe(true)
    expect(str.isTime("12:12:12Z")).toBe(false)
    expect(str.isTime("12:12:12+00:00")).toBe(false)

    expect(str.isUTC("")).toBe(false)
    expect(str.isUTC("a")).toBe(false)
    expect(str.isUTC("12:12")).toBe(false)
    expect(str.isUTC("12:12:12")).toBe(false)
    expect(str.isUTC("12:12:12Z")).toBe(false)
    expect(str.isUTC("2020-12-12T12:12:12Z")).toBe(true)
    expect(str.isUTC("2020-12-12T12:12:12+00:00")).toBe(false)

    expect(str.isYear("")).toBe(false)
    expect(str.isYear("a")).toBe(false)
    expect(str.isYear("2020")).toBe(true)
    expect(str.isYear("2020-12-12")).toBe(false)

    expect(str.isMonth("")).toBe(false)
    expect(str.isMonth("a")).toBe(false)
    expect(str.isMonth("12")).toBe(true)
    expect(str.isMonth("14")).toBe(false)
    expect(str.isMonth("2020-12-12")).toBe(false)

    expect(str.isDay("")).toBe(false)
    expect(str.isDay("a")).toBe(false)
    expect(str.isDay("12")).toBe(true)
    expect(str.isDay("32")).toBe(false)

    expect(str.isHour("")).toBe(false)
    expect(str.isHour("a")).toBe(false)
    expect(str.isHour("12")).toBe(true)
    expect(str.isHour("2020-12-12")).toBe(false)
    expect(str.isHour("25")).toBe(false)

    expect(str.isWeekday("")).toBe(false)
    expect(str.isWeekday("a")).toBe(false)
    expect(str.isWeekday("1")).toBe(false)
    expect(str.isWeekday("8")).toBe(false)
    expect(str.isWeekday("0")).toBe(false)
    expect(str.isWeekday("7")).toBe(false)
    expect(str.isWeekday("mon")).toBe(true)
    expect(str.isWeekday("tue")).toBe(true)
    expect(str.isWeekday("wed")).toBe(true)
  })

  test("isSlug", () => {
    expect(str.isSlug("")).toBe(false)
    expect(str.isSlug("a")).toBe(false)
    expect(str.isSlug("a-b")).toBe(false)
    expect(str.isSlug("a-b-c")).toBe(false)
    expect(str.isSlug("a-b-c-")).toBe(false)
    expect(str.isSlug("a-b-c-1")).toBe(false)
    expect(str.isSlug("a-b-c-1-")).toBe(false)
    expect(str.isSlug("ab-bc-cd")).toBe(true)
    expect(str.isSlug("ab-bc-cd-1")).toBe(true)
    expect(str.isSlug("ab-bc-cd-12")).toBe(true)
  })

  test("isSemVer", () => {
    expect(str.isSemver("")).toBe(false)
    expect(str.isSemver("a")).toBe(false)
    expect(str.isSemver("1")).toBe(false)
    expect(str.isSemver("1.1")).toBe(false)
    expect(str.isSemver("1.1.1")).toBe(true)
    expect(str.isSemver("1.1.1-beta")).toBe(true)
  })

  test("isPassport", () => {
    expect(str.isPassport("")).toBe(false)
    expect(str.isPassport("a")).toBe(false)
    expect(str.isPassport("123")).toBe(false)
    expect(str.isPassport("12345678")).toBe(false)
    expect(str.isPassport("123456789")).toBe(false)
    expect(str.isPassport("12345678a")).toBe(false)
    expect(str.isPassport("12345678!")).toBe(false)
    expect(str.isPassport("12345678!a")).toBe(false)
    expect(str.isPassport("AB0940784")).toBe(true)
  })
})
