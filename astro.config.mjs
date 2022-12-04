import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import purgecss from 'astro-purgecss';
import compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://gdscsjec.in/",
  integrations: [
  tailwind({
    config: {
      applyBaseStyles: false,
    },
  }),  
  purgecss({
    fontFace: true,
    keyframes: true,
    safelist: ['random', 'yep', 'button', /^nav-/],
    blocklist: ['usedClass', /^nav-/]
  }), 
  compress({
    css: true,
    html: true,
    js: true,
    img: true,
    svg: false
  }),
  sitemap(),
  preact(),
  solidJs(),
  image()
],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
      noExternal: ["solid-bottomsheet", "solid-headless", "solid-use"]
    }
  }
});
