import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
    alias: {
			"@components":path.resolve(__dirname, 'src/components'),
			"@stores": path.resolve(__dirname, 'src/stores'),
			"@utils": path.resolve(__dirname, 'src/utils'),
			"@supaTypes": path.resolve(__dirname, 'src/types')
		},
  },
})
