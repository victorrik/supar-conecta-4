const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {

				'sans': ['rubik', ...defaultTheme.fontFamily.sans],
				'serif': ['rubik', ...defaultTheme.fontFamily.serif],
				 
			},
		},
  },
  plugins: [
		require('@tailwindcss/line-clamp'),
	],
}