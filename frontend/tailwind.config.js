/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5B301',
          50: '#FEF7E3',
          100: '#FDEEB7',
          200: '#FCE58A',
          300: '#FADC5D',
          400: '#F8D330',
          500: '#F5B301',
          600: '#D89B01',
          700: '#B08300',
          800: '#886B00',
          900: '#605300'
        },
        secondary: {
          DEFAULT: '#2D2D2D',
          50: '#F7F7F7',
          100: '#E8E8E8',
          200: '#D4D4D4',
          300: '#B8B8B8',
          400: '#969696',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#2D2D2D',
          900: '#1A1A1A'
        },
        neutral: {
          DEFAULT: '#FAF9F6',
          50: '#FFFFFF',
          100: '#FAF9F6',
          200: '#F5F4F0',
          300: '#F0EFEA',
          400: '#EBEAE4',
          500: '#E6E5DE',
          600: '#D1D0C8',
          700: '#B8B7AF',
          800: '#9F9E95',
          900: '#86857C'
        },
        accent: {
          DEFAULT: '#2ECC71',
          50: '#E8F8F0',
          100: '#D1F1E1',
          200: '#A3E3C3',
          300: '#75D5A5',
          400: '#47C787',
          500: '#2ECC71',
          600: '#25A35A',
          700: '#1C7A44',
          800: '#13512D',
          900: '#0A2817'
        },
        danger: {
          DEFAULT: '#D32F2F',
          50: '#FBE9E9',
          100: '#F7D3D3',
          200: '#EFA7A7',
          300: '#E77B7B',
          400: '#DF4F4F',
          500: '#D32F2F',
          600: '#A92525',
          700: '#7F1C1C',
          800: '#551212',
          900: '#2B0909'
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245, 179, 1, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(245, 179, 1, 0.6)' },
        },
      },
      gradientColorStops: {
        'primary-gradient': 'linear-gradient(135deg, #F5B301 0%, #FFD700 100%)',
        'dark-gradient': 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',
      }
    },
  },
  plugins: [],
};