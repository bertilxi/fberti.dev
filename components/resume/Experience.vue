<template>
  <div class="experience-container">
    <h5 class="font-bold">{{ name }}</h5>

    <div class="flex">
      <div class="w-2/3">
        <div class="text-gray-600 font-bold">
          {{ fromLabel }} - {{ toLabel }}
          <span class="px-2">|</span>
          <span>{{ elapsedLabel }}</span>
        </div>
      </div>
      <div class="flex-1">
        <div class="text-gray-600 text-right">{{ location }}</div>
      </div>
    </div>

    <div class="font-bold">{{ position }}</div>

    <p class="my-4">
      <slot />
    </p>

    <div v-if="roles">
      <strong>Roles:</strong>
      {{ roles }}
    </div>

    <div v-if="technologies">
      <strong>Technologies:</strong>
      {{ technologies }}
    </div>

    <div v-if="team">
      <strong>Team:</strong>
      {{ team }}
    </div>
  </div>
</template>

<script>
import { Props } from "@/utils/props";
import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");
const dateFormat = "MMM YYYY";

export default {
  props: {
    name: Props.string(),
    location: Props.string(),
    from: Props.string(),
    to: Props.string(),
    position: Props.string(),
    description: Props.string(),
    roles: Props.string(),
    technologies: Props.string(),
    team: Props.string()
  },
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

<style lang="postcss">
.experience-container {
  @apply w-full;
}
.experience-container:not(:last-child) {
  @apply mb-8;
}
</style>
