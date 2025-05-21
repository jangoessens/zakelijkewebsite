<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
}

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
})
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="imageSlide, index in images" :key="`image-slide-${index}`">
      <div class="carousel__item"><img :src="imageSlide" /></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>