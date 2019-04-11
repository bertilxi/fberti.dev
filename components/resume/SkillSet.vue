<template>
  <div class="skillset">
    <h5>{{ title }}</h5>
    <span v-for="skill in skills" :key="skill" class="chip"> {{ skill }} </span>
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
</style>
