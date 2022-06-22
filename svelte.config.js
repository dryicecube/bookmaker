import { markdown } from 'svelte-preprocess-markdown';
// PreProcessors
import statix from "@sveltejs/adapter-static";
import autoProcess from "svelte-preprocess";
const { replace } = autoProcess;
import AutoImport from "unplugin-auto-import/vite";
import { replaceCodePlugin } from "vite-plugin-replace";
// CONFIG FILES
import ALIASES from "./config/alias.js";
import { extensionCheck } from "./config/md.js";
import REPLACE from "./config/replace.json" assert { type: "json" };
import AUTO_IMPORTS from "./config/auto-import.json" assert { type: "json" };

const config = {
	extensions: [ ".svelte", ".svelte.md", ".md", ".svx" ],
	preprocess: [
		autoProcess( { sourceMap: false } ),
		extensionCheck(),
		markdown( { headerIds: false } )
	],
	kit: {
		adapter: statix( {
			pages: "build",
			assets: "build",
			precompress: true,
		} ),
		vite: {
			plugins: [
				replaceCodePlugin( { replacements: REPLACE } ),
				AutoImport( {
					include: [
						/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
						/\.svelte$/, // .svelte
					],
					imports: AUTO_IMPORTS,
					vueTemplate: false,
				} ),
			],
			resolve: { alias: ALIASES },
		},
		prerender: { default: true },
	},
};

export default config;
