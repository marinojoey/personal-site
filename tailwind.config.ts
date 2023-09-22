import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  content: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        homeText: '#fef4d1',
      },
    },
  },
  plugins: [],
}
export default config
