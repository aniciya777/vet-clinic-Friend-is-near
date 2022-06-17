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
