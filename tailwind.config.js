/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#2E7D32',
          600: '#1B5E20',
          700: '#2E7D32',
          DEFAULT: '#2E7D32',
        },
        yellow: {
          500: '#F9A825',
          600: '#F57F17',
          DEFAULT: '#F9A825',
        },
        red: {
          500: '#D32F2F',
          DEFAULT: '#D32F2F',
        },
        primary: {
          DEFAULT: '#2E7D32',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#2E7D32',
          600: '#1B5E20',
          700: '#2E7D32',
          800: '#1B4332',
          900: '#081C15',
        },
        secondary: {
          DEFAULT: '#F9A825',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#F9A825',
          600: '#F57F17',
        },
        accent: {
          DEFAULT: '#D32F2F',
        },
        dark: '#212121',
        white: '#FFFFFF',
        gray: '#757575',
      },
      fontFamily: {
        'calibri': ['Calibri', 'Segoe UI', 'Arial', 'sans-serif'],
        'playfair': ['Playfair Display', 'Calibri', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
