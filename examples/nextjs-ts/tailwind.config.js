module.exports = {
  content: ["./pages/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'facebook': '#385898',
        'facebook-darker': '#314E89',
        'twitter': '#1A94DA',
        'twitter-darker': '#1681BF',
        'whatsapp': '#179848',
        'whatsapp-darker': '#0c6c33'
      },
      boxShadow: {
        'offset-white': '2px 2px white',
        'offset-black': '2px 2px black',
        'offset-gray': '2px 2px gray',
        'offset-blue-gray': '2px 2px blue-gray',
        'offset-cool-gray': '2px 2px cool-gray',
        'offset-warm-gray': '2px 2px warm-gray',
        'offset-true-gray': '2px 2px true-gray',
        'offset-red': '2px 2px red',
        'offset-yellow': '2px 2px yellow',
        'offset-orange': '2px 2px orange',
        'offset-amber': '2px 2px amber',
        'offset-lime': '2px 2px lime',
        'offset-green': '2px 2px green',
        'offset-blue': '2px 2px blue',
        'offset-sky': '2px 2px sky',
        'offset-indigo': '2px 2px indigo',
        'offset-purple': '2px 2px purple',
        'offset-pink': '2px 2px pink',
        'offset-emerald': '2px 2px emerald',
        'offset-teal': '2px 2px teal',
        'offset-cyan': '2px 2px cyan',
        'offset-fuchsia': '2px 2px fuchsia',
        'offset-violet': '2px 2px violet',
        'offset-rose': '2px 2px rose',
        'offset-facebook-darker': '2px 2px facebook-darker',
        'offset-twitter-darker': '2px 2px twitter-darker',
        'offset-whatsapp-darker': '2px 2px whatsapp-darker',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      spacing: {
        '108': '40rem',
        '120': '45rem',
        "132": '55rem',
      }
    }
  },
  plugins: [],
}
