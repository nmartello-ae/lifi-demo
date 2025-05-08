import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "node:url";
import { codecovVitePlugin } from "@codecov/vite-plugin";

const reportBundleSize =
  Boolean(process.env.BUNDLE_ANALYSIS) && Boolean(process.env.CODECOV_TOKEN);

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react({ tsDecorators: true }),
    svgr(),
    ...(reportBundleSize
      ? [
          codecovVitePlugin({
            enableBundleAnalysis: true,
            bundleName: `swap-usdl-${process.env.NODE_ENV}`,
            uploadToken: process.env.CODECOV_TOKEN,
          }),
        ]
      : []),
  ],
  server: {
    port: 3009,
  },
  build: {
    outDir: "./build",
    sourcemap: Boolean(process.env.APP_VERSION && process.env.DATADOG_API_KEY),
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
