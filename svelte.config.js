// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
	preprocess: sveltePreprocess( { sourceMap: false } ),
	kit: {
		adapter: adapter(),
		paths: {
			base: "",
			assets: ""
		}
	}
}