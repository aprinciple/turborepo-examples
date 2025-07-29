# Monorepo with Next.js, Fastify, and TypeScript

This is a custom monorepo setup powered by Turborepo and `bun`. It includes a Next.js frontend, a Fastify backend, and shared internal packages for a consistent and scalable development experience.

## What's inside?

This Turborepo includes the following packages and applications:

## Install
```bash
npx degit github:aprinciple/turborepo-examples/next-tailwind-fastify-prisma my-project
cd my-project
npm install
```
or bun, pnpm, yarn, etc.

```bash
bunx degit github:aprinciple/turborepo-examples/next-tailwind-fastify-prisma my-project
cd my-project
bun install
```

### Applications

- `apps/web`: A [Next.js](https://nextjs.org/) application for the user interface.
- `apps/backend`: A [Fastify](https://www.fastify.io/) application serving as the backend API.

### Packages

- `packages/typescript-config`: Contains the shared `tsconfig.json` configurations used across the monorepo. This ensures consistent TypeScript rules for all parts of the project. We have base configs for Next.js, Node.js, and environment-agnostic libraries.
- `packages/schemas`: A shared package for data validation schemas using [Valibot](https://valibot.dev/). These schemas are used by both the `web` and `backend` to ensure data consistency.

### Tooling

This monorepo is configured with modern, high-performance tooling:

- [Turborepo](https://turborepo.com/): For high-performance build system and monorepo management.
- [Bun](https://bun.sh/): Used as the package manager for speed and efficiency.
- [TypeScript](https://www.typescriptlang.org/): For robust static type checking.
- [Biome](https://biomejs.dev/): For extremely fast code linting and formatting, replacing ESLint and Prettier.
- [tsup](https://tsup.egoist.dev/): For bundling shared packages like `@repo/schemas`.
- [Syncpack](https://jamiemason.github.io/syncpack/): For maintaining consistent dependency versions across workspaces.

## Architecture & Best Practices

### Dependency Management Strategy

This monorepo follows **best practices for optimal Turborepo caching** by distributing dependencies across workspaces:

- **Global tools** (`turbo`, `biome`) are installed in the root `package.json`
- **Workspace-specific dependencies** (`typescript`, `@types/*`, framework-specific packages) are installed in each workspace's `package.json`
- **Shared dependencies** with identical versions are automatically hoisted by the package manager
- **Different versions** of the same package are isolated to their respective workspaces

This approach ensures:
- ✅ **Optimal cache invalidation**: Changes to web dependencies don't affect backend cache
- ✅ **Isolated workspace builds**: Each workspace only rebuilds when its own dependencies change  
- ✅ **Efficient storage**: Identical dependency versions are automatically deduplicated

### Dependency Version Management

We use [Syncpack](https://jamiemason.github.io/syncpack/) to ensure consistent dependency versions across all workspaces:

- **Automatic detection** of version mismatches between packages
- **Dependency auditing** to maintain consistency across the monorepo
- **Zero-installation** usage via `bunx` - no need to install syncpack as a dependency

Available commands:
```bash
bun run sync:check    # List all dependencies and their versions
bun run sync:lint     # Check for version inconsistencies and formatting issues  
bun run sync:fix      # Automatically fix dependency version mismatches
bun run sync:format    # Format and sort package.json files
bun run sync:all       # Fix versions + format files (recommended)
```

### Shared Code Pattern

The `@repo/schemas` package demonstrates our shared code pattern:
- Built with `tsup` for both ESM and CommonJS outputs
- Used by both web and backend for consistent data validation
- Automatically rebuilt when imported by dependent workspaces

## Getting Started

To get started with this monorepo, follow these steps:

1.  **Install dependencies:**
    ```sh
    bun install
    ```
2.  **Start development servers:**
    This command will start the development servers for both `web` and `backend` concurrently.
    ```sh
    bun dev
    ```

## Available Scripts

### Development

- `bun dev`: Starts the development servers for all applications.
- `bun dev --filter=web`: Starts the development server for only the web application.
- `bun dev --filter=backend`: Starts the development server for only the backend application.

### Build

- `bun build`: Builds all applications and packages for production.
- `bun build --filter=web`: Builds only the web application.
- `bun build --filter=backend`: Builds only the backend application and the shared packages it depends on.

### Linting and Formatting

- `bun lint`: Checks for linting errors across the entire monorepo using Biome.
- `bun lint:fix`: Automatically fixes fixable linting errors.
- `bun format`: Formats all files in the project using Biome.

### Type Checking

- `bun check-types`: Runs the TypeScript compiler to check for type errors in all packages.

### Dependency Management

- `bun run sync:check`: Lists all dependencies and their versions across workspaces.
- `bun run sync:lint`: Checks for dependency version inconsistencies and formatting issues.
- `bun run sync:fix`: Automatically fixes dependency version mismatches.
