<template>
  <div class="section-container">
    <div class="font-bold text-xl mb-2">{{ title }}</div>
    <div class="text-gray-700 flex flex-col justify-center text-sm">
      <slot />
    </div>
  </div>
</template>

<script>
import { Props } from "@/utils/props";

export default {
  props: {
    title: Props.string()
  }
};
</script>

<style lang="postcss">
.section-container {
  @apply flex flex-col mx-4 mb-8;
}

@screen lg {
  .section-container:last-child {
    @apply mb-0;
  }
}
</style>
