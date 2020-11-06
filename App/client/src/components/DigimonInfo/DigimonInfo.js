import React from 'react';
import styled from 'styled-components';

const DigimonInfoWrapper = styled.div`
`;

function DigimonInfo(props) {
  if(!props.digimon){
    return null
  }

  return (
    <DigimonInfoWrapper>
      <div>
        <img src="https://digicyclopedia.s3.us-east-2.amazonaws.com/Argomon_(Fresh)_b.jpg" alt="Argomon(Baby)" />
      </div>
    </DigimonInfoWrapper>
  )
}

export default DigimonInfo;
