<script>
  export let label = "";
  export let value = "";
  export let href = "";
</script>

<template>
  <div class="flex-1">
    <span class="font-bold">{label}</span>
    :
    {#if href}
      <a {href} target="_blank">{value}</a>
    {:else}
      <span>{value}</span>
    {/if}
  </div>
</template>
