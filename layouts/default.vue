<template>
  <div class="layout container grid-md">
    <header class="navbar app-navbar">
      <section class="navbar-section">
        <nuxt-link to="/" class="brand">
          <img class="img-responsive" src="~/static/icon.png" width="36" />
        </nuxt-link>
      </section>
      <section class="navbar-section">
        <nuxt-link to="/blog" class="btn btn-link">Blog</nuxt-link>
        <nuxt-link to="/resume" class="btn btn-link">Resume</nuxt-link>
      </section>
    </header>
    <section class="section my-section">
      <nuxt />
    </section>
    <footer class="navbar footer">
      <section class="navbar-section"></section>
      <section class="navbar-section">
        <a class="btn btn-link" @click="mailto()">
          Email
        </a>

        <a
          class="btn btn-link"
          href="https://www.linkedin.com/in/fernando-ivan-berti-81717b37"
          target="_blank"
        >
          LinkedIn
        </a>

        <a
          class="btn btn-link"
          href="https://github.com/bertilxi"
          target="_blank"
        >
          Github
        </a>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    mailto() {
      window.open("mailto:bertilxi@gmail.com");
    }
  }
};
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-navbar {
  padding: 1rem 0;
  z-index: 98;
}
.brand {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
.my-section {
  flex: 1 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.footer {
  align-items: flex-start;
  margin: 0.5rem 0;
}
</style>
