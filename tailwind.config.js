/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'toast-push': {
          '0%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          to: {
            opacity: 0,
            transform: 'scale(0.9)',
          },
        },
      },
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    screens: {
      xs: '400px',
      xsm: { max: '400px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  daisyui: {
    themes: ['lofi', 'black'],
    darkTheme: 'black',
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
