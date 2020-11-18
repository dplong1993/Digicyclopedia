from flask import Blueprint, jsonify, request
from starter_app.models import User, Digimon, Media, db
from flask_login import current_user, login_required, login_user

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/<int:id>')
@login_required
def get_user(id):
    user = User.query.get(id)
    return {"user": user.to_dict()}

@user_routes.route('/<int:id>', methods=["POST"])
@login_required
def update_user(id):
    type, input = request.json.values()
    user = User.query.get(id)
    try:
        if type == 'email':
            user.email = input
        else:
            user.username = input
        db.session.add(user)
        db.session.commit()
        return {"msg": "Update complete!"}
    except:
        return {"errors": ["Invalid Input"]}, 400

@user_routes.route('/<int:id>/fav_digimon')
@login_required
def get_fav_digimon(id):
    user = User.query.get(id)
    digimon = [d.name for d in user.fav_digimon]
    # print("==============", digimon)
    return {"data": digimon}

@user_routes.route('/<int:id>/fav_digimon', methods=["POST"])
@login_required
def update_fav_digimon(id):
    digimonId = request.json.values()
    digimon = Digimon.query.get(digimonId)
    user = User.query.get(id)
    try:
        user.fav_digimon.append(digimon)
        db.session.add(user)
        db.session.commit()
        return {"msg": "Update complete!"}
    except:
        pass

@user_routes.route('/<int:id>/fav_digimon', methods=["DELETE"])
@login_required
def delete_fav_digimon(id):
    digimonId = request.json.values()
    digimon = Digimon.query.get(digimonId)
    user = User.query.get(id)
    try:
        user.fav_digimon.remove(digimon)
        db.session.add(user)
        db.session.commit()
        return {"msg": "Update complete!"}
    except:
        pass

@user_routes.route('/<int:id>/fav_media')
@login_required
def get_fav_media(id):
    user = User.query.get(id)
    media = [media.name for media in user.fav_media]
    # print("==============", digimon)
    return {"data": media}

@user_routes.route('/<int:id>/fav_media', methods=["POST"])
@login_required
def update_fav_media(id):
    mediaId = request.json.values()
    media = Media.query.get(mediaId)
    user = User.query.get(id)
    try:
        user.fav_media.append(media)
        db.session.add(user)
        db.session.commit()
        return {"msg": "Update complete!"}
    except:
        pass

@user_routes.route('/<int:id>/fav_media', methods=["DELETE"])
@login_required
def delete_fav_media(id):
    mediaId = request.json.values()
    media = Media.query.get(mediaId)
    user = User.query.get(id)
    try:
        user.fav_media.remove(media)
        db.session.add(user)
        db.session.commit()
        return {"msg": "Update complete!"}
    except:
        pass

@user_routes.route('/', methods=["POST"])
def createUser():
    username, email, password = request.json.values()
    user = User(username=username, email=email, password=password, photo_url="https://digicyclopedia.s3.us-east-2.amazonaws.com/UserImages/default-profile-icon-17.jpg")
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return {"current_user_id": current_user.id}
