<template>
  <div class="columns">
    <span class="column col-2 text-bold">{{ label }}</span>
    <a class="column col-auto" :href="href || value" target="_blank">{{ value }}</a>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "href"]
};
</script>

<style></style>
