import React, { useState, useContext, useEffect } from 'react';
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

  useEffect(() => {
    function checkFavs() {
      if(item && favItems){
        if(!favorite && favItems.includes(item.name)){
          //Not marked as favorite but in favList so need to mark.
          setFavorite(true);
        }
        if(favorite && !favItems.includes(item.name)){
          //Marked as favorite but is not in the favList so need to unmark.
          setFavorite(false)
        }
      }
    };
    checkFavs();
    // eslint-disable-next-line
  }, [item, favItems]);

  if(!props.item){
    return null
  }

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
    if(favItems) setFavItems([...favItems, item.name])
    else setFavItems([item.name])
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
    const idx = favItems.indexOf(item.name);
    setFavItems([...favItems.slice(0, idx), ...favItems.slice(idx+1)])
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

  return (
    <CardWrapper>
      <img onClick={handleClick} className="img" src={props.item.photo_url} alt={props.item.name}/>
      <div className="info">
        {type === 'media' ? null :
        <div className="name">{props.item.name}</div>}
        {favorite ? <FontAwesomeIcon onClick={handleFavClick} className="icon" icon={fasHeart} />
        : <FontAwesomeIcon onClick={handleFavClick} className="icon" icon={farHeart} />
        }
      </div>
    </CardWrapper>
  )
}

export default Card;
