import { ValidationResult } from "./result"

export interface BaseSchema<T> {
  parse(input: unknown): ValidationResult<T>
}

// export type InferType<T extends BaseSchema<any>> = T extends BaseSchema<infer U>
//   ? U
//   : never

// export type InferTypeOptional<T extends BaseSchema<any>> = T extends BaseSchema<
//   infer U
// >
//   ? U | undefined
//   : never

// export const infer = () => {}
