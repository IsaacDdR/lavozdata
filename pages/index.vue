<template>
  <div>
    <div
      id="vanta-selector"
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
      <div
        class="flex mx-auto mt-12"
        v-for="artist in article"
        :key="artist.id"
      >
        <div class="sr-only lg:not-sr-only">
          <section class="text-gray-600 body-font">
            <div class="mx-auto flex mt-8 flex-row items-center">
              <div class="py-4 w-1/2 mb-10 md:mb-0">
                <nuxt-img
                  class="object-center w-2/5 mx-auto shadow-lg rounded-full"
                  alt="hero"
                  format="webp"
                  :src="artist.imagen.url"
                />
              </div>
              <div
                class="
                  w-1/3
                  flex flex-col
                  mr-24
                  bg-white
                  p-8
                  rounded
                  border-2 border-blue-600
                  bg-clip-padding
                  backdrop-filter backdrop-blur-xl
                  bg-opacity-50
                  shadow-lg
                "
              >
                <p class="text-bold text-1xl mb-4 text-left text-gray-800">
                  UN DÍA COMO HOY, EN
                  {{ artist.year }}
                </p>
                <h1 class="title-font text-4xl mb-4 font-medium text-gray-900">
                  {{ artist.nombre }}
                  <br class="hidden lg:inline-block" />
                </h1>
                <p class="mb-4 text-gray-900 text-lg italic">
                  "{{ artist.frase }}"
                </p>
                <div class="flex items-center flex-wrap">
                  <NuxtLink
                    :to="`/artistsBlog/${artist.slug}`"
                    class="
                      text-blue-900 text-xl
                      inline-flex
                      items-center
                      md:mb-2
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
          </section>
        </div>
      </div>

      <!--::::::::::::::::::::Efemeride en celular
    ::::::::::::::::::::::::-->
      <div
        class="lg:sr-only w-full"
        v-for="artist in article"
        :key="artist.slug"
      >
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
                {{ artist.year }}
              </p>
              <img
                class="shadow h-48 w-full object-cover object-center"
                :src="artist.imagen.url"
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
                  {{ artist.nombre }}
                </h1>
                <p class="leading-relaxed mb-3">
                  {{ artist.frase }}
                </p>
                <div class="flex items-center flex-wrap">
                  <NuxtLink
                    :to="`/artistsBlog/${artist.slug}`"
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
    </div>
    <section class="text-gray-600 body-font mx-auto w-full">
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
        <div
          class="
            mx-auto
            md:w-1/4
            w-full
            flex flex-col
            md:items-start
            mb-8
            md:mb-0
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
            Adolfo Fernández Zepeda
          </h1>
          <p class="mb-4 leading-relaxed text-gray-800">
            "Todo pasa, todo cambia pero el rock sigue en la voz universal"
          </p>
          <div class="flex justify-center mx-auto">
            <NuxtLink
              to="/about"
              class="
                inline-flex
                text-gray-700
                py-2
                focus:outline-none
                rounded
                text-lg
              "
            >
              Conoce más
            </NuxtLink>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="
              object-cover object-center
              rounded-full
              border-4 border-blue-600
            "
            alt="hero"
            src="~/assets/adolfo.png"
          />
        </div>
      </div>
    </section>
    <!--Da formato en el inicio a la imagen de Adolfo
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
              <p class="leading-relaxed text-2xl text-gray-900">
                "Todo pasa todo cambia pero el rock sigue en la voz universal"
              </p>
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
      -->
  </div>
</template>
<script>
export default {
  scrollToTop: true,

  mounted() {
    VANTA.GLOBE({
      el: "#vanta-selector",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1c47e8,
      color2: 0xff0000,
      backgroundColor: 0xffffff,
    });
  },
  async asyncData({ $strapi }) {
    const current = new Date();
    const todayDay = current.getDate();
    const todayMonth = current.getMonth();
    const realMonth = todayMonth + 1;

    const article = await $strapi.find("artistas", {
      dia: todayDay,
      mes: realMonth,
    });
    return {
      article,
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
