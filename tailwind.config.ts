import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fade-gradiant':
          'linear-gradient(to right, rgba(0, 0, 0, 0), #22306e, rgba(0, 0, 0, 0));',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        delftBlue: {
          DEFAULT: '#22306e',
          100: '#5369CA',
          200: '#445cc5',
          300: '#3a51bb',
          400: '#354bac',
          500: '#1D295E',
          600: '#18224E',
          700: '#131B3E',
          800: '#0E142F',
          900: '#0A0E1F',
        },
        steelBlue: {
          DEFAULT: '#267BCC',
          100: '#64A5E3',
          200: '#539BDF',
          300: '#4191DC',
          400: '#3087D9',
          500: '#2373BE',
          600: '#2068AC',
          700: '#1C5E9B',
          800: '#19538A',
          900: '#164979',
        },
        raisinBlack: {
          DEFAULT: '#22212A',
          100: '#4A485B',
          200: '#413F50',
          300: '#383645',
          400: '#2E2D39',
          500: '#1C1B22',
          600: '#131217',
          700: '#09090B',
        },
        frenchGray: {
          DEFAULT: '#C8C7D3',
          100: '#F4F4F6',
          200: '#E9E8ED',
          300: '#DDDDE4',
          400: '#D2D1DB',
          500: '#BCBAC9',
          600: '#B0AFC0',
          700: '#A5A4B7',
          800: '#9A98AE',
          900: '#8F8DA5',
        },
        amaranthPurple: {
          DEFAULT: '#A10F4D',
          100: '#EA1F74',
          200: '#E01569',
          300: '#CD1361',
          400: '#BB1158',
          500: '#950E46',
          600: '#830C3E',
          700: '#700A35',
          800: '#5D092C',
          900: '#4B0723',
        },
      },
      fontFamily: {
        sans: ['var(--font-quicksand)'],
        montserrat: ['var(--font-montserrat)'],
      },
      boxShadow: {
        custom: `-1px -5px 15px -6px #E0E4F5`,
      },

      keyframes: {
        rotateY: {
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        'rotate-y-180': 'rotateY 1.2s linear',
      },
    },
  },
  plugins: [],
} satisfies Config
