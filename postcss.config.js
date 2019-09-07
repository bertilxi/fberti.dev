const production = process.env.NODE_ENV !== "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("tailwindcss"),
    production && require("postcss-preset-env"),
    production && require("autoprefixer"),

    production &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.html", "./**/*.svelte"],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
  ].filter(Boolean)
};
