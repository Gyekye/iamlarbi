import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import Markdown from "vite-plugin-md"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Markdown()],
  // include markdown files in assetsInclude
  assetsInclude: ["**/*.md"],
})
