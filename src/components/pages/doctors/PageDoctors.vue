<template>
  <PageDoctors_Block :items="managers.items" :title="managers.title" show-diploma />
  <PageDoctors_Block :items="doctors.items" :title="doctors.title" />
</template>

<script>
import PageDoctors_Block from "@/components/pages/doctors/PageDoctors_Block";
import {getClinicManagement} from "@/data/clinic_management";
import {getClinicDoctors} from "@/data/clinic_doctors";

export default {
  name: "PageDoctors",
  components: {
    PageDoctors_Block
  },
  data() {
    return {
      managers: {
        title: "Руководители",
        items: [],
      },
      doctors: {
        title: "Врачи",
        items: [],
      },
    };
  },
  beforeMount() {
    this.managers.items = getClinicManagement();
    this.doctors.items = getClinicDoctors();
  }
}
</script>

<style scoped lang="scss">

</style>
