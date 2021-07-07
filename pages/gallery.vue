<template>
  <div class="pt-16">
    <section class="text-gray-900 body-font">
      <div class="container px-5 py-56 mx-auto">
        <span
          class="
            ml-2
            md:ml-16
            text-xl text-blue-900
            active:shadow-inner
            noSelect
          "
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <NuxtLink class="text-bold text-blue-900" to="/">Inicio</NuxtLink>
        </span>
        <div class="flex flex-col text-center w-full mb-12 mt-2">
          <h1
            class="
              sm:text-5xl
              text-2xl
              font-extrabold
              title-font
              mb-4
              text-blue-900
            "
          >
            Galería
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
            Recuerdos a través del tiempo
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                format="webp"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover object-center
                "
                src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621186563/4_tdradn.jpg"
              />
              <div
                class="
                  px-8
                  py-10
                  relative
                  z-10
                  w-full
                  border-4 border-gray-200
                  bg-white
                  opacity-0
                  hover:opacity-100
                "
              >
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium font-semibold
                    text-gray-900
                    mb-3
                  "
                >
                  Mariah Carey
                </h1>
                <p class="leading-relaxed text-gray-800">
                  Foto de Adolfo Fernández Zepeda con la cantante, compositora,
                  productora musical, actriz y filántropa estadounidense, Mariah
                  Carey.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                format="webp"
                alt="gallery"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover object-center
                "
                src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621188033/1_ucxn5v.jpg"
              />
              <div
                class="
                  px-8
                  py-10
                  relative
                  z-10
                  w-full
                  border-4 border-gray-200
                  bg-white
                  opacity-0
                  hover:opacity-100
                "
              >
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium
                    text-gray-900
                    font-semibold
                    mb-3
                  "
                >
                  Abbey House
                </h1>
                <p class="leading-relaxed text-gray-800">
                  Conociendo Abbey House en Inglaterra. Mansión neo-isabelina,
                  diseñada por Sir Edwin Lutyens. Terminada en 1914 como una
                  casa de huéspedes para Vickers Ltd.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                format="webp"
                alt="gallery"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover object-center
                "
                src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621187543/5_njmysn.jpg"
              />
              <div
                class="
                  px-8
                  py-10
                  relative
                  z-10
                  w-full
                  border-4 border-gray-200
                  bg-white
                  opacity-0
                  hover:opacity-100
                "
              >
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium
                    text-gray-900
                    font-semibold
                    mb-3
                  "
                >
                  José José.
                </h1>
                <p class="leading-relaxed text-gray-800">
                  En compañia de José Rómulo Sosa Ortiz, un cantante, músico,
                  productor musical y actor ocasional mexicano mejor conocido
                  bajo su nombre artístico, José José.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                format="webp"
                alt="gallery"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover object-center
                "
                src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621188664/2_hb2dyb.jpg"
              />
              <div
                class="
                  px-8
                  py-10
                  relative
                  z-10
                  w-full
                  border-4 border-gray-200
                  bg-white
                  opacity-0
                  hover:opacity-100
                "
              >
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium
                    text-gray-900
                    font-semibold
                    mb-3
                  "
                >
                  Randolph Peter
                </h1>
                <p class="leading-relaxed text-gray-800">
                  Foto con "Pete Best", músico británico conocido por haber sido
                  el baterista de The Beatles.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                format="webp"
                alt="gallery"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover object-center
                "
                src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621190043/6_cz0vyi.jpg"
              />
              <div
                class="
                  px-8
                  py-10
                  relative
                  z-10
                  w-full
                  border-4 border-gray-200
                  bg-white
                  opacity-0
                  hover:opacity-100
                "
              >
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium
                    text-gray-900
                    font-semibold
                    mb-3
                  "
                >
                  Freddie Mercury
                </h1>
                <p class="leading-relaxed text-gray-800">
                  Fotografía de Adolfo con su hijo Adolfo Jr. y Freddie Mercury,
                  conocido por haber sido el vocalista principal de Queen.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover object-center
                "
                src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621186564/3_zwvmxw.jpg"
              />
              <div
                class="
                  px-8
                  py-10
                  relative
                  z-10
                  w-full
                  border-4 border-gray-200
                  bg-white
                  opacity-0
                  hover:opacity-100
                "
              >
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium
                    text-gray-900
                    font-semibold
                    mb-3
                  "
                >
                  Georgios Kyriacos Panayiotou
                </h1>
                <p class="leading-relaxed text-gray-800">
                  Adolfo con su esposa Érika y George Michael, después de una
                  presentación para medios del mundo en Londres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
};
</script>
