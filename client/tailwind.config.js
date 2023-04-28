/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "groovy-yellow": "#F8F933",
        "groovy-blue": "#00D4E0",
        "groovy-purple": "#BA61FA",
        "groovy-orange": "#F89C5E",
        "groovy-red": "#D0515C",
        "groovy-red-dark": "#a33e47",
        "groovy-green": "#28F780",
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(15rem, 2fr))',
        'product-fluid': 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
}
