import React from 'react';
import styled from 'styled-components';
import InfoPair from './InfoPair';

const InfoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-right: 20px;
  width: 30%;
  height: 80%;
  font-family: Arial, sans-serif;

  .name{
    background-color: #FFA040;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  .img{
    width: 100%;
    height: 50%;
  }
`;

const InfoContainer = (props) => {
  const {item, type} = props;


  return (
    <InfoContainerWrapper>
      <div className="name">{item.name}</div>
      <img className="img" src={item.photo_url} alt={item.name} />
      {type === 'digimon' ?
      <>
      <InfoPair label="Level" data={item.level} />
      <InfoPair label="Previous Forms" data={item.previous_form ?
          item.previous_form.map((prev, idx) => <a key={idx} href={`/digimon/${prev}`}>{prev}</a>)
          : null} />
      <InfoPair label="Next Forms" data={item.next_form ?
          item.next_form.map((next, idx) => <a key={idx} href={`/digimon/${next}`}>{next}</a>)
          : null} />
      </>
      : <InfoPair label="Media Type" data={item.type} />}
    </InfoContainerWrapper>
  )
}

export default InfoContainer;
