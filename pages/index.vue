<template>
  <div class="w-screen leading-normal tracking-normal text-gray-900 font-sans">
    <div
      class="container mx-auto flex flex-wrap lg:flex-row flex-col md:flex-row items-center"
    >
      <div
        class=" my-24 mx-auto flex-col lg:mx-auto w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
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
        <h1 class="text-center md: text-xl text-blue-500 font-serif">es</h1>

        <h1
          class="my-4
          text-4xl
        text-blue-500
          font-bold
          leading-tight
          text-center     
          font-serif"
        >
          Adolfo Fernández Zepeda
        </h1>

        <p
          class="leading-normal
          md:text-2xl 
          mb-8
          text-center 
          mx-auto
          text-white"
        >
          La voz favorita de México.
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

<script></script>
