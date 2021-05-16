<template>
  <div class="flex flex-wrap lg:flex-row flex-col md:flex-row items-center">
    <div
      class="w-screen leading-normal tracking-normal text-gray-900 font-sans"
    >
      <div
        class=" mt-24 mb-8 mx-auto flex-col lg:mx-auto w-full xl:w-2/5 justify-center lg:items-start"
      >
        <h1
          class="md:my-4
          text-blue-600
          text-6xl
          font-bold
          leading-tight
          text-center     
          slide-in-bottom-h1
          font-serif
          mt-5"
        >
          La Voz Universal
        </h1>
        <div class="flex">
          <p class="mx-auto text-2xl italic">
            La voz favorita de mexico
          </p>
        </div>
      </div>
      <Stream class="mx-auto" />
    </div>

    <div
      v-for="person in persons"
      :key="person.slug"
      class="sr-only lg:not-sr-only"
    >
      <section class="mx-auto text-gray-600 body-font">
        <div class="flex px-5 py-24 mx-auto flex flex-col">
          <div class="bg-white rounded-lg lg:w-1/2 mx-auto">
            <div class="rounded-t-lg h-72 shadow overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
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
                    {{ person.description }}
                  </p>
                </div>
              </div>
              <div
                class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              >
                <p class="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <a class="text-indigo-500 inline-flex items-center"
                  >Learn More
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!--::::::::::::::::::::Efemerides::::::::::::::::::::::::-->
    <div class="lg:sr-only w-full" v-for="person of persons" :key="person.slug">
      <p class="text-bold text-3xl ml-4 pt-4 text-center">
        Un día como hoy...
      </p>
      <div class="flex flex-wrap">
        <div class="p-4 md:w-1/2 mx-auto">
          <div
            class="bg-white bg-opacity-75 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="person.image"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-800 mb-1 rounded-full bg-teal-accent-400"
              >
                <NuxtLink to="/artists">
                  EFEMÉRIDES
                </NuxtLink>
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ person.name }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ person.description }}
              </p>
              <div class="flex items-center flex-wrap ">
                <NuxtLink
                  :to="{
                    name: 'artists-blog-slug',
                    params: { slug: person.slug }
                  }"
                  class="text-indigo-500 inline-flex items-center md:mb-2
                  lg:mb-0"
                  >Conoce más
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
                <span
                  class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle></svg
                  >1.2K
                </span>
                <span
                  class="text-gray-400 inline-flex items-center leading-none text-sm"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path></svg
                  >6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto flex flex-col md:flex-row md:w-3/4 pt-10 font-serif">
      <div class="text-center text-white mx-auto">
        <img
          class="mx-auto w-1/2 md:w-3/4 rounded-xl shadow-xl border-gray-500 border-8"
          src="~/assets/adolfo.jpg"
          alt="Adolfo"
        />
        <div class="py-5 w-100 italic text-black text-bold text-xl">
          <p>
            He sido la voz unisal desde
          </p>
        </div>
      </div>
      <div class="mx-auto text-center">
        <h1 class="text-white text-4xl py-3">Adolfo Fernández Zepeda</h1>
        <p class="text-white">Texto!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "inicio",
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
      persons
    };
  }
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
