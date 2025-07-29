# @repo/typescript-config

Shared TypeScript configuration files used across the monorepo for consistent type checking and compilation settings.

## Configurations

This package provides specialized TypeScript configs for different environments:

### `base.json`
Base configuration with common settings shared by all environments:
- Modern target: ES2022
- Strict type checking enabled
- Module resolution: bundler
- Common compiler options

### `nextjs.json`
Extends `base.json` with Next.js-specific settings:
- JSX support for React
- Next.js module resolution
- Incremental compilation
- App directory support

### `node.json`  
Extends `base.json` with Node.js-specific settings:
- ES2022 lib for server environments
- Source maps for debugging
- Comment removal for production builds

### `library.json`
Extends `base.json` for shared library packages:
- Declaration file generation (.d.ts)
- Declaration maps for editor support
- Clean environment-agnostic configuration

## Usage

In your workspace's `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "outDir": "dist",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src", "next-env.d.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## Available Configs

| Config | Use Case | Apps/Packages |
|--------|----------|---------------|
| `base.json` | Common base settings | All (via extends) |
| `nextjs.json` | Next.js applications | `apps/web` |
| `node.json` | Node.js applications | `apps/backend` |
| `library.json` | Shared packages | `packages/schemas` |

## Adding New Configs

1. Create new config file extending `base.json`:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    // Environment-specific options
  }
}
```

2. Document the config purpose and target environment
3. Update this README with the new configuration

## Architecture

- **Hierarchical inheritance**: All configs extend `base.json` for consistency
- **Environment-specific**: Each config optimized for its target runtime
- **JSON Schema validation**: Full IntelliSense support in editors
- **Shared across workspaces**: Ensures consistent TypeScript behavior 