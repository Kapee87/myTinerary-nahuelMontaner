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
        'slideBg': 'slideBg 30s infinite  ease-in-out',
        'wiggle': 'wiggle 7s infinite ease-in-out'
      },
      keyframes: {
        slideBg: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '100%' },
          '60%': { backgroundPosition: '200%' },
          '100%': { backgroundPosition: '2500%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        }
      },
      dropShadow: {
        'ligthModeShadow': '5px 5px 5px rgba(255,255,255,1)',
        'shadowDos': '3px 3px 10px rgba(255,255,255,1)',
      }
    },
  },
  plugins: [require("daisyui")],

}