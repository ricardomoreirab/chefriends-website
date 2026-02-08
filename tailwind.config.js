import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F0',
          100: '#FFEBE0',
          200: '#FFD4BF',
          300: '#FFBD9F',
          400: '#FF8C57',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4A21',
          800: '#B33A17',
          900: '#992A0D',
          DEFAULT: '#FF6B35',
        },
        secondary: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD466',
          400: '#FFC533',
          500: '#F7931E',
          600: '#DE8318',
          700: '#C47312',
          800: '#AB630C',
          900: '#925306',
          DEFAULT: '#F7931E',
        },
        accent: {
          DEFAULT: '#FFD23F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
