<template>
  <div>
    <div class="pt-56">
      <span class="ml-5 md:ml-16 text-xl active:shadow-inner noSelect">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        <NuxtLink class="text-bold" to="/"> Inicio</NuxtLink>
      </span>
      <h1
        class="
          sm:text-5xl
          text-3xl
          font-extrabold
          text-center
          mx-auto
          title-font
          text-blue-900
          pt-6
        "
      >
        Efemérides
      </h1>
      <p
        class="
          lg:w-2/3
          mx-auto
          text-center text-gray-900
          leading-relaxed
          text-base
          font-bold
          mt-2
        "
      >
        Día a día, datos históricos de la música.
      </p>
    </div>
    <div class="flex flex-wrap pt-4">
      <NuxtLink
        :to="{ name: 'artistsBlog-slug', params: { slug: artist.slug } }"
        v-for="artist of artists"
        :key="artist.slug"
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mt-4"
      >
        <div class="p-4">
          <div
            class="
              h-full
              bg-blue-100 bg-opacity-75
              px-8
              pt-16
              pb-24
              rounded-lg
              overflow-hidden
              text-center
              relative
            "
          >
            <img class="w-3/4 mx-auto pb-5" :src="artist.imageCircle" />
            <h1
              class="title-font text-3xl text-xl font-medium text-gray-900 mb-3"
            >
              {{ artist.name }}
              <p class="text-xl">
                {{ artist.day + "/" + artist.realMonth + "/" + artist.year }}
              </p>
            </h1>
            <p class="leading-relaxed mb-3">
              {{ '"' + artist.frase + '"' }}
            </p>
            <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
              >Leer más
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  async asyncData({ $content }) {
    const artists = await $content("artists").fetch();
    return { artists };
  },
};
</script>
