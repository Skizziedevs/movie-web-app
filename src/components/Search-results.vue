
<script setup>
import { ref, watch } from "vue";
import jsonData from "../data.json";


const movies = jsonData;
const searchQuery = ref("The");
const filteredSearchResults = ref([]);

watch(movies, () => {
  handleSearch();
});

const handleSearch = () => {
  const query = searchQuery.value.toLowerCase();
  filteredSearchResults.value = movies.filter(
    (movie) => movie.title.toLowerCase().includes(query)
  );
  console.log(filteredSearchResults)
};

</script>

<template>
  <div class="w-[370px] md:w-[725px] lg:w-[1240px] mx-auto ">
      <h2 class="text-[20px] md:text-[32px] regular" @click="handleSearch()">Found {{ filteredSearchResults.length }} for you</h2>
  </div>
  
    <div
      class="grid grid-cols-2 p-[23px] h-[100%] md:grid-cols-3 lg:grid-cols-4 gap-y-[10px] gap-x-[10px] lg:gap-x-[32px] lg:gap-y-[40px] w-[370px] md:w-[725px] lg:w-[1240px] mx-auto"
    >
  
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="pb-[11px] card"
      >
        <div>
          <img
            :src="movie.thumbnail.regular.small"
            class="rounded-[8px] w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px]"
            alt=""
          />
        </div>
        <div class="pt-[8px]">
          <div class="flex">
            <h3 class="text-[12px] md:text-[15px] mdl:text-[17px] text-white pr-[3px]">
              {{ movie.year }}
            </h3>
            <span class="w-[2px] h-[2px] bg-white mt-[8px] mx-[6px]"></span>
            <font-awesome-icon
              icon="fa-film"
              class="text-[12px] md:text-[15px] pr-[4px] pt-[4px] text-white"
            />
            <h3 class="text-[12px] md:text-[15px] text-white">
              {{ movie.category }}
            </h3>
            <span class="w-[2px] h-[2px] bg-white mt-[8px] mx-[6px]"></span>
            <h3 class="text-[12px] md:text-[15px] text-white">
              {{ movie.rating }}
            </h3>
          </div>
          <h2 class="font-bold text-white text-[15px] md:text-[18px]">
            {{ movie.title }}
          </h2>
        </div>
      </div>
    </div>
  </template>

<style scoped>

</style>
