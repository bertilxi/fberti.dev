<script>
  import dayjs from "dayjs";
  import "dayjs/locale/en";

  dayjs.locale("en");
  const dateFormat = "MMM YYYY";

  export let name = "";
  export let location = "";
  export let from = "";
  export let to = "";
  export let position = "";
  export let description = "";
  export let roles = "";
  export let technologies = "";
  export let team = "";

  $: fromLabel = dayjs(from).format(dateFormat);
  $: toLabel = to ? dayjs(to).format(dateFormat) : "Present";

  const getElapsed = () => {
    const dateFrom = new Date(from);
    const dateTo = to ? new Date(to) : new Date();
    const diff = dateTo.getTime() - dateFrom.getTime();
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
  };

  $: elapsed = getElapsed();

  const getElapsedLabel = () => {
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
  };

  $: elapsedLabel = getElapsedLabel();
</script>

<style lang="postcss">
  .experience-container {
    @apply w-full;
  }
  .experience-container:not(:last-child) {
    @apply mb-8;
  }
</style>

<template>
  <div class="experience-container">
    <h5 class="font-bold">{name}</h5>

    <div class="flex text-xs">
      <div class="w-2/3">
        <div class="text-gray-600 font-bold">
          {fromLabel} - {toLabel}
          <span class="px-1">|</span>
          <span>{elapsedLabel}</span>
        </div>
      </div>
      <div class="flex-1">
        <div class="text-gray-600 text-right">{location}</div>
      </div>
    </div>

    <div class="font-bold">{position}</div>

    <p class="my-4">
      <slot />
    </p>

    {#if roles}
      <div>
        <strong>Roles:</strong>
        {roles}
      </div>
    {/if}

    {#if technologies}
      <div>
        <strong>Technologies:</strong>
        {technologies}
      </div>
    {/if}

    {#if team}
      <div>
        <strong>Team:</strong>
        {team}
      </div>
    {/if}
  </div>
</template>
