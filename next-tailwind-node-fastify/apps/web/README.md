# Web Application

This is a [Next.js](https://nextjs.org) application that serves as the web interface for our monorepo.

## Development

To start the development server for this application, run the following command **from the root of the monorepo**:

```bash
bun dev --filter=web
```

This will start the Next.js development server, typically on [http://localhost:3000](http://localhost:3000). The page will auto-update as you edit the files.

### Building

To build the application for production, run the following command **from the root of the monorepo**:

```bash
bun build --filter=web
```

The production build will be located in the `.next` directory.

## Tooling

- **Linting & Formatting**: Code style is managed by [Biome](https://biomejs.dev/) from the root of the monorepo. Run `bun lint` or `bun format` in the root directory.
- **TypeScript**: This application uses the shared TypeScript configuration from `@repo/typescript-config/nextjs.json`.
- **Shared Schemas**: Data validation schemas are imported from the `@repo/schemas` package to ensure consistency with the backend.
