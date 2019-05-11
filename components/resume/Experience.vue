<template>
  <div class="experience">
    <h5 class="text-bold">{{ name }}</h5>
    <div class="text-gray">{{ location }}</div>
    <div class="text-gray text-bold">
      {{ fromLabel }} - {{ toLabel }}
      <span class="chip time-chip text-light">{{ elapsedLabel }}</span>
    </div>
    <div class="text-bold">{{ position }}</div>
    <br />
    <p>
      <slot />
    </p>

    <div v-if="roles"><strong>Roles:</strong> {{ roles }}</div>
    <div v-if="technologies">
      <strong>Technologies:</strong> {{ technologies }}
    </div>
    <div v-if="team"><strong>Team:</strong> {{ team }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");
const dateFormat = "MMM YYYY";

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
    fromLabel() {
      return dayjs(this.from).format(dateFormat);
    },
    toLabel() {
      return this.to ? dayjs(this.to).format(dateFormat) : "Present";
    },
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
  margin: 2rem 0;
}
.chip {
  margin-left: 1rem;
  background: #0052cc !important;
  color: white !important;
  font-weight: bold !important;
}
@media print {
  .chip {
    margin-left: 7px;
    background: #fff !important;
    color: #ddd !important;
    font-weight: bold !important;
  }
}
</style>
