from . import db

class Digimon(db.Model):
  __tablename__ = 'digimon'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  level = db.Column(db.String(40), nullable=False)
  previous_form = db.Column(db.ARRAY(db.String(50)))
  next_form = db.Column(db.ARRAY(db.String(50)))
  bio = db.Column(db.Text, nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "level": self.level,
      "previous_form": self.previous_form,
      "next_form": self.next_form
      "bio": self.bio
    }
