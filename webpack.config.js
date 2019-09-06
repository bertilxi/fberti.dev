const webpack = require("webpack");
const path = require("path");
const config = require("sapper/config/webpack.js");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const alias = { svelte: path.resolve("node_modules", "svelte") };
const extensions = [".mjs", ".js", ".json", ".svelte", ".html"];
const mainFields = ["svelte", "module", "browser", "main"];

const preprocess = require("svelte-preprocess")({
  postcss: true,
  scss: true
});

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader",
            options: {
              dev,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
              preprocess
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "url-loader",
          options: { limit: 10000, name: "images/[name].[hash:7].[ext]" }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: "url-loader",
          options: { limit: 10000, name: "fonts/[name].[hash:7].[ext]" }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: "url-loader",
          options: { limit: 10000, name: "media/[name].[hash:7].[ext]" }
        }
      ]
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      })
    ].filter(Boolean),
    devtool: dev && "inline-source-map"
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: "node",
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat("encoding"),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader",
            options: {
              css: false,
              generate: "ssr",
              dev,
              preprocess
            }
          }
        }
      ]
    },
    mode,
    performance: {
      hints: false
    }
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode
  }
};