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
        deep: '#0a0a1a',
        dark: '#12122a',
        card: '#1a1a3e',
        'card-hover': '#222255',
        'text-bright': '#f0ece2',
        'text-dim': '#7a7a9a',
        'pixel-orange': '#FF6B35',
        'pixel-gold': '#FFD23F',
        'pixel-green': '#4ade80',
        'pixel-red': '#ef4444',
        'pixel-blue': '#60a5fa',
        'pixel-purple': '#a78bfa',
        primary: {
          50: '#1a1a3e',
          100: '#FF6B35',
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
          50: '#1a1a3e',
          100: '#FFD23F',
          500: '#FFD23F',
          DEFAULT: '#FFD23F',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
