<template>
  <div class="row">
    <div class="col-lg-6 col-sm-12">
      <h1>
        {{ title }}
      </h1>
      <p>
        Это единственный гуманный способ контроля численности!
      </p>
    </div>
    <div class="col-lg-6 col-sm-12">
      <div class="row">
        <p class="m-0">
          Защити питомца от:
        </p>
        <ul class="ul-list_dotted">
          <li>онкологии</li>
          <li>побегов и травм</li>
          <li>агресивности</li>
          <li>меток территории</li>
          <li>нежеланного потомства</li>
        </ul>
        <p></p>
        <p>
          Вет. исследования подтверждают положительное влияние кастрации и стерилизации на здоровье домашних животных.
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-sm-12">
      <div class="row align-items-center h-100">
        <div class="col-lg-8 col-sm-12">
          <h1>600 руб</h1>
          <p class="m-0">
            Кастрация кота
          </p>
          <p class="m-0">
            Кастрация собаки*
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 text-center">
          <img src="@/assets/images/castration_cat.png" alt="Кастрация кота">
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-sm-12">
      <div class="row align-items-center h-100">
        <div class="col-lg-8 col-sm-12">
          <h1>1000 руб</h1>
          <p class="m-0">
            Кастрация кошки
          </p>
          <p class="m-0">
            Кастрация собаки*
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 text-center">
          <img src="@/assets/images/castration_dog.png" alt="Кастрация кота">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <p>
      * + стоимость наркоза по весу
    </p>
  </div>
</template>

<script>
export default {
  name: "PageDiscounts",
  data () {
    return {
      title: "Льготная кастрация/стерилизация",
    };
  },
}
</script>

<style scoped lang="scss">

</style>