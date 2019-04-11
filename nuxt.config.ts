import NuxtConfiguration from "@nuxt/config";
import path from "path";
import posts from "./content";

const config: NuxtConfiguration = {
  router: {
    linkExactActiveClass: "active"
  },

  css: ["@/assets/styles/main.scss"],

  loading: {
    color: "#0052cc",
    height: "2px"
  },

  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Fernando Berti | Frontend Developer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { name: "robots", content: "index, follow" },
      {
        hid: "description",
        name: "description",
        content: "Fernando Berti personal website"
      }
    ]
  },

  build: {
    // cache: true,
    extractCSS: true,
    optimizeCSS: true,
    html: {
      minify: {
        collapseWhitespace: true
      }
    },
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    },
    terser: {
      terserOptions: {
        // To speed up, uncomment these 2. Bundle size increase though
        // mangle: false,
        // compress: false
      }
    },
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

  modules: ["@nuxtjs/pwa"],

  generate: {
    routes: [...posts.map(post => `/blog/${post}`)]
  },

  manifest: {
    name: "Fernando Berti",
    lang: "en"
  }
};

export default config;
