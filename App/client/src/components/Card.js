import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fc6701;
  margin: 10px;
  width: 27%;
  height 90%;
  border-radius: 30px;
  border: 1px solid #fecc3d;
  display: flex;
  justify-content: center;
  cursor: pointer;

  .name {
    align-self: flex-end;
  }
`;

function Card(props) {
  if(!props.digimon){
    return null
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.digimon.name);
  }

  return (
    <CardWrapper onClick={handleClick}>
      <img src={props.photoUrl} alt={props.photoAlt}/>
      <div className="name">{props.digimon.name}</div>
    </CardWrapper>
  )
}

export default Card;
