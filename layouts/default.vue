<template>
  <div class="font-sans text-gray-800 antialiased container mx-auto max-w-4xl">
    <Nav />
    <main class="mt-10">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: { Nav }
};
</script>
