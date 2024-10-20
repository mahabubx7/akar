# Array

## Summary

Our array schema is always dependent on others. Becasue, array is a collection of other data-types. You can find all available references here.

## Table of Contents

- [Schema & Validators](#schema-and-validators)
- [unique](#unique)
- [min](#min)
- [max](#max)
- [range](#range)
- [objects](#objects)
- [enums](#enums)
- [Conclusion](#conclusion)

## Schema and Validators

## `.unique()`

This validator is used to check if the array has unique values or not. If the array has duplicate values, it will return an error.

::: warning

Please note that, this validator will only work for primitive values. If you have an array of objects, it will not work.

:::

::: code-group

```TypeScript
// define a schema of an array of unique numbers
const listOfUniqueNumbers = a.array(a.number()).unique()

// validate & parse the array
const resultOne = listOfUniqueNumbers.parse([1, 2, 3, 4, 5]) // valid
const resultTow = listOfUniqueNumbers.parse([1, 2, 3, 4, 5, 1]) // invalid

console.log(resultOne, resultTow)
```

```JavaScript
// define a schema of an array of unique numbers
const listOfUniqueNumbers = a.array(a.number()).unique()

// validate & parse the array
const resultOne = listOfUniqueNumbers.parse([1, 2, 3, 4, 5]) // valid
const resultTow = listOfUniqueNumbers.parse([1, 2, 3, 4, 5, 1]) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [TypeScript]
{
  valid: true,
  value: [1, 2, 3, 4, 5]
}

{
  errors: [
    {
      reason: "Array has duplicate values",
      value: [1, 2, 3, 4, 5, 1]
    }
  ]
}
```

```bash [JavaScript]
{
  valid: true,
  value: [1, 2, 3, 4, 5]
}

{
  errors: [
    {
      reason: "Array has duplicate values",
      value: [1, 2, 3, 4, 5, 1]
    }
  ]
}
```

:::

## `.min()`

This validator is used to check if the array has a minimum number of elements or not. If the array has fewer elements than the specified number, it will return an error.

::: code-group

```TypeScript
// define a schema of an array of numbers with a minimum of 5 elements
const listOfNumbers = a.array(a.number()).min(5)

// validate & parse the array
const resultOne = listOfNumbers.parse([1, 2, 3, 4, 5]) // invalid
const resultTow = listOfNumbers.parse([1, 2, 3, 4, 5, 6]) // valid

console.log(resultOne, resultTow)
```

```JavaScript
// define a schema of an array of numbers with a minimum of 5 elements
const listOfNumbers = a.array(a.number()).min(5)

// validate & parse the array
const resultOne = listOfNumbers.parse([1, 2, 3, 4, 5]) // invalid
const resultTow = listOfNumbers.parse([1, 2, 3, 4, 5, 6]) // valid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [TypeScript]
{
  errors: [
    {
      reason: "Array has fewer elements than the minimum",
      value: [1, 2, 3, 4, 5]
    }
  ]
}

{
  valid: true,
  value: [1, 2, 3, 4, 5, 6]
}
```

```bash [JavaScript]
{
  errors: [
    {
      reason: "Array has fewer elements than the minimum",
      value: [1, 2, 3, 4, 5]
    }
  ]
}

{
  valid: true,
  value: [1, 2, 3, 4, 5, 6]
}
```

:::

## `.max()`

This validator is used to check if the array has a maximum number of elements or not. If the array has more elements than the specified number, it will return an error.

::: code-group

```TypeScript
// define a schema of an array of numbers with a maximum of 5 elements
const listOfNumbers = a.array(a.number()).max(5)

// validate & parse the array
const resultOne = listOfNumbers.parse([1, 2, 3, 4, 5]) // valid
const resultTow = listOfNumbers.parse([1, 2, 3, 4, 5, 6]) // invalid

console.log(resultOne, resultTow)
```

```JavaScript
// define a schema of an array of numbers with a maximum of 5 elements
const listOfNumbers = a.array(a.number()).max(5)

// validate & parse the array
const resultOne = listOfNumbers.parse([1, 2, 3, 4, 5]) // valid
const resultTow = listOfNumbers.parse([1, 2, 3, 4, 5, 6]) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [TypeScript]
{
  valid: true,
  value: [1, 2, 3, 4, 5]
}

{
  errors: [
    {
      reason: "Array has more elements than the maximum",
      value: [1, 2, 3, 4, 5, 6]
    }
  ]
}
```

```bash [JavaScript]
{
  valid: true,
  value: [1, 2, 3, 4, 5]
}

{
  errors: [
    {
      reason: "Array has more elements than the maximum",
      value: [1, 2, 3, 4, 5, 6]
    }
  ]
}
```

:::

## `.range()`

This validator is used to check if the array has a range of elements or not. If the array has fewer or more elements than the specified range, it will return an error.

::: code-group

```TypeScript
// define a schema of an array of numbers with a range of 3 to 5 elements
const listOfNumbers = a.array(a.number()).range(3, 5)

// validate & parse the array
const resultOne = listOfNumbers.parse([1, 2, 3]) // invalid
const resultTow = listOfNumbers.parse([1, 2, 3, 4, 5]) // valid

console.log(resultOne, resultTow)
```

```JavaScript
// define a schema of an array of numbers with a range of 3 to 5 elements
const listOfNumbers = a.array(a.number()).range(3, 5)

// validate & parse the array
const resultOne = listOfNumbers.parse([1, 2, 3]) // invalid
const resultTow = listOfNumbers.parse([1, 2, 3, 4, 5]) // valid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [TypeScript]
{
  errors: [
    {
      reason: "Array has fewer elements than the minimum",
      value: [1, 2, 3]
    }
  ]
}

{
  valid: true,
  value: [1, 2, 3, 4, 5]
}
```

```bash [JavaScript]
{
  errors: [
    {
      reason: "Array has fewer elements than the minimum",
      value: [1, 2, 3]
    }
  ]
}

{
  valid: true,
  value: [1, 2, 3, 4, 5]
}
```

:::

## Objects

This validator is used to check if the array has a specific object schema or not. If the array has an object that does not match the specified schema, it will return an error.

::: code-group

```TypeScript
// define a schema of an array of objects
const listOfObjects = a.array(a.object({
  name: a.string(),
  age: a.number()
}))

// validate & parse the array
const resultOne = listOfObjects.parse([
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: 23 }
]) // valid

const resultTow = listOfObjects.parse([
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: '23' }
]) // invalid

console.log(resultOne, resultTow)
```

```JavaScript
// define a schema of an array of objects
const listOfObjects = a.array(a.object({
  name: a.string(),
  age: a.number()
}))

// validate & parse the array
const resultOne = listOfObjects.parse([
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: 23 }
]) // valid

const resultTow = listOfObjects.parse([
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: '23' }
]) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [TypeScript]
{
  valid: true,
  value: [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 23 }
  ]
}

{
  errors: [
    {
      reason: "Invalid value for age",
      value: [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: '23' }
      ]
    }
  ]
}
```

```bash [JavaScript]
{
  valid: true,
  value: [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 23 }
  ]
}

{
  errors: [
    {
      reason: "Invalid value for age",
      value: [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: '23' }
      ]
    }
  ]
}
```

::: tip

You can also use the `min`, `max`, `range` validators with this object based schema here.

:::

## Enums

This validator is used to check if the array has specific values or not. If the array has a value that is not in the specified list, it will return an error.

::: info

Enums are like experimental feature for now. It may not work as expected. We are working on it to make it better. If you find any issue, please raise an issue [here](https://github.com/mahabubx7/akar/issues).

:::

::: code-group

```TypeScript
// define a schema of an array of numbers with specific values
const listOfStatus = a.array(a.enum(['active', 'inactive'] as const))

// validate & parse the array
const resultOne = listOfStatus.parse(['active', 'inactive']) // valid
const resultTow = listOfStatus.parse(['active', 'inactive', 'pending']) // invalid

console.log(resultOne, resultTow)
```

```JavaScript
// define a schema of an array of numbers with specific values
const listOfStatus = a.array(a.enum(['active', 'inactive']))

// validate & parse the array
const resultOne = listOfStatus.parse(['active', 'inactive']) // valid
const resultTow = listOfStatus.parse(['active', 'inactive', 'pending']) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [TypeScript]
{
  valid: true,
  value: ['active', 'inactive']
}

{
  errors: [
    {
      reason: "Invalid value",
      value: ['active', 'inactive', 'pending']
    }
  ]
}
```

```bash [JavaScript]
{
  valid: true,
  value: ['active', 'inactive']
}

{
  errors: [
    {
      reason: "Invalid value",
      value: ['active', 'inactive', 'pending']
    }
  ]
}
```

:::

## Conclusion

This is the end of the array schema. You can raise an issue [here](https://github.com/mahabubx7/akar/issues) if you find any problem. We will try to fix it as soon as possible.
