<script>
  export let segment;
</script>

<nav class="app-navbar flex items-center justify-between flex-wrap p-4">
  <div class="flex items-center flex-shrink-0 mr-6">
    <a href="/">
      <div
        class="bg-blue-500 text-white text-xl font-semibold h-8 w-8 rounded-full
        flex items-center justify-center">
        <span class="pt-1">FB</span>
      </div>
    </a>
  </div>
  <div class="flex items-center flex-shrink-0">
    <div class="text-sm lg:flex-grow" />
    <div>
      <a
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 ml-4"
        href="/blog"
        rel="prefetch"
        class:text-blue-500={segment === 'blog'}>
        Blog
      </a>

      <a
        class="hover:text-blue-500 ml-4"
        href="/resume"
        rel="prefetch"
        class:text-blue-500={segment === 'resume'}>
        Resume
      </a>
    </div>
  </div>
</nav>
