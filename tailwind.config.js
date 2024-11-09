/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      keyframes: {
        rotate4: {
          '100%': { transform: 'rotate(360deg)' },
        },
        dash4: {
          '0%': {
            'stroke-dasharray': '1, 200',
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dasharray': '90, 200',
            'stroke-dashoffset': '-35px',
          },
          '100%': {
            'stroke-dashoffset': '-125px',
          },
        },
      },
      animation: {
        'rotate4': 'rotate4 2s linear infinite',
        'dash4': 'dash4 1.5s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}

