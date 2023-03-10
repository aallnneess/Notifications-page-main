/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Plus Jakarta Sans"', 'sans-serif']
    },
    colors: {
      'Red': 'hsl(1, 90%, 64%)',
      'Blue': 'hsl(219, 85%, 26%)',
      'White': '#ffffff',
      'Very-light-grayish-blue': '#f7fafd',
      'Light-grayish-blue-1': '#e5effa',
      'Light-grayish-blue-2': '#dde7ee',
      'Grayish-blue': '#939dae',
      'Dark-grayish-blue': '#5e6778',
      'Very-dark-blue': '#1c202b'
    },
    extend: {},
  },
  plugins: [],
}
