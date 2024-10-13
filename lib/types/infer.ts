/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Infer types from schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { AkarBase, AkarEnum, AkarObject, AkarOptionalSchema } from "../schemas" // Your schema classes

// Utility to make a type optional if it's marked as optional in the schema
export type OptionalIf<T, C extends AkarBase<any>> = IsOptional<C> extends true
  ? T | undefined
  : T

// Infers the schema's type, handling optional cases
export type InferSchema<T extends AkarBase<any>> = T extends AkarObject<infer U>
  ? {
      [K in keyof U]: ExtractInnerType<U[K]>
    }
  : T extends AkarEnum<infer E>
  ? E
  : T

// // Utility to check if a schema is optional
type IsOptional<T> = T extends AkarOptionalSchema<any> ? true : false

// // Utility to extract the inner type from different schema classes
type ExtractInnerType<C extends AkarBase<any>> = C extends AkarOptionalSchema<
  infer U
>
  ? U extends AkarBase<any>
    ? ExtractInnerType<U>
    : U
  : C extends AkarEnum<infer E>
  ? E
  : C extends AkarObject<infer U>
  ? { [K in keyof U]: ExtractInnerType<U[K]> }
  : C

export type OptionalKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never
}[keyof T]

export type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>

export type InferSchemaWithConditions<T extends AkarBase<any>> =
  T extends AkarObject<infer U>
    ? { [K in RequiredKeys<U>]: U[K] } & { [K in OptionalKeys<U>]?: U[K] }
    : never
