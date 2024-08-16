/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    keyframes: {
      falling: {
        from: {
          transform: 'translateY(-20vh)',
        },
        to: {
          transform: 'translateY(100vh)',
        },
      },
    },
    animation: {
      falling: 'falling linear forwards infinite',
    },
  },
  plugins: [],
}

