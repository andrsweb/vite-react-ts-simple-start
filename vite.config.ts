import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
		port: 3000
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/scss/common/vars.scss";`,
			},
		},
	},

	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const extType = assetInfo.name?.split('.').pop()?.toLowerCase() || ''

					if (/png|jpe?g|gif|tiff|bmp|ico/i.test(extType)) {
						return 'assets/img/[name][extname]'
					}

					if (/ttf|otf|woff|woff2/i.test(extType)) {
						return 'assets/fonts/[name][extname]'
					}

					if (extType === 'svg' && /icons/.test(assetInfo.name || '')) {
						return 'assets/icons/[name][extname]'
					}

					if (extType === 'svg') {
						return 'assets/img/[name][extname]'
					}

					return 'assets/[name][extname]'
				},
			},
		},
	}
})