import { AkarBase, AkarObject } from "../schemas"

export type InferSchema<T extends AkarBase<any>> = T extends AkarBase<infer U>
  ? U
  : never

export type OptionalKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never
}[keyof T]

export type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>

export type InferSchemaWithConditions<T extends AkarBase<any>> =
  T extends AkarObject<infer U>
    ? { [K in RequiredKeys<U>]: U[K] } & { [K in OptionalKeys<U>]?: U[K] }
    : never
