module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}', './src/**/**/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['bg-gray-300', 'bg-red-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300']
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '98': '.98'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
