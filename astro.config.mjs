import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
// https://caseyjamesperno.com/blog/astro-header-anchors/
export default defineConfig({
  site: "https://www.augustarchives.kr/",
  output: "static",
  adapter: vercel(),
  build: {
    format: "directory",
    trailingSlash: "always",
  },
  integrations: [sitemap(), react(), mdx()],
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
