<template>
  <div class="bg-gray-900 text-blue-900">
    <div
      class="bg-transparent fixed w-full z-20"
      :class="{ 'bg-blue-900 text-white text-bold': !view.topOfPage }"
    >
      <div class="flex mt-6 text-center w-screen px-6">
        <NuxtLink
          to="/"
          aria-label="Company"
          title="Company"
          class="text-xl font-bold tracking-widest mx-auto"
        >
          <span>La Voz Universal</span>
        </NuxtLink>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="
              transition
              duration-200
              rounded
              focus:outline-none
              focus:shadow-outline
            "
            @click="isMenuOpen = true"
          >
            <svg class="w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <transition name="fade">
            <div
              v-if="isMenuOpen"
              class="absolute top-0 left-0 w-full z-10 p-6"
            >
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <span
                        class="
                          text-xl
                          font-bold
                          tracking-wide
                          text-gray-800
                          uppercase
                        "
                        >La Voz Universal</span
                      >
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="
                        p-2
                        -mt-2
                        -mr-2
                        transition
                        duration-200
                        rounded
                        hover:bg-gray-200
                        focus:bg-gray-200
                        focus:outline-none
                        focus:shadow-outline
                      "
                      @click="isMenuOpen = false"
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <NuxtLink
                        to="/contact"
                        aria-label="Our product"
                        title="Our product"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Contacto</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/gallery"
                        aria-label="Our product"
                        title="Our product"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Galería</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/blog"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Blog</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/about"
                        aria-label="About us"
                        title="About us"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Acerca</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/artists"
                        aria-label="Efemerides"
                        title="Efemerides"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Efemérides</NuxtLink
                      >
                    </li>
                    <!--
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                      -->
                  </ul>
                </nav>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div
        class="
          px-4
          py-5
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
        "
      >
        <div class="relative flex items-center justify-between">
          <NuxtLink
            to="/"
            aria-label="Company"
            title="La voz universal"
            class="inline-flex items-center"
          >
          </NuxtLink>
          <ul class="flex items-center mx-auto hidden space-x-8 lg:flex">
            <li>
              <NuxtLink
                to="/contact"
                aria-label="Our product"
                title="Our product"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Contacto</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/gallery"
                aria-label="Our product"
                title="Our product"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Galería</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/blog"
                aria-label="Product pricing"
                title="Product pricing"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                aria-label="About us"
                title="About us"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Acerca</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/artists"
                aria-label="Efemerides"
                title="Efemerides"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Efemérides</NuxtLink
              >
            </li>
          </ul>
          <!--
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                class="bg-white inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
              <Stream />
          -->
        </div>
        <Stream class="md:mb-4 md:mt-4 mb-2 md:w-1/2 mx-auto" />
        <div class="text-center mx-auto">
          <span>Escuchanos</span>
        </div>
      </div>
    </div>
    <transition name="fade-slow">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  data() {
    return {
      isMenuOpen: false,
      view: {
        topOfPage: true,
      },
    };
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 20) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
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
