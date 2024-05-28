---
title: 'const assertions'
description: 'const assertions 기초'
pubDate: 'Apr 20 2024'
updatedDate: 'Apr 28 2024'
---

#### 불필요한 타입 생성을 줄이고, 값을 안전하게 사용하는 방법

"const assertions"는 타입스크립트의 특별한 타입 표기법이다.

`as const`라고 붙이면 타입스크립트에게 리터럴 타입으로 해당 값을 고정하도록 지시한다.<br>
컴파일러로 하여금 변수나 객체의 속성이 변하지 않는다는 걸 알려, 보다 더 엄격한 타입 검사를 가능하게 한다.

const assertions는 리터럴 값에만 사용할 수 있다.<br>
문자열과 숫자에 사용하면 타입을 좁힐 수 있으며, 이를 통해 불필요한 타입 생성을 막을 수 있다.

```ts
type Color = 'red' | 'green' | 'blue'
type Variant = 'light' | 'dark'

// type ColorVariant = `${Variant}-${Color}`라는 타입을 만들지 않아도 된다.
function createColorVariant(color: Color, variant: Variant) {
  return `${variant}-${color}` as const
}
```

객체에 as const를 사용하면, 모든 속성을 읽기 전용(readonly)로 변경하고 타입을 좁힌다. <br>
배열에 as const를 사용하면, 배열을 읽기 전용의 튜플(tuple)로 변경하고 타입을 좁힌다.

- 튜플은 본질적으로 순서가 지정된 값의 배열을 의미한다.

##### const assertions 활용해보기

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

Discriminated Union으로 작성된 위 ColorType을 기반으로 타입을 확장할 때, 코드의 의미가 불명확해지기 쉽다. 예를 들어, Red라는 인터페이스에서 type이 ColorType이어야 한다는 걸 알기 위해, 불필요하게 먼 길을 떠나야 할 수도 있다.

이때 const assertions로 코드를 명확하고 안전하게 작성할 수 있다.

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
  type: typeof COLOR_TYPE // 단순히 'red'라고 작성하는 것보다 직관적이고 안전하다.
  // ...
}
```

#### 참고 자료

<a href="https://www.omarileon.me/blog/typescript-as-const" target="_blank">Understanding ”As Const” in TypeScript</a>
