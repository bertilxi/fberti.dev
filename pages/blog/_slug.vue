<template>
  <div>
    <Markdown
      :render="md.vue.render"
      :static-render-fns="md.vue.staticRenderFns"
    />
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import "clipboard";
import "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";

export default {
  components: {
    Markdown
  },

  async asyncData({ params }) {
    const { default: md } = await import(`@/content/${params.slug}.md`);

    return { md };
  },

  mounted() {
    setTimeout(() => {
      window.Prism.highlightAll();
    }, 100);
  },

  head() {
    return {
      title: `Fernando Berti | ${this.md.attributes.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.md.attributes.description
        }
      ]
    };
  }
};
</script>
