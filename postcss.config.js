const production = process.env.NODE_ENV !== "development";

module.exports = {
  plugins: [
    require("tailwindcss"),
    production && require("autoprefixer"),

    production &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.html", "./**/*.svelte"],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
  ].filter(Boolean)
};
