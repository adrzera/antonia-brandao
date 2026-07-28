// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Domínio de produção — gera canonical/OG absolutos.
  site: "https://antonia-brandao.vercel.app",

  build: {
    // Injeta todo o CSS no <head> — elimina o request bloqueante de render.
    inlineStylesheets: "always",
  },
});
