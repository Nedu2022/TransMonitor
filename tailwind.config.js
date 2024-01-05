/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },

    screens: {
      sm: "320px",
      // => @media (min-width: 320px and max-width: 480px) { ... }

      md: "480px",
      // => @media (min-width: 481px and max-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1025px and max-width: 1200px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1280px",

      "4xl":"1440px"
    },

    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '31px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        green: '#2AAE60',
        primary: '#13151D',
        secondary: '#2A2C34',
        accent: '#424A521A',
      },
    }
  },
  plugins: []
};
