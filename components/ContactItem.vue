<template>
  <div class="tile tile-centered">
    <div class="tile-content">
      <div class="tile-title text-bold">{{ label }}</div>
      <slot />
      <div class="divider" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style></style>
