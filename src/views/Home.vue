<script setup>
import Carousel from "../components/Carousel.vue";
import RecommendedMovies from "../components/Recommended-movies.vue";

import { ref, watch } from "vue";
import jsonData from "../data.json";






const movies = jsonData;
const searchQuery = ref("");
const filteredSearchResults = ref([]);

watch(searchQuery, () => {
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
  <body class="pl-[6px] lg:pl-[150px]">
    <div class="pt-[26px] md:w-[725px] lg:ml-[0px] mx-auto">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="w-[24px] h-[24px] pr-[24px] md:w-[32px] md:h-[32px] text-white"
      />
      <input
        type="text"
        name="search"
        id="search"
        v-model="searchQuery"
       
        placeholder="Search for movies or TV series"
        class="search-text bg-smokeblack focus:outline-none text-white text-lg w-[223px] md:w-[320px] h-[36px] md:my-[30px]"
      />
    </div>
    <template v-if="searchQuery.length === 0">
    <div class="pt-[24px] trending">
      <h2 class="text-[20px] md:text-[32px]">Trending</h2>
      <Carousel class="pt-[16px]" />
    </div>
    <div >
      <RecommendedMovies class="" />
    </div>
    </template>
    <template  v-else>
      <!-- Show search results -->
     
  <div class="w-[370px] md:w-[725px] lg:w-[1240px] mx-auto">
      <h2 class="text-[20px] md:text-[32px] regular text-white" @click="handleSearch()">Found '{{ filteredSearchResults.length }}' for {{searchQuery}}</h2>
  </div>
  <div class="bg-black h-[100%] min-h-[100vh]">
    <div
    class="grid grid-cols-2  gap-x-[15px] md:grid-cols-3 lg:grid-cols-4 gap-y-[10px] g lg:gap-x-[32px] lg:gap-y-[40px] w-[370px] md:w-[725px] lg:w-[1240px] mx-auto"
  >

    <div
      v-for="movie in filteredSearchResults"
      :key="movie.id"
      class="pb-[12px] card"
    >
      <div class="rounded-[8px] card w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px]"
      :style="{
            backgroundImage: movie.thumbnail?.regular?.small
              ? `url('${movie.thumbnail.regular.small}')`
              : '',
          }">
        
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
</div>
    </template>
  </body>
</template>

<style scoped>
.search-text {
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.4979;
}
.search-text::placeholder {
  font-size: 24px;
}
.trending h2 {
  color: var(--Pure-White, #fff);
  font-family: Outfit;

  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
}

</style>
