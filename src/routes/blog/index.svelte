<!-- <script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script><script>
  export let posts;
</script><h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul> -->

<svelte:head>
  <title>Fernando Berti | Blog</title>
</svelte:head>

<div class="h-64 flex flex-col items-center justify-center m-4">
  <p class="text-4xl font-light">Soon...</p>
  <p class="text-xl text-gray-600">Work in progres.</p>
</div>
