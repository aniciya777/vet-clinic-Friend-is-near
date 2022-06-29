from .db_session import SqlAlchemyBase
import sqlalchemy
from sqlalchemy_serializer import SerializerMixin


class Services(SqlAlchemyBase, SerializerMixin):
    __tablename__ = 'services'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    title = sqlalchemy.Column(sqlalchemy.String, unique=True, nullable=False)
    description = sqlalchemy.Column(sqlalchemy.Text, nullable=False, default='')
    price = sqlalchemy.Column(sqlalchemy.DECIMAL(12, 2), nullable=False, default=0.0)
    img = sqlalchemy.Column(sqlalchemy.String, nullable=True)

    def __str__(self):
        return self.title


