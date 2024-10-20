# Object

The `Object` class is the base class for all objects in the game. It provides a number of methods and properties that are common to all objects.

## Table of Contents

- [Schema & Validators](#schema-and-validators)
- [EqualTo](#equal-to)
- [DeepEqualTo](#not-equal-to)
- [ShallowEqualTo](#shallow-equal-to)
- [JsonObject](#json-object)
- [Conclusion](#conclusion)

## Schema and Validators

## `.equalTo()`

This validator is used to check if the object is equal to the provided object or not. If the object is not equal to the provided object, it will return an error.

::: code-group

```typescript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .equalTo({
    name: "John Doe",
    age: 30
  })

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: 25
}) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .equalTo({
    name: "John Doe",
    age: 30
  })

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: 25
}) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ name: 'John Doe', age: 30 }

{
  errors: [
    {
      reason: 'Object must be equal to "{ name: \'John Doe\', age: 30 }"',
      value: { name: 'Jane Doe', age: 25 }
    }
  ]
}
```

## `.deepEqualTo()`

This validator is used to check if the object is deeply equal to the provided object or not. If the object is not deeply equal to the provided object, it will return an error.

::: code-group

```typescript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .deepEqualTo({
    name: "John Doe",
    age: 30
  })

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: 25
}) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .deepEqualTo({
    name: "John Doe",
    age: 30
  })

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: 25
}) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ name: 'John Doe', age: 30 }

{
  errors: [
    {
      reason: 'Object must be deeply equal!',
      value: { name: 'Jane Doe', age: 25 }
    }
  ]
}
```

## `.shallowEqualTo()`

This validator is used to check if the object is shallowly equal to the provided object or not. If the object is not shallowly equal to the provided object, it will return an error.

::: code-group

```typescript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .shallowEqualTo({
    name: "John Doe",
    age: 30
  })

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: 25
}) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .shallowEqualTo({
    name: "John Doe",
    age: 30
  })

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: 25
}) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ name: 'John Doe', age: 30 }

  {
    errors: [
      {
        reason: 'Object must be shallowly equal!',
        value: { name: 'Jane Doe', age: 25 }
      }
    ]
  }
```

## `.jsonObject()`

This validator is used to check if the object is a valid JSON object or not. If the object is not a valid JSON object, it will return an error.

::: code-group

```typescript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .jsonObject()

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: "25"
}) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an object
const user = a
  .object({
    name: a.string(),
    age: a.number()
  })
  .jsonObject()

// validate & parse the object
const resultOne = user.parse({
  name: "John Doe",
  age: 30
}) // valid

const resultTow = user.parse({
  name: "Jane Doe",
  age: "25"
}) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ name: 'John Doe', age: 30 }

{
  errors: [
    {
      reason: 'Object must be a valid JSON object!',
      value: { name: 'Jane Doe', age: '25' }
    }
  ]
}
```

## Conclusion

We covered the latest `Object` schema references so far. We will keep updating the documentation as we add more features to the `Object` schema. If you have any questions or suggestions, please feel free to raise an issue.
