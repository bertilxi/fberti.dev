const path = require("path");
const fs = require("fs-extra");
const production = process.env.NODE_ENV !== "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url")([
      {
        filter: "**/typeface-*/files/*",
        url: asset => {
          const basename = path.basename(asset.absolutePath);
          const destpath = path.join(__dirname, "static", "fonts/");

          fs.copySync(asset.absolutePath, path.join(destpath, basename));
          return path.join("/fonts", basename);
        }
      }
    ]),

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
