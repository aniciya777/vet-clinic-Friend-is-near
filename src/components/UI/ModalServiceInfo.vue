<template>
  <div v-if="service">
    <ModalWindow id="ModalServiceInfo" showCloseIcon vertical-centred show-header scrolled showFooter :title="service.title">
      <template v-slot:default>
        <div class="text-center">
          <img :src="service.img" :alt="service.title">
          <p>{{ service.description }}</p>

        </div>
      </template>
      <template v-slot:footer>
        <div class="row">
          <div class="col-6">
            <h2>{{ service.price }}&nbsp;₽</h2>
          </div>
          <div class="col-6">
            <p class="navbar-link__in-button">
              <span @click="handleButtonClick(service.id)">
                Записаться
              </span>
            </p>
          </div>
        </div>
      </template>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from "@/components/UI/ModalWindow";
import { Modal } from "bootstrap";

export default {
  name: "ModalServiceInfo",
  data () {
    return {
      modal: null,
    };
  },
  mounted() {
    this.modal = new Modal('#ModalServiceInfo');
  },
  components: {
    ModalWindow,
  },
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleButtonClick(serviceId) {
      this.close();
      console.log('/services/appointment/' + serviceId);
      this.$router.push('/services/appointment/' + serviceId);
    },
    close() {
      this.modal.hide();
    },
  }
}
</script>

<style scoped lang="scss">
  .modal-register-login__link {
    cursor: pointer;
  }
</style>
