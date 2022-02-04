module.exports = {
  plugins: [
    ['@babel/plugin-transform-typescript', { isTSX: true }],
  ],
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
}
