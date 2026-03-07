import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
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
