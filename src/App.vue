<template>
  <div class="wrapper">
    <MainHeaderVue />
    <div class="wrapper-content">
      <div class="container">
        <p>
          Ветклиника и ветаптека
          «Друг рядом»
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeaderVue from "@/components/MainHeader.vue";

export default {
  name: 'App',
  components: {
    MainHeaderVue,
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