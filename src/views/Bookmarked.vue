<template>
  
    <div class="pl-[6px] lg:pl-[150px]">
    <div class="w-[370px] md:w-[725px] lg:w-[1240px] mx-auto pt-[26px] md:pt-[32px]">
        <h2 class="text-[20px] md:text-[32px] regular lg:pl-[25px] pb-[24px] pt-[34px]">Movies</h2>
    </div>
    
    <div
    class="grid grid-cols-2  h-[100%] gap-x-[15px] md:grid-cols-3 lg:grid-cols-4 gap-y-[10px] g lg:gap-x-[32px] lg:gap-y-[40px] w-[370px] md:w-[725px] lg:w-[1240px] mx-auto"
  >

    <div
      v-for="movie in onlyBookmarkedMovies"
      :key="movie.id"
      class="pb-[12px] cursor-pointer card"
    >
      <div class="rounded-[8px] card w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px]"
      :style="{
            backgroundImage: movie.thumbnail?.regular?.small
              ? `url('${movie.thumbnail.regular.small}')`
              : '',
          }">
        <div @click="movie.isBookmarked = !movie.isBookmarked" class=" w-[32px] h-[32px] bg-gray-600 opacity-[0.8] relative top-[8px] md:top-[15px] md:left-[173px] lg:left-[230px] left-[124px] cursor-pointer rounded-full"><font-awesome-icon icon="fa-solid fa-bookmark" :class="{ 'text-white': movie.isBookmarked }" class="pl-[9.3px] pt-[7px] "   /></div>
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
  <div class="pl-[6px] lg:pl-[150px]">
  <div class="w-[370px] md:w-[725px] lg:w-[1240px] mx-auto pt-[26px] md:pt-[32px]">
        <h2 class="text-[20px] md:text-[32px] regular lg:pl-[25px] pb-[24px] pt-[34px]">Tv series</h2>
    </div>
    
    <div
    class="grid grid-cols-2 h-[100%] gap-x-[15px] md:grid-cols-3 lg:grid-cols-4 gap-y-[10px] g lg:gap-x-[32px] lg:gap-y-[40px] w-[370px] md:w-[725px] lg:w-[1240px] mx-auto"
  >

    <div
      v-for="movie in onlyTvseries"
      :key="movie.id"
      class="pb-[12px] cursor-pointer card"
    >
      <div class="rounded-[8px] card w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px]"
      :style="{
            backgroundImage: movie.thumbnail?.regular?.small
              ? `url('${movie.thumbnail.regular.small}')`
              : '',
          }">
        <div @click="movie.isBookmarked = !movie.isBookmarked" class=" w-[32px] h-[32px] bg-gray-600 opacity-[0.8] relative top-[8px] md:top-[15px] md:left-[173px] lg:left-[230px] left-[124px] cursor-pointer rounded-full"><font-awesome-icon icon="fa-solid fa-bookmark" :class="{ 'text-white': movie.isBookmarked }" class="pl-[9.3px] pt-[7px] "   /></div>
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
    
    <script setup>
    import { ref } from "vue";
    import jsonData from "../data.json";
    
    const movies = jsonData;
    const onlyBookmarkedMovies = ref(
      movies.filter((movie) => movie.category === 'Movie' && movie.isBookmarked )
    );


    const onlyTvseries = ref(
      movies.filter((movie) => movie.category === 'TV Series' && movie.isBookmarked)
    );
    </script>
    
    <style scoped>
    .card {
      background-size: cover;
      background-position: center;
      margin-right: 16px;
      flex-shrink: 0;
    }
    .regular {
      color: var(--Pure-White, #FFF);
    font-family: Outfit;
    
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
    }
    
    </style>
    