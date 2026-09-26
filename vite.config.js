import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(function (_a) {
    var mode = _a.mode;
    return ({
        plugins: [react()],
        base: mode === 'production' ? '/Portfolio_Blender/' : './',
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        preview: {
            port: 4173,
            host: '0.0.0.0',
        },
    });
});
