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
