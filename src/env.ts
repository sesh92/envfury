export const mustParseEnvOrElse = <T>(
  key: string,
  parse: (value: string) => T,
  other: () => T
): T => {
  const value = process.env[key];
  if (typeof value === "undefined") {
    return other();
  }
  return parse(value);
};

export const mustParseEnv = <T>(key: string, parse: (value: string) => T): T =>
  mustParseEnvOrElse(key, parse, () => {
    throw new Error(`${key} env var is not set`);
  });

export const mustEnv = (key: string): string => mustParseEnv(key, (val) => val);

export const maybeParseEnv = <T>(
  key: string,
  parse: (value: string) => T,
  def: T
): T => mustParseEnvOrElse(key, parse, () => def);

export const maybeEnv = (key: string, def: string): string =>
  mustParseEnvOrElse(
    key,
    (val) => val,
    () => def
  );

export const mustEnvOrElse = (key: string, other: () => string): string =>
  mustParseEnvOrElse(key, (val) => val, other);
