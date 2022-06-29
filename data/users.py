from .db_session import SqlAlchemyBase, orm
import sqlalchemy
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(SqlAlchemyBase, UserMixin):
    __tablename__ = 'users'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True,
                           autoincrement=True)
    fullname = sqlalchemy.Column(sqlalchemy.String, nullable=False)
    email = sqlalchemy.Column(sqlalchemy.String, index=True, unique=True,
                              nullable=False)
    phone = sqlalchemy.Column(sqlalchemy.String, index=True, unique=True,
                              nullable=False)
    animalsNames = sqlalchemy.Column(sqlalchemy.String, nullable=False)
    hashed_password = sqlalchemy.Column(sqlalchemy.String)
    created_date = sqlalchemy.Column(sqlalchemy.DateTime,
                                     default=datetime.datetime.now)
    role_id = sqlalchemy.Column(sqlalchemy.Integer,
                                sqlalchemy.ForeignKey("roles.id"),
                                nullable=False, default=3)
    role = orm.relation('Roles', backref='users')

    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def __str__(self):
        return self.login

    def __repr__(self):
        return f'<User {self.id} "{self.login}">'

    @property
    def created_date_format(self):
        return self.created_date.strftime("%d.%m.%Y")
