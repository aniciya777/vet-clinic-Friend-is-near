<template>
  <div class="wrapper">
    <MainHeaderVue />
    <div class="wrapper-content">
      <MainContainer />
      <MainFooter />
    </div>
  </div>
</template>

<script>
import MainHeaderVue from "@/components/MainHeader";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";

export default {
  name: 'App',
  components: {
    MainHeaderVue,
    MainContainer,
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