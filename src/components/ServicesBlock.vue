<template>
  <h2 class="text-center">
    <p>Популярные услуги</p>
  </h2>
  <div class="col">
    <div class="col">
      <UIFormInput label="Поиск:" name="search" input-type="text" @changeInput="setForm" />
      <br>
    </div>
    <div v-if="loadingServices" class="row">
      <div class="d-flex align-items-center">
        <strong>Загрузка...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    </div>
    <div v-else-if="services && services.length > 0" class="row">
      <div class="service-component text-center col-sum-12 col-md-6 col-lg-3" v-for="service in services" :key="service.id">
        <p>
          <img class="service-component__image" :src="service.img" :alt="service.title">
        </p>
        <p>
          {{ service.title }}
        </p>
      </div>
    </div>
    <div v-else class="row">
      <p>Ничего не найдено</p>
    </div>
  </div>
</template>

<script>
import UIFormInput from "@/components/UI/UIFormInput";

export default {
  name: "ServicesBlock",
  components: {
    UIFormInput,
  },
  data () {
    return {
      valueSearch: '',
    };
  },
  props: {
    hasSearch: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  mounted () {
    if (this.services.length === 0) {
      this.$store.dispatch('loadServices');
    }
  },
  computed: {
    services: function () {
      var data = this.$store.state.services;
      if (this.valueSearch) {
        data = data.filter(elem => elem.title.toLowerCase().includes(this.valueSearch));
      }
      return data;
    },
    loadingServices: function () {
      return this.$store.state.loadingServices;
    },
  },
  methods: {
    setForm (event) {
      this.valueSearch = event.value.trim().toLowerCase();
    },
  }
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
