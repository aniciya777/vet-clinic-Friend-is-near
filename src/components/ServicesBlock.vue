<template>
  <h2 class="text-center">
    <p>Популярные услуги</p>
  </h2>
  <br>
  <div v-if="loadingServices" class="row">
    <div class="d-flex align-items-center">
      <strong>Загрузка...</strong>
      <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
  </div>
  <div v-else class="row">
    <div class="service-component text-center col-sum-12 col-md-6 col-lg-3" v-for="service in services" :key="service.id">
      <p>
        <img class="service-component__image" :src="service.img" :alt="service.title">
      </p>
      <p>
        {{ service.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesBlock",
  mounted () {
    if (this.services.length === 0) {
      this.$store.dispatch('loadServices');
    }
  },
  computed: {
    services: function () {
      const data = this.$store.state.services;
      return data;
    },
    loadingServices: function () {
      return this.$store.state.loadingServices;
    },
  },
}
</script>

<style scoped lang="scss">
  .service-component__image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 30px;
  }
</style>
