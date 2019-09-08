<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style global lang="postcss">
  @import "../styles/main.pcss"
</style>

<template>
  <Nav {segment} />

  <main class="mt-10">
    <slot />
  </main>
</template>
