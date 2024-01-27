<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const activeIcon = ref('square'); // Initialize with the default active icon

const setIcon = (icon) => {
  activeIcon.value = icon;
 
};


</script>

<template>
  <div class="bg-smokeblack flex justify-between items-center px-[15px] h-[56px] md:w-[719px] md:h-[72px] md:rounded-[10px] md:mx-auto lg:w-[96px] lg:h-[960px] lg:fixed lg:left-[24px] lg:top-[70px] lg:flex-col ">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-clapperboard"
        class="mx-auto text-pinkishred w-[25px] h-[20px] md:w-[32px] md:h-[25.6px] lg:pt-[35px]"
      />
    </div>

    <div class="flex w-[134px] md:w-[172px] justify-between lg:flex-col lg:h-[200px] lg:w-[20px] lg:relative lg:bottom-[150px]">
      <router-link to="/home"><font-awesome-icon icon="fa-solid fa-square"   @click="setIcon('square')" :class=" activeIcon === 'square' ? 'text-white' : 'text-smokeblue'" /></router-link>
      <router-link to="/movies"><font-awesome-icon icon="fa-solid fa-film"  @click="setIcon('film')" :class=" activeIcon === 'film' ? 'text-white' : 'text-smokeblue'"/></router-link> 
      <router-link to="/tvseries"><font-awesome-icon icon="fa-solid fa-tv" :class=" activeIcon === 'tv' ? 'text-white' : 'text-smokeblue'" @click="setIcon('tv')" /></router-link>
      <router-link to="/bookmarked"><font-awesome-icon icon="fa-solid fa-bookmark" :class=" activeIcon === 'bookmark' ? 'text-white' : 'text-smokeblue'" @click="setIcon('bookmark')"/></router-link> 
    </div>
    <div>
      <img
        src="../../public/assets/image-avatar.png"
        class="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:h-[40px] lg:mb-[24px] lg:w-[40px]"
        alt=""
      />
    </div>
  </div>

</template>

<style scoped>

</style>
