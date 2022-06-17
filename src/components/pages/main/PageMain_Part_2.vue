<template>
  <div class="container main-container">
    <h2 class="text-center">
      {{ title }}
    </h2>
    <br><br>
    <p class="text-center">
      Получить лучшие консультации по уходу и лечению животных вы можете
      в нашей ветеринарной клинике “Друг рядом”. Квалифицированные ветеринарные врачи
      окажут помощь и лечение вашему питомцу от кошки и собаки до попугая.
    </p>
    <br>
    <h2 class="text-center">
      Популярные услуги
    </h2>
    <br>
    <div class="row">
      <div class="text-center col-sum-12 col-md-6 col-lg-3" v-for="service in popular_services" :key="service.title">
        <p>
          <img :src="service.image_url" :alt="service.title">
        </p>
        <p>
          {{ service.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageMain_Part_2",
  data() {
    return {
      title: "Индивидуальный подход к лечению каждого питомца",
      popular_services: [
        {
          image_url: '/assets/images/services/service_hostel.png',
          title: 'Гостиница',
        },
        {
          image_url: '/assets/images/services/service_castration.png',
          title: 'Кастрация/ стерилизация',
        },
        {
          image_url: '/assets/images/services/service_grooming.png',
          title: 'Груминг',
        },
        {
          image_url: '/assets/images/services/service_laboratory.png',
          title: 'Лабораторные исследования',
        },
      ],
    };
  },
}
</script>

<style scoped lang="scss">

</style>
