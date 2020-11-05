from flask import Blueprint, jsonify, request
from starter_app.models import Digimon, db
from flask_login import current_user, login_required, login_user

digimon_routes = Blueprint('digimon', __name__)


@digimon_routes.route('/')
@login_required
def index():
    response = Digimon.query.all()
    return {"digimon": [digimon.to_dict() for digimon in response]}


# @user_routes.route('/<int:id>', methods=['GET', 'POST'])
# def user_detail(id):
#     return {}


# @user_routes.route('/', methods=["POST"])
# def createUser():
#     username, email, password = request.json.values()
#     user = User(username=username, email=email, password=password)
#     db.session.add(user)
#     db.session.commit()
#     login_user(user)
#     return {"current_user_id": current_user.id}
