from flask import Flask, render_template, Blueprint
import os
from flask_login import LoginManager
from flask_admin import Admin
from flask_babelex import Babel
from data import db_session
from waitress import serve
from config import *
from admin_view import *
from api import users_api, services_api

app = Flask(__name__, template_folder='dist')
app.config['SECRET_KEY'] = SECRET_KEY
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
admin = Admin(app, template_mode='bootstrap4', name='Панель администратора')
admin.add_view(UserAdminModelView(User, session, name='Пользователи'))
admin.add_view(RoleAdminModelView(Roles, session, name='Роли'))
admin.add_view(ServicesAdminModelView(Services, session, name='Услуги'))
babel = Babel(app)

vue_js_bp = Blueprint("vue_js_bp", __name__,
                      template_folder="dist",
                      static_folder="dist",
                      static_url_path="/"
                      )

@babel.localeselector
def get_locale():
  return 'ru'


@vue_js_bp.route('/')
def index():
  return render_template('index.html')


@login_manager.user_loader
def load_user(user_id):
  return session.query(User).get(user_id)


if __name__ == '__main__':
  port_run = int(os.environ.get("PORT", PORT))
  app.register_blueprint(vue_js_bp)
  app.register_blueprint(users_api.blueprint)
  app.register_blueprint(services_api.blueprint)
  if DEBUG:
    app.run(host=HOST, port=port_run, debug=DEBUG)
  else:
    serve(app, host=HOST, port=port_run)
