const colors = require("tailwindcss/colors")

module.exports = {
  future: {},
  purge: [],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        'facebook': '#385898',
        'facebook-darker': '#314E89',
        'twitter': '#1A94DA',
        'twitter-darker': '#1681BF',
        'whatsapp': '#179848',
        'whatsapp-darker': '#0c6c33',
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        'orange': colors.orange,
        'amber': colors.amber,
        'lime': colors.lime,
        'emerald': colors.emerald,
        'teal': colors.teal,
        'cyan': colors.cyan,
        'sky': colors.sky,
        'violet': colors.violet,
        'fuchsia': colors.fuchsia,
        'rose': colors.rose
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
  variants: {},
  plugins: [],
  corePlugins: [
    "preflight",
    "container",
    "alignContent",
    "alignItems",
    "alignSelf",
    "animation",
    "backgroundColor",
    "backgroundImage",
    "backgroundOpacity",
    "blur",
    "borderCollapse",
    "borderColor",
    "borderOpacity",
    "borderRadius",
    "borderStyle",
    "borderWidth",
    "boxShadow",
    "boxSizing",
    "content",
    "cursor",
    "display",
    "divideWidth",
    "dropShadow",
    "fill",
    "filter",
    "flex",
    "flexDirection",
    "flexGrow",
    "flexWrap",
    "float",
    "fontSize",
    "fontSmoothing",
    "fontStyle",
    "fontVariantNumeric",
    "fontWeight",
    "gap",
    "gradientColorStops",
    "gridColumn",
    "gridRow",
    "gridTemplateColumns",
    "height",
    "inset",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "letterSpacing",
    "lineHeight",
    "listStyleType",
    "listStylePosition",
    "margin",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "objectFit",
    "objectPosition",
    "opacity",
    "outline",
    "overflow",
    "padding",
    "placeholderColor",
    "position",
    "ringColor",
    "ringOpacity",
    "ringWidth",
    "rotate",
    "scale",
    "space",
    "tableLayout",
    "textAlign",
    "textColor",
    "textDecoration",
    "textOverflow",
    "textTransform",
    "transform",
    "transitionDelay",
    "transitionDuration",
    "transitionProperty",
    "translate",
    "userSelect",
    "verticalAlign",
    "visibility",
    "whitespace",
    "width",
    "wordBreak",
    "zIndex"
  ]
}