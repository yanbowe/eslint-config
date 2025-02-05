# Soybean's eslint config presets

- Auto fix for formatting with prettier
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config
- default alias @ => src, ~ => ./ (root)

## Usage

### Install

```bash
pnpm add -D eslint @soybeanjs/eslint-config
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "@soybeanjs"
}
```

You don't need .eslintignore normally as it has been provided by the preset.

### change import alias

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~", "."],
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", "mts", ".d.ts"]
      }
    }
  }
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
