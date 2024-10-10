/**
 * Akar (c) 2024
 * Enum validators
 * @since 1.0.0-beta.1
 * @license MIT
 */

// Enum: check if the value is one of the enum values
export const isEnum = <T>(input: unknown, values: T[]): input is T =>
  values.includes(input as T)

// Native Enum: check if the value is one of the native enum values
export const isNativeEnum = <T extends object>(
  input: unknown,
  values: T
): input is T[keyof T] => Object.values(values).includes(input as T[keyof T])
