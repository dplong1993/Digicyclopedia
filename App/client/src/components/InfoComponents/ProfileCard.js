import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ProfileCardWrapper = styled.div`
  background-color: #fc6701;
  margin: 10px;
  width: 200px;
  height 300px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #fecc3d;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .info {
    align-self: center;
    display: flex;
    width: 80%;
    justify-content: center;
    height: 30px;
  }

  .name {
    align-self: center;
    font-size: 20px;
    font-weight: 20px;
  }

  .img {
    padding-top: 10px;
    align-self: center;
    width: 150px;
    height: 250px;
    cursor: pointer;
  }
`;

function ProfileCard(props) {
  let history = useHistory();

  const { item, type } = props;

  if (!item) {
    return null;
  }

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/${type}/${item.name}`);
  };

  return (
    <ProfileCardWrapper>
      <img
        onClick={handleClick}
        className="img"
        src={props.item.photo_url}
        alt={props.item.name}
      />
      <div className="info">
        {type === "media" ? null : (
          <div className="name">{props.item.name}</div>
        )}
      </div>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
