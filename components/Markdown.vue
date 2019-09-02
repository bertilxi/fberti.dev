<script>
import Vue from "vue";
import { Props } from "~/utils/props";

export default Vue.extend({
  props: {
    render: Props.string(),
    staticRenderFns: Props.string()
  },
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
});
</script>
