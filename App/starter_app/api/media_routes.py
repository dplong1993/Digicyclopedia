from flask import Blueprint, jsonify, request
from starter_app.models import Digimon, db
from flask_login import current_user, login_required, login_user

media_routes = Blueprint('media', __name__)

@media_routes.route('/')
@login_required
def index():
    response = Media.query.all()
    return {"data": [thing.to_dict() for thing in response]}

@media_routes.route('/tv-show/')
@login_required
def fetchTvShow():
    response = Media.query.filter(Media.type == 'Tv-Show').all()
    return {"data": [thing.to_dict() for thing in response]}

@media_routes.route('/movies/')
@login_required
def fetchMovies():
    response = Media.query.filter(Media.type == 'Movie').all()
    return {"data": [thing.to_dict() for thing in response]}

@media_routes.route('/video-games/')
@login_required
def fetchVideoGames():
    response = Media.query.filter(Media.type == 'Video-Game').all()
    return {"data": [thing.to_dict() for thing in response]}

@media_routes.route('/ccgs/')
@login_required
def fetchCCGS():
    response = Media.query.filter(Media.type == 'CCG').all()
    return {"data": [thing.to_dict() for thing in response]}

# @media_routes.route('/<string:name>/')
# @login_required
# def fetchDigimonByName(name):
#     response = Digimon.query.filter(Digimon.name == name).one()
#     return {"data": [response.to_dict()]}
