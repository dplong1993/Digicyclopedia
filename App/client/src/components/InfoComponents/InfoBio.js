import React from 'react';
import styled from 'styled-components';

const InfoBioWrapper = styled.div`
  width: 60%;

  .bioContainer{
    width: 100%;
  }

  .bioHeader {
    margin: 0;
    border-bottom: 1px solid black;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
  }

  .bio {
    padding-left: 20px;
    font-family: Arial, sans-serif;
    font-size: 17px;
  }
`;

const InfoBio = (props) => {
  const { item } = props;

  return (
    <InfoBioWrapper>
      <div className="bioContainer">
        <div className="bioHeader">About {item.name}</div>
        <p className="bio">{item.bio}</p>
      </div>
    </InfoBioWrapper>
  )
}

export default InfoBio;
