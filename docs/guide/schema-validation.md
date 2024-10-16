# Schema & Validation

## Summary

We need to define schema for the validation process and each schema will contain its own rules, types-casts and other utilities.

## Table of Contents

- [Hello Schema](#hello-schema)
- [Array](#array)
- [Object](#object)
- [String](#string)
- [Number](#number)
- [Enum](#enum)
- [Boolean](#boolean)
- [Conclusion](#conclusion)

## Hello Schema

::: code-group

```TypeScript
import { a } from "akarjs"

// create user-schema
const user = a.object({
  name: a.string().min(4),
  email: a.string().email(),
  password: a
    .string()
    .password({ min: 6 })
})

// parse your input with validation
// returns value (if success) or errors (if caught error)
console.log(user.parse({
  name: "Mahabub",
  email: "mahabub@akar.js.org",
  password: "123456"
})) // <-- success

console.log(user.parse({
  name: "Mahabub",
  // email: "mahabub@akar.js.org",
  password: "12345"
})) // <-- errors
```

```JavaScript
import { a } from "akarjs"

// create user-schema
const user = a.object({
  name: a.string().min(4),
  email: a.string().email(),
  password: a
    .string()
    .password({ min: 6 })
})

// parse your input with validation
// returns value (if success) or errors (if caught error)
console.log(user.parse({
  name: "Mahabub",
  email: "mahabub@akar.js.org",
  password: "123456"
})) // <-- success

console.log(user.parse({
  name: "Mahabub",
  // email: "mahabub@akar.js.org",
  password: "12345"
})) // <-- errors
```

:::

**Output**

```sh [TypeScript]
{
  value: {
    name: "Mahabub",
    email: "mahabub@akar.js.org",
    password: "123456"
  }
}

{
  errors: [
    {
      reason: "Email is required.",
      field: "email",
      value: undefined,
    },
    {
      reason: "Minimum length is 6 characters long.",
      field: "password",
      value: "12345",
    },
  ]
}
```

## Array

::: code-group

```TypeScript
// an array of strings, minimum 2 items are requried
const hobbies = a.array(a.string()).min(2) // <-- array schema is always nested

console.log(hobbies.parse(['traveling', 'gardening'])) // <-- success

console.log(hobbies.parse(['traveling'])) // <-- errors
```

```JavaScript
// an array of strings, minimum 2 items are requried
const hobbies = a.array(a.string()).min(2) // <-- array schema is always nested

console.log(hobbies.parse(['traveling', 'gardening'])) // <-- success

console.log(hobbies.parse(['traveling'])) // <-- errors
```

:::

**Output**

```sh
{
  value: ['traveling', 'gardening'],
}

{
  errors: [
    {
      reason: "Minimum lenght is 2.",
      value: ["traveling"]
      field: "array",
    }
  ]
}
```

## Object

::: code-group

```TypeScript
// object specials
const createTodo = a.object({
  title: a.string().min(3),
  completed: a.boolean().optional()
})

// tests
console.log(createTodo.parse({
  title: "Make a coffee!",
  completed: true,
})) // <-- filling all of the properties

console.log(createTodo.parse({
  title: "10 push-ups!",
})) // <-- ignoring optional properties
```

```JavaScript
// object specials
const createTodo = a.object({
  title: a.string().min(3),
  completed: a.boolean().optional()
})

// tests
console.log(createTodo.parse({
  title: "Make a coffee!",
  completed: true,
})) // <-- filling all of the properties

console.log(createTodo.parse({
  title: "10 push-ups!",
})) // <-- ignoring optional properties
```

:::

**Output**

```sh
{
  value: {
    title: "Make a coffee!",
    completed: true
  }
}

{
  value: {
    title: "10 push-ups!",
    completed: undefined
  }
}
```

## String

::: info

We already have a big list of validators for strings. Such as, `email`, `phone`, `otp`, `uuid`, `MongoDbId`, etc. But, still we are looking forward add more as requested.

:::

::: code-group

```TypeScript
const ip = a.string().ip() // <-- expects an IP address only

console.log(ip.parse('127.0.0.1')) // <-- success

console.log(ip.parse('https://akar.js.org')) // <-- errors
```

```JavaScript
const ip = a.string().ip() // <-- expects an IP address only

console.log(ip.parse('127.0.0.1')) // <-- success

console.log(ip.parse('https://akar.js.org')) // <-- errors
```

:::

**Output**

```sh
{
  value: "127.0.0.1"
}

{
  errors: [
    {
      reason: "Invalid IP address.",
      value: "https://akar.js.org",
      field: "string"
    }
  ]
}
```

## Number

::: code-group

```TypeScript
const port = a.number().port() // <-- expects a valid port number

console.log(port.parse(3000)) // <-- success
console.log(port.parse(80)) // <-- success
console.log(port.parse(65999)) // <-- errors
```

```JavaScript
const port = a.number().port() // <-- expects a valid port number

console.log(port.parse(3000)) // <-- success
console.log(port.parse(80)) // <-- success
console.log(port.parse(65999)) // <-- errors
```

:::

**Output**

```sh
{
  value: 3000
}

{
  value: 80
}

{
  errors: [
    {
      reason: "Invalid port number.",
      value: 65999,
      field: "number"
    }
  ]
}
```

## Enum

::: warning

If you face any issue or problem using this in JavaScript, please let us know. You can also create an issue for that.

:::

::: code-group

```TypeScript
// enum schema can have default value
const status = a.enum(['pending', 'approved'] as const).default('pending')

console.log(status.parse()) // <-- success
console.log(status.parse('pending')) // <-- success
console.log(status.parse('approved')) // <-- success
console.log(status.parse('wrong')) // <-- errors
```

```JavaScript
// enum schema can have default value
const status = a.enum(['pending', 'approved']).default('pending')

console.log(status.parse()) // <-- success
console.log(status.parse('pending')) // <-- success
console.log(status.parse('approved')) // <-- success
console.log(status.parse('wrong')) // <-- errors
```

:::

**Output**

```sh
{
  value: 'pending'
}

{
  value: 'pending'
}

{
  value: 'approved'
}

{
  errors: [
    {
      reason: "Invalid enum value.",
      value: 'wrong',
      field: "enum"
    }
  ]
}
```

## Boolean

::: code-group

```TypeScript
const isAgreed = a.boolean().exact(true) // <-- exact enforces boolean to be exactly TRUE or FALSE

console.log(isAgreed.parse(true)) // <-- success
console.log(isAgreed.parse(false)) // <-- errors
```

```JavaScript
const isAgreed = a.boolean().exact(true) // <-- exact enforces boolean to be exactly TRUE or FALSE

console.log(isAgreed.parse(true)) // <-- success
console.log(isAgreed.parse(false)) // <-- errors
```

:::

**Output**

```sh
{
  value: true
}

{
  errors: [
    {
      reason: "Invalid boolean value.",
      value: false,
      field: "boolean"
    }
  ]
}
```

## Conclusion

To get more details, please follow the API References. Here we have just tutorials about the schema defination and its usages.
