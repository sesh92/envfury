# envfury

This package provides convenient utilities for working with environment variables in Node.js. It allows you to safely retrieve, parse, and handle environment variable values with support for default values and custom handlers

## Installation

### npm

```bash
npm install envfury
```

### yarn

```bash
yarn add envfury
```

## Usage

### Core Functions

#### `mustParseEnvOrElse`

Returns the parsed value of an environment variable. If the variable is not set, it returns a default value.

```typescript
import { mustParseEnvOrElse } from "envfury";

const value: number = mustParseEnvOrElse("PORT", Number, () => 3000);
console.log(value); // Outputs the value of PORT or 3000 if the variable is not set.
```

#### `mustParseEnv`

Returns the parsed value of an environment variable. If the variable is not set, it throws an error.

```typescript
import { mustParseEnv } from "envfury";

const value: number = mustParseEnv("PORT", Number);
console.log(value); // Outputs the value of PORT or throws an error if the variable is not set.
```

#### `mustEnv`

Returns the string value of an environment variable. If the variable is not set, it throws an error.

```typescript
import { mustEnv } from "envfury";

const value: string = mustEnv("API_KEY");
console.log(value); // Outputs the value of API_KEY or throws an error if the variable is not set.
```

#### `maybeParseEnv`

Returns the parsed value of an environment variable. If the variable is not set, it returns a default value.

```typescript
import { maybeParseEnv } from "envfury";

const value: number = maybeParseEnv("TIMEOUT", Number, 5000);
console.log(value); // Outputs the value of TIMEOUT or 5000 if the variable is not set.
```

#### `maybeEnv`

Returns the string value of an environment variable. If the variable is not set, it returns a default value.

```typescript
import { maybeEnv } from "envfury";

const value: string = maybeEnv("ENV", "development");
console.log(value); // Outputs the value of ENV or 'development' if the variable is not set.
```

#### `mustEnvOrElse`

Returns the string value of an environment variable. If the variable is not set, it returns a value provided by a fallback function.

```typescript
import { mustEnvOrElse } from "envfury";

const value: string = mustEnvOrElse("HOST", () => "localhost");
console.log(value); // Outputs the value of HOST or 'localhost' if the variable is not set.
```

## Inspiration

This package is inspired by a similar crate available for Rust, which provides utilities for working with environment variables. The goal is to bring the same level of convenience and safety to Node.js development.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/sesh92/envfury/blob/master/MIT_LICENSE.txt) file for details.
