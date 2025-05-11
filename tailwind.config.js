/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#400F38',     // Principal text
        secondary: '#CCADAD',   // Mentions + trait
        background: '#EBDEDE',  // Background home
      },
      fontFamily: {
        heading: ['var(--font-josefin)', 'Josefin Sans', 'sans-serif'],
        body: ['var(--font-ibm)', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        title: ['2.81rem', { lineHeight: '2.62rem', fontWeight: '700' }],
        paragraph: ['1.41rem', { lineHeight: '1.75rem' }],
        menu: ['1.16rem', { lineHeight: '1.4rem' }],
        legal: ['0.83rem', { lineHeight: '1rem' }],
      },
      borderWidth: {
        regl: '0.083rem'    // Trait réglé
      }
    },
  },
}
