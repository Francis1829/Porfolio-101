/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'light': '#f5f3f2',
      'black': '#000000',
    },
    extend: {
      backgroundImage: {
        'Body': "url('../src/assets/Bg-theme.png')",
        'Hero': "url('../src/assets/Unsplash.jpg')",
        'Hero': "url('../src/assets/Unsplash2.jpg')",
        'Hero': "url('../src/assets/Unsplash5.jpg')"
      }
    },
  },
  plugins: [],
}

