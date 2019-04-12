<template>
  <div class="columns">
    <span class="column col-2 col-md-3 text-bold">{{ label }}</span>
    <a v-if="href" class="column col-auto" :href="href" target="_blank">{{
      value
    }}</a>
    <span v-else class="column col-auto">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "href"]
};
</script>

<style></style>
