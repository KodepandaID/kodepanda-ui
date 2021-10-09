const Palletes = ["white", "black", "gray", "blue-gray", "cool-gray", "warm-gray", "true-gray", "red", "yellow", "orange", "amber", "lime", "green", "blue", "sky", "indigo", "purple", "pink", "emerald", "teal", "cyan", "fuchsia", "violet", "rose", "facebook", "facebook-darker", "twitter", "twitter-darker", "whatsapp", "whatsapp-darker", "transparent"]

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
  return `${type}-${color}${(color === "white" || color === "black" || color === "transparent") ? "":`-${contrast}`}`
}

const Gradient = (type, color, contrast) => {
  return `${type}-${color}${(color === "white" || color === "black") ? "":`-${contrast}`}`
}

export { Color, Gradient, Palletes, Contrast, GradientPosition };