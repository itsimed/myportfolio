/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#59d102',
        secondary: '#f3f520',
        accent: '#10b981',
        background: '#000000',
        foreground: '#ffffff',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #59d102, #f3f520)',
      },
    },
  },
  plugins: [],
}

