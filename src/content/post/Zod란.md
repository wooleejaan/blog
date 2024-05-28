---
title: 'Zod란'
description: 'Zod는 무엇이고 언제 왜 사용하는가'
pubDate: 'May 05 2024'
---

> Zod는 타입스크립트 개발 환경에서 사용할 수 있는 데이터 검증 및 타입 추론 라이브러리.

#### Trust : Zod는 input에 대한 신뢰성을 높이고 싶을 때 사용한다.

자바스크립트 애플리케이션에서는 다양한 입력과 출력이 존재한다.<br>
이러한 입력과 출력은 일종의 계약 관계를 가지지만, 자바스크립트 자체에는 강제성이 없다.

타입스크립트는 이를 부분적으로 해결해주지만, 런타임 환경에서는 타입 안정성을 보장하지 않는다.<br>
과거에는 별도의 런타임 데이터 검증 라이브러리와 타입스크립트를 함께 사용하는 방식으로 이 문제를 해결했지만, 이는 중복 코드를 유발할 수 있다.

Zod는 `Zod Schema`를 통해 이 문제를 해결한다. 하나의 스키마로 타입스크립트 타입을 정의하고, 동시에 런타임 환경에서의 데이터 검증도 처리할 수 있다.

예를 들어, 다음과 같이 스키마를 정의하면 타입스크립트 타입과 런타임 검증을 모두 처리할 수 있다.

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

#### Control : Zod는 강력한 에러 핸들링을 제공한다.

Zod를 사용하면 스키마와 다른 타입의 데이터가 애플리케이션에 들어왔을 때 바로 에러를 감지할 수 있다.<br>
또한, 에러를 단순히 던지는 것뿐만 아니라 에러 메시지를 커스터마이징하거나 추가 동작을 수행할 수 있다.

```ts
const schema = z.schema({
  name: z.string().min(3, { message: '이름은 최소 3자 이상이어야 합니다.' }),
  age: z.number().max(120, { message: '나이는 120세를 넘을 수 없습니다.' }),
  email: z.string().email({ message: '유효한 이메일 주소가 아닙니다.' }),
})
```

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

비동기 데이터도 당연히 처리할 수 있다.

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

#### 참고 자료

<a href="https://dev.to/jareechang/zod-the-next-biggest-thing-after-typescript-4phh" target="_blank">Zod: The Next Biggest thing after Typescript</a><br>
<a href="https://www.totaltypescript.com/when-should-you-use-zod" target="_blank">When should you use Zod?</a><br>
<a href="https://codedamn.com/news/javascript/zod-getting-started" target="_blank">Zod For Data Validation In TypeScript</a><br>
