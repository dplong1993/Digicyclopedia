import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../auth';
import styled from 'styled-components';

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

  label {
    width: 33%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    margin: 5px;
    border: 1px Solid black;
  }

  .userDetail {
    width: 33%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size 20px;
    margin: 5px;
    border: 1px Solid black;
  }

  button {
    width: 28%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 5px;
    border: 1px Solid black;
  }
`;

function UserInfo(props) {
  const {currentUserId} = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/${currentUserId}`);
      const responseData = await response.json();
      setUser(responseData.user);
    }

    fetchUser();
  }, [currentUserId]);

  if(!user){
    return null;
  }

  return (
    <UserInfoWrapper>
      <div className="userInfoContainer">
        <img className="profilePicture" src={user.photo_url} alt="Profile Picture" />
        <div className="userInfo">
          <div className="infoContainer">
            <label htmlFor="username">Username</label>
            <div id="username" className="userDetail">{user.username}</div>
            <button>Update Username</button>
          </div>
          <div className="infoContainer">
            <label htmlFor="email">Email</label>
            <div id="email" className="userDetail">{user.email}</div>
            <button>Update Email</button>
          </div>
        </div>
      </div>
    </UserInfoWrapper>
  )
}

export default UserInfo;
