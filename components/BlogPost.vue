<template>
  <div class="card">
    <div class="card-header">
      <nuxt-link class="btn btn-sm btn-link float-right text-bold" :to="link">
        Read more
      </nuxt-link>
      <nuxt-link class="card-title h5 text-bold text-dark" :to="link">
        {{ post.title }}
      </nuxt-link>
      <div class="card-subtitle text-gray">{{ post.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    link() {
      return `/blog/${this.post.name}`;
    }
  }
};
</script>

<style></style>
