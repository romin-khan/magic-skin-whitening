/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF8F3',
        'warm-beige': '#F5E6D3',
        'soft-tan': '#E8D5C4',
        'earth-brown': '#8B7355',
        'sage': '#9CAF88',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      }
    }
  },
  plugins: []
}
