<template>
  <div class="contact-component">
    <div class="contact-component__item" v-if="address">
      <p class="m-0">Адрес:</p>
      <p>
        {{ address_value }}
      </p>
    </div>
    <div class="contact-component__item" v-if="phone">
      <p class="m-0">Телефон:</p>
      <p>
        {{ phone_value }}
      </p>
    </div>
    <div class="contact-component__item" v-if="email">
      <p class="m-0">E-mail:</p>
      <p>
        {{ email_value }}
      </p>
    </div>
    <div class="contact-component__item" v-if="opening_hours">
      <p class="m-0">Режим работы:</p>
      <p>
        {{ opening_hours_value }}
      </p>
    </div>
  </div>
</template>

<script>
import {app} from "@/_config";

export default {
  name: "ContactsBlock",
  data() {
    return {
      address_value: app.addresses[0].address,
      phone_value: app.phones[0].phone_number,
      email_value: app.emails[0].email,
      opening_hours_value: app.addresses[0].opening_hours,
    };
  },
  props: {
    address: {
      default: false,
      type: Boolean,
    },
    phone: {
      default: false,
      type: Boolean,
    },
    email: {
      default: false,
      type: Boolean,
    },
    opening_hours: {
      default: false,
      type: Boolean,
    },
  }
}
</script>

<style scoped lang="scss">
  .contact-component__item {
    white-space: break-spaces;
  }
</style>
