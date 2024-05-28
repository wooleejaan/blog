---
title: 'intersection과 interface'
description: 'intersection보다 interface가 컴파일 친화적인 코드인 이유'
pubDate: 'May 05 2024'
---

#### 컴파일하기 쉬운 코드를 작성하는 것

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

타입스크립트 언어와 컴파일러(tsc)의 성능은 빠른 편이지만, 위 두 코드는 컴파일 시간에 차이를 보인다.<br>
컴파일 단계에서 `interface extends`가 `&` 보다 약간 더 빠르다. (`interface`가 `type` 보다 빠른 게 아니다)

몇 가지 특징을 정리하면 다음과 같다.

- `interface`는 단일 flat object type을 생성하고 속성 충돌을 감지한다. 반면, 인터섹션 타입은 재귀적으로 속성들을 병합한다. 이 과정에서 불필요한 타입을 생성하기도 한다.
- 인터페이스는 일관성이 있다. 모든 프로그래밍 역사에서 인터페이스가 빠지지 않는 것도 이런 이유다. 확장성과 객체 지향적으로 코드를 작성할 때 인터페이스는 강력하다. 반면 인터섹션은 일관적이지 않다.
- 타입 관계에 있어, `interface`는 캐시되지만 인터섹션 타입은 캐시되지 않는다. 타입 체크 과정에서 인터섹션의 모든 요소는 캐시되지 않고 모두 검사된다.

이외에도 컴파일하기 쉬운 코드를 작성하는 여러 방법이 존재한다.

- 타입 주석(type annotations)을 추가하면 컴파일러가 추론해야 하는 작업을 상당히 줄일 수 있다.
- union 타입에 대해서는 base type을 활용하는 것이 좋다.
- ...

#### 컴파일하기 쉬운 코드를 작성하지 않는 것

인터섹션은 하위 type 간의 관계를 정확히 파악하는 데 있어 효과적이다.<br>
보다 복잡한 타입 조합을 정확히 표현할 때, 인터섹션은 강력한 힘을 발휘한다.

#### 참고 자료

[TypeScript Performance Wiki](https://github.com/microsoft/TypeScript/wiki/Performance)<br>
[Prefer type over interface](https://johnaaronnelson.com/prefer-type/)<br>
[This Pattern Will Wreck Your React App's TS Performance](https://www.totaltypescript.com/react-apps-ts-performance)
