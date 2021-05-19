<template>
  <div>
    <div
      v-for="person in persons"
      :key="person.name"
      class="sr-only lg:not-sr-only"
    >
      <section class="mx-auto text-gray-600 body-font">
        <div class="flex pt-12 px-5 mx-auto flex flex-col">
          <div class="shadow-lg bg-white rounded-lg lg:w-3/4 mx-auto">
            <p class="text-bold text-2xl ml-4 p-4 text-black">
              Un día como hoy en {{ person.year }}
            </p>
            <div class="h-72 shadow overflow-hidden">
              <img
                alt="content"
                class="shadow object-cover object-center h-full w-full"
                :src="person.portrait"
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10 p-6">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img
                  class="w-1/2 mx-auto rounded-full"
                  :src="person.imageCircle"
                />
                <div
                  class="flex flex-col items-center text-center justify-center"
                >
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    {{ person.name }}
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    {{ person.resumen }}
                  </p>
                </div>
              </div>
              <div
                class="
                  sm:w-2/3
                  sm:pl-8
                  sm:py-8
                  sm:border-l
                  border-gray-200
                  sm:border-t-0
                  border-t
                  mt-4
                  pt-4
                  sm:mt-0
                  text-center
                  sm:text-left
                "
              >
                <article class="leading-relaxed text-lg mb-4">
                  {{ person.description }}
                </article>
                <NuxtLink
                  :to="{
                    name: 'artistsBlog-slug',
                    params: { slug: person.slug },
                  }"
                  class="text-indigo-500 inline-flex items-center"
                  >Leer más
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!--::::::::::::::::::::Efemerides::::::::::::::::::::::::-->
    <div class="lg:sr-only w-full" v-for="person of persons" :key="person.slug">
      <div class="flex flex-wrap">
        <div class="p-4 md:w-1/2 mx-auto">
          <div
            class="
              shadow-lg
              bg-white bg-opacity-75
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
          >
            <p class="text-bold text-2xl p-4 text-left">
              Un día como hoy, en
              {{ person.year }}
            </p>
            <img
              class="shadow lg:h-48 md:h-36 w-full object-cover object-center"
              :src="person.portrait"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="
                  tracking-widest
                  text-xs
                  title-font
                  font-medium
                  text-gray-800
                  mb-1
                  rounded-full
                  bg-teal-accent-400
                "
              >
                <NuxtLink to="/artists"> EFEMÉRIDES </NuxtLink>
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ person.name }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ person.description }}
              </p>
              <div class="flex items-center flex-wrap">
                <NuxtLink
                  :to="{
                    name: 'artistsBlog-slug',
                    params: { slug: person.slug },
                  }"
                  class="
                    text-blue-500 text-xl
                    inline-flex
                    items-center
                    md:mb-2
                    lg:mb-0
                  "
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
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const current = new Date();
    const todayDay = current.getDate();
    const todayMonth = current.getMonth();

    const persons = await $content("artists")
      .fetch()
      .where({ day: todayDay, month: todayMonth })
      .fetch();

    return {
      persons,
    };
  },
};
</script>
