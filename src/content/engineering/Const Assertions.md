---
title: 'Const Assertions'
description: 'Basics of const assertions'
pubDate: 'Apr 20 2024'
updatedDate: 'Apr 28 2024'
---

##### How to Safely Use Values and Reduce Unnecessary Type Creation

"Const assertions" are a special type of notation in TypeScript.

By using `as const`, you tell TypeScript to fix the value as a literal type. This informs the compiler that the properties of the variable or object won't change, enabling stricter type checking.

Const assertions can only be used with literal values. When applied to strings and numbers, they narrow the type, which helps to avoid unnecessary type creation.

```ts
type Color = 'red' | 'green' | 'blue'
type Variant = 'light' | 'dark'

// There's no need to create a type like `ColorVariant = `${Variant}-${Color}`
function createColorVariant(color: Color, variant: Variant) {
  return `${variant}-${color}` as const
}
```

When you use `as const` with an object, it makes all properties read-only and narrows their types. When used with an array, it turns the array into a read-only tuple with narrowed types.

- A tuple essentially means an ordered array of values.

##### Using Const Assertions

```ts
type ColorType = 'red' | 'blue' | 'green'

interface ColorInterface {
  id: string
  type: ColorType
}

interface Red extends ColorInterface {
  type: 'red'
  // ...
}
```

When extending types based on a discriminated union like the `ColorType` above, the code's meaning can become unclear. For example, understanding that the `type` in the `Red` interface must be one of the `ColorType` values can require unnecessary digging.

Const assertions can make this code clearer and safer.

```ts
const COLOR_TYPE = {
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
} as const

type ColorType = (typeof COLOR_TYPE)[keyof typeof COLOR_TYPE]

interface ColorInterface {
  id: string
  type: ColorType
}

interface Red extends ColorInterface {
  type: typeof COLOR_TYPE // More intuitive and safer than just writing 'red'

  // ...
}
```

##### References

<a href="https://www.omarileon.me/blog/typescript-as-const" target="_blank">Understanding ”As Const” in TypeScript</a>
