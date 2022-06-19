<template>
  <div class="container main-container">
    <div class="row page-error">
      <div class="col-lg-5 col-sm-12">
        <h1 class="error_code">404</h1>
        <p class="m-0">
          Ой, такой страницы нет!
        </p>
        <p>
          Об этом явно кто-то позаботился :)
        </p>
        <p>
          <router-link class="navbar-link" to="/">
            <u>
              Перейти на главную →
            </u>
          </router-link>
        </p>
      </div>
      <div class="col-lg-7 col-sm-12">
        <img src="@/assets/images/error_404.png" alt="404 - Page Not Found">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageError_404",
}
</script>

<style scoped lang="scss">

</style>
