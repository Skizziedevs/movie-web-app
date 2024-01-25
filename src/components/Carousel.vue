<template>
  <div>
    <div class="carousel-container"

      @mousedown="startDrag"
      @mousemove="handleDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startDrag"
      @touchmove="handleDrag"
      @touchend="endDrag">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${slide * cardWidth}px)` }"
      >
        <!-- Repeat the card component for each item in your carousel -->
        <div
          v-for="movie in trendingMovies"
          :key="movie.id"
          class="card w-[240px] h-[140px] rounded-[8px] cursor-pointer md:w-[470px] md:h-[230px]"
          :style="{
            backgroundImage: movie.thumbnail?.trending?.large
              ? `url('${movie.thumbnail.trending.large}')`
              : '',
          }"
        >
        <div class=" w-[32px] h-[32px] bg-gray-600 opacity-[0.8] cursor-pointer relative left-[200px] md:left-[414px] md:top-[8px] lg:top-[16px] top-[8px] rounded-full"><font-awesome-icon icon="fa-solid fa-bookmark" :class="{ 'text-white': movie.isBookmarked }"  class="pl-[9.3px] pt-[7px] " /></div>
        
          <div class="pt-[61px] md:pt-[121px] pl-[16px] md:pl-[24px]">
            <div class="flex">
              <h3 class="text-[12px] md:text-[15px] text-white pr-[3px]">
                {{ movie.year }}
              </h3>
              <span class="w-[2px] h-[2px] bg-white mt-[8px] mx-[6px]"></span>
              <font-awesome-icon
                icon="fa-film"
                class="text-[12px] md:text-[15px] pr-[4px] pt-[4px] text-white"
              />
              <h3 class="text-[12px] md:text-[15px] text-white">{{ movie.category }}</h3>
              <span class="w-[2px] h-[2px] bg-white mt-[8px] mx-[6px]"></span>
              <h3 class="text-[12px] md:text-[15px] text-white">{{ movie.rating }}</h3>
            </div>
            <h2 class="font-bold text-white text-[15px] md:text-[24px]" @click="loadMovies()">
              {{ movie.title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="flex justify-between relative bottom-[100px] md:bottom-[135px]">
        <button @click="prevSlide" class="h-[50px] w-[30px] bg-gray-300 opacity-[0.4]"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
        <button @click="nextSlide" class="h-[50px] w-[30px] bg-gray-300 opacity-[0.4]"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import jsonData from "../data.json";

const movies = jsonData;
const trendingMovies = ref(
  movies.filter((movie) => movie.thumbnail && movie.thumbnail.trending)
);
const loadMovies = () => {
  console.log(trendingMovies.value);
};
const drag = ref(false);
let startX = 0;
let startSlide = 0;
const slide = ref(0);
const cardWidth = 240; // Adjust the card width


const startDrag = (e) => {
  drag.value = true;
  startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
  startSlide = slide.value;
};

const handleDrag = (e) => {
  if (!drag.value) return;
  const currentX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
  const deltaX = currentX - startX;
  slide.value = startSlide - deltaX / cardWidth;
};

const endDrag = () => {
  drag.value = false;
  // Optionally, you can snap to the nearest card after dragging ends
  slide.value = Math.round(slide.value);
};



const prevSlide = () => {
  if (slide.value > 0) {
    slide.value--;
  }
};

const nextSlide = () => {
  if (slide.value < trendingMovies.value.length - 1) {
    slide.value++;
  }
};
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.card {

  background-size: cover;
  background-position: center;
  margin-right: 16px;
  flex-shrink: 0;
}


@media (max-width: 768px) {
  .card {
    margin-right: 8px; /* Adjust the margin for smaller screens */
  }
}
</style>
