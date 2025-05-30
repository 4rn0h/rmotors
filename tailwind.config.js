/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        neutral: 'rgb(var(--neutral) / <alpha-value>)',
        cta: 'rgb(var(--cta) / <alpha-value>)',
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
    },
  },
  plugins: [],
};