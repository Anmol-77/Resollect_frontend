/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3867d6',
          light: '#4b7bec',
        },
        secondary: {
          DEFAULT: '#f1f2f6',
        },
        table: {
          header: '#f8f9fa',
          row: {
            even: '#ffffff',
            odd: '#f8f9fa',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
