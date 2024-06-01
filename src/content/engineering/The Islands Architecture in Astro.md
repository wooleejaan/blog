---
title: 'The Islands Architecture in Astro'
description: 'Understanding the Islands Architecture and its Purpose'
pubDate: 'May 31 2024'
---

##### The concept of Islands

The concept of Islands is deceptively simple: render HTML on the server, and inject placeholders or slots for interactive widgets that can then be "hydrated" on the client. This allows for reusing the server-rendered initial HTML.

This technique is also known as partial or selective hydration.

Traditional JavaScript frameworks lack the ability to selectively and strategically hydrate components. The Islands Architecture in Astro provides this capability out-of-the-box, using what’s known as the component islands pattern.

In Astro, an island refers to an interactive UI component.

##### Benefits of Islands

- `Performance`: The majority of your website is converted to fast, static HTML, and JavaScript is only loaded when necessary. Since JavaScript is one of the slowest assets to load per byte, every byte matters.
- `Parallel Loading`: Prioritizing what users see is crucial. Astro excels in this area, allowing you to easily configure when each component should be rendered, using <a href="https://docs.astro.build/en/reference/directives-reference/#client-directives" target="_blank">client directives</a>

##### References

<a href="https://jasonformat.com/islands-architecture/" target="_blank">Islands Architecture</a><br>
<a href="https://docs.astro.build/en/concepts/islands/" target="_blank">Astro Islands</a>
