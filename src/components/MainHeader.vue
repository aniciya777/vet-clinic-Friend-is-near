<template>
  <header class="navbar">
    <div class="navbar-content">
      <router-link class="navbar-logo" to="/">
        <img src="@/assets/logo.png" alt="logo">
      </router-link>
      <div class="navbar-item" v-for="link in links" :key="link.alias">
        <p v-if="link.in_button" class="navbar-link__in-button">
          <span data-bs-toggle="modal" data-bs-target="#ModalRegisterLogin">
            {{ link.title }}
          </span>
        </p>
        <p v-else>
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

</style>
