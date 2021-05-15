<template>
  <div class="flex flex-wrap">
    <NuxtLink
      :to="{ name: 'artists-blog-slug', params: { slug: artist.slug } }"
      v-for="artist of artists"
      :key="artist.slug"
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <div class="p-4">
        <div
          class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
        >
          <img class="rounded-full w-3/4 mx-auto pb-5" :src="artist.image" />
          <h1
            class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
          >
            {{ artist.name }}
          </h1>
          <p class="leading-relaxed mb-3">
            {{ artist.frase }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const artists = await $content("artists").fetch();
    return { artists };
  }
};
</script>
