<template>
  <div>
    <div v-for="post in posts" :key="post.title">
      <BlogPost :post="post" />
    </div>
  </div>
</template>

<script>
import posts from "@/content";
import BlogPost from "@/components/BlogPost.vue";

export default {
  components: {
    BlogPost
  },
  async asyncData() {
    const promises = posts.map(name =>
      import(`~/content/${name}.md`).then(post => ({
        ...post,
        ...post.attributes,
        name
      }))
    );

    return Promise.all(promises).then(posts => ({ posts }));
  }
};
</script>
