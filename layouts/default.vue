<template>
  <div class="container grid-xl">
    <div class="columns">
      <div class="column col-sm-12 col-md-10 col-8 col-mx-auto">
        <header class="navbar app-navbar">
          <section class="navbar-section">
            <nuxt-link to="/">
              <h2 class="brand">Fernando Berti</h2>
            </nuxt-link>
          </section>
          <section class="navbar-section">
            <nuxt-link to="/blog" class="btn btn-link">Blog</nuxt-link>
            <nuxt-link to="/resume" class="btn btn-link">Resume</nuxt-link>
            <nuxt-link to="/contact" class="btn btn-link">Contact</nuxt-link>
          </section>
        </header>
        <section class="section">
          <nuxt />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-navbar {
  position: sticky;
  top: 0;
  background-color: rgba($color: #fff, $alpha: 0.9);
  padding: 1rem 0 2rem 0;
  z-index: 98;
}
.brand {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
</style>
