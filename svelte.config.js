import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/assets',
			$components: 'src/lib/components',
			$utils: 'src/utils'
		}
	}
};

export default config;
