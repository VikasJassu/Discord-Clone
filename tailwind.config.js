/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        'myshadow': '5px 7px 20px 1px rgba(0, 0, 0, 0.3)',
        'myshadow1': '1px 15px 25px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'ggsans-semibold': ['ggsans-semibold'],
        'ggsans-normal': ['ggsans-normal'],
        'ggsans-bold':['ggsans-bold'],
        'ggsans-medium': ['ggsans-medium'],
        'ginto-nord': ['ginto-nord'],
        'ginto-nord-woff2': ['ginto-nord-woff2'],
        'ginto': ['ginto'],
        'whitney': ['whitney']
      },
      colors: {
        'backblue' : '#404eed',
        'whitecol' : '#fff',
        'blackbutton': 'rgb(35 ,39 ,42)',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/Image0.svg')",
      }
    
    },
  },
  plugins: [],
}
