<template>
  <div class="education">
    <div class="text-bold institute">
      {{ institute }}
    </div>
    <div class="text-gray">
      {{ location }}
    </div>
    <div class="text-bold text-gray">{{ from }} - {{ to }}</div>
    <h6 class="text-bold title">
      {{ title }}
    </h6>
  </div>
</template>

<script>
export default {
  props: ["institute", "location", "from", "to", "title"]
};
</script>

<style>
.education {
  margin-bottom: 1.5rem;
}
.institute,
.title {
  font-size: 18px;
}
</style>
