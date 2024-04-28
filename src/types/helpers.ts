export type SnakeToCamelCase<S> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<SnakeToCamelCase<U>>}` : S

export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S

export type NestedTransform<T, U> = T extends object
  ? {
      [K in keyof T as U extends 'camel'
        ? SnakeToCamelCase<K & string>
        : U extends 'snake'
        ? CamelToSnakeCase<K & string>
        : never]: NestedTransform<T[K], U>
    }
  : T
