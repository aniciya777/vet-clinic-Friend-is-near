<template>
  <ModalWindow id="ModalServiceInfo" showCloseIcon vertical-centred title="s">
    <div class="text-center">

      <br>
    </div>
  </ModalWindow>
</template>

<script>
import ModalWindow from "@/components/UI/ModalWindow";
import {Modal} from 'bootstrap';

export default {
  name: "ModalServiceInfo",
  components: {
    ModalWindow,
  },
  mounted () {
    this.modal = new Modal('#ModalServiceInfo');
  },
  methods: {
    close() {
      this.modal.hide();
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-register-login__link {
    cursor: pointer;
  }
</style>
