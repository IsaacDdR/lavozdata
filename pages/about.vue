<template>
  <div class="pt-16">
    <div
      class="
        px-4
        pt-48
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        lg:py-48
      "
    >
      <div class="mt-4 md:mt-8">
        <span class="ml-2 md:ml-2 text-xl active:shadow-inner noSelect">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <NuxtLink class="text-bold" to="/"> Inicio</NuxtLink>
        </span>
        <div class="grid gap-10 lg:grid-row lg:w-1/2 mx-auto mt-8 md:mt-14">
          <div class="lg:pr-10">
            <h5
              class="
                md:tracking-wider
                text-center
                mb-4
                text-5xl
                font-extrabold
                leading-none
                text-blue-900
              "
            >
              Más de nosotros
            </h5>
            <p class="text-justify mb-8 mt-5 font-bold text-gray-900">
              La Voz universal radio en vivo por internet, esté sitio web fue
              creado para seguir llegando a todos ustedes, nuestros radio
              escuchas, ahora en está nueva versión por internet podrás
              escucharnos desde tu escritorio o móvil, sintoniza y sigue
              disfrutando de la La Voz Universal.
            </p>
            <hr class="border-gray-300" />
          </div>
          <div>
            <img
              class="
                object-cover
                lg:w-full
                mx-auto
                h-56
                rounded
                shadow-lg
                sm:h-96
              "
              src="https://res.cloudinary.com/duruqkfg4/image/upload/v1621125031/loc_folrjs.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
};
</script>
