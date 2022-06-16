<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a class="navbar-logo" href="/">
          <img src="@/assets/logo.png" alt="logo">
        </a>
        <div class="navbar-item" v-for="link in links" :key="link.alias">
          <p :class="[{ 'navbar-link__in-button': link.in_button}]">
            <a class="navbar-link" :href="link.url">
              {{ link.title }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {app, links} from "@/_config";

export default {
  name: "MainHeader",
  data () {
    return {
      title: app.title,
      links,
    }
  },
}
</script>

<style scoped lang="scss">
  .navbar-link__in-button {
    background-image: url("@/assets/svg/button_cabinet.svg");
    background-size: cover;
    padding: 8px 10px;
  }
</style>