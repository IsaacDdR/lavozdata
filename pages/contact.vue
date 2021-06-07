<template>
  <section class="text-gray-600 body-font relative md:w-9/12 mx-auto">
    <div class="flex flex-col px-5 pt-56 mx-auto">
      <span class="mb-6 text-gray-900 text-xl active:shadow-inner noSelect">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        <NuxtLink class="text-bold" to="/"> Inicio</NuxtLink>
      </span>
      <div class="flex flex-col text-center w-full mb-12">
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
          Contáctanos
        </h1>
        <p
          class="
            lg:w-2/3
            mx-auto
            leading-relaxed
            text-base text-gray-900
            font-bold
          "
        >
          En redes sociales, email o teléfono te atenderemos con mucho gusto.
        </p>
      </div>
      <div
        v-if="success"
        class="
          rounded
          bg-indigo-500
          mx-auto
          text-center
          mb-5
          text-white text-lg
          py-8
          w-full
          md:w-1/2
          shadow
        "
      >
        ¡Gracias! En breve te contestaremos, quédate al pendiente.
      </div>
      <form @submit.prevent="sendMessage">
        <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
          ¿Podrías checar los campos nuevamente? Algo no está bien.
        </div>
        <div class="lg:w-3/5 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label
                  for="name"
                  class="leading-7 text-sm text-gray-900 font-bold"
                  >Nombre</label
                >
                <input
                  id="name"
                  v-model="name"
                  required
                  type="text"
                  name="name"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2 focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-900 font-bold"
                  >Email</label
                >
                <input
                  id="email"
                  v-model="email"
                  required
                  type="email"
                  name="email"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2 focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label
                  for="message"
                  class="leading-7 text-sm text-gray-900 font-bold"
                  >Mensaje</label
                >
                <textarea
                  id="message"
                  v-model="message"
                  required
                  name="message"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2 focus:ring-indigo-200
                    h-32
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    resize-none
                    leading-6
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                type="submit"
                class="
                  flex
                  mx-auto
                  text-white
                  bg-blue-900
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                {{ loading ? "Enviando mensaje..." : "Enviar" }}
              </button>
            </div>
            <div
              class="p-2 w-full pt-4 mt-4 border-t border-gray-200 text-center"
            >
              <a
                href="mailto:hola@lavozuniversal.com?subject=Mensaje desde el sitio web."
                class="text-blue-500 font-bold"
                >hola@lavozuniversal.com</a
              >
              <br />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  scrollToTop: true,
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .$post("/messages", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          this.success = true;
          this.errored = false;
        })
        .catch((error) => {
          error ? console.error("Error", error) : (this.errored = true);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
