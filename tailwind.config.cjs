/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [require("@tailwindcss/line-clamp")],
}
