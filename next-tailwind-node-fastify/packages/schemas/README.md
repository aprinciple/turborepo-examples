# @repo/schemas

Shared data validation schemas using [Valibot](https://valibot.dev/) for consistent data validation across web and backend.

## Purpose

This package provides:
- ✅ **Type-safe validation schemas** for API requests/responses
- ✅ **Consistent data models** shared between web and backend
- ✅ **Runtime validation** with detailed error messages
- ✅ **TypeScript type inference** from schemas

## Usage

### Import schemas

```typescript
import { UserSchema } from '@repo/schemas';
import { safeParse } from 'valibot';

// Validate data
const result = safeParse(UserSchema, userData);

if (result.success) {
  console.log('Valid user:', result.output);
} else {
  console.log('Validation errors:', result.issues);
}
```

### Adding new schemas

1. Create your schema in `src/index.ts`:

```typescript
import { object, string, email, minLength } from 'valibot';

export const NewSchema = object({
  field: pipe(string(), minLength(1, 'Field is required')),
  email: pipe(string(), email('Invalid email format')),
});
```

2. Export from `src/index.ts`:

```typescript
export { NewSchema } from './schemas/new-schema';
```

3. Build the package:

```bash
# From monorepo root
bun build --filter=schemas
```

## Development

### Building

```bash
# Development build with watch mode
bun dev

# Production build
bun build
```

### Adding Dependencies

Install validation-related dependencies in this package:

```bash
# From monorepo root
bun add <package> --filter=schemas
```

## Architecture

- **Built with tsup**: Outputs both ESM and CommonJS for maximum compatibility
- **TypeScript**: Full type safety with declaration files
- **Valibot**: Lightweight, performant validation library
- **Automatic rebuilds**: Turborepo rebuilds this package when imported by apps 