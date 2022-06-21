<template>
  <div class="container main-container">
    <Carousel>
      <Slide v-for='slide in images' :key='slide'>
        <div class='carousel__item'>
          <img :src="dist + slide" alt="">
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "PageAbout_Slider",
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      dist: './assets/images/gallery/about/',
      images: [
        '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
      ],
    };
  },
}
</script>

<style scoped lang="scss">

</style>
