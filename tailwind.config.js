module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      'dark-blue': 'hsl(233, 26%, 24%)',
      'lime-green': 'hsl(136, 65%, 51%)',
      'bright-cyan': 'hsl(192, 70%, 51%)',
      'grayish-blue': 'hsl(233, 8%, 62%)',
      'light-grayish-blue': 'hsl(220, 16%, 96%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
    extend: {
      maxWidth: {
        '50ch': '50ch'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

