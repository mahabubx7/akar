/**
 * Akar.js
 * (c) 2024, @mahabubx7
 * Boolean schema
 * @since 1.0.0-beta
 * @license MIT
 */

import { AkarBase } from "./base"

export class AkarBoolean extends AkarBase<boolean> {
  parse(input: any): {
    value?: boolean
    errors?: { field: string; reason: string; value?: any }[]
  } {
    if (typeof input !== "boolean") {
      return {
        errors: [
          {
            field: "boolean",
            reason: "Invalid type, expected boolean",
            value: input
          }
        ]
      }
    }
    return { value: input }
  }
}
