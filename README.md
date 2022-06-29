# friendisnear.ru

# Ветклиника и ветаптека «Друг рядом»

Проект, созданный в рамках дисциплины "Языки и методы программирования"
студентами второго курса Волжского филиала ВолГУ.

Авторы:

* **Остапчук Анастасия** - *ПМИ-201*
* **Ушакова Маргарита** - *ПМИ-202*

Также есть [ссылка на работающий сайт](https://friendisnear.herokuapp.com).

Требования к проекту:

| №    | Описание                                                                                                                                                                                              |           Баллы            | Что сделано                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.   | Платформа, на которой требуется реализовать серверную часть – NodeJS + Express                                                                                                                        |             5              | :white_check_mark: (было в предыдущих версиях, см. коммиты)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.   | Клиентская часть реализуется на базе VueJS                                                                                                                                                            | 5 за одно приложение VueJS | Компоненты:<br><ul><li>MainHeader</li><li>MainFooter</li><li>ContactsBlock</li><li>PageMain</li><li>PageMain_Part_1</li><li>PageMain_Part_2</li><li>PageDoctors</li><li>PageDoctors_Block</li><li>PageDiscounts</li><li>PageDiscounts_Part_1</li><li>PageDiscounts_Part_2</li><li>PageContacts</li><li>PageAbout</li><li>PageAbout_Part_1</li><li>PageAbout_Slider</li><li>PageError_404</li><li>PageInfo</li><li>PagePrivacyPolicy</li><li>BreadCrumbs</li><li>ModalWindow</li><li>ModalRegisterLogin</li><li>PageRegister</li><li>PageAuthorization</li><li>UIForm</li><li>UIFormInput</li><li>PageServices</li><li>ServicesBlock</li><li>ModalServiceInfo</li><li>PageAppointment</li></ul> |
| 3.   | Система регистрации, аутентификации и авторизации пользователей.                                                                                                                                      |             10             | 50 %<br /> Сделано на строне клиента                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.   | Аутентификация через социальные сети – по желанию, с добавлением баллов                                                                                                                               |             10             | 50 %<br /> Сделано на строне клиента                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5.   | Личный кабинет или профиль пользователя                                                                                                                                                               |             10             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 6.   | Загрузка файлов на сервер: изображения, документы, данные и т. п.                                                                                                                                     |    5 за один тип файлов    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 7.   | Система хранения данных на сервере, база данных                                                                                                                                                       |             10             | :white_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 8.   | Поисковая система по данным на сервере                                                                                                                                                                |             15             | :white_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9.   | Панель администратора                                                                                                                                                                                 |             15             | :white_check_mark: [/admin](https://friendisnear.herokuapp.com/admin).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 10.  | Элементы дизайна: <br><ul><li>«хлебные крошки»</li><li>меню сайта</li><li>диалоговые окна</li><li>«карусель»</li><li>хранение cookies значений и использование их в отображении на странице</li></ul> |  3 балла за один элемент   | <ul><li> :white_check_mark: «хлебные крошки»</li><li> :white_check_mark: меню сайта</li><li> :white_check_mark: диалоговые окна</li><li> :white_check_mark: «карусель»</li><li> :white_check_mark: хранение cookies значений и использование их в отображении на странице (для токена - проверка на авторизацию)</li></ul>                                                                                                                                                                                                                                                                                                                                                                     |
| 11.  | Внутрисайтовый мессенджер или форум                                                                                                                                                                   |             15             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 12.  | Основной функционал сервиса                                                                                                                                                                           |             30             | :white_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

---

## Чтобы установить
```
npm install
```

### Компиляция и горячая перезагрузка для разработки
```
npm run serve
```

### Компиляция и минимизация для продакшена
```
npm run build
```

### Проверка и исправление ошибок
```
npm run lint
```

### Настройка конфигурации
Смотри [Configuration Reference](https://cli.vuejs.org/config/).

---

# Veterinary clinic and veterinary pharmacy "Friend near"

A project created within the framework of the discipline "Programming Languages and Methods"
by second-year students of the Volzhsky branch of Volga State University.

Authors:

* **Anastasiia Ostapchuk** - *PMI-201*
* **Ushakova Margarita** - *PMI-202*

There is also [a link to a working website](https://friendisnear.herokuapp.com).

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
