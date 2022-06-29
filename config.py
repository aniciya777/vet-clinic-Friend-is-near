from data import db_session
from data.users import User
from data.roles import Roles
from data.services import Services


db_session.global_init("db/database.sqlite")
session = db_session.create_session()
HOST = '0.0.0.0'
PORT = 80
DEBUG = False
SECRET_KEY = 'friend'
REMEMBER_USER = True
FLASK_ADMIN_SWATCH = 'Spacelab'


def add_default_record(table, params):
    title = params['title']
    record = session.query(table).filter(table.title == title).first()
    if record:
      return False
    new_record = table(**params)
    session.add(new_record)
    session.commit()
    return True


def create_roles():
    add_default_record(Roles, {
      'title': 'Суперадминистратор',
      'index': 1000
    })
    add_default_record(Roles, {
      'title': 'Администратор',
      'index': 500
    })
    add_default_record(Roles, {
      'title': 'Пользователь',
      'index': 0
    })


def create_root():
  root_user = session.query(User).filter(User.email == 'root@root').first()
  if not root_user:
    root_user = User(
      email='root@root',
      phone='root',
      fullname='root',
      animalsNames='',
      role_id=1
    )
    root_user.set_password('root')
    session.add(root_user)
    session.commit()


create_roles()
create_root()
