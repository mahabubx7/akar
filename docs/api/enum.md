# Enum

## Summary

Enum is a data type that can have one of a specific set of values. It is similar to a string, but it is limited to a specific set of values.

## Table of Contents

- [Schema & Validators](#schema--validators)
- [default](#default)
- [Conclusion](#conclusion)

## Schema & Validators

::: code-group

```typescript
// define a schema for enum
const enumSchema = a.enum(["red", "green", "blue"] as const)

// validate & parse the enum
const resultOne = enumSchema.parse("red") // valid
const resultTow = enumSchema.parse("green") // valid
const resultThree = enumSchema.parse("blue") // valid
/*
 * You might not be able to insert any other value other than the specified values
 * while writing the code in TypeScript, but you can insert any value in JavaScript. Specify the values as const to prevent this.
 */
// const resultFour = enumSchema.parse("yellow") // invalid

console.log(resultOne, resultTow, resultThree)
```

```javascript
// define a schema for enum
const enumSchema = a.enum(["red", "green", "blue"])

// validate & parse the enum
const resultOne = enumSchema.parse("red") // valid
const resultTow = enumSchema.parse("green") // valid
const resultThree = enumSchema.parse("blue") // valid
/*
 * You might not be able to insert any other value other than the specified values
 * while writing the code in TypeScript, but you can insert any value in JavaScript. Specify the values as const to prevent this.
 */
const resultFour = enumSchema.parse("yellow") // invalid

console.log(resultOne, resultTow, resultThree, resultFour)
```

:::

**Output**

::: code-group

```bash [typescript]
{ value: 'red' }

{ value: 'green' }

{ value: 'blue' }
```

```bash [javascript]
{ value: 'red' }

{ value: 'green' }

{ value: 'blue' }

{
  errors: [
    {
      reason: 'Value must be one of the specified values',
      value: 'yellow'
    }
  ]
}
```

:::

## `.default(value: string)`

The `default` validator sets the default value of the schema if the value is `undefined`.

::: code-group

```typescript
// define a schema for enum with default value
const enumSchema = a.enum(["red", "green", "blue"] as const).default("red")

// validate & parse the enum
const resultOne = enumSchema.parse(undefined) // valid
const resultTow = enumSchema.parse("green") // valid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for enum with default value
const enumSchema = a.enum(["red", "green", "blue"]).default("red")

// validate & parse the enum
const resultOne = enumSchema.parse(undefined) // valid
const resultTow = enumSchema.parse("green") // valid

console.log(resultOne, resultTow)
```

:::

**Output**

::: code-group

```bash [typescript]
{ value: 'red' }

{ value: 'green' }
```

```bash [javascript]
{ value: 'red' }

{ value: 'green' }
```

## Conclusion

This is the end of the Enum documentation. If you have any questions or suggestions, please feel free to open an issue on the [GitHub repository](https://github.com/mahabubx7/akar)
