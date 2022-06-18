<template>
  <footer class="container footer">
    <div class="row">
      <div class="col-sm-12 col-lg-5">
        <ContactsBlock address phone email/>
      </div>
      <div class="col-sm-12 col-lg-7">
        <div class="row">
          <div class="col-sm-12 col-lg-7">
            <ContactsBlock opening_hours/>
            <p class="m-0">
              Мы в соцсетях
            </p>
            <p>
          <span class="footer__social-icon" v-for="social in socials" :key="social.name">
            <a :href="social.url" target="_blank">
              <img :src="social.icon_url" :alt="social.name">
            </a>
          </span>
            </p>
            <p class="footer__forum-item">
              <router-link class="navbar-link" to="/forum">
                Форум
              </router-link>
            </p>
          </div>
          <div class="col-sm-12 col-lg-5 text-center">
            <img class="footer__logo" src="@/assets/big_logo.png" :alt="title">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-lg-6 footer__link-item">
            <a href="" target="_blank">
              Информация для владельцев
            </a>
          </div>
          <div class="col-sm-12 col-lg-6 footer__link-item">
            <a href="" target="_blank">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ContactsBlock from "@/components/ContactsBlock";
import {app} from "@/_config";

export default {
  name: "MainFooter",
  components: {
    ContactsBlock,
  },
  data () {
    return {
      socials: app.social,
    };
  },
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/utils/vars';

  .footer {
    margin-top: $header-footer-margin;
    min-height: $footer-height;
    background: linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%);
    border-radius: 30px 30px 0 0;
    padding: 40px 40px 10px 40px;
  }

  .footer__logo {
    max-width: 300px;
  }

  .footer__social-icon {
    margin-top: 10px;
    display: inline-block;
    margin-right: 17px;

    &:last-child {
      margin-right: 0;
    }
  }

  .footer__forum-item {
    width: fit-content;
    background-image: url('@/assets/svg/forum-btn.svg');
    background-size: contain;
    background-repeat: no-repeat;
    padding: 8px 20px;
  }

  .footer__link-item {
    a {
      color: $g-999;
      font-size: 20px;
    }
  }
</style>
