<template>
  <div class="skillset">
    <h5>{{ title }}</h5>
    <span v-for="skill in skills" :key="skill" class="chip">
      {{ skill }} <span class="separator">, </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "skills"]
};
</script>

<style scoped>
.chip {
  background: #0052cc !important;
  color: white !important;
  font-weight: bold !important;
}
.skillset {
  margin-bottom: 1rem;
}
.separator {
  display: none;
}
@media print {
  .chip {
    background: #fff !important;
    color: #000 !important;
    font-weight: normal !important;
    padding: 0;
  }
  .separator {
    display: inline;
  }
}
</style>
