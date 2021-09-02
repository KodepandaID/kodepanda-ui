module.exports = {
  stories: [
    "../lib/elements/**/stories/*.stories.js"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  features: {
    postcss: true,
  },
}