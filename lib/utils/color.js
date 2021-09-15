const Palletes = ["white", "black", "gray", "red", "yellow", "green", "blue",
"indigo", "purple", "pink", "blue-gray", "emerald", "teal", "cyan", "fuchsia", "rose", "facebook", "twitter", "whatsapp"]

const PalleteStatic = {
  white: {
    normal: "bg-white text-black",
    ghost: "border-gray-300 text-gray-300",
    darker: "bg-gray-500",
    textDarker: "text-black"
  },
  black: {
    normal: "bg-black text-white",
    ghost: "border-black text-black",
    darker: "bg-black",
  },
  gray: {
    normal: "bg-gray-400 text-white",
    ghost: "border-gray-500 text-gray-500",
    darker: "bg-gray-700"
  },
  red: {
    normal: "bg-red-600 text-white",
    ghost: "border-red-700 text-red-700",
    darker: "bg-red-800"
  },
  yellow: {
    normal: "bg-yellow-300 text-white",
    ghost: "border-yellow-400 text-yellow-400",
    darker: "bg-yellow-400"
  },
  green: {
    normal: "bg-green-400 text-white",
    ghost: "border-green-500 text-green-500",
    darker: "bg-green-500"
  },
  blue: {
    normal: "bg-blue-600 text-white",
    ghost: "border-blue-700 text-blue-700",
    darker: "bg-blue-800"
  },
  indigo: {
    normal: "bg-indigo-600 text-white",
    ghost: "border-indigo-700 text-indigo-700",
    darker: "bg-indigo-800"
  },
  purple: {
    normal: "bg-purple-500 text-white",
    ghost: "border-purple-600 text-purple-600",
    darker: "bg-purple-800"
  },
  pink: {
    normal: "bg-pink-400 text-white",
    ghost: "border-pink-500 text-pink-500",
    darker: "bg-pink-700"
  },
  "blue-gray": {
    normal: "bg-blue-gray-400 text-white",
    ghost: "border-blue-gray-500 text-blue-gray-500",
    darker: "bg-blue-gray-700"
  },
  emerald: {
    normal: "bg-emerald-400 text-white",
    ghost: "border-emerald-500 text-emerald-500",
    darker: "bg-emerald-700"
  },
  teal: {
    normal: "bg-teal-400 text-white",
    ghost: "border-teal-500 text-teal-500",
    darker: "bg-teal-700"
  },
  cyan: {
    normal: "bg-cyan-400 text-white",
    ghost: "border-cyan-500 text-cyan-500",
    darker: "bg-cyan-700"
  },
  fuchsia: {
    normal: "bg-fuchsia-400 text-white",
    ghost: "border-fuchsia-500 text-fuchsia-500",
    darker: "bg-fuchsia-700"
  },
  rose: {
    normal: "bg-rose-400 text-white",
    ghost: "border-rose-500 text-rose-500",
    darker: "bg-rose-700"
  },
  facebook: {
    normal: "bg-facebook text-white",
    ghost: "border-facebook-darker text-facebook-darker",
    darker: "bg-facebook-darker"
  },
  twitter: {
    normal: "bg-twitter text-white",
    ghost: "border-twitter-darker text-twitter-darker",
    darker: "bg-twitter-darker"
  },
  whatsapp: {
    normal: "bg-whatsapp text-white",
    ghost: "border-whatsapp-darker text-whatsapp-darker",
    darker: "bg-whatsapp-darker"
  }
}

const Contrast = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const GradientPosition = {
  "top": "bg-gradient-to-t",
  "right": "bg-gradient-to-r",
  "left": "bg-gradient-to-l",
  "bottom": "bg-gradient-to-b",
  "top-right": "bg-gradient-to-tr",
  "top-left": "bg-gradient-to-tl",
  "bottom-right": "bg-gradient-to-br",
  "bottom-left": "bg-gradient-to-bl"
}

const Color = (type, color, contrast) => {
  return `${type}-${color}${(color === "white" || color === "black") ? "":`-${contrast}`}`
}

const Gradient = (type, color, contrast) => {
  return `${type}-${color}${(color === "white" || color === "black") ? "" : `-${contrast === undefined ? 500 : contrast}`}`
}

export { Color, Gradient, Palletes, PalleteStatic, Contrast, GradientPosition };