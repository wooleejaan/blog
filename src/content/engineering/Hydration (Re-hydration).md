---
title: 'Hydration (Re-hydration)'
description: 'Introduction to the concept of hydration (re-hydration)'
pubDate: 'May 01 2024'
updatedDate: 'May 05 2024'
---

Hydration (or re-hydration) is the process of attaching JavaScript event handlers to static HTML elements rendered by the server, transforming them into an interactive web page. Initially, the server sends the HTML to the client, and then the JavaScript bundle is loaded to bind each DOM node.

Hydration directly affects the time it takes for the page to become interactive after the initial render, significantly impacting the user experience. Therefore, improving hydration performance can speed up the delivery of initial content and the time to interactive (TTI).

##### Various Technical Approaches to Improve Hydration Performance

To swiftly deliver web pages to users, several technical strategies (or ideas) can be employed:

- **Streaming Server-Side Rendering**: This involves sending server-rendered HTML to the client in small chunks and progressively rendering it on the client side. This can enhance the initial render speed.

- **Progressive Hydration**: Assign priorities during the hydration process based on importance, delaying the hydration of lower-priority parts to shorten the TTI.

- **Partial Hydration**: An extension of Progressive Hydration, where only specific areas are hydrated. Examples include 'Island Architecture' and 'React Server Components'.
  ![alt text](/images/hydration.png)

- **Trisomorphic Rendering**: Using a Service Worker to share templates or routing code between the server, client, and Service Worker, implementing Streaming Server-Side Rendering within the Service Worker.

##### References

<a href="https://www.patterns.dev/react/progressive-hydration" target="_blank">Progressive Hydration</a><br>
<a href="https://web.dev/articles/tti" target="_blank">Time to Interactive (TTI)</a><br>
<a href="https://www.gatsbyjs.com/docs/conceptual/partial-hydration/" target="_blank">Partial Hydration</a><br>
<a href="https://web.dev/articles/rendering-on-the-web" target="_blank">Rendering on the Web</a><br>
<a href="https://www.linkedin.com/pulse/reactjs-hydration-what-why-matters-your-web-projects-shourav-rahman/" target="_blank">React.js Hydration: What It Is and Why It Matters for Your Web Development Projects</a><br>
<a href="https://blog.logrocket.com/react-hydration-pre-rendered-html/" target="_blank">A look at React hydration and pre-rendered HTML</a><br>
<a href="https://www.gatsbyjs.com/docs/conceptual/react-hydration/" target="_blank">Understanding React Hydration</a><br>
<a href="https://react.dev/reference/react-dom/client/hydrateRoot" target="_blank">hydrateRoot</a><br>
