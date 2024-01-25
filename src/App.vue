<script setup>
import Navbar from './components/Navbar.vue'
import { useRoute } from 'vue-router';


const route = useRoute();
const showNavbar = !route.meta.hideNavbar;
</script>

<template>
  <body class="bg-black w-[100vw] h-[100%] min-h-[100vh]">
     <Navbar v-if="showNavbar" class="md:relative md:top-[24px]" msg="Vite + Vue" />

    <router-view />

  </body>
 

</template>

<style scoped>

</style>
