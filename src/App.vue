<template>
  <div class="wrapper">
    <MainHeaderVue :isLoggedIn="isLoggedIn" />
    <ModalRegisterLogin />
    <div class="wrapper-content">
      <BreadCrumbs />
      <router-view />
      <MainFooter />
    </div>
  </div>
</template>

<script>
import MainHeaderVue from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import BreadCrumbs from "@/components/BreadCrumbs";
import ModalRegisterLogin from "@/components/UI/ModalRegisterLogin";

import Axios from 'axios';

export default {
  name: 'App',
  data () {
    return {

    };
  },
  components: {
    MainHeaderVue,
    MainFooter,
    BreadCrumbs,
    ModalRegisterLogin,
  },
  mounted() {
    if (this.token) {
      Axios.defaults.headers.common['Authorization'] = this.token;
    }
  },
  computed: {
    token: function () {
      return this.$cookies.get('token') || '';
    },
    isLoggedIn: function (){
      return !!this.token;
    }
  },
  watch: {
    token: {
      handler(val){
        this.$cookies.set('token', val);
      }
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
  url("@/assets/fonts/Montserrat-VariableFont_wght.ttf") format("truetype"),
  url("@/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf") format("truetype");
}
</style>
