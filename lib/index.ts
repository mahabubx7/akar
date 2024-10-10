/**
 * -----------------------------------------------------------------------
 * Akar (c) 2024
 * @version 1.0.0-beta.1
 * @license MIT
 * -----------------------------------------------------------------------
 */

import { ANumber, AObject, AOptional, AString } from "./schemas"
// import { AInfer } from "./schemas/infer"
import { BaseSchema } from "./types"

export type * from "./helpers"
export type * from "./schemas"
export type * from "./types"
export { a as akar }

const Akar = {
  string: () => new AString(),
  number: () => new ANumber(),
  object: <T extends { [key: string]: BaseSchema<any> }>(shape: T) =>
    new AObject(shape),
  optional: <T>(schema: BaseSchema<T>) => new AOptional(schema)
  // array: <T>(schema: BaseSchema<T>) => new AArray(schema)
  // infer: <T>(schema: BaseSchema<T>) => new AInfer(schema)
}

// short-naming the default export
const a = { ...Akar }
export default a
