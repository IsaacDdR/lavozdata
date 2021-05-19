<template>
  <!--
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'artistsBlog-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.name }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'artistsBlog-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.name }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
  component -->
  <div class="row">
    <div class="w-full mx-auto">
      <div class="sm:grid grid-cols-4 gap-5 mx-auto px-16">
        <div class="col-start-1 col-end-3 my-2">
          <NuxtLink
            v-if="prev"
            :to="{ name: 'artistsBlog-slug', params: { slug: prev.slug } }"
          >
            <div
              class="
                h-full
                p-6
                dark:bg-gray-800
                bg-white
                hover:shadow-xl
                rounded
                border-b-4 border-blue-500
                shadow-md
              "
            >
              <h3 class="text-2xl mb-3 font-semibold inline-flex">
                <svg
                  class="mr-2"
                  width="24"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
                Anterior
              </h3>
              <p class="text-lg">{{ prev.name }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="col-end-5 col-span-2 my-2">
          <NuxtLink
            v-if="next"
            :to="{ name: 'artistsBlog-slug', params: { slug: prev.slug } }"
          >
            <div
              class="
                h-full
                p-6
                dark:bg-gray-800
                bg-white
                hover:shadow-xl
                rounded
                border-b-4 border-blue-500
                shadow-md
                text-right
              "
            >
              <h3 class="text-2xl mb-3 font-semibold inline-flex">
                Siguente
                <svg
                  class="ml-2"
                  width="24"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
              </h3>
              <p class="text-lg">{{ next.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
