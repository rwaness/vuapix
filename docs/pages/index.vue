<template>
  <section class="mx-auto flex flex-col py-12 items-center justify-center text-gray-700 body-font">
    <!-- <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> -->
    <div class="lg:w-2/3 w-full">
      <h1 class="title-font text-2xl mb-4 font-medium text-gray-900">VUAPIX</h1>
      <p class="mb-8 text-3xl font-light leading-none">
        The headless state managment to handle API calls easily!
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-stretch">
        <nuxt-link to="/guide/introduction/getting-started" class="m-2 mx-auto sm:mx-2 text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          GET STARTED
        </nuxt-link>
        <nuxt-link to="/guide/introduction/what-is-vuapix" class="m-2 mx-auto sm:mx-2 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          What is Vuapix ?
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('initIndexPage');
  }
};
</script>