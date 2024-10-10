export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: true; data: T | undefined }
  | { success: false; error: string }

export type PickFields<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type OmitFields<T, K extends keyof T> = Omit<T, K>
