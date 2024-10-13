/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Object validators
 * @since 1.0.0-beta
 * @license MIT
 */

// Object: check if the value is an object
export const isObject = (input: unknown): input is Record<string, unknown> =>
  typeof input === "object" && !Array.isArray(input) && input !== null

// Empty: check if the object is empty
export const isEmpty = (input: Record<string, unknown>): boolean =>
  Object.keys(input).length === 0

// Not Empty: check if the object is not empty
export const isNotEmpty = (input: Record<string, unknown>): boolean =>
  Object.keys(input).length > 0

// JSON: check if the value is a valid JSON object
export const isJSON = (input: unknown): boolean => {
  if (typeof input === "string") {
    try {
      JSON.parse(input)
      return true
    } catch (_e) {
      return false
    }
  }
  return false
}

// Type: check if the object is of the expected type
export const isType = <T>(input: Record<string, unknown>, type: T): type is T =>
  input.constructor === type

// Equal: check if the object is equal to the expected object
export const isEqual = (
  input: Record<string, unknown>,
  expected: Record<string, unknown>
): boolean => JSON.stringify(input) === JSON.stringify(expected)

// Deep Equal: check if the object is deeply equal to the expected object
export const isDeepEqual = (
  input: Record<string, unknown>,
  expected: Record<string, unknown>
): boolean => {
  try {
    return JSON.stringify(input) === JSON.stringify(expected)
  } catch {
    return false
  }
}

// Shallow Equal: check if the object is shallowly equal to the expected object
export const isShallowEqual = (
  input: Record<string, unknown>,
  expected: Record<string, unknown>
): boolean =>
  Object.keys(input).length === Object.keys(expected).length &&
  Object.keys(input).every((key) => input[key] === expected[key])

// Key: check if the object has the key
export const hasKey = (input: Record<string, unknown>, key: string): boolean =>
  key in input

// Keys: check if the object has the keys
export const hasKeys = (
  input: Record<string, unknown>,
  keys: string[]
): boolean => keys.every((key) => key in input)

// Values: check if the object has the values
export const hasValues = (
  input: Record<string, unknown>,
  values: unknown[]
): boolean => values.every((value) => Object.values(input).includes(value))

// Key Value: check if the object has the key value pair
export const hasKeyValue = (
  input: Record<string, unknown>,
  key: string,
  value: unknown
): boolean => input[key] === value

// Key Values: check if the object has the key value pairs
export const hasKeyValues = (
  input: Record<string, unknown>,
  pairs: Record<string, unknown>
): boolean =>
  Object.entries(pairs).every(([key, value]) => input[key] === value)

// Schema: check if the object matches the schema
export const matchesSchema = (
  input: Record<string, unknown>,
  schema: Record<string, unknown>
): boolean =>
  Object.entries(schema).every(([key, value]) => input[key] === value)

// Property: check if the object has the property
export const hasProperty = (
  input: Record<string, unknown>,
  property: string
): boolean => Object.prototype.hasOwnProperty.call(input, property)

// Properties: check if the object has the properties
export const hasProperties = (
  input: Record<string, unknown>,
  properties: string[]
): boolean => properties.every((property) => property in input)

// Property Value: check if the object has the property value
export const hasPropertyValue = (
  input: Record<string, unknown>,
  property: string,
  value: unknown
): boolean => input[property] === value

// Property Values: check if the object has the property values
export const hasPropertyValues = (
  input: Record<string, unknown>,
  pairs: Record<string, unknown>
): boolean =>
  Object.entries(pairs).every(([property, value]) => input[property] === value)

// Property Type: check if the object has the property type
export const hasPropertyType = (
  input: Record<string, unknown>,
  property: string,
  type: string
): boolean => typeof input[property] === type

// Property Types: check if the object has the property types
export const hasPropertyTypes = (
  input: Record<string, unknown>,
  pairs: Record<string, string>
): boolean =>
  Object.entries(pairs).every(
    ([property, type]) => typeof input[property] === type
  )
