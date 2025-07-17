import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/click-and-cook/", // <-- your GitHub repo name
  plugins: [react()],
});
