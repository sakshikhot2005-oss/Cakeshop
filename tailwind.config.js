export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          hero:   '#e8a0b0',
          light:  '#f5c6d0',
          soft:   '#fce4ec',
          btn:    '#e91e8c',
          btnHov: '#c2185b',
        },
        dark: '#1a1a1a',
        topbar: '#2c2c2c',
      },
      fontFamily: {
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pink': 'radial-gradient(ellipse at 60% 50%, #dba0b0 0%, #c98090 40%, #b87080 100%)',
      },
    },
  },
  plugins: [],
}
