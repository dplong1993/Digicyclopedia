from . import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

favorite_digimon = db.Table(
    "favorite_digimon",
    db.Model.metadata,
    db.Column("digimon_id", db.Integer, db.ForeignKey("digimon.id"), primary_key=True),
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
)

favorite_media = db.Table(
    "favorite_media",
    db.Model.metadata,
    db.Column("media_id", db.Integer, db.ForeignKey("media.id"), primary_key=True),
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_digest = db.Column(db.String(255), nullable=False)
    photo_url = db.Column(db.String, nullable=False)

    fav_digimon = db.relationship("Digimon", secondary="favorite_digimon", back_populates="users")
    fav_media = db.relationship("Media", secondary="favorite_media", back_populates="users")

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "photo_url": self.photo_url,
          "fav_digimon": [{"id": digimon.id,
                           "name": digimon.name,
                           "level": digimon.level,
                           "previous_form": digimon.previous_form,
                           "next_form": digimon.next_form,
                           "bio": digimon.bio,
                           "photo_url": digimon.photo_url
                           } for digimon in self.fav_digimon],
         "fav_media": [{"id": media.id,
                        "name": media.name,
                        "type": media.type,
                        "bio": media.bio,
                        "photo_url": media.photo_url
                        } for media in self.fav_media]
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
