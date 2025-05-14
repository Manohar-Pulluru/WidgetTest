import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/widget.js'), // Entry point for the widget
      name: 'MyWidget', // Global variable name for UMD bundle
      fileName: (format) => `my-widget.${format}.js`, // Output file name
      formats: ['umd'], // UMD for broad compatibility
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Externalize React to reduce bundle size
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true, // Optional: for debugging
  },
})