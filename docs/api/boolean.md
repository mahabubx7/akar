# Boolean

## Summary

Boolean is a data type that can have one of two values: `true` or `false`.

## Table of Contents

- [Schema & Validators](#schema--validators)
  - [default](#default)
  - [exact](#exact)
- [Conclusion](#conclusion)

## Schema & Validators

### default

By default, the boolean schema does not have any validators. It only checks if the value is a boolean.

::: code-group

```typescript
// define a schema for boolean
const booleanSchema = a.boolean()

// validate & parse the boolean
const resultOne = booleanSchema.parse(true) // valid
const resultTow = booleanSchema.parse(false) // valid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for boolean
const booleanSchema = a.boolean()

// validate & parse the boolean
const resultOne = booleanSchema.parse(true) // valid
const resultTow = booleanSchema.parse(false) // valid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: true }

{ value: false }
```

### exact `.exact(value: boolean)`

The `exact` validator checks if the value is exactly equal to the provided value.

::: code-group

```typescript
// define a schema for boolean with exact validator
const booleanSchema = a.boolean().exact(true)

// validate & parse the boolean
const resultOne = booleanSchema.parse(true) // valid
const resultTow = booleanSchema.parse(false) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for boolean with exact validator
const booleanSchema = a.boolean().exact(true)

// validate & parse the boolean
const resultOne = booleanSchema.parse(true) // valid
const resultTow = booleanSchema.parse(false) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: true }

{
  errors: [
    {
      reason: 'Value must be true',
      value: false
    }
  ]
}
```

## Conclusion

In this chapter, we learned about the Boolean data type. We learned that it can have one of two values: `true` or `false`.
