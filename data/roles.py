from .db_session import SqlAlchemyBase
import sqlalchemy


class Roles(SqlAlchemyBase):
    __tablename__ = 'roles'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    title = sqlalchemy.Column(sqlalchemy.String, unique=True, nullable=False)
    index = sqlalchemy.Column(sqlalchemy.Integer, nullable=False, default=0)

    def __str__(self):
        return self.title

    def __repr__(self):
        return f'<Roles {self.id} "{self.title}" {self.index}>'
