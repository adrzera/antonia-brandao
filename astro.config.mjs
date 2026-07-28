// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Defina o domínio de produção para gerar canonical/OG absolutos:
  // site: "https://seu-dominio.com",

  build: {
    // Injeta todo o CSS no <head> — elimina o request bloqueante de render.
    inlineStylesheets: "always",
  },
});
