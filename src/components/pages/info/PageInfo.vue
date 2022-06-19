<template>
  <div class="container main-container">
    <div class="row">
        <h1>
          {{ title }}
        </h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageInfo",
  data () {
    return {
      title: "Информация для владельцев",
    };
  },
}
</script>

<style scoped lang="scss">

</style>
