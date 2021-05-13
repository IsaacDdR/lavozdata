<template>
  <div class="bg-black">
    <article>
      <h1 class="text-4xl text-white">{{ artists.name }}</h1>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const artists = await $content("artists", params.slug).fetch();
    return { artists };
  }
};
</script>
