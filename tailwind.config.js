/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    keyframes: {
      inOutRight: {
        '0%, 100%': {
          transform: 'translateX(0) rotate(0deg)'
        },
        '50%': {
          transform: 'translate(-20px, -20px) rotate(180deg)'
        },
        '75%': {
          transform: 'translate(10px, 10px) rotate(360deg)'
        }
      },
      inOutLeft: {
        '0%, 100%': {
          transform: 'translateX(0) rotate(0deg)'
        },
        '50%': {
          transform: 'translate(20px, 20px) rotate(180deg)'
        },
        '75%': {
          transform: 'translate(-10px, -10px) rotate(360deg)'
        }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          'animation-timimg-function' : 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        }
      }
    },
    animation: {
      inOutRight: 'inOutRight 10s ease-in-out infinite',
      inOutLeft: 'inOutLeft 10s ease-in-out infinite',
      bounce: 'bounce 3s ease-in-out infinite'
    },
  },
  plugins: [],
}

