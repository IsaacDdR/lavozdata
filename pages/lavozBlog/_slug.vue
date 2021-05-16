<template>
  <article>
    <h1>{{ artist.name }}</h1>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const artist = await $content("blog", params.slug).fetch();
    return { artist };
  },
};
</script>
