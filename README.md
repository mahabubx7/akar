<div align="center">
  <img src="./docs/public/akar-js.png" alt="akar-js" width="360" />
</div>

**version**: 1.0.0-beta

> Docs are available now!

### Installation

**npm**

```bash
npm install akarjs
```

**yarn**

```bash
yarn add akarjs
```

**pnpm**

```bash
pnpm add akarjs
```

**bun**

```bash
bun add akarjs
```

### Example usages

Here is an example of the use cases for this library.

**User Schema**

```ts
import { a, InferSchema, InferSchemaWithConditions } from "akarjs"

const userSchema = a.object({
  name: a.string().min(4),
  age: a.number().integer().min(15).optional()
})

// now, parse it to get: ValidationResult OR ValidationErrors
console.log(userSchema.parse({ name: "Mahabub" }))
// Success: { value: { name: "Mahabub" } }

console.log(userSchema.parse({ name: "Mahabub", age: 26 }))
// Success: { value: { name: "Mahabub", age: 26 } }

console.log(userSchema.parse({ name: "Mahabub", age: 10 }))
// Error: { errors: [{ reason: "Minimum age value is >= 15", field: "age", value: 10 }] }

console.log(userSchema.parse({ age: 10 }))
// Error: { errors: [{ reason: "name is required", field: "name", value: undefiend }] }

// Infer types
type UserTypeNormal = InferSchema<typeof userSchema>
// it will get type as:
/*
type UserTypeNormal = {
  name: string;
  age: number | undefined;
}
*/

type UserTypeWithConditionals = InferSchemaWithConditions<typeof userSchema>
// it will get type as:
/*
type UserTypeWithConditionals = {
  name: string;
} & {
  age?: number;
}
*/
```

_For more, please visit our documentation website: [akar.js.org](https://mahabubx7.github.io/akarjs)_

Thanks,

~/@mahabubx7
