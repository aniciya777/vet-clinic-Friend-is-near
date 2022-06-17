<template>
  <header class="navbar">
    <div class="navbar-content">
      <router-link class="navbar-logo" to="/">
        <img src="@/assets/logo.png" alt="logo">
      </router-link>
      <div class="navbar-item" v-for="link in links" :key="link.alias">
        <p :class="[{ 'navbar-link__in-button': link.in_button}]">
          <router-link class="navbar-link" :to="link.url">
            {{ link.title }}
          </router-link>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import {app, links} from "@/_config";

export default {
  name: "MainHeader",
  data() {
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
