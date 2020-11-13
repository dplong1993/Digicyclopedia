from . import db

class Media(db.Model):
  __tablename__ = 'media'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  type = db.Column(db.String, nullable=False)
  bio = db.Column(db.Text, nullable=False)
  photo_url = db.Column(db.String, nullable=False)

  users = db.relationship("User", secondary="favorite_media", back_populates="fav_media")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "type": self.type,
      "bio": self.bio,
      "photo_url": self.photo_url
    }
