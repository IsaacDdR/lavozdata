<template>
  <div class="pt-12">
    <div
      class="
        relative
        px-4
        pt-56
        mx-auto
        md:pt-64
        md:px-8
        xl:px-20
        sm:max-w-xl
        md:max-w-full
      "
    >
      <span class="ml-2 md:ml-2 text-xl active:shadow-inner noSelect">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        <NuxtLink class="text-bold" to="/blog"> Blog</NuxtLink>
      </span>
      <article>
        <div class="max-w-xl mx-auto lg:max-w-screen-xl">
          <div class="mb-16 mt-12 lg:max-w-lg lg:mb-0">
            <div class="max-w-xl mb-6 mt-4">
              <h2
                class="
                  max-w-lg
                  mb-6
                  font-sans
                  text-3xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                  sm:leading-none
                "
              >
                {{ article.titulo }}
              </h2>
              <p class="text-base text-gray-900 md:text-lg">
                {{ article.descripcion }}
              </p>
            </div>
            <div class="flex items-center">
              <a
                href="/"
                class="
                  inline-flex
                  items-center
                  justify-center
                  h-12
                  px-6
                  mr-6
                  font-medium
                  tracking-wide
                  font-semibold
                  transition
                  duration-200
                  rounded
                  shadow-md
                  bg-blue-500
                  text-white
                  hover:bg-blue-700
                  focus:shadow-outline
                  focus:outline-none
                "
              >
                Inicio
              </a>
              <NuxtLink
                to="/blog"
                aria-label=""
                class="
                  inline-flex
                  items-center
                  font-semibold
                  transition-colors
                  duration-200
                  text-deep-purple-accent-400
                  hover:text-deep-purple-800
                "
                >Blog</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="
            flex
            justify-center
            h-full
            overflow-hidden
            lg:w-2/3
            xl:w-1/2
            lg:absolute
            lg:justify-start
            lg:bottom-0
            lg:right-0
            lg:items-end
          "
        >
          <img
            class="
              object-cover object-top
              w-full
              h-64
              max-w-xl
              -mb-16
              rounded
              shadow-2xl
              lg:ml-64
              xl:ml-8
              lg:-mb-24
              xl:-mb-28
              lg:h-auto
              lg:max-w-screen-md
            "
            alt=""
          />
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
  useRoute,
} from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const article = ref({});
    const route = useRoute();
    const { $strapi } = useContext();

    useFetch(async () => {
      article.value = await $strapi.findOne("articulos", route.value.params.id);
    });

    return { article };
  },
});

/*
export default {
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.find("articulos", {
      slug: params.slug,
    });
    return {
      article: matchingArticles[0],
    };
  },
};
      export default {
        scrollToTop: true,
        async asyncData({ $content, params }) {
          const artist = await $content("blog", params.slug).fetch();
          return { artist };
        },
      };
      */
</script>
