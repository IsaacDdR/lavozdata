<template>
  <div class="w-screen leading-normal tracking-normal text-gray-900 font-sans">
    <div
      class="container mx-auto flex flex-wrap lg:flex-row flex-col md:flex-row items-center"
    >
      <div
        class=" my-24 mx-auto flex-col lg:mx-auto w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
      >
        <NuxtLink
          :to="{ name: 'artists-slug', params: { slug: person.slug } }"
          v-for="person of persons"
          :key="person.name"
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
            {{ person.name }}
          </h1>
          <div class="flex">
            <p class="mx-auto text-2xl italic">
              {{ '"' + person.frase + '"' }}
            </p>
          </div>
        </NuxtLink>
        <p
          class="leading-normal
          text-xl
          my-4
          text-center 
          mx-auto
          "
        >
          La radio favorita de México.
        </p>
      </div>

      <Stream />
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
    <Redes />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const current = new Date();
    const todayDay = current.getDate();
    const todayMonth = current.getMonth();

    const persons = await $content("artists")
      .where({ day: todayDay, month: todayMonth })
      .fetch();
    return {
      persons
    };
  }
};
</script>
