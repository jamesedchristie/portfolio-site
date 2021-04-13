const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {  
    extend: {
      boxShadow: {        
        light: '0 1px 3px 0 rgba(180, 180, 250, 1), 0 1px 2px 0 rgba(180, 180, 250, 1)',
        pink: '0 4px 6px -1px rgba(168, 141, 158, 1), 0 2px 4px -1px rgba(168, 141, 158, 1)',
        navy: '0 4px 6px -1px rgba(20, 52, 73, 0.5), 0 2px 4px -1px rgba(20, 52, 73, 0.5)',     
      },
      colors: {        
        'layout-primary': 'rgb(30, 30, 30)',
        'layout-text': colors.gray[200],
        'layout-secondary': 'rgb(29, 52, 68)',
        'main-primary': 'rgba(246, 246, 246, 1)',
        'main-secondary': 'rgba(255, 255, 255, 0.5)',
        'main-accent': colors.blue[800],
        'main-interact': 'rgba(83, 99, 124, 0.2)',
        'birdman-grey': 'rgb(116, 122, 134)',
        'birdman-beige': 'rgb(184, 185, 171)',
        'birdman-pink': 'rgb(168, 141, 158)',
        'birdman-navy': 'rgb(20, 52, 73)',
        'birdman-green': 'rgb(155, 195, 184)',
        'starwars-darkblue': 'rgb(72, 90, 126)',
        'starwars-red': 'rgb(246, 96, 82)',
        'starwars-grey': 'rgb(131, 158, 179)',
        'starwars-green': 'rgb(151, 175, 153)',
        'link-color': colors.gray[200],
        'link-active': colors.blue[600],
        'link-hover': 'rgb(246, 96, 82)',
        'heading-color': colors.gray[200]
      },
      backgroundImage: theme => ({
        // 'earth-glow': "url('../images/earth_glow.png')",
        // 'targeting-computer': "url('../images/targeting_comp.png')",
        'projects': "url('../images/projects.gif')",
        'layout-pixels': "url('../images/layout_pixels.png')",
        'projects-mottled': "url('../images/project_mottled.png')",
        'layout': "url('../images/layout-lg.gif')",
        // 'colossus': "url('https://res.cloudinary.com/dkj7bctqg/image/upload/e_saturation:100/v1618201480/Projects/Portfolio/colussus_lines_pdzeve.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
