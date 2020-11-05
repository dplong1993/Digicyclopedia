from flask import Blueprint, jsonify, request
from starter_app.models import User, db
from flask_login import current_user, login_required, login_user

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/<int:id>', methods=['GET', 'POST'])
def user_detail(id):
    return {}


@user_routes.route('/', methods=["POST"])
def createUser():
    username, email, password = request.json.values()
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return {"current_user_id": current_user.id}
