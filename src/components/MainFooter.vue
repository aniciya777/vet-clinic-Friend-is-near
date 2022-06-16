<template>
  <footer class="container footer">
    <p>
      Footer
    </p>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/utils/vars';

  .footer {
    margin-top: $header-footer-margin;
    height: $footer-height;
    background: linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%);
    border-radius: 30px 30px 0 0;
    padding: 40px 40px 10px 40px;
  }
</style>