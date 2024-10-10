/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'neonGreen': '#09550a',
        'neonRed': '#B31212'
      },
      dropShadow: {
        neonGreen: '0px 0px 12px rgba(9, 85, 10, 1)',
        neonRed: '0px 0px 12px rgba(179, 18, 18, 1)'
      },
      boxShadow: {
        glassEffect: '0px 0px 5px 1px rgba(227, 228, 237, 0.1)',
        neonGreen: '0px 0px 12px 3px #09550a',
        neonRed: '0px 0px 12px 3px #B31212',
        lBorder: 'inset 0px 0px 0px 0.5px rgba(33, 192, 99, 1), 0px 0px 0px 2px rgba(33, 192, 99, 1)',
        lHover: 'inset 0px 0px 0px 2px rgba(103, 103, 107, 1)',
        innerDefault: 'inset 0 0 4px 0 rgba(192, 67, 0, 1), 0px 0px 0px 2px rgba(192, 67, 0, 1)'
      },
      opacity: {
        '2': '.02',
      }
    },
  },
  plugins: []
}
