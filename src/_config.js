export const process = {
  dev: true,
};

export const site = {
  site: process.dev ? "http://localhost:8080" : "https://friendisnear.herokuapp.com/",
};

export const app = {
  title: "Ветклиника и ветаптека «Друг рядом»",
  phones: [
    {
      name: "Основной",
      phone_number: "+7(XXX) XXX-XX-XX",
    }
  ],
  addresses: [
    {
      name: 'Основной',
      address: 'г.\xa0Волжский, ул.\xa0им.\xa0Генерала Карбышева, д.\xa0110, подъезд\xa06',
      opening_hours: "Ежедневно с 09.00 до 20.00\n" +
                     "Перерыв: 13.30 - 14.00",
      yandex_map_code: {
        iframe: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac23a75c2b9e0270353f7eb82e8ea20ac65059209bdb2744d2842c5127e77cd03&amp;source=constructor',
      },
    },
  ],
  emails: [
    {
      name: 'Основной',
      email: 'myemail@mail.ru',
    },
  ],
  social: {
    vk: {
      name: 'Вконтаке',
      url: 'https://vk.com/',
      icon_url: './assets/images/social/vk_orig_50.png',
    },
    whatsapp: {
      name: 'WhatsApp',
      url: 'https://www.whatsapp.com/?lang=ru',
      icon_url: './assets/images/social/whatsapp_50.png',
    }
  },
};

export const links = [
  {
    title: "Главная",
    alias: "home",
    url: "/"
  },
  {
    title: "Акции",
    alias: "discounts",
    url: "/discounts"
  },
  {
    title: "Магазин",
    alias: "shop",
    url: "/shop"
  },
  {
    title: "Врачи",
    alias: "doctors",
    url: "/doctors"
  },
  {
    title: "Услуги",
    alias: "services",
    url: "/services"
  },
  {
    title: "О клинике",
    alias: "about",
    url: "/about"
  },
  {
    title: "Контакты",
    alias: "contacts",
    url: "/contacts"
  },
  {
    title: "Личный кабинет",
    alias: "cabinet",
    url: "/cabinet",
    in_button: true,
  }
];
