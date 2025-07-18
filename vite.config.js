import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/js/site.js',
                'resources/js/cp.js',
                'resources/css/cp.css',
            ],
            refresh: true,
        }),
    ],
    server: {
        ...(process.env?.VIRTUAL_HOST ? { host: "0.0.0.0" } : { host: "127.0.0.1" }),
        ...(process.env?.VIRTUAL_HOST ? { origin: `//${process.env.VIRTUAL_HOST}:8443` } : { }),
        port: 3000,
        strictPort: true,
        https: false,
        cors: true,
    },
});
