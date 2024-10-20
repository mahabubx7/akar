# Number

## Summary

You can define a schema of a number using the `a.number()` method. This method will return a schema object that can be used to validate and parse the number.

## Table of Contents

- [Schema & Validators](#schema-and-validators)
  - [min](#min)
  - [max](#max)
  - [range](#range)
  - [integer](#integer)
  - [float](#float)
  - [unsigned](#unsigned)
  - [signed](#signed)
  - [odd](#odd)
  - [even](#even)
  - [divisibleBy](#divisibleby)
  - [port](#port)
  - [binary](#binary)
  - [octal](#octal)
  - [hex](#hex)
  - [prime](#prime)
  - [perfect](#perfect)
- [Conclusion](#conclusion)

## Schema and Validators

### min `.min(value: number)`

This validator is used to check if the number is greater than or equal to the specified value.

::: code-group

```typescript
// define a schema of a number greater than or equal to 10
const numberSchema = a.number().min(10)

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(5) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a number greater than or equal to 10
const numberSchema = a.number().min(10)

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(5) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10 }

{
  errors: [
    {
      reason: 'Minimum value is 10',
      value: 5
    }
  ]
}
```

### max `.max(value: number)`

This validator is used to check if the number is less than or equal to the specified value.

::: code-group

```typescript
// define a schema of a number less than or equal to 10
const numberSchema = a.number().max(10)

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(15) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a number less than or equal to 10
const numberSchema = a.number().max(10)

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(15) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10 }

{
  errors: [
    {
      reason: 'Maximum value is 10',
      value: 15
    }
  ]
}
```

### range `.range(min: number, max: number)`

This validator is used to check if the number is within the specified range.

::: code-group

```typescript
// define a schema of a number within the range of 10 and 20
const numberSchema = a.number().range(10, 20)

// validate & parse the number
const resultOne = numberSchema.parse(15) // valid
const resultTow = numberSchema.parse(5) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a number within the range of 10 and 20
const numberSchema = a.number().range(10, 20)

// validate & parse the number
const resultOne = numberSchema.parse(15) // valid
const resultTow = numberSchema.parse(5) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 15 }

{
  errors: [
    {
      reason: 'Number is not within the range',
      value: 5
    }
  ]
}
```

### integer `.integer()`

This validator is used to check if the number is an integer.

::: code-group

```typescript
// define a schema of an integer number
const numberSchema = a.number().integer()

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(10.5) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an integer number
const numberSchema = a.number().integer()

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(10.5) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10 }

{
  errors: [
    {
      reason: 'Number is not an integer',
      value: 10.5
    }
  ]
}
```

### float `.float()`

This validator is used to check if the number is a float.

::: code-group

```typescript
// define a schema of a float number
const numberSchema = a.number().float()

// validate & parse the number
const resultOne = numberSchema.parse(10.5) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a float number
const numberSchema = a.number().float()

// validate & parse the number
const resultOne = numberSchema.parse(10.5) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10.5 }

{
  errors: [
    {
      reason: 'Number is not a float',
      value: 10
    }
  ]
}
```

### unsigned `.unsigned()`

This validator is used to check if the number is an unsigned number.

::: code-group

```typescript
// define a schema of an unsigned number
const numberSchema = a.number().unsigned()

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(-10) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an unsigned number
const numberSchema = a.number().unsigned()

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(-10) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10 }

{
  errors: [
    {
      reason: 'Number is not an unsigned number',
      value: -10
    }
  ]
}
```

### signed `.signed()`

This validator is used to check if the number is a signed number.

::: code-group

```typescript
// define a schema of a signed number
const numberSchema = a.number().signed()

// validate & parse the number
const resultOne = numberSchema.parse(-10) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a signed number
const numberSchema = a.number().signed()

// validate & parse the number
const resultOne = numberSchema.parse(-10) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: -10 }

{
  errors: [
    {
      reason: 'Number is not a signed number',
      value: 10
    }
  ]
}
```

### odd `.odd()`

This validator is used to check if the number is an odd number.

::: code-group

```typescript
// define a schema of an odd number
const numberSchema = a.number().odd()

// validate & parse the number
const resultOne = numberSchema.parse(5) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an odd number
const numberSchema = a.number().odd()

// validate & parse the number
const resultOne = numberSchema.parse(5) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 5 }

{
  errors: [
    {
      reason: 'Number is not an odd number',
      value: 10
    }
  ]
}
```

### even `.even()`

This validator is used to check if the number is an even number.

::: code-group

```typescript
// define a schema of an even number
const numberSchema = a.number().even()

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(5) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of an even number
const numberSchema = a.number().even()

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(5) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10 }

{
  errors: [
    {
      reason: 'Number is not an even number',
      value: 5
    }
  ]
}
```

### divisibleBy `.divisibleBy(value: number)`

This validator is used to check if the number is divisible by the specified value.

::: code-group

```typescript
// define a schema of a number divisible by 5
const numberSchema = a.number().divisibleBy(5)

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(7) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a number divisible by 5
const numberSchema = a.number().divisibleBy(5)

// validate & parse the number
const resultOne = numberSchema.parse(10) // valid
const resultTow = numberSchema.parse(7) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 10 }

{
  errors: [
    {
      reason: 'Number is not divisible by 5',
      value: 7
    }
  ]
}
```

### port `.port()`

This validator is used to check if the number is a valid port number.

::: code-group

```typescript
// define a schema of a valid port number
const numberSchema = a.number().port()

// validate & parse the number
const resultOne = numberSchema.parse(80) // valid
const resultTow = numberSchema.parse(65536) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a valid port number

const numberSchema = a.number().port()

// validate & parse the number
const resultOne = numberSchema.parse(80) // valid
const resultTow = numberSchema.parse(65536) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 80 }

{
  errors: [
    {
      reason: 'Number is not a valid port number',
      value: 65536
    }
  ]
}
```

### binary `.binary()`

This validator is used to check if the number is a valid binary number.

::: code-group

```typescript
// define a schema of a valid binary number
const numberSchema = a.number().binary()

// validate & parse the number
const resultOne = numberSchema.parse(1010) // valid
const resultTow = numberSchema.parse(1234) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a valid binary number
const numberSchema = a.number().binary()

// validate & parse the number
const resultOne = numberSchema.parse(1010) // valid
const resultTow = numberSchema.parse(1234) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 1010 }

{
  errors: [
    {
      reason: 'Number is not a valid binary number',
      value: 1234
    }
  ]
}
```

### octal `.octal()`

This validator is used to check if the number is a valid octal number.

::: code-group

```typescript
// define a schema of a valid octal number
const numberSchema = a.number().octal()

// validate & parse the number
const resultOne = numberSchema.parse(1234) // valid
const resultTow = numberSchema.parse(1010) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a valid octal number
const numberSchema = a.number().octal()

// validate & parse the number
const resultOne = numberSchema.parse(1234) // valid
const resultTow = numberSchema.parse(1010) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 1234 }

{
  errors: [
    {
      reason: 'Number is not a valid octal number',
      value: 1010
    }
  ]
}
```

### hex `.hex()`

This validator is used to check if the number is a valid hexadecimal number.

::: code-group

```typescript
// define a schema of a valid hexadecimal number
const numberSchema = a.number().hex()

// validate & parse the number
const resultOne = numberSchema.parse(0x1234) // valid
const resultTow = numberSchema.parse(0x123g) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a valid hexadecimal number
const numberSchema = a.number().hex()

// validate & parse the number
const resultOne = numberSchema.parse(0x1234) // valid
const resultTow = numberSchema.parse(0x123g) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 4660 }

{
  errors: [
    {
      reason: 'Number is not a valid hexadecimal number',
      value: 0x123g
    }
  ]
}
```

### prime `.prime()`

This validator is used to check if the number is a prime number.

::: code-group

```typescript
// define a schema of a prime number
const numberSchema = a.number().prime()

// validate & parse the number
const resultOne = numberSchema.parse(7) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a prime number
const numberSchema = a.number().prime()

// validate & parse the number
const resultOne = numberSchema.parse(7) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 7 }

{
  errors: [
    {
      reason: 'Number is not a prime number',
      value: 10
    }
  ]
}
```

### perfect `.perfect()`

This validator is used to check if the number is a perfect number.

::: code-group

```typescript
// define a schema of a perfect number
const numberSchema = a.number().perfect()

// validate & parse the number
const resultOne = numberSchema.parse(28) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema of a perfect number
const numberSchema = a.number().perfect()

// validate & parse the number
const resultOne = numberSchema.parse(28) // valid
const resultTow = numberSchema.parse(10) // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 28 }

{
  errors: [
    {
      reason: 'Number is not a perfect number',
      value: 10
    }
  ]
}
```

## Conclusion

In this guide, you learned how to define a schema of a number using the `a.number()` method. You also learned about various validators that can be used to validate and parse the number. You can now use this knowledge to define a schema of a number in your application.
