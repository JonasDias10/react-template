import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./");

  const PORT = Number(env.VITE_PORT) || 3000;

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: PORT
    },
    build: {
      outDir: "build"
    }
  };
});
