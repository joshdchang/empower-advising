module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary': '#70e0a5',
        'secondary-dark': '#1e89a1',
        'secondary': '#33b0cc',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
