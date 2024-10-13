/**
 * -----------------------------------------------------------------------
 * Akar (c) 2024
 * @version 1.0.0-beta.1
 * @license MIT
 * -----------------------------------------------------------------------
 */

import {
  AkarArray,
  AkarBase,
  AkarBoolean,
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
  array: <T>(schema: AkarBase<T>) => new AkarArray<T>(schema)
}

export type * from "./helpers/infer"
export type * from "./types"

// default export
const Akar = { ...a }
export default Akar
