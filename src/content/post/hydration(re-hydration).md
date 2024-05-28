---
title: 'hydration(re-hydration)'
description: 'hydration(re-hydration) 기초 개념'
pubDate: 'May 01 2024'
updatedDate: 'May 05 2024'
---

hydration(또는 re-hydration)은 서버에서 렌더링된 정적 HTML 요소에 JavaScript 이벤트 핸들러를 부착하여 동적인 웹페이지로 만드는 과정을 말한다. 먼저 HTML을 클라이언트에 전달한 뒤, JavaScript 번들을 로드하고 각 DOM 노드에 바인딩하는 과정을 거친다.

hydration은 초기 렌더링 후 상호작용이 가능한 시점까지의 대기 시간과 직결되므로, 사용자 경험에 큰 영향을 미친다. 따라서 hydration 성능 개선을 통해 초기 콘텐츠 전달 속도와 상호작용 가능 시점을 앞당길 수 있다.

#### hydration의 성능을 개선할 수 있는 다양한 기술적 접근

빠르게 웹페이지를 유저에서 전달해야 한다는 목표 아래, 다양한 기술적 선택지(혹은 아이디어)가 존재한다.

- **Streaming Server-Side Rendering**: 서버에서 렌더링된 HTML을 작은 청크 단위로 클라이언트에 전송하고, 클라이언트에서 점진적으로 렌더링한다. 초기 렌더링 속도를 높일 수 있다.

- **Progressive Hydration**: hydration 과정에서 중요도에 따라 우선순위를 부여하고, 낮은 우선순위 부분의 hydration을 지연시켜 상호작용 가능 시점(TTI)을 단축한다.

- **Partial Hydration**: Progressive Hydration을 확장한 개념으로, 일부 영역만 hydration을 수행한다. 'Island Architecture' 혹은 'React Server Component'가 대표적인 예시다.
  ![alt text](/images/hydration.png)

- **Trisomorphic Rendering**: Service Worker를 활용하여 서버, 클라이언트, Service Worker 간 템플릿이나 라우팅 코드를 공유하고, Service Worker에서 Streaming Server-Side Rendering을 구현한다.

#### 참고 자료

<a href="https://www.patterns.dev/react/progressive-hydration" target="_blank">Progressive Hydration</a><br>
<a href="https://web.dev/articles/tti" target="_blank">Time to Interactive (TTI)</a><br>
<a href="https://www.gatsbyjs.com/docs/conceptual/partial-hydration/" target="_blank">Partial Hydration</a><br>
<a href="https://web.dev/articles/rendering-on-the-web" target="_blank">Rendering on the Web</a><br>
<a href="https://www.linkedin.com/pulse/reactjs-hydration-what-why-matters-your-web-projects-shourav-rahman/" target="_blank">React.js Hydration: What It Is and Why It Matters for Your Web Development Projects</a><br>
<a href="https://blog.logrocket.com/react-hydration-pre-rendered-html/" target="_blank">A look at React hydration and pre-rendered HTML</a><br>
<a href="https://www.gatsbyjs.com/docs/conceptual/react-hydration/" target="_blank">Understanding React Hydration</a><br>
<a href="https://react.dev/reference/react-dom/client/hydrateRoot" target="_blank">hydrateRoot</a><br>
