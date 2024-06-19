import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  server:{
    port: 3000
  },
  plugins: [tailwind()],
});
