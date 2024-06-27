/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'light-blueish-gray': '#F2F6FA',
        'white': '#FFFFFF',
        'light-grayish-blue': '#E4EBF0',
        'medium-blue': '#597C93',
        'very-light-blueish-gray': '#F1F5F9',
        'light-grayish-blue-2': '#E3EAF0',
        'light-grayish-blue-3': '#E0E7EC',
        'light-grayish-blue-4': '#E0E6EB',
        'light-grayish-blue-5': '#E1E8ED',
        'light-grayish-blue-6': '#E2E9EE',
        'orange-custom': '#FF854B'
      },
      boxShadow: {
        'card': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
