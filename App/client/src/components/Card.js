import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';

const CardWrapper = styled.div`
  background-color: #fc6701;
  margin: 10px;
  width: 27%;
  height 90%;
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
    align-self: center;
    width: 80%;
    height: 90%;
    cursor: pointer;
  }

  .icon {
    margin-left: 5px;
    align-self: center;
    cursor: pointer;
    width: 50px;
    height: 30px;
  }
`;

function Card(props) {
  let history = useHistory();
  const [favorite, setFavorite] = useState(false);

  if(!props.item){
    return null
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.item.name);
    history.push(`/${props.type}/${props.item.name}`);
  }

  const handleFavClick = e => {
    e.preventDefault();
    setFavorite(!favorite);
  }

  return (
    <CardWrapper>
      <img onClick={handleClick} className="img" src={props.item.photo_url} alt={props.item.name}/>
      <div className="info">
        <div className="name">{props.item.name}</div>
        {favorite ? <FontAwesomeIcon onClick={handleFavClick} className="icon" icon={fasHeart} />
        : <FontAwesomeIcon onClick={handleFavClick} className="icon" icon={farHeart} />
        }
      </div>
    </CardWrapper>
  )
}

export default Card;
