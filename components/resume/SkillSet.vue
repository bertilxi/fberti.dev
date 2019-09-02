<template>
  <div class="flex-1">
    <h5 class="font-bold">{{ title }}</h5>
    <div>
      <span
        v-for="skill in skills"
        :key="skill"
        class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-1"
        >{{ skill }}</span
      >
    </div>
  </div>
</template>

<script>
import { Props } from "@/utils/props";

export default {
  props: {
    title: Props.string(),
    skills: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
