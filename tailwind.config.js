/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,tsx,jsx,ts}'],
	theme: {
		colors: {
			main: '#1E1E1E',
			secondary: '#7471F0',
		},
		extend: {
			boxShadow: {
				default: '0px 6px 0px 0px #3F3E74',
				active: '0px 2px 0px 0px #3F3E74',
			},
		},
	},
	plugins: [],
}
