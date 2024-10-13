/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Validation rule type
 * @since 1.0.0-beta
 * @license MIT
 */

export type ValidationRule<T> = (value: T | undefined) => boolean | string
