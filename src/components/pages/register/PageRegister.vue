<template>
  <div class="container main-container">
    <div class="row">
        <h1>
          {{ title }}
        </h1>
    </div>
    <UIForm submit-text="Зарегистрироваться" image-right="./assets/images/register.png" @submit="onSubmit">
      <UIFormInput inputType="text" name="fullname" label="Фамилия Имя" @changeInput="setForm" />
      <UIFormInput inputType="tel" name="phone" label="Телефон" @changeInput="setForm" />
      <UIFormInput inputType="email" name="email" label="Почта" @changeInput="setForm" />
      <UIFormInput inputType="text" name="animalsNames" label="Кличка(и) животного(ых)" :required="false" @changeInput="setForm" />
      <UIFormInput inputType="password" name="password" label="Пароль" @changeInput="setForm" />
    </UIForm>
  </div>
</template>

<script>
import UIForm from "@/components/UI/UIForm";
import UIFormInput from "@/components/UI/UIFormInput";

export default {
  name: "PageRegister",
  components: {
    UIForm,
    UIFormInput,
  },
  data () {
    return {
      title: "Регистрация",
      form: {
        fullname: '',
        phone: '',
        email: '',
        animalsNames: '',
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

</style>
