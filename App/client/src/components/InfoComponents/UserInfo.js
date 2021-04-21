import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../auth";
import styled from "styled-components";
import ModalInput from "./ModalInput";
import ProfileListView from "./ProfileListView";

const UserInfoWrapper = styled.div`
  .userInfoContainer {
    display: flex;
    width: 75%;
    background-color: white;
    margin: 20px auto 0px auto;
  }

  .profilePicture {
    width: 25%;
  }

  .userInfo {
    width: 75%;
    background-color: white;
  }

  .infoContainer {
    display: flex;
    width: 75%;
    margin: 25px auto 0px auto;
    color: black;
  }

  .inputLabel {
    width: 20%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    margin: 5px;
    border: 1px Solid black;
  }

  .userDetail {
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size 20px;
    margin: 5px;
    border: 1px Solid black;
  }

  .inputButton {
    width: 28%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 5px;
    border: 1px Solid black;
  }
`;

function UserInfo() {
  const { currentUserId } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [inputText, setInputText] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (user.username === "Ian")
      return window.alert(
        "Please don't try to change the info of the demo user account. If you want to experience this feature please create your own account."
      );
    const buttonStr = e.target.innerText;
    const strArr = buttonStr.split(" ");
    strArr[1] === "Email" ? setInputType("email") : setInputType("text");
    setInputText(strArr[1]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/${currentUserId}`);
      const responseData = await response.json();
      setUser(responseData.user);
    }

    fetchUser();
  }, [currentUserId, showModal]);

  if (!user) {
    return null;
  }

  return (
    <UserInfoWrapper>
      <div className="userInfoContainer">
        {showModal ? (
          <ModalInput text={inputText} type={inputType} close={closeModal} />
        ) : null}
        <img className="profilePicture" src={user.photo_url} alt="Profile" />
        <div className="userInfo">
          <div className="infoContainer">
            <label className="inputLabel" htmlFor="username">
              Username
            </label>
            <div id="username" className="userDetail">
              {user.username}
            </div>
            <button className="inputButton" onClick={handleClick}>
              Update Username
            </button>
          </div>
          <div className="infoContainer">
            <label className="inputLabel" htmlFor="email">
              Email
            </label>
            <div id="email" className="userDetail">
              {user.email}
            </div>
            <button className="inputButton" onClick={handleClick}>
              Update Email
            </button>
          </div>
        </div>
      </div>
      <div className="favorites">
        <ProfileListView digimon={user.fav_digimon} media={user.fav_media} />
      </div>
    </UserInfoWrapper>
  );
}

export default UserInfo;
