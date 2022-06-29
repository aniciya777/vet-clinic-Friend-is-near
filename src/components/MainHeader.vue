<template>
  <header class="navbar">
    <div class="navbar-content">
      <router-link class="navbar-logo" to="/">
        <img src="@/assets/logo.png" :alt="title">
      </router-link>
      <div class="navbar-item" v-for="link in links" :key="link.alias">
        <p>
          <router-link class="navbar-link" :to="link.url">
            {{ link.title }}
          </router-link>
        </p>
      </div>
      <div class="navbar-item">
        <p class="navbar-link__in-button">
          <span v-if="isLoggedIn" data-bs-toggle="modal" data-bs-target="#ModalRegisterLogin">
            Личный кабинет
          </span>
          <span v-else data-bs-toggle="modal" data-bs-target="#ModalRegisterLogin">
            Войти
          </span>
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
  props: {
    isLoggedIn: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
