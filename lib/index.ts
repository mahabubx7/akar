/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Main module entry point
 * @since 1.0.0-beta
 * @license MIT
 */

import {
  AkarArray,
  AkarBase,
  AkarBoolean,
  AkarEnum,
  AkarNumber,
  AkarObject,
  AkarString
} from "./schemas"

export const a = {
  string: () => new AkarString(),
  number: () => new AkarNumber(),
  boolean: () => new AkarBoolean(),
  object: <T extends object>(shape: { [K in keyof T]: AkarBase<T[K]> }) =>
    new AkarObject<T>(shape),
  array: <T>(schema: AkarBase<T>) => new AkarArray<T>(schema),
  enum: <T extends readonly string[]>(values: T) => new AkarEnum<T>(values)
}

export type * from "./types"

// Default export
const Akar = { ...a }
export default Akar
