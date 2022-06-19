<template>
  <div class="wrapper">
    <MainHeaderVue />
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

export default {
  name: 'App',
  components: {
    MainHeaderVue,
    MainFooter,
    BreadCrumbs,
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
