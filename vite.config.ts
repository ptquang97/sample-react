import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    plugins: [react()],
    server: {
      port: 3000,
    },
  }
})
