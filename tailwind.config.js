/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#111827',
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
