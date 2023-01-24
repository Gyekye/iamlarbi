import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  // include markdown files in assetsInclude
  assetsInclude: ["**/*.md"],
})
