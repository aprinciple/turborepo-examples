# Backend Application

This is a [Fastify](https://www.fastify.io/) application that serves as the backend API for our monorepo.

## Development

To start the development server for this application, run the following command **from the root of the monorepo**:

```bash
bun dev --filter=backend
```

This will start the Fastify server in watch mode, typically on [http://localhost:3001](http://localhost:3001). The server will automatically restart when you make changes to the files.

### Building

To build the application for production, run the following command **from the root of the monorepo**:

```bash
bun build --filter=backend
```

The production build will be located in the `dist` directory. You can start the production server with `bun start --filter=backend`.

## Tooling

- **Linting & Formatting**: Code style is managed by [Biome](https://biomejs.dev/) from the root of the monorepo. Run `bun lint` or `bun format` in the root directory.
- **TypeScript**: This application uses the shared TypeScript configuration from `@repo/typescript-config/node.json`.
- **Shared Schemas**: Data validation schemas are imported from the `@repo/schemas` package to ensure consistency with the frontend.
