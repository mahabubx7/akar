/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Number validators
 * @since 1.0.0-beta
 * @license MIT
 */

// Number: check the type
export const isNumber = (input: unknown): input is number =>
  typeof input === "number" && !isNaN(input)

// Integer: check if the number is an integer
export const isInteger = (input: number): boolean => Number.isInteger(input)

// Float: check if the number is a float
export const isFloat = (input: number): boolean =>
  /^\d+\.\d+$/.test(input.toString())

// Binary: check if the number is a binary number
export const isBinary = (input: number | string): boolean =>
  /^[01]+$/.test(input.toString())

// Octal: check if the number is an octal number
export const isOctal = (input: number): boolean =>
  /^[0-7]+$/.test(input.toString())

// Hex: check if the number is a hexadecimal number
export const isHex = (input: number): boolean =>
  /^[0-9A-F]+$/i.test(input.toString())

// Positive: check if the number is positive
export const isPositive = (input: number): boolean => input >= 0

// Negative: check if the number is negative
export const isNegative = (input: number): boolean => input < 0

// Min: check if the number is greater than or equal to the min value
export const min = (input: number, min: number): boolean => input >= min

// Max: check if the number is less than or equal to the max value
export const max = (input: number, max: number): boolean => input <= max

// Range: check if the number is within the range
export const range = (input: number, min: number, max: number): boolean =>
  input >= min && input <= max

// Port: check if the number is a valid port number (0-65535)
export const isPort = (input: number): boolean =>
  isInteger(input) && range(input, 0, 65535)

// Odd: check if the number is odd
export const isOdd = (input: number): boolean => input % 2 !== 0

// Even: check if the number is even
export const isEven = (input: number): boolean => input % 2 === 0

// Divisible: check if the number is divisible by the divisor
export const isDivisible = (input: number, divisor: number): boolean =>
  input % divisor === 0

// Prime: check if the number is a prime number
export const isPrime = (input: number): boolean => {
  if (input < 2) return false
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) return false
  }
  return true
}

// Perfect: check if the number is a perfect number
export const isPerfect = (input: number): boolean => {
  let sum = 0
  for (let i = 1; i < input; i++) {
    if (input % i === 0) sum += i
  }
  return sum === input
}
