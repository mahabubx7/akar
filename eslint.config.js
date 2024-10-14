import pluginJs from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["node_modules/", "dist/", "docs/", "playground/", "coverage/"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-control-regex": "off"
    }
  }
]
