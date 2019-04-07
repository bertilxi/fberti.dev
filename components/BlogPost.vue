<template>
  <nuxt-link class="card" :to="link">
    <div class="card-header">
      <span class="float-right text-bold">
        {{ date }}
      </span>
      <h3 class="card-title h5 text-bold text-dark">
        {{ post.title }}
      </h3>
      <div class="card-subtitle text-gray">{{ post.description }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    link() {
      return `/blog/${this.post.name}`;
    },
    date() {
      return new Date(this.post.date).toDateString();
    }
  }
};
</script>

<style lang="scss">
a.card {
  text-decoration: none;
  color: black;
}
</style>
