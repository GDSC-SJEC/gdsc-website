import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import purgecss from 'astro-purgecss';
import compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: "https://gdscsjec.in/",
  integrations: [
    tailwind({
    config: {
      path: "./tailwind.config.cjs"
    }
  }),
  sitemap(),
  AstroPWA({
    mode: 'development',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Google DSC SJEC',
      short_name: 'GDSC SJEC',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'favicons/apple-touch-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'favicons/apple-touch-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'favicons/apple-touch-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
    }
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
    svg: false,
  }),
],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
