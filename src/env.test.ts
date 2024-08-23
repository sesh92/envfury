import assert from "assert";
import test from "node:test";

import {
  maybeEnv,
  maybeParseEnv,
  mustEnv,
  mustEnvOrElse,
  mustParseEnv,
  mustParseEnvOrElse,
} from ".";

test("mustParseEnvOrElse should return parsed value if env variable is set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  process.env[TEST_ENV_KEY] = "42";
  const result = mustParseEnvOrElse(TEST_ENV_KEY, Number, () => 0);
  assert.equal(result, 42);
  delete process.env[TEST_ENV_KEY];
});

test("mustParseEnvOrElse should return other value if env variable is not set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  const result = mustParseEnvOrElse(TEST_ENV_KEY, Number, () => 0);
  assert.equal(result, 0);
});

test("mustParseEnv should return parsed value if env variable is set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  process.env[TEST_ENV_KEY] = "true";
  const result = mustParseEnv(TEST_ENV_KEY, (val) => val === "true");
  assert.equal(result, true);
  delete process.env[TEST_ENV_KEY];
});

test("mustParseEnv should throw error if env variable is not set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  assert.throws(() => mustParseEnv(TEST_ENV_KEY, Number), {
    message: `${TEST_ENV_KEY} env var is not set`,
  });
});

test("mustEnv should return value if env variable is set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  process.env[TEST_ENV_KEY] = "some value";
  const result = mustEnv(TEST_ENV_KEY);
  assert.equal(result, "some value");
  delete process.env[TEST_ENV_KEY];
});

test("mustEnv should throw error if env variable is not set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  assert.throws(() => mustEnv(TEST_ENV_KEY), {
    message: `${TEST_ENV_KEY} env var is not set`,
  });
});

test("maybeParseEnv should return parsed value if env variable is set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  process.env[TEST_ENV_KEY] = "100";
  const result = maybeParseEnv(TEST_ENV_KEY, Number, 50);
  assert.equal(result, 100);
  delete process.env[TEST_ENV_KEY];
});

test("maybeParseEnv should return default value if env variable is not set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  const result = maybeParseEnv(TEST_ENV_KEY, Number, 50);
  assert.equal(result, 50);
});

test("maybeEnv should return value if env variable is set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  process.env[TEST_ENV_KEY] = "hello";
  const result = maybeEnv(TEST_ENV_KEY, "default");
  assert.equal(result, "hello");
  delete process.env[TEST_ENV_KEY];
});

test("maybeEnv should return default value if env variable is not set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  const result = maybeEnv(TEST_ENV_KEY, "default");
  assert.equal(result, "default");
});

test("mustEnvOrElse should return value if env variable is set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  process.env[TEST_ENV_KEY] = "world";
  const result = mustEnvOrElse(TEST_ENV_KEY, () => "default");
  assert.equal(result, "world");
  delete process.env[TEST_ENV_KEY];
});

test("mustEnvOrElse should return other value if env variable is not set", () => {
  const TEST_ENV_KEY = "TEST_ENV_KEY";
  const result = mustEnvOrElse(TEST_ENV_KEY, () => "default");
  assert.equal(result, "default");
});
