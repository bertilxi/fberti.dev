<template>
  <div class="experience">
    <h5>{{ name }}</h5>
    <div>{{ location }}</div>
    <div>{{ from }} - {{ to || "Present" }} , {{ elapsedLabel }}</div>
    <div>{{ position }}</div>

    <div>{{ description }}</div>
    <div>{{ roles }}</div>
    <div>{{ technologies }}</div>
    <div>{{ team }}</div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "location",
    "from",
    "to",
    "position",
    "description",
    "roles",
    "technologies",
    "team"
  ],
  computed: {
    elapsed() {
      const from = new Date(this.from);
      const to = this.to ? new Date(this.to) : new Date();
      const diff = to.getTime() - from.getTime();

      const seconds = Math.floor(diff / 1000);
      const minute = Math.floor(seconds / 60);
      const hour = Math.floor(minute / 60);
      const day = Math.floor(hour / 24);
      const month = Math.floor(day / 29);
      const year = Math.floor(month / 12);

      return {
        month: month % 12,
        year
      };
    },
    elapsedLabel() {
      const elapsed = this.elapsed;
      let label = "";
      if (elapsed.year === 1) {
        label += `${elapsed.year} year`;
      }
      if (elapsed.year > 1) {
        label += `${elapsed.year} years`;
      }
      if (elapsed.month === 1) {
        label += ` ${elapsed.month} month`;
      }
      if (elapsed.month > 1) {
        label += ` ${elapsed.month} months`;
      }
      return label.trim();
    }
  }
};
</script>

<style>
.experience {
  margin-bottom: 1rem;
}
</style>
