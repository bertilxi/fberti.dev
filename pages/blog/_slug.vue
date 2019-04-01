<template>
  <div>
    <!-- <div v-html="md.html" /> -->
    <Markdown
      :render="md.vue.render"
      :static-render-fns="md.vue.staticRenderFns"
    />
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  components: {
    Markdown
  },
  async asyncData({ params }) {
    const md = await import(`@/content/${params.slug}.md`);

    return {
      md
    };
  },
  head() {
    return {
      title: this.md.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.md.description
        }
      ]
    };
  }
};
</script>
