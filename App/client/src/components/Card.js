import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fc6701;
  margin: 10px;
  width: 27%;
  height 90%;
  border-radius: 30px;
  border: 1px solid #fecc3d;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;

  .name {
    align-self: center;
  }

  .img {
    align-self: center;
    width: 80%;
    height: 90%;
  }
`;

function Card(props) {
  let history = useHistory();

  if(!props.item){
    return null
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.item.name);
    history.push(`/${props.type}/${props.item.name}`);
  }

  return (
    <CardWrapper onClick={handleClick}>
      <img className="img" src={props.item.photo_url} alt={props.item.name}/>
      <div className="name">{props.item.name}</div>
    </CardWrapper>
  )
}

export default Card;
