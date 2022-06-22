<template>
  <ModalWindow id="ModalRegisterLogin" showCloseIcon vertical-centred>
    <div class="text-center">
      <h1 @click="register" class="modal-register-login__link">Регистрация</h1>
      <h1 @click="login" class="modal-register-login__link">Вход</h1>
      <br>
    </div>
  </ModalWindow>
</template>

<script>
import ModalWindow from "@/components/UI/ModalWindow";
import {Modal} from 'bootstrap';

export default {
  name: "ModalRegisterLogin",
  components: {
    ModalWindow,
  },
  mounted () {
    this.modal = new Modal('#ModalRegisterLogin');
  },
  methods: {
    register() {
      this.close();
      this.$router.push({name: 'register'});
    },
    login() {
      this.close();
      this.$router.push({name: 'login'});
    },
    close() {
      this.modal.hide();
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-register-login__link {
    cursor: pointer;
  }
</style>
