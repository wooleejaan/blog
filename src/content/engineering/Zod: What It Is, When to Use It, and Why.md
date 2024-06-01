---
title: 'Zod: What It Is, When to Use It, and Why'
description: 'Understanding Zod in TypeScript Development'
pubDate: 'May 05 2024'
---

Zod is a powerful data validation and type inference library for TypeScript environments.

##### Trust: Enhancing Input Reliability with Zod

In JavaScript applications, you deal with various inputs and outputs, which inherently involve a sort of contract. However, JavaScript lacks built-in enforcement of these contracts.

TypeScript addresses this partially by providing static type checking, but it doesn't guarantee type safety at runtime. Traditionally, developers have tackled this issue by using separate runtime validation libraries alongside TypeScript, leading to potential code duplication.

Zod solves this problem with Zod Schema. It allows you to define TypeScript types and simultaneously handle runtime data validation using a single schema.

For example, defining a schema with Zod lets you manage both TypeScript types and runtime validation seamlessly:

```ts
import { z } from 'zod'

// Zod schema
const colorSchema = z.object({
  color: z.string(),
  background: z.array(z.string()),
})

// TypeScript type
export type IColor = z.infer<typeof colorSchema>

// Create some color
const redColor: IColor = {
  color: 'red',
  background: ['white', 'black'],
}

// Run-time validation
console.log(colorSchema.parse(redColor))
```

##### Control: Robust Error Handling with Zod

Zod shines in its ability to detect and handle errors when data doesn't conform to the schema. It goes beyond simple error throwing, offering customizable error messages and additional handling mechanisms.

```ts
const schema = z.schema({
  name: z.string().min(3, { message: '이름은 최소 3자 이상이어야 합니다.' }),
  age: z.number().max(120, { message: '나이는 120세를 넘을 수 없습니다.' }),
  email: z.string().email({ message: '유효한 이메일 주소가 아닙니다.' }),
})
```

Here's another example illustrating Zod's error handling:

```ts
const schema = z.object({
  name: z.string(),
  age: z.number(),
})

const data = {
  name: 'John',
  age: '30', // age should be a number, but it's a string here
}

const parsedData = schema.safeParse(data)

if (parsedData.success) {
  console.log(parsedData.data) // { name: 'John', age: 30 }
} else {
  console.log('Data is invalid') // This will be executed because age is not a number
}
```

Zod also handles asynchronous data validation seamlessly:

```ts
const schema = z.object({
  name: z.string(),
  age: z.number(),
})

async function getData() {
  const data = await fetchData() // Assume this fetches data asynchronously
  const parsedData = await schema.safeParseAsync(data)

  if (parsedData.success) {
    console.log(parsedData.data) // { name: 'John', age: 30 }
  } else {
    console.log('Data is invalid')
  }
}
```

##### References

<a href="https://dev.to/jareechang/zod-the-next-biggest-thing-after-typescript-4phh" target="_blank">Zod: The Next Biggest thing after Typescript</a><br>
<a href="https://www.totaltypescript.com/when-should-you-use-zod" target="_blank">When should you use Zod?</a><br>
<a href="https://codedamn.com/news/javascript/zod-getting-started" target="_blank">Zod For Data Validation In TypeScript</a><br>
