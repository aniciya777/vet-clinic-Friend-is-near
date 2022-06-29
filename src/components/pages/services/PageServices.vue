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
</template>

<script>
import ServicesBlock from "@/components/ServicesBlock";

export default {
  name: "PageServices",
  components: {
    ServicesBlock,
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
