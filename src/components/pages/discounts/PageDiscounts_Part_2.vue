<template>
  <div class="container main-container">
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <h1>
          {{ title }}
        </h1>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="row h-100">
          <div class="col-lg-8 col-sm-12">
            <h1>1000 руб</h1>
            <p>
              * Для всех
            </p>
          </div>
          <div class="col-lg-4 col-sm-12 text-center">
            <img src="@/assets/images/anti_mite.png" alt="Кастрация кота">
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <p>
          Бесплатная обработка животного от блох и клещей, при покупке средств от эктопаразитов в нашей ветаптеке!
        </p>
        <img src="@/assets/images/anti_mite_treatment.png" :alt="title">
      </div>
      <div class="col-lg-6 col-sm-12">
        <p class="m-0">
          Чем опасна весенняя прогулка с питомцем?
        </p>
        <p class="m-0">
          Клещи переносят опасное для собак заболевание – пироплазмоз.
        </p>
        <ul class="ul-list_dotted">
          <li>вялость</li>
          <li>️повышение температуры тела</li>
          <li>животное отказывается есть</li>
        </ul>
        <p></p>
        <p>
          Врачи нашей клиники настоятельно рекомендуют заранее приобрести препараты
          в специализированных магазинах, которые помогут защитить животное от атаки клещей!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageDiscounts_Part_1",
  data () {
    return {
      title: "Сезон активности клещей",
    };
  },
}
</script>

<style scoped lang="scss">

</style>