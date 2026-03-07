import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

// ESM equivalent of __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// vite-plugin-prerender is a CJS module; use createRequire to bridge ESM ↔ CJS
const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-require-imports
const VitePluginPrerender = require("vite-plugin-prerender");

// All public routes that Google should index
const PRERENDER_ROUTES = ["/", "/about", "/services", "/loans", "/partners", "/contact"];

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // Generates a static index.html for each route at build time.
        // This lets Googlebot "see" real HTML content without executing JS,
        // making all pages instantly crawlable and indexable.
        VitePluginPrerender({
            // Absolute path required — the plugin's internal express server
            // needs it to correctly serve built assets for rendering.
            staticDir: path.resolve(__dirname, "dist"),
            routes: PRERENDER_ROUTES,
            // Wait for React to fully render before capturing the HTML snapshot
            captureAfterTime: 2000,
        }),
    ],
    publicDir: "./public",
    // IMPORTANT: "/" not "./" — relative base breaks asset loading when
    // Googlebot or users visit subpages directly (e.g. /about, /services).
    base: "/",
    css: {
        postcss: {
            plugins: [tailwind()],
        },
    },
    build: {
        target: "es2015",
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
