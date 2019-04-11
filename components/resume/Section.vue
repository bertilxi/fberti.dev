<template>
  <div class="card resume-section">
    <div class="card-body">
      <h4 class="text-bold text-primary">{{ title }}</h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
.resume-section {
  margin-bottom: 1rem;
}
@media print {
  .resume-section {
    margin: 1rem;
  }
}
</style>
