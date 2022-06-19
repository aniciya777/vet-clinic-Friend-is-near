<template>
  <div class="wrapper">
    <MainHeaderVue />
    <div class="wrapper-content">
      <router-view />
      <MainFooter />
    </div>
  </div>
</template>

<script>
import MainHeaderVue from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default {
  name: 'App',
  components: {
    MainHeaderVue,
    MainFooter
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
