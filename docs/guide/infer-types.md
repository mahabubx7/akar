# Infer Types

## Summary

While working in TypeScript, we often need to use types for various usages. Our library gives the opportunity to generate types from your defined schemas.

## Table of Contents

- [Infer Schema](#infer-schema)
- [Infer Schema With Conditions](#infer-schema-with-conditions)
- [Why Conditional Types?](#why-conditional-types)
- [Conclusion](#conclusion)

## Infer Schema

```TypeScript
import { a, InferSchema } from 'akarjs'

// Sample | for example, an object-schema
const createTodo = a.object({
  title: a.string().min(3),
  completed: a.boolean().optional(),
})

type CreateTodo = InferSchema<typeof createTodo>

/*
/// Infers as:

type CreateTodo {
  title: string;
  completed: boolean | undefined;
}
*/

```

## Infer Schema With Conditions

```TypeScript
import { a, InferSchemaWithConditions } from 'akarjs'

// conditional for types
const updateUser = a.object({
  name: a.string().min(3),
  age: a.number().optional(),
  role: a.enum(['customer', 'vendor'] as const).optional(),
})

type UpdateUser = InferSchemaWithConditions<typeof updateUser>

/*
/// Infers as:

type UpdateUser {
  name: string;
} & {
  age?: number;
} & {
  role?: 'customer' | 'vendor';
}
*/

```

## Why Conditional Types?

We have noticed that when you infer a type and try to use it, you might face a problem. For example,

```TypeScript
const updateUser = a.object({
  name: a.string().min(3),
  age: a.number().optional(),
  role: a.enum(['customer', 'vendor'] as const).optional(),
})

type UpdateUserT1 = InferSchema<typeof updateUser>
type UpdateUserT2 = InferSchemaWithConditions<typeof updateUser>

const user1: UpdateUserT1 = {
  name: "Mahabub",
  age: undefined, // property must be declared, otherwise it might make problems
  role: undefined, // property must be declared, otherwise it might make problems
};

const user2: UpdateUserT2 = {
  name: "Mahabub",
  // no need to add optional properties
  // Enjoy 👍
};

```

## Conclusion

In conclusion, leveraging the power of TypeScript with our library allows for robust type inference directly from your schemas. This not only ensures type safety but also enhances code maintainability and readability. By using conditional types, you can further refine your type definitions, making your code more flexible and easier to work with. We hope this guide helps you understand how to effectively use inferred types in your projects.
