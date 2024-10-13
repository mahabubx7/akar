export type ValidationRule<T> = (value: T | undefined) => boolean | string
