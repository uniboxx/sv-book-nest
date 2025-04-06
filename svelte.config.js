import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
	aliases: {
		$lib: 'src/lib',
		$components: 'src/components',
		$utils: 'src/utils'
	}
};

export default config;
