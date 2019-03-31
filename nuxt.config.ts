import NuxtConfiguration from "@nuxt/config";
import path from "path";
import posts from "./content";

const builtAt = new Date().toISOString();

const config: NuxtConfiguration = {
  css: ["@/assets/styles/main.scss"],

  loading: {
    color: "#5a46ff",
    height: "3px"
  },

  head: {
    title: "Fernando Berti | Frontend Developer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      {
        name: "msapplication-TileImage",
        content: "/favicons/mstile-144x144.png"
      },
      { name: "theme-color", content: "#c1c1c1" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "profile" },
      { property: "og:updated_time", content: builtAt }
    ]
  },

  build: {
    extend(config) {
      if (!config.module) {
        return;
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname, "content"),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      });
    }
  },

  modules: [],

  generate: {
    routes: [...posts.map(post => `/blog/${post}`)]
  }
};

export default config;
