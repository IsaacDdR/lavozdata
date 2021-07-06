<template>
  <div class="pt-16">
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
        "
      >
        Blog
      </h1>
      <p
        class="
          lg:w-2/3
          mx-auto
          text-center text-gray-900
          leading-relaxed
          text-base
          font-bold
          mt-4
        "
      >
        Datos, pensamientos y redacciones.
      </p>
    </div>
    <div class="flex flex-wrap mt-5">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="`/lavozBlog/${article.slug}`"
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <div class="p-4">
          <div
            class="
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
          >
            <nuxt-img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="article.imagen.url"
              format="webp"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ article.titulo }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ article.descripcion }}
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
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
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $strapi }) {
    const articles = await $strapi.find("articulos");
    return {
      articles,
    };
  },
};

/*
import { useFetch, ref } from "@nuxtjs/composition-api";
export default {
  setup() {
    const articles = ref();
    useFetch(async ({ $strapi }) => {
      articles.value = await $strapi.find("articulos");
    });
    return { articles };
  },
};

export default {
  scrollToTop: true,
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug).fetch();
    return { articles };
  },
};
    */
</script>
