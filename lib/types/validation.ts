/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * @since 0.1.0-beta
 * @license MIT
 */

export type ValidationRule<T> = (value: T | undefined) => boolean | string
