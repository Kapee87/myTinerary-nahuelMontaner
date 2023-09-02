/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://img.freepik.com/fotos-premium/equipaje-viaje-terminal-aeropuerto_34013-3.jpg?size=626&ext=jpg&ga=GA1.2.598219039.1690940802&semt=sph')",
        // 'hero-background2': "url('https://img.freepik.com/foto-gratis/mapa-dejar-ferrocarril-al-aire-libre-actividad-libertad_1421-267.jpg?size=626&ext=jpg&ga=GA1.2.598219039.1690940802&semt=sph')",
        'hero-background2': "url('https://img.freepik.com/fotos-premium/fondo-viaje-diferentes-sellos-pasaporte_484651-19111.jpg?size=626&ext=jpg&ga=GA1.2.598219039.1690940802&semt=ais')",
        'hero-background3': "url('https://img.freepik.com/foto-gratis/mujeres-turistas-mano-tienen-feliz-mapa-viaje_1150-7411.jpg?size=626&ext=jpg&ga=GA1.2.598219039.1690940802&semt=sphhttps://img.freepik.com/fotos-premium/equipaje-viaje-terminal-aeropuerto_34013-3.jpg?size=626&ext=jpg&ga=GA1.2.598219039.1690940802&semt=sph')",
        'fondo1': "url('./assets/heroBack.jpg')",
        'construction': "url('./assets/construction.jpg')",
        'avionBg': "url('./assets/avionBg.avif')"
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