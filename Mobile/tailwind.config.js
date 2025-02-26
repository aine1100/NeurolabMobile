/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        "background-color":"#000026",
        "text-color":"#B0961B",
        'neuro-gradient': 'linear-gradient(to bottom, #0d0b24, #1a1835, #2c2854, #c49c0f)',
        "tabcolor":"#094122"
      },
      
    },
  },
  plugins: [],
}