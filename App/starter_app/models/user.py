from . import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_digest = db.Column(db.String(255), nullable=False)
    photo_url = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "photo_url": self.photo_url
        }

    @property
    def password(self):
        raise AttributeError('Password not readable.')

    @password.setter
    def password(self, password):
        self.password_digest = generate_password_hash(password)

    @classmethod
    def authenticate(cls, username, password):
        user = cls.query.filter(User.username == username).scalar()
        return check_password_hash(user.password_digest, password), user
