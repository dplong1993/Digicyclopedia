from flask import Blueprint, jsonify, request
from starter_app.models import Digimon, db
from flask_login import current_user, login_required, login_user

digimon_routes = Blueprint('digimon', __name__)


@digimon_routes.route('/')
@login_required
def index():
    response = Digimon.query.all()
    return {"data": [digimon.to_dict() for digimon in response]}

@digimon_routes.route('/baby/')
@login_required
def fetchBaby():
    response = Digimon.query.filter(Digimon.level == 'Baby').all()
    return {"data": [digimon.to_dict() for digimon in response]}

@digimon_routes.route('/in-training/')
@login_required
def fetchInTraining():
    response = Digimon.query.filter(Digimon.level == 'In-Training').all()
    return {"data": [digimon.to_dict() for digimon in response]}

@digimon_routes.route('/rookie/')
@login_required
def fetchRookie():
    response = Digimon.query.filter(Digimon.level == 'Rookie').all()
    return {"data": [digimon.to_dict() for digimon in response]}

@digimon_routes.route('/champion/')
@login_required
def fetchChampion():
    response = Digimon.query.filter(Digimon.level == 'Champion').all()
    return {"data": [digimon.to_dict() for digimon in response]}

@digimon_routes.route('/ultimate/')
@login_required
def fetchUltimate():
    response = Digimon.query.filter(Digimon.level == 'Ultimate').all()
    return {"data": [digimon.to_dict() for digimon in response]}

@digimon_routes.route('/mega/')
@login_required
def fetchMega():
    response = Digimon.query.filter(Digimon.level == 'Mega').all()
    return {"data": [digimon.to_dict() for digimon in response]}


@digimon_routes.route('/<string:name>/')
@login_required
def fetchDigimonByName(name):
    response = Digimon.query.filter(Digimon.name == name).one()
    return {"data": [response.to_dict()]}
