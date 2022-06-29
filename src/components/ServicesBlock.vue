<template>
  <h2 class="text-center">
    <p>Популярные услуги</p>
  </h2>
  <br>
  <div class="row">
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
  beforeMount() {
    if (this.services.length === 0) {
      this.$store.dispatch('loadServices');
    }
  },
  computed: {
    services: function () {
      const data = this.$store.state.services;
      return data;
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
