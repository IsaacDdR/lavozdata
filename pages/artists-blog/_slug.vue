<template>
  <div class="bg-black">
    <article>
      <h1 class="text-4xl text-white">{{ artist.name }}</h1>
      <p class="text-4xl text-white">{{ artist.description }}</p>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const artist = await $content("artists", params.slug).fetch();
    return { artist };
  }
};
</script>
