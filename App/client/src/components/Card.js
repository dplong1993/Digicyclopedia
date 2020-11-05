import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  .card {
    background-color: #fc6701;
    margin: 10px;
    width: 27%;
    height 90%;
    border-radius: 30px;
    border: 1px solid #fecc3d;
  }
`;

function Card(props) {

  return (
    <CardWrapper>
      <div className="card">
        <img src={props.photoUrl} alt={props.photoAlt}/>
        <div>{props.name}</div>
      </div>
    </CardWrapper>
  )
}

export default Card;
