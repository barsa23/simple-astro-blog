/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {

			colors: {
				'violeta-hard': '#333300',
				'granate': '#212F3C',
				
			  },

			  fontFamily: {
				'single': ['Single Day', 'cursive'],
				'plex': ['IBM Plex Sans', 'sans-serif']
			},
			 
		},
	},
	plugins: [],
}
