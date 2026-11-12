import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0e0e10',
          card: '#161718',
          secondary: '#1f1f21',
        },
        lime: '#e3fc02',
        cyan: '#00fced',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFD976',
          dark: '#BA9930',
          muted: '#E8C766',
        },
        ink: '#F7F7F7',
        muted: '#A5A7AC',
        stroke: 'rgba(212,175,55,0.28)',
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      maxWidth: {
        site: '1600px',
      },
      screens: {
        md: '750px',
        lg: '990px',
      },
      letterSpacing: {
        body: '0.06rem',
        wide: '0.16em',
        wider: '2.5px',
      },
    },
  },
  plugins: [],
}

export default config
