<template>
  <div class="flex-1">
    <div class="font-bold">{{ institute }}</div>
    <div class="text-gray-600">{{ location }}</div>
    <div class="font-bold text-gray-600">{{ from }} - {{ to }}</div>
    <h6 class="text-bold">{{ title }}</h6>
  </div>
</template>

<script>
import { Props } from "@/utils/props";

export default {
  props: {
    institute: Props.string(),
    location: Props.string(),
    from: Props.string(),
    to: Props.string(),
    title: Props.string()
  }
};
</script>
