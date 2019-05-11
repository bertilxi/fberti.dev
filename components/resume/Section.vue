<template>
  <div class="resume-section">
    <h4 class="text-bold text-primary resume-title">{{ title }}</h4>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
.resume-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.resume-title {
  margin-bottom: 0.75rem;
}
</style>
