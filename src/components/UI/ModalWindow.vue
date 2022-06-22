<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      :class="{
        'modal-dialog': true,
        'modal-dialog-centered': verticalCentred,
        'modal-dialog-scrollable': scrolled,
      }"
    >
      <div class="modal-content">
        <div :class="{'modal-header': showHeader, 'modal-header-stealth': !showHeader}">
          <h5 v-if="showHeader" class="modal-title" :id="`${id}Label`">{{ title }}</h5>
          <p v-else class="m-0"></p>
          <button
            v-if="showCloseIcon"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >{{ icon }}</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="showFooter" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    showCloseIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    showHeader: {
      type: Boolean,
      required: false,
      default: false,
    },
    showFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
    verticalCentred: {
      type: Boolean,
      required: false,
      default: false,
    },
    scrolled: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
}
</script>

<style scoped>

</style>
