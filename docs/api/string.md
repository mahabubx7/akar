# String

## Summary

String is a data type that represents a sequence of characters. It is used to store text data. We already covered a lot of things about the string data type in the schema. In this documentation, we will discuss the avaliable string schema and its validators.

## Table of Contents

- [Schema & Validators](#schema--validators)
- [Min](#min)
- [Max](#max)
- [Pattern](#pattern)
- [URL](#url)
- [Aplha](#alpha)
- [AlphaNumeric](#alphanumeric)
- [Numeric](#numeric)
- [Lowercase](#lowercase)
- [Uppercase](#uppercase)
- [Phone](#phone)
- [Hex](#hex)
- [Base64](#base64)
- [Base64URL](#base64url)
- [IP](#ip)
- [IPv4](#ipv4)
- [IPv6](#ipv6)
- [UUID](#uuid)
- [MongoID](#mongoid)
- [GUID](#guid)
- [CUID](#cuid)
- [JSON](#json)
- [Mac](#mac)
- [CreditCard](#creditcard)
- [Country](#country)
- [PostalCode](#postalcode)
- [Passport](#passport)
- [Password](#password)
- [Currency](#currency)
- [Data URI](#data-uri)
- [MIME Type](#mime-type)
- [LatLong](#latlong)
- [SemVer](#semver)
- [MD5](#md5)
- [SHA1](#sha1)
- [SHA256](#sha256)
- [SHA512](#sha512)
- [JWT](#jwt)
- [IBAN](#iban)
- [BIC](#bic)
- [ISIN](#isin)
- [Hex Color](#hex-color)
- [RGB Color](#rgb-color)
- [HSL Color](#hsl-color)
- [Locale](#locale)
- [OTP](#otp)
- [Slug](#slug)
- [FQDN](#fqdn)
- [Variable Name](#variable-name)
- [Date](#date)
- [Time](#time)
- [Hour](#hour)
- [Minute Or Seconds](#minute-or-seconds)
- [Timezone](#timezone)
- [Weekday](#weekday)
- [Base](#base)
- [Contains](#contains)
- [MagnetURI](#magneturi)
- [Conclusion](#conclusion)

## Schema & Validators

## `min()`

The `min` validator checks if the string length is greater than or equal to the provided value.

::: code-group

```typescript
// define a schema for string with min validator
const stringSchema = a.string().min(5)

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("hi") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with min validator
const stringSchema = a.string().min(5)

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("hi") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'hello' }

{
  errors: [
    {
      reason: 'Minimum length is 5',
      value: 'hi',
    }
  ]
}
```

## `max()`

The `max` validator checks if the string length is less than or equal to the provided value.

::: code-group

```typescript
// define a schema for string with max validator
const stringSchema = a.string().max(5)

// validate & parse the string
const resultOne = stringSchema.parse("hi") // valid
const resultTow = stringSchema.parse("hello") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with max validator
const stringSchema = a.string().max(5)

// validate & parse the string
const resultOne = stringSchema.parse("hi") // valid
const resultTow = stringSchema.parse("hello") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'hi' }

{
  errors: [
    {
      reason: 'Maximum length is 5',
      value: 'hello',
    }
  ]
}
```

## `pattern()`

The `pattern` validator checks if the string matches the provided regular expression pattern.

::: code-group

```typescript
// define a schema for string with pattern validator
const stringSchema = a.string().pattern(/^[a-z]+$/)

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("0123") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with pattern validator
const stringSchema = a.string().pattern(/^[a-z]+$/)

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("0123") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'hello' }

{
  errors: [
    {
      reason: 'Pattern does not match',
      value: '0123',
    }
  ]
}
```

## `url()`

The `url` validator checks if the string is a valid URL.

::: code-group

```typescript
// define a schema for string with url validator
const stringSchema = a.string().url()

// validate & parse the string
const resultOne = stringSchema.parse("https://example.com") // valid
const resultTow = stringSchema.parse("http-example-com") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with url validator
const stringSchema = a.string().url()

// validate & parse the string
const resultOne = stringSchema.parse("https://example.com") // valid
const resultTow = stringSchema.parse("http-example-com") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'https://example.com' }

{
  errors: [
    {
      reason: 'Value must be a valid URL',
      value: 'http-example-com',
    }
  ]
}
```

## `alpha()`

The `alpha` validator checks if the string contains only alphabetic characters.

::: code-group

```typescript
// define a schema for string with alpha validator
const stringSchema = a.string().alpha()

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("hello123") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with alpha validator
const stringSchema = a.string().alpha()

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("hello123") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'hello' }

{
  errors: [
    {
      reason: 'Value must contain only alphabetic characters',
      value: 'hello123',
    }
  ]
}
```

## `alphanumeric()`

The `alphanumeric` validator checks if the string contains only alphabetic and numeric characters.

::: code-group

```typescript
// define a schema for string with alphanumeric validator
const stringSchema = a.string().alphanumeric()

// validate & parse the string
const resultOne = stringSchema.parse("hello123") // valid
const resultTow = stringSchema.parse("hello@123") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with alphanumeric validator
const stringSchema = a.string().alphanumeric()

// validate & parse the string
const resultOne = stringSchema.parse("hello123") // valid
const resultTow = stringSchema.parse("hello@123") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'hello123' }

{
  errors: [
    {
      reason: 'Value must contain only alphanumeric characters',
      value: 'hello@123',
    }
  ]
}
```

## `numeric()`

The `numeric` validator checks if the string contains only numeric characters.

::: code-group

```typescript
// define a schema for string with numeric validator
const stringSchema = a.string().numeric()

// validate & parse the string
const resultOne = stringSchema.parse("123") // valid
const resultTow = stringSchema.parse("123abc") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with numeric validator
const stringSchema = a.string().numeric()

// validate & parse the string
const resultOne = stringSchema.parse("123") // valid
const resultTow = stringSchema.parse("123abc") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: '123' }

{
  errors: [
    {
      reason: 'Value must contain only numeric characters',
      value: '123abc',
    }
  ]
}
```

## `lowercase()`

The `lowercase` validator checks if the string contains only lowercase characters.

::: code-group

```typescript
// define a schema for string with lowercase validator
const stringSchema = a.string().lowercase()

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("Hello") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with lowercase validator
const stringSchema = a.string().lowercase()

// validate & parse the string
const resultOne = stringSchema.parse("hello") // valid
const resultTow = stringSchema.parse("Hello") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'hello' }

{
  errors: [
    {
      reason: 'Value must contain only lowercase characters',
      value: 'Hello',
    }
  ]
}
```

## `uppercase()`

The `uppercase` validator checks if the string contains only uppercase characters.

::: code-group

```typescript
// define a schema for string with uppercase validator
const stringSchema = a.string().uppercase()

// validate & parse the string
const resultOne = stringSchema.parse("HELLO") // valid
const resultTow = stringSchema.parse("Hello") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with uppercase validator
const stringSchema = a.string().uppercase()

// validate & parse the string
const resultOne = stringSchema.parse("HELLO") // valid
const resultTow = stringSchema.parse("Hello") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'HELLO' }

{
  errors: [
    {
      reason: 'Value must contain only uppercase characters',
      value: 'Hello',
    }
  ]
}
```

## `phone()`

The `phone` validator checks if the string is a valid phone number.

::: code-group

```typescript
// define a schema for string with phone validator
const stringSchema = a.string().phone()

// validate & parse the string
const resultOne = stringSchema.parse("+8801234567890") // valid
const resultTow = stringSchema.parse("1234567890") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with phone validator
const stringSchema = a.string().phone()

// validate & parse the string
const resultOne = stringSchema.parse("+8801234567890") // valid
const resultTow = stringSchema.parse("1234567890") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: '+8801234567890' }

{
  errors: [
    {
      reason: 'Value must be a valid phone number',
      value: '1234567890',
    }
  ]
}
```

## `hex()`

The `hex` validator checks if the string is a valid hexadecimal number.

::: code-group

```typescript
// define a schema for string with hex validator
const stringSchema = a.string().hex()

// validate & parse the string
const resultOne = stringSchema.parse("0x1234567890abcdef") // valid
const resultTow = stringSchema.parse("1234567890abcdef") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with hex validator
const stringSchema = a.string().hex()

// validate & parse the string
const resultOne = stringSchema.parse("0x1234567890abcdef") // valid
const resultTow = stringSchema.parse("1234567890abcdef") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: '0x1234567890abcdef' }

{
  errors: [
    {
      reason: 'Value must be a valid hexadecimal number',
      value: '1234567890abcdef',
    }
  ]
}
```

## `base64()`

The `base64` validator checks if the string is a valid base64 encoded string.

::: code-group

```typescript
// define a schema for string with base64 validator
const stringSchema = a.string().base64()

// validate & parse the string
const resultOne = stringSchema.parse("aGVsbG8gd29ybGQ=") // valid
const resultTow = stringSchema.parse("hello") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with base64 validator
const stringSchema = a.string().base64()

// validate & parse the string
const resultOne = stringSchema.parse("aGVsbG8gd29ybGQ=") // valid
const resultTow = stringSchema.parse("hello") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'aGVsbG8gd29ybGQ=' }

{
  errors: [
    {
      reason: 'Value must be a valid base64 encoded string',
      value: 'hello',
    }
  ]
}
```

## `base64url()`

The `base64url` validator checks if the string is a valid base64url encoded string.

::: code-group

```typescript
// define a schema for string with base64url validator
const stringSchema = a.string().base64url()

// validate & parse the string
const resultOne = stringSchema.parse("aGVsbG8gd29ybGQ") // valid
const resultTow = stringSchema.parse("hello") // invalid

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with base64url validator
const stringSchema = a.string().base64url()

// validate & parse the string
const resultOne = stringSchema.parse("aGVsbG8gd29ybGQ") // valid
const resultTow = stringSchema.parse("hello") // invalid

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: 'aGVsbG8gd29ybGQ' }

{
  errors: [
    {
      reason: 'Value must be a valid base64url encoded string',
      value: 'hello',
    }
  ]
}
```

## `ip()`

The `ip` validator checks if the string is a valid IP address.

::: code-group

```typescript
// define a schema for string with ip validator
const stringSchema = a.string().ip()

// validate & parse the string
const resultOne = stringSchema.parse("103.101.102.104")
const resultTow = stringSchema.parse("2001:0db8:85a3:0000:0000:8a2e:0370:7334")
const resultThree = stringSchema.parse("example.com")

console.log(resultOne, resultTow, resultThree)
```

```javascript
// define a schema for string with ip validator
const stringSchema = a.string().ip()

// validate & parse the string
const resultOne = stringSchema.parse("103.101.102.104")
const resultTow = stringSchema.parse("2001:0db8:85a3:0000:0000:8a2e:0370:7334")
const resultThree = stringSchema.parse("example.com")

console.log(resultOne, resultTow, resultThree)
```

:::

**Output**

```bash
  { value: '103.101.102.104' }

  { value: '2001:0db8:85a3:0000:0000:8a2e:0370:7334' }

  {
    errors: [
      {
        reason: 'Value must be a valid IP address',
        value: 'example.com',
      }
    ]
  }
```

## `ipv4()`

The `ipv4` validator checks if the string is a valid IPv4 address.

::: code-group

```typescript
// define a schema for string with ipv4 validator
const stringSchema = a.string().ipv4()

// validate & parse the string
const resultOne = stringSchema.parse("103.101.102.104")
const resultTow = stringSchema.parse("2001:0db8:85a3:0000:0000:8a2e:0370:7334")

console.log(resultOne, resultTow)
```

```javascript
// define a schema for string with ipv4 validator
const stringSchema = a.string().ipv4()

// validate & parse the string
const resultOne = stringSchema.parse("103.101.102.104")
const resultTow = stringSchema.parse("2001:0db8:85a3:0000:0000:8a2e:0370:7334")

console.log(resultOne, resultTow)
```

:::

**Output**

```bash
{ value: '103.101.102.104' }

{
  errors: [
    {
      reason: 'Value must be a valid IPv4 address',
      value: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    }
  ]
}
```

## `ipv6()`

The `ipv6` validator checks if the string is a valid IPv6 address.

::: code-group

```typescript
// define a schema for string with ipv6 validator
const stringSchema = a.string().ipv6()

// validate & parse the string
const resultOne = stringSchema.parse("2001:0db8:85a3:0000:0000:8a2e:0370:7334")
const resultTwo = stringSchema.parse("103.101.102.104")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with ipv6 validator
const stringSchema = a.string().ipv6()

// validate & parse the string
const resultOne = stringSchema.parse("2001:0db8:85a3:0000:0000:8a2e:0370:7334")
const resultTwo = stringSchema.parse("103.101.102.104")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '2001:0db8:85a3:0000:0000:8a2e:0370:7334' }

{
  errors: [
    {
      reason: 'Value must be a valid IPv6 address',
      value: '103.101.102.104',
    }
  ]
}
```

## `uuid()`

The `uuid` validator checks if the string is a valid UUID.

::: code-group

```typescript
// define a schema for string with uuid validator
const stringSchema = a.string().uuid()

// validate & parse the string
const resultOne = stringSchema.parse("550e8400-e29b-41d4-a716-446655440000")
const resultTwo = stringSchema.parse("550e8400-e29b-41d4-a716-44665544000")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with uuid validator
const stringSchema = a.string().uuid()

// validate & parse the string
const resultOne = stringSchema.parse("550e8400-e29b-41d4-a716-446655440000")
const resultTwo = stringSchema.parse("550e8400-e29b-41d4-a716-44665544000")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '550e8400-e29b-41d4-a716-446655440000' }

{
  errors: [
    {
      reason: 'Value must be a valid UUID',
      value: '550e8400-e29b-41d4-a716-44665544000',
    }
  ]
}
```

## `mongoid()`

The `mongoid` validator checks if the string is a valid MongoDB ObjectId.

::: code-group

```typescript
// define a schema for string with mongoid validator
const stringSchema = a.string().mongoid()

// validate & parse the string
const resultOne = stringSchema.parse("507f1f77bcf86cd799439011")
const resultTwo = stringSchema.parse("507f1f77bcf86cd79943901")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with mongoid validator
const stringSchema = a.string().mongoid()

// validate & parse the string
const resultOne = stringSchema.parse("507f1f77bcf86cd799439011")
const resultTwo = stringSchema.parse("507f1f77bcf86cd79943901")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '507f1f77bcf86cd799439011' }

{
  errors: [
    {
      reason: 'Value must be a valid MongoDB ObjectId',
      value: '507f1f77bcf86cd79943901',
    }
  ]
}
```

## `guid()`

The `guid` validator checks if the string is a valid GUID.

::: code-group

```typescript
// define a schema for string with guid validator
const stringSchema = a.string().guid()

// validate & parse the string
const resultOne = stringSchema.parse("550e8400-e29b-41d4-a716-446655440000")
const resultTwo = stringSchema.parse("550e8400-e29b-41d4-a716-44665544000")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with guid validator
const stringSchema = a.string().guid()

// validate & parse the string
const resultOne = stringSchema.parse("550e8400-e29b-41d4-a716-446655440000")
const resultTwo = stringSchema.parse("550e8400-e29b-41d4-a716-44665544000")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '550e8400-e29b-41d4-a716-446655440000' }

{
  errors: [
    {
      reason: 'Value must be a valid GUID',
      value: '550e8400-e29b-41d4-a716-44665544000',
    }
  ]
}
```

## `cuid()`

The `cuid` validator checks if the string is a valid CUID.

::: code-group

```typescript
// define a schema for string with cuid validator
const stringSchema = a.string().cuid()

// validate & parse the string
const resultOne = stringSchema.parse("ck7q2x1qg0000b3z1z1z6zj5z")
const resultTwo = stringSchema.parse("ck7q2x1qg0000b3z1z1z6zj5")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with cuid validator
const stringSchema = a.string().cuid()

// validate & parse the string
const resultOne = stringSchema.parse("ck7q2x1qg0000b3z1z1z6zj5z")
const resultTwo = stringSchema.parse("ck7q2x1qg0000b3z1z1z6zj5")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'ck7q2x1qg0000b3z1z1z6zj5z' }

{
  errors: [
    {
      reason: 'Value must be a valid CUID',
      value: 'ck7q2x1qg0000b3z1z1z6zj5',
    }
  ]
}
```

## `json()`

The `json` validator checks if the string is a valid JSON string.

::: code-group

```typescript
// define a schema for string with json validator
const stringSchema = a.string().json()

// validate & parse the string
const resultOne = stringSchema.parse('{"name": "John Doe"}')
const resultTwo = stringSchema.parse('{"name": "John Doe"')

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with json validator
const stringSchema = a.string().json()

// validate & parse the string
const resultOne = stringSchema.parse('{"name": "John Doe"}')
const resultTwo = stringSchema.parse('{"name": "John Doe"')

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '{"name": "John Doe"}' }

{
  errors: [
    {
      reason: 'Value must be a valid JSON string',
      value: '{"name": "John Doe"',
    }
  ]
}
```

## `mac()`

The `mac` validator checks if the string is a valid MAC address.

::: code-group

```typescript
// define a schema for string with mac validator
const stringSchema = a.string().mac()

// validate & parse the string
const resultOne = stringSchema.parse("00:0a:95:9d:68:16")
const resultTwo = stringSchema.parse("00:0a:95:9d:68:16:00")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with mac validator
const stringSchema = a.string().mac()

// validate & parse the string
const resultOne = stringSchema.parse("00:0a:95:9d:68:16")
const resultTwo = stringSchema.parse("00:0a:95:9d:68:16:00")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '00:0a:95:9d:68:16' }

{
  errors: [
    {
      reason: 'Value must be a valid MAC address',
      value: '00:0a:95:9d:68:16:00',
    }
  ]
}
```

## `creditcard()`

The `creditcard` validator checks if the string is a valid credit card number.

::: code-group

```typescript
// define a schema for string with creditcard validator
const stringSchema = a.string().creditcard()

// validate & parse the string
const resultOne = stringSchema.parse("4111111111111111")
const resultTwo = stringSchema.parse("4111111111111112")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with creditcard validator
const stringSchema = a.string().creditcard()

// validate & parse the string
const resultOne = stringSchema.parse("4111111111111111")
const resultTwo = stringSchema.parse("4111111111111112")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '4111111111111111' }

{
  errors: [
    {
      reason: 'Value must be a valid credit card number',
      value: '411111111111
    }
  ]
}
```

## `country()`

The `country` validator checks if the string is a valid country code.

::: code-group

```typescript
// define a schema for string with country validator
const stringSchema = a.string().country()

// validate & parse the string
const resultOne = stringSchema.parse("BD")
const resultTwo = stringSchema.parse("USA")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with country validator
const stringSchema = a.string().country()

// validate & parse the string
const resultOne = stringSchema.parse("BD")
const resultTwo = stringSchema.parse("USA")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'BD' }

{
  errors: [
    {
      reason: 'Value must be a valid country code',
      value: 'USA',
    }
  ]
}
```

## `postalcode()`

The `postalcode` validator checks if the string is a valid postal code.

::: code-group

```typescript
// define a schema for string with postalcode validator
const stringSchema = a.string().postalcode()

// validate & parse the string
const resultOne = stringSchema.parse("1000")
const resultTwo = stringSchema.parse("1000a")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with postalcode validator
const stringSchema = a.string().postalcode()

// validate & parse the string
const resultOne = stringSchema.parse("1000")
const resultTwo = stringSchema.parse("1000a")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '1000' }

{
  errors: [
    {
      reason: 'Value must be a valid postal code',
      value: '1000a',
    }
  ]
}
```

## `passport()`

The `passport` validator checks if the string is a valid passport number.

::: code-group

```typescript
// define a schema for string with passport validator
const stringSchema = a.string().passport()

// validate & parse the string
const resultOne = stringSchema.parse("AB1234567")
const resultTwo = stringSchema.parse("A123456")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with passport validator
const stringSchema = a.string().passport()

// validate & parse the string
const resultOne = stringSchema.parse("AB1234567")
const resultTwo = stringSchema.parse("A123456")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'AB1234567' }

{
  errors: [
    {
      reason: 'Value must be a valid passport number',
      value: 'A123456',
    }
  ]
}
```

## `password()`

The `password` validator checks if the string is a valid password.

::: code-group

```typescript
// define a schema for string with password validator
const stringSchema = a.string().password()

// validate & parse the string
const resultOne = stringSchema.parse("P@ssw0rd")
const resultTwo = stringSchema.parse("password")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with password validator
const stringSchema = a.string().password()

// validate & parse the string
const resultOne = stringSchema.parse("P@ssw0rd")
const resultTwo = stringSchema.parse("password")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'P@ssw0rd' }

{
  errors: [
    {
      reason: 'Value must be a valid password',
      value: 'password',
    }
  ]
}
```

## `currency()`

The `currency` validator checks if the string is a valid currency code.

::: code-group

```typescript
// define a schema for string with currency validator
const stringSchema = a.string().currency()

// validate & parse the string
const resultOne = stringSchema.parse("USD")
const resultTwo = stringSchema.parse("US")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with currency validator
const stringSchema = a.string().currency()

// validate & parse the string
const resultOne = stringSchema.parse("USD")
const resultTwo = stringSchema.parse("US")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'USD' }

{
  errors: [
    {
      reason: 'Value must be a valid currency code',
      value: 'US',
    }
  ]
}
```

## `dataUri()`

The `datauri` validator checks if the string is a valid data URI.

::: code-group

```typescript
// define a schema for string with datauri validator
const stringSchema = a.string().datauri()

// validate & parse the string
const resultOne = stringSchema.parse(
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVR42mNk"
)

const resultTwo = stringSchema.parse(
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8"
)

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with datauri validator
const stringSchema = a.string().datauri()

// validate & parse the string
const resultOne = stringSchema.parse(
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVR42mNk"
)

const resultTwo = stringSchema.parse(
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8"
)

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVR42mNk' }

{
  errors: [
    {
      reason: 'Value must be a valid data URI',
      value: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8',
    }
  ]
}
```

## `mimeType()`

The `mimetype` validator checks if the string is a valid MIME type.

::: code-group

```typescript
// define a schema for string with mimetype validator
const stringSchema = a.string().mimetype()

// validate & parse the string
const resultOne = stringSchema.parse("image/png")
const resultTwo = stringSchema.parse("image")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with mimetype validator
const stringSchema = a.string().mimetype()

// validate & parse the string
const resultOne = stringSchema.parse("image/png")
const resultTwo = stringSchema.parse("image")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'image/png' }

{
  errors: [
    {
      reason: 'Value must be a valid MIME type',
      value: 'image',
    }
  ]
}
```

## `latlong()`

The `latlong` validator checks if the string is a valid latitude and longitude.

::: code-group

```typescript
// define a schema for string with latlong validator
const stringSchema = a.string().latlong()

// validate & parse the string
const resultOne = stringSchema.parse("23.8103,90.4125")
const resultTwo = stringSchema.parse("23.8103,90.4125,23.8103")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with latlong validator
const stringSchema = a.string().latlong()

// validate & parse the string
const resultOne = stringSchema.parse("23.8103,90.4125")
const resultTwo = stringSchema.parse("23.8103,90.4125,23.8103")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '23.8103,90.4125' }

{
  errors: [
    {
      reason: 'Value must be a valid latitude and longitude',
      value: '23.8103,90.4125,23.8103',
    }
  ]
}
```

## `hexColor()`

The `hexcolor` validator checks if the string is a valid hexadecimal color.

::: code-group

```typescript
// define a schema for string with hexcolor validator
const stringSchema = a.string().hexColor()

// validate & parse the string
const resultOne = stringSchema.parse("#ff0000")
const resultTwo = stringSchema.parse("#ff000")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with hexcolor validator
const stringSchema = a.string().hexColor()

// validate & parse the string
const resultOne = stringSchema.parse("#ff0000")
const resultTwo = stringSchema.parse("#ff000")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '#ff0000' }

{
  errors: [
    {
      reason: 'Value must be a valid hexadecimal color',
      value: '#ff000',
    }
  ]
}
```

## `rgbColor()`

The `rgbcolor` validator checks if the string is a valid RGB color.

::: code-group

```typescript
// define a schema for string with rgbcolor validator
const stringSchema = a.string().rgbColor()

// validate & parse the string
const resultOne = stringSchema.parse("rgb(255, 0, 0)")
const resultTwo = stringSchema.parse("rgb(255, 0, 0, 255)")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with rgbcolor validator
const stringSchema = a.string().rgbColor()

// validate & parse the string
const resultOne = stringSchema.parse("rgb(255, 0, 0)")
const resultTwo = stringSchema.parse("rgb(255, 0, 0, 255)")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'rgb(255, 0, 0)' }

{
  errors: [
    {
      reason: 'Value must be a valid RGB color',
      value: 'rgb(255, 0, 0, 255)',
    }
  ]
}
```

## `hslColor()`

The `hslcolor` validator checks if the string is a valid HSL color.

::: code-group

```typescript
// define a schema for string with hslcolor validator
const stringSchema = a.string().hslColor()

// validate & parse the string
const resultOne = stringSchema.parse("hsl(0, 100%, 50%)")
const resultTwo = stringSchema.parse("hsl(0, 100%, 50%, 1)")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with hslcolor validator
const stringSchema = a.string().hslColor()

// validate & parse the string
const resultOne = stringSchema.parse("hsl(0, 100%, 50%)")
const resultTwo = stringSchema.parse("hsl(0, 100%, 50%, 1)")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'hsl(0, 100%, 50%)' }

{
  errors: [
    {
      reason: 'Value must be a valid HSL color',
      value: 'hsl(0, 100%, 50%, 1)',
    }
  ]
}
```

## `semver()`

The `semver` validator checks if the string is a valid semantic version.

::: code-group

```typescript
// define a schema for string with semver validator
const stringSchema = a.string().semver()

// validate & parse the string
const resultOne = stringSchema.parse("1.2.3")
const resultTwo = stringSchema.parse("1.2")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with semver validator
const stringSchema = a.string().semver()

// validate & parse the string
const resultOne = stringSchema.parse("1.2.3")
const resultTwo = stringSchema.parse("1.2")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '1.2.3' }

{
  errors: [
    {
      reason: 'Value must be a valid semantic version',
      value: '1.2',
    }
  ]
}
```

## `jwt()`

The `jwt` validator checks if the string is a valid JSON Web Token.

::: code-group

```typescript
// define a schema for string with jwt validator
const stringSchema = a.string().jwt()

// validate & parse the string
const resultOne = stringSchema.parse(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
)

const resultTwo = stringSchema.parse(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
)

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with jwt validator
const stringSchema = a.string().jwt()

// validate & parse the string
const resultOne = stringSchema.parse(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpv"
)

const resultTwo = stringSchema.parse(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpv"
)

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6JkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }

{
  errors: [
    {
      reason: 'Value must be a valid JSON Web Token',
      value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6JkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    }
  ]
}
```

## `md5()`

The `md5` validator checks if the string is a valid MD5 hash.

::: code-group

```typescript
// define a schema for string with md5 validator
const md5Schema = a.string().md5()

// validate & parse the string
const resultOne = md5Schema.parse("d41d8cd98f00b204e9800998ecf8427e")
const resultTwo = md5Schema.parse("d41d8cd98f00b204e9800998ecf8427")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with md5 validator
const md5Schema = a.string().md5()

// validate & parse the string
const resultOne = md5Schema.parse("d41d8cd98f00b204e9800998ecf8427e")
const resultTwo = md5Schema.parse("d41d8cd98f00b204e9800998ecf8427")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'd41d8cd98f00b204e9800998ecf8427e' }

{
  errors: [
    {
      reason: 'Value must be a valid MD5 hash',
      value: 'd41d8cd98f00b204e9800998ecf8427',
    }
  ]
}
```

## `sha1()`

The `sha1` validator checks if the string is a valid SHA1 hash.

::: code-group

```typescript
// define a schema for string with sha1 validator
const sha1Schema = a.string().sha1()

// validate & parse the string
const resultOne = sha1Schema.parse("2fd4e1c67a2d28fced849ee1bb76e7391b93eb12")
const resultTwo = sha1Schema.parse("2fd4e1c67a2d28fced849ee1bb76e7391b93eb1")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with sha1 validator
const sha1Schema = a.string().sha1()

// validate & parse the string
const resultOne = sha1Schema.parse("2fd4e1c67a2d28fced849ee1bb76e7391b93eb12")
const resultTwo = sha1Schema.parse("2fd4e1c67a2d28fced849ee1bb76e7391b93eb1")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12' }

{
  errors: [
    {
      reason: 'Value must be a valid SHA1 hash',
      value: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb1',
    }
  ]
}

```

## `sha256()`

The `sha256` validator checks if the string is a valid SHA256 hash.

::: code-group

```typescript
// define a schema for string with sha256 validator
const sha256Schema = a.string().sha256()

// validate & parse the string
const resultOne = sha256Schema.parse(
  "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"
)

const resultTwo = sha256Schema.parse(
  "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146"
)

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with sha256 validator
const sha256Schema = a.string().sha256()

// validate & parse the string
const resultOne = sha256Schema.parse(
  "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"
)

const resultTwo = sha256Schema.parse(
  "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146"
)

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e' }

{
  errors: [
    {
      reason: 'Value must be a valid SHA256 hash',
      value: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146',
    }
  ]
}

```

## `sha512()`

The `sha512` validator checks if the string is a valid SHA512 hash.

::: code-group

```typescript
// define a schema for string with sha512 validator
const sha512Schema = a.string().sha512()

// validate & parse the string
const resultOne = sha512Schema.parse(
  "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae493"
)

const resultTwo = sha512Schema.parse(
  "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae49"
)

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with sha512 validator
const sha512Schema = a.string().sha512()

// validate & parse the string
const resultOne = sha512Schema.parse(
  "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae493"
)

const resultTwo = sha512Schema.parse(
  "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae49"
)

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae493' }

{
  errors: [
    {
      reason: 'Value must be a valid SHA512 hash',
      value: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae49',
    }
  ]
}

```

## `iban()`

The `iban` validator checks if the string is a valid International Bank Account Number (IBAN).

::: code-group

```typescript
// define a schema for string with iban validator
const ibanSchema = a.string().iban()

// validate & parse the string
const resultOne = ibanSchema.parse("GB82WEST12345698765432")
const resultTwo = ibanSchema.parse("GB82WEST1234569876543")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with iban validator
const ibanSchema = a.string().iban()

// validate & parse the string
const resultOne = ibanSchema.parse("GB82WEST12345698765432")
const resultTwo = ibanSchema.parse("GB82WEST1234569876543")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'GB82WEST12345698765432' }

{
  errors: [
    {
      reason: 'Value must be a valid IBAN',
      value: 'GB82WEST1234569876543',
    }
  ]
}
```

## `bic()`

The `bic` validator checks if the string is a valid Bank Identifier Code (BIC).

::: code-group

```typescript
// define a schema for string with bic validator
const bicSchema = a.string().bic()

// validate & parse the string
const resultOne = bicSchema.parse("DEUTDEFF500")
const resultTwo = bicSchema.parse("DEUTDEFF50")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with bic validator
const bicSchema = a.string().bic()

// validate & parse the string
const resultOne = bicSchema.parse("DEUTDEFF500")
const resultTwo = bicSchema.parse("DEUTDEFF50")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'DEUTDEFF500' }

{
  errors: [
    {
      reason: 'Value must be a valid BIC',
      value: 'DEUTDEFF50',
    }
  ]
}
```

## `isbn()`

The `isbn` validator checks if the string is a valid International Standard Book Number (ISBN).

::: code-group

```typescript
// define a schema for string with isbn validator
const isbnSchema = a.string().isbn()

// validate & parse the string
const resultOne = isbnSchema.parse("978-3-16-148410-0")
const resultTwo = isbnSchema.parse("978-3-16-148410")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with isbn validator
const isbnSchema = a.string().isbn()

// validate & parse the string
const resultOne = isbnSchema.parse("978-3-16-148410-0")
const resultTwo = isbnSchema.parse("978-3-16-148410")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '978-3-16-148410-0' }

{
  errors: [
    {
      reason: 'Value must be a valid ISBN',
      value: '978-3-16-148410',
    }
  ]
}
```

## `locale()`

The `locale` validator checks if the string is a valid locale code.

::: code-group

```typescript
// define a schema for string with locale validator
const localeSchema = a.string().locale()

// validate & parse the string
const resultOne = localeSchema.parse("en-US")
const resultTwo = localeSchema.parse("en")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with locale validator
const localeSchema = a.string().locale()

// validate & parse the string
const resultOne = localeSchema.parse("en-US")
const resultTwo = localeSchema.parse("en")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'en-US' }

{
  errors: [
    {
      reason: 'Value must be a valid locale code',
      value: 'en',
    }
  ]
}
```

## `otp()`

The `otp` validator checks if the string is a valid One-Time Password (OTP).

::: code-group

```typescript
// define a schema for string with otp validator
const otpSchema = a.string().otp()

// validate & parse the string
const resultOne = otpSchema.parse("123456")
const resultTwo = otpSchema.parse("12345")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with otp validator
const otpSchema = a.string().otp()

// validate & parse the string
const resultOne = otpSchema.parse("123456")
const resultTwo = otpSchema.parse("12345")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '123456' }

{
  errors: [
    {
      reason: 'Value must be a valid OTP',
      value: '12345',
    }
  ]
}
```

## `slug()`

The `slug` validator checks if the string is a valid slug.

::: code-group

```typescript
// define a schema for string with slug validator
const slugSchema = a.string().slug()

// validate & parse the string
const resultOne = slugSchema.parse("hello-world")
const resultTwo = slugSchema.parse("hello world")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with slug validator
const slugSchema = a.string().slug()

// validate & parse the string
const resultOne = slugSchema.parse("hello-world")
const resultTwo = slugSchema.parse("hello world")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'hello-world' }

{
  errors: [
    {
      reason: 'Value must be a valid slug',
      value: 'hello world',
    }
  ]
}
```

## `fqdn()`

The `fqdn` validator checks if the string is a valid Fully Qualified Domain Name (FQDN).

::: code-group

```typescript
// define a schema for string with fqdn validator
const fqdnSchema = a.string().fqdn()

// validate & parse the string
const resultOne = fqdnSchema.parse("example.com")
const resultTwo = fqdnSchema.parse("example")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with fqdn validator
const fqdnSchema = a.string().fqdn()

// validate & parse the string
const resultOne = fqdnSchema.parse("example.com")
const resultTwo = fqdnSchema.parse("example")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'example.com' }

{
  errors: [
    {
      reason: 'Value must be a valid FQDN',
      value: 'example',
    }
  ]
}
```

## `variableName()`

The `variablename` validator checks if the string is a valid variable name.

::: code-group

```typescript
// define a schema for string with variablename validator
const variableNameSchema = a.string().variablename()

// validate & parse the string
const resultOne = variableNameSchema.parse("variableName")
const resultTwo = variableNameSchema.parse("variable Name")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with variablename validator
const variableNameSchema = a.string().variablename()

// validate & parse the string
const resultOne = variableNameSchema.parse("variableName")
const resultTwo = variableNameSchema.parse("variable Name")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'variableName' }

{
  errors: [
    {
      reason: 'Value must be a valid variable name',
      value: 'variable Name',
    }
  ]
}
```

## `date()`

The `date` validator checks if the string is a valid date.

::: code-group

```typescript
// define a schema for string with date validator
const dateSchema = a.string().date()

// validate & parse the string
const resultOne = dateSchema.parse("2021-12-31")
const resultTwo = dateSchema.parse("2021-12-32")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with date validator
const dateSchema = a.string().date()

// validate & parse the string
const resultOne = dateSchema.parse("2021-12-31")
const resultTwo = dateSchema.parse("2021-12-32")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '2021-12-31' }

{
  errors: [
    {
      reason: 'Value must be a valid date',
      value: '2021-12-32',
    }
  ]
}
```

## `time()`

The `time` validator checks if the string is a valid time.

::: code-group

```typescript
// define a schema for string with time validator
const timeSchema = a.string().time()

// validate & parse the string
const resultOne = timeSchema.parse("12:00")
const resultTwo = timeSchema.parse("25:00")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with time validator
const timeSchema = a.string().time()

// validate & parse the string
const resultOne = timeSchema.parse("12:00")
const resultTwo = timeSchema.parse("25:00")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '12:00' }

{
  errors: [
    {
      reason: 'Value must be a valid time',
      value: '25:00',
    }
  ]
}
```

## `minutesOrSeconds()`

The `minutesorseconds` validator checks if the string is a valid minutes or seconds.

::: code-group

```typescript
// define a schema for string with minutesorseconds validator
const minutesOrSecondsSchema = a.string().minutesorseconds()

// validate & parse the string
const resultOne = minutesOrSecondsSchema.parse("12")
const resultTwo = minutesOrSecondsSchema.parse("63")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with minutesorseconds validator
const minutesOrSecondsSchema = a.string().minutesorseconds()

// validate & parse the string
const resultOne = minutesOrSecondsSchema.parse("12")
const resultTwo = minutesOrSecondsSchema.parse("63")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '12' }

{
  errors: [
    {
      reason: 'Value must be a valid minutes or seconds',
      value: '63',
    }
  ]
}
```

## `hours()`

The `hours` validator checks if the string is a valid hours.

::: code-group

```typescript
// define a schema for string with hours validator
const hoursSchema = a.string().hours()

// validate & parse the string
const resultOne = hoursSchema.parse("12")
const resultTwo = hoursSchema.parse("25")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with hours validator
const hoursSchema = a.string().hours()

// validate & parse the string
const resultOne = hoursSchema.parse("12")
const resultTwo = hoursSchema.parse("25")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: '12' }

{
  errors: [
    {
      reason: 'Value must be a valid hours',
      value: '25',
    }
  ]
}
```

## `weekday()`

The `weekday` validator checks if the string is a valid weekday.

::: code-group

```typescript
// define a schema for string with weekday validator
const weekdaySchema = a.string().weekday()

// validate & parse the string
const resultOne = weekdaySchema.parse("monday")
const resultTwo = weekdaySchema.parse("Mon")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with weekday validator
const weekdaySchema = a.string().weekday()

// validate & parse the string
const resultOne = weekdaySchema.parse("monday")
const resultTwo = weekdaySchema.parse("Mon")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'monday' }

{
  errors: [
    {
      reason: 'Value must be a valid weekday',
      value: 'Mon',
    }
  ]
}
```

## `timezone()`

The `timezone` validator checks if the string is a valid timezone.

::: code-group

```typescript
// define a schema for string with timezone validator
const timezoneSchema = a.string().timezone()

// validate & parse the string
const resultOne = timezoneSchema.parse("Asia/Dhaka")
const resultTwo = timezoneSchema.parse("Asia")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with timezone validator

const timezoneSchema = a.string().timezone()

// validate & parse the string
const resultOne = timezoneSchema.parse("Asia/Dhaka")
const resultTwo = timezoneSchema.parse("Asia")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'Asia/Dhaka' }

{
  errors: [
    {
      reason: 'Value must be a valid timezone',
      value: 'Asia',
    }
  ]
}
```

## `base()`

The `base` validator checks if the string is a valid base.

::: code-group

```typescript
// define a schema for string with base validator
const baseSchema = a.string().base()

// validate & parse the string
const resultOne = baseSchema.parse("d41d8cd98f00b204e9800998ecf8427e")
const resultTwo = baseSchema.parse("d41d8cd98f00b204e9800998ecf8427")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with base validator
const baseSchema = a.string().base()

// validate & parse the string
const resultOne = baseSchema.parse("d41d8cd98f00b204e9800998ecf8427e")
const resultTwo = baseSchema.parse("d41d8cd98f00b204e9800998ecf8427")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'd41d8cd98f00b204e9800998ecf8427e' }

{
  errors: [
    {
      reason: 'Value must be a valid base',
      value: 'd41d8cd98f00b204e9800998ecf8427',
    }
  ]
}
```

## `contains()`

The `contains` validator checks if the string contains a specific substring.

::: code-group

```typescript
// define a schema for string with contains validator
const containsSchema = a.string().contains("hello")

// validate & parse the string
const resultOne = containsSchema.parse("hello world")
const resultTwo = containsSchema.parse("world")

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with contains validator
const containsSchema = a.string().contains("hello")

// validate & parse the string
const resultOne = containsSchema.parse("hello world")
const resultTwo = containsSchema.parse("world")

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'hello world' }

{
  errors: [
    {
      reason: 'Value must contain "hello"',
      value: 'world',
    }
  ]
}
```

## `magnetUri()`

The `magneturi` validator checks if the string is a valid Magnet URI.

::: code-group

```typescript
// define a schema for string with magneturi validator
const magnetUriSchema = a.string().magneturi()

// validate & parse the string
const resultOne = magnetUriSchema.parse(
  "magnet:?xt=urn:btih:1220a7b4e4e0f4f9d4f9d4f9d4f9d4f9d4f9d4f9"
)
const resultTwo = magnetUriSchema.parse(
  "magnet:?xt=urn:btih:1220a7b4e4e0f4f9d4f9d4f9d4f9d4f9d4f01234"
)

console.log(resultOne, resultTwo)
```

```javascript
// define a schema for string with magneturi validator
const magnetUriSchema = a.string().magneturi()

// validate & parse the string
const resultOne = magnetUriSchema.parse(
  "magnet:?xt=urn:btih:1220a7b4e4e0f4f9d4f9d4f9d4f9d4f9d4f9d4f9"
)
const resultTwo = magnetUriSchema.parse(
  "magnet:?xt=urn:btih:1220a7b4e4e0f4f9d4f9d4f9d4f9d4f9d4f01234"
)

console.log(resultOne, resultTwo)
```

:::

**Output**

```bash
{ value: 'magnet:?xt=urn:btih:1220a7b4e4e0f4f9d4f9d4f9d4f9d4f9d4f9d4f9' }

{
  errors: [
    {
      reason: 'Value must be a valid Magnet URI',
      value: 'magnet:?xt=urn:btih:1220a7b4e4e0f4f9d4f9d4f9d4f9d4f9d4f01234',
    }
  ]
}
```

## Conclusion

This is the end of the string schema documentation. We have covered all the available validators and the default behavior of the string schema. You can raise an issue on the [GitHub repository](https://github.com/mahabubx7/akar) if you have any questions or suggestions or discovered bugs.
