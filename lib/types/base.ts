// export type InferSchema<T extends Record<string, Schema<any>>> = {
//   [K in keyof T]: T[K] extends Schema<infer U> ? U : never
// }

// export type InferSchema<T> = T extends ObjectSchema<infer Shape>
//   ? { [K in keyof Shape]: InferSchema<Shape[K]> }
//   : T extends Schema<infer U>
//   ? U
//   : T extends string
//   ? string
//   : T extends number
//   ? number
//   : T extends Array<infer U>
//   ? Array<InferSchema<U>>
//   : T extends object
//   ? { [K in keyof T]: InferSchema<T[K]> }
//   : never
