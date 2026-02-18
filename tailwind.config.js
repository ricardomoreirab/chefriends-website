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
        cream: '#FFF8F0',
        'cream-dark': '#FFF4EC',
        'cream-darker': '#FFF0E6',
        forest: '#3C422E',
        'forest-light': '#6B7259',
        'forest-muted': '#A3A78F',
        accent: '#D1E030',
        'accent-dark': '#B5C229',
        border: '#E8DDD0',
        'border-light': '#F0E6D9',
        'card-white': '#FFFFFF',
        success: '#4A7C59',
        error: '#C75050',
        'chef-pepe': '#E85D2C',
        'chef-yuki': '#D94040',
        'chef-carlos': '#D4A017',
        'chef-priya': '#E85D2C',
        'chef-jacques': '#4A86C8',
        'chef-somchai': '#8B6FC0',
        'chef-renata': '#6FA030',
        'chef-joan': '#C84A20',
        primary: {
          50: '#FDFCE8',
          100: '#F9F7C5',
          200: '#F2F08E',
          300: '#E5E34D',
          400: '#D1E030',
          500: '#B5C229',
          600: '#8E9A1E',
          700: '#6B741B',
          800: '#555C1A',
          900: '#474E1B',
          DEFAULT: '#D1E030',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        pill: '30px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(60, 66, 46, 0.06)',
        medium: '0 4px 12px rgba(60, 66, 46, 0.08)',
        warm: '0 8px 30px rgba(60, 66, 46, 0.1)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
