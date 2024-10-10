import a from "akar"

const user = a.object({
  name: a.string().min(3),
  age: a.number().port().optional()
})

// type User = InferType<typeof user>

// const user1: User = {
//   name: "John Doe",
//   age: 25
// }

const result = user.parse({
  name: "John Doe",
  age: 25
})

console.log(result, "\n") // parsed values
