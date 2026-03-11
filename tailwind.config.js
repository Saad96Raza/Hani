/** @type {import('tailwindcss').Config} */
/**
 * fluid function
 */
import { Fluid } from './src/apps/extra/math.js'
const daisyui = require('daisyui')

module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '100%', 
        xl: '1440px',    
      },
    },
    extend: {
      fontSize: {        
        xxl: [Fluid(4, 180)], 
        xl: [Fluid(4, 70)], 
        lg: [Fluid(3, 14)], 
        md: [[Fluid(1, 10)]], 
        sm: [], 
        body: [Fluid(1, 6)], 
        input: [], 
        highlight: [Fluid(0.6, 8)], 
      },      
    },
  },
  plugins: [
    daisyui({
      exclude:['rootscrollgutter','input','label'],
    })
  ],

  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}