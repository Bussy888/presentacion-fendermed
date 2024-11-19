// @type {import('tailwindcss').Config} 


module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  parserOptions: {
    babelConfig: './babel.config.js',
  },
  ignorePatterns: ['tailwind.config.js'],
};