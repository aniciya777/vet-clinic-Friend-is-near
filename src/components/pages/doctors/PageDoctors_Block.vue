<template>
  <div class="container main-container">
    <div class="row">
      <h1>
        {{ title }}
      </h1>
    </div>
    <div class="row doctor-component" v-for="item in items" :key="item.id">
      <div :class="{'col-lg-8': showDiploma, 'col-sm-12': showDiploma, 'col-12': !showDiploma}">
        <div class="row align-items-center h-100">
          <div class="col-xl-4 col-md-6 col-sm-12 text-center">
            <p class="doctor-component__doctor-avatar text-center">
              <img :src="item.avatar[250]" :alt="item.full_name">
            </p>
          </div>
          <div class="col-xl-8 col-md-6 col-sm-12">
            <p class="m-0">
              {{ item.full_name }}
            </p>
            <p>
              {{ item.post }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="showDiploma" class="col-lg-4 col-sm-12 text-center h-100">
        <a :href="item.diploma.orig" target="_blank">
          <img :src="item.diploma[400]" :alt="item.full_name + ' - диплом'">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageDoctors_Block",
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    showDiploma: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

<style scoped lang="scss">
  .doctor-component {
    margin-bottom: 35px;
  }

  .doctor-component__doctor-avatar, .doctor-component__doctor-avatar img {
    width: 250px;
    height: 250px;
  }

  .doctor-component__doctor-avatar {
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;

    img {
      object-fit: cover;
    }
  }
</style>
