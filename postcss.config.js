const tailwind = require("tailwindcss");
const purgeCss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const isProd = process.env.NODE_ENV === "production";

const purgeCssOptions = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};

module.exports = {
  plugins: [
    tailwind,
    isProd && purgeCss(purgeCssOptions),
    autoprefixer,
    isProd && cssnano
  ].filter(Boolean)
};
