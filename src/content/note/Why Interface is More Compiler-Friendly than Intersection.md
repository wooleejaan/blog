---
title: 'Why Interface is More Compiler-Friendly than Intersection'
description: 'Understanding why using interfaces is more compiler-friendly than intersections in TypeScript'
pubDate: 'May 05 2024'
---

#### Writing Code That's Easy to Compile

```ts
import React from 'react'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  extraProp: string
}
```

```ts
import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  extraProp: string
}
```

TypeScript and its compiler (tsc) are known for their performance, but there's a noticeable difference in compile times between these two code snippets. Using `interface extends` is slightly faster than using `&` for intersections. This doesn't mean that `interface` is faster than `type` in general, but in this specific context, it holds true.

Here are some reasons why:

- **Flat Object Type Creation**: `interface` creates a single flat object type and detects property conflicts, whereas intersection types recursively merge properties, potentially creating unnecessary types.
- **Consistency**: Interfaces have a long-standing presence in programming due to their consistency and reliability. They are particularly powerful when writing extensible, object-oriented code. Intersections, on the other hand, can be less predictable.
- **Caching**: Interfaces benefit from being cached in type relations, whereas intersection types are not cached and are checked thoroughly each time.

There are additional practices for writing compiler-friendly code:

- **Type Annotations**: Adding type annotations can significantly reduce the work the compiler has to do in type inference.
- **Base Types for Unions**: Using base types for union types can improve performance.

#### When Not to Optimize for Compiler Ease

While intersections can be less compiler-friendly, they are effective for precisely describing complex type relationships. When you need to express intricate type combinations accurately, intersections are a powerful tool.

#### References

<a href="https://github.com/microsoft/TypeScript/wiki/Performance" target="_blank">TypeScript Performance Wiki</a><br>
<a href="https://johnaaronnelson.com/prefer-type/" target="_blank">Prefer type over interface</a><br>
<a href="https://www.totaltypescript.com/react-apps-ts-performance" target="_blank">This Pattern Will Wreck Your React App's TS Performance</a><br>
