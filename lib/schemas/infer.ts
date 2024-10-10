// import { BaseSchema } from "../types"

// type InferType<T extends BaseSchema<any>> = any

// export class AInfer<U> {
//   constructor(schema: BaseSchema<U>) {}

//   infer<T extends BaseSchema<U>>(schema: T): InferType<T> {
//     return {} as any
//   }
// }

/////////////////////////////////////////////////////////////////
///////////////////// Claude Suggest ////////////////////////////
/////////////////////////////////////////////////////////////////

// Basic types
// type Infer<T> = T extends StringSchema ? string
//   : T extends NumberSchema ? number
//   : T extends ObjectSchema<infer U> ? { [K in keyof U]: Infer<U[K]> }
//   : never;

// interface Schema<T> {
//   _type: T;
// }

// // String Schema
// class StringSchema implements Schema<string> {
//   _type!: string;
//   _min?: number;

//   min(length: number): this {
//     this._min = length;
//     return this;
//   }
// }

// // Number Schema
// class NumberSchema implements Schema<number> {
//   _type!: number;
//   _integer?: boolean;

//   integer(): this {
//     this._integer = true;
//     return this;
//   }
// }

// // Object Schema
// class ObjectSchema<T> implements Schema<T> {
//   _type!: T;
//   constructor(private shape: { [K in keyof T]: Schema<any> }) {}
// }

// // Main validator class
// class SchemaValidator {
//   string(): StringSchema {
//     return new StringSchema();
//   }

//   number(): NumberSchema {
//     return new NumberSchema();
//   }

//   object<T extends Record<string, Schema<any>>>(shape: T): ObjectSchema<T> {
//     return new ObjectSchema(shape);
//   }

//   infer<T extends Schema<any>>(schema: T): Infer<T> {
//     return {} as Infer<T>; // This is a type-level operation, no runtime implementation needed
//   }
// }

// // Create an instance of the validator
// const a = new SchemaValidator();

// // Usage
// const userSchema = a.object({
//   name: a.string().min(4),
//   age: a.number().integer(),
// });

// type User = typeof a.infer<typeof userSchema>;

// // These should all be valid without errors
// const user1: User = { name: 'Mahabub', age: 25 };
// const user2: User = { name: 'Mahabub' };
// const user3: User = { name: 'Mahabub', age: 25 };

// // This would cause a type error
// // const invalidUser: User = { name: 'Bob' }; // Error: 'name' is too short
