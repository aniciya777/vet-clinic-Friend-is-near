<template>
  <div class="container main-container">
    <div class="row">
        <h1>
          {{ title }}
        </h1>
    </div>
    <div class="row">
      <ServicesBlock :hasSearch="true" />
    </div>
  </div>
  <ModalServiceInfo />
</template>

<script>
import ServicesBlock from "@/components/ServicesBlock";
import ModalServiceInfo from "@/components/UI/ModalServiceInfo";

export default {
  name: "PageServices",
  components: {
    ServicesBlock,
    ModalServiceInfo
  },
  data () {
    return {
      title: "Выберите услугу",
    };
  },
}
</script>

<style scoped lang="scss">

</style>
