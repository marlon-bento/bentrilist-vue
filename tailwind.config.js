/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-nava': '#1B3B90',
        'rosa-b' :'#AE445D',
        'branco': '#EAEAEA',
        'azul-fresco': '#4ABBDD',
        'azul-escuro':'#0B1934',
        'pretasso': '#0A0A12',
        'bege-l':'#FBFBF0'
      }
    },
  },
  plugins: [],
}

