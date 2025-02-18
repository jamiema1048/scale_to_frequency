import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/scale_to_frequency/",
  plugins: [react()],
  server: {
    port: 1140,
  },
});
