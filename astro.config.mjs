import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  build: {
    format: "file"
  },
  integrations: [mdx(), sitemap(), pagefind(), react()],
  devToolbar: {
    enabled: false
  }
});