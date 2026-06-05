import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0B111C',
        surface2: '#111B2E',
        glow: '#6EE7B7',
        accent: '#7C3AED',
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.25)',
        card: '0 20px 40px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        radiance: 'radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.12), transparent 28%)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      ringWidth: {
        6: '6px',
      },
    },
  },
  plugins: [],
};

export default config;
