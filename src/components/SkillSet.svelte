<script>
  export let title = "";
  export let skills = [];
</script>

<template>
  <div class="flex-1">
    <h5 class="font-bold">{title}</h5>
    <div>
      {#each skills as skill (skill)}
        <span
          class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs
          font-semibold mr-2 mb-1">
          {skill}
        </span>
      {/each}
    </div>
  </div>
</template>
