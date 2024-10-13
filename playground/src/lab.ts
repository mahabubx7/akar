import { a, InferSchema, InferSchemaWithConditions } from "akar"

const userSchema = a.object({
  name: a.string(),
  age: a.number().min(18).optional()
})

console.log(userSchema.parse({ name: "John", age: 0 }))

type UserType = InferSchema<typeof userSchema>
type User = InferSchemaWithConditions<typeof userSchema>

const test1: User = { name: "John" } // OK
const test2: UserType = { name: "John", age: undefined } // OK

console.log(test1, typeof test1)
console.log(test2, typeof test2)
