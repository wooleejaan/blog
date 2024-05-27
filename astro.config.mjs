import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
// https://caseyjamesperno.com/blog/astro-header-anchors/
export default defineConfig({
  site: "https://example.com",
  build: {
    format: "file",
  },
  integrations: [sitemap(), pagefind(), react(), mdx()],
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: "vitesse-light",
    },
    gfm: false,
    extendDefaultPlugins: false,
    remarkPlugins: [remarkReadingTime, remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          content: {
            type: "text",
            value: "#",
          },
          headingProperties: {
            className: ["anchor"],
          },
          properties: {
            className: ["anchor-link"],
          },
        },
      ],
    ],
  },
});
