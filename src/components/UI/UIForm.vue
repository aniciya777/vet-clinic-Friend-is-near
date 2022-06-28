<template>
  <div class="row component-form">
    <div :class="{ 'col-sm-12': true, 'col-lg-7': imageRight }">
      <form @submit.prevent>
        <slot>Форма по-умолчанию</slot>
        <div class="component-form__submit">
          <input type="submit" :value="submitText">
        </div>
      </form>
    </div>
    <div v-if="imageRight" class="col-lg-5 text-center">
      <img :src="imageRight" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "UIForm",
  props: {
    submitText: {
      type: String,
      required: false,
      default: 'Отправить',
    },
    imageRight: {
      type: String,
      required: false,
      default: '',
    }
  },
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/main";

  $borderRadius: 30px;
  $height: 50px;
  $border: 5px;

  .component-form__submit {
    margin: 15px 0;
    height: $height;
    border-radius: $borderRadius;
    padding: $border;
    background: linear-gradient(#D3FB79, #96E6A1);
    width: fit-content;

    input {
      cursor: pointer;
      font-size: rel_font_size(25px);
      padding: 5px 15px;
      border-radius: $borderRadius * ($height - 2 * $border) / $height;
      background-color: $g-0;
      height: $height - 2 * $border;
      width: auto;
      border: none;
    }
  }

  .component-form {
    z-index: 1;
  }
</style>
