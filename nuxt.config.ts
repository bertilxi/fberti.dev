import { Configuration } from "@nuxt/types";
import path from "path";
import posts from "./content";

const config: Configuration = {
  router: {
    linkExactActiveClass: "text-blue-500"
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
    title: "Fernando Berti | Software Engineer",
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

  buildModules: ["@nuxt/typescript-build"],

  build: {
    // cache: true,
    extractCSS: true,
    optimizeCSS: true,
    html: {
      minify: {
        collapseWhitespace: true
      }
    },
    terser: {
      terserOptions: {
        // To speed up, uncomment these 2. Bundle size increase though
        // mangle: false,
        // compress: false
      }
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    },
    extend(config: Record<string, any>) {
      if (!config.module) {
        return;
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname, "content"),
        options: {
          mode: ["vue-render-functions"]
        }
      });
    }
  },

  render: {
    bundleRenderer: {
      shouldPrefetch: () => true
    }
  },

  modules: ["@nuxtjs/pwa", "nuxt-purgecss"],

  generate: {
    routes: [...posts.map(post => `/blog/${post}`)]
  },

  manifest: {
    name: "Fernando Berti",
    lang: "en"
  }
};

export default config;
