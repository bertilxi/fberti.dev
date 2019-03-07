<script>
export default {
  props: ["render", "staticRenderFns"],
  data() {
    return {
      templateRender: null
    };
  },

  mounted() {
    this.templateRender = new Function(this.render)();
    this.$options.staticRenderFns = new Function(this.staticRenderFns)();
  },

  render(createElement) {
    return this.templateRender
      ? this.templateRender()
      : createElement("div", "Rendering ...");
  }
};
</script>
