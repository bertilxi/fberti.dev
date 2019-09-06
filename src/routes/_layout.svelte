<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<div class="font-sans text-gray-800 antialiased container mx-auto max-w-4xl">
  <Nav {segment} />
  <main class="mt-10">
    <slot />
  </main>
</div>
