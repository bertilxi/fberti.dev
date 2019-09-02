<template>
  <nav class="app-navbar flex items-center justify-between flex-wrap p-4">
    <div class="flex items-center flex-shrink-0 mr-6">
      <nuxt-link to="/">
        <div
          class="bg-blue-500 text-white text-xl font-semibold h-8 w-8 rounded-full flex items-center justify-center"
        >
          <span class="pt-1">FB</span>
        </div>
      </nuxt-link>
    </div>
    <div class="flex items-center flex-shrink-0">
      <div class="text-sm lg:flex-grow" />
      <div>
        <!-- <nuxt-link
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 ml-4"
          to="/blog"
          >Blog</nuxt-link
        >-->

        <nuxt-link class="hover:text-blue-500 ml-4" to="/resume">Resume</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media print {
  .app-navbar {
    display: none;
  }
}
</style>
