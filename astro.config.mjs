import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  build: {
    format: "file",
  },
  integrations: [
    sitemap(),
    pagefind(),
    react(),
    mdx({ remarkPlugins: [remarkToc] }),
  ],
  devToolbar: {
    enabled: false,
  },
  markdown: {
    extendDefaultPlugins: false,
    remarkPlugins: [remarkReadingTime],
  },
});
