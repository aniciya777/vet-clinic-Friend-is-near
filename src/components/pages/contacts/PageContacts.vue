<template>
  <div class="container main-container">
    <div class="row">
        <h1>
          {{ title }}
        </h1>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <p>
          <iframe :src="map_url" class="map-component__map-frame" frameborder="0"></iframe>
        </p>
      </div>
      <div class="col-lg-6 col-sm-12">
        <ContactsBlock address phone email opening_hours />
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col">
        <p class="m-0">
          Внимание! Часы работы врачей уточняйте по телефону
          <a :href="`tel:${phone}`">
            {{ phone }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {app} from "@/_config";
import ContactsBlock from "@/components/ContactsBlock";

export default {
  name: "PageContacts",
  components: {
    ContactsBlock
  },
  data () {
    return {
      title: "Контакты",
      map_url: app.addresses[0].yandex_map_code.iframe,
      phone: app.phones[0].phone_number,
    };
  },
}
</script>

<style scoped lang="scss">
  .map-component__map-frame {
    width: 100%;
    min-height: 422px;
  }
</style>
