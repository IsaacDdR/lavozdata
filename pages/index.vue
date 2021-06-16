<template>
  <div
    class="
      flex flex-wrap
      lg:flex-row
      flex-col
      md:flex-row
      items-center
      mx-auto
      pt-56
      md:pt-64
    "
  >
    <!--
    <div
      class="w-screen leading-normal tracking-normal text-gray-900 font-sans"
    >
      <div
        class="
          mt-56
          md:mt-64
          mb-8
          mx-auto
          flex-col
          lg:mx-auto
          w-full
          justify-center
          lg:items-start
        "
      >
        <h1
          class="
            md:my-4
            text-blue-900 text-6xl
            font-bold
            leading-tight
            text-center
            font-serif
            mt-5
          "
        >
          La Voz Universal
        </h1>
        <div class="flex">
          <p class="mx-auto text-2xl italic text-gray-900">
            La voz favorita de mexico
          </p>
        </div>
      </div>
    </div>
    -->
    <div
      v-for="person in persons"
      :key="person.name"
      class="sr-only lg:not-sr-only"
    >
      <section class="text-gray-600 body-font mx-auto">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-24
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              :src="person.portrait"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start
              md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-gray-900
              "
            >
              Before they sold out
              <br class="hidden lg:inline-block" />readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              {{ person.description }}
            </p>
            <div class="flex justify-center">
              <button
                class="
                  inline-flex
                  text-white
                  bg-indigo-500
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                Button
              </button>
              <button
                class="
                  ml-4
                  inline-flex
                  text-gray-700
                  bg-gray-100
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-gray-200
                  rounded
                  text-lg
                "
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!--
 
    <div
      v-for="person in persons"
      :key="person.name"
      class="sr-only lg:not-sr-only"
    >
      <section class="mx-auto text-gray-600 body-font">
        <div class="flex pt-12 px-5 mx-auto flex flex-col">
          <div class="shadow-lg bg-white rounded-lg lg:w-3/4 mx-auto">
            <p class="text-bold text-2xl ml-4 p-4 text-black">
              Un día como hoy {{ person.year }}
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
    -->

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
                    text-blue-900 text-xl
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
    <!--Da formato en el inicio a la imagen de Adolfo-->
    <div class="mx-auto flex flex-col w-1/2 pt-20 font-serif">
      <div class="text-center text-white mx-auto">
        <img
          class="mx-auto rounded-full shadow-xl border-blue-900 border-4"
          src="~/assets/adolfo.jpg"
          alt="Adolfo"
        />
        <section class="text-gray-600 body-font">
          <div class="container py-12 mx-auto">
            <div class="w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-900 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                ></path>
              </svg>
              <p class="leading-relaxed text-lg text-gray-900">"Frase"</p>
              <span
                class="inline-block h-1 w-10 rounded bg-gray-900 mt-8 mb-6"
              ></span>
              <h2
                class="
                  text-gray-900
                  font-medium
                  title-font
                  tracking-wider
                  text-sm
                "
              >
                ADOLFO FERNÁNDEZ ZEPEDA
              </h2>
              <p class="text-gray-800">Locutor</p>
              <p class="text-gray-800">"La Voz Universal"</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  async asyncData({ $content, params }) {
    const current = new Date();
    const todayDay = current.getDate();
    const todayMonth = current.getMonth();

    const personToday = await $content("artists")
      .where({ day: todayDay, month: todayMonth })
      .fetch();

    const persons = await $content("artists")
      .where({ day: todayDay, month: todayMonth })
      .fetch();

    return {
      todayDay,
      todayMonth,
      personToday,
      persons,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 0.5s;
}
.fade-slow-enter,
.fade-slow-leave-active {
  opacity: 0;
}
</style>
