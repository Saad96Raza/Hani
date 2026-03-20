/** @type {import('tailwindcss').Config} */
/**
 * fluid function
 */
const { Fluid } = require("./src/apps/extra/math.js");
const daisyui = require('daisyui')

module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // md: '3rem',
      },
      screens: {
        DEFAULT: '100%', 
        md: '1440px',
        ultra: '1800px', 
            
      },
    },
    extend: {
      fontSize: {        
        xxl: [Fluid(4, 180)], 
        xl: [Fluid(4, 70)], 
        lg: [Fluid(2, 26)], 
        md: [[Fluid(1, 9)]], 
        sm: [], 
        body: [Fluid(1, 6)], 
        input: [], 
        highlight: [Fluid(0.6, 8)], 
      },      
    },
  },
  plugins: [
    daisyui({
      exclude: ['rootscrollgutter', 'rootcolor', 'menu'],
    })
  ],

  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}