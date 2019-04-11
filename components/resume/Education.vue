<template>
  <div class="education">
    <div>{{ institute }}</div>
    <div>{{ location }}</div>
    <div>{{ from }} - {{ to }}</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["institute", "location", "from", "to", "title"]
};
</script>

<style>
.education {
  margin-bottom: 1rem;
}
</style>
