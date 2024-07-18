import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      '@api': `${path.resolve(__dirname, "./src/api/")}`,
      '@components': `${path.resolve(__dirname, "./src/components/")}`,
      '@constants': `${path.resolve(__dirname, "./src/constants/")}`,
      '@contexts': `${path.resolve(__dirname, "./src/contexts/")}`,
      '@helpers': `${path.resolve(__dirname, "./src/helpers/")}`,
      '@hooks': `${path.resolve(__dirname, "./src/hooks/")}`,
      '@static': `${path.resolve(__dirname, "./src/static/")}`,
      '@views': `${path.resolve(__dirname, "./src/views/")}`,
    },
  }
});