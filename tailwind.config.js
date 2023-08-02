/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://w0.peakpx.com/wallpaper/4/460/HD-wallpaper-summer-vacation-hotel-3d-concept-summer-travel-swimming-pool-vacation-tropical-island.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}