from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .user import User
from .digimon import Digimon
from .media import Media
