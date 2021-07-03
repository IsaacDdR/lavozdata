<template>
  <div class="pt-12">
    <article class="pt-64">
      <template>
        <span class="ml-5 md:ml-16 text-xl active:shadow-inner noSelect">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <NuxtLink class="text-bold" to="/artists"> Efemérides</NuxtLink>
        </span>
        <div class="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div
            class="
              flex flex-col
              items-start
              w-full
              max-w-xl
              px-4
              mx-auto
              lg:px-8 lg:max-w-screen-xl
            "
          >
            <div class="mb-16">
              <div class="max-w-xl mb-6">
                <h2
                  class="
                    max-w-lg
                    mb-6
                    font-sans
                    text-3xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    sm:text-4xl sm:leading-none
                  "
                >
                  <div
                    class="
                      inset-y-0
                      right-0
                      w-full
                      max-w-xl
                      px-4
                      mx-auto
                      lg:pl-8
                      lg:pr-0
                      lg:mb-0
                      lg:mx-0
                      lg:w-1/2
                      lg:max-w-full
                      lg:absolute
                      xl:px-0
                    "
                  >
                    <img
                      class="
                        object-cover
                        w-full
                        h-56
                        rounded
                        shadow-lg
                        lg:rounded-none lg:shadow-none
                        sm:h-96
                        lg:h-full
                      "
                      :src="'https://lavoz.herokuapp.com' + artist.imagen.url"
                      alt=""
                    />
                  </div>
                  <p class="ml-5 mt-4">{{ artist.nombre }}</p>
                </h2>
                <p class="text-base mx-5 text-gray-900 md:text-lg text-justify">
                  {{ artist.contenido }}
                </p>
              </div>
              <div class="flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    h-12
                    px-6
                    mb-3
                    font-medium
                    tracking-wide
                    text-white
                    transition
                    duration-200
                    rounded
                    shadow-md
                    md:w-auto md:mr-4 md:mb-0
                    bg-blue-400
                    hover:bg-deep-purple-accent-700
                    focus:shadow-outline focus:outline-none
                  "
                >
                  Inicio
                </a>
                <NuxtLink
                  to="/artists"
                  aria-label=""
                  class="
                    inline-flex
                    items-center
                    font-semibold
                    text-gray-800
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-700
                  "
                  >Más efemérides</NuxtLink
                >
              </div>
              <!--
            <LazyPrevNext :prev="prev" :next="next" />
            --></div>
          </div>
        </div>
      </template>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.find("artistas", {
      slug: params.slug,
    });
    return {
      artist: matchingArticles[0],
    };
  },
  scrollToTop: true,
  /*
  async asyncData({ $content, params }) {
    const artist = await $content("artists", params.slug)
      .sortBy("createdAt", "asc")
      .fetch();

    let [prev, next] = await $content("artists")
      .only("name", "slug")
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { artist, prev, next };
  },
  */
};
</script>
