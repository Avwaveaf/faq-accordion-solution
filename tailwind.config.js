/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightPink: 'hsl(275, 100%, 97%)',
        grayPurple: 'hsl(292, 16%, 49%)',
        darkPurple: 'hsl(292, 42%, 14%)',
      },
      fontSize: {
        p: '16px'
      }
    },
  },
  plugins: [],
}

