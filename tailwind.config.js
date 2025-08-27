/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF6F00',
          200: '#FF6F00E6',
          300: '#FF6F00B3',
        },
        secondary: '#FFA726',
        white: {
          default: '#FFFFFF',
          text: '#F5F5F5',
        },
        dark: {
          100: '#121212',
          200: '#000000',
        },
        grey: {
          100: '#414141',
        },
        red: {
          100: '#FF0000'
        },
      },
      
    },
  },
  plugins: [],
}