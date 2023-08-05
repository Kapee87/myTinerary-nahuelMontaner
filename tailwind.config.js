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
        'fondo1': "url('./heroBack.jpg')",
        'construction': "url('./construction.jpg')",
        'avionBg': "url('./avionBg.avif')"
      },
      animation: {
        'slideBg': 'slideBg 30s infinite alternate ease-in-out'
      },
      keyframes: {
        slideBg: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '2000%' },
          '55%': { backgroundPosition: '4000%' },
          '40%': { backgroundPosition: '6000%' },
          '45%': { backgroundPosition: '8000%' },
          '50%': { backgroundPosition: '10000%' },
          '55%': { backgroundPosition: '12000%' },
          '60%': { backgroundPosition: '14000%' },
          '75%': { backgroundPosition: '18000%' },
          '90%': { backgroundPosition: '20000%' },
          '100%': { backgroundPosition: '25000%' },
        }
      }
    },
  },
  plugins: [require("daisyui")],

}