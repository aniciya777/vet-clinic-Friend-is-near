<template>
  <div class="container main-container auth-container">
    <div class="row">
        <h1>
          {{ title }}
        </h1>
    </div>
    <UIForm submit-text="Войти" image-background="./assets/images/authorization_back.png" @submit="onSubmit">
      <UIFormInput inputType="email" name="email" label="Почта" @changeInput="setForm" />
      <UIFormInput inputType="password" name="password" label="Пароль" @changeInput="setForm" />
    </UIForm>
    <div class="auth-container__back"></div>
  </div>
</template>

<script>
import UIForm from "@/components/UI/UIForm";
import UIFormInput from "@/components/UI/UIFormInput";

export default {
  name: "PageAuthorization",
  components: {
    UIForm,
    UIFormInput,
  },
  data () {
    return {
      title: "Вход в личный кабинет",
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit () {
      alert(JSON.stringify(this.form));
    },
    setForm (event) {
      this.form[event.name] = event.value;
    },
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/main";

  .auth-container {
    position: relative;
    overflow: hidden;
    padding-bottom: 350px;

    @media screen and (max-width: $lgDesktopWidth) {
      padding-bottom: 350px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      padding-bottom: 170px;
    }
    @media screen and (max-width: $tableWidth) {
      padding-bottom: 130px;
    }
    @media screen and (max-width: $smTableWidth) {
      padding-bottom: 85px;
    }
    @media screen and (max-width: $phoneWidth) {
      padding-bottom: 55px;
    }

    & > div {
      position: relative;
    }
  }
  .auth-container__back {
    background-image: url("@/assets/images/authorization_back.png");
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
