<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-Icon class="mr-2"></px-Icon>
          <router-link
            :to="{ name: 'Home' }"
            class="font-semibold text-xl tracking-tight"
            >PlatziExchange</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link 
              v-for="link in links"
              :key="link.title"
              :to="link.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >{{ link.title}}</router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import pxIcon from "@/components/pxIcon";

export default {
  name: "pxHeader",
  components: {
    pxIcon,
  },

  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>
