import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
