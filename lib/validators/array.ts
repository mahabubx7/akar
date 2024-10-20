/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Array validators
 * @since 1.0.0-beta
 * @license MIT
 */

// Array: check if the value is an array
export const isArray = <T>(input: unknown): input is T[] => Array.isArray(input)

// Empty: check if the array is empty
// export const isEmpty = <T>(input: T[]): boolean => input.length === 0

// // Not Empty: check if the array is not empty
// export const isNotEmpty = <T>(input: T[]): boolean => input.length > 0

// Length: check if the array length is equal to the expected length
export const length = <T>(input: T[], expected: number): boolean =>
  input.length === expected

// Min Length: check if the array length is greater than or equal to the min length
export const minLength = <T>(input: T[], min: number): boolean =>
  input.length >= min

// Max Length: check if the array length is less than or equal to the max length
export const maxLength = <T>(input: T[], max: number): boolean =>
  input.length <= max

// Range Length: check if the array length is within the range
export const rangeLength = <T>(input: T[], min: number, max: number): boolean =>
  input.length >= min && input.length <= max

// Unique: check if the array has unique values
export const isUnique = <T>(input: T[]): boolean =>
  input.length === new Set(input).size
