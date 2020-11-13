import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import AuthContext from '../auth';

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
  const {fetchWithCSRF, currentUserId} = useContext(AuthContext);

  const {item, type, favItems, setFavItems} = props;

  if(!props.item){
    return null
  }

  if(favItems.includes(item.name) && !favorite){
    //Not favorite is a check to see if we already made favorite true or not
    setFavorite(true);
  }
  // else if(!favItems.includes(item.name) && favorite){
  //   //A heart is check for a digimon that is not in the favItems list
  //   setFavorite(false);
  // }

  // if(!favItems.includes(item.name) && favorite){
  //   //Not favorite is a check to see if we already made favorite true or not
  //   setFavorite(false);
  // }

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/${type}/${item.name}`);
  }

  async function addFav(item) {
    const itemId = item.id;
    await fetchWithCSRF(`/api/users/${currentUserId}/fav_digimon`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            itemId
        })
    });
    // setFavItems([...favItems, item.name])
  }

  async function deleteFav(item) {
    const itemId = item.id;
    await fetchWithCSRF(`/api/users/${currentUserId}/fav_digimon`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            itemId
        })
    });
    // const idx = favItems.indexOf(item.name);
    // console.log("BEFORE SPLICE", favItems)
    // setFavItems(favItems.splice(idx, 1))
    // console.log("AFTER SPLICE", favItems)
  }

  const handleFavClick = e => {
    e.preventDefault();
    if(!favorite){
      //This means the fav button is going from not filled to filled
      addFav(item);
    } else {
      //The button is going from filled to not filled.
      deleteFav(item);
    }
    setFavorite(!favorite);
  }

  console.log("FAV ITEMS", favItems)
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
