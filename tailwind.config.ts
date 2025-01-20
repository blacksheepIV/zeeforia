import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        delft_blue: {
          DEFAULT: '#22306e',
          100: '#070916',
          200: '#0d132c',
          300: '#141c42',
          400: '#1b2657',
          500: '#22306e',
          600: '#3348a5',
          700: '#566ccb',
          800: '#8f9ddc',
          900: '#c7ceee',
        },
        steel_blue: {
          DEFAULT: '#267bcc',
          100: '#071929',
          200: '#0f3151',
          300: '#164a7a',
          400: '#1e62a2',
          500: '#267bcc',
          600: '#4895dd',
          700: '#76b0e6',
          800: '#a4caee',
          900: '#d1e5f7',
        },
        raisin_black: {
          DEFAULT: '#22212a',
          100: '#070709',
          200: '#0e0d11',
          300: '#15141a',
          400: '#1c1b22',
          500: '#22212a',
          600: '#4a485b',
          700: '#716e8c',
          800: '#a09eb3',
          900: '#d0ced9',
        },
        french_gray: {
          DEFAULT: '#c8c7d3',
          100: '#25242e',
          200: '#49485b',
          300: '#6e6c89',
          400: '#9a98ae',
          500: '#c8c7d3',
          600: '#d2d1db',
          700: '#dddde4',
          800: '#e9e8ed',
          900: '#f4f4f6',
        },
        amaranth_purple: {
          DEFAULT: '#a10f4d',
          100: '#21030f',
          200: '#41061f',
          300: '#62092e',
          400: '#830c3e',
          500: '#a10f4d',
          600: '#e01569',
          700: '#ee498e',
          800: '#f486b4',
          900: '#f9c2d9',
        },
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        custom: `-1px -5px 15px -6px #E0E4F5`,
      },

      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.0s ease-out',
        'slide-in-left': 'slide-in-left 1s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config
