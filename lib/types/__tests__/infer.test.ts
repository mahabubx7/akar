import { describe, expect, test } from "vitest"
import { AkarBase, AkarObject, AkarString } from "../../schemas"
import { InferSchema, InferSchemaWithConditions } from "../infer"

describe("Test type: InferSchema", () => {
  const object = <T extends object>(shape: {
    [K in keyof T]: AkarBase<T[K]>
  }) => new AkarObject<T>(shape)

  test("should infer schema type correctly", () => {
    const userSchema = object({
      name: new AkarString().min(1).max(10)
    })

    type UserType = InferSchema<typeof userSchema>
    const user: UserType = { name: "Mahabub" }
    expect(user).toBeDefined()
    expect(user.name).toBe("Mahabub")
    expect(typeof user).toBe("object")
    expect(typeof user.name).toBe("string")
  })

  test("should infer schema type correctly with nested object", () => {
    const userSchema = object({
      name: new AkarString().min(1).max(10),
      address: object({
        city: new AkarString().min(1).max(10)
      })
    })

    type UserType = InferSchema<typeof userSchema>
    const user: UserType = { name: "Mahabub", address: { city: "Dhaka" } }
    expect(user).toBeDefined()
    expect(user.name).toBe("Mahabub")
    expect(user.address.city).toBe("Dhaka")
    expect(typeof user).toBe("object")
    expect(typeof user.name).toBe("string")
    expect(typeof user.address).toBe("object")
    expect(typeof user.address.city).toBe("string")
  })

  test("should infer schema type correctly with optional conditions", () => {
    const userSchema = object({
      name: new AkarString().min(1).max(10),
      address: object({
        city: new AkarString().min(1).max(10)
      }).optional()
    })

    type UserType = InferSchemaWithConditions<typeof userSchema>
    const user: UserType = { name: "Mahabub" }
    expect(user).toBeDefined()
    expect(user.name).toBe("Mahabub")
    expect(typeof user).toBe("object")
    expect(typeof user.name).toBe("string")
    expect(user.address).toBeUndefined()
    expect(user.address?.city).toBeUndefined()

    const user2: UserType = { name: "Mahabub", address: { city: "Dhaka" } }
    expect(user2).toBeDefined()
    expect(user2.name).toBe("Mahabub")
    expect(user2.address!.city).toBe("Dhaka")
    expect(typeof user2).toBe("object")
    expect(typeof user2.name).toBe("string")
    expect(typeof user2.address).toBe("object")
    expect(typeof user2.address!.city).toBe("string")
  })
})
