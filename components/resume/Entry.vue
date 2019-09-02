<template>
  <div class="flex-1">
    <span class="font-bold">{{ label }}</span
    >:
    <a v-if="href" :href="href" target="_blank">{{ value }}</a>
    <span v-else>{{ value }}</span>
  </div>
</template>

<script>
import { Props } from "@/utils/props";

export default {
  props: {
    label: Props.string(),
    value: Props.string(),
    href: Props.string()
  }
};
</script>
