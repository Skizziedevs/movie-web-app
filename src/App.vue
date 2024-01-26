<script setup>
import Navbar from './components/Navbar.vue'
import { useRoute } from 'vue-router';


const route = useRoute();

</script>

<template>
  <body class="bg-black w-[100vw] h-[100%] min-h-[100vh]">
     <Navbar v-if="!route.meta.hideNavbar" class="md:relative md:top-[24px]" msg="Vite + Vue" />

    <router-view />

  </body>
 

</template>

<style scoped>

</style>
