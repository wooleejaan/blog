---
title: 'how the tsc(typescript compiler) compiles'
description: '타입스크립트 컴파일 과정'
pubDate: 'Apr 21 2024'
---

#### 타입스크립트 파일이 자바스크립트 파일로 변환되기까지

typescript compiler(이하 tsc)는 가장 먼저 tsconfig.json 파일을 읽고 프로젝트의 컴파일 옵션과 컴파일에 포함할 파일 목록을 결정한다. (exclude, include, files 등의 설정을 통해)

Pre-process Files 단계에서 (import, export 문을 기반으로) 모든 ts 파일의 의존성 그래프를 구성한다. 실제 컴파일할 파일 목록을 결정하는 단계이다.

Tokenize and Parse 단계에서 소스 코드를 최소 단위인 토큰으로 쪼개고, 토큰을 사용해 Abstract Syntax Tree(AST, 추상구문트리)를 생성한다. 이 과정에서 문법적 오류에 대한 초기 검사를 진행한다.

- scanner로 코드 문자열을 토큰으로 변환하고, parser를 통해 변환된 토큰을 기반으로 AST를 만들어 낸다.

Binding 단계에서 tsc의 [binder](https://github.com/microsoft/TypeScript/blob/main/src/compiler/binder.ts) 가 AST의 각 노드에 대한 Symbol(변수, 함수, 클래스 등)을 생성하고, 이를 통해 Scope와 Symbol 정보를 구축한다.

- identifiers를 symbols로 변환하는 과정을 포함한다.
- 데이터를 수집하는 과정에서, flow condition을 기반으로 flow container를 제작하고 여기에 노드의 타입을 저장해둔다.

Type Checking 단계에서 tsc의 [checker](https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts)는 Symbols와 AST를 사용해 실제 타입을 검사한다.

Emitting 단계에서 tsc의 [emitter](https://github.com/microsoft/TypeScript/blob/main/src/compiler/emitter.ts)는 최종적으로 AST를 기반으로 한 js 코드를 생성한다. tsconfig.json에서 설정한 js 버전에 맞게 .ts 파일을 .js 파일을 변환한다.

#### 참고 자료

[How the TypeScript Compiler Compiles - understanding the compiler internal](https://www.youtube.com/watch?v=X8k_4tZ16qU)<br>
[[Github] microsoft/TypeScript-Compiler-Notes](https://github.com/microsoft/TypeScript-Compiler-Notes)
