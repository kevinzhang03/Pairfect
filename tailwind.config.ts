import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        yoghurt: {
          '50': '#EDEEF2',
          '100': '#DFDFE7',
          '200': '#BBBDCD',
          '300': '#9B9DB6',
          '400': '#777A9C',
          '500': '#5C5F7E',
          '600': '#494B64',
          '700': '#383A4D',
          '800': '#252632',
          '900': '#13141B',
          '950': '#09090C',
        },
        blush: {
          '50': '#FDF2F2',
          '100': '#FCE9E9',
          '200': '#F8D3D3',
          '300': '#F5BDBD',
          '400': '#F1A7A7',
          '500': '#EE9090',
          '600': '#E44E4E',
          '700': '#C71F1F',
          '800': '#851414',
          '900': '#420A0A',
          '950': '#1F0505',
        },
        pear: {
          '50': '#FDF9ED',
          '100': '#FBF2DA',
          '200': '#F7E5B6',
          '300': '#F2D78C',
          '400': '#EECA68',
          '500': '#EABE43',
          '600': '#D8A518',
          '700': '#A17B12',
          '800': '#6E540C',
          '900': '#372A06',
          '950': '#1C1503',
        },
        leaf: {
          '50': '#F3F6EF',
          '100': '#E6ECDF',
          '200': '#D0DBC2',
          '300': '#B7C8A2',
          '400': '#9EB582',
          '500': '#87A464',
          '600': '#6B844D',
          '700': '#51643A',
          '800': '#374328',
          '900': '#1A2013',
          '950': '#0D1009',
        },
        cream: {
          DEFAULT: '#FFF9F3',
        },
        brown: {
          DEFAULT: '#211710',
        },
        error: {
          DEFAULT: '#C9156F',
          100: '#FAD1E6',
          500: '#C9156F',
          700: '#8B0E4D',
        },
      },
      fontFamily: {
        sans: ['Neue-Regrade', 'sans-serif'],
        serif: ['Tiempos-Headline', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
