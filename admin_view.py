from flask_admin.contrib.sqla import ModelView
from flask_login import current_user
from flask import redirect


class AdminModelView(ModelView):
    def is_accessible(self):
        return True
        # return current_user.is_authenticated and \
        #        current_user.role.index >= 1000

    def inaccessible_callback(self, name, **kwargs):
        # redirect to login page if user doesn't have access
        return redirect('/')


class UserAdminModelView(AdminModelView):
    excluded_list_columns = ('hashed_password')
    form_excluded_columns = ('hashed_password')
    column_list = ('id', 'fullname', 'role', 'email', 'phone', 'animalsNames', 'created_date')
    column_labels = dict(
        fullname='Фамилия Имя',
        role='Роль',
        email='E-mail',
        phone='Телефон',
        animalsNames='Кличка(и) животного(ых)',
        hashed_password='MD5-хэш пароля',
        created_date='Дата и время регистрации'
    )


class NoUsersAdminModelView(AdminModelView):
    excluded_list_columns = ('users',)
    form_excluded_columns = ('users',)


class RoleAdminModelView(NoUsersAdminModelView):
    column_labels = dict(
        title='Название',
        index='Уровень',
    )
    column_descriptions = dict(
        index='чем выше - тем больше привелегий'
    )


class ServicesAdminModelView(NoUsersAdminModelView):
    column_list = ('id', 'title', 'description', 'price', 'img')
    column_labels = dict(
      title='Название',
      description='Описание',
      price='Стоимость',
      img='URL изображения',
    )
    column_descriptions = dict(
      index='чем выше - тем больше привелегий'
    )
