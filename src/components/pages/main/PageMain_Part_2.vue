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
  </div>
</template>

<script>

export default {
  name: "PageMain_Part_2",
  data() {
    return {
      title: "Индивидуальный подход к лечению каждого питомца",
    };
  },
}
</script>

<style scoped lang="scss">

</style>
