/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(59.86deg, #9572FC 33.08%, #43E7AD 73.94%, #E1D55D 10.57%)',
        'game-gradient': 'linear-gradient(188deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.88%)',
        galaxy: "url('/background-galaxy.png')"
      }
    },
  },
  plugins: [],
}
