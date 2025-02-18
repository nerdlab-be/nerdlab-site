import liveReload from "vite-plugin-live-reload";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
import path from 'path'
import dotenv from 'dotenv'

// Load .env file from craft folder
dotenv.config({ path: path.resolve(__dirname, './.env') })

// Match ports in .ddev/config.yaml and config/vite.php
const port = 5173
const origin = `${process.env.PRIMARY_SITE_URL}:${port}`

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    manifest: true,
    outDir: "./web/dist/",
    rollupOptions: {
      input: {
        main: "./src/js/main.js",
        mutation: "./src/js/mutation.js",
      },
    },
  },
  server: {
    // Special address that respond to all network requests
    host: '0.0.0.0',
    // Use a strict port because we have to hard code this in vite.php
    strictPort: true,
    // This is the port running "inside" the Web container
    // It's the same as container_port in .ddev/config.yaml
    port: port,
    // Setting a specific origin ensures that your fonts & images load
    // correctly. Assumes you're accessing the front-end over https
    origin: origin,
    cors: true
  },
  plugins: [
    liveReload("./templates/**/*"),
    legacy({
      targets: ["defaults"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    // critical({
    //   criticalUrl: process.env.PRIMARY_SITE_URL,
    //   criticalBase: "./web/dist/criticalcss/",
    //   criticalPages: [
    //     { uri: "", template: "index" }
    //   ],
    //   criticalConfig: {
    //     ignore: {
    //       atrule: ['@font-face'],
    //     }
    //   },
    // }),
    viteCompression(),
  ],
});