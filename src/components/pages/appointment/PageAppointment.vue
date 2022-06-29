<template>
  <div class="container main-container">
    <div class="row">
      <h1>
        {{ title }}
      </h1>
    </div>
    <UIForm submit-text="Записаться" image-right="./assets/images/appointment.png" @submit="onSubmit">
      <UIFormInput inputType="text" name="serviceId" label="Выберите услугу" @changeInput="setForm" />
      <UIFormInput inputType="text" name="time" label="Выберите время" @changeInput="setForm" />
      <UIFormInput inputType="text" name="specialist" label="Выберите специалиста" @changeInput="setForm" />
      <UIFormInput inputType="text" name="animalName" label="Кличка животного" :required="false" @changeInput="setForm" />
    </UIForm>
  </div>
</template>

<script>
import UIForm from "@/components/UI/UIForm";
import UIFormInput from "@/components/UI/UIFormInput";

export default {
  name: "PageAppointment",
  components: {
    UIForm,
    UIFormInput,
  },
  data () {
    return {
      title: "Запись на приём",
      form: {
        serviceId: '',
        time: '',
        specialist: '',
        animalName: '',
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

<style scoped>

</style>
